import { getPayload } from "payload"
import config from "@payload-config"
import { ParseSearchParams } from "../search-params"

export async function getArticles(language: "fr" | "en", searchParams: ParseSearchParams) {
  const payload = await getPayload({ config })
  
  const paginationPosts = await payload.find({
    collection: "articles",
    locale: language,
    fallbackLocale: "fr",
    sort: "-createdAt",
    limit: searchParams.size ?? 5,
    page: searchParams.page ?? 0,
  })

  return paginationPosts
}