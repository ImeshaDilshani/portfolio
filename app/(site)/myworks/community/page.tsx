import Link from "next/link";
import Image from "next/image";

const memories = [
  "/CW3.webp", "/CW4.webp", "/CW5.webp", "/CW6.webp",
  "/CW7.webp", "/CW8.webp", "/CW9.webp", "/CW10.webp",
  "/CW11.webp", "/CW12.webp", "/CW13.webp", "/CW14.webp",
];

export default function CommunityPage() {
  return (
    <main>
      {/* ── HEADER ──────────────────────────────────────── */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-10">
            <p className="text-xs font-medium tracking-widest uppercase text-[var(--muted-foreground)] pt-1">
              Community
            </p>
            <div className="space-y-4 max-w-2xl">
              <h1 className="text-4xl md:text-5xl text-[var(--foreground)]">Community Work</h1>
              <p className="text-[var(--muted-foreground)] leading-relaxed">
                I strongly believe in giving back to the community that has helped me grow. Through
                leadership, teamwork and volunteer work, I strive to share knowledge and help others
                succeed in their journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── MEMORIES ────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <p className="text-xs font-medium tracking-widest uppercase text-[var(--muted-foreground)] mb-10">
          Memories
        </p>

        <div className="space-y-0 border border-[var(--border)]">

          {/* Row 1 — 1 large left + 2 stacked right */}
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] border-b border-[var(--border)]">
            <div className="relative aspect-[4/3] overflow-hidden bg-[var(--muted)] border-r border-[var(--border)] group">
              <Image src={memories[0]} alt="Memory 1" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
            </div>
            <div className="grid grid-rows-2">
              <div className="relative aspect-[4/3] overflow-hidden bg-[var(--muted)] border-b border-[var(--border)] group">
                <Image src={memories[1]} alt="Memory 2" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden bg-[var(--muted)] group">
                <Image src={memories[2]} alt="Memory 3" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              </div>
            </div>
          </div>

          {/* Row 2 — 3 equal columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 border-b border-[var(--border)]">
            {[memories[3], memories[4], memories[5]].map((src, i) => (
              <div key={i} className="relative aspect-[4/3] overflow-hidden bg-[var(--muted)] border-r border-[var(--border)] last:border-r-0 group">
                <Image src={src} alt={`Memory ${i + 4}`} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              </div>
            ))}
          </div>

          {/* Row 3 — 2 stacked left + 1 large right */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] border-b border-[var(--border)]">
            <div className="grid grid-rows-2 border-r border-[var(--border)]">
              <div className="relative aspect-[4/3] overflow-hidden bg-[var(--muted)] border-b border-[var(--border)] group">
                <Image src={memories[6]} alt="Memory 7" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden bg-[var(--muted)] group">
                <Image src={memories[7]} alt="Memory 8" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden bg-[var(--muted)] group">
              <Image src={memories[8]} alt="Memory 9" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
            </div>
          </div>

          {/* Row 4 — 1 large + 2 side-by-side */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden bg-[var(--muted)] border-r border-[var(--border)] group">
              <Image src={memories[9]} alt="Memory 10" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
            </div>
            <div className="grid grid-cols-2">
              <div className="relative aspect-[2/3] overflow-hidden bg-[var(--muted)] border-r border-[var(--border)] group">
                <Image src={memories[10]} alt="Memory 11" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              </div>
              <div className="relative aspect-[2/3] overflow-hidden bg-[var(--muted)] group">
                <Image src={memories[11]} alt="Memory 12" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}