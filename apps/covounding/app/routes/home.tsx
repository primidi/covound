import { Badge } from "@covound/ui/components/ui/badge";
import { Button, buttonVariants } from "@covound/ui/components/ui/button";
import {
  Card,
  CardContent,
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
  ArrowRight,
  ChevronDown,
  Globe,
  HeartPulse,
  LogOut,
  Search,
  Shield,
  Trophy,
  User,
} from "lucide-react";
import type { MetaFunction } from "react-router";
import {
  Link,
  redirect,
  useFetcher,
  useLoaderData,
  useNavigate,
  useSearchParams,
} from "react-router";
import { prisma } from "~/db.server";
import { authClient } from "~/lib/auth.client";
import { auth } from "~/lib/auth.server";
import { getLanguage } from "~/lib/language.server";
import type { Route } from "./+types/home";

export const meta: MetaFunction = () => [{ title: "CoVound | Home" }];

const translations = {
  en: {
    title: "CoVounding",
    heroTitle: "Turn Your Trauma Into Their Takedown.",
    heroSub:
      "The AI-Assisted Threat Bounty Board and Digital Triage Center. We crowdsource social engineering incidents to protect the community.",
    reportBtn: "Report an Incident",
    huntBtn: "Hunt Threats & Earn Bounties",
    triageTitle: "Digital Triage Center",
    triageDesc:
      "Just like an ER, we diagnose scams, extract the 'virus' (the scammer's details), and isolate it globally.",
    bountyTitle: "Threat Bounty Board",
    bountyDesc:
      "Investigators verify reporter reports using Gemini AI to immunize the registry and earn reputation points.",
    reporterPath: "Are you a reporter?",
    reporterDesc: "Triage your case and contribute to the Source of Truth.",
    investigatorPath: "Are you an investigator?",
    investigatorDesc: "Verify pending threats and protect millions of users.",
    tagline: "Hopefully, the loss stops with me.",
    langLabel: "English",
  },
  id: {
    title: "CoVounding",
    heroTitle: "Ubah Kepanikan Menjadi Keadilan.",
    heroSub:
      "Pusat Triase Digital dan Papan Bounty Ancaman Berbasis AI. Kami mengumpulkan insiden rekayasa sosial untuk melindungi komunitas.",
    reportBtn: "Laporkan Insiden",
    huntBtn: "Berburu Ancaman & Raih Bounty",
    triageTitle: "Pusat Triase Digital",
    triageDesc:
      "Sama seperti UGD, kami mendiagnosis penipuan, mengekstrak 'virus' (detail penipu), dan mengisolasinya secara global.",
    bountyTitle: "Papan Bounty Ancaman",
    bountyDesc:
      "Investigator memverifikasi laporan pelapor menggunakan AI Gemini untuk mengimunisasi registri dan meraih poin reputasi.",
    reporterPath: "Apakah Anda pelapor?",
    reporterDesc:
      "Lakukan triase kasus Anda dan berkontribusi pada Sumber Kebenaran.",
    investigatorPath: "Apakah Anda investigator?",
    investigatorDesc:
      "Verifikasi ancaman yang tertunda dan lindungi jutaan pengguna.",
    tagline: "Semoga kerugian ini berhenti di saya.",
    langLabel: "Bahasa Indonesia",
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
  const navigate = useNavigate();
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
            {/* Language Selection Hidden for Demo */}
            {/* 
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
            */}

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
            <Link to="/report" className="w-full sm:w-auto group">
              <Button
                size="lg"
                className="w-full sm:w-auto px-10 py-8 text-xl font-black bg-slate-900 hover:bg-slate-800 shadow-2xl shadow-slate-900/20 rounded-2xl transition-all hover:-translate-y-1 active:scale-95 text-white"
              >
                {t.reportBtn}
              </Button>
            </Link>
            <Link to="/investigate" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto px-10 py-8 text-xl font-black border-2 border-slate-200 hover:border-slate-900 rounded-2xl transition-all hover:-translate-y-1 active:scale-95"
              >
                {t.huntBtn}
              </Button>
            </Link>
          </div>
        </section>

        {/* Metaphor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <Card className="border-2 border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-emerald-900/5 hover:border-emerald-200 transition-all duration-500 group bg-white rounded-3xl overflow-hidden">
            <CardHeader className="p-10 pb-4">
              <div className="h-16 w-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
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
                <Search className="h-8 w-8" />
              </div>
              <CardTitle className="text-3xl font-black tracking-tight">
                {t.bountyTitle}
              </CardTitle>
              <CardDescription className="text-xl text-slate-600 font-medium leading-relaxed pt-3">
                {t.bountyDesc}
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Call to Action Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch bg-white rounded-4xl border-2 border-slate-100 overflow-hidden shadow-2xl shadow-slate-200/50">
          <div className="p-10 md:p-20 space-y-8 hover:bg-emerald-50/30 transition-colors group">
            <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 border-none font-bold uppercase tracking-widest px-3 py-1">
              Reporter
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
                className="p-0 h-auto text-emerald-600 font-black text-2xl no-underline group-hover:translate-x-2 transition-transform duration-300"
              >
                <span className="flex items-center gap-2 whitespace-nowrap">
                  {t.reportBtn} <ArrowRight className="h-6 w-6" />
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
                  {t.huntBtn} <ArrowRight className="h-6 w-6" />
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
