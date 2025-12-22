"use client"

import { useLanguage } from "@/context/language";
import { useGeneralInformations } from "@/features/default/hooks/use-general-informations";
import { useNavbarLabels } from "@/features/default/hooks/use-navbar-labels";
import Link from "next/link"
import { usePathname } from "next/navigation"
import { FaCode, FaGithub, FaLinkedin } from "react-icons/fa"
import { Button } from "../../../components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { language, setLanguage } = useLanguage()
  const { tabAbout, tabBlog, tabProjects, tabContact } = useNavbarLabels(language);
  const { informations } = useGeneralInformations(language);
  const pathname = usePathname();

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
            href="/projects"
            className="text-nav-text hover:text-nav-text-hover transition-colors text-sm"
          >
            {tabProjects?.name ?? "Projects"}
          </Link>

          <Link
            href="/blog"
            className="text-nav-text hover:text-nav-text-hover transition-colors text-sm"
          >
            {tabBlog?.name ?? "Blog"}
          </Link>

          {/* Language Toggle - Mobile */}
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

          <Button className="text-sm" asChild>
            <Link href="/contact">{tabContact?.name ?? "Contact"}</Link>
          </Button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-12">
          {/* Social Links */}
          <div className="flex items-center gap-6  font-bold">
            <a
              href={informations?.linkedin_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-nav-text hover:text-nav-text-hover transition-colors"
            >
              <FaLinkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
            <a
              href={informations?.github_url}
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
              href="/"
              className={cn("flex items-center gap-1 text-nav-text hover:text-nav-text-hover transition-colors", {
                "text-nav-text-hover": pathname === "/"
              })}
            >
              {tabAbout?.name ?? "About Me"}
            </Link>
            <Link
              href="/projects"
              className={cn("text-nav-text hover:text-nav-text-hover transition-colors", {
                "text-nav-text-hover": pathname === "/projects"
              })}
            >
              {tabProjects?.name ?? "Projects"}
            </Link>
            <Link
              href="/blog"
              className={cn("text-nav-text hover:text-nav-text-hover transition-colors", {
                "text-nav-text-hover": pathname === "/blog"
              })}
            >
              {tabBlog?.name ?? "Blog"}
            </Link>

            {/* Language Toggle - Desktop */}
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
          </div>

          <Button className="cursor-pointer" asChild>
            <Link href="/contact">{tabContact?.name ?? "Contact"}</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
} 