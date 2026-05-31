import { Button } from "@covound/ui/components/ui/button";
import { Toaster } from "@covound/ui/components/ui/sonner";
import { AlertCircle, HeartPulse, Shield } from "lucide-react";
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "react-router";
import type { Route } from "./+types/root";
import { getLanguage } from "./lib/language.server";
import "@covound/ui/styles/app.css";

export async function loader({ request }: Route.LoaderArgs) {
  const lang = await getLanguage(request);
  return { lang };
}

export const links: Route.LinksFunction = () => [
  {
    rel: "icon",
    type: "image/png",
    href: "/favicon-32x32.png",
    sizes: "32x32",
  },
  {
    rel: "icon",
    type: "image/png",
    href: "/favicon-16x16.png",
    sizes: "16x16",
  },
  { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
  { rel: "manifest", href: "/site.webmanifest" },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const data = useLoaderData<typeof loader>();
  const lang = data?.lang || "en";

  return (
    <html lang={lang}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <Toaster position="top-right" richColors closeButton />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "System Diagnostic Failure";
  let details = "An unexpected error occurred during triage.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message =
      error.status === 404 ? "Protocol Not Found (404)" : "Clinical Error";
    details =
      error.status === 404
        ? "The requested page or diagnostic protocol could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center p-6 font-sans">
      <div className="max-w-xl w-full space-y-8 text-center">
        <div className="relative inline-block">
          <div className="h-24 w-24 bg-white rounded-3xl shadow-xl flex items-center justify-center border-2 border-red-100 animate-in zoom-in duration-500">
            <HeartPulse className="h-12 w-12 text-red-600 animate-pulse" />
          </div>
          <div className="absolute -top-2 -right-2 h-8 w-8 bg-slate-900 text-white rounded-full flex items-center justify-center shadow-lg border-2 border-white">
            <Shield className="h-4 w-4" />
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl font-black tracking-tight text-slate-900">
            {message}
          </h1>
          <div className="p-6 bg-white border-2 border-red-50 rounded-[2rem] shadow-sm">
            <p className="text-xl text-slate-600 font-medium leading-relaxed">
              CoVounding: "Critical System Sync Failure. I'm unable to reach the
              central registry or process this symptom. Prescription: Refresh
              the page to restore the connection."
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 pt-4">
            <Button
              onClick={() => window.location.reload()}
              size="lg"
              className="h-16 px-10 text-xl font-black bg-slate-900 hover:bg-slate-800 rounded-2xl gap-3 text-white shadow-xl shadow-slate-900/20"
            >
              Apply Refresh Prescription
            </Button>
            <p className="text-sm text-slate-400 font-bold uppercase tracking-widest flex items-center gap-2">
              <AlertCircle className="h-4 w-4" />
              Diagnostic Code: {details}
            </p>
          </div>
        </div>

        {stack && (
          <div className="mt-8 text-left">
            <details className="group border-2 border-slate-200 rounded-2xl bg-white overflow-hidden">
              <summary className="p-4 font-bold text-slate-500 cursor-pointer list-none flex items-center justify-between">
                View Technical Diagnostic Data
                <div className="h-5 w-5 bg-slate-100 rounded text-xs flex items-center justify-center group-open:rotate-180 transition-transform">
                  ▼
                </div>
              </summary>
              <pre className="p-4 text-xs font-mono text-slate-600 overflow-x-auto bg-slate-50 border-t border-slate-100">
                <code>{stack}</code>
              </pre>
            </details>
          </div>
        )}
      </div>
    </main>
  );
}
