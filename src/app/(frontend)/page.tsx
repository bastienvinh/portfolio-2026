import { getPayload } from "payload"
import config from "@payload-config"

export default async function Home() {
  const payload = await getPayload({ config })

  const about = await payload.findGlobal({
    slug: "about",
    locale: 'fr',
    fallbackLocale: false
  })

  return (
    <div>{about.job_title}</div>
  );
}
