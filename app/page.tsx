import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main>
      {/* ── HERO ────────────────────────────────────────── */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28 lg:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-16 items-start">
            {/* Left */}
            <div className="space-y-8">
              <p className="text-xs font-medium tracking-widest uppercase text-[var(--muted-foreground)]">
                Software &amp; Data Engineer · Sri Lanka
              </p>

              <h1 className="text-4xl sm:text-5xl md:text-6xl leading-[1.1] text-[var(--foreground)]">
                Building intelligent software and data systems that solve real-world problems.
              </h1>

              <p className="max-w-xl text-[var(--muted-foreground)] leading-relaxed text-base">
                I work at the intersection of software engineering, data science, and product—creating clean, intelligent tools without the extra fluff. Currently an Associate Software Engineer at{" "}
                <a href="https://sterlingbpo.com/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 text-[var(--foreground)]">Sterling BPO</a>{" "}
                and Associate Software &amp; Data Engineer at{" "}
                <a href="https://www.wirity.com/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 text-[var(--foreground)]">Wirity Labs</a>.
              </p>

              {/* Role tags */}
              <div className="flex flex-wrap gap-2">
                {["Data Scientist", "Data Engineer", "Software Engineer", "Product Builder"].map((role) => (
                  <span
                    key={role}
                    className="px-3 py-1 text-xs font-medium tracking-wide border border-[var(--border)] text-[var(--muted-foreground)]"
                  >
                    {role}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--foreground)] text-[var(--primary-foreground)] text-sm font-medium tracking-wide uppercase transition-opacity hover:opacity-80"
                >
                  Let's Talk →
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--border)] text-[var(--foreground)] text-sm font-medium tracking-wide uppercase transition-colors hover:bg-[var(--muted)]"
                >
                  About Me
                </Link>
              </div>
            </div>

            {/* Right – Photo */}
            <div className="hidden lg:block">
              <Image
                src="/imesha.webp"
                alt="Imesha Dilshani"
                width={320}
                height={420}
                className="w-full h-auto object-cover grayscale"
                priority
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT I DO ───────────────────────────────────── */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
          <p className="text-xs font-medium tracking-widest uppercase text-[var(--muted-foreground)] mb-10">
            What I Do
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-[var(--border)]">
            {[
              {
                title: "Data Engineering",
                desc: "Building robust pipelines, ETL workflows and data infrastructure that scale.",
              },
              {
                title: "Data Science & AI",
                desc: "NLP research, predictive modelling and ML systems grounded in real data.",
              },
              {
                title: "Full-Stack Dev",
                desc: "End-to-end web and mobile applications with clean architecture.",
              },
              {
                title: "Process Automation",
                desc: "Scripting, API integrations and cloud tooling to eliminate repetitive work.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 border-b sm:border-b-0 sm:border-r border-[var(--border)] last:border-0 space-y-3"
              >
                <span className="text-xs font-medium tracking-widest text-[var(--muted-foreground)] uppercase">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="text-base font-semibold text-[var(--foreground)]">{item.title}</h3>
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT (BRIEF) ───────────────────────────────── */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-10">
            <p className="text-xs font-medium tracking-widest uppercase text-[var(--muted-foreground)] pt-1">
              Background
            </p>
            <div className="space-y-6 max-w-2xl">
              <p className="text-[var(--foreground)] leading-relaxed">
                BSc (Hons) Computer Science specialising in <strong>Data Science</strong> — University of Kelaniya, 2025. My research focused on AI solutions for Sinhala and Tamil language communication in Sri Lanka.
              </p>
              <p className="text-[var(--muted-foreground)] leading-relaxed text-sm">
                Previously a Production Data Analyst Intern at Atlas Axillia, where I built Power BI dashboards, production data tools with Node.js, and worked with SAP BEx Analyzer. I also freelance on Freelancer.com and shoot stock photography for Adobe Stock and Shutterstock.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-1 text-sm font-medium text-[var(--foreground)] underline underline-offset-4 hover:opacity-70 transition-opacity"
              >
                Read full story →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SELECTED WORK ───────────────────────────────── */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
          <p className="text-xs font-medium tracking-widest uppercase text-[var(--muted-foreground)] mb-12">
            Selected Work
          </p>

          <div className="space-y-0 border border-[var(--border)]">
            {[
              {
                label: "Community",
                title: "Community Work & Collaboration",
                desc: "Continuous learning and knowledge sharing within the tech community through talks, mentoring and open collaboration.",
                tags: ["Community", "Mentoring", "Tech"],
                href: "/myworks/community",
                img: "/CW1.webp",
              },
              {
                label: "Tech",
                title: "Tech Stack & Tools",
                desc: "A comprehensive overview of the technologies, frameworks and tools powering my projects — from data pipelines to mobile apps.",
                tags: ["Python", "Next.js", "React Native", "Power BI"],
                href: "/myworks/techstack",
                img: "/PL1.webp",
              },
              {
                label: "Writing",
                title: "Journalism & Blog",
                desc: "Articles on data science, machine learning, and lessons from life — making complex ideas accessible to everyone.",
                tags: ["Data Science", "ML", "Writing"],
                href: "/writes",
                img: "/J1.webp",
              },
            ].map((work, i) => (
              <div
                key={i}
                className="grid grid-cols-1 md:grid-cols-2 border-b border-[var(--border)] last:border-b-0 group"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[var(--muted)]">
                  <Image
                    src={work.img}
                    alt={work.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>

                {/* Info */}
                <div className="p-8 md:p-12 flex flex-col justify-between border-t md:border-t-0 md:border-l border-[var(--border)]">
                  <div className="space-y-4">
                    <span className="text-xs font-medium tracking-widest uppercase text-[var(--muted-foreground)]">
                      {work.label}
                    </span>
                    <h2 className="text-2xl md:text-3xl text-[var(--foreground)]">{work.title}</h2>
                    <p className="text-sm text-[var(--muted-foreground)] leading-relaxed max-w-sm">
                      {work.desc}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {work.tags.map((tag) => (
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
                    href={work.href}
                    className="inline-flex items-center gap-1 mt-8 text-sm font-medium text-[var(--foreground)] hover:opacity-60 transition-opacity"
                  >
                    View work ↗
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONNECT ─────────────────────────────────────── */}
      <section>
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-10">
            <p className="text-xs font-medium tracking-widest uppercase text-[var(--muted-foreground)] pt-1">
              Connect
            </p>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl text-[var(--foreground)] max-w-lg">
                Open to projects, collaborations and good conversations.
              </h2>
              <div className="flex flex-wrap gap-6 text-sm">
                <a href="https://www.linkedin.com/in/imesha-dilshani-61862422b" target="_blank" rel="noopener noreferrer" className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors underline underline-offset-2">LinkedIn ↗</a>
                <a href="https://github.com/ImeshaDilshani" target="_blank" rel="noopener noreferrer" className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors underline underline-offset-2">GitHub ↗</a>
                <a href="https://x.com/ImeshaDilshani3" target="_blank" rel="noopener noreferrer" className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors underline underline-offset-2">Twitter ↗</a>
                <Link href="/contact" className="text-[var(--foreground)] hover:opacity-70 transition-opacity underline underline-offset-2">Send a message →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
