import Link from "next/link";
import Image from "next/image";




export default function HomePage() {
  return (
    <main>
      {/* ── HERO ────────────────────────────────────────── */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28 lg:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-16 items-start">
            {/* Left */}
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-xs font-medium tracking-widest uppercase text-[var(--muted-foreground)]">
                  Software &amp; Data Engineer · Sri Lanka
                </p>

                <h1 className="text-4xl sm:text-5xl md:text-6xl leading-[1.1] text-[var(--foreground)] font-light tracking-tight">
                  I'm helping business owners to scale revenue through software and data solutions.
                </h1>
              </div>

              {/* Mobile Photo: Visible on mobile/tablet, hidden on desktop */}
              <div className="lg:hidden relative group max-w-[400px]">
                 <div className="relative border border-[var(--border)] p-1 bg-[var(--background)] z-10">
                    <Image
                      src="/imesha.webp"
                      alt="Imesha Dilshani"
                      width={400}
                      height={500}
                      className="w-full h-auto object-cover grayscale transition-all duration-700 hover:grayscale-0"
                      priority
                    />
                 </div>
              </div>

              <div className="space-y-4">
                <p className="max-w-xl text-[var(--muted-foreground)] leading-relaxed text-base">
                  I build clean, fast web and mobile apps for startups and businesses across Sri Lanka, the US, UK, and Australia. I turn complex, tangled problems into clean, maintainable systems that help scale your revenue — and I actually enjoy doing it.
                </p>
              </div>

              {/* Role tags */}
              <div className="flex flex-wrap gap-2">
                {["React", "React Native", "Python", "Data Engineering", "AI Integration"].map((role) => (
                  <span
                    key={role}
                    className="px-3 py-1 text-xs font-medium tracking-wide border border-[var(--border)] text-[var(--muted-foreground)]"
                  >
                    {role}
                  </span>
                ))}
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-2 text-sm text-[var(--foreground)] font-medium">
                  <span className="flex h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse"></span>
                  🟢 Available for Freelance Projects
                </div>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--foreground)] text-[var(--primary-foreground)] text-sm font-medium tracking-wide uppercase transition-opacity hover:opacity-80"
                  >
                    Book a Free Call →
                  </Link>
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--border)] text-[var(--foreground)] text-sm font-medium tracking-wide uppercase transition-colors hover:bg-[var(--muted)]"
                  >
                    About Me
                  </Link>
                </div>
              </div>
            </div>

            {/* Right – Desktop Photo: Hidden on mobile, visible on desktop */}
            <div className="hidden lg:block relative group">
              {/* Image Container */}
              <div className="relative border border-[var(--border)] p-1 bg-[var(--background)] z-10">
                <Image
                  src="/imesha.webp"
                  alt="Imesha Dilshani"
                  width={400}
                  height={500}
                  className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  priority
                  fetchPriority="high"
                />
              </div>

              {/* Technical Label */}
              <div className="absolute -bottom-10 left-0">
                <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[var(--muted-foreground)] opacity-60 group-hover:opacity-100 transition-opacity duration-500 underline underline-offset-4 decoration-[var(--border)]">ID://Asset_Hero_Main.img</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--border)] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12 md:gap-20">
            <p className="text-xs font-medium tracking-widest uppercase text-[var(--muted-foreground)] pt-2">
              My Life Motto
            </p>
            
            <div className="space-y-12 md:space-y-16">
              {/* Motto Headline */}
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-[var(--foreground)] leading-[1.1] tracking-tight text-balance">
                Small Steps. <span className="text-[var(--muted-foreground)]">Big System With</span> Continuous Improvement.
              </h2>

              {/* Descriptions Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 border-t border-[var(--border)] pt-12">
                {[
                  { title: "Small Steps.", desc: "Because momentum starts in the tiniest actions." },
                  { title: "Big System.", desc: "Frameworks that endure and scale independently." },
                  { title: "Continuous Improvement.", desc: "To iterate, adapt, and refine every single day." },
                ].map((item, i) => (
                  <div key={i} className="space-y-2">
                    <h3 className="text-xs font-bold tracking-widest uppercase text-[var(--foreground)]">{item.title}</h3>
                    <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ───────────────────────────────────── */}
      <section id="services" className="border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-xs font-medium tracking-widest uppercase text-[var(--muted-foreground)] mb-4">
                Services
              </p>
              <h2 className="text-3xl md:text-4xl text-[var(--foreground)] font-light tracking-tight">
                How I Help Businesses Grow
              </h2>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--foreground)] text-[var(--primary-foreground)] text-sm font-medium tracking-wide uppercase transition-opacity hover:opacity-80"
            >
              Book a Strategy Call →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-[var(--border)]">
            {[
              {
                title: "Web & Mobile Apps",
                desc: "Fast, reliable, and beautifully designed applications tailored to engage your users and drive sales.",
                features: ["React, Next.js & React Native", "High Performance & SEO", "Secure & Scalable"],
                price: "Starting at $300",
              },
              {
                title: "Data Engineering & Automation",
                desc: "Stop wasting hours on manual work. I build custom pipelines to automate your operations and save you money.",
                features: ["ETL Data Pipelines", "Business Dashboards", "API Integrations"],
                price: "Starting at $250",
              },
              {
                title: "AI & ML Integration",
                desc: "Leverage intelligent models to personalize user experiences, predict trends, and outpace your competitors.",
                features: ["Predictive Modeling", "NLP & Chatbots", "Custom AI Solutions"],
                price: "Starting at $400",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 md:p-10 border-b lg:border-b-0 lg:border-r border-[var(--border)] last:border-0 flex flex-col h-full group hover:bg-[var(--muted)]/30 transition-colors"
              >
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs font-medium tracking-widest text-[var(--muted-foreground)] uppercase">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-xs font-medium text-[var(--foreground)] bg-[var(--muted)] border border-[var(--border)] px-3 py-1.5 rounded-sm">{item.price}</span>
                </div>
                
                <h3 className="text-xl font-medium text-[var(--foreground)] mb-4">{item.title}</h3>
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-8 flex-grow">{item.desc}</p>
                
                <ul className="space-y-3 pt-6 border-t border-[var(--border)]">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-[var(--foreground)]">
                      <span className="text-[var(--muted-foreground)]">→</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT (BRIEF) ───────────────────────────────── */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-10">
            <p className="text-xs font-medium tracking-widest uppercase text-[var(--muted-foreground)] pt-1">
              Background
            </p>

            <div className="space-y-10 max-w-2xl">

              {/* Work */}
              <div className="space-y-4">
                <p className="text-[var(--foreground)] leading-relaxed">
                  I'm a software and data engineer based in Sri Lanka with hands-on experience building full-stack web apps, React Native mobile apps, and data engineering systems. I've worked with startups, SMEs, and enterprise teams — delivering clean, scalable solutions on time.
                </p>
                <p className="text-[var(--foreground)] leading-relaxed">
                  I work well with clients across time zones (US, UK, AU) and with local Sri Lankan businesses who need a developer who understands both the technology and the local context.
                </p>
                <p className="text-[var(--muted-foreground)] leading-relaxed text-sm">
                  Currently working as an Associate Software Engineer at Sterling BPO Solutions and part-time at Wirity Labs, while taking on select freelance projects.
                </p>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-1 text-sm font-medium text-[var(--foreground)] underline underline-offset-4 hover:opacity-70 transition-opacity"
              >
                Read full story →
              </Link>

            </div>
          </div>
        </div>
      </section>


      {/* ── CONNECT ─────────────────────────────────────── */}
      <section>
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-10">
            <p className="text-xs font-medium tracking-widest uppercase text-[var(--muted-foreground)] pt-1">
              Connect
            </p>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl text-[var(--foreground)] max-w-lg">
                Open to projects, collaborations and good conversations.
              </h2>
              <div className="flex flex-wrap gap-6 text-sm">
                <a href="https://www.linkedin.com/in/imesha-dilshani-61862422b" target="_blank" rel="noopener noreferrer" className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors underline underline-offset-2">LinkedIn ↗</a>
                <a href="https://github.com/ImeshaDilshani" target="_blank" rel="noopener noreferrer" className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors underline underline-offset-2">GitHub ↗</a>
                <a href="https://x.com/ImeshaDilshani3" target="_blank" rel="noopener noreferrer" className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors underline underline-offset-2">Twitter ↗</a>
                <Link href="/contact" className="text-[var(--foreground)] hover:opacity-70 transition-opacity underline underline-offset-2">Send a message →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
