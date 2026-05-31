import { AnomalySchema } from "@covound/logic";
import { data } from "react-router";
import { prisma } from "../db.server";
import { validateExtensionAccess } from "./security.server";

/**
 * Shared CORS headers for extension communication.
 */
function getCorsHeaders(request?: Request) {
  const origin = request?.headers.get("Origin");
  // In production, we should ideally restrict this to specific extension IDs
  // or the app's own domain. For now, we allow the request's origin if present,
  // or fallback to * but only when combined with the X-CoVound-Secret check.
  return {
    "Access-Control-Allow-Origin": origin || "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers":
      "Content-Type, X-Requested-With, X-CoVound-Secret",
    "Access-Control-Allow-Credentials": "true",
  };
}

/**
 * Handle OPTIONS preflight requests for the extension.
 */
function handleOptions(request: Request) {
  return new Response(null, {
    status: 204,
    headers: getCorsHeaders(request),
  });
}

/**
 * Shared handler for reporting anomalies from the extension.
 * Bypasses CSRF by using GET or being called from entry.server.tsx.
 */
export async function handleReportAnomaly(request: Request) {
  if (request.method === "OPTIONS") return handleOptions(request);

  // Allow both GET and POST. GET is used to bypass CSRF in React Router 7.
  if (request.method !== "POST" && request.method !== "GET") {
    return data(
      { error: "Method not allowed" },
      { status: 405, headers: getCorsHeaders(request) },
    );
  }

  // EARLY AUTH: Validate the secret
  try {
    validateExtensionAccess(request);
  } catch (err: any) {
    return data(
      { error: "Unauthorized" },
      { status: 401, headers: getCorsHeaders(request) },
    );
  }

  try {
    let payload: any;
    if (request.method === "GET") {
      const url = new URL(request.url);
      payload = {
        detectedNumber: url.searchParams.get("detectedNumber"),
        sourceUrl: url.searchParams.get("sourceUrl"),
        institutionName: url.searchParams.get("institutionName"),
      };
    } else {
      payload = await request.json();
    }

    const parsed = AnomalySchema.safeParse({
      value: payload.detectedNumber,
      type: payload.detectedNumber?.startsWith("http") ? "url" : "whatsapp",
      sourceUrl: payload.sourceUrl,
      status: "isolated",
    });

    if (!parsed.success) {
      return data(
        { error: "Invalid anomaly data", details: parsed.error.format() },
        { status: 422, headers: getCorsHeaders(request) },
      );
    }

    const existing = await prisma.anomalyReport.findFirst({
      where: {
        detectedNumber: parsed.data.value,
        status: "PENDING",
      },
    });

    if (existing) {
      return data(
        { success: true, message: "Anomaly already in queue", id: existing.id },
        { status: 200, headers: getCorsHeaders(request) },
      );
    }

    let institutionId: string | undefined;
    if (payload.institutionName) {
      const institution = await prisma.institution.findFirst({
        where: { name: { contains: payload.institutionName } },
      });
      institutionId = institution?.id;
    }

    const report = await prisma.anomalyReport.create({
      data: {
        detectedNumber: parsed.data.value,
        sourceUrl: parsed.data.sourceUrl || "Voundism Shield",
        severity: "COMMUNITY_FLAGGED",
        status: "PENDING",
        institutionId: institutionId,
      },
    });

    return data(
      { success: true, id: report.id },
      { status: 201, headers: getCorsHeaders(request) },
    );
  } catch (error: any) {
    console.error("Anomaly Report Failure:", error.message || "Unknown error");
    return data(
      { error: "Internal server error" },
      { status: 500, headers: getCorsHeaders(request) },
    );
  }
}

/**
 * Shared handler for reporting legitimacy claims from the extension.
 * Bypasses CSRF by using GET or being called from entry.server.tsx.
 */
export async function handleReportLegit(request: Request) {
  if (request.method === "OPTIONS") return handleOptions(request);

  if (request.method !== "POST" && request.method !== "GET") {
    return data(
      { error: "Method not allowed" },
      { status: 405, headers: getCorsHeaders(request) },
    );
  }

  try {
    validateExtensionAccess(request);
  } catch (err: any) {
    return data(
      { error: "Unauthorized" },
      { status: 401, headers: getCorsHeaders(request) },
    );
  }

  try {
    let payload: any;
    if (request.method === "GET") {
      const url = new URL(request.url);
      payload = {
        detectedNumber: url.searchParams.get("detectedNumber"),
        sourceUrl: url.searchParams.get("sourceUrl"),
      };
    } else {
      payload = await request.json();
    }

    const parsed = AnomalySchema.safeParse({
      value: payload.detectedNumber,
      type: payload.detectedNumber?.startsWith("http") ? "url" : "whatsapp",
      sourceUrl: payload.sourceUrl,
      status: "isolated",
    });

    if (!parsed.success) {
      return data(
        { error: "Invalid data", details: parsed.error.format() },
        { status: 422, headers: getCorsHeaders(request) },
      );
    }

    const report = await prisma.anomalyReport.create({
      data: {
        detectedNumber: parsed.data.value,
        sourceUrl: parsed.data.sourceUrl || "Voundism Shield",
        severity: "LOW",
        status: "PENDING",
      },
    });

    return data(
      { success: true, id: report.id },
      { status: 201, headers: getCorsHeaders(request) },
    );
  } catch (error: any) {
    console.error("Legit Report Failure:", error.message || "Unknown error");
    return data(
      { error: "Internal server error" },
      { status: 500, headers: getCorsHeaders(request) },
    );
  }
}
