"use client"

import { useLanguage } from "@/context/language"
import { redirect } from "next/navigation"

export default function Page() {
  const { language } = useLanguage()
  redirect(`/${language}/`)
}