import { UserRole } from "@covound/db/types";
import { CLINICAL_STATUS } from "@covound/logic/persona";
import { Badge } from "@covound/ui/components/ui/badge";
import { Button } from "@covound/ui/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@covound/ui/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@covound/ui/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@covound/ui/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@covound/ui/components/ui/table";
import {
  AlertCircle,
  ChevronDown,
  Coins,
  Eye,
  EyeOff,
  Globe,
  Lock,
  LogIn,
  LogOut,
  Shield,
  ShieldCheck,
  Trophy,
} from "lucide-react";
import { useEffect, useState } from "react";
import type { MetaFunction } from "react-router";
import {
  Form,
  Link,
  useActionData,
  useFetcher,
  useLoaderData,
} from "react-router";
import { toast } from "sonner";
import { KYCModal } from "~/components/KYCModal";
import { prisma } from "~/db.server";
import { authClient } from "~/lib/auth.client";
import { auth } from "~/lib/auth.server";
import { getLanguage } from "~/lib/language.server";

export const meta: MetaFunction = () => [
  { title: "CoVound | Investigator" },
];

export async function loader({ request }: { request: Request }) {
  const [session, lang] = await Promise.all([
    auth.api.getSession({ headers: request.headers }),
    getLanguage(request),
  ]);

  if (!session) return { user: null, anomalies: [], lang };

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
  });

  if (user?.role !== UserRole.INVESTIGATOR) {
    throw new Response("Forbidden: Clinical Investigator Access Only", {
      status: 403,
    });
  }

  const anomalies = await prisma.anomalyReport.findMany({
    where: {
      OR: [
        { status: "PENDING" },
        { status: "false_positive" }, // Backward compatibility
      ],
    },
    include: {
      institution: true,
    },
    orderBy: { createdAt: "desc" },
  });

  // Fetch final diagnosis lookups in bulk
  const allDetectedNumbers = [
    ...new Set(anomalies.map((a: any) => a.detectedNumber)),
  ];
  const [globalWhitelist, globalBlacklist] = await Promise.all([
    prisma.verifiedContact.findMany({
      where: {
        OR: [
          { phone: { in: allDetectedNumbers } },
          { whatsapp: { in: allDetectedNumbers } },
          { domain: { in: allDetectedNumbers } },
        ],
      },
    }),
    prisma.anomalyReport.findMany({
      where: {
        detectedNumber: { in: allDetectedNumbers },
        status: "rejected",
      },
    }),
  ]);

  const whitelistSet = new Set(
    globalWhitelist.map((c: any) => c.phone || c.whatsapp || c.domain),
  );
  const blacklistSet = new Set(
    globalBlacklist.map((a: any) => a.detectedNumber),
  );

  // For each anomaly, compute clinical indicators and find related incidents
  const anomaliesWithContext = await Promise.all(
    anomalies.map(async (anomaly: any) => {
      const relatedIncidents = await prisma.incident.findMany({
        where: { scammerNumber: anomaly.detectedNumber },
        include: { evidence: true },
        take: 5,
      });

      const allEvidence = relatedIncidents.flatMap((inc: any) => inc.evidence);

      // Compute Clinical Indicators
      const source =
        anomaly.sourceUrl === "Reporter Portal" ? "Portal" : "Extension";
      const preDiagnosis =
        anomaly.severity === "LOW" || anomaly.status === "false_positive"
          ? "Legit Claimed"
          : "Scam Suspected";

      let diagnosis = "Awaiting Quorum";
      if (whitelistSet.has(anomaly.detectedNumber)) {
        diagnosis = "Verified Official";
      } else if (blacklistSet.has(anomaly.detectedNumber)) {
        diagnosis = "Board Confirmed Scam";
      } else if (anomaly.consensusCount >= 2) {
        diagnosis = "Awaiting Board";
      }

      return {
        ...anomaly,
        evidence: allEvidence,
        source,
        preDiagnosis,
        diagnosis,
      };
    }),
  );

  return { user, anomalies: anomaliesWithContext, lang };
}

export async function action({ request }: { request: Request }) {
  const session = await auth.api.getSession({ headers: request.headers });
  if (!session) throw new Response("Unauthorized", { status: 401 });

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
  });

  if (user?.role !== UserRole.INVESTIGATOR) {
    throw new Response("Forbidden: Clinical Investigator Access Only", {
      status: 403,
    });
  }

  const formData = await request.formData();
  const anomalyId = formData.get("anomalyId") as string;
  const intent = formData.get("intent");

  if (intent === "stake_verify") {
    const stakeAmount = 10;

    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
    });
    if (!user || user.reputationPoints < stakeAmount) {
      return { error: "Insufficient reputation points to stake." };
    }

    const existing = await prisma.anomalyVerification.findUnique({
      where: {
        anomalyId_investigatorId: {
          anomalyId,
          investigatorId: user.id,
        },
      },
    });

    if (existing) {
      return { error: "You have already triaged this anomaly." };
    }

    await prisma.$transaction([
      prisma.user.update({
        where: { id: user.id },
        data: { reputationPoints: { decrement: stakeAmount } },
      }),
      prisma.anomalyVerification.create({
        data: {
          anomalyId,
          investigatorId: user.id,
          stakedPoints: stakeAmount,
        },
      }),
      prisma.anomalyReport.update({
        where: { id: anomalyId },
        data: {
          consensusCount: { increment: 1 },
        },
      }),
    ]);

    return { success: true };
  }

  if (intent === "claim_reputation") {
    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      include: { anomalyVerifications: true },
    });

    if (!user) return { error: "User not found." };

    // Check if user has triaged at least one case in the last 24h
    const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
    const recentTriages = user.anomalyVerifications.filter(
      (v: any) => v.createdAt >= oneDayAgo,
    );

    if (recentTriages.length === 0) {
      return {
        error:
          "Complete at least one triage in the last 24 hours to claim your reward.",
      };
    }

    // Check if already claimed today
    if (user.lastClaimedAt && user.lastClaimedAt >= oneDayAgo) {
      return { error: "You have already claimed your daily reward." };
    }

    await prisma.user.update({
      where: { id: user.id },
      data: {
        reputationPoints: { increment: 50 },
        lastClaimedAt: new Date(),
      },
    });

    return { success: true };
  }

  return null;
}

export default function InvestigatorDashboard() {
  const { user, anomalies, lang: currentLang } = useLoaderData<typeof loader>();
  const _fetcher = useFetcher();
  const actionData = useActionData() as any;
  const [previewEvidence, setPreviewEvidence] = useState<any[] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isKycModalOpen, setIsKycModalOpen] = useState(false);

  const it = {
    en: {
      dashboardTitle: "Investigator Dashboard",
      dashboardDesc: "Protect the registry by diagnosing pending anomalies.",
      certifications: "Certifications",
      forensicResident: "Forensic Resident",
      reputation: "Reputation",
      getKyckPoints: "Get 5 Points by Verifying Identity",
      minPointsNote:
        "* To start the first investigation, at least you have to have 10 points.",
      dailyMission: "Daily Mission",
      dailyMissionDesc:
        "Submit consensus for pending anomalies to unlock your daily reputation bonus. Your clinical accuracy protects the registry.",
      rewardClaimed: "Reward Claimed",
      claimDailyBonus: "Claim Daily Bonus",
      pendingQueue: "Pending Triage Queue",
      pendingQueueDesc: "High-accuracy extraction from recent reporter reports.",
      entityAffected: "Entity Affected",
      specimen: "Specimen",
      source: "Source",
      preDiagnosis: "Pre-Diagnosis",
      diagnosis: "Diagnosis",
      quorumStatus: "Quorum Status",
      forensicEvidence: "Forensic Evidence",
      triageAction: "Triage Action",
      unverifiedBank: "Unverified Bank",
      preview: "Preview",
      diagnosisFinalized: "Diagnosis Finalized",
      deductPoints: "Deduct 10 pts & Sign",
      stakeAndSign: "Stake & Sign",
      caseClosed: "Case Closed",
      emptyQueue:
        "CoVounding reports the queue is clear. No pending anomalies found.",
      sanitizedForensicEvidence: "Sanitized Forensic Evidence",
      piiRedacted: "PII has been permanently redacted via AI extraction.",
      showingArtifacts: "Showing {count} artifact(s).",
      evidenceUnavailable: "Evidence unavailable or fully redacted",
      artifactCounter: "Artifact {current} of {total}",
      sanitizedArtifacts: "Sanitized Artifacts",
      confidentialTriageOnly: "Confidential: Triage Only",
      opSuccessful: "Operation successful",
      restrictedTitle: "Restricted Access",
      restrictedDesc: "Only verified investigators can access the triage feed.",
      restrictedBtn: "Login to Verify",
      downloadFirewall: "Download Firewall",
    },
    id: {
      dashboardTitle: "Dashboard Investigator",
      dashboardDesc: "Lindungi registri dengan mendiagnosis anomali yang tertunda.",
      certifications: "Sertifikasi",
      forensicResident: "Residen Forensik",
      reputation: "Reputasi",
      getKyckPoints: "Dapatkan 5 Poin dengan Verifikasi Identitas",
      minPointsNote:
        "* Untuk memulai investigasi pertama, Anda harus memiliki setidaknya 10 poin.",
      dailyMission: "Misi Harian",
      dailyMissionDesc:
        "Kirim konsensus untuk anomali tertunda untuk membuka bonus reputasi harian Anda. Akurasi klinis Anda melindungi registri.",
      rewardClaimed: "Hadiah Diklaim",
      claimDailyBonus: "Klaim Bonus Harian",
      pendingQueue: "Antrean Triase Tertunda",
      pendingQueueDesc: "Ekstraksi akurasi tinggi dari laporan pelapor terbaru.",
      entityAffected: "Entitas Terdampak",
      specimen: "Spesimen",
      source: "Sumber",
      preDiagnosis: "Pre-Diagnosis",
      diagnosis: "Diagnosis",
      quorumStatus: "Status Kuorum",
      forensicEvidence: "Bukti Forensik",
      triageAction: "Tindakan Triase",
      unverifiedBank: "Bank Tidak Terverifikasi",
      preview: "Pratinjau",
      diagnosisFinalized: "Diagnosis Final",
      deductPoints: "Potong 10 poin & Tanda Tangan",
      stakeAndSign: "Stake & Tanda Tangan",
      caseClosed: "Kasus Ditutup",
      emptyQueue:
        "CoVounding melaporkan antrean bersih. Tidak ada anomali tertunda.",
      sanitizedForensicEvidence: "Bukti Forensik Tersanitasi",
      piiRedacted: "PII telah dihapus secara permanen melalui ekstraksi AI.",
      showingArtifacts: "Menampilkan {count} artefak.",
      evidenceUnavailable: "Bukti tidak tersedia atau terhapus sepenuhnya",
      artifactCounter: "Artefak {current} dari {total}",
      sanitizedArtifacts: "Artefak Tersanitasi",
      confidentialTriageOnly: "Rahasia: Hanya untuk Triase",
      opSuccessful: "Operasi berhasil",
      restrictedTitle: "Akses Terbatas",
      restrictedDesc:
        "Hanya investigator terverifikasi yang dapat mengakses feed triase.",
      restrictedBtn: "Masuk untuk Verifikasi",
      downloadFirewall: "Unduh Firewall",
    },
  }[currentLang as "en" | "id"] || {
    dashboardTitle: "Dashboard Investigator",
    dashboardDesc: "Lindungi registri dengan mendiagnosis anomali yang tertunda.",
    certifications: "Sertifikasi",
    forensicResident: "Residen Forensik",
    reputation: "Reputasi",
    getKyckPoints: "Dapatkan 5 Poin dengan Verifikasi Identitas",
    minPointsNote:
      "* Untuk memulai investigasi pertama, Anda harus memiliki setidaknya 10 poin.",
    dailyMission: "Misi Harian",
    dailyMissionDesc:
      "Kirim konsensus untuk anomali tertunda untuk membuka bonus reputasi harian Anda. Akurasi klinis Anda melindungi registri.",
    rewardClaimed: "Hadiah Diklaim",
    claimDailyBonus: "Klaim Bonus Harian",
    pendingQueue: "Antrean Triase Tertunda",
    pendingQueueDesc: "Ekstraksi akurasi tinggi dari laporan pelapor terbaru.",
    entityAffected: "Entitas Terdampak",
    specimen: "Spesimen",
    source: "Sumber",
    preDiagnosis: "Pre-Diagnosis",
    diagnosis: "Diagnosis",
    quorumStatus: "Status Kuorum",
    forensicEvidence: "Bukti Forensik",
    triageAction: "Tindakan Triase",
    unverifiedBank: "Bank Tidak Terverifikasi",
    preview: "Pratinjau",
    diagnosisFinalized: "Diagnosis Final",
    deductPoints: "Potong 10 poin & Tanda Tangan",
    stakeAndSign: "Stake & Tanda Tangan",
    caseClosed: "Kasus Ditutup",
    emptyQueue: "CoVounding melaporkan antrean bersih. Tidak ada anomali tertunda.",
    sanitizedForensicEvidence: "Bukti Forensik Tersanitasi",
    piiRedacted: "PII telah dihapus secara permanen melalui ekstraksi AI.",
    showingArtifacts: "Menampilkan {count} artefak.",
    evidenceUnavailable: "Bukti tidak tersedia atau terhapus sepenuhnya",
    artifactCounter: "Artefak {current} dari {total}",
    sanitizedArtifacts: "Artefak Tersanitasi",
    confidentialTriageOnly: "Rahasia: Hanya untuk Triase",
    opSuccessful: "Operasi berhasil",
    restrictedTitle: "Akses Terbatas",
    restrictedDesc:
      "Hanya investigator terverifikasi yang dapat mengakses feed triase.",
    restrictedBtn: "Masuk untuk Verifikasi",
    downloadFirewall: "Unduh Firewall",
  };

  useEffect(() => {
    if (actionData?.error) {
      toast.error(actionData.error);
    } else if (actionData?.success) {
      toast.success(it.opSuccessful);
    }
  }, [actionData, it.opSuccessful]);

  const handleOpenPreview = (evidence: any[]) => {
    setPreviewEvidence(evidence);
    setCurrentImageIndex(0);
  };

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          window.location.reload();
        },
      },
    });
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-slate-100 font-sans">
        <Card className="max-w-md w-full text-center p-8 shadow-xl rounded-[2rem] border-slate-200 bg-white">
          <div className="flex justify-center mb-6">
            <div className="h-20 w-20 bg-slate-100 text-slate-400 rounded-2xl flex items-center justify-center shadow-inner">
              <Lock className="h-10 w-10" />
            </div>
          </div>
          <CardHeader className="p-0 mb-6">
            <CardTitle className="text-3xl font-black mb-2 text-slate-900">
              {it.restrictedTitle}
            </CardTitle>
            <CardDescription className="text-base font-medium text-slate-500 leading-relaxed px-4">
              {it.restrictedDesc}
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <Button
              asChild
              className="w-full h-14 text-lg font-black rounded-xl bg-slate-900 hover:bg-slate-800 text-white shadow-lg shadow-slate-900/20 transition-all active:scale-[0.98]"
            >
              <Link
                to="/login?role=INVESTIGATOR"
                className="flex items-center justify-center gap-2"
              >
                <LogIn className="h-5 w-5" />
                {it.restrictedBtn}
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const isKycVerified = !!user.isKycVerified;

  // Calculate daily mission status
  const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
  const alreadyClaimed = user.lastClaimedAt
    ? new Date(user.lastClaimedAt) >= oneDayAgo
    : false;

  const userBadges = JSON.parse(user.badges || "[]");

  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="flex items-center gap-2 text-slate-900 font-bold text-lg tracking-tight hover:opacity-80 transition-opacity"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-white shadow-md">
                <Shield className="h-4 w-4" />
              </div>
              <span className="hidden sm:inline">CoVounding</span>
            </Link>
            <div className="h-5 w-px bg-slate-300 mx-1"></div>
            <span className="text-slate-500 font-semibold tracking-wide">
              Investigator
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="hidden lg:flex items-center gap-2 font-bold border-2 border-emerald-100 text-emerald-700 hover:bg-emerald-50 rounded-lg transition-all"
            >
              <Link to="https://chrome.google.com/webstore/detail/voundism-placeholder">
                <Shield className="h-4 w-4" />
                {it.downloadFirewall}
              </Link>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="font-bold border-2 border-slate-200 hover:border-slate-900 rounded-lg transition-all flex items-center gap-2"
                >
                  <div className="h-5 w-5 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px]">
                    {user.name[0]}
                  </div>
                  <span className="hidden sm:inline">
                    {user.name.split(" ")[0]}
                  </span>
                  <ChevronDown className="h-3 w-3 opacity-50" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-48 p-1 rounded-xl shadow-2xl border-slate-200"
              >
                <DropdownMenuItem
                  onClick={handleLogout}
                  className="rounded-lg py-2 font-medium cursor-pointer text-red-600 focus:bg-red-50 focus:text-red-700"
                >
                  <div className="flex items-center gap-2">
                    <LogOut className="h-4 w-4" />
                    Logout
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>

      <div className="p-4 md:p-8 max-w-6xl mx-auto space-y-8">
        <header>
          <h1 className="text-3xl font-black tracking-tight text-slate-900">
            {it.dashboardTitle}
          </h1>
          <p className="text-slate-500 font-medium">{it.dashboardDesc}</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="rounded-[2rem] border-2 border-slate-100 shadow-sm bg-white overflow-hidden relative">
            <CardHeader className="pb-2">
              <CardTitle className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                <Trophy className="h-3 w-3" />
                {it.certifications}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-1.5 items-center z-10 relative">
                {userBadges.map((badge: string) => (
                  <Badge
                    key={badge}
                    className="bg-indigo-100 text-indigo-700 border-none text-[10px] font-black"
                  >
                    {badge}
                  </Badge>
                ))}
                {userBadges.length === 0 && (
                  <span className="text-slate-300 text-sm italic font-medium">
                    {it.forensicResident}
                  </span>
                )}
              </div>
            </CardContent>
            <Trophy className="absolute -bottom-6 -right-6 h-32 w-32 text-slate-100 -rotate-12 pointer-events-none" />
          </Card>

          <Card className="rounded-[2rem] border-2 border-emerald-100 shadow-sm bg-emerald-50/30 overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle className="text-xs font-bold text-emerald-600 uppercase tracking-widest flex items-center gap-2">
                <Coins className="h-3 w-3" />
                {it.reputation}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-3xl font-black text-emerald-900 leading-none">
                {user.reputationPoints}
              </p>
              {!isKycVerified && (
                <div className="space-y-2">
                  <Button
                    onClick={() => setIsKycModalOpen(true)}
                    variant="outline"
                    size="sm"
                    className="w-full bg-emerald-500 hover:bg-emerald-600 text-white border-none font-bold rounded-xl h-10 shadow-lg shadow-emerald-500/20"
                  >
                    {it.getKyckPoints}
                  </Button>
                  <p className="text-[10px] text-emerald-700 font-medium leading-tight">
                    {it.minPointsNote}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          <Card
            className={`rounded-[2rem] border-2 transition-all overflow-hidden ${alreadyClaimed ? "border-slate-100 bg-slate-50" : "border-indigo-100 bg-indigo-50/50"}`}
          >
            <CardHeader className="pb-2">
              <CardTitle className="text-xs font-bold text-indigo-900 uppercase tracking-widest flex items-center gap-2">
                <ShieldCheck className="h-3 w-3" />
                {it.dailyMission}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-[11px] text-indigo-700/70 font-medium leading-relaxed">
                {it.dailyMissionDesc}
              </p>
              <Form method="post">
                <input type="hidden" name="intent" value="claim_reputation" />
                <Button
                  type="submit"
                  disabled={alreadyClaimed}
                  size="sm"
                  className={`w-full font-bold h-10 rounded-xl ${alreadyClaimed ? "bg-slate-200 text-slate-500" : "bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-200/50"}`}
                >
                  {alreadyClaimed ? it.rewardClaimed : it.claimDailyBonus}
                </Button>
              </Form>
            </CardContent>
          </Card>
        </div>

        <Card className="border-2 border-slate-100 shadow-xl rounded-[2rem] overflow-hidden bg-white">
          <CardHeader className="bg-white border-b p-8">
            <CardTitle className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-indigo-600" />
              {it.pendingQueue}
            </CardTitle>
            <CardDescription>{it.pendingQueueDesc}</CardDescription>
          </CardHeader>

          {/* Desktop Table View */}
          <div className="hidden md:block">
            <Table>
              <TableHeader className="bg-slate-50">
                <TableRow>
                  <TableHead className="pl-8 h-12">{it.entityAffected}</TableHead>
                  <TableHead>{it.specimen}</TableHead>
                  <TableHead>{it.source}</TableHead>
                  <TableHead>{it.preDiagnosis}</TableHead>
                  <TableHead>{it.diagnosis}</TableHead>
                  <TableHead>{it.quorumStatus}</TableHead>
                  <TableHead>{it.forensicEvidence}</TableHead>
                  <TableHead className="text-right pr-8">
                    {it.triageAction}
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {anomalies.map((anomaly: any) => (
                  <TableRow
                    key={anomaly.id}
                    className="group hover:bg-slate-50/50 transition-colors border-slate-100"
                  >
                    <TableCell className="pl-8 py-6 font-bold text-slate-900">
                      {anomaly.institution?.name || it.unverifiedBank}
                    </TableCell>
                    <TableCell className="max-w-[200px] break-all">
                      <span className="font-mono font-bold text-lg text-slate-800 tracking-tight">
                        {anomaly.detectedNumber}
                      </span>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className="flex items-center gap-1.5 bg-white font-black text-[10px] py-1 border-slate-200"
                      >
                        {anomaly.source === "Portal" ? (
                          <Globe className="h-3 w-3" />
                        ) : (
                          <Shield className="h-3 w-3" />
                        )}
                        {anomaly.source}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="secondary"
                        className={`font-black text-[10px] py-1 ${anomaly.preDiagnosis === "Scam Suspected" ? "bg-red-50 text-red-600 border-red-100" : "bg-emerald-50 text-emerald-600 border-emerald-100"}`}
                      >
                        {anomaly.preDiagnosis === "Scam Suspected" ? (
                          <AlertCircle className="h-3 w-3 mr-1" />
                        ) : (
                          <ShieldCheck className="h-3 w-3 mr-1" />
                        )}
                        {anomaly.preDiagnosis === "Legit Claimed"
                          ? CLINICAL_STATUS.PRE_DIAGNOSIS.LEGIT[currentLang]
                          : CLINICAL_STATUS.PRE_DIAGNOSIS.SCAM[currentLang]}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        className={`font-black text-[10px] py-1 border-none ${
                          anomaly.diagnosis === "Board Confirmed Scam"
                            ? "bg-red-600 text-white"
                            : anomaly.diagnosis === "Verified Official"
                              ? "bg-emerald-600 text-white"
                              : anomaly.diagnosis === "Awaiting Board"
                                ? "bg-indigo-600 text-white"
                                : "bg-amber-100 text-amber-700"
                        }`}
                      >
                        {anomaly.diagnosis === "Verified Official"
                          ? CLINICAL_STATUS.DIAGNOSIS.VERIFIED[currentLang]
                          : anomaly.diagnosis === "Board Confirmed Scam"
                            ? CLINICAL_STATUS.DIAGNOSIS.SCAM_CONFIRMED[currentLang]
                            : anomaly.diagnosis === "Awaiting Board"
                              ? CLINICAL_STATUS.DIAGNOSIS.AWAITING_BOARD[currentLang]
                              : CLINICAL_STATUS.DIAGNOSIS.AWAITING_QUORUM[currentLang]}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className="flex -space-x-1.5">
                          {[...Array(2)].map((_, i) => (
                            <div
                              key={i}
                              className={`h-5 w-5 rounded-full border border-white flex items-center justify-center text-[8px] font-bold ${
                                i < anomaly.consensusCount
                                  ? "bg-indigo-500 text-white"
                                  : "bg-slate-200 text-transparent"
                              }`}
                            >
                              ✓
                            </div>
                          ))}
                        </div>
                        <span
                          className={`text-[10px] font-black uppercase ${anomaly.consensusCount >= 2 ? "text-indigo-600" : "text-amber-500"}`}
                        >
                          {anomaly.consensusCount}/2
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Button
                        onClick={() => handleOpenPreview(anomaly.evidence)}
                        variant="outline"
                        className="h-9 px-3 rounded-xl border-2 border-indigo-100 bg-indigo-50/50 text-indigo-700 hover:bg-indigo-100 hover:text-indigo-800 transition-colors flex items-center gap-2 group"
                      >
                        <Eye className="h-3.5 w-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
                        <span className="font-bold text-[10px] uppercase tracking-widest">
                          {it.preview}
                        </span>
                      </Button>
                    </TableCell>
                    <TableCell className="text-right pr-8">
                      <Form method="post">
                        <input
                          type="hidden"
                          name="anomalyId"
                          value={anomaly.id}
                        />
                        <input
                          type="hidden"
                          name="intent"
                          value="stake_verify"
                        />
                        <Button
                          disabled={
                            !isKycVerified ||
                            anomaly.diagnosis === "Board Confirmed Scam" ||
                            anomaly.diagnosis === "Verified Official"
                          }
                          variant="outline"
                          className="border-2 border-indigo-100 text-indigo-600 font-bold hover:bg-indigo-600 hover:text-white rounded-xl transition-all gap-2 h-9 text-xs"
                        >
                          {anomaly.diagnosis === "Board Confirmed Scam" ||
                          anomaly.diagnosis === "Verified Official"
                            ? it.diagnosisFinalized
                            : it.deductPoints}
                        </Button>
                      </Form>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden divide-y divide-slate-100">
            {anomalies.map((anomaly: any) => (
              <div
                key={anomaly.id}
                className="p-6 space-y-4 bg-white hover:bg-slate-50/50 transition-colors"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-[10px] font-black text-indigo-500 uppercase tracking-widest mb-1">
                      {it.entityAffected}
                    </p>
                    <p className="font-bold text-slate-900">
                      {anomaly.institution?.name || it.unverifiedBank}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <Badge
                      className={`font-black text-[10px] py-1 border-none ${
                        anomaly.diagnosis === "Board Confirmed Scam"
                          ? "bg-red-600 text-white"
                          : anomaly.diagnosis === "Verified Official"
                            ? "bg-emerald-600 text-white"
                            : anomaly.diagnosis === "Awaiting Board"
                              ? "bg-indigo-600 text-white"
                              : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {anomaly.diagnosis === "Verified Official"
                        ? CLINICAL_STATUS.DIAGNOSIS.VERIFIED[currentLang]
                        : anomaly.diagnosis === "Board Confirmed Scam"
                          ? CLINICAL_STATUS.DIAGNOSIS.SCAM_CONFIRMED[currentLang]
                          : anomaly.diagnosis === "Awaiting Board"
                            ? CLINICAL_STATUS.DIAGNOSIS.AWAITING_BOARD[currentLang]
                            : CLINICAL_STATUS.DIAGNOSIS.AWAITING_QUORUM[currentLang]}
                    </Badge>
                    <div className="flex items-center gap-1.5 bg-slate-50 px-2 py-0.5 rounded-full border border-slate-100">
                      <div className="flex -space-x-1">
                        {[...Array(2)].map((_, i) => (
                          <div
                            key={i}
                            className={`h-3 w-3 rounded-full border border-white flex items-center justify-center text-[5px] font-bold ${
                              i < anomaly.consensusCount
                                ? "bg-indigo-500 text-white"
                                : "bg-slate-200 text-transparent"
                            }`}
                          >
                            ✓
                          </div>
                        ))}
                      </div>
                      <span
                        className={`text-[9px] font-black uppercase ${anomaly.consensusCount >= 2 ? "text-indigo-600" : "text-amber-500"}`}
                      >
                        {anomaly.consensusCount}/2
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">
                      {it.specimen}
                    </p>
                    <p className="font-mono font-bold text-slate-800 break-all">
                      {anomaly.detectedNumber}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">
                      {it.source}
                    </p>
                    <Badge
                      variant="outline"
                      className="inline-flex items-center gap-1.5 bg-white font-black text-[10px] py-0.5 border-slate-200"
                    >
                      {anomaly.source === "Portal" ? (
                        <Globe className="h-2 w-2" />
                      ) : (
                        <Shield className="h-2 w-2" />
                      )}
                      {anomaly.source}
                    </Badge>
                  </div>
                </div>

                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">
                    {it.preDiagnosis}
                  </p>
                  <Badge
                    variant="secondary"
                    className={`font-black text-[10px] py-1 ${anomaly.preDiagnosis === "Scam Suspected" ? "bg-red-50 text-red-600 border-red-100" : "bg-emerald-50 text-emerald-600 border-emerald-100"}`}
                  >
                    {anomaly.preDiagnosis === "Scam Suspected" ? (
                      <AlertCircle className="h-3 w-3 mr-1" />
                    ) : (
                      <ShieldCheck className="h-3 w-3 mr-1" />
                    )}
                    {anomaly.preDiagnosis}
                  </Badge>
                </div>

                <div className="flex gap-3 pt-2">
                  <Button
                    onClick={() => handleOpenPreview(anomaly.evidence)}
                    variant="outline"
                    className="flex-1 h-12 border-2 border-indigo-50 bg-indigo-50/30 text-indigo-600 font-bold rounded-xl gap-2"
                  >
                    <Eye className="h-4 w-4" /> {it.preview}
                  </Button>

                  <Form method="post" className="flex-1">
                    <input type="hidden" name="anomalyId" value={anomaly.id} />
                    <input type="hidden" name="intent" value="stake_verify" />
                    <Button
                      disabled={
                        !isKycVerified ||
                        anomaly.diagnosis === "Board Confirmed Scam" ||
                        anomaly.diagnosis === "Verified Official"
                      }
                      className="w-full h-12 bg-indigo-600 hover:bg-indigo-700 text-white font-black rounded-xl shadow-lg shadow-indigo-900/10"
                    >
                      {anomaly.diagnosis === "Board Confirmed Scam" ||
                      anomaly.diagnosis === "Verified Official"
                        ? it.caseClosed
                        : it.stakeAndSign}
                    </Button>
                  </Form>
                </div>
              </div>
            ))}
          </div>

          {anomalies.length === 0 && (
            <div className="text-center py-20 px-8 text-slate-400 italic font-medium">
              "CoVounding reports the queue is clear. No pending anomalies
              found."
            </div>
          )}
        </Card>
      </div>

      {/* Global Lightbox Dialog */}
      <Dialog
        open={!!previewEvidence}
        onOpenChange={(open) => !open && setPreviewEvidence(null)}
      >
        <DialogContent className="max-w-3xl rounded-[2rem] border-2 border-slate-100 shadow-2xl p-8">
          <DialogHeader>
            <DialogTitle className="text-2xl font-black text-slate-900 flex items-center gap-2">
              <ShieldCheck className="h-6 w-6 text-indigo-500" />
              {it.sanitizedForensicEvidence}
            </DialogTitle>
            <DialogDescription className="text-base text-slate-500 font-medium">
              {it.piiRedacted}{" "}
              {it.showingArtifacts.replace(
                "{count}",
                (previewEvidence?.length || 0).toString(),
              )}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 max-h-[70vh] flex flex-col items-center">
            {previewEvidence && previewEvidence.length > 0 ? (
              <div className="w-full space-y-4">
                <div className="relative group/carousel bg-slate-100 rounded-[2rem] overflow-hidden aspect-video border-2 border-slate-200 shadow-inner flex items-center justify-center">
                  <img
                    src={previewEvidence[currentImageIndex].sanitizedUrl}
                    alt={`Evidence ${currentImageIndex + 1}`}
                    className="max-w-full max-h-full object-contain"
                  />
                  
                  {previewEvidence.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={() => setCurrentImageIndex(prev => (prev > 0 ? prev - 1 : previewEvidence.length - 1))}
                        className="absolute left-4 p-3 bg-white/80 backdrop-blur-md rounded-full shadow-lg text-slate-900 opacity-0 group-hover/carousel:opacity-100 transition-all hover:bg-white active:scale-95"
                      >
                        <ChevronDown className="h-6 w-6 rotate-90" />
                      </button>
                      <button
                        type="button"
                        onClick={() => setCurrentImageIndex(prev => (prev < previewEvidence.length - 1 ? prev + 1 : 0))}
                        className="absolute right-4 p-3 bg-white/80 backdrop-blur-md rounded-full shadow-lg text-slate-900 opacity-0 group-hover/carousel:opacity-100 transition-all hover:bg-white active:scale-95"
                      >
                        <ChevronDown className="h-6 w-6 -rotate-90" />
                      </button>
                    </>
                  )}
                </div>
                
                <div className="flex items-center justify-between px-4">
                  <div className="flex gap-2">
                    {previewEvidence.map((_, i) => (
                      <div 
                        key={i} 
                        className={`h-1.5 rounded-full transition-all ${i === currentImageIndex ? "w-8 bg-indigo-600" : "w-2 bg-slate-300"}`}
                      />
                    ))}
                  </div>
                  <p className="text-sm font-black text-slate-400 uppercase tracking-widest">
                    {it.artifactCounter
                      .replace("{current}", (currentImageIndex + 1).toString())
                      .replace("{total}", previewEvidence.length.toString())}
                  </p>
                </div>
              </div>
            ) : (
              <div className="w-full py-20 text-center text-slate-400 space-y-4 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
                <EyeOff className="h-12 w-12 mx-auto opacity-30" />
                <p className="font-bold text-lg">{it.evidenceUnavailable}</p>
              </div>
            )}
          </div>
          <div className="flex justify-between items-center mt-6 pt-6 border-t border-slate-100">
            <div className="flex items-center gap-2 text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
              <Eye className="h-4 w-4" />
              <span className="text-xs font-bold uppercase tracking-wider">
                {it.sanitizedArtifacts}
              </span>
            </div>
            <p className="text-xs font-bold text-amber-600 uppercase tracking-widest bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-200">
              {it.confidentialTriageOnly}
            </p>
          </div>
        </DialogContent>
      </Dialog>

      <KYCModal
        isOpen={isKycModalOpen}
        onClose={() => setIsKycModalOpen(false)}
        onVerified={() => {
          setIsKycModalOpen(false);
          toast.success("Verification data submitted for review.");
        }}
      />
    </div>
  );
}
