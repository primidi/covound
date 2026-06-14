# Plan: Cloudflare & Supabase Migration [PRJ-OPS-02]

## 🎯 Goal
Migrate from the legacy GCP/SQLite model to a cost-optimized, edge-first infrastructure using Cloudflare Pages/Workers and Supabase.

---

## 🛠️ Step 1: Framework & Environment Adaptation
**Objective:** Prepare the React Router monorepo for Cloudflare's edge environment.

- [ ] **1.1 Install Cloudflare Adapters**
  - [ ] Research and install `@react-router/cloudflare` for the `covounding` and `vounder` apps.
  - [ ] Update `react-router.config.ts` in both apps to use the Cloudflare adapter.
- [ ] **1.2 Resolve Node.js Native Dependencies (`sharp`)**
  - [ ] Since `sharp` is not edge-compatible, research **Supabase Edge Functions** (Deno) or **Cloudflare Images** as a replacement for PII redaction.
  - [ ] Refactor `@covound/logic` or create a new edge-compatible handler for image processing.
- [ ] **1.3 Secret Management Migration**
  - [ ] Migrate `DATABASE_URL`, `BETTER_AUTH_SECRET`, and `GEMINI_API_KEY` to **Cloudflare Secrets** (via `wrangler secret put`).

---

## 🛠️ Step 2: Supabase Integration
**Objective:** Establish the "Source of Truth" in a managed PostgreSQL environment.

- [ ] **2.1 Provision Supabase Project**
  - [ ] Create a new Supabase project (`covound-prod`).
  - [ ] Obtain the connection string for the **Prisma Accelerate** or **Supabase Transaction Pooler** (port 6543).
- [ ] **2.2 Schema Migration**
  - [ ] Update `packages/db/prisma/schema.prisma` if needed for PostgreSQL compatibility.
  - [ ] Run `npx prisma db push` to synchronize the schema with Supabase.
- [ ] **2.3 Storage Migration**
  - [ ] Configure `apps/covounding` to use **Supabase Storage** instead of local disk/GCS for evidence artifacts.

---

## 🛠️ Step 3: Edge-First Performance (Cloudflare KV)
**Objective:** Minimize database load and latency for the Voundism extension.

- [ ] **3.1 Implement KV-Synced Registry**
  - [ ] Create a Cloudflare KV namespace for `VERIFIED_CONTACTS`.
  - [ ] Build a cron worker that periodically exports verified records from Supabase to KV.
  - [ ] Update the extension API endpoint (`/api/snapshot`) to read directly from KV.

---

## 🛠️ Step 4: CI/CD Pipeline Update (Wrangler)
**Objective:** Automate deployments to Cloudflare Pages.

- [ ] **4.1 Update `.github/workflows/deploy.yml`**
  - [ ] Replace GCP/Artifact Registry steps with `cloudflare/wrangler-action`.
  - [ ] Ensure the build job correctly generates the `@covound/db` client before the Wrangler upload.

---

## ✅ Validation
- [ ] Successful build with the `@react-router/cloudflare` adapter.
- [ ] Verified database connection from a local Cloudflare Worker (Wrangler dev).
- [ ] Successful image redaction using the new edge-compatible strategy.
- [ ] End-to-end smoke test: Report anomaly → Store in Supabase → Sync to Cloudflare KV → Flag in Voundism Shield.
