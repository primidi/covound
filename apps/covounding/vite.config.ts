import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, type Plugin } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

/**
 * Custom middleware to bypass React Router 7's mandatory CSRF check for extension APIs.
 * React Router 7's CSRF protection intercepts POST requests with mismatched Origins
 * before they reach any user-defined handlers in the router.
 */
function extensionApiBypass(): Plugin {
  return {
    name: "extension-api-bypass",
    configureServer(server) {
      server.middlewares.use(async (req, _res, next) => {
        const url = new URL(req.url || "", `http://${req.headers.host}`);

        if (
          url.pathname === "/api/report-anomaly" ||
          url.pathname === "/api/report-legit"
        ) {
          // If it's a POST or OPTIONS, we might need to handle it here
          // However, in dev mode, we can just strip the problematic Origin header
          // to fool the downstream CSRF check.
          if (req.headers.origin?.startsWith("chrome-extension://")) {
            console.log(
              `[Vite Middleware] Stripping Origin header for ${url.pathname} to bypass CSRF`,
            );
            delete req.headers.origin;
          }
        }
        next();
      });
    },
  };
}

export default defineConfig({
  plugins: [
    extensionApiBypass(),
    tsconfigPaths(),
    tailwindcss(),
    reactRouter(),
  ],
  ssr: {
    // Native modules should be externalized in SSR
    external: ["better-sqlite3"],
    noExternal: ["@covound/db", "@covound/ui"],
  },
});
