import { getPayload } from "payload"
import config from "@payload-config"
import { Article } from "../../../payload-types"

export async function getPost(language: "fr" | "en", slug: string): Promise<Article | null> {
  const payload = await getPayload({ config })
  
  const paginationDocs = await payload.find({
    collection: "articles",
    where: {
      slug: {
        equals: slug
      }
    },
    locale: language,
    limit: 1,
    page: 1,
    fallbackLocale: "fr"
  })

  return paginationDocs.docs[0] ?? null
}