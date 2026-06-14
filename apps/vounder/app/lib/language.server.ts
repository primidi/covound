import { createCookie } from "react-router";

export const languageCookie = createCookie("covound_lang", {
  maxAge: 31_536_000, // 1 year
  path: "/",
  sameSite: "lax",
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
});

export async function getLanguage(request: Request) {
  const cookieHeader = request.headers.get("Cookie");
  const lang = (await languageCookie.parse(cookieHeader)) || "id";
  return lang as "en" | "id";
}
