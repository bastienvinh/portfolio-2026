"use client"

import { useEffect, useState } from "react";
import { About } from "../../../../payload-types";
import { getAboutData } from "../queries/about";

export function useAboutPage(language: 'fr' | 'en') {
  const [aboutPageInfo, setAboutPageInfo] = useState<About | null>();
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    async function getData() {
      setIsLoading(true)
      const aboutData = await getAboutData(language)
      setAboutPageInfo(aboutData)
      setIsLoading(false)
    }

    getData()
  }, [language])

  return { aboutPageInfo, isLoading }
}