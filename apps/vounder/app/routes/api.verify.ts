import type { LoaderFunctionArgs } from "react-router";
import { z } from "zod";
import { prisma } from "../db.server";

const VerifyQuerySchema = z.object({
  number: z
    .string()
    .min(5)
    .max(20)
    .regex(/^[+0-9]+$/, "Invalid phone number format"),
});

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const params = Object.fromEntries(url.searchParams.entries());

  const result = VerifyQuerySchema.safeParse(params);
  if (!result.success) {
    return Response.json(
      {
        error: "VALIDATION_ERROR",
        details: result.error.flatten(),
      },
      { status: 400 },
    );
  }

  const { number } = result.data;

  // Find if this number is verified
  const verified = await prisma.verifiedContact.findFirst({
    where: {
      OR: [{ phone: number }, { whatsapp: number }],
    },
    include: { institution: true },
  });

  if (verified) {
    return Response.json({
      status: "verified",
      entity: verified.name,
      institution: verified.institution?.name,
      domain: verified.domain,
    });
  }

  // If not verified, check if it's a known anomaly
  const anomaly = await prisma.anomalyReport.findFirst({
    where: { detectedNumber: number },
    include: { institution: true },
  });

  if (anomaly) {
    return Response.json({
      status: "blocked",
      reason: `Known scam credential spoofing ${anomaly.institution?.name || "financial services"}`,
      institution: anomaly.institution?.name,
      severity: anomaly.severity,
    });
  }

  const response = Response.json({
    status: "unverified",
    message:
      "This number is not in the official registry. Use with extreme caution.",
  });

  // CORS: Allow extension access
  response.headers.set("Access-Control-Allow-Origin", "*"); // Tighten in production
  response.headers.set("Access-Control-Allow-Methods", "GET, OPTIONS");

  return response;
}
