"use client"

import { Turnstile } from '@marsidev/react-turnstile'
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/context/language"
import { Textarea } from "@/components/ui/textarea"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { getFormSchema } from "../schema/contact-schema"
import { Labels } from "@/lib/translate"
import { Form } from '@/components/form/form'
import { sendMailAction } from '../actions/send-mail-action'

export function FormContact() {

  const { language } = useLanguage()
  const formSchema = getFormSchema(language)
  const [, setStatus] = useState<"idle" | "expired" | "solved" | "error">("idle");

  return (
    <Form formSchema={formSchema} serverAction={sendMailAction} >
      <FormField
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input className="text-sm font-semibold placeholder:uppercase text-zinc-500" placeholder="email" type="email" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="flex flex-col md:flex-row gap-5 md:gap-10 w-full">
        <FormField
        name="firstname"
        render={({ field }) => (
          <FormItem className='grow'>
            <FormLabel>{Labels.firstname[language] ?? "Firstname"}</FormLabel>
            <FormControl>
              <Input className="text-sm font-semibold placeholder:uppercase text-zinc-500" placeholder={Labels.firstnamePlaceholder[language] ?? "Firstname"} {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        name="lastname"
        render={({ field }) => (
          <FormItem className='grow'>
            <FormLabel>{Labels.lastname[language] ?? "Lastname"}</FormLabel>
            <FormControl>
              <Input className="text-sm font-semibold placeholder:uppercase text-zinc-500" placeholder={Labels.lastnamePlaceholder[language] ?? "Lastname"} {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      </div>

      <FormField
        name="title"
        render={({ field }) => (
          <FormItem>
            <FormLabel>{Labels.title[language] ?? "Title"}</FormLabel>
            <FormControl>
              <Input className="text-sm font-semibold placeholder:uppercase text-zinc-500" placeholder={Labels.titlePlaceholder[language] ?? "Title [Optional]"} {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        name="message"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Message</FormLabel>
            <FormControl>
              <Textarea className="h-50 text-sm font-semibold placeholder:uppercase text-zinc-500" placeholder={Labels.placeholderMessage[language]} {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />


      <FormField
        name="captcha"
        render={({ field }) => (
          <FormItem className="mt-0 pt-0">
            <Turnstile
              className="m-0 p-0"
              siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
              onError={() => {
                setStatus("error")
                field.onChange("error")
              }}
              onExpire={() => {
                setStatus("expired")
                field.onChange("expired")
              }}
              onSuccess={() => {
                setStatus("solved")
                field.onChange("solved")
              }}
            />
            <FormControl>
              <Input type="hidden" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <Button className="w-full md:w-auto" type="submit">Submit</Button>
    </Form>
  )
}