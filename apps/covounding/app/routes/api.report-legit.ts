import type { ActionFunctionArgs } from "react-router";
import { handleReportLegit } from "../lib/api-handlers.server";

/**
 * Registry for the Report Legit API.
 * Most requests from the extension are intercepted in entry.server.tsx to bypass CSRF.
 */
export async function action({ request, context }: ActionFunctionArgs) {
  return handleReportLegit(request, context.cloudflare.env);
}

export async function loader({ request, context }: ActionFunctionArgs) {
  return handleReportLegit(request, context.cloudflare.env);
}
