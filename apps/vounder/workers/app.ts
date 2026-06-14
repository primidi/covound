import { createRequestHandler } from "react-router";

const requestHandler = createRequestHandler(
  () => import("virtual:react-router/server-build"),
  import.meta.env.MODE,
);

export default {
  async fetch(request: Request, env: any, ctx: any) {
    return requestHandler(request, {
      cloudflare: { env, ctx },
    });
  },
};
