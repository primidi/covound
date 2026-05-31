import { data } from "react-router";

/**
 * Validates requests from the Voundism extension using the shared secret.
 * Used for early-stage authorization to bypass restrictive CSRF checks.
 */
export function validateExtensionAccess(request: Request) {
  const secret = request.headers.get("X-CoVound-Secret");

  if (!secret || secret !== process.env.VITE_VOUNDISM_SECRET) {
    throw data({ error: "Unauthorized" }, { status: 401 });
  }
}
