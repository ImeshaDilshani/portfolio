import Link from "next/link";
import Image from "next/image";

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
          <div className="space-y-16">
            <p className="text-[var(--foreground)] font-medium text-lg border-b border-[var(--border)] pb-4">
              Academic and industry presentations I've delivered.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Text Classification",
                  type: "Academic Presentation",
                  img: "/presentation-1.webp",
                  link: "https://drive.google.com/file/d/1QUDfTq7X8h0tbaBz9FUOrDf0vcXEGbHs/view?usp=sharing"
                },
                {
                  title: "NoSQL Solutions to Handle Big Data",
                  type: "Academic Presentation",
                  img: "/presentation-2.webp",
                  link: "https://drive.google.com/file/d/1ADBl8-gjo85Gp7MGZ7Xowr17mO57_hFn/view?usp=sharing"
                },
                {
                  title: "The SAP S/4HANA Transformation",
                  type: "Academic Presentation",
                  img: "/PRESENTATION-3.webp",
                  link: "https://drive.google.com/file/d/1l8tZvlJgmL3dYumRy87n9jyEDsjHB3he/view?usp=sharing"
                },
                {
                  title: "Next-gen Real-time Speech Translation",
                  type: "Research Final Viva",
                  img: "/presentation-5.webp",
                  link: "https://drive.google.com/file/d/1ItWURTqZKqqlg8ZIeyzMTphR_iBKZIHo/view?usp=sharing"
                }
              ].map((pres, i) => (
                <div key={i} className="group border border-[var(--border)] bg-[var(--card)] p-4 flex flex-col justify-between hover:bg-[var(--muted)] transition-colors">
                  <div className="relative aspect-[4/3] bg-[var(--muted)] mb-6 border border-[var(--border)] overflow-hidden">
                    <Image src={pres.img} alt={pres.title} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-[var(--foreground)] mb-1">{pres.title}</h3>
                    <p className="text-xs font-medium tracking-widest uppercase text-[var(--muted-foreground)] mb-6">{pres.type}</p>
                    <a href={pres.link} target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:opacity-70 underline underline-offset-4 decoration-1 text-[var(--foreground)]">
                      View Slides ↗
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
