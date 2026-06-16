import { type ActionFunctionArgs, data } from "react-router";
import { getPrisma } from "../db.server";
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
export async function loader({ request, context }: { request: Request; context: { cloudflare?: { env?: Record<string, string | undefined> } } }) {
  const env = context?.cloudflare?.env;
  const prisma = getPrisma(env);

  // EARLY AUTH: Validate the secret
  try {
    validateExtensionAccess(request);
  } catch (_err) {
    return data(
      { error: "Unauthorized" },
      { status: 401, headers: getCorsHeaders(request) },
    );
  }

  const kv = context?.cloudflare?.env?.VERIFIED_CONTACTS;
  if (kv) {
    try {
      const cached = await kv.get("snapshot");
      if (cached) {
        console.log("Edge Cache: Registry snapshot retrieved from Cloudflare KV.");
        return data(JSON.parse(cached), { headers: getCorsHeaders(request) });
      }
    } catch (e) {
      console.error("KV read error in snapshot api:", e);
    }
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
  const whitelist = contacts.map((c) => ({
    value: c.whatsapp || c.phone || c.domain,
    type: c.whatsapp ? "whatsapp" : c.phone ? "phone" : "url",
    institution: c.institution?.name || "Official Entity",
    status: "verified",
  }));

  // Map blacklist (Scam)
  const blacklist = rejectedAnomalies.map((a) => ({
    value: a.detectedNumber,
    type: "phone",
    institution: "Flagged Threat",
    status: "scam",
  }));

  const snapshot = { whitelist, blacklist };

  if (kv) {
    try {
      await kv.put("snapshot", JSON.stringify(snapshot), {
        expirationTtl: 300, // Cache for 5 minutes
      });
      console.log("Edge Cache: Re-hydrated registry snapshot in Cloudflare KV.");
    } catch (e) {
      console.error("KV write error in snapshot api:", e);
    }
  }

  return data(snapshot, { headers: getCorsHeaders(request) });
}

export async function action({ request }: ActionFunctionArgs) {
  if (request.method === "OPTIONS") {
    return new Response(null, {
      headers: getCorsHeaders(request),
    });
  }
  return null;
}
