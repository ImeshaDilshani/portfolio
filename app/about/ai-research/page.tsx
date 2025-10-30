"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AIResearchPage() {
  useEffect(() => {
    // Initialize scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    }, observerOptions);

    // Observe all elements with data-animate attribute
    const animatedElements = document.querySelectorAll("[data-animate]");
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      {/* Cover Section */}
      <section className="relative h-[80vh] min-h-[550px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
            style={{
              backgroundImage:
                "url('/data-science-code-on-multiple-monitors.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-950/30 via-black to-purple-950/20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(80,0,180,0.08),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(50,0,120,0.06),transparent_60%)]" />
        </div>

        <div className="relative z-10 container text-center space-y-4 px-4 animate-fadeInUp">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance text-white hover-text-glow transition-all duration-300">
            My Research
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <div className="py-16 md:py-24">
        <div className="container px-4 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <aside className="lg:col-span-1" data-animate="fade-right">
              <div className="sticky top-24 space-y-2">
                <a href="/about" className="block">
                  <h2 className="text-xl font-bold mb-6 text-purple-600 dark:text-purple-400 hover-text-glow">
                    About
                  </h2>
                </a>
                <nav className="space-y-1">
                  <a
                    href="/about/work-experience"
                    className="block py-2 text-sm text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 uppercase tracking-wide hover:translate-x-2 hover-lift"
                  >
                    WORK EXPERIENCE
                  </a>
                  <a
                    href="/about/ai-research"
                    className="block py-2 text-sm text-foreground font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 uppercase tracking-wide hover:translate-x-2 hover-lift"
                  >
                    MY RESEARCH
                  </a>
                  <a
                    href="/about/presentations"
                    className="block py-2 text-sm text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 uppercase tracking-wide hover:translate-x-2 hover-lift"
                  >
                    PRESENTATIONS
                  </a>
                  <a
                    href="/about/data-portfolio"
                    className="block py-2 text-sm text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 uppercase tracking-wide hover:translate-x-2 hover-lift"
                  >
                    DATA PORTFOLIO
                  </a>
                  <a
                    href="/about/coding-portfolio"
                    className="block py-2 text-sm text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 uppercase tracking-wide hover:translate-x-2 hover-lift"
                  >
                    CODING PORTFOLIO
                  </a>
                  <a
                    href="/about/moocs"
                    className="block py-2 text-sm text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 uppercase tracking-wide hover:translate-x-2 hover-lift"
                  >
                    MOOCS
                  </a>
                  <a
                    href="/about/undergraduate-papers"
                    className="block py-2 text-sm text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 uppercase tracking-wide hover:translate-x-2 hover-lift"
                  >
                    UNDERGRADUATE PAPERS
                  </a>
                </nav>
              </div>
            </aside>

            {/* Right Content Area */}
            <div className="lg:col-span-3 space-y-8">
              <div className="space-y-8">
                <section data-animate="fade-up">
                  <p className="text-lg leading-relaxed mb-8 hover-lift transition-all duration-300">
                    Here is the research project I have done in graduate school.
                  </p>

                  {/* Research Image */}
                  <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden mb-8 group">
                    <img
                      src="/ai-writing-assistant-interface.png"
                      alt="NLP Research Project"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Introduction */}
                  <div className="space-y-6 text-lg leading-relaxed">
                    <p>
                      Natural Language Processing (NLP) for low-resource
                      languages presents unique challenges due to limited
                      datasets, dialectal variations, and lack of standardized
                      tools. Developing AI solutions for such languages requires
                      creative approaches to handle data scarcity, noise, and
                      linguistic diversity. My research focused on applying
                      advanced NLP techniques to address these challenges and
                      create practical solutions for real-world communication in
                      Sri Lanka.
                    </p>
                  </div>

                  {/* Main Research Project */}
                  <div className="mt-10 border-l-4 border-primary pl-6">
                    <h3 className="text-2xl font-semibold mb-4">
                      Next-Generation Noisy Robust Speech Translation System
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Supervisor: Dr. Madusha Chandrasena, PhD, Senior Lecturer
                      <br />
                      Department of Computer Systems Engineering, University of
                      Kelaniya
                    </p>

                    <div className="space-y-6 text-lg leading-relaxed">
                      <p>
                        I worked on a Next-Generation Noisy Robust Speech
                        Translation system focused on enabling communication
                        between Sinhala and Tamil speakers in Sri Lanka.
                      </p>

                      <div>
                        <h4 className="text-xl font-semibold mb-4">
                          Background & Motivation
                        </h4>
                        <p className="mb-4">
                          Sri Lanka is a multi-lingual nation where language is
                          key in communication, governance, education and
                          delivery of services to the people. Sinhala and Tamil
                          are considered official languages however its main
                          users belong to different ethnic groups. Monolingual
                          speech represents a high percentage of the population,
                          and this tendency frequently results in the breakdown
                          of communication (both in the formal and informal
                          contexts).
                        </p>
                        <p>
                          This is because the recent developments in speech
                          technology have come up with real-time translation
                          aids, which translate spoken language in real time. It
                          should be noted, though, that most of the available
                          solutions are created on the basis of high-resource
                          languages (e.g., English, Spanish, or Chinese), thus
                          can partially support Sinhala and Tamil. These
                          shortcomings render existing tools to be less
                          efficient and less applicable in Sri Lanka.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-xl font-semibold mb-4">
                          Research Challenges
                        </h4>
                        <p className="mb-4">
                          Major limitation of the research in Sinhala and Tamil
                          speech translation system constructs is creating of
                          large dataset of high-quality annotations. The fact
                          that they are low-resource languages means that they
                          do not have adequate digital infrastructure to develop
                          stable AI models of Automatic Speech Recognition
                          (ASR), Machine Translation (MT), and Text-to-Speech
                          (TTS). The consequences of this are tools that are not
                          as precise and in many cases do not reflect the depth
                          and breadth of these languages.
                        </p>
                        <p className="mb-4">
                          The other drawback is the unacceptable performance in
                          noise. Background noise causes a huge drop in the
                          accuracy of speech recognition in most of the real
                          life backgrounds including those where people work
                          like in hospitals or markets or even when using public
                          transport. The large diversity of dialects and accents
                          all over the country is also a problem that many tools
                          have a hard time coping with.
                        </p>
                        <p>
                          These constraints indicate that speech translation
                          systems, which work robustly in noisy conditions, have
                          to be specifically designed to accommodate Sinhala and
                          Tamil. In this project, these issues are resolved
                          through the attention to real-life practice so that
                          multilingual communication can be enhanced in Sri
                          Lanka.
                        </p>
                      </div>

                      {/* Project Links */}
                      <div className="mt-8 p-6 bg-muted rounded-lg">
                        <h4 className="text-xl font-semibold mb-4">
                          Project Resources
                        </h4>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <span className="font-medium min-w-[140px]">
                              GitHub Repository:
                            </span>
                            <a
                              href="#"
                              className="text-primary hover:underline"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              [Add GitHub Link]
                            </a>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="font-medium min-w-[140px]">
                              Research Paper:
                            </span>
                            <a
                              href="#"
                              className="text-primary hover:underline"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              [Add Research Paper Link]
                            </a>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="font-medium min-w-[140px]">
                              Documentation:
                            </span>
                            <a
                              href="#"
                              className="text-primary hover:underline"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              [Add Documentation Link]
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
