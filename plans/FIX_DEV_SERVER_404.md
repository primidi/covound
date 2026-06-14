# Plan: Fix Development Server 404 Routing Error [PRJ-FIX-01]

## 🎯 Goal
Resolve the `404 Not Found` error when accessing the local development servers (`http://localhost:5173/` and `http://localhost:5174/`) by correcting the Vite plugin execution order in `vite.config.ts` for both `covounding` and `vounder` apps.

---

## 🛠️ Step 1: Correct Plugin Order in `covounding` Vite Configuration
**Objective:** Swap the plugin order in `apps/covounding/vite.config.ts` to ensure the React Router framework plugin runs before the Cloudflare runtime adapter plugin.

- [x] **1.1 Modify `apps/covounding/vite.config.ts`**
  - Move `reactRouter()` to be loaded before `cloudflare()`.
  - Reordered plugins list:
    ```typescript
    plugins: [
      extensionApiBypass(),
      tsconfigPaths(),
      tailwindcss(),
      reactRouter(),
      cloudflare(),
    ]
    ```

---

## 🛠️ Step 2: Correct Plugin Order in `vounder` Vite Configuration
**Objective:** Swap the plugin order in `apps/vounder/vite.config.ts` similarly.

- [x] **2.1 Modify `apps/vounder/vite.config.ts`**
  - Move `reactRouter()` to be loaded before `cloudflare()`.
  - Reordered plugins list:
    ```typescript
    plugins: [
      tsconfigPaths(),
      tailwindcss(),
      reactRouter(),
      cloudflare(),
    ]
    ```

---

## ✅ Validation
- [x] Run `npm run typecheck` to verify no compilation issues.
- [x] Start dev servers:
  - `npm run dev:covounding`
  - `npm run dev:vounder`
- [x] Make request to `http://localhost:5173/` and verify it returns `200 OK` and serves the HTML homepage.
- [x] Make request to `http://localhost:5174/` and verify it returns `200 OK` (or redirects to `/login` if not authenticated) rather than `404 Not Found`.
