import Link from "next/link";
import Image from "next/image";

export default function CreativeLabPage() {
  return (
    <main>
      {/* Header */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-10">
            <p className="text-xs font-medium tracking-widest uppercase text-[var(--muted-foreground)] pt-1">
              Creative Lab
            </p>
            <div className="space-y-4 max-w-2xl">
              <h1 className="text-4xl md:text-5xl text-[var(--foreground)]">Blooming Ideas</h1>
              <p className="text-[var(--muted-foreground)] leading-relaxed">
                A space where passion meets purpose. Where I explore, experiment, and create beyond the boundaries of my professional work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-[var(--border)]">
          {[
            {
              title: "Gardening for Mindful Living",
              desc: "Gardening has become my calm space, a reminder that growth takes time, care, and patience.",
              img: "/garding/senior-couple-harvesting-tomatoes.webp",
              link: "/creative-lab/gardening"
            },
            {
              title: "Photography & Illustration",
              desc: "Visual storytelling combining creativity with entrepreneurship on platforms like Adobe Stock.",
              img: "/portrait-person-ai-robot.webp",
              link: "/creative-lab/photography"
            },
            {
              title: "Digital Product Design",
              desc: "Exploring opportunities in creating digital products that combine technical skills with creative design.",
              img: "/about-bg.webp",
              link: "/creative-lab/digital-products"
            }
          ].map((item, i) => (
            <Link key={i} href={item.link} className="group border-r border-b border-[var(--border)] bg-[var(--card)] hover:bg-[var(--muted)] transition-colors p-6 md:p-8 flex flex-col space-y-6">
              <div className="aspect-[4/3] relative w-full overflow-hidden border border-[var(--border)] bg-[var(--muted)]">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="space-y-3 flex-1">
                <h3 className="text-xl font-medium text-[var(--foreground)] leading-tight">{item.title}</h3>
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">{item.desc}</p>
              </div>
              <p className="text-xs font-medium tracking-widest uppercase text-[var(--foreground)] hover:opacity-70 mt-auto">
                Explore ↗
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
