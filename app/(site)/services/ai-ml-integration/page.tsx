import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI & ML Integration | Imesha Dilshani",
  description: "Leverage intelligent models to outpace your competitors.",
};

export default function AIMLIntegrationService() {
  return (
    <main>
      <section className="border-b border-[var(--border)] bg-[var(--muted)]/20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex px-3 py-1 bg-[var(--foreground)] text-[var(--background)] text-xs font-bold tracking-widest uppercase mb-4">
              Service Detail
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-[var(--foreground)] tracking-tight">
              AI & ML Integration
            </h1>
            <p className="text-lg md:text-xl text-[var(--muted-foreground)] leading-relaxed">
              Leverage intelligent models to personalize user experiences, predict market trends, and outpace your competitors. Let's integrate cutting-edge AI into your existing products.
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
                  <strong className="block text-[var(--foreground)]">Generative AI Solutions</strong>
                  <span className="text-sm text-[var(--muted-foreground)]">Integrate LLMs to generate content, summarize data, or create specialized agents.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--muted-foreground)]">✦</span>
                <div>
                  <strong className="block text-[var(--foreground)]">NLP & Custom Chatbots</strong>
                  <span className="text-sm text-[var(--muted-foreground)]">Build intelligent customer support bots trained on your company's knowledge base.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--muted-foreground)]">✦</span>
                <div>
                  <strong className="block text-[var(--foreground)]">Predictive Modeling</strong>
                  <span className="text-sm text-[var(--muted-foreground)]">Forecast sales, predict customer churn, and optimize pricing dynamically.</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-[var(--muted)]/10 p-8 border border-[var(--border)]">
            <h3 className="text-lg font-medium mb-4">Why Invest in AI?</h3>
            <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-4">
              AI isn't just a buzzword; it's a competitive necessity. By integrating machine learning into your workflows, you can provide personalized experiences at scale, reduce operational bottlenecks, and uncover insights that human analysts might miss.
            </p>
            <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
              Whether you need a custom RAG (Retrieval-Augmented Generation) pipeline or a simple OpenAI integration, I can bridge the gap between complex models and user-friendly software.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--foreground)] text-[var(--background)]">
        <div className="max-w-4xl mx-auto px-6 md:px-10 py-24 text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight">
            Ready to integrate AI?
          </h2>
          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--background)] text-[var(--foreground)] text-sm font-bold tracking-widest uppercase transition-transform hover:-translate-y-1"
            >
              Book a Strategy Call ↗
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
