"use server"

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { getArticles } from "@/features/blog/get-articles"
import dayjs from "dayjs"
import Link from "next/link"

export default async function BlogPage({ params }: { params: Promise<{ slug: string, language: "fr" | "en" }>}) {
  const { language } = await params
  const paginationPage = await getArticles(language)

  return (
    <section className="p-4 md:p-0">
      <div className="space-y-4 mb-12">
        <h1 className="text-5xl font-bold tracking-tight">Blog</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Thoughts, tutorials, and insights about web development.
        </p>
      </div>

      <div className="grid gap-6">
        {paginationPage.docs.map((post) => (
          <Link key={post.slug} href={`${language}/blog/${post.slug}`}>
            <article>
              <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg group cursor-pointer">
                <CardHeader className="space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors">{post.title}</CardTitle>
                    <span className="text-sm text-muted-foreground font-mono whitespace-nowrap">{dayjs(post.createdAt).format( language === "fr" ? "DD/MM/YYYY" : "YYYY-MM-DD")}</span>
                  </div>
                  <CardDescription className="text-base leading-relaxed">Description</CardDescription>
                </CardHeader>
              </Card>
            </article>
          </Link>
        ))}
      </div>
    </section>
  )
}