"use server"

import { getPayload } from "payload";
import config from "@payload-config";

export async function getNavBarLinks(language: "fr" | "en") {
  const payload = await getPayload({ config })

  const navbar = await payload.findGlobal({
    slug: "navbar_config",
    locale: language,
    fallbackLocale: "fr",
  });

  return navbar;
}