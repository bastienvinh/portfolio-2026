"use client"

import { useEffect, useState } from "react"
import { getContactInfo } from "../queries/get-contact"
import { Contact } from "../../../../payload-types"

export function useContactPage(language: "fr" | "en" ) {
	const [data, setData] = useState<Contact | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
    async function getData() {
      setLoading(true)
      setError(null)
      const info = await getContactInfo(language)
		  setData(info)
		  setLoading(false);
    }	

    getData()
	}, [language]);

	return { contactPage: data, loading, error };
}