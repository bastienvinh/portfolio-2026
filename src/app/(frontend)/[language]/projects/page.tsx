"use server"

import Link from "next/link"
import dayjs from "dayjs"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Labels } from "@/lib/translate"
import { RichText } from '@payloadcms/richtext-lexical/react'
import { Technology } from "../../../../../payload-types"
import { ScrollPage } from "@/components/scrollpage"
import { getProjects } from "@/features/projects/queries/get-projects"

export default async function ProjectsPage({ params }: { params: Promise<{ language: "fr" | "en" }>}) {
  const { language } = await params
  const paginatedProjects = await getProjects(language)

  return (
    <div id="projects" className="min-h-full max-w-3xl mx-auto flex flex-col gap-10 p-4 md:p-0">
      <ScrollPage>
        <div className="w-full flex flex-col gap-5">
          <h1 className="text-5xl font-bold">{Labels.page.projects.projects[language] ?? "Projects"}</h1>
          <p className="text-lg">
            {Labels.page.projects.introduction[language] ?? "Coming soon..."}
          </p>
        </div>

        <section id="projects" className="flex flex-col gap-5 pb-5">
          {paginatedProjects?.docs.map((project, index) => (
            <Link key={index} href={`/${language}/projects/${project.slug}`}>
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
      </ScrollPage>
    </div>
  );
}