import fs from "node:fs/promises";
import path from "node:path";
import { type ActionFunctionArgs, data } from "react-router";
import { extractScamMetadata } from "~/lib/gemini.server";
import { redactImage } from "~/lib/redact.server";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_MIME_TYPES = ["image/png", "image/jpeg", "image/webp"];

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const files = formData.getAll("evidence") as File[];

  if (
    !files ||
    files.length === 0 ||
    (files.length === 1 && files[0].size === 0)
  ) {
    return data({ error: "No images provided" }, { status: 400 });
  }

  // Phase 4: DoS Mitigation - Validate file size and type
  for (const file of files) {
    if (file.size === 0) continue;

    if (file.size > MAX_FILE_SIZE) {
      return data(
        { error: `File ${file.name} exceeds 5MB limit` },
        { status: 413 },
      );
    }

    if (!ALLOWED_MIME_TYPES.includes(file.type)) {
      return data(
        { error: `File ${file.name} has unsupported type: ${file.type}` },
        { status: 415 },
      );
    }
  }

  try {
    const results = [];
    const aggregatedMetadata = {
      scammerNumbers: new Set<string>(),
      entityNames: new Set<string>(),
    };

    for (const file of files) {
      if (file.size === 0) continue;

      const buffer = Buffer.from(await file.arrayBuffer());

      // Step 1: AI Surgery (Concurrent extraction & PII detection)
      const result = await extractScamMetadata(buffer, file.type);

      // Step 2: Server-Side Redaction (Sharp)
      const sanitizedBuffer = await redactImage(buffer, result.piiCoordinates);

      // Step 3: Save Sanitized Artifact (Public)
      const timestamp = Date.now() + Math.random(); // Ensure unique timestamp
      const sanitizedFilename = `sanitized-${timestamp}.png`;
      const publicPath = path.join(process.cwd(), "public", "artifacts");
      await fs.mkdir(publicPath, { recursive: true });
      await fs.writeFile(
        path.join(publicPath, sanitizedFilename),
        sanitizedBuffer,
      );

      // Step 4: Save Original Evidence (Private Transient Buffer)
      const originalFilename = `raw-${timestamp}.png`;
      const privatePath = path.join(
        process.cwd(),
        "../../storage/private/unredacted",
      );
      await fs.mkdir(privatePath, { recursive: true });
      await fs.writeFile(path.join(privatePath, originalFilename), buffer);

      results.push({
        sanitizedUrl: `/artifacts/${sanitizedFilename}`,
        originalUrl: `/private/unredacted/${originalFilename}`,
      });

      if (result.scammerNumber)
        aggregatedMetadata.scammerNumbers.add(result.scammerNumber);
      if (result.entityName)
        aggregatedMetadata.entityNames.add(result.entityName);
    }

    return data({
      evidence: results,
      scammerNumber: Array.from(aggregatedMetadata.scammerNumbers)[0] || null,
      entityName: Array.from(aggregatedMetadata.entityNames)[0] || null,
      allScammerNumbers: Array.from(aggregatedMetadata.scammerNumbers),
      allEntityNames: Array.from(aggregatedMetadata.entityNames),
    });
  } catch (error) {
    console.error("API Analyze failure:", error);
    return data(
      { error: "Failed to analyze and sanitize images" },
      { status: 500 },
    );
  }
}
