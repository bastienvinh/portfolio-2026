import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { LanguageProvider } from "@/context/language";

export const metadata: Metadata = {
  title: "Bastien Vinh - Portfolio",
  description: "Portfolio de Bastien Vinh, développeur full-stack passionné par les technologies web et mobiles. Découvrez mes projets, compétences et expériences.",
}

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        <LanguageProvider>
          <div className="w-screen">
            <Navbar />
            <div>
              {children}
            </div>
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
