import Link from "next/link";
import { getPosts } from "@/sanity/lib/queries";
import { format } from "date-fns";

export default async function WritesPage() {
  const posts = await getPosts();

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
                A collection of my writings on technology, data science, personal growth, and the lessons I've learned through my journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Articles list */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16">
        <div className="border border-[var(--border)]">
          {posts.length > 0 ? (
            posts.map((post: any, i: number) => (
              <Link
                key={post.slug?.current || post._id}
                href={post.slug?.current ? `/writes/${post.slug.current}` : '#'}
                className={`group grid grid-cols-1 md:grid-cols-[120px_1fr_80px] gap-4 md:gap-8 px-6 md:px-8 py-6 md:py-8 border-b border-[var(--border)] last:border-b-0 hover:bg-[var(--muted)] transition-colors ${i % 2 === 1 ? "bg-[var(--card)]" : ""}`}
              >
                {/* Date */}
                <span className="text-xs text-[var(--muted-foreground)] pt-0.5 shrink-0">
                  {post.publishedAt ? format(new Date(post.publishedAt), "MMM dd, yyyy") : "Draft"}
                </span>

                {/* Content */}
                <div className="space-y-2">
                  <span className="text-xs font-medium tracking-widest uppercase text-[var(--muted-foreground)]">
                    {post.categories?.[0]?.title || "Article"}
                  </span>
                  <h2 className="text-base md:text-lg font-medium text-[var(--foreground)] group-hover:underline underline-offset-4">
                    {post.title || "Untitled Post"}
                  </h2>
                  <p className="text-sm text-[var(--muted-foreground)] leading-relaxed line-clamp-2">
                    {post.excerpt || (post.body?.[0]?.children?.[0]?.text ? post.body[0].children[0].text.substring(0, 160) + "..." : "No content available.")}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {(post.tags || []).map((tag: string) => (
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
                  {post.readTime || "5 min"}
                </span>
              </Link>
            ))
          ) : (
            <div className="px-8 py-12 text-center text-[var(--muted-foreground)]">
              No posts found. Add some in Sanity Studio!
            </div>
          )}
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
