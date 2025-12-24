"use server"

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string, language: "fr" | "en" }>}) {
  const { slug, language } = await params

  return (
    <section className="p-4 md:p-0">
      <h1 className="text-5xl font-bold tracking-tight">Blog Post: {slug}</h1>
      <p className="text-lg text-muted-foreground leading-relaxed">
        This is a placeholder for the blog post content in {language.toUpperCase()}.
      </p>
    </section>
  )
}