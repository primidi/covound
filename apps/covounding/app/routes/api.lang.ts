import { type ActionFunctionArgs, data, redirect } from "react-router";
import { languageCookie } from "../lib/language.server";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const lang = formData.get("lang");
  const redirectTo = formData.get("redirectTo")?.toString() || "/";

  if (lang !== "en" && lang !== "id") {
    return data({ error: "Invalid language" }, { status: 400 });
  }

  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await languageCookie.serialize(lang),
    },
  });
}
