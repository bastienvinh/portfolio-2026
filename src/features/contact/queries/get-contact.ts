"use server"

import { getPayload } from "payload"
import config from "@payload-config"

export async function getContactInfo(language: "fr" | "en") {
  const payload = await getPayload({ config })
  
    const informations = await payload.findGlobal({
      slug: "contact",
      locale: language,
      fallbackLocale: false
    })
  
    return informations;
}