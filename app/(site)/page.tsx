import Link from "next/link";
import Image from "next/image";

const canvasItems = [
  {
    index: "01",
    label: "TECH",
    title: "Tech Stack & Tools",
    category: "Architecture & Stack",
    desc: "A hands-on breakdown of languages, frameworks, and cloud infrastructure I use to build robust, scalable applications.",
    tags: ["Full Stack", "Data Engineering", "Machine Learning", "Mobile Dev", "AI Systems"],
    img: "/PL1.webp",
    href: "/myworks/techstack/",
    cta: "Explore Tech Stack",
  },
  {
    index: "02",
    label: "COMMUNITY",
    title: "Community & Collaboration",
    category: "Mentorship & Impact",
    desc: "Sharing knowledge, mentoring aspiring developers, and contributing to communities where tech minds grow together.",
    tags: ["Tech Mentoring", "Open Source", "Workshops", "Dev Communities"],
    img: "/CW1.webp",
    href: "/myworks/community",
    cta: "View Community",
  },
  {
    index: "03",
    label: "JOURNALISM",
    title: "Journalism & Tech Writing",
    category: "Articles & Reflections",
    desc: "Thinking out loud about data science, AI engineering, problem solving, and lessons learned along the journey.",
    tags: ["Data Science", "AI Research", "Tech Essays", "Case Studies"],
    img: "/J1.webp",
    href: "/writes/",
    cta: "Read Essays",
  },
];

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

      {/* ── MY CANVAS (EDITORIAL GALLERY) ────────────────── */}
      <section id="canvas" className="border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-block w-2 h-2 rounded-full bg-[var(--foreground)]" />
                <p className="text-xs font-medium tracking-widest uppercase text-[var(--muted-foreground)]">
                  My Canvas · Pillars & Explorations
                </p>
              </div>
              <h2 className="text-3xl md:text-4xl text-[var(--foreground)] font-light tracking-tight">
                Engineering, Community & Insights
              </h2>
            </div>
            <p className="text-sm text-[var(--muted-foreground)] max-w-md md:text-right leading-relaxed">
              Beyond commercial software: exploring core tools, cultivating developer communities, and documenting engineering reflections.
            </p>
          </div>

          {/* Editorial Studio Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 border border-[var(--border)] divide-y lg:divide-y-0 lg:divide-x divide-[var(--border)] bg-[var(--background)]">
            {canvasItems.map((item) => (
              <Link
                key={item.index}
                href={item.href}
                className="group flex flex-col justify-between p-6 md:p-8 hover:bg-[var(--muted)]/20 transition-all duration-300 relative"
              >
                <div>
                  {/* Top Header: Index & Category */}
                  <div className="flex items-center justify-between pb-6 border-b border-[var(--border)] text-xs font-mono uppercase tracking-widest">
                    <span className="text-[var(--muted-foreground)] group-hover:text-[var(--foreground)] transition-colors">
                      {item.index} // {item.label}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 border border-[var(--border)] text-[var(--muted-foreground)] bg-[var(--background)] group-hover:border-[var(--foreground)] group-hover:text-[var(--foreground)] transition-colors">
                      {item.category}
                    </span>
                  </div>

                  {/* Editorial Image Gallery Frame with Hover Reveal */}
                  <div className="relative aspect-[16/10] overflow-hidden my-6 border border-[var(--border)] bg-[var(--muted)]">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                    
                    {/* Floating pill on bottom corner */}
                    <div className="absolute bottom-2.5 right-2.5 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">
                      <span className="px-2 py-1 text-[9px] font-mono uppercase tracking-widest bg-[var(--foreground)] text-[var(--background)] shadow-sm">
                        VIEW CANVAS ↗
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl md:text-2xl font-light text-[var(--foreground)] tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Tags & Action CTA */}
                <div className="pt-8 mt-6 border-t border-[var(--border)] space-y-4">
                  {/* Slide-in / Hover interactive tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[11px] font-medium tracking-wide border border-[var(--border)] text-[var(--muted-foreground)] bg-[var(--background)] group-hover:border-[var(--foreground)]/40 group-hover:text-[var(--foreground)] transition-colors duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Link */}
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-[var(--foreground)] group-hover:opacity-75 transition-opacity">
                      {item.cta}
                    </span>
                    <span className="text-sm font-bold text-[var(--foreground)] transform group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300">
                      ↗
                    </span>
                  </div>
                </div>
              </Link>
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
