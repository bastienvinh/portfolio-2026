"use client";

import Link from "next/link";
import { FaCode, FaFacebook, FaGithub } from "react-icons/fa";

export function Navbar() {
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
            About
          </Link>
          <Link
            href="#projects"
            className="text-nav-text hover:text-nav-text-hover transition-colors text-sm"
          >
            Projects
          </Link>

          <Link
            href="#blog"
            className="text-nav-text hover:text-nav-text-hover transition-colors text-sm"
          >
            Blog
          </Link>

          <Link
            href="#contact"
            className="bg-primary hover:bg-primary-hover text-white px-3 py-1.5 rounded transition-colors font-medium text-sm"
          >
            Contact
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-12">
          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-nav-text hover:text-nav-text-hover transition-colors"
            >
              <FaFacebook className="w-5 h-5" />
              <span>Facebook</span>
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
              About Me
            </Link>
            <Link
              href="#projects"
              className="text-nav-text hover:text-nav-text-hover transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#blogs"
              className="text-nav-text hover:text-nav-text-hover transition-colors"
            >
              Blog
            </Link>
          </div>

          {/* Contact Button */}
          <Link
            href="#blog"
            className="bg-primary hover:bg-primary-hover text-white px-6 py-2 rounded transition-colors font-medium"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
} 