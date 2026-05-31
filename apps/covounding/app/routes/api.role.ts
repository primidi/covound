import { UserRole } from "@covound/db/types";
import type { LoaderFunctionArgs } from "react-router";
import { prisma } from "~/db.server";

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const userId = url.searchParams.get("userId");

  if (!userId) {
    return Response.json({ role: UserRole.REPORTER });
  }

  const user = await prisma.user.findUnique({ where: { id: userId } });
  return Response.json({ role: user?.role || UserRole.REPORTER });
}
