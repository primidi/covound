import { index, type RouteConfig, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("login", "routes/login.tsx"),
  route("report", "routes/report.tsx"),
  route("investigate", "routes/investigate.tsx"),
  route("leaderboard", "routes/leaderboard.tsx"),
  route("api/analyze-screenshot", "routes/api.analyze-screenshot.ts"),
  route("api/snapshot", "routes/api.snapshot.ts"),
  route("api/report-anomaly", "routes/api.report-anomaly.ts"),
  route("api/report-legit", "routes/api.report-legit.ts"),
  route("api/auth/*", "routes/api.auth.$.ts"),
  route("api/lang", "routes/api.lang.ts"),
  route("api/role", "routes/api.role.ts"),
  route("api/kyc", "routes/api.kyc.ts"),
  route(".well-known/*", "routes/well-known.$.ts"),
] satisfies RouteConfig;
