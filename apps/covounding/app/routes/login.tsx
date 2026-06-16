import { UserRole } from "@covound/db/types";
import { Button } from "@covound/ui/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@covound/ui/components/ui/card";
import { Input } from "@covound/ui/components/ui/input";
import { Label } from "@covound/ui/components/ui/label";
import {
  AlertCircle,
  HeartPulse,
  LogIn,
  ShieldCheck,
  UserPlus,
} from "lucide-react";
import { type ChangeEvent, useEffect, useState } from "react";
import {
  type ActionFunctionArgs,
  data,
  type LoaderFunctionArgs,
  redirect,
  useFetcher,
  useLoaderData,
} from "react-router";
import { getPrisma } from "~/db.server";
import { authClient } from "~/lib/auth.client";
import { getAuth } from "~/lib/auth.server";
import { getLanguage } from "~/lib/language.server";

import { toast } from "sonner";

const translations = {
  en: {
    reporter: "Reporter",
    investigator: "Investigator",
    createProfile: "Create Profile",
    accessRecords: "Access Records",
    investigatorDesc: "Join the medical board and hunt threats.",
    reporterDesc: "Secure your digital emergency records.",
    fullName: "Full Name",
    agentName: "Agent Name",
    legalName: "Your Legal Name",
    emailAddress: "Email Address",
    password: "Password",
    processing: "Processing...",
    completeRegistration: "Complete Registration",
    enterDashboard: "Enter Dashboard",
    alreadyHaveAccount: "Already have an account? Sign In",
    needNewProfile: "Need a new profile? Sign Up",
    errors: {
      signUpFailed: "Registration Failed",
      signInFailed: "Diagnosis Failed",
      auth401:
        "Credentials not detected in our medical records. Please re-check your email and password.",
      connectionError: "Connection issue detected.",
      roleMismatch: "Account role mismatch. Please use the {role} tab.",
      unexpected: "An unexpected error occurred during triage.",
    },
  },
  id: {
    reporter: "Pelapor",
    investigator: "Investigator",
    createProfile: "Buat Profil",
    accessRecords: "Akses Rekam Medis",
    investigatorDesc: "Bergabung dengan dewan medis dan berburu ancaman.",
    reporterDesc: "Amankan rekam medis darurat digital Anda.",
    fullName: "Nama Lengkap",
    agentName: "Nama Agen",
    legalName: "Nama Legal Anda",
    emailAddress: "Alamat Email",
    password: "Kata Sandi",
    processing: "Memproses...",
    completeRegistration: "Selesaikan Pendaftaran",
    enterDashboard: "Masuk ke Dasbor",
    alreadyHaveAccount: "Sudah punya akun? Masuk",
    needNewProfile: "Butuh profil baru? Daftar",
    errors: {
      signUpFailed: "Pendaftaran Gagal",
      signInFailed: "Diagnosis Gagal",
      auth401:
        "Kredensial tidak terdeteksi di rekam medis kami. Silakan periksa kembali email dan kata sandi Anda.",
      connectionError: "Masalah koneksi terdeteksi.",
      roleMismatch: "Peran akun tidak cocok. Silakan gunakan tab {role}.",
      unexpected: "Terjadi kesalahan tidak terduga selama triase.",
    },
  },
};

export async function loader({ request, context }: LoaderFunctionArgs) {
  const env = context.cloudflare.env;
  const prisma = getPrisma(env);
  const auth = getAuth(env);
  const [session, lang] = await Promise.all([
    auth.api.getSession({ headers: request.headers }),
    getLanguage(request),
  ]);

  if (session) {
    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
    });
    if (user?.role === UserRole.INVESTIGATOR) return redirect("/investigate");
    return redirect("/report");
  }
  return { lang };
}

// In-memory rate limiter for simple sybil defense
const rateLimitMap = new Map<string, number>();
const _RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const MAX_ACCOUNTS_PER_IP = 10;

export async function action({ request, context }: ActionFunctionArgs) {
  const env = context.cloudflare.env;
  const prisma = getPrisma(env);
  const auth = getAuth(env);
  const formData = await request.formData();
  const intent = formData.get("intent");

  if (intent === "sign_up") {
    const ip =
      request.headers.get("x-forwarded-for") ||
      request.headers.get("x-real-ip") ||
      "unknown-ip";

    const requests = rateLimitMap.get(ip) || 0;
    if (requests >= MAX_ACCOUNTS_PER_IP) {
      return data(
        {
          error:
            "Too many accounts created from this IP. Please try again later.",
        },
        { status: 429 },
      );
    }

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const name = formData.get("name") as string;
    const role = formData.get("role") as string;

    let userId: string | undefined;
    try {
      const signUpResult = await auth.api.signUpEmail({
        body: { email, password, name },
        asResponse: true,
      });

      if (signUpResult.status !== 200) {
        return data(
          { error: "Registration failed." },
          { status: signUpResult.status },
        );
      }

      const responseData = await signUpResult.json();
      userId = responseData.user?.id;

      if (userId && role === UserRole.INVESTIGATOR) {
        await prisma.user.update({
          where: { id: userId },
          data: {
            role: UserRole.INVESTIGATOR,
            reputationPoints: 5,
          },
        });
      }

      rateLimitMap.set(ip, requests + 1);
      return data({ success: true }, { status: 201 });
    } catch (error) {
      console.error("Registration error:", error);
      // Rollback: if user was created but role update failed
      if (userId) {
        await prisma.user.delete({ where: { id: userId } });
      }
      return data({ error: "An unexpected error occurred." }, { status: 500 });
    }
  }

  if (intent === "set_role") {
    // Basic IP extraction (works behind most proxies)
    const ip =
      request.headers.get("x-forwarded-for") ||
      request.headers.get("x-real-ip") ||
      "unknown-ip";

    // Rate limiting check
    const _now = Date.now();
    const requests = rateLimitMap.get(ip) || 0;

    if (requests >= MAX_ACCOUNTS_PER_IP) {
      return Response.json(
        {
          error:
            "Too many accounts created from this IP. Please try again later.",
        },
        { status: 429 },
      );
    }

    rateLimitMap.set(ip, requests + 1);

    // Cleanup old entries randomly (poor man's gc)
    if (Math.random() < 0.1) {
      for (const [key, value] of rateLimitMap.entries()) {
        if (value > MAX_ACCOUNTS_PER_IP) rateLimitMap.delete(key);
      }
    }

    const userId = formData.get("userId") as string;
    const role = formData.get("role") as string;

    if (userId && role === UserRole.INVESTIGATOR) {
      await prisma.user.update({
        where: { id: userId },
        data: {
          role: UserRole.INVESTIGATOR,
          reputationPoints: 5, // Initial provisional points for onboarding
        },
      });
    }
    return { success: true };
  }
  return null;
}

import type { MetaFunction } from "react-router";

import { useSearchParams } from "react-router";

export const meta: MetaFunction = () => [{ title: "CoVound | Login" }];

export default function Login() {
  const { lang } = useLoaderData<typeof loader>();
  const t = translations[lang as keyof typeof translations] || translations.id;

  const [searchParams, setSearchParams] = useSearchParams();
  const initialRole = (searchParams.get("role") as UserRole) || UserRole.REPORTER;

  const [isSignUp, setIsSignUp] = useState(false);
  const [role, setRole] = useState<UserRole>(initialRole);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetcher = useFetcher();

  const handleRoleChange = (newRole: UserRole) => {
    setRole(newRole);
    setSearchParams({ role: newRole });
  };

  // Handle registration success
  useEffect(() => {
    if (fetcher.state === "idle" && fetcher.data) {
      const data = fetcher.data as { success?: boolean; error?: string };
      if (data.success) {
        toast.success("Clinical Registration Complete", {
          description: "Please authenticate your credentials to establish Zero-Trust authority.",
        });
        setIsSignUp(false);
        setLoading(false);
      } else if (data.error) {
        setError(data.error);
        setLoading(false);
      }
    }
  }, [fetcher.state, fetcher.data]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      if (isSignUp) {
        fetcher.submit(
          {
            intent: "sign_up",
            email,
            password,
            name,
            role,
          },
          { method: "post" },
        );
      } else {
        const { error: signInError } = await authClient.signIn.email({
          email,
          password,
        });

        if (signInError) {
          setError(
            signInError.status === 401
              ? t.errors.auth401
              : `${t.errors.signInFailed}: ${signInError.message || t.errors.connectionError}`,
          );
          setLoading(false);
          return;
        }

        const { data: sessionData } = await authClient.getSession();
        if (sessionData?.user) {
          const res = await fetch(`/api/role?userId=${sessionData.user.id}`);
          const result = await res.json();
          if (result.role !== role) {
            await authClient.signOut();
            const expectedRole =
              result.role === UserRole.INVESTIGATOR
                ? t.investigator
                : t.reporter;
            setError(t.errors.roleMismatch.replace("{role}", expectedRole));
            setLoading(false);
            return;
          }
        }

        window.location.reload();
      }
    } catch (_err) {
      setError(t.errors.unexpected);
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50 p-4 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <div className="w-full max-w-md space-y-6">
        {/* Role Toggle */}
        <div className="flex p-1 bg-slate-200/50 rounded-2xl">
          <button
            type="button"
            onClick={() => handleRoleChange(UserRole.REPORTER)}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-all ${role === UserRole.REPORTER ? "bg-white text-emerald-700 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
          >
            <HeartPulse className="h-4 w-4" /> {t.reporter}
          </button>
          <button
            type="button"
            onClick={() => handleRoleChange(UserRole.INVESTIGATOR)}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-all ${role === UserRole.INVESTIGATOR ? "bg-white text-indigo-700 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
          >
            <ShieldCheck className="h-4 w-4" /> {t.investigator}
          </button>
        </div>

        <Card className="shadow-2xl border-slate-100 rounded-[2rem] overflow-hidden bg-white">
          <CardHeader
            className={`space-y-2 text-center p-8 border-b ${role === UserRole.INVESTIGATOR ? "bg-indigo-50/50" : "bg-emerald-50/50"}`}
          >
            <div className="flex justify-center mb-2">
              <div
                className={`h-14 w-14 rounded-2xl flex items-center justify-center text-white shadow-lg ${role === UserRole.INVESTIGATOR ? "bg-indigo-600 shadow-indigo-900/20" : "bg-emerald-600 shadow-emerald-900/20"}`}
              >
                {role === UserRole.INVESTIGATOR ? (
                  <ShieldCheck className="h-7 w-7" />
                ) : (
                  <HeartPulse className="h-7 w-7" />
                )}
              </div>
            </div>
            <CardTitle className="text-2xl font-black text-slate-900">
              {isSignUp ? t.createProfile : t.accessRecords}
            </CardTitle>
            <CardDescription className="font-medium text-slate-500">
              {role === UserRole.INVESTIGATOR
                ? t.investigatorDesc
                : t.reporterDesc}
            </CardDescription>
          </CardHeader>

          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-5 p-8">
              {error && (
                <div className="p-4 text-sm font-bold text-red-700 bg-red-50 border-2 border-red-100 rounded-xl flex items-start gap-3">
                  <div className="mt-0.5">
                    <AlertCircle className="h-5 w-5" />
                  </div>
                  <p>{error}</p>
                </div>
              )}

              {isSignUp && (
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-bold text-slate-700">
                    {t.fullName}
                  </Label>
                  <Input
                    id="name"
                    placeholder={
                      role === UserRole.INVESTIGATOR ? t.agentName : t.legalName
                    }
                    value={name}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setName(e.target.value)
                    }
                    required={isSignUp}
                    className="h-12 rounded-xl border-2 border-slate-100 focus:border-slate-900"
                  />
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="email" className="font-bold text-slate-700">
                  {t.emailAddress}
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder={
                    role === UserRole.INVESTIGATOR
                      ? "hunter@covound.com"
                      : "reporter@email.com"
                  }
                  value={email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                  }
                  required
                  className="h-12 rounded-xl border-2 border-slate-100 focus:border-slate-900"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label
                    htmlFor="password"
                    className="font-bold text-slate-700"
                  >
                    {t.password}
                  </Label>
                </div>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setPassword(e.target.value)
                  }
                  required
                  className="h-12 rounded-xl border-2 border-slate-100 focus:border-slate-900"
                />
              </div>
            </CardContent>
            <CardFooter className="p-8 pt-0 flex flex-col gap-4">
              <Button
                type="submit"
                className={`w-full h-14 font-black rounded-xl text-lg shadow-xl transition-all text-white ${role === UserRole.INVESTIGATOR ? "bg-indigo-600 hover:bg-indigo-700 shadow-indigo-900/20" : "bg-emerald-600 hover:bg-emerald-700 shadow-emerald-900/20"}`}
                disabled={loading}
              >
                <div className="flex items-center justify-center gap-2">
                  {isSignUp ? (
                    <UserPlus className="h-5 w-5" />
                  ) : (
                    <LogIn className="h-5 w-5" />
                  )}
                  <span>
                    {loading
                      ? t.processing
                      : isSignUp
                        ? t.completeRegistration
                        : t.enterDashboard}
                  </span>
                </div>
              </Button>

              <button
                type="button"
                onClick={() => {
                  setIsSignUp(!isSignUp);
                  setError("");
                }}
                className="text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors"
              >
                {isSignUp ? t.alreadyHaveAccount : t.needNewProfile}
              </button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
}
