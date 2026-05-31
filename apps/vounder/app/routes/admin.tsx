import { UserRole } from "@covound/db/types";
import {
  decryptData,
  EntitySchema,
  OfficialContactPointSchema,
} from "@covound/logic";
import { Badge } from "@covound/ui/components/ui/badge";
import { Button } from "@covound/ui/components/ui/button";
// Shadcn UI Imports
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
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@covound/ui/components/ui/dialog";
import { Input } from "@covound/ui/components/ui/input";
import { Label } from "@covound/ui/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@covound/ui/components/ui/table";
import type { MetaFunction } from "react-router";
import {
  type ActionFunctionArgs,
  Form,
  type LoaderFunctionArgs,
  redirect,
  useLoaderData,
} from "react-router";
import { prisma } from "~/db.server";
import { auth } from "~/lib/auth.server";

export const meta: MetaFunction = () => [
  { title: "CoVound | Admin Dashboard" },
];

export async function loader({ request }: LoaderFunctionArgs) {
  const session = await auth.api.getSession({
    headers: request.headers,
  });

  if (!session) {
    return redirect("/login");
  }

  const currentUser = await prisma.user.findUnique({
    where: { id: session.user.id },
  });
  if (currentUser?.role !== UserRole.ADMIN) {
    throw new Response("Forbidden: Medical Board Access Only", { status: 403 });
  }

  const institutions = await prisma.institution.findMany({
    orderBy: { name: "asc" },
  });
  const contacts = await prisma.verifiedContact.findMany({
    include: { institution: true },
    orderBy: { createdAt: "desc" },
  });
  const anomalies = await prisma.anomalyReport.findMany({
    include: { institution: true },
    orderBy: { createdAt: "desc" },
  });

  const secretKey = process.env.ENCRYPTION_KEY || "";
  const pendingKycRaw = await prisma.kycRequest.findMany({
    where: { status: "pending" },
    include: { user: true },
    orderBy: { createdAt: "asc" },
  });

  // Decrypt NIK safely in memory for the admin view
  const pendingKyc = pendingKycRaw.map((req: any) => ({
    ...req,
    decryptedNik:
      secretKey && req.encryptedNik
        ? decryptData(req.encryptedNik, secretKey)
        : "ENCRYPTION_KEY_MISSING",
  }));

  return { institutions, contacts, anomalies, pendingKyc, user: session.user };
}

export async function action({ request }: ActionFunctionArgs) {
  const session = await auth.api.getSession({
    headers: request.headers,
  });

  if (!session) {
    throw new Response("Unauthorized", { status: 401 });
  }

  const currentUser = await prisma.user.findUnique({
    where: { id: session.user.id },
  });
  if (currentUser?.role !== UserRole.ADMIN) {
    throw new Response("Forbidden: Medical Board Access Only", { status: 403 });
  }

  const formData = await request.formData();
  const intent = formData.get("intent");

  if (intent === "approve_kyc") {
    const kycId = formData.get("id") as string;
    const kycRequest = await prisma.kycRequest.findUnique({
      where: { id: kycId },
    });

    if (kycRequest && kycRequest.status === "pending") {
      await prisma.$transaction([
        prisma.kycRequest.update({
          where: { id: kycId },
          data: { status: "verified" },
        }),
        prisma.user.update({
          where: { id: kycRequest.userId },
          data: {
            isKycVerified: true,
            reputationPoints: { increment: 5 }, // Grant final 5 points
          },
        }),
      ]);
    }
  }

  if (intent === "reject_kyc") {
    const kycId = formData.get("id") as string;
    const kycRequest = await prisma.kycRequest.findUnique({
      where: { id: kycId },
    });

    if (kycRequest && kycRequest.status === "pending") {
      await prisma.kycRequest.update({
        where: { id: kycId },
        data: { status: "rejected" },
      });

      // Attempt to delete the file securely to minimize data retention
      try {
        const fs = await import("node:fs");
        const path = await import("node:path");
        const filePath = path.join(
          process.cwd(),
          "..",
          "..",
          "storage",
          "kyc",
          kycRequest.selfiePath,
        );
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
        }
      } catch (e) {
        console.error("Failed to clean up rejected KYC selfie:", e);
      }
    }
  }

  if (intent === "add_institution") {
    const data = EntitySchema.parse({
      name: formData.get("name"),
      officialHotline: formData.get("hotline"),
      officialWebsite: formData.get("website"),
    });

    await prisma.institution.create({
      data: {
        name: data.name,
        officialHotline: data.officialHotline,
        officialWebsite: data.officialWebsite,
      },
    });
  }

  if (intent === "add_contact") {
    const phone = formData.get("phone") as string;
    const whatsapp = formData.get("whatsapp") as string;
    const domain = formData.get("domain") as string;

    // Map to shared schema
    const type = whatsapp ? "whatsapp" : phone ? "phone" : "url";
    const value = whatsapp || phone || domain;

    const data = OfficialContactPointSchema.parse({
      entityId: formData.get("institutionId"),
      type,
      value,
      label: formData.get("name"),
    });

    await prisma.verifiedContact.create({
      data: {
        name: data.label || "",
        phone: type === "phone" ? data.value : null,
        whatsapp: type === "whatsapp" ? data.value : null,
        domain: type === "url" ? data.value : null,
        institutionId: data.entityId || null,
      },
    });
  }

  if (intent === "promote_anomaly") {
    const id = formData.get("id") as string;
    const anomaly = await prisma.anomalyReport.findUnique({
      where: { id },
      include: { institution: true },
    });

    if (anomaly && anomaly.consensusCount >= 2) {
      // PROMOTION LOGIC: Mark as 'rejected' to move from Pending to Blacklist
      // Do NOT create a VerifiedContact entry as that table is for official entities only.
      await prisma.anomalyReport.update({
        where: { id },
        data: { status: "rejected" },
      });
    }
  }

  if (intent === "approve_legit") {
    const id = formData.get("id") as string;
    const anomaly = await prisma.anomalyReport.findUnique({
      where: { id },
    });

    if (
      anomaly &&
      (anomaly.severity === "LOW" || anomaly.status === "false_positive") &&
      anomaly.consensusCount >= 2
    ) {
      await prisma.$transaction([
        prisma.anomalyReport.update({
          where: { id },
          data: { status: "verified" },
        }),
        prisma.verifiedContact.create({
          data: {
            name: `Admin Verified Legit: ${anomaly.detectedNumber}`,
            whatsapp: anomaly.detectedNumber,
            isOfficial: true,
            signature: `ADMIN-CERTIFIED-LEGIT-${Date.now()}`,
          },
        }),
      ]);
    }
  }

  if (intent === "delete_contact") {
    const id = formData.get("id") as string;
    await prisma.verifiedContact.delete({ where: { id } });
  }

  if (intent === "delete_institution") {
    const id = formData.get("id") as string;
    await prisma.institution.delete({ where: { id } });
  }

  return null;
}

export default function AdminDashboard() {
  const { institutions, contacts, anomalies, pendingKyc } =
    useLoaderData<typeof loader>();

  return (
    <div className="min-h-screen bg-slate-50/50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <header className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Vounder Dashboard
          </h1>
          <p className="text-slate-500 font-medium">
            Manage the verified contact registry and track security anomalies.
          </p>
        </header>

        {pendingKyc.length > 0 && (
          <Card className="border-amber-100 shadow-amber-900/5 mb-8">
            <CardHeader className="bg-amber-50/30">
              <CardTitle className="text-amber-900">
                Identity Verification Queue
              </CardTitle>
              <CardDescription className="text-amber-700/70 font-medium">
                Pending investigator applications requiring manual clinical
                review
              </CardDescription>
            </CardHeader>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Applicant Name</TableHead>
                  <TableHead>Decrypted NIK</TableHead>
                  <TableHead>Evidence</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pendingKyc.map((req: any) => (
                  <TableRow key={req.id}>
                    <TableCell className="font-bold text-slate-800">
                      {req.name}
                    </TableCell>
                    <TableCell className="font-mono text-slate-600 text-xs">
                      {req.decryptedNik}
                    </TableCell>
                    <TableCell>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="link"
                            className="text-indigo-600 h-auto p-0 text-xs font-bold"
                          >
                            View Selfie
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-md">
                          <DialogHeader>
                            <DialogTitle>
                              Investigator Selfie Evidence
                            </DialogTitle>
                          </DialogHeader>
                          <div className="flex items-center justify-center p-4 bg-slate-50 rounded-xl overflow-hidden">
                            <img
                              src={`/kyc-image/${req.id}`}
                              alt="KYC Selfie"
                              className="max-w-full max-h-[60vh] object-contain rounded-lg shadow-sm"
                            />
                          </div>
                        </DialogContent>
                      </Dialog>
                    </TableCell>
                    <TableCell className="text-right space-x-2">
                      <Form method="post" className="inline-block">
                        <input type="hidden" name="id" value={req.id} />
                        <input type="hidden" name="intent" value="reject_kyc" />
                        <Button
                          type="submit"
                          size="sm"
                          variant="destructive"
                          className="h-7 text-[10px]"
                        >
                          Reject
                        </Button>
                      </Form>
                      <Form method="post" className="inline-block">
                        <input type="hidden" name="id" value={req.id} />
                        <input
                          type="hidden"
                          name="intent"
                          value="approve_kyc"
                        />
                        <Button
                          type="submit"
                          size="sm"
                          className="h-7 text-[10px] bg-emerald-600 hover:bg-emerald-700"
                        >
                          Approve
                        </Button>
                      </Form>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="md:col-span-1 h-fit">
            <CardHeader>
              <CardTitle>Institutions</CardTitle>
              <CardDescription>Official banking entities</CardDescription>
            </CardHeader>
            <CardContent>
              <Form method="post" className="space-y-4 mb-6">
                <input type="hidden" name="intent" value="add_institution" />
                <div className="space-y-1">
                  <Label>Institution Name</Label>
                  <Input name="name" placeholder="e.g. Bank Jago" required />
                </div>
                <div className="space-y-1">
                  <Label>Hotline</Label>
                  <Input name="hotline" placeholder="1500..." />
                </div>
                <Button type="submit" className="w-full" variant="secondary">
                  Register Bank
                </Button>
              </Form>

              <div className="space-y-2">
                {institutions.map((inst: any) => (
                  <div
                    key={inst.id}
                    className="flex items-center justify-between p-2 rounded-lg border bg-white text-sm group"
                  >
                    <span className="font-semibold text-slate-700">
                      {inst.name}
                    </span>
                    <Form method="post">
                      <input
                        type="hidden"
                        name="intent"
                        value="delete_institution"
                      />
                      <input type="hidden" name="id" value={inst.id} />
                      <Button
                        type="submit"
                        variant="ghost"
                        size="sm"
                        className="h-6 w-6 p-0 text-red-500 opacity-0 group-hover:opacity-100"
                      >
                        ×
                      </Button>
                    </Form>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader className="border-b bg-red-50/20">
              <CardTitle className="text-red-800 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                Threat Detection
              </CardTitle>
              <CardDescription className="text-red-600/80 font-medium text-xs">
                Recent anomalies flagged by the Anomaly Engine
              </CardDescription>
            </CardHeader>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Bank</TableHead>
                  <TableHead>Detected Number</TableHead>
                  <TableHead>Quorum</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {anomalies.map((anomaly: any) => (
                  <TableRow key={anomaly.id} className="group">
                    <TableCell className="font-bold text-slate-800">
                      {anomaly.institution?.name || "Unknown"}
                    </TableCell>
                    <TableCell className="font-mono text-red-600 text-xs font-semibold">
                      {anomaly.detectedNumber}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          anomaly.consensusCount >= 2 ? "default" : "outline"
                        }
                        className="text-[10px]"
                      >
                        {anomaly.consensusCount}/2 Signatures
                      </Badge>
                      {(anomaly.severity === "LOW" ||
                        anomaly.status === "false_positive") && (
                        <Badge
                          variant="secondary"
                          className="ml-2 text-[10px] bg-amber-100 text-amber-800"
                        >
                          Legit Claim
                        </Badge>
                      )}
                    </TableCell>
                    <TableCell className="text-right">
                      {anomaly.severity === "LOW" ||
                      anomaly.status === "false_positive" ? (
                        <Form method="post">
                          <input type="hidden" name="id" value={anomaly.id} />
                          <input
                            type="hidden"
                            name="intent"
                            value="approve_legit"
                          />
                          <Button
                            type="submit"
                            size="sm"
                            disabled={
                              anomaly.consensusCount < 2 ||
                              anomaly.status === "verified"
                            }
                            className="h-7 text-[10px] font-bold bg-emerald-600 hover:bg-emerald-700"
                          >
                            {anomaly.status === "verified"
                              ? "Approved"
                              : "Approve Legit"}
                          </Button>
                        </Form>
                      ) : (
                        <Form method="post">
                          <input type="hidden" name="id" value={anomaly.id} />
                          <input
                            type="hidden"
                            name="intent"
                            value="promote_anomaly"
                          />
                          <Button
                            type="submit"
                            size="sm"
                            disabled={
                              anomaly.consensusCount < 2 ||
                              anomaly.status === "verified" ||
                              anomaly.status === "rejected"
                            }
                            className="h-7 text-[10px] font-bold bg-indigo-600 hover:bg-indigo-700"
                          >
                            {anomaly.status === "rejected"
                              ? "Blacklisted"
                              : anomaly.status === "verified"
                                ? "Promoted"
                                : "Promote"}
                          </Button>
                        </Form>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
                {anomalies.length === 0 && (
                  <TableRow>
                    <TableCell
                      colSpan={4}
                      className="text-center py-12 text-slate-400 italic"
                    >
                      No threats detected. Registry is safe.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </Card>
        </div>

        <Card className="border-emerald-100 shadow-emerald-900/5">
          <CardHeader className="bg-emerald-50/30">
            <CardTitle className="text-emerald-900">
              Verified Registry
            </CardTitle>
            <CardDescription className="text-emerald-700/70 font-medium">
              The cryptographically verified source of truth
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <Form
              method="post"
              className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-10 items-end p-5 border-2 border-emerald-100 rounded-2xl bg-emerald-50/10"
            >
              <input type="hidden" name="intent" value="add_contact" />
              <div className="space-y-2">
                <Label className="text-emerald-800 font-bold">NAME</Label>
                <Input
                  name="name"
                  placeholder="Official Contact Name"
                  required
                  className="border-emerald-200 focus-visible:ring-emerald-500"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-emerald-800 font-bold">WHATSAPP</Label>
                <Input
                  name="whatsapp"
                  placeholder="+62..."
                  className="border-emerald-200 focus-visible:ring-emerald-500"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-emerald-800 font-bold">DOMAIN</Label>
                <Input
                  name="domain"
                  placeholder="domain.com"
                  className="border-emerald-200 focus-visible:ring-emerald-500"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-emerald-800 font-bold">
                  INSTITUTION
                </Label>
                <select
                  name="institutionId"
                  className="flex h-9 w-full rounded-md border-2 border-emerald-200 bg-white px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-500"
                >
                  <option value="">(Select Institution)</option>
                  {institutions.map((i: any) => (
                    <option key={i.id} value={i.id}>
                      {i.name}
                    </option>
                  ))}
                </select>
              </div>
              <Button
                type="submit"
                className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl shadow-lg shadow-emerald-900/20"
              >
                Verify Credential
              </Button>
            </Form>

            <Table>
              <TableHeader>
                <TableRow className="border-emerald-100">
                  <TableHead className="text-emerald-900 font-bold">
                    INSTITUTION
                  </TableHead>
                  <TableHead className="text-emerald-900 font-bold">
                    VERIFIED ENTITY
                  </TableHead>
                  <TableHead className="text-emerald-900 font-bold">
                    CREDENTIAL
                  </TableHead>
                  <TableHead className="text-right text-emerald-900 font-bold">
                    MANAGEMENT
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {contacts.map((contact: any) => (
                  <TableRow
                    key={contact.id}
                    className="border-emerald-50 hover:bg-emerald-50/30 transition-colors"
                  >
                    <TableCell>
                      <Badge
                        variant="outline"
                        className="bg-white text-slate-500 border-slate-200"
                      >
                        {contact.institution?.name || "NONE"}
                      </Badge>
                    </TableCell>
                    <TableCell className="font-bold text-slate-900">
                      {contact.name}
                    </TableCell>
                    <TableCell className="font-mono text-emerald-700 font-bold text-xs">
                      {contact.whatsapp || contact.phone || contact.domain}
                    </TableCell>
                    <TableCell className="text-right">
                      <Form method="post">
                        <input
                          type="hidden"
                          name="intent"
                          value="delete_contact"
                        />
                        <input type="hidden" name="id" value={contact.id} />
                        <Button
                          variant="ghost"
                          size="sm"
                          type="submit"
                          className="text-red-500 hover:text-red-700 hover:bg-red-50 rounded-full w-8 h-8 p-0"
                        >
                          🗑️
                        </Button>
                      </Form>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
