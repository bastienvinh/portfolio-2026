"use client"

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/context/language";
import { FormContact } from "@/features/contact/components/form-contact";
import { Labels } from "@/lib/translate";
import { SocialNetworks } from "./social-networks";
import { useContactPage } from "@/features/contact/hooks/use-contact-page";
import { Button } from "@/components/ui/button";

export default function ContactPage() {

  const { language } = useLanguage()
  const { contactPage } = useContactPage(language)

  return (
    <div className="w-full h-full p-4 gap-10 md:p-0 md:pt-25">
      <section id="contact" className="h-full w-full flex flex-col gap-5 md:flex-row md:gap-10 items-center justify-center">
        <div className="w-full md:p-0 md:w-2/3 md:h-full">
          <Card>
            <CardTitle className="flex justify-center text-4xl mb-7">Contact</CardTitle>
            <CardContent>
              <FormContact />
            </CardContent>
          </Card>
        </div>
        <div className="w-full md:w-1/3 md:h-full flex flex-col gap-5 md:gap-20">
          <div className="flex flex-col gap-5">
            <div className="text-sm uppercase font-semibold text-zinc-500">
              {Labels.socialnetworkLabel[language] ?? "Find on"}:
            </div>
            <div className="flex gap-5 justify-center">
              <SocialNetworks />
            </div>
          </div>

          <div className="hidden md:block">
            <div className="text-sm uppercase font-semibold text-zinc-500">{Labels.email[language] ?? "Email"}</div>
            <div>
              <a className="text-blue-600 underline" href={`mailto:${contactPage?.email_contact}`}>{contactPage?.email_contact}</a>
            </div>
          </div>

          <div className="w-full h-15 md:hidden">
            <Button className="h-full" asChild>
              <a href={`mailto:${contactPage?.email_contact}`} className="w-full justify-center">
                {Labels.contactMeByMail[language] ?? "Contact Me By Mail"}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}