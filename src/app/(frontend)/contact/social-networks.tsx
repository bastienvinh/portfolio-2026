"use client"

import { useLanguage } from "@/context/language";
import { useContactPage } from "@/features/contact/hooks/use-contact-page"
import Link from "next/link"
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa"

export function SocialNetworks() {
  const { language } = useLanguage();
  const { contactPage } = useContactPage(language)

  return (
    <>
      {contactPage?.github_link && (
        <Link className="w-15 h-15" href={contactPage.github_link} target="_blank" rel="noopener noreferrer">
          <FaGithub className="w-full h-full" />
        </Link>
      )}

      {contactPage?.facebook_link && (
        <Link className="w-15 h-15" href={contactPage.facebook_link} target="_blank" rel="noopener noreferrer">
          <FaFacebook className="w-full h-full" />
        </Link>
      )}

      {contactPage?.linkedin_link && (
        <Link className="w-15 h-15" href={contactPage.linkedin_link} target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="w-full h-full" />
        </Link>
      )}
    </>
  )
}