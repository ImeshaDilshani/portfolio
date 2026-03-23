import Link from "next/link";
import Image from "next/image";

const papers = [
  {
    title: "Bridging Linguistic Gaps: A Review of AI-Driven Speech-to-Speech Translation for Sinhala and Tamil in Sri Lanka",
    conference: "8ᵗʰ International Research Conference on Smart Computing and Systems Engineering, University of Kelaniya, Sri Lanka",
    img: "/research/up1.webp",
    link: "https://ieeexplore.ieee.org/document/11030975"
  }
  // Add new papers here
];

export default function UndergraduatePapersPage() {
  return (
    <main>
      {/* ── HEADER ──────────────────────────────────────── */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-10">
            <p className="text-xs font-medium tracking-widest uppercase text-[var(--muted-foreground)] pt-1">
              Undergraduate Papers
            </p>
            <div className="space-y-4 max-w-2xl">
              <h1 className="text-4xl md:text-5xl text-[var(--foreground)]">Academic Papers</h1>
              <p className="text-[var(--muted-foreground)] leading-relaxed">
                Selected research papers and projects completed during my undergraduate studies at the University of Kelaniya, showcasing early research interests in computer science.
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
                const isActive = item.href === "/about/undergraduate-papers";
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
            {papers.map((paper, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-[200px_1fr] border-b border-[var(--border)] last:border-0 group bg-[var(--card)] hover:bg-[var(--muted)] transition-colors">
                <div className="relative h-48 md:h-full w-full border-b md:border-b-0 md:border-r border-[var(--border)] bg-[var(--muted)] overflow-hidden">
                  <Image src={paper.img} alt={paper.title} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-between">
                  <div className="space-y-3">
                    <p className="text-xs font-medium tracking-widest uppercase text-[var(--muted-foreground)]">Research Paper</p>
                    <h2 className="text-xl md:text-2xl font-medium text-[var(--foreground)]">{paper.title}</h2>
                    <p className="text-sm italic text-[var(--muted-foreground)] max-w-2xl">{paper.conference}</p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-[var(--border)]">
                    <a href={paper.link} target="_blank" rel="noopener noreferrer" className="text-xs font-medium tracking-widest uppercase text-[var(--foreground)] hover:opacity-70 flex items-center gap-1 w-fit">
                      Read Paper ↗
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
