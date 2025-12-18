import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/app/(frontend)/_components/navbar";
import { LanguageProvider } from "@/context/language";

export const metadata: Metadata = {
  title: "Bastien Vinh - Portfolio",
  description: "Portfolio de Bastien Vinh, développeur full-stack passionné par les technologies web et mobiles. Découvrez mes projets, compétences et expériences.",
}

const montserrat = Montserrat({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased`}
      >
        <LanguageProvider>
          <div className="container mx-auto h-screen flex flex-col gap-10">
            <Navbar />
            <div className="grow">
              {children}
            </div>
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
