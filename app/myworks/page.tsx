import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    label: "DATA ENGINEERING",
    title: "Data Portfolio",
    desc: "Building robust pipelines, ETL workflows, and intelligent data systems that transform raw information into strategic assets.",
    tags: ["Data Engineering", "AI", "ETL", "Analytics"],
    img: "/PL1.webp",
    href: "/about/data-portfolio",
  },
  {
    label: "SOFTWARE ENGINEERING",
    title: "Coding Portfolio",
    desc: "A gallery of full-stack applications and experimental tools built with clean architecture and performant code.",
    tags: ["Full Stack", "TypeScript", "Architecture", "Mobile"],
    img: "/CW1.webp",
    href: "/about/coding-portfolio",
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
              <p className="text-[var(--muted-foreground)] leading-relaxed">
               My work exists at the intersection of data-driven intelligence and robust software engineering. Explore the specific portfolios below.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── GATEWAY ────────────────────────────────────────── */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-[var(--border)] group">
            {projects.map((project, i) => (
              <Link
                key={i}
                href={project.href}
                className={`relative group/item overflow-hidden flex flex-col ${i === 0 ? "border-b md:border-b-0 md:border-r" : ""} border-[var(--border)]`}
              >
                {/* Visual */}
                <div className="relative aspect-[16/9] md:aspect-[4/3] overflow-hidden bg-[var(--muted)]">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover grayscale transition-all duration-700 group-hover/item:grayscale-0 group-hover/item:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/5 opacity-40 group-hover/item:opacity-0 transition-opacity" />
                </div>

                {/* Info */}
                <div className="p-8 md:p-12 space-y-4 bg-[var(--background)] transition-colors group-hover/item:bg-[var(--muted)]/30 flex-1">
                  <span className="text-xs font-medium tracking-widest uppercase text-[var(--muted-foreground)]">
                    {project.label}
                  </span>
                  <div className="flex items-end justify-between">
                    <h2 className="text-3xl md:text-4xl text-[var(--foreground)]">{project.title}</h2>
                    <span className="text-2xl transition-transform duration-300 group-hover/item:translate-x-2">↗</span>
                  </div>
                  <p className="text-[var(--muted-foreground)] leading-relaxed max-w-md">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 text-xs border border-[var(--border)] text-[var(--muted-foreground)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPLORATIONS ─────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-10">
          <p className="text-xs font-medium tracking-widest uppercase text-[var(--muted-foreground)] pt-1">
            Explorations
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
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
                className="group p-8 border border-[var(--border)] hover:bg-[var(--muted)]/30 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl text-[var(--foreground)]">{item.title}</h3>
                  <span className="text-[var(--muted-foreground)] group-hover:text-[var(--foreground)] transition-colors">↗</span>
                </div>
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed max-w-xs">
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
