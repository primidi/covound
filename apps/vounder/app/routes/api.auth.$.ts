import type { ActionFunctionArgs, LoaderFunctionArgs } from "react-router";
import { getAuth } from "~/lib/auth.server";

export async function loader({ request, context }: LoaderFunctionArgs) {
  return getAuth(context.cloudflare.env).handler(request);
}

export async function action({ request, context }: ActionFunctionArgs) {
  return getAuth(context.cloudflare.env).handler(request);
}
