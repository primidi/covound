import "dotenv/config"; // Load environment variables first
import { prisma } from "@covound/db";
import { getDiagnosis } from "@covound/logic";
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import { z } from "zod";

const server = new Server(
  {
    name: "co-vounder-server",
    version: "1.0.0",
  },
  {
    capabilities: {
      tools: {},
    },
  },
);

server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: "verify_contact",
        description:
          "Verify if a phone number or WhatsApp number belongs to an official entity (like a bank). Uses the CoVounder Source of Truth registry.",
        inputSchema: {
          type: "object",
          properties: {
            number: {
              type: "string",
              description:
                "The phone or WhatsApp number to verify (e.g. +62821...)",
            },
          },
          required: ["number"],
        },
      },
    ],
  };
});

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  if (name === "verify_contact") {
    const { number } = z.object({ number: z.string() }).parse(args);

    const verified = await prisma.verifiedContact.findFirst({
      where: {
        OR: [{ phone: number }, { whatsapp: number }],
      },
      include: { institution: true },
    });

    if (verified) {
      const hotline = verified.institution?.officialHotline
        ? ` di ${verified.institution.officialHotline}`
        : "";
      return {
        content: [
          {
            type: "text",
            text: `[COVOUNDER PERSONA - CALM & EDUCATIONAL]
Halo, saya melihat Anda menanyakan tentang nomor ${number}. Kabar baik: nomor ini terverifikasi secara resmi sebagai milik **${verified.name}** (Bagian dari ${verified.institution?.name || "Lembaga Resmi"}).

Anda dapat mempercayai nomor ini. Untuk bantuan lebih lanjut, Anda juga dapat menghubungi call center resmi mereka${hotline}. Tetap waspada dan jangan pernah membagikan PIN atau OTP Anda.`,
          },
        ],
      };
    }

    const anomaly = await prisma.anomalyReport.findFirst({
      where: { detectedNumber: number },
      include: { institution: true },
    });

    if (anomaly) {
      const bankName = anomaly.institution?.name || "institusi keuangan";
      const diagnosis = getDiagnosis(bankName, "anomaly");
      const hotline = anomaly.institution?.officialHotline
        ? ` melalui nomor resmi di ${anomaly.institution.officialHotline}`
        : " melalui jalur resmi di aplikasi mereka";

      return {
        content: [
          {
            type: "text",
            text: `[${diagnosis.intro}]
    Sangat penting bagi Anda untuk **TIDAK** menghubungi nomor ${number}. 

    Sistem CoVounder telah mendiagnosis nomor ini sebagai bagian dari upaya penipuan yang mengatasnamakan **${bankName}**. ${diagnosis.diagnosis} Kami menemukan nomor palsu ini disusupkan secara ilegal di situs ${anomaly.sourceUrl}. 

    ${diagnosis.prescription}. Segera hubungi ${bankName}${hotline}. ${diagnosis.footer}`,
          },
        ],
        isError: true,
      };
    }

    const diagnosis = getDiagnosis("institusi", "unverified");
    return {
      content: [
        {
          type: "text",
          text: `[${diagnosis.intro}]
    Saya telah mengecek nomor ${number} di rekam medis digital kami, dan sayangnya nomor ini **TIDAK TERDAFTAR** di Registry Resmi CoVounder.

    ${diagnosis.diagnosis} Dalam kondisi darurat digital, nomor yang tidak terverifikasi harus dianggap berisiko tinggi. Jangan berikan informasi sensitif apa pun. Bisakah Anda sebutkan nama bank atau instansi yang sedang Anda cari? Saya akan berikan nomor resminya untuk Anda.`,
        },
      ],
    };
  }

  throw new Error(`Tool not found: ${name}`);
});

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("CoVounder MCP server running on stdio");
}

main().catch((error) => {
  console.error("Server error:", error);
  process.exit(1);
});
