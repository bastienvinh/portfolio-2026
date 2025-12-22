"use client"

import Link from "next/link"
import dayjs from "dayjs"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/context/language"
import { useGetProjects } from "@/features/projects/hooks/use-projects"
import { Labels } from "@/lib/translate"
import { RichText } from '@payloadcms/richtext-lexical/react'
import { Technology } from "../../../../payload-types"
import { useEffect, useState } from "react"
import { FaArrowUp } from "react-icons/fa"

export default function ProjectsPage() {
  const { language } = useLanguage()
  const { paginatedProjects, loading } = useGetProjects(language)
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
    <div id="projects" className="min-h-full max-w-3xl mx-auto flex flex-col gap-10 p-4 md:p-0">
      <div className="w-full flex flex-col gap-5">
        <h1 className="text-5xl font-bold">{Labels.page.projects.projects[language] ?? "Projects"}</h1>
        <p className="text-lg">
          {Labels.page.projects.introduction[language] ?? "Coming soon..."}
        </p>
      </div>

      <section id="projects" className="flex flex-col gap-5 pb-5">
        {paginatedProjects?.docs.map((project, index) => (
           <Link key={index} href={`/projects/${project.slug}`}>
              <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg group cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2 flex-1">
                      <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        <RichText data={project.overview!} />
                      </CardDescription>
                    </div>
                    <span className="text-sm text-muted-foreground font-mono">{dayjs(project.starting_date).format("YYYY")}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies?.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 text-xs font-medium bg-secondary text-secondary-foreground rounded-md"
                      >
                        {(tech as Technology).name}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
        ))}
      </section>

      {showArrow && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-8 right-8 z-50 bg-primary text-white rounded-full p-3 shadow-lg hover:bg-primary/80 transition-colors"
        >
          {/* Up arrow Unicode, or replace with an SVG */}
          <FaArrowUp />
        </button>
      )}
    </div>
  );
}