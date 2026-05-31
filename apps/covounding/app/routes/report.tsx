import { AnomalySchema, getDiagnosis } from "@covound/logic";
import { Badge } from "@covound/ui/components/ui/badge";
import { Button } from "@covound/ui/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@covound/ui/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@covound/ui/components/ui/dropdown-menu";
import { Input } from "@covound/ui/components/ui/input";
import { Label } from "@covound/ui/components/ui/label";
import { Textarea } from "@covound/ui/components/ui/textarea";
import {
  Brain,
  CheckCircle2,
  ChevronDown,
  Globe,
  HeartPulse,
  Info,
  Lock,
  LogOut,
  Send,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Upload,
  UserCheck,
} from "lucide-react";
import { type ChangeEvent, useEffect, useState } from "react";
import {
  type ActionFunctionArgs,
  Form,
  Link,
  type LoaderFunctionArgs,
  useActionData,
  useFetcher,
  useLoaderData,
  useNavigation,
} from "react-router";
import { KYCModal } from "~/components/KYCModal";
import { prisma } from "~/db.server";
import { authClient } from "~/lib/auth.client";
import { auth } from "~/lib/auth.server";
import { getLanguage } from "~/lib/language.server";

const PHONE_REGEX = /(\+62|08)[0-9]{8,12}/g;

const translations = {
  en: {
    title: "Triage Room",
    back: "Exit Room",
    header: "You're in the Triage Room.",
    sub: "CoVounding is ready to assist. Take a deep breath and tell us what happened.",
    chronologyLabel: "1. The Chronology",
    chronologyPlaceholder:
      "Start typing the story here. CoVounding will automatically detect suspicious patterns...",
    evidenceLabel: "2. The Evidence",
    evidenceDesc: "Upload a screenshot. Ensure PII is redacted.",
    diagnosisLabel: "3. The Diagnosis",
    prescriptionLabel: "4. The Prescription",
    submitBtn: "Isolate & Submit Threat",
    disclaimer:
      "Your data is being isolated for community protection. Sensitive details will be archived.",
    extractedTitle: "Detected Anomaly Symptoms:",
    pdfBtn: "Download Digital Forensic Record (PDF)",
    kycBtn: "Verify Identity for Legal Evidence",
    successMsg:
      "Threat successfully isolated. Your contribution protects the community.",
    privacyNotice:
      "Privacy Protocol: Please annotate, blur, or censor sensitive data (faces, private names) using your local device editor or tools like Excalidraw BEFORE uploading evidence.",
    dischargeBtn: "Discharge & Return Home",
    confirmedDiagnosis: "Confirmed Clinical Diagnosis",
  },
  id: {
    title: "Ruang Triase",
    back: "Keluar Ruangan",
    header: "Anda berada di Ruang Triase.",
    sub: "CoVounding siap membantu. Tarik napas dalam-dalam dan ceritakan apa yang terjadi.",
    chronologyLabel: "1. Kronologi",
    chronologyPlaceholder:
      "Mulai ceritakan di sini. CoVounding akan otomatis mendeteksi pola mencurigakan...",
    evidenceLabel: "2. Bukti",
    evidenceDesc:
      "Unggah tangkapan layar. Pastikan data pribadi telah disamarkan.",
    diagnosisLabel: "3. Diagnosis",
    prescriptionLabel: "4. Resep Pemulihan",
    submitBtn: "Isolasi & Kirim Ancaman",
    disclaimer:
      "Data Anda sedang diisolasi untuk perlindungan komunitas. Detail sensitif akan diarsipkan.",
    extractedTitle: "Gejala Anomali Terdeteksi:",
    pdfBtn: "Unduh Rekam Forensik Digital (PDF)",
    kycBtn: "Verifikasi Identitas untuk Bukti Hukum",
    successMsg:
      "Ancaman berhasil diisolasi. Kontribusi Anda melindungi komunitas.",
    privacyNotice:
      "Protokol Privasi: Mohon beri anotasi, sensor, atau samarkan data sensitif (wajah, nama pribadi) menggunakan editor perangkat lokal atau alat seperti Excalidraw SEBELUM mengunggah bukti.",
    dischargeBtn: "Selesai & Kembali ke Beranda",
    confirmedDiagnosis: "Diagnosis Klinis Terkonfirmasi",
  },
};

const step4Translations = {
  en: {
    identityTitle: "Forensic Identity Verified",
    linkedMsg: "Linked to: {name}",
    downloadVerified: "Download Verified Forensic Record",
    stplPrep:
      "Your verified record is ready for Indonesian POLRI (STPL) submission.",
    empathyMsg:
      "Hopefully, the loss stops with you. Your actions today protect the community.",
  },
  id: {
    identityTitle: "Identitas Forensik Terverifikasi",
    linkedMsg: "Tersambung ke: {name}",
    downloadVerified: "Unduh Rekam Forensik Terverifikasi",
    stplPrep:
      "Rekam verifikasi Anda siap untuk diajukan ke POLRI (Laporan STPL).",
    empathyMsg:
      "Semoga kerugian ini berhenti di Anda. Tindakan Anda hari ini melindungi komunitas.",
  },
};

import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [{ title: "CoVound | Report Anomaly" }];

export async function loader({ request }: LoaderFunctionArgs) {
  const [session, lang] = await Promise.all([
    auth.api.getSession({ headers: request.headers }),
    getLanguage(request),
  ]);

  let incidents: any[] = [];
  if (session) {
    incidents = await prisma.incident.findMany({
      where: { authorId: session.user.id },
      orderBy: { createdAt: "desc" },
    });
  }

  return { session, lang, incidents };
}

export async function action({ request }: ActionFunctionArgs) {
  try {
    const session = await auth.api.getSession({ headers: request.headers });
    if (!session) {
      return { error: "Unauthorized", status: 401 };
    }
    const authorId = session.user.id;

    const formData = await request.formData();

    const rawData = {
      value: formData.get("detected_number") as string,
      type: "whatsapp" as const,
      sourceUrl: "Reporter Portal",
      status: "isolated" as const,
    };

    const data = AnomalySchema.parse(rawData);

    await prisma.anomalyReport.create({
      data: {
        detectedNumber: data.value,
        sourceUrl: data.sourceUrl || "Reporter Portal",
        severity: "CRITICAL",
        status: "PENDING",
      },
    });

    const evidenceJson = formData.get("evidence_json") as string;
    const evidenceList = evidenceJson ? JSON.parse(evidenceJson) : [];

    const incident = await prisma.incident.create({
      data: {
        story: (formData.get("story") as string) || "No chronology provided.",
        scammerNumber: data.value,
        spoofedBank:
          (formData.get("spoofed_entity") as string) || "Unknown Entity",
        evidence: {
          create: evidenceList.map(
            (ev: { sanitizedUrl: string; originalUrl: string }) => ({
              sanitizedUrl: ev.sanitizedUrl,
              originalEvidenceUrl: ev.originalUrl,
            }),
          ),
        },
        status: "pending",
        author: { connect: { id: authorId } },
      },
    });

    return {
      success: true,
      incidentId: incident.id,
      detectedNumber: data.value,
      timestamp: incident.createdAt.toISOString(),
    };
  } catch (error) {
    console.error("Submission failed:", error);
    return { error: "Internal Server Error", status: 500 };
  }
}

export default function TriageRoom() {
  const [step, setStep] = useState(1);
  const [story, setStory] = useState("");
  const [extractedNumbers, setExtractedNumbers] = useState<string[]>([]);
  const [aiResult, setAiResult] = useState<{
    scammerNumber?: string;
    entityName?: string;
    evidence?: Array<{ sanitizedUrl: string; originalUrl: string }>;
  } | null>(null);

  const [isKycModalOpen, setIsKycModalOpen] = useState(false);
  const [verifiedName, setVerifiedName] = useState<string | null>(null);

  const navigation = useNavigation();
  const fetcher = useFetcher();
  const isScanning = fetcher.state !== "idle";
  const isSubmitting = navigation.state !== "idle";

  const actionData = useActionData<typeof action>();
  const rootData = useLoaderData<typeof loader>();
  const lang = (rootData?.lang || "id") as "en" | "id";
  const session = rootData?.session;
  const t = translations[lang];
  const t4 = step4Translations[lang];
  const diagnosis = getDiagnosis(
    aiResult?.entityName || "Bank",
    "unverified",
    lang,
  );

  const restrictedTranslations = {
    en: {
      title: "Restricted Access",
      desc: "You must create a Reporter Profile to securely report a threat and receive your forensic record.",
      btn: "Login or Sign Up",
    },
    id: {
      title: "Akses Terbatas",
      desc: "Anda harus membuat Profil Pelapor untuk melaporkan ancaman secara aman dan menerima rekam forensik Anda.",
      btn: "Masuk atau Daftar",
    },
  };
  const rt = restrictedTranslations[lang];

  useEffect(() => {
    if (actionData && (actionData as any).success) {
      setStep(4);
      setIsKycModalOpen(true);
    }
  }, [actionData]);

  useEffect(() => {
    if (fetcher.data && (fetcher.data as any).scammerNumber) {
      const data = fetcher.data as any;
      setAiResult({
        scammerNumber: data.scammerNumber,
        entityName: data.entityName,
        evidence: data.evidence,
      });
      setExtractedNumbers((prev) =>
        Array.from(new Set([...prev, data.scammerNumber])),
      );
    }
  }, [fetcher.data]);

  useEffect(() => {
    const matches = story.match(PHONE_REGEX);
    if (matches) {
      setExtractedNumbers(Array.from(new Set(matches)));
    }
  }, [story]);

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-slate-100 font-sans">
        <Card className="max-w-md w-full text-center p-8 shadow-xl rounded-3xl border-slate-200">
          <div className="flex justify-center mb-6">
            <div className="h-20 w-20 bg-slate-200 text-slate-500 rounded-full flex items-center justify-center">
              <Lock className="h-10 w-10" />
            </div>
          </div>
          <CardTitle className="text-2xl font-black mb-2">
            Restricted Access
          </CardTitle>
          <CardDescription className="text-lg">
            You must create a Reporter Profile to securely report a threat and
            receive your forensic record.
          </CardDescription>
          <Button
            asChild
            className="mt-8 w-full h-14 text-lg font-bold rounded-xl bg-slate-900 hover:bg-slate-800 text-white"
          >
            <Link to="/login">Login or Sign Up</Link>
          </Button>
        </Card>
      </div>
    );
  }

  const setLang = (newLang: string) => {
    fetcher.submit(
      { lang: newLang, redirectTo: "/report" },
      { method: "post", action: "/api/lang" },
    );
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const formData = new FormData();
      for (let i = 0; i < files.length; i++) {
        formData.append("evidence", files[i]);
      }
      fetcher.submit(formData, {
        method: "post",
        action: "/api/analyze-screenshot",
        encType: "multipart/form-data",
      });
    }
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

  const nextStep = () => setStep((s: number) => s + 1);
  const prevStep = () => setStep((s: number) => s - 1);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-20">
      <nav className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
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
              {(session?.user as any)?.role === "INVESTIGATOR"
                ? "Investigator"
                : "Reporter"}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-2 font-semibold"
                >
                  <Globe className="h-4 w-4" />
                  <span className="hidden sm:inline">
                    {lang === "en" ? "English" : "Bahasa Indonesia"}
                  </span>
                  <ChevronDown className="h-3 w-3 opacity-50" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLang("en")}>
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLang("id")}>
                  Bahasa Indonesia
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="h-6 w-px bg-slate-200 mx-1 hidden sm:block" />

            {session ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="font-bold border-2 border-slate-200 hover:border-slate-900 rounded-lg transition-all flex items-center gap-2"
                  >
                    <div className="h-5 w-5 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px]">
                      {session.user.name[0]}
                    </div>
                    <span className="hidden sm:inline">
                      {session.user.name.split(" ")[0]}
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
            ) : (
              <Button
                asChild
                variant="outline"
                size="sm"
                className="font-bold border-2 border-slate-200 hover:border-slate-900 rounded-lg transition-all"
              >
                <Link to="/login">Login</Link>
              </Button>
            )}
          </div>
        </div>
      </nav>

      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto w-full">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:block w-80 border-r border-slate-200 bg-slate-50/50 h-[calc(100vh-4rem)] overflow-y-auto p-6 sticky top-16">
          <h3 className="font-black text-slate-800 mb-6 flex items-center gap-2">
            <HeartPulse className="h-5 w-5 text-indigo-500" />
            Reporter History
          </h3>
          <div className="space-y-4">
            {rootData?.incidents?.map((inc: any) => (
              <Card
                key={inc.id}
                className="p-4 border-2 border-slate-100 hover:border-indigo-100 transition-colors cursor-default"
              >
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-bold text-slate-400">
                    {new Date(inc.createdAt).toLocaleDateString()}
                  </span>
                  <Badge
                    variant="outline"
                    className={`px-2.5 py-0.5 rounded-full ${inc.status === "verified" ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"}`}
                  >
                    {inc.status}
                  </Badge>
                </div>
                <p className="font-black text-slate-900 leading-tight mb-1 truncate">
                  {inc.spoofedBank || "Unverified Anomaly"}
                </p>
                <p className="font-mono text-xs font-bold text-slate-500">
                  {inc.scammerNumber}
                </p>
              </Card>
            ))}
            {(!rootData?.incidents || rootData.incidents.length === 0) && (
              <div className="text-center p-6 border-2 border-dashed border-slate-200 rounded-2xl">
                <p className="text-sm font-bold text-slate-400">
                  No previous records.
                </p>
              </div>
            )}
          </div>
        </aside>

        {/* Main Triage Area */}
        <main className="flex-1 container mx-auto px-4 py-4 md:py-6 max-w-3xl">
          {/* Mobile History Toggle (Basic Implementation) */}
          <div className="lg:hidden mb-4">
            <details className="group border-2 border-slate-200 rounded-2xl bg-white overflow-hidden">
              <summary className="flex items-center justify-between p-4 font-bold text-slate-700 cursor-pointer list-none">
                <span className="flex items-center gap-2">
                  <HeartPulse className="h-5 w-5 text-indigo-500" /> View
                  Reporter History
                </span>
                <ChevronDown className="h-4 w-4 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="p-4 bg-slate-50 border-t border-slate-100 space-y-3 max-h-60 overflow-y-auto">
                {rootData?.incidents?.map((inc: any) => (
                  <Card key={inc.id} className="p-3 border border-slate-200">
                    <div className="flex justify-between items-start mb-1">
                      <span className="text-xs font-bold text-slate-400">
                        {new Date(inc.createdAt).toLocaleDateString()}
                      </span>
                      <Badge
                        variant="outline"
                        className="text-[10px] px-2 py-0 rounded-full"
                      >
                        {inc.status}
                      </Badge>
                    </div>
                    <p className="font-black text-slate-800 text-sm mb-0.5 truncate">
                      {inc.spoofedBank || "Unverified Anomaly"}
                    </p>
                    <p className="font-mono text-[10px] font-bold text-slate-500">
                      {inc.scammerNumber}
                    </p>
                  </Card>
                ))}
                {(!rootData?.incidents || rootData.incidents.length === 0) && (
                  <p className="text-sm font-bold text-slate-400 text-center py-4">
                    No previous records.
                  </p>
                )}
              </div>
            </details>
          </div>

          <div className="mb-6 text-center md:text-left flex flex-col items-center md:items-start">
            <Badge
              className={`border-none font-bold uppercase tracking-widest px-3 py-1 mb-4 flex items-center gap-2 ${step === 4 ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-700"}`}
            >
              <HeartPulse
                className={`h-3 w-3 ${step === 4 ? "" : "animate-pulse"}`}
              />
              {isScanning
                ? "AI Scanning Active..."
                : step === 4
                  ? "Triage Complete"
                  : `Triage Active: Step ${step} of 3`}
            </Badge>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-3 leading-tight">
              {isScanning
                ? "CoVounding is analyzing symptoms..."
                : step === 4
                  ? t.successMsg
                  : t.header}
            </h1>
            <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-xl">
              {isScanning
                ? "Please wait while we extract threat vectors from your evidence."
                : t.sub}
            </p>
          </div>

          <Card className="border-2 border-slate-200 shadow-2xl shadow-slate-200/50 rounded-[2.5rem] overflow-hidden bg-white">
            {step < 4 ? (
              <Form method="post" encType="multipart/form-data">
                <CardContent className="p-6 md:p-10">
                  {(isScanning || isSubmitting) && (
                    <div className="py-20 text-center space-y-8 animate-in fade-in duration-500">
                      <div className="relative h-32 w-32 mx-auto">
                        <div className="absolute inset-0 bg-indigo-100 rounded-3xl animate-ping opacity-25" />
                        <div className="relative h-full w-full bg-indigo-50 text-indigo-600 rounded-3xl flex items-center justify-center shadow-inner">
                          <Brain className="h-16 w-16" />
                        </div>
                      </div>
                      <div className="space-y-3">
                        <p className="text-2xl font-black text-slate-900 tracking-tight">
                          {isScanning
                            ? '"Diagnosing visual patterns..."'
                            : '"Securing threat data..."'}
                        </p>
                        <div className="max-w-xs mx-auto h-1.5 bg-slate-100 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-indigo-600 animate-[loading_2s_ease-in-out_infinite]"
                            style={{ width: "40%" }}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {!isScanning && !isSubmitting && step === 1 && (
                    <div className="space-y-6 animate-in fade-in duration-500">
                      <div className="space-y-3">
                        <Label className="text-xl font-black text-slate-800 flex items-center gap-2">
                          <Brain className="h-5 w-5 text-emerald-500" />
                          {t.chronologyLabel}
                        </Label>
                        <Textarea
                          name="story"
                          value={story}
                          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                            setStory(e.target.value)
                          }
                          placeholder={t.chronologyPlaceholder}
                          className="min-h-[300px] rounded-2xl border-2 border-slate-100 focus:border-emerald-500 focus:ring-0 text-lg font-medium transition-all p-6 leading-relaxed"
                        />
                      </div>

                      {extractedNumbers.length > 0 && (
                        <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100 animate-in slide-in-from-top-2 duration-300">
                          <p className="text-sm font-bold text-emerald-700 mb-2 flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4" />
                            {t.extractedTitle}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {extractedNumbers.map((num) => (
                              <Badge
                                key={num}
                                className="bg-white text-emerald-800 border-emerald-200 text-sm py-1 px-3"
                              >
                                {num}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {!isScanning && !isSubmitting && step === 2 && (
                    <div className="space-y-8 animate-in slide-in-from-right-4 duration-500">
                      <div className="space-y-3">
                        <Label className="text-xl font-black text-slate-800 flex items-center gap-2">
                          <Upload className="h-5 w-5 text-indigo-500" />
                          {t.evidenceLabel}
                        </Label>

                        {!aiResult && (
                          <div className="space-y-6">
                            <div className="p-6 bg-amber-50 border-2 border-amber-200 rounded-3xl flex items-start gap-4">
                              <ShieldAlert className="h-8 w-8 text-amber-600 shrink-0 mt-1" />
                              <div className="space-y-2">
                                <p className="text-lg font-black text-amber-900 leading-tight">
                                  Zero-Trust Privacy Protocol
                                </p>
                                <p className="text-sm text-amber-800 font-bold leading-relaxed">
                                  {t.privacyNotice}
                                </p>
                              </div>
                            </div>

                            <div className="relative group border-2 border-slate-200 border-dashed rounded-3xl hover:border-indigo-500 bg-slate-50 hover:bg-indigo-50/50 transition-all overflow-hidden flex flex-col items-center justify-center p-12 min-h-[250px]">
                              <Upload className="h-10 w-10 text-slate-400 group-hover:text-indigo-500 transition-colors mb-4" />
                              <p className="text-lg font-bold text-slate-700 group-hover:text-indigo-700 transition-colors">
                                Click or drag evidence here
                              </p>
                              <p className="text-sm font-medium text-slate-500 mt-2">
                                AI analysis will directly extract scam vectors.
                                (Multiple selection supported)
                              </p>
                              <input
                                name="evidence_upload"
                                type="file"
                                accept="image/*"
                                multiple
                                onChange={handleFileChange}
                                className="opacity-0 absolute inset-0 w-full h-full cursor-pointer"
                              />
                            </div>
                          </div>
                        )}

                        {aiResult && (
                          <div className="p-6 bg-emerald-50 rounded-3xl border-2 border-emerald-100 flex flex-col items-center text-center space-y-4">
                            <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center shadow-sm">
                              <CheckCircle2 className="h-8 w-8 text-emerald-600" />
                            </div>
                            <div>
                              <p className="text-lg font-black text-emerald-900">
                                AI Analysis Complete
                              </p>
                              <p className="text-sm text-emerald-700 font-medium">
                                {aiResult.evidence?.length} evidence artifact(s)
                                successfully analyzed and sanitized.
                              </p>
                            </div>
                            <Button
                              type="button"
                              variant="outline"
                              onClick={() => setAiResult(null)}
                              className="text-xs font-bold border-emerald-200 text-emerald-700 hover:bg-emerald-100"
                            >
                              Retake Evidence
                            </Button>
                          </div>
                        )}

                        {!aiResult && (
                          <p className="text-base text-slate-400 font-medium flex items-center gap-2 px-2">
                            <Info className="h-4 w-4" />
                            {t.evidenceDesc}
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                  {!isScanning && !isSubmitting && step === 3 && (
                    <div className="space-y-8 animate-in slide-in-from-right-4 duration-500 text-center py-10">
                      <div className="h-24 w-24 bg-red-50 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Shield className="h-12 w-12" />
                      </div>
                      <h2 className="text-3xl font-black">
                        {t.diagnosisLabel}
                      </h2>
                      <div className="p-8 bg-slate-50 rounded-3xl border-2 border-slate-100 text-left space-y-4">
                        <p className="font-bold text-slate-400 uppercase tracking-widest text-xs">
                          Diagnosis CoVounding:
                        </p>
                        <p className="text-xl font-medium italic text-slate-700">
                          "{diagnosis.intro}. {diagnosis.diagnosis}"
                        </p>
                        <hr className="border-slate-200" />
                        <div className="space-y-4">
                          <input type="hidden" name="story" value={story} />
                          <input
                            type="hidden"
                            name="evidence_json"
                            value={JSON.stringify(aiResult?.evidence || [])}
                          />
                          <div className="space-y-1">
                            <p className="font-bold text-red-600 text-xs uppercase tracking-tighter">
                              Detected Scammer:
                            </p>
                            <Input
                              name="detected_number"
                              defaultValue={
                                aiResult?.scammerNumber ||
                                extractedNumbers[0] ||
                                ""
                              }
                              placeholder="+62..."
                              className="text-2xl font-black bg-white border-2 border-red-100 rounded-xl h-14"
                            />
                          </div>
                          <div className="space-y-1">
                            <p className="font-bold text-slate-500 text-xs uppercase tracking-tighter">
                              Spoofed Institution:
                            </p>
                            <Input
                              name="spoofed_entity"
                              defaultValue={aiResult?.entityName || ""}
                              placeholder="e.g., National Bank"
                              className="text-lg font-bold bg-white border-2 border-slate-100 rounded-xl h-12 text-slate-600"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>

                {actionData?.error && (
                  <div className="mx-6 md:mx-10 mb-6 p-4 bg-red-50 border-2 border-red-100 rounded-2xl flex items-start gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
                    <ShieldAlert className="h-5 w-5 text-red-500 mt-0.5 shrink-0" />
                    <p className="text-sm font-bold text-red-700 leading-tight">
                      {actionData.error}
                    </p>
                  </div>
                )}

                <CardFooter className="p-6 md:p-10 bg-slate-50/50 border-t border-slate-100 flex flex-col sm:flex-row gap-4">
                  {step > 1 && (
                    <Button
                      type="button"
                      onClick={prevStep}
                      variant="ghost"
                      className="h-16 flex-1 text-lg font-bold rounded-2xl"
                    >
                      Back
                    </Button>
                  )}

                  {step < 3 ? (
                    <Button
                      type="button"
                      onClick={nextStep}
                      disabled={step === 1 && !story}
                      className="h-16 flex-[2] text-xl font-black bg-slate-900 hover:bg-slate-800 rounded-2xl transition-all text-white"
                    >
                      Continue Diagnosis
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      className="h-16 flex-[2] text-xl font-black bg-red-600 hover:bg-red-700 shadow-xl shadow-red-900/20 rounded-2xl gap-3 text-white"
                    >
                      <span className="flex items-center justify-center gap-2">
                        <Send className="h-5 w-5" />
                        {t.submitBtn}
                      </span>
                    </Button>
                  )}
                </CardFooter>
              </Form>
            ) : (
              <>
                <CardContent className="p-6 md:p-10">
                  <div className="space-y-8 animate-in zoom-in-95 duration-500 text-center py-10">
                    <div className="h-24 w-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <ShieldCheck className="h-12 w-12" />
                    </div>
                    <h2 className="text-3xl font-black">{t.successMsg}</h2>

                    <div className="p-8 bg-slate-50 rounded-3xl border-2 border-slate-100 text-left space-y-4">
                      <p className="font-bold text-slate-400 uppercase tracking-widest text-xs">
                        {t.confirmedDiagnosis}:
                      </p>
                      <div className="space-y-2">
                        <p className="text-xl font-black text-slate-900 leading-tight">
                          {aiResult?.entityName || "Financial Entity"}
                        </p>
                        <p className="font-mono text-lg font-bold text-red-600">
                          {aiResult?.scammerNumber ||
                            (actionData as any)?.detectedNumber}
                        </p>
                      </div>
                      <hr className="border-slate-200" />
                      <p className="text-sm font-medium text-slate-600 leading-relaxed italic">
                        {t4.empathyMsg}
                      </p>
                    </div>

                    <div className="space-y-4">
                      {!verifiedName && (
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => {
                            setIsKycModalOpen(true);
                          }}
                          className="w-full h-20 text-lg font-bold border-2 border-slate-100 hover:border-emerald-500 rounded-2xl transition-all"
                        >
                          <span className="flex items-center justify-center gap-2 w-full">
                            <UserCheck className="h-6 w-6 text-emerald-500" />
                            {t.kycBtn}
                          </span>
                        </Button>
                      )}

                      {verifiedName && (
                        <div className="p-6 bg-indigo-50 border-2 border-indigo-100 rounded-3xl flex flex-col items-center gap-2">
                          <div className="flex items-center gap-2">
                            <ShieldCheck className="h-5 w-5 text-indigo-600" />
                            <span className="text-sm font-black text-indigo-800 uppercase tracking-widest">
                              {t4.identityTitle}
                            </span>
                          </div>
                          <p className="text-xs font-bold text-indigo-600">
                            {t4.linkedMsg.replace("{name}", verifiedName)}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-6 md:p-10 bg-slate-50/50 border-t border-slate-100">
                  <Button
                    asChild
                    type="button"
                    className="w-full h-16 text-xl font-black bg-slate-900 hover:bg-slate-800 rounded-2xl transition-all text-white"
                  >
                    <Link
                      to="/"
                      className="flex items-center justify-center w-full h-full gap-2"
                    >
                      {t.dischargeBtn}
                    </Link>
                  </Button>
                </CardFooter>
              </>
            )}

            {!isScanning && !isSubmitting && step < 4 && (
              <div className="px-12 pb-8 text-center">
                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest leading-relaxed">
                  "{t.disclaimer}"
                </p>
              </div>
            )}
          </Card>
        </main>
      </div>

      <KYCModal
        isOpen={isKycModalOpen}
        onClose={() => setIsKycModalOpen(false)}
        onVerified={(name: string) => {
          setVerifiedName(name);
          setIsKycModalOpen(false);
        }}
      />
    </div>
  );
}
