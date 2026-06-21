import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    label: "TECH",
    title: "Tech Stack & Tools",
    desc: "Every project starts with the right tools. Here's a look at the languages, frameworks, and platforms I use to build things that actually work.",
    tags: ["Full Stack Engineering", "Data Engineering", "Data Science", "Mobile Dev", "AI"],
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

export default function AboutPage() {
  return (
    <main>
      {/* ── HEADER ──────────────────────────────────────── */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-10">
            <p className="text-xs font-medium tracking-widest uppercase text-[var(--muted-foreground)] pt-1">
              About
            </p>
            <div className="space-y-4 max-w-2xl">
              <h1 className="text-4xl md:text-5xl text-[var(--foreground)]">Here's How I Grow</h1>
              <p className="text-[var(--muted-foreground)] leading-relaxed">
                My journey through professional experience, research, continuous education, and a passion for building things that matter.
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
                { label: "Work Experience", href: "/about/work-experience" },
                { label: "My Research", href: "/about/ai-research" },
                { label: "Presentations", href: "/about/presentations" },
                { label: "MOOCs", href: "/about/moocs" },
                { label: "Undergraduate Papers", href: "/about/undergraduate-papers" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-2 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors border-b border-transparent hover:border-[var(--border)]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <div className="space-y-20">

            {/* Introduction */}
            <section className="space-y-6">
              <h2 className="text-2xl text-[var(--foreground)] border-b border-[var(--border)] pb-4">Introduction</h2>
              <div className="space-y-3 text-[var(--muted-foreground)] leading-relaxed">
                <p>I am passionate about <strong className="text-[var(--foreground)]">data science</strong> and <strong className="text-[var(--foreground)]">AI-based software development</strong>.</p>
                <p>I am very curious and enjoy meeting people with different interests.</p>
                <p>I love to travel and explore new places.</p>
                <p>I enjoy reading books to learn new things.</p>
                <p className="pt-2">Over the past few years, I have built strong skills to prepare for a career in the <strong className="text-[var(--foreground)]">tech industry</strong>. I have gained practical experience in software development, data science, digital product management, and technical writing.</p>
              </div>
            </section>

            {/* Education Timeline */}
            <section className="space-y-6">
              <h2 className="text-2xl text-[var(--foreground)] border-b border-[var(--border)] pb-4">Education</h2>
              <div className="space-y-12">
                {[
                  {
                    name: "University of Kelaniya",
                    period: "BSc (Hons) Computer Science, specializing in Data Science · 2022–2025",
                    body: "Gained strong theoretical knowledge and practical skills in programming, data analysis, machine learning, and AI-driven software development. Research focused on AI solutions for Sinhala and Tamil language communication in Sri Lanka.",
                    img: "/about/kelaniya.webp",
                  },
                  {
                    name: "InTech College, Gampaha",
                    period: "Graphic Design & Advertising · 2020–2021",
                    body: "Solid foundation in design principles, visual communication, and creative thinking — skills that carry into every product and interface I build today.",
                    img: "/about/intech.webp",
                  },
                  {
                    name: "President's College, Minuwangoda",
                    period: "Advanced Level — Mathematics Stream · 2016–2019",
                    body: "Mathematics, Physics, Chemistry. Built strong analytical and problem-solving foundations that underpin everything data-related I do.",
                    img: "/about/president.webp",
                  },
                  {
                    name: "Seelavimala Maha Vidyalaya",
                    period: "Ordinary Level · Grade 6–11 · 2010–2015",
                    body: "Achieved excellent results in O/L exams. A turning point that shaped discipline and academic ambition.",
                    img: "/about/seelavimala-2.webp",
                  },
                  {
                    name: "Arangawa Sri Dhammarama Primary College",
                    period: "Grade 1–5 · 2004–2009",
                    body: "Grew up in a small village. Early years taught the value of curiosity, hard work, and learning from the world around me.",
                    img: "/about/arangawa.webp",
                  },
                ].map((edu) => (
                  <div key={edu.name} className="grid grid-cols-1 md:grid-cols-2 gap-8 border border-[var(--border)] group">
                    <div className="relative aspect-[4/3] overflow-hidden bg-[var(--muted)]">
                      <Image
                        src={edu.img}
                        alt={edu.name}
                        fill
                        className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6 md:p-8 flex flex-col justify-center space-y-3">
                      <p className="text-xs font-medium tracking-widest uppercase text-[var(--muted-foreground)]">{edu.period}</p>
                      <h3 className="text-xl text-[var(--foreground)]">{edu.name}</h3>
                      <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">{edu.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* MY CANVAS */}
            <section className="space-y-6">
              <h2 className="text-2xl text-[var(--foreground)] border-b border-[var(--border)] pb-4">My Canvas</h2>
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
          </div>
        </div>
      </div>
    </main>
  );
}
