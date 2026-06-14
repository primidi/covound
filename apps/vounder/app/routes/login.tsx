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
import { type ChangeEvent, useState } from "react";
import type { MetaFunction } from "react-router";
import { useLoaderData, useNavigate } from "react-router";
import { authClient } from "~/lib/auth.client";
import { getLanguage } from "~/lib/language.server";

export const meta: MetaFunction = () => [{ title: "CoVound | Login" }];

const translations = {
  en: {
    title: "Founder Login",
    desc: "Enter your credentials to access the Vounder Registry",
    email: "Email",
    password: "Password",
    signIn: "Sign In to Registry",
    authenticating: "Authenticating...",
    error401: "Access denied. Credentials do not match our authority database.",
    errorGeneric: "Failed to connect to Registry: ",
    errorSystem: "System issue.",
    unexpectedError: "An unexpected error occurred",
  },
  id: {
    title: "Login Founder",
    desc: "Masukkan kredensial Anda untuk mengakses Registri Vounder",
    email: "Email",
    password: "Kata Sandi",
    signIn: "Masuk ke Registri",
    authenticating: "Mengautentikasi...",
    error401: "Akses ditolak. Kredensial tidak cocok dengan database otoritas kami.",
    errorGeneric: "Gagal menghubungkan ke Registri: ",
    errorSystem: "Masalah sistem.",
    unexpectedError: "Terjadi kesalahan yang tidak terduga",
  },
};

export async function loader({ request }: { request: Request }) {
  const lang = await getLanguage(request);
  return { lang };
}

export default function Login() {
  const { lang } = useLoaderData<typeof loader>();
  const t = translations[lang as "en" | "id"];
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const { error } = await authClient.signIn.email({
        email,
        password,
      });

      if (error) {
        const personaError =
          error.status === 401
            ? t.error401
            : `${t.errorGeneric}${error.message || t.errorSystem}`;
        setError(personaError);
      } else {
        navigate("/");
      }
    } catch (_err) {
      setError(t.unexpectedError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-100 p-4 font-sans">
      <Card className="w-full max-w-md shadow-2xl border-indigo-100 rounded-[2rem] overflow-hidden bg-white">
        <CardHeader className="space-y-1 text-center bg-slate-50 border-b pb-8 pt-8">
          <div className="flex justify-center mb-4">
            <div className="h-16 w-16 rounded-2xl bg-indigo-600 flex items-center justify-center text-white text-3xl font-black shadow-lg shadow-indigo-200">
              V
            </div>
          </div>
          <CardTitle className="text-3xl font-black text-slate-900">
            {t.title}
          </CardTitle>
          <CardDescription className="text-base font-medium text-slate-500">
            {t.desc}
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleLogin}>
          <CardContent className="space-y-4 pt-8">
            {error && (
              <div className="p-4 text-sm font-bold text-red-600 bg-red-50 border-2 border-red-100 rounded-xl animate-in fade-in slide-in-from-top-2">
                {error}
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="email" className="font-bold text-slate-700">{t.email}</Label>
              <Input
                id="email"
                type="email"
                placeholder="founder@covound.com"
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
                required
                className="h-12 border-2 border-slate-100 focus:border-indigo-500 rounded-xl"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="font-bold text-slate-700">{t.password}</Label>
              </div>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
                required
                className="h-12 border-2 border-slate-100 focus:border-indigo-500 rounded-xl"
              />
            </div>
          </CardContent>
          <CardFooter className="pb-8">
            <Button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-black h-14 text-lg rounded-xl shadow-lg shadow-indigo-200 transition-all active:scale-95"
              disabled={loading}
            >
              {loading ? t.authenticating : t.signIn}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
