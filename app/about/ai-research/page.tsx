import Link from "next/link";
import Image from "next/image";

export default function AIResearchPage() {
  return (
    <main>
      {/* ── HEADER ──────────────────────────────────────── */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-10">
            <p className="text-xs font-medium tracking-widest uppercase text-[var(--muted-foreground)] pt-1">
              My Research
            </p>
            <div className="space-y-4 max-w-2xl">
              <h1 className="text-4xl md:text-5xl text-[var(--foreground)]">AI & Machine Learning</h1>
              <p className="text-[var(--muted-foreground)] leading-relaxed">
                My research focuses on artificial intelligence, machine learning, and data-driven solutions to real-world problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SIDEBAR + CONTENT ───────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-10 py-16 md:py-20">

          {/* Sidebar Nav */}
          <aside className="lg:self-start lg:sticky lg:top-20">
            <nav className="space-y-0">
              <p className="text-xs font-medium tracking-widest uppercase text-[var(--muted-foreground)] mb-4">Sections</p>
              {[
                { label: "About", href: "/about" },
                { label: "Work Experience", href: "/about/work-experience" },
                { label: "My Research", href: "/about/ai-research" },
                { label: "Presentations", href: "/about/presentations" },
                { label: "MOOCs", href: "/about/moocs" },
                { label: "Undergraduate Papers", href: "/about/undergraduate-papers" },
              ].map((item) => {
                const isActive = item.href === "/about/ai-research";
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block py-2 text-sm transition-colors border-b border-transparent ${
                      isActive 
                        ? "text-[var(--foreground)] font-medium" 
                        : "text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:border-[var(--border)]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </aside>

          {/* Main Content */}
          <div className="space-y-20">

            <section className="space-y-6">
              <div className="relative aspect-video border border-[var(--border)]">
                <Image src="/research/up1.webp" fill alt="NLP Research" className="object-cover grayscale hover:grayscale-0 transition-all duration-500" />
              </div>

              <div className="space-y-4 text-[var(--muted-foreground)] leading-relaxed">
                <p className="text-[var(--foreground)] text-lg">
                  Here is the research project I led during my graduate studies.
                </p>
                <p>
                  Natural Language Processing (NLP) for low-resource languages presents unique challenges due to limited datasets, dialectal variations, and lack of standardized tools. Developing AI solutions for such languages requires creative approaches to handle data scarcity, noise, and linguistic diversity. My research focused on applying advanced NLP techniques to address these challenges and create practical solutions for real-world communication in Sri Lanka.
                </p>
              </div>
            </section>

            <section className="space-y-6">
              <div className="border-b border-[var(--border)] pb-4 space-y-1">
                <h2 className="text-2xl text-[var(--foreground)]">Next-Generation Noisy Robust Speech Translation System</h2>
                <p className="text-sm font-medium tracking-widest uppercase text-[var(--muted-foreground)]">Supervisor: Dr. Madusha Chandrasena, PhD · University of Kelaniya</p>
              </div>

              <div className="space-y-8 text-[var(--muted-foreground)] leading-relaxed">
                <p>
                  I worked on a Next-Generation Noisy Robust Speech Translation system focused on enabling communication between Sinhala and Tamil speakers in Sri Lanka.
                </p>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium text-[var(--foreground)]">Background & Motivation</h3>
                  <p>
                    Sri Lanka is a multi-lingual nation where language is key in communication, governance, education, and delivery of services. Sinhala and Tamil are official languages, yet their main users belong to different ethnic groups. Monolingual speech represents a high percentage of the population, leading frequently to a breakdown of communication.
                  </p>
                  <p>
                    Most available real-time translation tools are created for high-resource languages (e.g., English, Spanish, or Chinese). These shortcomings render existing tools less efficient and less applicable in Sri Lanka.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium text-[var(--foreground)]">Research Challenges</h3>
                  <p>
                    The major limitation in building Sinhala and Tamil speech translation systems is creating large datasets of high-quality annotations. As low-resource languages, they lack the digital infrastructure needed to develop stable models of Automatic Speech Recognition (ASR), Machine Translation (MT), and Text-to-Speech (TTS). 
                  </p>
                  <p>
                    Another central drawback is poor model performance in background noise. Background noise limits ASR accuracy in hospitals, markets, and transit systems where dialect diversity intersects with unpredictable noise profiles. 
                  </p>
                  <p>
                    These constraints demanded that speech translation solutions designed for Sri Lanka be explicitly robust against noise. This project resolves these issues by analyzing real-life environmental conditions, directly improving multilingual communication robustness across Sri Lanka.
                  </p>
                </div>

                {/* Links */}
                <div className="mt-8 border border-[var(--border)] p-8 space-y-4">
                  <p className="text-xs font-medium tracking-widest uppercase text-[var(--foreground)]">Project Resources</p>
                  <div className="grid gap-2 text-sm">
                    <a href="https://github.com/SpeechChain-LK" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:underline underline-offset-2">
                       <span className="w-40 text-[var(--muted-foreground)] shrink-0">GitHub Repository:</span> 
                       <span className="text-[var(--foreground)] text-ellipsis overflow-hidden">SpeechChain-LK ↗</span>
                    </a>
                    <a href="https://ieeexplore.ieee.org/document/11030975" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:underline underline-offset-2">
                       <span className="w-40 text-[var(--muted-foreground)] shrink-0">Research Review Paper:</span> 
                       <span className="text-[var(--foreground)] text-ellipsis overflow-hidden">IEEE Xplore Link ↗</span>
                    </a>
                    <a href="https://drive.google.com/file/d/1iqoZjSOsXGJWYhiGUSSAmXLGzmNA6XTC/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:underline underline-offset-2">
                       <span className="w-40 text-[var(--muted-foreground)] shrink-0">Thesis:</span> 
                       <span className="text-[var(--foreground)] text-ellipsis overflow-hidden">Google Drive PDF ↗</span>
                    </a>
                  </div>
                </div>
              </div>

            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
