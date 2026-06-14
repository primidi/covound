import { Badge } from "@covound/ui/components/ui/badge";
import { Button, buttonVariants } from "@covound/ui/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@covound/ui/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@covound/ui/components/ui/dropdown-menu";
import {
  Activity,
  AlertCircle,
  ArrowRight,
  ChevronDown,
  Globe,
  HeartPulse,
  LogOut,
  Search,
  Shield,
  ShieldAlert,
  Users,
} from "lucide-react";
import type { MetaFunction } from "react-router";
import {
  Link,
  redirect,
  useFetcher,
  useLoaderData,
  useNavigate,
} from "react-router";
import { prisma } from "~/db.server";
import { authClient } from "~/lib/auth.client";
import { auth } from "~/lib/auth.server";
import { getLanguage } from "~/lib/language.server";
import { HERO_COPY } from "@covound/logic";

export const meta: MetaFunction = () => [{ title: "CoVound | Covounding" }];

const translations = {
  en: {
    title: "CoVounding",
    heroTitle: HERO_COPY.title.en,
    heroSub: HERO_COPY.subtitle.en,
    sanitizeBtn: "Sanitize My Browser",
    sanitizeTooltip: "Installs Voundism to automatically redact fake numbers.",
    enterErBtn: "Enter Digital ER",
    enterErTooltip: "Already attacked? Report an anomaly for triage.",
    becomeInvestigatorBtn: "Become an Investigator",
    becomeInvestigatorTooltip: "Verify reports and earn reputation.",
    triageTitle: "Emergency Triage",
    triageDesc:
      "For those already targeted. We perform AI surgery on evidence to extract and isolate threat vectors globally.",
    preventionTitle: "Preventive Firewall",
    preventionDesc:
      "Voundism sanitizes your search results in real-time, redacting unverified contacts before you can click them.",
    investigationTitle: "Community Board",
    investigationDesc:
      "Verified experts reach consensus on pending anomalies, immunizing the entire ecosystem against new variants.",
    reporterPath: "In an Emergency?",
    reporterDesc: "Our Digital ER is ready to triage your incident immediately.",
    investigatorPath: "Want to protect others?",
    investigatorDesc: "Join the board of investigators and verify the truth.",
    tagline: "Accuracy is our only currency. The immunization is complete.",
    langLabel: "English",
    liveCounterNeutralized: "Threats Immunized",
    liveCounterProtected: "Connections Protected",
    downloadFirewall: "Download Firewall",
  },
  id: {
    title: "CoVounding",
    heroTitle: HERO_COPY.title.id,
    heroSub: HERO_COPY.subtitle.id,
    sanitizeBtn: "Sanitasi Browser Saya",
    sanitizeTooltip: "Pasang Voundism untuk menyamarkan nomor palsu secara otomatis.",
    enterErBtn: "Masuk UGD Digital",
    enterErTooltip: "Sudah terserang? Laporkan anomali untuk triase.",
    becomeInvestigatorBtn: "Jadi Investigator",
    becomeInvestigatorTooltip: "Verifikasi laporan dan raih reputasi.",
    triageTitle: "Triase Gawat Darurat",
    triageDesc:
      "Bagi mereka yang sudah menjadi target. Kami melakukan bedah AI pada bukti untuk mengekstrak dan mengisolasi vektor ancaman.",
    preventionTitle: "Firewall Pencegahan",
    preventionDesc:
      "Voundism menyanitasi hasil pencarian Anda secara real-time, menyamarkan kontak tak terverifikasi sebelum Anda mengkliknya.",
    investigationTitle: "Dewan Komunitas",
    investigationDesc:
      "Pakar terverifikasi mencapai konsensus pada anomali tertunda, mengimunisasi seluruh ekosistem dari varian baru.",
    reporterPath: "Dalam Keadaan Darurat?",
    reporterDesc: "UGD Digital kami siap melakukan triase insiden Anda segera.",
    investigatorPath: "Ingin melindungi sesama?",
    investigatorDesc: "Bergabunglah dengan dewan investigator dan verifikasi kebenaran.",
    tagline: "Akurasi adalah satu-satunya mata uang kami. Imunisasi telah selesai.",
    langLabel: "Bahasa Indonesia",
    liveCounterNeutralized: "Ancaman Diimunisasi",
    liveCounterProtected: "Koneksi Terlindungi",
    downloadFirewall: "Unduh Firewall",
  },
};

export async function loader({ request }: { request: Request }) {
  const [session, lang] = await Promise.all([
    auth.api.getSession({ headers: request.headers }),
    getLanguage(request),
  ]);

  if (session) {
    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
    });
    if (user?.role === "INVESTIGATOR") {
      return redirect("/investigate");
    }
    return redirect("/report");
  }

  return { session, lang };
}

export default function LandingPage() {
  const { session, lang } = useLoaderData<typeof loader>() as {
    session: any;
    lang: "en" | "id";
  };
  const fetcher = useFetcher();
  const _navigate = useNavigate();
  const t = translations[lang as "en" | "id"];

  const setLang = (newLang: string) => {
    fetcher.submit(
      { lang: newLang, redirectTo: "/" },
      { method: "post", action: "/api/lang" },
    );
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

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link
            to="/"
            className="flex items-center gap-2 font-bold text-slate-900 text-xl tracking-tight hover:opacity-80 transition-opacity"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-white shadow-lg shadow-slate-900/20">
              <Shield className="h-5 w-5" />
            </div>
            <span>{t.title}</span>
          </Link>

          <div className="flex items-center gap-3">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="hidden lg:flex items-center gap-2 font-bold border-2 border-emerald-100 text-emerald-700 hover:bg-emerald-50 rounded-lg transition-all"
            >
              <Link to="https://chrome.google.com/webstore/detail/voundism-placeholder">
                <Shield className="h-4 w-4" />
                {t.downloadFirewall}
              </Link>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-2 font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all"
                  aria-label="Select Language"
                >
                  <Globe className="h-4 w-4" />
                  <span className="hidden sm:inline">{t.langLabel}</span>
                  <ChevronDown className="h-3 w-3 opacity-50" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-48 p-1 rounded-xl shadow-2xl border-slate-200"
              >
                <DropdownMenuItem
                  onClick={() => setLang("en")}
                  className="rounded-lg py-2 font-medium cursor-pointer focus:bg-emerald-50 focus:text-emerald-700"
                >
                  English
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setLang("id")}
                  className="rounded-lg py-2 font-medium cursor-pointer focus:bg-emerald-50 focus:text-emerald-700"
                >
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
                    aria-label="User Menu"
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
                    asChild
                    className="rounded-lg py-2 font-medium cursor-pointer focus:bg-emerald-50 focus:text-emerald-700"
                  >
                    <Link
                      to="/investigate"
                      className="flex items-center gap-2 w-full"
                    >
                      <Search className="h-4 w-4" />
                      Investigate
                    </Link>
                  </DropdownMenuItem>
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
              <Link
                to="/login"
                className={
                  buttonVariants({ variant: "outline", size: "sm" }) +
                  " font-bold border-2 border-slate-200 hover:border-slate-900 rounded-lg transition-all"
                }
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12 md:py-24">
        {/* Hero Section */}
        <section className="text-center space-y-8 max-w-4xl mx-auto mb-20">
          <Badge
            variant="secondary"
            className="px-5 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border-emerald-200 animate-in fade-in slide-in-from-bottom-3 duration-500 rounded-full"
          >
            {lang === "en"
              ? "Digital First Aid is Here"
              : "Pertolongan Pertama Digital Telah Hadir"}
          </Badge>

          <h1 className="text-4xl md:text-7xl font-black tracking-tight text-slate-900 leading-[1.1] animate-in fade-in slide-in-from-bottom-4 duration-700">
            {t.heroTitle.split(".").map((part, i) => (
              <span
                key={i}
                className={i === 1 ? "text-emerald-600 block sm:inline" : ""}
              >
                {part}
                {i === 0 ? "." : ""}
              </span>
            ))}
          </h1>

          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed animate-in fade-in slide-in-from-bottom-5 duration-1000">
            {t.heroSub}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-6 animate-in fade-in slide-in-from-bottom-6 duration-1000">
            <Link to="https://chrome.google.com/webstore/detail/voundism-placeholder" className="w-full sm:w-auto">
              <Button
                size="lg"
                title={t.sanitizeTooltip}
                className="w-full sm:w-auto px-10 py-8 text-xl font-black bg-emerald-600 hover:bg-emerald-700 shadow-2xl shadow-emerald-900/20 rounded-2xl transition-all hover:-translate-y-1 active:scale-95 text-white flex items-center gap-2"
              >
                <Shield className="h-6 w-6" />
                {t.sanitizeBtn}
              </Button>
            </Link>
            <Link to="/report" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                title={t.enterErTooltip}
                className="w-full sm:w-auto px-10 py-8 text-xl font-black border-2 border-amber-200 text-amber-700 hover:bg-amber-50 rounded-2xl transition-all hover:-translate-y-1 active:scale-95 flex items-center gap-2"
              >
                <AlertCircle className="h-6 w-6" />
                {t.enterErBtn}
              </Button>
            </Link>
            <Link to="/investigate" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="ghost"
                title={t.becomeInvestigatorTooltip}
                className="w-full sm:w-auto px-10 py-8 text-lg font-bold text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-2xl transition-all flex items-center gap-2"
              >
                <Users className="h-6 w-6" />
                {t.becomeInvestigatorBtn}
              </Button>
            </Link>
          </div>

          {/* Live Counter Placeholder */}
          <div className="pt-12 flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60 hover:opacity-100 transition-opacity duration-500">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 text-emerald-600 mb-1">
                <Activity className="h-5 w-5 animate-pulse" />
                <span className="text-3xl font-black tabular-nums tracking-tighter">
                  1,482
                </span>
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                {t.liveCounterNeutralized}
              </span>
            </div>
            <div className="h-10 w-px bg-slate-200 hidden sm:block" />
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 text-slate-900 mb-1">
                <ShieldAlert className="h-5 w-5" />
                <span className="text-3xl font-black tabular-nums tracking-tighter">
                  42,091
                </span>
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                {t.liveCounterProtected}
              </span>
            </div>
          </div>
        </section>

        {/* Metaphor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <Card className="border-2 border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-emerald-900/5 hover:border-emerald-200 transition-all duration-500 group bg-white rounded-3xl overflow-hidden">
            <CardHeader className="p-10 pb-4">
              <div className="h-16 w-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                <Shield className="h-8 w-8" />
              </div>
              <CardTitle className="text-3xl font-black tracking-tight">
                {t.preventionTitle}
              </CardTitle>
              <CardDescription className="text-xl text-slate-600 font-medium leading-relaxed pt-3">
                {t.preventionDesc}
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2 border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-amber-900/5 hover:border-amber-200 transition-all duration-500 group bg-white rounded-3xl overflow-hidden">
            <CardHeader className="p-10 pb-4">
              <div className="h-16 w-16 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                <HeartPulse className="h-8 w-8" />
              </div>
              <CardTitle className="text-3xl font-black tracking-tight">
                {t.triageTitle}
              </CardTitle>
              <CardDescription className="text-xl text-slate-600 font-medium leading-relaxed pt-3">
                {t.triageDesc}
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2 border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-indigo-900/5 hover:border-indigo-200 transition-all duration-500 group bg-white rounded-3xl overflow-hidden">
            <CardHeader className="p-10 pb-4">
              <div className="h-16 w-16 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
                <Users className="h-8 w-8" />
              </div>
              <CardTitle className="text-3xl font-black tracking-tight">
                {t.investigationTitle}
              </CardTitle>
              <CardDescription className="text-xl text-slate-600 font-medium leading-relaxed pt-3">
                {t.investigationDesc}
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Call to Action Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch bg-white rounded-4xl border-2 border-slate-100 overflow-hidden shadow-2xl shadow-slate-200/50">
          <div className="p-10 md:p-20 space-y-8 hover:bg-amber-50/30 transition-colors group">
            <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100 border-none font-bold uppercase tracking-widest px-3 py-1">
              Emergency
            </Badge>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight">
              {t.reporterPath}
            </h2>
            <p className="text-slate-500 text-xl font-medium leading-relaxed">
              {t.reporterDesc}
            </p>
            <Link to="/report" className="inline-block outline-none">
              <Button
                variant="link"
                className="p-0 h-auto text-amber-600 font-black text-2xl no-underline group-hover:translate-x-2 transition-transform duration-300"
              >
                <span className="flex items-center gap-2 whitespace-nowrap">
                  {t.enterErBtn} <ArrowRight className="h-6 w-6" />
                </span>
              </Button>
            </Link>
          </div>
          <div className="p-10 md:p-20 space-y-8 border-t md:border-t-0 md:border-l-2 border-slate-100 hover:bg-indigo-50/30 transition-colors group">
            <Badge className="bg-indigo-100 text-indigo-700 hover:bg-indigo-100 border-none font-bold uppercase tracking-widest px-3 py-1">
              Investigator
            </Badge>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight">
              {t.investigatorPath}
            </h2>
            <p className="text-slate-500 text-xl font-medium leading-relaxed">
              {t.investigatorDesc}
            </p>
            <Link to="/investigate" className="inline-block outline-none">
              <Button
                variant="link"
                className="p-0 h-auto text-indigo-600 font-black text-2xl no-underline group-hover:translate-x-2 transition-transform duration-300"
              >
                <span className="flex items-center gap-2 whitespace-nowrap">
                  {t.becomeInvestigatorBtn} <ArrowRight className="h-6 w-6" />
                </span>
              </Button>
            </Link>
          </div>
        </div>

        <footer className="mt-32 pb-12 text-center">
          <div className="flex items-center justify-center gap-2 text-slate-300 mb-6">
            <div className="h-px w-12 bg-slate-200" />
            <HeartPulse className="h-4 w-4" />
            <div className="h-px w-12 bg-slate-200" />
          </div>
          <p className="text-slate-400 font-bold italic text-xl tracking-tight">
            "{t.tagline}"
          </p>
          <p className="text-slate-300 text-sm mt-8 font-semibold uppercase tracking-[0.2em]">
            © 2026 CoVound Ecosystem
          </p>
        </footer>
      </main>
    </div>
  );
}
