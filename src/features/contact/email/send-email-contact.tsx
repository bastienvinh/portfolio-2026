import { resend } from "@/lib/resend"
import { getContactInfo } from "../queries/get-contact"
import EmailContactTemplate from "@/emails/contact/email-contact"

export const sendEmailContact = async (email: string, fullname: string, message: string, title?: string) => {
  const contactPageInfo = await getContactInfo("fr")
  
  
  return await resend.emails.send({
    from: `Contact Portfolio <${contactPageInfo.email_contact}>`,
    to: contactPageInfo.email_contact,
    subject: "porfolio - New Contact Message",
    react: <EmailContactTemplate email={email} title={title} message={message} fullname={fullname} />
  })
}