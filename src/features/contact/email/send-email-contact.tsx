"use server"

import { getContactInfo } from "../queries/get-contact"
import EmailContactTemplate from "@/emails/contact/email-contact"
import { render } from "@react-email/components"
import { client } from "@/lib/postmark"

export const sendEmailContact = async (language: "fr" | "en", email: string, fullname: string, message: string, title?: string) => {
  const contactPageInfo = await getContactInfo(language)

  const emailHtml = await render(<EmailContactTemplate email={email} title={title} message={message} fullname={fullname} />)

  await client.sendEmail({
    From: `Contact Portfolio <${contactPageInfo.email_contact}>`,
    To: contactPageInfo.email_contact!,
    Subject: "porfolio - New Contact Message",
    HtmlBody: emailHtml,
  })
}