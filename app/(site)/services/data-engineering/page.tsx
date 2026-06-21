import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Engineering & Automation | Imesha Dilshani",
  description: "Custom data pipelines and workflow automations to streamline operations.",
};

export default function DataEngineeringService() {
  return (
    <main>
      <section className="border-b border-[var(--border)] bg-[var(--muted)]/20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex px-3 py-1 bg-[var(--foreground)] text-[var(--background)] text-xs font-bold tracking-widest uppercase mb-4">
              Service Detail
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-[var(--foreground)] tracking-tight">
              Data Engineering & Automation
            </h1>
            <p className="text-lg md:text-xl text-[var(--muted-foreground)] leading-relaxed">
              Stop wasting hours on manual work. I build custom data pipelines and workflow automations to streamline your operations, reduce overhead, and surface actionable insights.
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
                  <strong className="block text-[var(--foreground)]">ETL Data Pipelines</strong>
                  <span className="text-sm text-[var(--muted-foreground)]">Extract, transform, and load data from various sources into a centralized warehouse.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--muted-foreground)]">✦</span>
                <div>
                  <strong className="block text-[var(--foreground)]">Business Dashboards</strong>
                  <span className="text-sm text-[var(--muted-foreground)]">Real-time visualizations and analytics to make informed decisions.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--muted-foreground)]">✦</span>
                <div>
                  <strong className="block text-[var(--foreground)]">Workflow Automation</strong>
                  <span className="text-sm text-[var(--muted-foreground)]">Replace repetitive manual tasks with robust scripts and integrations.</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-[var(--muted)]/10 p-8 border border-[var(--border)]">
            <h3 className="text-lg font-medium mb-4">The Impact</h3>
            <ul className="space-y-3 text-sm text-[var(--muted-foreground)]">
              <li><strong className="text-[var(--foreground)]">Save Time:</strong> Automate hundreds of hours of manual data entry per month.</li>
              <li><strong className="text-[var(--foreground)]">Reduce Errors:</strong> Eliminate human error from critical business reporting.</li>
              <li><strong className="text-[var(--foreground)]">Scale Faster:</strong> Build a data foundation that supports rapid company growth without breaking.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[var(--foreground)] text-[var(--background)]">
        <div className="max-w-4xl mx-auto px-6 md:px-10 py-24 text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight">
            Ready to automate your workflows?
          </h2>
          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--background)] text-[var(--foreground)] text-sm font-bold tracking-widest uppercase transition-transform hover:-translate-y-1"
            >
              Discuss Your Project ↗
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
