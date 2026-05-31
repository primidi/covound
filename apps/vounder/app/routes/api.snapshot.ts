import type { OfficialContactPoint } from "@covound/logic";
import { prisma } from "~/db.server";

export async function loader() {
  const [contacts, anomalies] = await Promise.all([
    prisma.verifiedContact.findMany({
      include: { institution: true },
      where: { isOfficial: true },
    }),
    prisma.anomalyReport.findMany({
      include: { institution: true },
      where: { status: { in: ["pending", "isolated", "PENDING"] } }, // Handle case variants
    }),
  ]);

  const verifiedEntries = contacts.map((c: any) => ({
    type: (c.whatsapp
      ? "whatsapp"
      : c.phone
        ? "phone"
        : "url") as OfficialContactPoint["type"],
    value: (c.whatsapp || c.phone || c.domain) as string,
    institution: c.institution?.name,
    signature: c.signature || undefined,
    status: "verified" as const,
  }));

  const pendingEntries = anomalies.map((a: any) => ({
    type: "whatsapp" as OfficialContactPoint["type"], // Default for now
    value: a.detectedNumber,
    institution: a.institution?.name || "Community Reported",
    status: "pending" as const,
  }));

  const snapshot = {
    version: Date.now(),
    contacts: [...verifiedEntries, ...pendingEntries],
  };

  return new Response(JSON.stringify(snapshot), {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store", // Don't cache pending anomalies for too long
      "Access-Control-Allow-Origin": "*",
    },
  });
}
