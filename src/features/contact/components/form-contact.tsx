"use client"

import { useForm } from "react-hook-form"
import z from "zod"
import { Turnstile } from '@marsidev/react-turnstile'
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/context/language"
import { Textarea } from "@/components/ui/textarea"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { getFormSchema } from "../schema/contact-schema"
import { Labels } from "@/lib/translate"

export function FormContact() {

  const { language } = useLanguage()
  const formSchema = getFormSchema(language)
  const [status, setStatus] = useState<"idle" | "expired" | "solved" | "error">("idle");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(status)
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (

    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
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

        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{Labels.title[language]}</FormLabel>
              <FormControl>
                <Input className="text-sm font-semibold placeholder:uppercase text-zinc-500" placeholder="title" type="title [optional]" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
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
          control={form.control}
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

        <Button type="submit">Submit</Button>
      </form>
    </Form>

  )
}