"use client"

import { useLanguage } from "@/context/language";
import { useNavbarLabels } from "@/features/default/hooks/use-navbar-labels";
import Link from "next/link"
import { FaCode, FaGithub, FaLinkedin } from "react-icons/fa"

export function Navbar() {
  const { language, setLanguage } = useLanguage()
  const { tabAbout, tabBlog, tabProjects, tabContact } = useNavbarLabels(language);

  return (
    <nav className="bg-nav-bg py-4 px-4 md:px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-primary font-bold text-xl">
          <FaCode className="text-primary text-2xl" />
          <span className="text-white hidden md:inline">BASTIEN VINH</span>
        </Link>

        {/* Mobile Navigation - inline */}
        <div className="flex md:hidden items-center gap-3">
          <Link
            href="#stories"
            className="text-nav-text hover:text-nav-text-hover transition-colors text-sm"
          >
            {tabAbout?.name ?? "About Me"}
          </Link>
          <Link
            href="#projects"
            className="text-nav-text hover:text-nav-text-hover transition-colors text-sm"
          >
            {tabProjects?.name ?? "Projects"}
          </Link>

          <Link
            href="#blog"
            className="text-nav-text hover:text-nav-text-hover transition-colors text-sm"
          >
            {tabBlog?.name ?? "Blog"}
          </Link>

          {/* Language Toggle - Mobile */}
          <div className="flex items-center bg-gray-800 rounded-full p-1">
            <button className="px-2 py-1 rounded-full bg-gray-700 text-white text-xs font-medium transition-colors">
              FR
            </button>
            <button className="px-2 py-1 rounded-full text-gray-400 hover:text-white text-xs font-medium transition-colors">
              EN
            </button>
          </div>

          <Link
            href="#contact"
            className="bg-primary hover:bg-primary-hover text-white px-3 py-1.5 rounded transition-colors font-medium text-sm"
          >
            {tabContact?.name ?? "Contact"}
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-12">
          {/* Social Links */}
          <div className="flex items-center gap-6  font-bold">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-nav-text hover:text-nav-text-hover transition-colors"
            >
              <FaLinkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com"
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
              href="#stories"
              className="flex items-center gap-1 text-nav-text hover:text-nav-text-hover transition-colors"
            >
              {tabAbout?.name ?? "About Me"}
            </Link>
            <Link
              href="#projects"
              className="text-nav-text hover:text-nav-text-hover transition-colors"
            >
              {tabProjects?.name ?? "Projects"}
            </Link>
            <Link
              href="#blogs"
              className="text-nav-text hover:text-nav-text-hover transition-colors"
            >
              {tabBlog?.name ?? "Blog"}
            </Link>

            {/* Language Toggle - Desktop */}
            <div className="flex items-center bg-gray-800 rounded-full p-1">
              <button className="px-3 py-1 rounded-full bg-gray-700 text-white text-sm font-medium transition-colors">
                Français
              </button>
              <button className="px-3 py-1 rounded-full text-gray-400 hover:text-white text-sm font-medium transition-colors">
                English
              </button>
            </div>
          </div>

          {/* Contact Button */}
          <Link
            href="#blog"
            className="bg-primary hover:bg-primary-hover text-white px-6 py-2 rounded transition-colors font-medium"
          >
            {tabContact?.name ?? "Contact"}
          </Link>
        </div>
      </div>
    </nav>
  );
} 