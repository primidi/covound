import * as fs from "node:fs";
import * as path from "node:path";
import { UserRole } from "@covound/db/types";
import type { LoaderFunctionArgs } from "react-router";
import { prisma } from "~/db.server";
import { auth } from "~/lib/auth.server";

export async function loader({ request, params }: LoaderFunctionArgs) {
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

  if (!kycRequest || !kycRequest.selfiePath) {
    return new Response("Not found", { status: 404 });
  }

  const filePath = path.join(
    process.cwd(),
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
