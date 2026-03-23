"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import ProjectCard from "@/components/project-card";
import { dataProjects } from "@/lib/projects";

export default function DataPortfolioPage() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const tags = useMemo(() => Array.from(new Set(dataProjects.flatMap((p) => p.tags || []))).sort(), []);
  const filtered = selectedTag ? dataProjects.filter((p) => p.tags?.includes(selectedTag)) : dataProjects;

  return (
    <main>
      {/* ── HEADER ──────────────────────────────────────── */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-10">
            <p className="text-xs font-medium tracking-widest uppercase text-[var(--muted-foreground)] pt-1">
              Data Portfolio
            </p>
            <div className="space-y-4 max-w-2xl">
              <h1 className="text-4xl md:text-5xl text-[var(--foreground)]">Data & Analytics Projects</h1>
              <p className="text-[var(--muted-foreground)] leading-relaxed">
                A collection of data analysis, machine learning models, and visualization projects, mostly open-sourced as Jupyter and R notebooks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SIDEBAR + CONTENT ───────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-10 py-16 md:py-20">

          {/* Sidebar Nav */}
          <aside className="lg:self-start lg:sticky lg:top-20">
            <nav className="space-y-0">
              <p className="text-xs font-medium tracking-widest uppercase text-[var(--muted-foreground)] mb-4">Sections</p>
              {[
                { label: "About", href: "/about" },
                { label: "Work Experience", href: "/about/work-experience" },
                { label: "My Research", href: "/about/ai-research" },
                { label: "Presentations", href: "/about/presentations" },
                { label: "Data Portfolio", href: "/about/data-portfolio" },
                { label: "Coding Portfolio", href: "/about/coding-portfolio" },
                { label: "MOOCs", href: "/about/moocs" },
                { label: "Undergraduate Papers", href: "/about/undergraduate-papers" },
              ].map((item) => {
                const isActive = item.href === "/about/data-portfolio";
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block py-2 text-sm transition-colors border-b border-transparent ${
                      isActive 
                        ? "text-[var(--foreground)] font-medium" 
                        : "text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:border-[var(--border)]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </aside>

          {/* Main Content */}
          <div className="space-y-10">
            {/* Filter */}
            <div className="border border-[var(--border)] p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedTag(null)}
                  className={`px-3 py-1.5 text-xs font-medium tracking-widest uppercase border border-[var(--border)] transition-colors ${selectedTag === null ? "bg-[var(--foreground)] text-[var(--background)]" : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"}`}
                >
                  All
                </button>
                {tags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`px-3 py-1.5 text-xs font-medium tracking-widest uppercase border border-[var(--border)] transition-colors ${selectedTag === tag ? "bg-[var(--foreground)] text-[var(--background)]" : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"}`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
              <p className="text-xs font-medium tracking-widest text-[var(--muted-foreground)] uppercase">
                {filtered.length} project{filtered.length !== 1 ? "s" : ""}
              </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-6">
              {filtered.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
