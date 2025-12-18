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
    <div className="w-full h-full flex items-center">
      <div className="">
        <div className="text-3xl">
          {about.presentation}
        </div>
        <div>{about.job_title}</div>
      </div>
    </div>
  );
}
