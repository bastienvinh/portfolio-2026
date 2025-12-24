"use client"

import { useLanguage } from "@/context/language"
import { cn } from "@/lib/utils"

export function LanguageSwitch() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center bg-gray-800 rounded-full p-1">
      <button onClick={() => setLanguage("fr")} className={cn("px-3 py-1 rounded-full text-sm font-medium transition-colors cursor-pointer", {
        "bg-gray-700 text-white": language === "fr",
        "text-gray-400": language !== "fr",
      })}>
        Français
      </button>
      <button onClick={() => setLanguage("en")} className={cn("px-3 py-1 rounded-full  text-sm font-medium transition-colors cursor-pointer", {
        "bg-gray-700 text-white": language === "en",
        " text-gray-400": language !== "en",
      })}>
        English
      </button>
    </div>
  )
}

export function LanguageSwitchMini() {
  const { language, setLanguage } = useLanguage()
  return (
    <div className="flex items-center bg-gray-800 rounded-full p-1">
      <button onClick={() => setLanguage("fr")} className={cn("px-2 py-1 rounded-full text-white text-xs font-medium transition-colors", {
        "bg-gray-700": language === "fr",
        "text-gray-400": language !== "fr",
      })}>
        FR
      </button>
      <button onClick={() => setLanguage("en")} className={cn("px-2 py-1 rounded-full text-xs font-medium transition-colors", {
        "bg-gray-700": language === "en",
        "text-gray-400": language !== "en",
      })}>
        EN
      </button>
    </div>
  )
}