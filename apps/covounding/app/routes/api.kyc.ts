import * as fs from "node:fs";
import * as path from "node:path";
import { encryptData } from "@covound/logic";
import type { ActionFunctionArgs } from "react-router";
import { prisma } from "~/db.server";
import { auth } from "~/lib/auth.server";

export async function action({ request }: ActionFunctionArgs) {
  const session = await auth.api.getSession({ headers: request.headers });
  if (!session) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const formData = await request.formData();

    const name = formData.get("name") as string;
    const nik = formData.get("nik") as string;
    const selfieFile = formData.get("selfie") as File;

    if (!name || !nik || !selfieFile?.name) {
      return Response.json(
        { error: "Missing required fields or selfie image." },
        { status: 400 },
      );
    }

    // Get the ENCRYPTION_KEY from env
    const secretKey = process.env.ENCRYPTION_KEY;
    if (!secretKey || secretKey.length !== 32) {
      console.error("Missing or invalid ENCRYPTION_KEY in environment");
      return Response.json(
        { error: "Server configuration error" },
        { status: 500 },
      );
    }

    // Encrypt the NIK
    const encryptedNik = encryptData(nik, secretKey);

    const arrayBuffer = await selfieFile.arrayBuffer();
    const ext = path.extname(selfieFile.name) || ".jpg";
    const fileName = `kyc_${session.user.id}_${Date.now()}${ext}`;

    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (supabaseUrl && supabaseKey) {
      // Upload to Supabase Storage REST API
      const uploadUrl = `${supabaseUrl}/storage/v1/object/raw-evidence/${fileName}`;
      const uploadRes = await fetch(uploadUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${supabaseKey}`,
          "Content-Type": selfieFile.type || "image/jpeg",
        },
        body: arrayBuffer,
      });

      if (!uploadRes.ok) {
        const errorText = await uploadRes.text();
        console.error("Supabase upload failed:", errorText);
        throw new Error("Failed to upload image to remote storage");
      }
    } else {
      // Local fallback using fs
      const buffer = Buffer.from(arrayBuffer);
      const uploadDir = path.join(process.cwd(), "..", "..", "storage", "kyc");
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }
      const filePath = path.join(uploadDir, fileName);
      fs.writeFileSync(filePath, buffer);
    }

    // Save to the database
    await prisma.kycRequest.upsert({
      where: { userId: session.user.id },
      update: {
        name,
        encryptedNik,
        selfiePath: fileName,
        status: "pending",
      },
      create: {
        userId: session.user.id,
        name,
        encryptedNik,
        selfiePath: fileName,
        status: "pending",
      },
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("KYC Submission Error:", error);
    return Response.json(
      { error: "Failed to process KYC submission." },
      { status: 500 },
    );
  }
}
