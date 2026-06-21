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
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                  <p className="text-xs font-medium tracking-widest uppercase text-[var(--muted-foreground)]">
                    Software & Data Engineer · Sri Lanka
                  </p>
                  <div className="inline-flex items-center gap-2 px-3 py-1 border border-[var(--border)] bg-[var(--background)] text-[10px] font-bold tracking-widest uppercase text-[var(--foreground)]">
                    <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                    Available for Freelance Projects
                  </div>
                </div>

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
                  I build clean, fast web and mobile apps for startups and businesses across <strong className="text-[var(--foreground)] font-medium">Sri Lanka, the US, UK, and Australia</strong>. I turn complex, tangled problems into clean, maintainable systems that help scale your revenue — and I actually enjoy doing it.
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

      {/* ── MOTTO (COMPACT) ─────────────────────────────── */}
      <section className="border-b border-[var(--border)] bg-[var(--muted)]/20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-8 md:py-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <span className="flex h-2 w-2 rounded-full bg-[var(--foreground)]"></span>
              <p className="text-xs font-medium tracking-widest uppercase text-[var(--muted-foreground)]">
                My Life Motto
              </p>
            </div>
            <p className="text-lg md:text-xl font-light text-[var(--foreground)] tracking-tight text-balance md:text-right max-w-2xl">
              Small Steps. <span className="text-[var(--muted-foreground)]">Big System With</span> Continuous Improvement.
            </p>
          </div>
        </div>
      </section>

      {/* ── METRICS ─────────────────────────────────────── */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-[var(--border)] border-l border-r border-[var(--border)]">
            {[
              { value: "20+", label: "Happy Clients" },
              { value: "20+", label: "Completed Projects" },
              { value: "4+", label: "Years Experience" },
              { value: "100%", label: "Satisfaction Rate" },
            ].map((metric, i) => (
              <div key={i} className="flex flex-col items-center justify-center p-8 text-center group hover:bg-[var(--muted)]/20 transition-colors">
                <span className="text-4xl md:text-5xl font-light text-[var(--foreground)] mb-2 group-hover:scale-110 transition-transform duration-500">
                  {metric.value}
                </span>
                <span className="text-xs font-bold tracking-widest uppercase text-[var(--muted-foreground)]">
                  {metric.label}
                </span>
              </div>
            ))}
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
                features: ["Custom Cross-Platform Solutions", "High Performance & SEO", "Secure & Scalable"],
                price: "Custom Pricing",
                href: "/services/web-and-mobile-apps",
              },
              {
                title: "Data Engineering & Automation",
                desc: "Stop wasting hours on manual work. I build custom pipelines to automate your operations and save you money.",
                features: ["ETL Data Pipelines", "Business Dashboards", "API Integrations"],
                price: "Tailored Solutions",
                href: "/services/data-engineering",
              },
              {
                title: "AI & ML Integration",
                desc: "Leverage intelligent models to personalize user experiences, predict trends, and outpace your competitors.",
                features: ["Predictive Modeling", "NLP & Chatbots", "Custom AI Solutions"],
                price: "Request a Quote",
                href: "/services/ai-ml-integration",
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
                
                <ul className="space-y-3 pt-6 border-t border-[var(--border)] mb-8">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-[var(--foreground)]">
                      <span className="text-[var(--muted-foreground)]">→</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href={item.href} className="mt-auto inline-flex items-center gap-1 text-sm font-bold text-[var(--foreground)] hover:opacity-70 transition-opacity uppercase tracking-widest">
                  Learn More ↗
                </Link>
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
                <a href="https://beacons.ai/imesha.co" target="_blank" rel="noopener noreferrer" className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors underline underline-offset-2">Beacons ↗</a>
                <a href="https://www.fiverr.com/s/yvK4mAV" target="_blank" rel="noopener noreferrer" className="text-[var(--muted-foreground)] hover:text-[#1dbf73] transition-colors underline underline-offset-2">Fiverr ↗</a>
                <a href="https://www.freelancer.com/u/imeshadilshani03" target="_blank" rel="noopener noreferrer" className="text-[var(--muted-foreground)] hover:text-[#29b2fe] transition-colors underline underline-offset-2">Freelancer ↗</a>
                <Link href="/contact" className="text-[var(--foreground)] hover:opacity-70 transition-opacity underline underline-offset-2">Send a message →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
