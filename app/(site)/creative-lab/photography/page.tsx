import Link from "next/link";
import Image from "next/image";

const platforms = [
  {
    name: "Adobe Stock",
    description: "Building a professional portfolio of high-quality stock images",
    status: "Active",
    link: "https://stock.adobe.com/lk/contributor/212936218/Imesha",
  },
  {
    name: "Shutterstock",
    description: "Contributing diverse content for commercial and creative use",
    status: "Active",
    link: "https://www.shutterstock.com/g/Imesha+Dilshani%2001?rid=244488516",
  },
  {
    name: "Dreamstime",
    description: "Expanding reach with unique photography and generated content",
    status: "Active",
    link: "https://www.dreamstime.com/imageincome_info",
  },
];

export default function PhotographyPage() {
  return (
    <main>
      {/* ── HEADER ──────────────────────────────────────── */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-10">
            <p className="text-xs font-medium tracking-widest uppercase text-[var(--muted-foreground)] pt-1">
              Visual Art
            </p>
            <div className="space-y-4 max-w-2xl">
              <h1 className="text-4xl md:text-5xl text-[var(--foreground)]">Stock Photography</h1>
              <p className="text-[var(--muted-foreground)] leading-relaxed">
                Creating visual content through photography, AI generation, and artistic expression. Turning creativity into passive income.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── IMAGE ────────────────────────────── */}
      <section className="border-b border-[var(--border)]">
        <div className="w-full relative h-[400px] md:h-[500px] bg-[var(--muted)]">
          <Image
            src="/portrait-person-ai-robot.webp"
            alt="Stock Photography"
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

          <h2 className="text-3xl text-[var(--foreground)] mb-6">My Journey in Stock Photography</h2>
          <p className="text-[var(--muted-foreground)] leading-relaxed mb-12">
            I started stock photography as a way to combine my passion for visual storytelling with building a passive income stream. This journey allows me to explore different photography styles, experiment with AI-generated imagery, and learn about the commercial side of creative work.
          </p>

          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-medium text-[var(--foreground)] mb-4">My Current Goal</h3>
              <p className="text-[var(--muted-foreground)] leading-relaxed">
                Building a strong, diverse portfolio across multiple platforms is my primary focus. I work on this during my free time, creating content that meets market demands while staying true to my creative vision. Each platform has its unique requirements and audience, which keeps the work interesting and challenging.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium text-[var(--foreground)] mb-4">The Process</h3>
              <p className="text-[var(--muted-foreground)] leading-relaxed text-[var(--muted-foreground)] leading-relaxed">
                From capturing original photographs to experimenting with AI generation tools, I'm constantly learning what works in the stock photography market. It's a blend of creativity, technical skills, market research, and persistence. Every upload is a learning opportunity.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-medium text-[var(--foreground)]">Active Platforms</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border-t border-l border-[var(--border)]">
                {platforms.map((platform, index) => (
                  <div key={index} className="border-r border-b border-[var(--border)] bg-[var(--card)] p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <h4 className="font-medium text-[var(--foreground)]">{platform.name}</h4>
                        <span className="text-[10px] font-medium tracking-widest uppercase px-2 py-0.5 border border-[var(--border)]">{platform.status}</span>
                      </div>
                      <p className="text-sm text-[var(--muted-foreground)] mb-8">{platform.description}</p>
                    </div>
                    <a href={platform.link} target="_blank" rel="noopener noreferrer" className="text-xs font-medium tracking-widest uppercase text-[var(--foreground)] hover:opacity-70">
                      View Portfolio ↗
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-[var(--border)] p-8 mt-12">
              <h3 className="text-xl font-medium text-[var(--foreground)] mb-4">Portfolio Showcase</h3>
              <p className="text-[var(--muted-foreground)]">
                I'm currently building my portfolio and will showcase my best work here soon. Follow along as I grow my presence in the stock photography space.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
