import { Labels } from "@/lib/translate";
import { z } from "zod"

export function getFormSchema(language: "fr" | "en") {
  return z.object({
    email: z.email({
      message: Labels.emailError[language],
    }).min(5, {
      message: Labels.emailError[language],
    }),
    subject: z.string().min(4, {
      message: Labels.subjectError[language],
    }).optional(),
    message: z.string({
      message: Labels.messageError[language],
    }).min(10, {
      message: Labels.messageError[language],
    }),
    captcha: z.enum(["solved"], {
      error: Labels.missingCaptchaMessage[language]
    }),
    firstname: z.string({
      message: Labels.firstnameError[language],
    }).min(2, {
      message: Labels.firstnameError[language],
    }),
    lastname: z.string({
      message: Labels.lastnameError[language],
    }).min(2, {
      message: Labels.lastnameError[language],
    }),
  })
}