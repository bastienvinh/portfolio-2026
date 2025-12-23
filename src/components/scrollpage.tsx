"use client"

import { useState, useEffect } from "react"
import { FaArrowUp } from "react-icons/fa"

export function ScrollPage({ children }: { children: React.ReactNode }) {
  const [showArrow, setShowArrow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY > 200)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      {children}
      {showArrow && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-8 right-8 z-50 bg-primary text-white rounded-full p-3 shadow-lg hover:bg-primary/80 transition-colors"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  )
}