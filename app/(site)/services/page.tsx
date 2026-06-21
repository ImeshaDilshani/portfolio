import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Imesha Dilshani",
  description: "Explore the custom software engineering, data, and AI solutions I offer to help businesses scale.",
};

export default function ServicesPage() {
  return (
    <main>
      {/* ── HEADER ──────────────────────────────────────── */}
      <section className="border-b border-[var(--border)] bg-[var(--muted)]/20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-[var(--foreground)] tracking-tight">
              Specialized Solutions for Growth.
            </h1>
            <p className="text-lg md:text-xl text-[var(--muted-foreground)] leading-relaxed">
              I partner with businesses to deliver fast, reliable, and tailored technical systems. From web applications to data pipelines, let's build what you need to scale.
            </p>
          </div>
        </div>
      </section>

      {/* ── SERVICES LIST ───────────────────────────────── */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 divide-y divide-[var(--border)]">
            {/* Service 1 */}
            <div className="px-6 md:px-10 py-16 md:py-20 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-medium text-[var(--foreground)] mb-4">
                  Web & Mobile Apps
                </h2>
                <div className="inline-flex px-3 py-1 bg-[var(--foreground)] text-[var(--background)] text-xs font-bold tracking-widest uppercase mb-6">
                  Custom Pricing
                </div>
              </div>
              <div className="space-y-6">
                <p className="text-[var(--muted-foreground)] leading-relaxed">
                  Fast, reliable, and beautifully designed applications tailored to engage your users and drive sales. I build scalable frontends and robust backends that ensure high performance across all platforms.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {["Custom Cross-Platform Solutions", "High Performance & SEO", "Secure & Scalable Architecture", "Intuitive User Experience"].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[var(--foreground)]">
                      <span className="text-[var(--muted-foreground)] mt-0.5">✦</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/services/web-and-mobile-apps"
                  className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-[var(--foreground)] hover:opacity-70 transition-opacity"
                >
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Service 2 */}
            <div className="px-6 md:px-10 py-16 md:py-20 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 bg-[var(--muted)]/5">
              <div>
                <h2 className="text-2xl md:text-3xl font-medium text-[var(--foreground)] mb-4">
                  Data Engineering & Automation
                </h2>
                <div className="inline-flex px-3 py-1 bg-[var(--foreground)] text-[var(--background)] text-xs font-bold tracking-widest uppercase mb-6">
                  Tailored Solutions
                </div>
              </div>
              <div className="space-y-6">
                <p className="text-[var(--muted-foreground)] leading-relaxed">
                  Stop wasting hours on manual work. I build custom data pipelines and workflow automations to streamline your operations, reduce overhead, and surface actionable insights.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {["ETL Data Pipelines", "Business Dashboards", "API & Third-Party Integrations", "Workflow Automation"].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[var(--foreground)]">
                      <span className="text-[var(--muted-foreground)] mt-0.5">✦</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/services/data-engineering"
                  className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-[var(--foreground)] hover:opacity-70 transition-opacity"
                >
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Service 3 */}
            <div className="px-6 md:px-10 py-16 md:py-20 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-medium text-[var(--foreground)] mb-4">
                  AI & ML Integration
                </h2>
                <div className="inline-flex px-3 py-1 bg-[var(--foreground)] text-[var(--background)] text-xs font-bold tracking-widest uppercase mb-6">
                  Request a Quote
                </div>
              </div>
              <div className="space-y-6">
                <p className="text-[var(--muted-foreground)] leading-relaxed">
                  Leverage intelligent models to personalize user experiences, predict market trends, and outpace your competitors. Let's integrate cutting-edge AI into your existing products.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {["Predictive Modeling", "NLP & Custom Chatbots", "Generative AI Solutions", "Data-Driven Personalization"].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[var(--foreground)]">
                      <span className="text-[var(--muted-foreground)] mt-0.5">✦</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/services/ai-ml-integration"
                  className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-[var(--foreground)] hover:opacity-70 transition-opacity"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────── */}
      <section className="bg-[var(--foreground)] text-[var(--background)]">
        <div className="max-w-4xl mx-auto px-6 md:px-10 py-24 md:py-32 text-center space-y-8">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight">
            Ready to upgrade your tech?
          </h2>
          <p className="text-[var(--muted)] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Let's discuss how my services can help your business reduce overhead and increase revenue. Book a free consultation call.
          </p>
          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--background)] text-[var(--foreground)] text-sm font-bold tracking-widest uppercase transition-transform hover:-translate-y-1"
            >
              Start a Project ↗
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
