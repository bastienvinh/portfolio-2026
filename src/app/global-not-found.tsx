import type { Metadata } from "next"
import { JetBrains_Mono, Space_Grotesk } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import { LanguageProvider } from "@/context/language"
import { Navbar } from "./_components/navbar"

export const metadata: Metadata = {
  title: "Bastien Vinh - Portfolio",
  description: "Portfolio de Bastien Vinh, développeur full-stack passionné par les technologies web et mobiles. Découvrez mes projets, compétences et expériences.",
}

const _spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
})

const _jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

function NotFoundPage() {

  return (
    <html lang="fr">
      <body suppressHydrationWarning
        className={`${_spaceGrotesk.variable} ${_jetbrainsMono.variable} font-sans antialiased`}
      >
        <LanguageProvider>
          <div className="container mx-auto min-h-screen grid grid-rows-[auto_1fr] gap-5 md:gap-10 overflow-hidden">
            <Navbar />

            <div className="grow overflow-hidden h-full flex flex-col items-center justify-center text-center">
              <h1 className="text-7xl font-bold text-gray-700 dark:text-white mb-4 select-none">404</h1>
              <p className="text-xl text-gray-400 dark:text-gray-300 mb-8">
                {`Oops! Cette page n’existe pas.`}
              </p>
              <Link
                href="/"
                className="inline-block px-6 py-2 rounded bg-gray-900 text-white dark:bg-white dark:text-gray-900 font-medium transition hover:bg-gray-700 hover:dark:bg-gray-200"
              >
                Retour à l’accueil
              </Link>
            </div>

            
          </div>
        </LanguageProvider>

      </body>
    </html>
  )
}

export default NotFoundPage