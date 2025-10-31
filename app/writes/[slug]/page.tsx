"use client";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const articles = [
  {
    slug: "2024-annual-review",
    date: "January 23, 2025",
    title: "2024 Annual Review - The Year of Adventure",
    category: "Personal Reflection",
    excerpt:
      "After a journey of growth and self-discovery, I reflect on the challenges, lessons, and adventures that made 2024 an unforgettable year.",
    tags: ["Reflection", "Growth"],
    content: `
      <p>As 2024 comes to a close, I find myself reflecting on what has truly been a "Year of Adventure." From academic milestones to personal and professional growth, this year has been nothing short of transformative. This is a draft. I will update the detailed annual review soon.</p>

      <h2><b>Starting the Year: Final Year Internship and Research</b></h2>
      <p>The year began with the culmination of my university journey. I embarked on my final-year internship, which was both challenging and rewarding. This experience allowed me to apply the theoretical knowledge I had gained over the years to real-world problems. Working alongside industry professionals, I gained invaluable insights into Data Science, honed my technical skills, and learned the importance of collaboration and adaptability.</p>

      <p>Simultaneously, I delved into research as part of my academic requirements. My research focused on Natural Language Processing (NLP), which not only deepened my understanding of the subject but also taught me the discipline of critical thinking and perseverance. The process of formulating hypotheses, conducting experiments, and analyzing results was a journey of intellectual growth.</p>

      <h2><b>Personal Growth: Stepping Out of My Comfort Zone</b></h2>
      <p>2024 was also a year of significant personal growth. I made a conscious effort to step out of my comfort zone and embrace new experiences. Whether it was traveling to new places, meeting people from diverse backgrounds, or taking up hobbies like [mention hobbies], each experience enriched my perspective on life.</p>

      <p>I also prioritized mental and physical well-being this year. Regular exercise, mindfulness practices, and maintaining a healthy work-life balance became integral parts of my routine. These habits not only improved my overall health but also enhanced my productivity and focus.</p>

      <h2><b>Professional Growth: Building a Strong Foundation</b></h2>
      <p>On the professional front, 2024 was a year of laying a strong foundation for my career. The internship experience, coupled with the skills I developed during my research, positioned me well for the next phase of my professional journey. I also took the initiative to upskill myself by learning development of mobile applications, which I believe will be instrumental in achieving my Personal and Professional goals.</p>

      <p>Networking played a crucial role in my professional growth this year. Attending conferences, participating in workshops, and connecting with mentors helped me gain valuable insights and broaden my horizons.</p>

      <h2><b>Looking Ahead</b></h2>
      <p>As I look ahead to 2025, I am filled with excitement and optimism. The lessons learned and the experiences gained in 2024 have prepared me to take on new challenges and opportunities. I am eager to continue this journey of growth and adventure, both personally and professionally.</p>
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
        <div className="container px-6 max-w-4xl mx-auto">
          <Button variant="ghost" asChild className="mb-8">
            <Link href="/writes">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to all posts
            </Link>
          </Button>

          <article className="prose prose-lg dark:prose-invert max-w-none text-left leading-relaxed">
            <div
              className="space-y-6"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
            <style jsx>{`
              h2 {
                font-size: 1.5rem;
                font-weight: bold;
                color: #6b46c1; /* Purple highlight */
                margin-top: 1.5rem;
                margin-bottom: 1rem;
                border-bottom: 2px solid #6b46c1;
                padding-bottom: 0.5rem;
              }
            `}</style>
          </article>

          <div className="mt-12 pt-8 border-t flex justify-start">
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
