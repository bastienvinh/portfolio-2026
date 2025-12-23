import { getPayload } from "payload"
import config from "@payload-config"

// export async function getArticle(slug: string, language: string) {
//   const payload = await getPayload({ config })
  
//   const articles = await payload.find({
//     collection: "",
//     where: {
//       slug: {
//         equals: slug
//       }
//     },
//     locale: language,
//     fallbackLocale: false
//   })

//   return articles[language]?.[slug] || null;
// }