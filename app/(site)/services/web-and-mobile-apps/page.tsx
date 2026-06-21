import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web & Mobile Apps | Imesha Dilshani",
  description: "Custom web and mobile app development services.",
};

export default function WebMobileAppsService() {
  return (
    <main>
      <section className="border-b border-[var(--border)] bg-[var(--muted)]/20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex px-3 py-1 bg-[var(--foreground)] text-[var(--background)] text-xs font-bold tracking-widest uppercase mb-4">
              Service Detail
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-[var(--foreground)] tracking-tight">
              Web & Mobile Apps
            </h1>
            <p className="text-lg md:text-xl text-[var(--muted-foreground)] leading-relaxed">
              I build fast, reliable, and beautifully designed applications tailored to engage your users and drive sales. From high-performance web frontends to cross-platform mobile apps.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-medium mb-6">What I Provide</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-[var(--muted-foreground)]">✦</span>
                <div>
                  <strong className="block text-[var(--foreground)]">Custom Cross-Platform Solutions</strong>
                  <span className="text-sm text-[var(--muted-foreground)]">Reach users on iOS, Android, and Web using a unified codebase.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--muted-foreground)]">✦</span>
                <div>
                  <strong className="block text-[var(--foreground)]">High Performance & SEO</strong>
                  <span className="text-sm text-[var(--muted-foreground)]">Blazing fast load times and optimized architecture to rank higher on search engines.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--muted-foreground)]">✦</span>
                <div>
                  <strong className="block text-[var(--foreground)]">Secure & Scalable Architecture</strong>
                  <span className="text-sm text-[var(--muted-foreground)]">Future-proof backends that scale effortlessly with your user base.</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-[var(--muted)]/10 p-8 border border-[var(--border)]">
            <h3 className="text-lg font-medium mb-4">The Process</h3>
            <ol className="list-decimal list-inside space-y-3 text-sm text-[var(--muted-foreground)]">
              <li><strong className="text-[var(--foreground)]">Discovery:</strong> Understanding your business needs and target audience.</li>
              <li><strong className="text-[var(--foreground)]">Prototyping:</strong> Designing wireframes and interactive prototypes.</li>
              <li><strong className="text-[var(--foreground)]">Development:</strong> Writing clean, maintainable code.</li>
              <li><strong className="text-[var(--foreground)]">Testing & QA:</strong> Ensuring bug-free performance across devices.</li>
              <li><strong className="text-[var(--foreground)]">Deployment:</strong> Smooth launch to App Stores and web hosting.</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-[var(--foreground)] text-[var(--background)]">
        <div className="max-w-4xl mx-auto px-6 md:px-10 py-24 text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight">
            Ready to build your app?
          </h2>
          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--background)] text-[var(--foreground)] text-sm font-bold tracking-widest uppercase transition-transform hover:-translate-y-1"
            >
              Get a Quote ↗
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
