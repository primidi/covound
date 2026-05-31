import { type ActionFunctionArgs, data } from "react-router";
import { prisma } from "../db.server";
import { validateExtensionAccess } from "../lib/security.server";

/**
 * Shared CORS headers for extension communication.
 */
function getCorsHeaders(request?: Request) {
  const origin = request?.headers.get("Origin");
  return {
    "Access-Control-Allow-Origin": origin || "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, X-CoVound-Secret",
    "Access-Control-Allow-Credentials": "true",
  };
}

/**
 * Task 1: Build the Registry Sync API [FR3.2]
 * Exposes the verified contact registry for extension synchronization.
 */
export async function loader({ request }: { request: Request }) {
  // EARLY AUTH: Validate the secret
  try {
    validateExtensionAccess(request);
  } catch (_err: any) {
    return data(
      { error: "Unauthorized" },
      { status: 401, headers: getCorsHeaders(request) },
    );
  }

  const [contacts, rejectedAnomalies] = await prisma.$transaction([
    prisma.verifiedContact.findMany({
      include: {
        institution: true,
      },
    }),
    prisma.anomalyReport.findMany({
      where: { status: "rejected" },
    }),
  ]);

  // Map whitelist (Verified)
  const whitelist = contacts.map((c: any) => ({
    value: c.whatsapp || c.phone || c.domain,
    type: c.whatsapp ? "whatsapp" : c.phone ? "phone" : "url",
    institution: c.institution?.name || "Official Entity",
    status: "verified",
  }));

  // Map blacklist (Scam)
  const blacklist = rejectedAnomalies.map((a: any) => ({
    value: a.detectedNumber,
    type: "phone",
    institution: "Flagged Threat",
    status: "scam",
  }));

  return data(
    { whitelist, blacklist },
    {
      headers: getCorsHeaders(request),
    },
  );
}

export async function action({ request }: ActionFunctionArgs) {
  if (request.method === "OPTIONS") {
    return new Response(null, {
      headers: getCorsHeaders(request),
    });
  }
  return null;
}
