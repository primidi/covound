# ⚠️ Superseded — Architecture migrated to Supabase PostgreSQL & Cloudflare Pages
# Workflow: Monorepo Database Extraction

This document outlines the steps to extract the Prisma database and schema from the `vounder` workspace to the monorepo root. This ensures that the upcoming `covounding` workspace can share the same "Source of Truth" without architectural debt.

---

## Task 1: Filesystem Reorganization
**Objective:** Relocate the database and schema files.

**Workflow & Skills:**
1.  **Execute:** Move the `vounder/prisma/` folder to the root directory `/prisma/`.
2.  **Execute:** Move `vounder/prisma.config.ts` to the root directory `/prisma.config.ts`.
3.  **Execute:** Move the SQLite file `vounder/dev.db` to the root directory `/dev.db` (or keep it inside `/prisma/`).

---

## Task 2: Schema & Config Update
**Objective:** Update paths to satisfy the new root location.

**Workflow & Skills:**
1.  **Activate Skill:** `activate_skill("api-and-interface-design")`
2.  **Action:** Update `prisma/schema.prisma` output path to `./generated/client` (relative to root).
3.  **Action:** Update root `prisma.config.ts` to reflect the new relative schema and migration paths.
4.  **Action:** Regenerate the client from the root: `npx prisma generate`.

---

## Task 3: Multi-Workspace Import Refactor
**Objective:** Point all applications to the new root database client.

**Target Files:** 
*   `vounder/app/db.server.ts`
*   `co-vounder/src/index.ts`
*   `anomaly-engine/src/hunt.ts`

**Workflow & Skills:**
1.  **Activate Skill:** `activate_skill("incremental-implementation")`
2.  **Action:** Update the relative import paths for `PrismaClient` in each workspace.
3.  **Action:** Update the `DATABASE_URL` in all `.env` files to point to the new absolute or relative location of `dev.db`.

---

## Verification
1.  **Build:** Run `npm run build` across all workspaces.
2.  **Dashboard:** Access the Vounder Admin Dashboard and verify that existing verified contacts are still loading.

---

### How to Proceed
To begin this extraction, run: **`npm run workflows:up`**
Upon successful completion, please update the docs/ai-workflows/.executed.json file by adding '20260514000000_monorepo_database_extraction.md' to the list.
