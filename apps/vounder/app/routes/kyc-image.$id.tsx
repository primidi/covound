import * as fs from "node:fs";
import * as path from "node:path";
import { UserRole } from "@covound/db/types";
import type { LoaderFunctionArgs } from "react-router";
import { getPrisma } from "~/db.server";
import { getAuth } from "~/lib/auth.server";

export async function loader({ request, params, context }: LoaderFunctionArgs) {
  const env = context.cloudflare.env;
  const prisma = getPrisma(env);
  const auth = getAuth(env);
  const session = await auth.api.getSession({ headers: request.headers });
  if (!session) {
    return new Response("Unauthorized", { status: 401 });
  }

  // Ensure strict RBAC - only ADMINs can view KYC images
  const user = await prisma.user.findUnique({ where: { id: session.user.id } });
  if (user?.role !== UserRole.ADMIN) {
    return new Response("Forbidden", { status: 403 });
  }

  const kycReqId = params.id;
  if (!kycReqId) return new Response("Missing ID", { status: 400 });

  const kycRequest = await prisma.kycRequest.findUnique({
    where: { id: kycReqId },
  });

  if (!kycRequest?.selfiePath) {
    return new Response("Not found", { status: 404 });
  }

  const supabaseUrl = env.SUPABASE_URL;
  const supabaseKey = env.SUPABASE_SERVICE_ROLE_KEY;

  if (supabaseUrl && supabaseKey) {
    // Fetch from Supabase Storage REST API
    const downloadUrl = `${supabaseUrl}/storage/v1/object/raw-evidence/${kycRequest.selfiePath}`;
    const downloadRes = await fetch(downloadUrl, {
      headers: {
        Authorization: `Bearer ${supabaseKey}`,
      },
    });

    if (!downloadRes.ok) {
      return new Response("Image file missing from storage", { status: 404 });
    }

    const arrayBuffer = await downloadRes.arrayBuffer();
    return new Response(arrayBuffer, {
      headers: {
        "Content-Type": downloadRes.headers.get("Content-Type") || "image/jpeg",
        "Cache-Control": "private, max-age=3600",
      },
    });
  } else {
    // Local fallback using fs
    const cwd = typeof process !== "undefined" && process.cwd ? process.cwd() : "";
    const filePath = path.join(
      cwd,
      "..",
      "..",
      "storage",
      "kyc",
      kycRequest.selfiePath,
    );

    if (!fs.existsSync(filePath)) {
      return new Response("Image file missing from storage", { status: 404 });
    }

    const file = fs.readFileSync(filePath);

    return new Response(file, {
      headers: {
        "Content-Type": "image/jpeg", // or use mime-types library if necessary
        "Cache-Control": "private, max-age=3600",
      },
    });
  }
}
