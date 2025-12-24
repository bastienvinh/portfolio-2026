"use server"

import { ScrollPage } from "@/components/scrollpage"
import { getPost } from "@/features/blog/get-post"
import { Labels } from "@/lib/translate"
import { RichText } from "@payloadcms/richtext-lexical/react"
import dayjs from "dayjs"
import Link from "next/link"
import { notFound } from "next/navigation"
import { FaArrowLeft } from "react-icons/fa"

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string, language: "fr" | "en" }> }) {
  const { slug, language } = await params
  const post = await getPost(language, slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <ScrollPage>
        <Link
          href={`/${language}/blog`}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <FaArrowLeft className="h-4 w-4" />
          {Labels.page.articles.backToPosts[language] ?? "Back to Posts"}
        </Link>

        <article className="space-y-8">
          <header className="space-y-4 pb-8 border-b">
            <h1 className="text-5xl font-bold tracking-tight text-balance">{post.title}</h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground font-mono">
              <time>{dayjs(post.createdAt).format(language === "fr" ? "D MMMM YYYY" : "MMMM D, YYYY")}</time>
              <span>•</span>
              <span>{post.minutes_to_read} {Labels.page.articles.minToRead[language] ?? "min read"}</span>
            </div>
          </header>

          <RichText className="prose prose-invert prose-lg max-w-none
            prose-headings:font-bold prose-headings:tracking-tight
            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4
            prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
            prose-pre:bg-white/5 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-lg
            prose-code:text-foreground prose-code:font-mono" data={post.content} />
        </article>
      </ScrollPage>
    </main>
  )
}