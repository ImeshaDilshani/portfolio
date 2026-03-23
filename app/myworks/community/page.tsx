import Link from "next/link";
import Image from "next/image";

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
                Giving back through leadership, mentoring, and volunteering in the open-source community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTENT ───────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="max-w-3xl ml-auto lg:mx-auto">
          <Link href="/myworks" className="text-xs font-medium tracking-widest uppercase text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors mb-12 inline-block">
            ← Back to My Works
          </Link>

          <h2 className="text-3xl text-[var(--foreground)] mb-6">Contributing to the Open-Source Community</h2>
          <p className="text-[var(--muted-foreground)] leading-relaxed mb-16 border-l-2 border-[var(--border)] pl-6">
            I strongly believe in giving back to the community that has helped me grow. Through leadership, teamwork and volunteer work, I strive to share knowledge and help others succeed in their journey.
          </p>

          <div className="space-y-8">
            <h3 className="text-xl font-medium text-[var(--foreground)]">Community Memories</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0 border-t border-l border-[var(--border)]">
              {[
                "/CW3.webp", "/CW4.webp", "/CW5.webp", "/CW6.webp",
                "/CW7.webp", "/CW8.webp", "/CW9.webp", "/CW10.webp",
                "/CW11.webp", "/CW12.webp", "/CW13.webp", "/CW14.webp"
              ].map((src, i) => (
                <div key={i} className="relative aspect-square border-r border-b border-[var(--border)] bg-[var(--muted)] overflow-hidden group">
                  <Image
                    src={src}
                    alt={`Community Memory ${i+1}`}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
