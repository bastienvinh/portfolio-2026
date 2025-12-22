"use server"

import { Media, Technology } from "../../../../payload-types"
import Image from "next/image"
import { getCurrentLanguage } from "@/features/default/queries/get-language"
import { getAboutData } from "@/features/about/queries/about"

export default async function Home() {

  const language = await getCurrentLanguage()
  const about = await getAboutData(language)

  const renderPresentation = () => {
    const parts = about.presentation.split('[[fullname]]')
    return (
      <>
        {parts[0]}
        <span className="font-bold text-blue-600 font-mono">{about.fullname}</span>
      {parts[1]}
      </>
    )
  }

  return (
    <div className="w-full h-full md:items-center flex flex-col md:grid md:grid-cols-[auto_500px]">
      <div className="px-7 flex flex-col gap-10">
        <div className="md:text-4xl flex flex-col gap-5">
          <span className="inline-block">{about.welcome_message}, </span>
          <span className="inline-block">{renderPresentation()}</span>
        </div>

        <div className="bg-center bg-primary bg-blend-multiply md:hidden h-125 mask-x-from-70% mask-x-to-90% mask-y-from-70% mask-y-to-90%  bg-[url(/hero.png)]"></div>

        <div className="text-2xl md:text-6xl">{about.job_title}</div>
        <div className="text-xl mb-10 md:mb-0 flex flex-col gap-5">
          <span className="text-sm">{about.technologies_text}</span>
          <ul className="flex gap-6">
            {about.technologies?.map((tech, index) => (
              <li key={index} className="flex gap-2 items-center">
                <Image className="grayscale-75" width={30} height={30}  src={((tech as Technology).dark_mode_image as Media).url!} alt="image" />
                <span className="font-mono">{(tech as Technology).name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-center bg-primary bg-blend-multiply hidden md:block md:w-125 md:h-125 mask-x-from-70% mask-x-to-90% mask-y-from-70% mask-y-to-90%  bg-[url(/hero.png)]"></div>
    </div>
  );
}
