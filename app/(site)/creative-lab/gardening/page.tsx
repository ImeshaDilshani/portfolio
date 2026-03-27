import Link from "next/link";
import Image from "next/image";

export default function GardeningPage() {
  return (
    <main>
      {/* ── HEADER ──────────────────────────────────────── */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-10">
            <p className="text-xs font-medium tracking-widest uppercase text-[var(--muted-foreground)] pt-1">
              Mindful Living
            </p>
            <div className="space-y-4 max-w-2xl">
              <h1 className="text-4xl md:text-5xl text-[var(--foreground)]">Gardening</h1>
              <p className="text-[var(--muted-foreground)] leading-relaxed">
                Finding peace through nurturing plants, connecting with nature, and mindful living. My therapeutic escape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── IMAGE ────────────────────────────── */}
      <section className="border-b border-[var(--border)]">
        <div className="w-full relative h-[400px] md:h-[500px] bg-[var(--muted)]">
          <Image
            src="/garding/senior-couple-harvesting-tomatoes.webp"
            alt="Gardening"
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

          <h2 className="text-3xl text-[var(--foreground)] mb-6">Finding Peace in Nature</h2>
          <p className="text-[var(--muted-foreground)] leading-relaxed mb-12">
            Gardening has become my favorite hobby - a peaceful retreat that gives me mental relaxation and helps me disconnect from the busy digital world. There's something incredibly therapeutic about working with soil, nurturing plants, and watching them grow over time.
          </p>

          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-medium text-[var(--foreground)] mb-4">Why I Garden</h3>
              <p className="text-[var(--muted-foreground)] leading-relaxed">
                In our fast-paced, technology-driven lives, gardening offers a unique opportunity to slow down and connect with nature. It's meditative, grounding, and incredibly rewarding. Each season brings new lessons, challenges, and moments of joy as I watch my garden flourish.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium text-[var(--foreground)] mb-4">How I Got Hooked</h3>
              <div className="space-y-4 text-[var(--muted-foreground)] leading-relaxed">
                <p>
                  I'll admit it - I'm completely addicted to gardening now, and I have my amma (mother) to thank for that. Growing up, I watched her tend to her vegetable garden in her free time, transforming small patches of soil into sources of fresh produce.
                </p>
                <p>
                  There's an indescribable happiness that comes from working with nature. The process of watching something grow from a tiny seed into a thriving plant is magical. It's taught me patience, hope, and the value of nurturing something with care. Each sprout that breaks through the soil feels like a small victory.
                </p>
              </div>
            </div>

            <div className="border border-[var(--border)] p-8">
              <h3 className="text-xl font-medium text-[var(--foreground)] mb-4">Garden Gallery</h3>
              <p className="text-[var(--muted-foreground)]">
                Photo gallery coming soon! I'm documenting my gardening journey and will share photos of my plants, garden setup, and the peaceful moments spent among the greenery.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
