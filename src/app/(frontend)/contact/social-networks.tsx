"use client"

import { useLanguage } from "@/context/language";
import { useContactPage } from "@/features/contact/hooks/use-contact-page"
import Link from "next/link"
import { FaGithub, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa"

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
        <a className="w-15 h-15" href={contactPage.facebook_link} target="_blank" rel="noopener noreferrer">
          <FaFacebook className="w-full h-full" />
        </a>
      )}

      {contactPage?.linkedin_link && (
        <a className="w-15 h-15" href={contactPage.linkedin_link} target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="w-full h-full" />
        </a>
      )}

      {contactPage?.x_twitter_link && (
        <a className="w-15 h-15" href={contactPage.x_twitter_link} target="_blank" rel="noopener noreferrer">
          {/* You may want to use a Twitter/X icon here */}
          <span className="w-full h-full flex items-center justify-center font-bold text-xl">
            <FaTwitter className="w-full h-full" />
          </span>
        </a>
      )}
    </>
  )
}