"use server"

import { getPayload } from "payload"
import config from "@payload-config"

export async function getAboutData(language: 'fr' | 'en') {
  const payload = await getPayload({ config })

  const about = await payload.findGlobal({
    slug: "about",
    locale: language,
    fallbackLocale: false
  })

  return about;
}