import { getPayload } from "payload"
import config from "@payload-config"

export async function getArticles(language: "fr" | "en", limit = 100, offset = 0) {
  const payload = await getPayload({ config })
  
  const paginationPosts = await payload.find({
    collection: "articles",
    locale: language,
    fallbackLocale: "fr",
    sort: "-createdAt",
    limit,
    page: offset / limit + 1,
  })

  return paginationPosts
}