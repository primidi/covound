import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { renderToPipeableStream } from "react-dom/server";
import { type EntryContext, ServerRouter } from "react-router";
import {
  handleReportAnomaly,
  handleReportLegit,
} from "./lib/api-handlers.server";

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  routerContext: EntryContext,
) {
  const url = new URL(request.url);

  // INTERCEPTION POINT: Handle extension API before Router CSRF check
  // React Router 7's mandatory CSRF check happens during the route action matching phase.
  // By returning a response here, we bypass that check entirely for these specific paths.
  if (url.pathname === "/api/report-anomaly") {
    return handleReportAnomaly(request);
  }
  if (url.pathname === "/api/report-legit") {
    return handleReportLegit(request);
  }

  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      <ServerRouter context={routerContext} url={request.url} />,
      {
        onShellReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);

          responseHeaders.set("Content-Type", "text/html");
          responseHeaders.set(
            "Content-Security-Policy",
            "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:;",
          );
          responseHeaders.set(
            "Strict-Transport-Security",
            "max-age=31536000; includeSubDomains",
          );
          responseHeaders.set("X-Content-Type-Options", "nosniff");
          responseHeaders.set("X-Frame-Options", "DENY");
          responseHeaders.set(
            "Referrer-Policy",
            "strict-origin-when-cross-origin",
          );
          responseHeaders.set(
            "Permissions-Policy",
            "geolocation=(), microphone=(), camera=()",
          );

          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode,
            }),
          );

          pipe(body);
        },
        onShellError(error: unknown) {
          reject(error);
        },
        onError(error: unknown) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        },
      },
    );

    setTimeout(abort, 5000);
  });
}
