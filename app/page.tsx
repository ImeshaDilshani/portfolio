import Link from "next/link";
import Image from "next/image";


const projects = [
  {
    label: "TECH",
    title: "Tech Stack & Tools",
    desc: "Every project starts with the right tools. Here's a look at the languages, frameworks, and platforms I use to build things that actually work.",
    tags: ["Full Stack Engineering", "Data Engineering", "Data Science", "Mobile Dev","AI"],
    img: "/PL1.webp",
    href: "/myworks/techstack/",
  },
  {
    label: "COMMUNITY",
    title: "Community Work & Collaboration",
    desc: "Learning means nothing if it stays with you. I share what I know, support who I can, and stay active in spaces where tech people grow together.",
    tags: ["Community", "Mentoring", "Tech"],
    img: "/CW1.webp",
    href: "/myworks/community",
  },
  {
    label: "JOURNALISM",
    title: "Journalism & Blog",
    desc: "Writing is how I think out loud. I cover data science, machine learning, and life lessons — keeping it simple, honest, and worth your time.",
    tags: ["Writing", "Blogging", "AI"],
    img: "/J1.webp",
    href: "/writes/",
  },
];

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
                Every project is an opportunity to evolve. I’m a developer who actually enjoys the
                "messy" parts of tech, like untangling complex data or building systems that need
                to scale. I spend my time at the intersection of software engineering and data
                science, creating clean, intelligent tools that solve real-world problems without the extra fluff.
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

            <div className="space-y-10 max-w-2xl">

              {/* Work */}
              <div className="space-y-3">
                <p className="text-[var(--foreground)] leading-relaxed">
                  Right now I'm an <strong>Associate Software Engineer</strong> at
                  <a href="https://sterlingbpo.com.au/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 hover:opacity-70 transition-opacity"
                  > Sterling BPO Solution
                  </a>,
                  working on software and mobile app development. Alongside that, I do part-time work as an <strong>Associate Data & Software Engineer</strong> at
                  <a href="https://www.wirity.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 hover:opacity-70 transition-opacity"
                  > Wirity Labs</a> — covering software, data engineering, and mobile apps.
                </p>
                <p className="text-[var(--muted-foreground)] leading-relaxed text-sm">
                  Before this, I interned at Atlas Axillia as a Production Data Analyst and graduated with a <strong>BSc (Hons) in Computer Science</strong>, specialising in Data Science, from the University of Kelaniya in 2025. I'm Slowly pulling back from social media to make more room for real things.</p>
              </div>
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

      <section className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16">
        <p className="text-xs font-medium tracking-widest uppercase text-[var(--muted-foreground)] mb-12">
          MY CANVAS
        </p>
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
