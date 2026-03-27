import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    label: "DATA ENGINEERING",
    title: "Data Portfolio",
    desc: "Building robust pipelines, ETL workflows, and intelligent data systems that transform raw information into strategic assets.",
    tags: ["Data Engineering", "AI", "ETL", "Analytics"],
    img: "/data-1.webp",
    href: "/myworks/data-portfolio",
  },
  {
    label: "SOFTWARE ENGINEERING",
    title: "Coding Portfolio",
    desc: "A gallery of full-stack applications and experimental tools built with clean architecture and performant code.",
    tags: ["Full Stack", "TypeScript", "Architecture", "Mobile"],
    img: "/about-bg.webp",
    href: "/myworks/coding-portfolio",
  }
];

export default function MyWorksPage() {
  return (
    <main className="min-h-screen bg-[var(--background)]">

      {/* Header */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-10">
            <p className="text-xs font-medium tracking-widest uppercase text-[var(--muted-foreground)] pt-1">
              Work
            </p>
            <div className="space-y-4 max-w-2xl">
              <h1 className="text-4xl md:text-5xl text-[var(--foreground)]">
                Two Worlds, <span className="text-[var(--muted-foreground)]">Integrated.</span>
              </h1>
              <p className="text-[var(--muted-foreground)] leading-relaxed text-base">
                My work exists at the intersection of data-driven intelligence and robust software engineering. Explore the specific portfolios below.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── GATEWAY (Creative Lab Style) ────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-[var(--border)] overflow-hidden">
          {projects.map((project, i) => (
            <Link
              key={i}
              href={project.href}
              className="group border-r border-b border-[var(--border)] bg-[var(--card)] hover:bg-[var(--muted)]/50 transition-colors p-8 md:p-12 flex flex-col space-y-8"
            >
              {/* Boxed Visual */}
              <div className="relative aspect-[4/3] overflow-hidden border border-[var(--border)] bg-[var(--muted)]">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Info */}
              <div className="space-y-4 flex-1">
                <span className="text-xs font-medium tracking-widest uppercase text-[var(--muted-foreground)]">
                  {project.label}
                </span>
                <div className="flex items-start justify-between">
                  <h2 className="text-3xl md:text-4xl text-[var(--foreground)] leading-tight">{project.title}</h2>
                  <span className="text-xl text-[var(--muted-foreground)] group-hover:text-[var(--foreground)] transition-colors">↗</span>
                </div>
                <p className="text-[var(--muted-foreground)] leading-relaxed max-w-sm">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 text-[10px] font-medium tracking-widest uppercase border border-[var(--border)] text-[var(--muted-foreground)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── EXPLORATIONS ─────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-20 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-10">
          <p className="text-xs font-medium tracking-widest uppercase text-[var(--muted-foreground)] pt-1">
            Explorations
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border-t border-l border-[var(--border)]">
            {[
              {
                title: "Community Work",
                desc: "Mentoring, leadership and giving back to the tech ecosystem.",
                href: "/myworks/community"
              },
              {
                title: "Tech Stack",
                desc: "The languages and frameworks driving my current projects.",
                href: "/myworks/techstack"
              }
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group p-8 border-r border-b border-[var(--border)] bg-[var(--card)] hover:bg-[var(--muted)]/50 transition-colors"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl text-[var(--foreground)]">{item.title}</h3>
                  <span className="text-[var(--muted-foreground)] group-hover:text-[var(--foreground)] transition-colors">↗</span>
                </div>
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                  {item.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
