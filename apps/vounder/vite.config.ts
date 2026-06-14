import { cloudflare } from "@cloudflare/vite-plugin";
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths(), tailwindcss(), reactRouter(), cloudflare()],
  ssr: {
    // Native modules should be externalized in SSR
    external: ["better-sqlite3"],
    noExternal: ["@covound/db", "@covound/ui"],
  },
});
