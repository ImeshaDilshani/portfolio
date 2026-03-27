import Link from "next/link";
import Image from "next/image";

const products = [
  
  {
    id: "01",
    title: "Orbit Engine",
    desc: "Transform Any Content Into a Viral Distribution Machine. Whether it’s a YouTube link or a Blog post, Orbit handles the rest. Synthesize your Video into SEO Blogs, turn your Articles into Viral Shorts, and generate Designer-grade Flyers with captions. Total content repurposing in one click.",
    status: "Development & Beta Testing",
    link: "https://orbit.everytuesdays.com/",
    active: true
  },
  {
    id: "02",
    title: "ClassLinka",
    desc: "A platform designed to revolutionize the tutoring ecosystem in Sri Lanka, connecting elite educators with ambitious students through a streamlined digital interface.",
    status: "Research & Conceptualization",
    link: "https://classlinka.imesha.dev/",
    active: true
  },
  {
    id: "03",
    title: "Coming Soon",
    desc: "Something new is taking shape in the lab. I'm deep in the ideation phase — exploring bold ideas, questioning assumptions, and designing the next tool that'll make you wonder how you ever worked without it.",
    status: "Ideation",
    link: null,
    active: false
  }
];

export default function DigitalProductsPage() {
  return (
    <main>
      {/* ── HEADER ──────────────────────────────────────── */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-10">
            <p className="text-xs font-medium tracking-widest uppercase text-[var(--muted-foreground)] pt-1">
              Creative Lab
            </p>
            <div className="space-y-4 max-w-2xl">
              <h1 className="text-4xl md:text-5xl text-[var(--foreground)]">Digital Product Design</h1>
              <p className="text-lg text-[var(--muted-foreground)] leading-relaxed">
                Exploring opportunities in digital products, creative design, and innovative solutions.
              </p>
              <p className="text-[var(--muted-foreground)] leading-relaxed">
                Currently in Development Phase.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── IMAGE ────────────────────────────── */}
      <section className="border-b border-[var(--border)]">
        <div className="w-full relative h-[400px] md:h-[500px] bg-[var(--muted)]">
          <Image
            src="/about-bg.webp"
            alt="Digital Product Design"
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>
      </section>

      {/* ── CONTENT ───────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="max-w-3xl ml-auto lg:mx-auto">
          <Link href="/creative-lab" className="text-xs font-medium tracking-widest uppercase text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors mb-12 inline-block">
            ← Back to Creative Lab
          </Link>

          <h2 className="text-3xl text-[var(--foreground)] mb-6">The Journey So Far</h2>
          <p className="text-[var(--muted-foreground)] leading-relaxed mb-16">
            Digital product design is where my technical foundation in software engineering meets my creative drive. I'm building a portfolio of products that solve real problems, starting with local solutions and expanding into broader tools.
          </p>

          <div className="space-y-24">
            {products.map((product) => (
              <div key={product.id} className={`group ${!product.active ? "opacity-60" : ""}`}>
                <div className="flex items-center gap-4 mb-6 border-b border-[var(--border)] pb-4">
                  <span className="text-xs font-bold tracking-widest text-[var(--muted-foreground)] uppercase">Product {product.id}</span>
                  <h3 className="text-2xl md:text-3xl text-[var(--foreground)]">{product.title}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-[1fr_200px] gap-12">
                  <div className="space-y-6">
                    <p className="text-[var(--muted-foreground)] leading-relaxed">
                      {product.desc}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-2.5 py-0.5 text-[10px] font-medium tracking-widest uppercase border border-[var(--border)] text-[var(--muted-foreground)]">
                        {product.status}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col justify-start md:items-end">
                    {product.link ? (
                      <a 
                        href={product.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-[var(--foreground)] underline underline-offset-4 hover:opacity-70 transition-opacity"
                      >
                        Visit Project ↗
                      </a>
                    ) : (
                      <span className="text-sm font-medium text-[var(--muted-foreground)] italic">
                        In progress...
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}

            <div className="border border-[var(--border)] p-8 mt-12 bg-[var(--muted)]/20">
              <h3 className="text-xl font-medium text-[var(--foreground)] mb-4">Waitlist & Launch</h3>
              <p className="text-[var(--muted-foreground)] leading-relaxed text-sm">
                I'm preparing to open an exclusive waitlist for early users of <strong>ClassLinka</strong> and future tools. The journey from research to real-world product is ongoing, with first public releases expected in May 2026.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
