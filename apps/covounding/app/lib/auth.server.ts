import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { getPrisma } from "../db.server";

type AuthInstance = ReturnType<typeof betterAuth>;
let authInstance: AuthInstance | null = null;

export function getAuth(env: Record<string, string | undefined>) {
  if (authInstance) return authInstance;

  const prisma = getPrisma(env);
  const secret = env.BETTER_AUTH_SECRET;
  const baseURL = env.BETTER_AUTH_URL;
  const trustedOrigins = env.BETTER_AUTH_TRUSTED_ORIGINS
    ? env.BETTER_AUTH_TRUSTED_ORIGINS.split(",")
    : [];

  authInstance = betterAuth({
    database: prismaAdapter(prisma, {
      provider: "postgresql",
    }),
    secret: secret,
    emailAndPassword: {
      enabled: true,
    },
    session: {
      expiresIn: 30 * 24 * 60 * 60, // 30 days
      updateAge: 24 * 60 * 60, // 24 hours
      cookieCache: {
        enabled: true,
        maxAge: 5 * 60, // 5 minutes cache
      },
    },
    advanced: {
      useSecureCookies: (env.NODE_ENV || process.env.NODE_ENV) === "production",
      cookiePrefix: "covounding",
    },
    baseURL: baseURL,
    trustedOrigins: trustedOrigins,
  });

  return authInstance;
}
