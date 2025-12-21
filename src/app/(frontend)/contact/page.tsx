"use client"

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/context/language";
import { FormContact } from "@/features/contact/components/form-contact";
import { Labels } from "@/lib/translate";
import { SocialNetworks } from "./social-networks";
import { useContactPage } from "@/features/contact/hooks/use-contact-page";

export default function ContactPage() {

  const { language } = useLanguage()
  const { contactPage } = useContactPage(language)

  return (
    <div className="w-full h-full pt-25">
      <section id="contact" className="h-full w-full md:flex md:gap-10 items-center justify-center">
        <div className="w-full md:w-2/3 md:h-full">
          <Card>
            <CardTitle className="flex justify-center text-4xl mb-7">Contact</CardTitle>
            <CardContent>
              <FormContact />
            </CardContent>
          </Card>
        </div>
        <div className="md:w-1/3 md:h-full flex flex-col gap-20">
          <div className="flex flex-col gap-5">
            <div className="text-sm uppercase font-semibold text-zinc-500">
              {Labels.socialnetworkLabel[language] ?? "Find on"}:
            </div>
            <div className="flex gap-5">
              <SocialNetworks />
            </div>
          </div>
          
          <div>
            <div className="text-sm uppercase font-semibold text-zinc-500">{Labels.email[language] ?? "Email"}</div>
            <div>
              <a className="text-blue-600" href={`mailto:${contactPage?.email_contact}`}>{contactPage?.email_contact}</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}