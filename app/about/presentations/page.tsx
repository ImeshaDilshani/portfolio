"use client";

import Link from "next/link";
import Image from "next/image";

const presentations = [
  {
    title: "Text Classification",
    type: "ACADEMIC PRESENTATION",
    img: "/presentation-1.webp",
    link: "https://drive.google.com/file/d/1QUDfTq7X8h0tbaBz9FUOrDf0vcXEGbHs/view?usp=sharing",
    desc: "A comprehensive look at text classification techniques and methodologies used in modern natural language processing applications."
  },
  {
    title: "NoSQL Solutions to Handle Big Data",
    type: "ACADEMIC PRESENTATION",
    img: "/presentation-2.webp",
    link: "https://drive.google.com/file/d/1ADBl8-gjo85Gp7MGZ7Xowr17mO57_hFn/view?usp=sharing",
    desc: "Exploring the landscape of NoSQL databases and their critical role in architecting scalable solutions for high-volume data processing."
  },
  {
    title: "The SAP S/4HANA Transformation",
    type: "ACADEMIC PRESENTATION",
    img: "/PRESENTATION-3.webp",
    link: "https://drive.google.com/file/d/1l8tZvlJgmL3dYumRy87n9jyEDsjHB3he/view?usp=sharing",
    desc: "A deep dive into the digital transformation journey through SAP S/4HANA, focusing on business agility and real-time operational insights."
  },
  {
    title: "Next-gen Real-time Speech Translation",
    type: "RESEARCH FINAL VIVA",
    img: "/presentation-5.webp",
    link: "https://drive.google.com/file/d/1ItWURTqZKqqlg8ZIeyzMTphR_iBKZIHo/view?usp=sharing",
    desc: "Presenting the final research findings on high-performance speech-to-speech translation systems tailored for local linguistic contexts."
  }
];

export default function PresentationsPage() {
  return (
    <main>
      {/* ── HEADER ──────────────────────────────────────── */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-10">
            <p className="text-xs font-medium tracking-widest uppercase text-[var(--muted-foreground)] pt-1">
              Presentations
            </p>
            <div className="space-y-4 max-w-2xl">
              <h1 className="text-4xl md:text-5xl text-[var(--foreground)]">Speaking Engagements</h1>
              <p className="text-[var(--muted-foreground)] leading-relaxed">
                Sharing knowledge through talks and presentations at conferences, universities, and industry events.
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
                const isActive = item.href === "/about/presentations";
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

          {/* Main Content */}
          <div className="space-y-0 border border-[var(--border)]">
            {presentations.map((pres, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-[200px_1fr] border-b border-[var(--border)] last:border-0 group bg-[var(--card)] hover:bg-[var(--muted)] transition-colors">
                <div className="relative h-48 md:h-full w-full border-b md:border-b-0 md:border-r border-[var(--border)] bg-[var(--muted)] overflow-hidden">
                  <Image src={pres.img} alt={pres.title} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <div className="p-6 md:p-10 flex flex-col justify-between">
                  <div className="space-y-4">
                    <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--muted-foreground)]">{pres.type}</p>
                    <h2 className="text-2xl md:text-3xl font-medium text-[var(--foreground)] leading-tight">{pres.title}</h2>
                    <p className="text-sm text-[var(--muted-foreground)] leading-relaxed max-w-2xl">{pres.desc}</p>
                  </div>
                  <div className="mt-12 pt-6 border-t border-[var(--border)]">
                    <a href={pres.link} target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--foreground)] hover:opacity-70 flex items-center gap-1 w-fit">
                      VIEW SLIDES ↗
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
