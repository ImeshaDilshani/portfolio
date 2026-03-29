import Image from "next/image";
import Link from "next/link";

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
          </div>
        </div>
      </div>
    </main>
  );
}
