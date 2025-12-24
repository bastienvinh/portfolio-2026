"use server"

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { getArticles } from "@/features/blog/queries/get-posts"
import { ParseSearchParams } from "@/features/blog/search-params"
import { Labels } from "@/lib/translate"
import dayjs from "dayjs"
import Link from "next/link"
import { BlogPagination } from "./blog-pagination"
import { ScrollPage } from "@/components/scrollpage"

type BlogPageProps = {
  params: Promise<{ language: "fr" | "en" }>
  searchParams: Promise<ParseSearchParams>
}

export default async function BlogPage({ params, searchParams }: BlogPageProps) {
  const { language } = await params;
  const sp = await searchParams;
  const paginationPage = await getArticles(language, sp);

  // Pagination logic
  const currentPage = Number(paginationPage.page || 1);
  const totalPages = Number(paginationPage.totalPages);

  return (
    <section className="p-4 md:p-0 max-w-3xl mx-auto">
      <ScrollPage>
        <div className="space-y-4 mb-12">
          <h1 className="text-5xl font-bold tracking-tight">{Labels.page.articles.all[language] ?? "Blog"}</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {Labels.page.articles.description[language] ?? "Discover my latest articles on web development, programming, and technology. Stay updated with tips, tutorials, and insights from my experience as a full-stack developer."}
          </p>
        </div>

        <div className="grid gap-6">
          {paginationPage.docs.map((post) => (
            <Link key={post.slug} href={`/${language}/blog/${post.slug}`}>
              <article>
                <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg group cursor-pointer">
                  <CardHeader className="space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <CardTitle className="text-2xl group-hover:text-primary transition-colors">{post.title}</CardTitle>
                      <span className="text-sm text-muted-foreground font-mono whitespace-nowrap">{dayjs(post.createdAt).format(language === "fr" ? "DD/MM/YYYY" : "YYYY-MM-DD")}</span>
                    </div>
                    <CardDescription className="text-base leading-relaxed">Description</CardDescription>
                  </CardHeader>
                </Card>
              </article>
            </Link>
          ))}
        </div>

        <BlogPagination currentPage={currentPage} totalPages={totalPages} language={language} />
      </ScrollPage>
    </section>
  );
}