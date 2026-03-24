"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { codeProjects } from "@/lib/projects";

export default function CodingPortfolioPage() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const tags = useMemo(() => Array.from(new Set(codeProjects.flatMap((p) => p.tags || []))).sort(), []);
  const filtered = selectedTag ? codeProjects.filter((p) => p.tags?.includes(selectedTag)) : codeProjects;

  return (
    <main>
      {/* ── HEADER ──────────────────────────────────────── */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-10">
            <p className="text-xs font-medium tracking-widest uppercase text-[var(--muted-foreground)] pt-1">
              Coding Portfolio
            </p>
            <div className="space-y-4 max-w-2xl">
              <h1 className="text-4xl md:text-5xl text-[var(--foreground)]">Software Engineering</h1>
              <p className="text-[var(--muted-foreground)] leading-relaxed">
                Building solutions with modern frameworks, clean code practices, and user-centered design. Most projects are open-source.
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
                const isActive = item.href === "/about/coding-portfolio";
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

          {/* Main Content Area */}
          <div className="space-y-10">
            {/* Filter */}
            <div className="border border-[var(--border)] p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedTag(null)}
                  className={`px-3 py-1.5 text-[10px] font-bold tracking-[0.2em] uppercase border border-[var(--border)] transition-colors ${selectedTag === null ? "bg-[var(--foreground)] text-[var(--background)]" : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"}`}
                >
                  ALL
                </button>
                {tags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`px-3 py-1.5 text-[10px] font-bold tracking-[0.2em] uppercase border border-[var(--border)] transition-colors ${selectedTag === tag ? "bg-[var(--foreground)] text-[var(--background)]" : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"}`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
              <p className="text-[10px] font-bold tracking-[0.2em] text-[var(--muted-foreground)] uppercase">
                {filtered.length} PROJECT{filtered.length !== 1 ? "S" : ""}
              </p>
            </div>

            {/* List */}
            <div className="space-y-0 border border-[var(--border)]">
              {filtered.map((project, i) => (
                <div key={project.id} className="grid grid-cols-1 md:grid-cols-[200px_1fr] border-b border-[var(--border)] last:border-0 group bg-[var(--card)] hover:bg-[var(--muted)] transition-colors">
                  <div className="relative h-48 md:h-full w-full border-b md:border-b-0 md:border-r border-[var(--border)] bg-[var(--muted)] overflow-hidden">
                    {project.image ? (
                      <Image src={project.image} alt={project.title} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-[10px] uppercase tracking-widest text-[var(--muted-foreground)]">No Image</div>
                    )}
                  </div>
                  <div className="p-6 md:p-10 flex flex-col justify-between">
                    <div className="space-y-4">
                      <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--muted-foreground)]">Software Engineering • {project.tags?.[0]}</p>
                      <h2 className="text-2xl md:text-3xl font-medium text-[var(--foreground)] leading-tight">{project.title}</h2>
                      <p className="text-sm text-[var(--muted-foreground)] leading-relaxed max-w-2xl">{project.description}</p>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.tags?.map(tag => (
                          <span key={tag} className="text-[10px] tracking-widest text-[var(--muted-foreground)] uppercase border border-[var(--border)] px-1.5 py-0.5">{tag}</span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-12 pt-6 border-t border-[var(--border)] flex gap-6">
                      {project.links?.map(l => (
                        <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--foreground)] hover:opacity-70 flex items-center gap-1 w-fit">
                          {l.label.toUpperCase()} ↗
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
