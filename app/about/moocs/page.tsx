"use client";

import Link from "next/link";
import Image from "next/image";

const courses = [
  {
    title: "Introduction to Data Science",
    platform: "CISCO NETACAD",
    desc: "Provides a comprehensive introduction to data science fundamentals, covering data analysis techniques, visualization, and basic statistical concepts essential for working with data.",
    img: "/cisco-ds.webp",
    link: "https://www.netacad.com/courses/introduction-data-science?courseLang=en-US"
  },
  {
    title: "Stanford Lagunita Learning Platform",
    platform: "STANFORD ONLINE",
    desc: "Stanford's Lagunita platform offers free online courses from Stanford faculty across various subjects including computer science, algorithms, machine learning, and more. These courses provide university-level education with high-quality content.",
    img: "/stanford-online.webp",
    link: "https://online.stanford.edu/lagunita-learning-platform"
  },
  {
    title: "Extract, Transform and Load Data in Power BI",
    platform: "LINKEDIN LEARNING",
    desc: "Teaches essential ETL (Extract, Transform, Load) processes in Power BI, covering data preparation, transformation techniques, and best practices for creating efficient and professional business intelligence solutions.",
    img: "/linkdin-learn.webp",
    link: "https://www.linkedin.com/learning/"
  },
  {
    title: "Java Programming",
    platform: "COURSERA",
    desc: "A comprehensive Java programming course covering object-oriented programming principles, data structures, algorithms, and software development best practices. Perfect for building strong foundation in Java development.",
    img: "/coursera.webp",
    link: "https://www.coursera.org/"
  },
  {
    title: "Forage Virtual Experience Programs",
    platform: "FORAGE",
    desc: "Forage offers free virtual work experience programs from leading companies, allowing you to build practical skills through real-world job simulations in software engineering, data analytics, consulting, and more.",
    img: "/forge.webp",
    link: "https://www.theforage.com/"
  }
];

export default function MOOCsPage() {
  return (
    <main>
      {/* ── HEADER ──────────────────────────────────────── */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-10">
            <p className="text-xs font-medium tracking-widest uppercase text-[var(--muted-foreground)] pt-1">
              MOOCs
            </p>
            <div className="space-y-4 max-w-2xl">
              <h1 className="text-4xl md:text-5xl text-[var(--foreground)]">Online Learning</h1>
              <p className="text-[var(--muted-foreground)] leading-relaxed">
                Continuous learning through online courses, certifications, and specialized programs. I believe education is an ongoing journey that integrates seamlessly with daily and professional life.
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
                { label: "About", href: "/about" },
                { label: "Work Experience", href: "/about/work-experience" },
                { label: "My Research", href: "/about/ai-research" },
                { label: "Presentations", href: "/about/presentations" },
                { label: "Data Portfolio", href: "/about/data-portfolio" },
                { label: "Coding Portfolio", href: "/about/coding-portfolio" },
                { label: "MOOCs", href: "/about/moocs" },
                { label: "Undergraduate Papers", href: "/about/undergraduate-papers" },
              ].map((item) => {
                const isActive = item.href === "/about/moocs";
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
          <div className="space-y-0 border border-[var(--border)]">
            {courses.map((course, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-[200px_1fr] border-b border-[var(--border)] last:border-0 group bg-[var(--card)] hover:bg-[var(--muted)] transition-colors">
                <div className="relative h-48 md:h-full w-full border-b md:border-b-0 md:border-r border-[var(--border)] bg-[var(--muted)] overflow-hidden">
                  <Image src={course.img} alt={course.title} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <div className="p-6 md:p-10 flex flex-col justify-between">
                  <div className="space-y-4">
                    <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--muted-foreground)]">{course.platform}</p>
                    <h2 className="text-2xl md:text-3xl font-medium text-[var(--foreground)] leading-tight">{course.title}</h2>
                    <p className="text-sm text-[var(--muted-foreground)] leading-relaxed max-w-2xl">{course.desc}</p>
                  </div>
                  <div className="mt-12 pt-6 border-t border-[var(--border)]">
                    <a href={course.link} target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--foreground)] hover:opacity-70 flex items-center gap-1 w-fit">
                      VIEW COURSE ↗
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
