import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export interface ExtractionResult {
  scammerNumber?: string;
  entityName?: string;
  context?: string;
  confidenceScore: number;
  piiCoordinates: {
    label: string;
    x: number;
    y: number;
    w: number;
    h: number;
  }[];
}

const EXTRACTION_PROMPT = `
You are a Digital Forensic Assistant named CoVounding. 
Analyze the provided image (a screenshot of a social engineering scam) to extract metadata AND identify sensitive personal information for redaction.

1. EXTRACTION:
- scammerNumber: The phone number or WhatsApp ID of the scammer (+62...).
- entityName: The organization being spoofed (e.g., Bank Jago, BCA).
- context: A brief clinical description of the attack vector.

2. SURGICAL SANITIZATION (PII):
- Identify any Personally Identifiable Information (PII) that IS NOT the scammer's details.
- This includes: victim faces, victim names, unrelated chat messages, or private banking details.
- For each item, provide bounding box coordinates relative to a 1000x1000 grid.

Return the result strictly as a JSON object:
{
  "scammerNumber": "...",
  "entityName": "...",
  "context": "...",
  "confidenceScore": 0.0-1.0,
  "piiCoordinates": [
    { "label": "victim_face", "x": 100, "y": 200, "w": 50, "h": 50 },
    ...
  ]
}
`;

/**
 * Dual-Model Triage [FR3.1]
 * 1. Try Gemini 2.0 Flash (Fast/Cheap)
 * 2. If 429 or confidence is low, escalate to Gemini 2.5 Pro (Accurate)
 */
export async function extractScamMetadata(
  imageBuffer: Buffer,
  mimeType: string,
): Promise<ExtractionResult> {
  const startTime = performance.now();
  const flashModel = genAI.getGenerativeModel({
    model: "gemini-3.1-flash-lite",
  });
  const proModel = genAI.getGenerativeModel({ model: "gemini-3.5-flash" });

  const imageParts = [
    {
      inlineData: {
        data: imageBuffer.toString("base64"),
        mimeType,
      },
    },
  ];

  let flashData: ExtractionResult | null = null;
  let useProFallback = false;

  try {
    console.log("CoVounding: Performing Level 1 Diagnosis (Flash Lite 3.1)...");
    const flashResult = await flashModel.generateContent([
      EXTRACTION_PROMPT,
      ...imageParts,
    ]);
    const flashText = flashResult.response.text();
    flashData = parseJson(flashText);

    if (flashData && flashData.confidenceScore >= 0.8) {
      const duration = (performance.now() - startTime).toFixed(2);
      console.log(
        `🏥 CoVounding: Level 1 Diagnosis Complete in ${duration}ms. Confidence: ${flashData.confidenceScore}`,
      );
      return flashData;
    }

    console.warn("CoVounding: Low confidence from Flash Lite. Escalating...");
    useProFallback = true;
  } catch (error: any) {
    const isRateLimit =
      error?.status === 429 ||
      error?.message?.includes("429") ||
      error?.message?.toLowerCase().includes("quota");

    if (isRateLimit) {
      console.error(
        "💥 CoVounding: Level 1 Rate Limit (429) hit. Escalating to Level 2 (Flash 3.5) immediately...",
      );
      useProFallback = true;
    } else {
      console.error(
        "💥 CoVounding: Flash Level 1 failed with unexpected error:",
        error.message || "Unknown error",
      );
      useProFallback = true;
    }
  }

  if (useProFallback) {
    try {
      console.log("CoVounding: Performing Level 2 Diagnosis (Flash 3.5)...");
      const proResult = await proModel.generateContent([
        EXTRACTION_PROMPT,
        ...imageParts,
      ]);
      const proText = proResult.response.text();
      const proData = parseJson(proText);

      const duration = (performance.now() - startTime).toFixed(2);
      console.log(
        `🏥 CoVounding: Level 2 Diagnosis Complete in ${duration}ms.`,
      );

      if (proData) {
        if (!proData.piiCoordinates) proData.piiCoordinates = [];
        return proData;
      }
    } catch (proError: any) {
      console.error(
        "💥 CoVounding: Level 2 (Pro) also failed:",
        proError.message || "Unknown error",
      );
    }
  }

  const finalDuration = (performance.now() - startTime).toFixed(2);
  console.error(
    `💥 CoVounding: AI Extraction completely failed after ${finalDuration}ms.`,
  );
  return { confidenceScore: 0, piiCoordinates: [] };
}

function parseJson(text: string): ExtractionResult | null {
  try {
    // Remove markdown code blocks if present
    const jsonStr = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();
    return JSON.parse(jsonStr);
  } catch (e: any) {
    console.error(
      "Failed to parse AI response as JSON:",
      e.message || "Parse Error",
    );
    return null;
  }
}
