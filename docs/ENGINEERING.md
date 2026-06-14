# CoVound: Engineering DNA & Protocols

## 1. Modular Architecture (Monorepo)
Strict TypeScript monorepo using **pnpm workspaces**.
- **apps/**: Domain-specific applications (Remix, Extension, MCP).
- **packages/**: Shared infrastructure:
    - `@covound/db`: Shared Prisma/PostgreSQL client. Fields use `snake_case` conventions at the database mapping layer (via `@@map` and `@map`).
    - `@covound/ui`: Shared Shadcn/Tailwind design system. Uses intrinsic, padding-driven sizing (`min-h-*`) and a clinical palette (amber/orange instead of harsh red).
    - `@covound/logic`: Centralized Zod schemas, PKI crypto, and Persona-as-Code. Contains `normalizePhone` for international standardizing of target inputs.

**Instruction:** Logic must live in `@packages/`. Never duplicate code in `apps/`.

---

## 2. Local Database & Development Workflow
Local development uses **PostgreSQL 17** via Docker.

### 2.1 Local PostgreSQL Setup
Run the PostgreSQL service container locally:
```powershell
docker-compose up -d
```

### 2.2 Database Initialization
Sync the database schema locally and seed the QA verification dataset:
```powershell
npm run db:reset
```
*Note: This command runs `npx prisma db push --force-reset` followed by executing `scripts/seed-qa.ts`.*

---

## 3. Code Quality Hooks (Husky + Biome)
To guarantee consistency across the monorepo, style checks and formatter runs are enforced at commit time via Husky hooks.
* **Formatter & Linter**: Biome (configured in `biome.json`).
* **Pre-commit validation**: Enforces formatting and syntax checks. Ensure all code conforms before submitting commits.

---

## 4. Zero-Trust Security Standards
- **Boundary Validation:** Zod schemas required for all API and Form boundaries.
- **Verification:** **Domain-Anchored PKI** (RSA/Ed25519) for all registry entries.
- **Stateful Auth:** Use **Stateful Cookie + Cache** model. HttpOnly, Secure, and SameSite=Lax flags are mandatory.
- **Privacy Hardening:** 
    - AI Surgery pass for PII redaction.
    - 24-hour **Transient Buffer** for human triage.
    - AES-256 encrypted **Cold Storage** archival for sensitive stories.
- **Phone Normalization:** All phone numbers must be run through `normalizePhone` before database lookups/saves:
    - Strips non-digit chars (except leading `+`).
    - Standardizes Indonesian numbers (converts `08...` to `+628...`).

---

## 5. Mandatory Agent Workflow (PM-Led Engineering)
Coding never starts without a plan. Every interaction must follow this sequence:
1.  **Map:** Search for Requirement IDs (FRx.x) in docs/SPECS.md.
2.  **Plan:** Draft a tactical implementation plan in plans/.
3.  **Approval:** Wait for user confirmation.
4.  **Execute:** Surgical implementation followed by `npm run typecheck`.

---

## 6. Systematic Debugging
When a roadblock occurs, all feature work stops. Use the debugging-and-error-recovery skill to diagnose the root cause and fix the cause, not the symptom.

---

## 7. Voundism Extension Architecture
- **CSP Bypass:** The Chrome extension MUST use a **Background Service Worker** (`background.ts`) to perform `fetch` operations (`FETCH_REGISTRY`, `REPORT_ANOMALY`). Content scripts are restricted by host-page Content Security Policies.
- **Dynamic Loading:** The `manifest.json` must include Vite-generated chunks in `web_accessible_resources` to support dynamic injection.
- **Ternary Badge System (ADR-0004):** Color-coded verification indicators (gray for pending/diagnosing, orange for staked, red for verified threat) injected directly alongside threat vectors to prevent victim interaction.

---

## 8. Technical Flight Recorder (ai-workflows/)
The docs/ai-workflows/ directory archive high-complexity blueprints. Use these as "Golden Examples" for complex monorepo shifts.

---

## 9. Tactical Schedule
- **Mon-Fri:** Morning triage (10m), evening polish (20m).
- **Sat, Sun, Holidays:** Deep-Work Marathons for architectural shifts.
