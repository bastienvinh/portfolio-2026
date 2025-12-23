"use server"

import { Card, CardContent } from "@/components/ui/card"
import { getProject } from "@/features/projects/queries/get-project"
import { RichText } from "@payloadcms/richtext-lexical/react"
import dayjs from "dayjs"
import Link from "next/link"
import { FaArrowLeft, FaGithub } from "react-icons/fa"
import { Media, Technology } from "../../../../../../payload-types"
import Image from "next/image"
import { Labels } from "@/lib/translate"

export default async function ProjectsPage({ params }: { params: Promise<{ slug: string, language: "fr" | "en" }>}) {

  const { language, slug } = await params
  const project = await getProject(language, slug!)

  return (
    <main className="p-4 md:p-0">
      <Link
        href={`/${language}/projects`}
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 group"
      >
        <FaArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        {Labels.page.page.allProjects[language] ?? "View all projects"}
      </Link>

      {/* Hero section */}
      <div className="space-y-6 mb-12">
        <div className="flex items-start justify-between gap-4">
          <h1 className="text-5xl font-bold tracking-tight text-balance">{project.title}</h1>
          <span className="text-sm text-muted-foreground font-mono">{dayjs(project.starting_date).format("YYYY")}</span>
        </div>
        <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
          <RichText data={project.overview!} />
        </p>

        {/* Links */}
        <div className="flex gap-4">
          <Link
            href={project.live_url ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-foreground text-background hover:bg-foreground/90 transition-colors rounded-md text-sm font-medium"
          >
            {/* <ExternalLink className="w-4 h-4" /> */}
            View Live
          </Link>
          <Link
            href={project.code_url ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 border-2 border-border hover:border-foreground transition-colors rounded-md text-sm font-medium"
          >
            <FaGithub className="w-4 h-4" />
            View Code
          </Link>
        </div>
      </div>

      <div className="mb-16 rounded-lg overflow-hidden border-2 border-border">
        <Image width={20} height={20} src={(project.cover_image as Media)?.url ?? "/placeholder.svg"} alt={project.title} className="w-full h-auto max-w-200 mx-auto" />
      </div>

      {/* Tech stack */}
      <Card className="mb-12 border-2">
        <CardContent className="pt-6">
          <h2 className="text-sm font-semibold mb-4 text-muted-foreground uppercase tracking-wider">
            {Labels.page.page.usedTechnologies[language]}
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies?.map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 text-sm font-medium bg-secondary text-secondary-foreground rounded-md"
              >
                {(tech as Technology).name}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Overview */}
      <div className="space-y-12 mb-12">
        <section>
          <h2 className="text-3xl font-bold mb-4">{Labels.page.page.overview[language] ?? "Overview"}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty"><RichText data={project.overview!} /></p>
        </section>

        {/* Challenges */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Challenges & Solutions</h2>
          <Card className="border-2">
            <CardContent className="pt-6">
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty"><RichText data={project.challenges_and_solutions!} /></p>
            </CardContent>
          </Card>
        </section>

        {/* Outcomes */}
        <section>
          <h2 className="text-3xl font-bold mb-4">{Labels.page.page.keyOutcomes[language] ?? "Key Outcomes"}</h2>
          <RichText data={project.outcomes!} />
        </section>
      </div>

      {/* Next/Previous projects */}
      <div className="pt-12 border-t-2 border-border">
        <Link
          href={`/${language}/projects`}
          className="inline-flex items-center gap-2 text-foreground hover:text-foreground/80 transition-colors font-medium"
        >
          {Labels.page.page.allProjects[language] ?? "View all projects"}
          <span className="text-xl">→</span>
        </Link>
      </div>
    </main>
  )
}