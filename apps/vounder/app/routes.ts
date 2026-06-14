import { index, type RouteConfig, route } from "@react-router/dev/routes";

export default [
  index("routes/dashboard.tsx"),
  route("kyc-image/:id", "routes/kyc-image.$id.tsx"),
  route("login", "routes/login.tsx"),
  route("api/verify", "routes/api.verify.ts"),
  route("api/auth/*", "routes/api.auth.$.ts"),
  route(
    ".well-known/appspecific/com.chrome.devtools.json",
    "routes/well-known.probe.ts",
  ),
] satisfies RouteConfig;
