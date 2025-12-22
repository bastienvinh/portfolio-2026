"use client"

import Link from "next/link"
import { FaCode, FaGithub, FaLinkedin } from "react-icons/fa"
import { Button } from "../../../components/ui/button"
import { cn } from "@/lib/utils"
import { LanguageSwitch, LanguageSwitchMini } from "./language-switch"
import { useLanguage } from "@/context/language"
import { useNavbarLabels } from "@/features/default/hooks/use-navbar-labels"
import { useGeneralInformations } from "@/features/default/hooks/use-general-informations"
import { usePathname } from "next/navigation"

export function Navbar() {

  const { language } = useLanguage()
  const { data } = useNavbarLabels(language)
  const { tab_about, tab_blog, tab_contact, tab_projects } = data || {}
  const { informations } = useGeneralInformations(language)
  const { github_url, linkedin_url } = informations || {}
  const pathname = usePathname()
  // const pathname = await getServerPathname()
  // const language = await getCurrentLanguage()
  // const { tab_about, tab_blog, tab_contact, tab_projects } = await getNavBarLinks(language)
  // const { github_url, linkedin_url } = await getGeneralInformations(language)

  return (
    <nav className="w-full px-4 md:px-0 py-4">
      <div className=" flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-primary font-bold text-xl">
          <FaCode className="text-primary text-2xl" />
          <span className="text-white hidden md:inline">BASTIEN VINH</span>
          <span className="text-white md:hidden">BV</span>
        </Link>

        {/* Mobile Navigation - inline */}
        <div className="flex md:hidden items-center gap-3">
          <Link
            href={`/${language}/projects`}
            className="text-nav-text hover:text-nav-text-hover transition-colors text-sm"
          >
            {tab_projects ?? "Projects"}
          </Link>

          <Link
            href={`/${language}/blog`}
            className="text-nav-text hover:text-nav-text-hover transition-colors text-sm"
          >
            {tab_blog ?? "Blog"}
          </Link>

          {/* Language Toggle - Mobile */}
          <LanguageSwitchMini />

          <Button className="text-sm" asChild>
            <Link href={`${language}/contact`}>{tab_contact ?? "Contact"}</Link>
          </Button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-12">
          {/* Social Links */}
          <div className="flex items-center gap-6  font-bold">
            <a
              href={linkedin_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-nav-text hover:text-nav-text-hover transition-colors"
            >
              <FaLinkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
            <a
              href={github_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-nav-text hover:text-nav-text-hover transition-colors"
            >
              <FaGithub className="w-5 h-5" />
              <span>Github</span>
            </a>
          </div>

          {/* Nav Links */}
          <div className="flex items-center gap-6">
            <Link
              href={`/${language}`}
              className={cn("flex items-center gap-1 text-nav-text hover:text-nav-text-hover transition-colors", {
                "text-nav-text-hover": pathname === "/"
              })}
            >
              {tab_about ?? "About Me"}
            </Link>
            <Link
              href={`/${language}/projects`}
              className={cn("text-nav-text hover:text-nav-text-hover transition-colors", {
                "text-nav-text-hover": pathname === "/projects"
              })}
            >
              {tab_projects ?? "Projects"}
            </Link>
            <Link
              href={`/${language}/blog`}
              className={cn("text-nav-text hover:text-nav-text-hover transition-colors", {
                "text-nav-text-hover": pathname === "/blog"
              })}
            >
              {tab_blog ?? "Blog"}
            </Link>

            {/* Language Toggle - Desktop */}
            <LanguageSwitch />
          </div>

          <Button className="cursor-pointer" asChild>
            <Link href={`/${language}/contact`}>{tab_contact ?? "Contact"}</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
} 