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
              <p className="text-xs font-medium tracking-widest uppercase text-[var(--muted-foreground)] mb-4">Work</p>
              {[
                { label: "Back to Projects", href: "/myworks" },
                { label: "Data Portfolio", href: "/myworks/data-portfolio" },
                { label: "Coding Portfolio", href: "/myworks/coding-portfolio" },
              ].map((item) => {
                const isActive = item.href === "/myworks/coding-portfolio";
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
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-2 border-b border-[var(--border)]">
              <div className="flex flex-wrap gap-x-8 gap-y-4">
                <button
                  onClick={() => setSelectedTag(null)}
                  className={`text-[10px] font-bold tracking-[0.3em] uppercase transition-all relative py-1 ${
                    selectedTag === null 
                      ? "text-[var(--foreground)] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[var(--foreground)]" 
                      : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                  }`}
                >
                  ALL
                </button>
                {tags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`text-[10px] font-bold tracking-[0.3em] uppercase transition-all relative py-1 ${
                      selectedTag === tag 
                        ? "text-[var(--foreground)] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[var(--foreground)]" 
                        : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
              <p className="text-[9px] font-medium tracking-[0.2em] text-[var(--muted-foreground)] uppercase">
                {filtered.length} / {codeProjects.length} PROJECTS
              </p>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {filtered.map((project, idx) => (
                <div 
                  key={project.id} 
                  className="group relative flex flex-col space-y-4 border border-[var(--border)] p-4 bg-[var(--card)] hover:border-[var(--foreground)] transition-all duration-500"
                >
                  {/* Image Container */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[var(--muted)] border border-[var(--border)] group-hover:border-[var(--foreground)] transition-colors duration-500">
                    {project.image ? (
                      <Image 
                        src={project.image} 
                        alt={project.title} 
                        fill 
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out" 
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-[10px] uppercase tracking-widest text-[var(--muted-foreground)]">
                        No Preview Available
                      </div>
                    )}
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center gap-4 p-6 text-center">
                      <p className="text-white text-[10px] font-bold tracking-[0.3em] uppercase mb-2">View Project</p>
                      <div className="flex flex-wrap justify-center gap-3">
                        {project.links?.map(l => (
                          <a 
                            key={l.href} 
                            href={l.href} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="bg-white text-black text-[9px] font-bold tracking-widest uppercase px-5 py-2 hover:bg-black hover:text-white border border-white transition-all duration-300"
                          >
                            {l.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3 pt-2">
                    <div className="flex justify-between items-center">
                      <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--muted-foreground)]">
                        {project.tags?.[0] || 'Software'}
                      </p>
                      {project.year && (
                        <p className="text-[10px] font-bold tracking-[0.2em] text-[var(--muted-foreground)] opacity-50">
                          {project.year}
                        </p>
                      )}
                    </div>
                    
                    <h2 className="text-xl font-medium text-[var(--foreground)] group-hover:underline underline-offset-4 decoration-1">
                      {project.title}
                    </h2>
                    
                    <p className="text-sm text-[var(--muted-foreground)] leading-relaxed line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tags?.slice(1).map(tag => (
                        <span 
                          key={tag} 
                          className="text-[9px] tracking-widest text-[var(--muted-foreground)] uppercase border border-[var(--border)] px-2 py-0.5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Border Accent */}
                  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[var(--border)] group-hover:bg-[var(--foreground)] transition-colors duration-500" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
