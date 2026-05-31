import { Badge } from "@covound/ui/components/ui/badge";
import { Button } from "@covound/ui/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@covound/ui/components/ui/dialog";
import { Input } from "@covound/ui/components/ui/input";
import {
  Fingerprint,
  Loader2,
  ShieldAlert,
  ShieldCheck,
  UserCheck,
} from "lucide-react";
import { useState } from "react";

export interface KYCModalProps {
  isOpen: boolean;
  onClose: () => void;
  onVerified: (name: string) => void;
}

/**
 * KYCModal - Reconstructed with "Digital ER" Clinical Persona.
 * Simulates a high-integrity PrivyID/VIDA identity verification flow.
 */
export function KYCModal({ isOpen, onClose, onVerified }: KYCModalProps) {
  const [name, setName] = useState("");
  const [nik, setNik] = useState("");
  const [selfie, setSelfie] = useState<File | null>(null);
  const [isVerifying, setIsVerifying] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [isPending, setIsPending] = useState(false);

  const validateNIK = (val: string) => {
    return /^[0-9]{16}$/.test(val);
  };

  const handleVerify = async () => {
    setError(null);

    if (!name.trim()) {
      setError("Legal name is required for forensic validity.");
      return;
    }

    if (!validateNIK(nik)) {
      setError("Please enter a valid 16-digit National ID (NIK).");
      return;
    }

    if (!selfie) {
      setError("A selfie holding your ID is required for verification.");
      return;
    }

    setIsVerifying(true);

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("nik", nik);
      formData.append("selfie", selfie);

      const res = await fetch("/api/kyc", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Verification failed");
      }

      setIsVerifying(false);
      setIsPending(true);
      if (onVerified) onVerified(name);
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred.");
      setIsVerifying(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(_open) => !isVerifying && onClose()}>
      <DialogContent className="sm:max-w-md min-w-[320px] p-0">
        <div className="bg-indigo-950 p-8 text-white relative overflow-hidden rounded-t-[2rem]">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Fingerprint className="h-32 w-32" />
          </div>

          <Badge
            variant="outline"
            className="mb-4 border-indigo-400/50 text-indigo-300 font-bold tracking-widest uppercase text-[10px] px-3 py-1"
          >
            Identity Firewall Active
          </Badge>

          <DialogHeader>
            <DialogTitle className="flex items-center gap-3 text-3xl font-black tracking-tight">
              {isPending ? (
                <ShieldAlert className="h-8 w-8 text-amber-400" />
              ) : (
                <UserCheck className="h-8 w-8 text-emerald-400" />
              )}
              {isPending ? "Verification Pending" : "Verify Identity"}
            </DialogTitle>
            <DialogDescription className="text-indigo-200 text-lg font-medium leading-snug mt-2">
              {isPending
                ? "Your identity document has been queued for manual forensic audit by the Medical Board."
                : "We require identity confirmation to issue a **Verified Digital Forensic Record** compliant with UU ITE."}
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="p-8 space-y-6 bg-white">
          {!isPending ? (
            <>
              <div className="space-y-5">
                <div className="space-y-2">
                  <label className="text-sm font-black text-slate-500 uppercase tracking-tighter">
                    Full Legal Name (as per ID)
                  </label>
                  <Input
                    placeholder="E.g., John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={isVerifying}
                    className="h-14 text-lg font-bold border-2 border-slate-100 focus:border-indigo-500 transition-all rounded-xl px-4"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-black text-slate-500 uppercase tracking-tighter">
                    National ID Number (NIK)
                  </label>
                  <Input
                    placeholder="16 Digit Number"
                    value={nik}
                    maxLength={16}
                    onChange={(e) => setNik(e.target.value.replace(/\D/g, ""))}
                    disabled={isVerifying}
                    className="h-14 text-xl font-mono font-bold border-2 border-slate-100 focus:border-indigo-500 transition-all rounded-xl px-4 tracking-[0.2em]"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-black text-slate-500 uppercase tracking-tighter">
                    Selfie holding ID
                  </label>
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setSelfie(e.target.files?.[0] || null)}
                    disabled={isVerifying}
                    className="h-14 py-3 font-bold border-2 border-slate-100 focus:border-indigo-500 transition-all rounded-xl px-4 cursor-pointer file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                  />
                </div>
              </div>

              {error && (
                <div className="p-4 bg-red-50 border-2 border-red-100 rounded-2xl flex items-start gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
                  <ShieldAlert className="h-5 w-5 text-red-500 mt-0.5 shrink-0" />
                  <p className="text-sm font-bold text-red-700 leading-tight">
                    {error}
                  </p>
                </div>
              )}

              <div className="pt-2">
                <Button
                  onClick={handleVerify}
                  disabled={isVerifying}
                  className={`w-full h-16 text-xl font-black gap-3 rounded-2xl shadow-xl transition-all ${isVerifying ? "bg-indigo-100 text-indigo-400" : "bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-900/20"}`}
                >
                  {isVerifying ? (
                    <>
                      <Loader2 className="h-6 w-6 animate-spin" />
                      Uploading to Secure Vault...
                    </>
                  ) : (
                    <>
                      <ShieldCheck className="h-6 w-6" /> Submit for Review
                    </>
                  )}
                </Button>
                <p className="text-center text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-4">
                  Secured by CoVound Zero-Trust Infrastructure
                </p>
              </div>
            </>
          ) : (
            <div className="space-y-6 text-center py-4">
              <div className="p-6 bg-amber-50 border-2 border-amber-100 rounded-3xl space-y-3">
                <p className="text-lg font-bold text-amber-900 leading-tight">
                  Clinical Triage in Progress
                </p>
                <p className="text-sm text-amber-800 font-medium">
                  Under Phase 4 protocols, all new investigator identities
                  require human consensus to prevent registry poisoning. This
                  typically takes 12-24 hours.
                </p>
              </div>
              <Button
                onClick={onClose}
                className="w-full h-14 bg-slate-900 hover:bg-slate-800 text-white font-black rounded-xl shadow-lg"
              >
                Acknowledge & Exit
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
