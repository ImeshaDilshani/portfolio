import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const articles = [
  {
    slug: "2024-annual-review",
    date: "January 23, 2024",
    title: "2024 Annual Review - The Year of Adventure",
    category: "Personal Reflection",
    excerpt:
      "After a journey I taking stock at my twenty days within, I have begun. Challenges, growth, and lessons learned throughout an incredible year of exploration and self-discovery.",
    tags: ["Reflection", "Growth"],
    content: `
      <p>As I reflect on 2024, I'm filled with gratitude for the incredible journey this year has been. It was a year of adventure, growth, and self-discovery that pushed me beyond my comfort zone in ways I never imagined.</p>

      <h2>The Journey Begins</h2>
      <p>At the start of the year, I set out with ambitious goals and a desire to challenge myself. Little did I know that the path ahead would be filled with unexpected twists and turns that would shape me in profound ways.</p>

      <h2>Key Lessons Learned</h2>
      <p>Throughout this year, I've learned that growth happens outside our comfort zones. Every challenge I faced became an opportunity to learn something new about myself and the world around me.</p>

      <h2>Looking Forward</h2>
      <p>As I close this chapter and look toward the future, I'm excited about the possibilities that lie ahead. The experiences of 2024 have prepared me for whatever comes next.</p>
    `,
  },
  {
    slug: "datacast-episode-133",
    date: "January 14, 2024",
    title:
      "Datacast Episode 133: Full Data Stack Observability with Gantry Raakesh",
    category: "Podcast",
    excerpt:
      "James Raakesh is the CEO and Co-Founder of Gantry. Before Gantry, Raakesh was the Director of Machine Learning at Uber, where he led teams building ML infrastructure and production ML systems.",
    tags: ["Machine Learning", "MLOps"],
    content: `
      <p>In this episode, I had the pleasure of speaking with James Raakesh, CEO and Co-Founder of Gantry, about the critical importance of observability in machine learning systems.</p>

      <h2>Background</h2>
      <p>Before founding Gantry, Raakesh was the Director of Machine Learning at Uber, where he led teams building ML infrastructure and production ML systems. His experience at scale gives him unique insights into the challenges of maintaining ML systems in production.</p>

      <h2>Key Takeaways</h2>
      <p>We discussed the importance of monitoring ML models in production, understanding model drift, and building systems that can adapt to changing data patterns. Raakesh shared valuable insights about building robust ML infrastructure.</p>

      <h2>The Future of MLOps</h2>
      <p>Looking ahead, we explored how the field of MLOps is evolving and what tools and practices will become essential for teams building production ML systems.</p>
    `,
  },
];

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <main>
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/data-journalism-writing-laptop-notebook.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background" />
        </div>

        <div className="relative z-10 container text-center space-y-4 px-4">
          <Badge variant="outline" className="mb-4">
            {article.category}
          </Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
            {article.title}
          </h1>
          <time className="text-sm text-muted-foreground">{article.date}</time>
        </div>
      </section>

      <div className="py-16 md:py-24">
        <div className="container px-4 max-w-3xl mx-auto">
          <Button variant="ghost" asChild className="mb-8">
            <Link href="/writes">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to all posts
            </Link>
          </Button>

          <article className="prose prose-lg dark:prose-invert max-w-none text-center">
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </article>

          <div className="mt-8 pt-8 border-t flex justify-center">
            <div className="flex flex-wrap gap-2 justify-center">
              {article.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
