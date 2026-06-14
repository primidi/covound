import { fileURLToPath } from "node:url";
import { cloudflare } from "@cloudflare/vite-plugin";
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  resolve: {
    alias: {
      "@covound/prisma-client": fileURLToPath(
        new URL(
          "../../packages/db/node_modules/@covound/prisma-client",
          import.meta.url,
        ),
      ),
    },
  },
  plugins: [
    cloudflare({
      viteEnvironment: { name: "ssr" },
    }),
    tsconfigPaths(),
    tailwindcss(),
    reactRouter(),
  ],
  ssr: {
    noExternal: true,
  },
});
