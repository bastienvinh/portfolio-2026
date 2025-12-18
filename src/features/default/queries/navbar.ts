"use server"

import { getPayload } from "payload";
import config from "@payload-config";

export async function getNavBarLinks(language: "fr" | "en") {
  const payload = await getPayload({ config })

  const [about, projects, blog, contact] = await Promise.all([
    payload.findGlobal({
      slug: "tab_about",
      locale: language,
      fallbackLocale: false
    }),
    payload.findGlobal({
      slug: "tab_projects",
      locale: language,
      fallbackLocale: false
    }),
    payload.findGlobal({
      slug: "tab_blog",
      locale: language,
      fallbackLocale: false
    }),
    payload.findGlobal({
      slug: "tab_contact",
      locale: language,
      fallbackLocale: false
    }),
  ]);

  return { about, projects, blog, contact };
}