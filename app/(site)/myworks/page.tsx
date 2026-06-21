import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    label: "FULL STACK WEB",
    title: "everytuesdays.com",
    desc: "A modern full-stack blogging platform. Features Sanity CMS integration, advanced SEO structured data, and lazy loading achieving top-tier Lighthouse metrics (100% SEO & Best Practices).",
    tags: ["React", "TypeScript", "Sanity CMS", "Tailwind CSS"],
    img: "/about-bg.webp",
    href: "https://everytuesdays.com",
  },
  {
    label: "MOBILE & BACKEND",
    title: "Miro Learning Platform",
    desc: "A cross-platform React Native MVP for learning spoken Tamil. Includes a secure Laravel admin panel for real-time lesson streaming and structured testing pipelines.",
    tags: ["React Native", "Laravel", "PHP", "MySQL", "Jest"],
    img: "/data-1.webp",
    href: "#",
  },
  {
    label: "AI INTEGRATION",
    title: "Orbit Engine",
    desc: "Transform any content into a viral distribution machine. Synthesize videos into SEO blogs, turn articles into viral shorts, and generate designer-grade flyers with captions in one click.",
    tags: ["AI", "Content Repurposing", "Full Stack", "Automation"],
    img: "/imesha.webp",
    href: "https://orbit.everytuesdays.com/",
  },
  {
    label: "BUSINESS PLATFORM",
    title: "VeloLanka Car Rental",
    desc: "A premium car rental and booking platform in Sri Lanka. Features transparent pricing, a diverse vehicle fleet, and dedicated client care for self-drive, corporate hire, and airport transfers.",
    tags: ["Web Development", "Booking System", "Business Platform"],
    img: "/about-bg.webp",
    href: "https://velolankarentals.com/",
  }
];

export default function MyWorksPage() {
  return (
    <main className="min-h-screen bg-[var(--background)]">

      {/* Header */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex px-3 py-1 bg-[var(--foreground)] text-[var(--background)] text-xs font-bold tracking-widest uppercase mb-4">
              Project Showcase
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-[var(--foreground)] font-light tracking-tight">
              Selected Work.
            </h1>
            <p className="text-lg md:text-xl text-[var(--muted-foreground)] leading-relaxed">
              A curated gallery of applications, data pipelines, and intelligent systems I've built to help businesses scale and operate efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* ── PROJECT LIST ────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="flex flex-col border-t border-[var(--border)]">
          {projects.map((project, i) => (
            <Link
              key={i}
              href={project.href}
              className="group grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 md:gap-12 py-10 md:py-12 border-b border-[var(--border)] hover:bg-[var(--muted)]/10 transition-colors"
            >
              {/* Boxed Visual (Compact) */}
              <div className="relative w-full aspect-video md:aspect-[4/3] overflow-hidden border border-[var(--border)] bg-[var(--muted)]/20 p-1.5 md:p-2 self-start">
                <div className="relative w-full h-full border border-[var(--border)] bg-[var(--background)] overflow-hidden">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105"
                  />
                </div>
              </div>

              {/* Info */}
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-1.5 w-1.5 rounded-full bg-[var(--foreground)]"></span>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-[var(--muted-foreground)]">
                    {project.label}
                  </span>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="space-y-3 max-w-2xl">
                    <h2 className="text-2xl md:text-3xl text-[var(--foreground)] font-medium leading-tight group-hover:underline underline-offset-4 decoration-[var(--border)]">
                      {project.title}
                    </h2>
                    <p className="text-[var(--muted-foreground)] text-sm md:text-base leading-relaxed">
                      {project.desc}
                    </p>
                  </div>
                  <span className="hidden sm:block text-xl text-[var(--muted-foreground)] group-hover:text-[var(--foreground)] transition-colors transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
                </div>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[11px] font-medium tracking-wide border border-[var(--border)] text-[var(--foreground)] bg-[var(--background)] group-hover:bg-[var(--muted)]/50 transition-colors"
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

      {/* ── CALL TO ACTION ─────────────────────────────────── */}
      <section className="border-t border-[var(--border)] bg-[var(--foreground)] text-[var(--background)]">
        <div className="max-w-4xl mx-auto px-6 md:px-10 py-24 text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight">
            Have a project in mind?
          </h2>
          <p className="text-[var(--muted)] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Let's build something exceptional together.
          </p>
          <div className="pt-4">
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
