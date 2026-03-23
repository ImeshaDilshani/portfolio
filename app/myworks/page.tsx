import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    label: "Data & Analytics",
    title: "Production Data Updater",
    desc: "Built with Node.js and Express.js at Atlas Axillia to fix reporting accuracy across manufacturing operations. Integrated with SAP and exported to Excel for Power BI dashboards.",
    tags: ["Node.js", "Express", "SAP", "Power BI"],
    img: "/PL1.webp",
    href: "/about/work-experience",
  },
  {
    label: "Research & AI",
    title: "Sinhala & Tamil NLP Research",
    desc: "Undergraduate research on AI solutions for Sinhala and Tamil language communication in Sri Lanka, bridging local language barriers with modern NLP techniques.",
    tags: ["Python", "NLP", "AI", "Research"],
    img: "/CW1.webp",
    href: "/about/ai-research",
  },
  {
    label: "Community & Writing",
    title: "Community Contributions",
    desc: "Active contributor to the tech community through knowledge sharing, mentoring, tech talks, and open-source participation.",
    tags: ["Community", "Mentoring", "Talks"],
    img: "/J1.webp",
    href: "/myworks/community",
  },
];

export default function MyWorksPage() {
  return (
    <main>
      {/* Header */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-10">
            <p className="text-xs font-medium tracking-widest uppercase text-[var(--muted-foreground)] pt-1">
              My Works
            </p>
            <div className="space-y-4 max-w-2xl">
              <h1 className="text-4xl md:text-5xl text-[var(--foreground)]">Selected Projects</h1>
              <p className="text-[var(--muted-foreground)] leading-relaxed">
                A collection of projects spanning data engineering, AI research, software development, and community work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project list */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16">
        <div className="space-y-0 border border-[var(--border)]">
          {projects.map((project, i) => (
            <div
              key={i}
              className="grid grid-cols-1 md:grid-cols-2 border-b border-[var(--border)] last:border-b-0 group"
            >
              {/* Image */}
              <div className={`relative aspect-[4/3] overflow-hidden bg-[var(--muted)] ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                  loading="lazy"
                />
              </div>

              {/* Info */}
              <div className={`p-8 md:p-12 flex flex-col justify-between border-t md:border-t-0 border-[var(--border)] ${i % 2 === 1 ? "md:order-1 md:border-r" : "md:border-l"}`}>
                <div className="space-y-4">
                  <span className="text-xs font-medium tracking-widest uppercase text-[var(--muted-foreground)]">
                    {project.label}
                  </span>
                  <h2 className="text-2xl md:text-3xl text-[var(--foreground)]">{project.title}</h2>
                  <p className="text-sm text-[var(--muted-foreground)] leading-relaxed max-w-sm">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
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
                <Link
                  href={project.href}
                  className="inline-flex items-center gap-1 mt-8 text-sm font-medium text-[var(--foreground)] hover:opacity-60 transition-opacity"
                >
                  View details ↗
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Nav to sub-sections */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-0 border border-[var(--border)]">
          {[
            { label: "Community Work", href: "/myworks/community" },
            { label: "Tech Stack", href: "/myworks/techstack" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-6 py-5 border-b sm:border-b-0 sm:border-r border-[var(--border)] last:border-0 text-sm font-medium text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)] transition-colors flex items-center justify-between"
            >
              {item.label}
              <span>↗</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
