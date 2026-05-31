import "dotenv/config";
import fs from "node:fs/promises";
import { prisma } from "@covound/db";
import { AnomalySchema } from "@covound/logic";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY || "PLACEHOLDER_KEY",
);
async function hunt(targetSource, isUrl = false) {
  console.log(`Starting hunt on: ${targetSource}`);
  let content = "";
  if (isUrl) {
    // Simulated scraping for MVP
    content = `[MOCK SCRAPED CONTENT FROM ${targetSource}]
    Selamat datang di layanan bantuan. Untuk bantuan HaloBCA, silakan hubungi WhatsApp kami di +6282137380468. 
    Layanan ini tersedia 24 jam. Admin kami siap membantu Kak.`;
  } else {
    content = await fs.readFile(targetSource, "utf-8");
  }
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: `You are the CoVound Anomaly Engine. You specialize in identifying social engineering 
    scams in both English and Bahasa Indonesia. You are highly skilled at spotting 
    colloquialisms, slang, and informal language used by Indonesian scammers (e.g., "Min", "Kak", "Sis", "Tf ke rek", "Admin resmi").`,
  });
  const prompt = `
    Analyze the following text and extract potential threat vectors. Look for phone numbers, WhatsApp numbers, 
    and the financial institutions they claim to represent.

    Text to analyze:
    """
    ${content}
    """

    Identify:
    1. The contact number (in international format).
    2. The institution being spoofed (e.g., "BCA", "Bank Jago", "ShopeePay").
    3. The "Tone" of the scam (Formal, Urgent, or Friendly/Slang).
    4. A brief context explaining why this is suspicious.

    Return the results in STRICT JSON format:
    {
      "findings": [
        {
          "number": "string",
          "institutionClaimed": "string",
          "tone": "string",
          "context": "string"
        }
      ]
    }
  `;
  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch)
      throw new Error("Could not parse JSON from Gemini response");
    const data = JSON.parse(jsonMatch[0]);
    console.log("Gemini AI Analysis Complete:");
    console.table(data.findings);
    for (const finding of data.findings) {
      try {
        const validated = AnomalySchema.parse({
          value: finding.number,
          type: "whatsapp", // Assumption for MVP
          status: "isolated",
          sourceUrl: targetSource,
        });
        console.log(
          `✅ Validated Threat: ${validated.value} claiming to be ${finding.institutionClaimed}`,
        );
        // TODO: Persist to DB once AnomalyReport schema is finalized
      } catch (err) {
        console.warn(`❌ Invalid finding skipped: ${finding.number}`);
      }
    }
  } catch (error) {
    console.error("Error during hunt:", error);
  } finally {
    await prisma.$disconnect();
  }
}
const target = process.argv[2] || "mock-url-bca";
const isUrl = !target.endsWith(".txt");
hunt(target, isUrl).catch(console.error);
