import type { ActionFunctionArgs } from "react-router";
import { handleReportAnomaly } from "../lib/api-handlers.server";

/**
 * Registry for the Report Anomaly API [FR2.4].
 * Most requests from the extension are intercepted in entry.server.tsx to bypass CSRF.
 * This file remains for routing integrity and direct server-side calls.
 */
export async function action({ request, context }: ActionFunctionArgs) {
  return handleReportAnomaly(request, context.cloudflare.env);
}

export async function loader({ request, context }: ActionFunctionArgs) {
  return handleReportAnomaly(request, context.cloudflare.env);
}
