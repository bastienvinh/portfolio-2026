"use server"

import { getPayload } from "payload";
import config from "@payload-config";

export async function getGeneralInformations(language: "fr" | "en") {
  const payload = await getPayload({ config })

  const informations = await payload.findGlobal({
    slug: "general_informations",
    locale: language,
    fallbackLocale: false
  });

  return informations;
}