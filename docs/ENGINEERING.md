# CoVound: Engineering DNA & Protocols

## 1. Modular Architecture (Monorepo)
Strict TypeScript monorepo using 
pm workspaces.
- **pps/**: Domain-specific applications (Remix, Extension, MCP).
- **packages/**: Shared infrastructure:
    - @covound/db: Shared Prisma/SQLite client.
    - @covound/ui: Shared Shadcn/Tailwind design system. Uses intrinsic, padding-driven sizing (min-h-*) and a clinical palette (amber/orange instead of harsh red).
    - @covound/logic: Centralized Zod schemas, PKI crypto, and Persona-as-Code.

**Instruction:** Logic must live in @packages/. Never duplicate code in pps/.

---

## 2. Zero-Trust Security Standards
- **Boundary Validation:** Zod schemas required for all API and Form boundaries.
- **Verification:** **Domain-Anchored PKI** (RSA/Ed25519) for all registry entries.
- **Stateful Auth:** Use **Stateful Cookie + Cache** model. HttpOnly, Secure, and SameSite=Lax flags are mandatory.
- **Privacy Hardening:** 
    - AI Surgery pass for PII redaction (Sharp).
    - 24-hour **Transient Buffer** for human triage.
    - AES-256 encrypted **Cold Storage** archival for sensitive stories.

---

## 3. Mandatory Agent Workflow (PM-Led Engineering)
Coding never starts without a plan. Every interaction must follow this sequence:
1.  **Map:** Search for Requirement IDs (FRx.x) in docs/SPECS.md.
2.  **Plan:** Draft a tactical implementation plan in plans/.
3.  **Approval:** Wait for user confirmation.
4.  **Execute:** Surgical implementation followed by 
pm run typecheck.

---

## 4. Systematic Debugging
When a roadblock occurs, all feature work stops. Use the debugging-and-error-recovery skill to diagnose the root cause and fix the cause, not the symptom.

---

## 5. Voundism Extension Architecture
- **CSP Bypass:** The Chrome extension MUST use a **Background Service Worker** (`background.ts`) to perform `fetch` operations (`FETCH_REGISTRY`, `REPORT_ANOMALY`). Content scripts are restricted by host-page Content Security Policies.
- **Dynamic Loading:** The `manifest.json` must include Vite-generated chunks in `web_accessible_resources` to support dynamic injection.

---

## 6. Technical Flight Recorder (ai-workflows/)
The docs/ai-workflows/ directory archive high-complexity blueprints. Use these as \"Golden Examples\" for complex monorepo shifts.

---

## 7. Tactical Schedule
- **Mon-Fri:** Morning triage (10m), evening polish (20m).
- **Sat, Sun, Holidays:** Deep-Work Marathons for architectural shifts.
