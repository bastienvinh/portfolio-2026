"use server"

import { getPayload } from "payload"
import config from "@payload-config"

export async function getProjects(language: "fr" | "en", limit = 100, offset = 0) {
  const payload = await getPayload({ config })

  const projects = await payload.find({
    collection: "projects",
    locale: language,
    fallbackLocale: "fr",
    sort: "-createdAt",
    limit,
    page: offset / limit + 1,
  })

  return projects
}
