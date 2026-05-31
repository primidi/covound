import { z } from "zod";

export const ContactPointType = z.enum(["phone", "whatsapp", "url"]);

export const OfficialContactPointSchema = z.object({
  id: z.string().uuid().optional(),
  entityId: z.string(),
  type: ContactPointType,
  value: z.string(),
  label: z.string().optional(),
  signature: z.string().optional(), // For Domain-Anchored PKI
  verifiedAt: z.date().optional(),
});

export type OfficialContactPoint = z.infer<typeof OfficialContactPointSchema>;

export const EntitySchema = z.object({
  id: z.string().optional(),
  name: z.string().min(2).max(100),
  domain: z.string().optional(), // used for /.well-known/covound-key.json
  officialHotline: z.string().optional(),
  officialWebsite: z.string().url().optional().or(z.literal("")),
  publicKey: z.string().optional(),
  contacts: z.array(OfficialContactPointSchema).optional(),
});

export type Entity = z.infer<typeof EntitySchema>;

export const AnomalySchema = z.object({
  id: z.string().uuid().optional(),
  entityId: z.string().optional(),
  type: ContactPointType,
  value: z.string(),
  sourceUrl: z.string().optional(),
  detectedAt: z.date().default(() => new Date()),
  status: z.enum(["isolated", "confirmed", "neutralized"]).default("isolated"),
  investigatorId: z.string().optional(),
  consensusCount: z.number().default(0),
});

export type Anomaly = z.infer<typeof AnomalySchema>;
