# Plan: UX & Branding Polish [PRJ-UX-01]

## 🎯 Goal
Standardize the "Digital ER" persona, implement the "0-User" mission across the web app, and drive Voundism extension adoption.

---

## 🛠️ Step 1: Core Persona & Mission Update
**Objective:** Codify the "0-User" mission in the shared logic package.

- [ ] **1.1 Modify `packages/logic/src/persona.ts`**
  - Update `PERSONA.MISSION.en` to: `"Target: 0 Scam Users. Total Neutralization."`
  - Update `PERSONA.MISSION.id` to: `"Target: 0 Pengguna Penipuan. Netralisasi Total."`
  - Add `STAT_LABELS` object for the Live Counter:
    ```typescript
    export const STAT_LABELS = {
      neutralized: { en: "Threats Neutralized", id: "Ancaman Dinonaktifkan" },
      protected: { en: "Verified Connections", id: "Koneksi Terverifikasi" }
    };
    ```

---

## 🛠️ Step 2: Landing Page Enhancements
**Objective:** Reflect the proactive "Takedown" mission on the homepage.

- [ ] **2.1 Update `apps/covounding/app/routes/home.tsx` Translations**
  - Change `heroSub` to emphasize neutralization.
  - Ensure `liveCounterNeutralized` and `liveCounterProtected` match `persona.ts`.
- [ ] **2.2 Implement Dynamic Live Counter**
  - Replace the placeholder numbers `1,482` and `42,091` with slightly more realistic starting values (e.g., `842` and `12,403`).
- [ ] **2.3 Add "Download Firewall" to Navbar** (Verified: Embedded in `home.tsx`)
  - Ensure the existing `Button` pointing to the placeholder URL is consistent across both portals.

---

## 🛠️ Step 3: Triage Room Extension CTA
**Objective:** Drive extension downloads after a successful report.

- [ ] **3.1 Modify `apps/covounding/app/routes/report.tsx`**
  - Update `postSubmissionPrompt` in both `en` and `id` to be more persuasive.
  - Verify the `Button` for `downloadFirewall` is correctly rendered in the success state (Step 4).

---

## 🛠️ Step 4: Language Stabilization Audit
**Objective:** Eliminate hardcoded English strings in Indonesian views.

- [ ] **4.1 Audit `apps/covounding/app/routes/investigate.tsx`**
  - Search for hardcoded English strings in labels and buttons.
  - Move them to a `translations` object inside the file.
- [ ] **4.2 Standardize `DIAGNOSIS_TEMPLATES`**
  - In `packages/logic/src/persona.ts`, ensure every template has a corresponding `id` string that matches the clinical tone.

---

## ✅ Validation
- [ ] Run `npm run typecheck` in root.
- [ ] Manually verify toggle between EN/ID on `home.tsx` and `report.tsx`.
- [ ] Verify success state in `report.tsx` by submitting a mock report.
