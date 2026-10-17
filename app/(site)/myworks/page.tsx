import { Suspense } from "react";
import Link from "next/link";
import { getProjects } from "@/sanity/lib/queries";
import { getAllFallbackProjects, normalizeSanityProject, ProjectMeta } from "@/lib/projects";
import { ProjectsHubClient } from "./ProjectsHubClient";

export const revalidate = 60; // revalidate every 60 seconds

export const metadata = {
  title: "Projects & Engineering Hub | Imesha Dilshani",
  description:
    "Explore full-stack web and mobile applications, automated data pipelines, and machine learning systems built by Imesha Dilshani.",
};

export default async function MyWorksPage() {
  // Fetch dynamic projects from Sanity
  const sanityProjects = await getProjects();
  const normalizedSanity: ProjectMeta[] = sanityProjects.map(normalizeSanityProject);

  const fallbackProjects = getAllFallbackProjects();

  // Combine: Sanity dynamic projects first, followed by default catalog deduplicated
  const allProjects: ProjectMeta[] = [
    ...normalizedSanity,
    ...fallbackProjects.filter(
      (fb) => !normalizedSanity.some((sp) => sp.title.toLowerCase().trim() === fb.title.toLowerCase().trim())
    ),
  ];

  return (
    <main className="min-h-screen bg-[var(--background)]">
      {/* ── HEADER ──────────────────────────────────────── */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex px-2.5 py-0.5 bg-[var(--foreground)] text-[var(--background)] text-[11px] font-bold tracking-widest uppercase mb-1">
              Engineering & Data Hub
            </div>
            <h1 className="text-3xl md:text-5xl text-[var(--foreground)] font-light tracking-tight">
              Selected Work.
            </h1>
            <p className="text-base md:text-lg text-[var(--muted-foreground)] leading-relaxed">
              A unified gallery of commercial web and mobile platforms, data engineering pipelines, and intelligent machine learning systems.
            </p>
          </div>
        </div>
      </section>

      {/* ── UNIFIED PROJECTS HUB ─────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-8 md:py-12">
        <Suspense
          fallback={
            <div className="p-16 text-center text-xs font-mono uppercase tracking-widest text-[var(--muted-foreground)]">
              Loading projects showcase...
            </div>
          }
        >
          <ProjectsHubClient initialProjects={allProjects} />
        </Suspense>
      </section>

      {/* ── CALL TO ACTION ─────────────────────────────────── */}
      <section className="border-t border-[var(--border)] bg-[var(--foreground)] text-[var(--background)]">
        <div className="max-w-4xl mx-auto px-6 md:px-10 py-20 text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight">
            Have a project in mind?
          </h2>
          <p className="text-[var(--muted)] text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            From architecture to production deployment: let's build something scalable and impactful together.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--background)] text-[var(--foreground)] text-sm font-bold tracking-widest uppercase transition-transform hover:-translate-y-1"
            >
              Start a Conversation ↗
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
