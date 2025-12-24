import { getPayload } from "payload"
import config from "@payload-config"
import { Project } from "../../../../payload-types";


export async function getProject(language: "fr" | "en", slug: string): Promise<Project | null> {
  const payload = await getPayload({ config })
  
  const projects = await payload.find({
    collection: "projects",
    locale: language,
    fallbackLocale: "fr",
    where: {
      slug: {
        equals: slug
      }
    },
    limit: 1,
    page: 1,
  })

  return projects?.docs?.[0] ?? null;
}