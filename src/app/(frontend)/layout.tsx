import type { Metadata } from "next"
import { JetBrains_Mono, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { Toaster } from "sonner"
import { Navbar } from "@/app/(frontend)/_components/navbar"
import { LanguageProvider } from "@/context/language"

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${_spaceGrotesk.variable} ${_jetbrainsMono.variable} font-sans antialiased`}
      >
        <LanguageProvider>
          <div className="container mx-auto min-h-screen grid grid-rows-[auto_1fr] gap-5 md:gap-10 overflow-hidden">
            <Navbar />
            <div className="grow overflow-hidden h-full">
              {children}
            </div>
          </div>
          <Toaster position="bottom-right" />
        </LanguageProvider>
      </body>
    </html>
  );
}
