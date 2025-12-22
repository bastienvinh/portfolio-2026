"use server"

import { ActionState, fromErrorToActionState, toActionState } from "@/components/form/utils/to-action-state"
import { sendEmailContact } from "../email/send-email-contact"

import { Labels } from "@/lib/translate"

export async function sendMailAction(state: ActionState, formData: FormData): Promise<ActionState<unknown>> {
  const language = formData.get("language") as ("fr" | "en" | null) ?? "en" as ("fr" | "en")
  
  try {
		const email = formData.get("email") as string
    const subject = formData.get("subject") as string | null
    const message = formData.get("message") as string
    const fullname = formData.get("firstname") as string + " " + formData.get("lastname") as string
    const status = formData.get("captcha") as string

    if (status !== "solved") {
      return toActionState("ERROR", Labels.captchaError[language] ?? "Captcha error, please try again." )
    }

    console.log("Sending email contact...")
    await sendEmailContact(language, email, fullname, message, subject ?? undefined)
	}
  catch (error) {
    console.log("Error in sendMailAction:", error)
		return fromErrorToActionState(error)
	}

  console.log("Email contact sent successfully.")
	return toActionState("SUCCESS", Labels.emailSentSuccess[language] ?? "The email has been sent successfully.")
}