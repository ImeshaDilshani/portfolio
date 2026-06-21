import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Library | Imesha Dilshani",
  description: "A collection of my articles, reading lists, and favorite podcasts.",
};

export default function LibraryPage() {
  return (
    <main>
      <section className="border-b border-[var(--border)] bg-[var(--muted)]/20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-[var(--foreground)] tracking-tight">
              The Library
            </h1>
            <p className="text-lg md:text-xl text-[var(--muted-foreground)] leading-relaxed">
              Welcome to my digital garden. Here you will find my thoughts on software engineering, the books that shape my perspective, and the podcasts I listen to for continuous growth.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Articles */}
            <Link href="/writes" className="group block h-full border border-[var(--border)] p-8 md:p-10 hover:bg-[var(--muted)]/30 transition-colors">
              <div className="flex justify-between items-start mb-12">
                <div className="h-10 w-10 flex items-center justify-center bg-[var(--foreground)] text-[var(--background)] rounded-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                </div>
                <span className="text-[var(--foreground)] opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
              </div>
              <h2 className="text-2xl font-medium text-[var(--foreground)] mb-4">Articles</h2>
              <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                My writings on software engineering, data systems, and my journey in tech. Read my latest thoughts and tutorials.
              </p>
            </Link>

            {/* Reading List */}
            <Link href="/reads" className="group block h-full border border-[var(--border)] p-8 md:p-10 hover:bg-[var(--muted)]/30 transition-colors">
              <div className="flex justify-between items-start mb-12">
                <div className="h-10 w-10 flex items-center justify-center bg-[var(--foreground)] text-[var(--background)] rounded-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
                </div>
                <span className="text-[var(--foreground)] opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
              </div>
              <h2 className="text-2xl font-medium text-[var(--foreground)] mb-4">Books I Read</h2>
              <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                A curated list of books covering technical deep-dives, philosophy, business, and self-improvement.
              </p>
            </Link>

            {/* Podcasts */}
            <Link href="/listening" className="group block h-full border border-[var(--border)] p-8 md:p-10 hover:bg-[var(--muted)]/30 transition-colors">
              <div className="flex justify-between items-start mb-12">
                <div className="h-10 w-10 flex items-center justify-center bg-[var(--foreground)] text-[var(--background)] rounded-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>
                </div>
                <span className="text-[var(--foreground)] opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
              </div>
              <h2 className="text-2xl font-medium text-[var(--foreground)] mb-4">Podcasts</h2>
              <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                The tech, business, and design podcasts I listen to daily to stay informed and inspired.
              </p>
            </Link>

          </div>
        </div>
      </section>
    </main>
  );
}
