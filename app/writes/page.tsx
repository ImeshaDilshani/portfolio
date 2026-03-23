import Link from "next/link";

const articles = [
  {
    slug: "2024-annual-review",
    date: "Jan 23, 2025",
    title: "2024 Annual Review — The Year of Adventure",
    category: "Personal Reflection",
    excerpt:
      "Challenges, growth, and lessons learned throughout an incredible year of exploration and self-discovery.",
    tags: ["Reflection", "Growth"],
    readTime: "8 min",
  },
  {
    slug: "datacast-episode-133",
    date: "Jan 14, 2024",
    title: "Datacast Episode 133: Full Data Stack Observability with Gantry Raakesh",
    category: "Podcast",
    excerpt:
      "James Raakesh, CEO of Gantry and former Director of ML at Uber, on observability in production machine learning systems.",
    tags: ["ML", "MLOps", "Data"],
    readTime: "12 min",
  },
];

export default function WritesPage() {
  return (
    <main>
      {/* Header */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-10">
            <p className="text-xs font-medium tracking-widest uppercase text-[var(--muted-foreground)] pt-1">
              Writes
            </p>
            <div className="space-y-4 max-w-2xl">
              <h1 className="text-4xl md:text-5xl text-[var(--foreground)]">Writes</h1>
              <p className="text-[var(--muted-foreground)] leading-relaxed">
                Writings on data science, machine learning, technology, and lessons learned along the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Articles list */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16">
        <div className="border border-[var(--border)]">
          {articles.map((article, i) => (
            <Link
              key={article.slug}
              href={`/writes/${article.slug}`}
              className={`group grid grid-cols-1 md:grid-cols-[120px_1fr_80px] gap-4 md:gap-8 px-6 md:px-8 py-6 md:py-8 border-b border-[var(--border)] last:border-b-0 hover:bg-[var(--muted)] transition-colors ${i % 2 === 1 ? "bg-[var(--card)]" : ""}`}
            >
              {/* Date */}
              <span className="text-xs text-[var(--muted-foreground)] pt-0.5 shrink-0">{article.date}</span>

              {/* Content */}
              <div className="space-y-2">
                <span className="text-xs font-medium tracking-widest uppercase text-[var(--muted-foreground)]">
                  {article.category}
                </span>
                <h2 className="text-base md:text-lg font-medium text-[var(--foreground)] group-hover:underline underline-offset-4">
                  {article.title}
                </h2>
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs border border-[var(--border)] text-[var(--muted-foreground)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Read time */}
              <span className="text-xs text-[var(--muted-foreground)] text-right hidden md:block pt-0.5">
                {article.readTime}
              </span>
            </Link>
          ))}
        </div>

        {/* Coming soon */}
        <div className="mt-16 border border-dashed border-[var(--border)] px-8 py-12 text-center space-y-3">
          <p className="text-xs font-medium tracking-widest uppercase text-[var(--muted-foreground)]">Coming Soon</p>
          <p className="text-[var(--muted-foreground)] text-sm max-w-md mx-auto">
            More articles are on the way. Subscribe via the footer to get notified.
          </p>
        </div>
      </section>
    </main>
  );
}
