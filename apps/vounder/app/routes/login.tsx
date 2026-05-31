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
import { useNavigate } from "react-router";
import { authClient } from "~/lib/auth.client";

export const meta: MetaFunction = () => [{ title: "CoVound | Admin Login" }];

export default function Login() {
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
            ? "Akses ditolak. Kredensial tidak cocok dengan database otoritas kami."
            : `Gagal menghubungkan ke Registry: ${error.message || "Masalah sistem."}`;
        setError(personaError);
      } else {
        navigate("/admin");
      }
    } catch (err) {
      setError("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-100 p-4">
      <Card className="w-full max-w-md shadow-2xl border-indigo-100">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-4">
            <div className="h-12 w-12 rounded-full bg-indigo-600 flex items-center justify-center text-white text-2xl font-bold">
              V
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-slate-900">
            Founder Login
          </CardTitle>
          <CardDescription>
            Enter your credentials to access the Vounder Registry
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleLogin}>
          <CardContent className="space-y-4">
            {error && (
              <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg">
                {error}
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="founder@covound.com"
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
                required
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
                required
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 font-bold py-6 rounded-xl transition-all"
              disabled={loading}
            >
              {loading ? "Authenticating..." : "Sign In to Registry"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
