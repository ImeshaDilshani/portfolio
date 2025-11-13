"use client";

import { useEffect } from "react";

export default function WorkExperiencePage() {
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
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[550px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
            style={{
              backgroundImage: "url('/about/experince.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-950/30 via-black to-gray-950/20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,0,0,0.08),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(0,0,0,0.06),transparent_60%)]" />
        </div>

        <div className="relative z-10 container text-center space-y-4 px-4 animate-fadeInUp">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance text-white hover-text-glow transition-all duration-300">
            Work Experience
          </h1>
        </div>
      </section>

      {/* Content Section with Sidebar */}
      <div className="py-16 md:py-24">
        <div className="container px-4 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Left Sidebar Navigation */}
            <aside className="lg:col-span-1" data-animate="fade-right">
              <div className="sticky top-24 space-y-2">
                <a href="/about" className="block">
                  <h2 className="text-xl font-bold mb-6 text-black dark:text-white hover-text-glow">
                    About
                  </h2>
                </a>
                <nav className="space-y-1">
                  <a
                    href="/about/work-experience"
                    className="block py-2 text-sm text-foreground font-medium hover:text-black dark:hover:text-white transition-all duration-300 uppercase tracking-wide hover:translate-x-2 hover-lift"
                  >
                    WORK EXPERIENCE
                  </a>
                  <a
                    href="/about/ai-research"
                    className="block py-2 text-sm text-muted-foreground hover:text-black dark:hover:text-white transition-all duration-300 uppercase tracking-wide hover:translate-x-2 hover-lift"
                  >
                    MY RESEARCH
                  </a>
                  <a
                    href="/about/presentations"
                    className="block py-2 text-sm text-muted-foreground hover:text-black dark:hover:text-white transition-all duration-300 uppercase tracking-wide hover:translate-x-2 hover-lift"
                  >
                    PRESENTATIONS
                  </a>
                  <a
                    href="/about/data-portfolio"
                    className="block py-2 text-sm text-muted-foreground hover:text-black dark:hover:text-white transition-all duration-300 uppercase tracking-wide hover:translate-x-2 hover-lift"
                  >
                    DATA PORTFOLIO
                  </a>
                  <a
                    href="/about/coding-portfolio"
                    className="block py-2 text-sm text-muted-foreground hover:text-black dark:hover:text-white transition-all duration-300 uppercase tracking-wide hover:translate-x-2 hover-lift"
                  >
                    CODING PORTFOLIO
                  </a>
                  <a
                    href="/about/moocs"
                    className="block py-2 text-sm text-muted-foreground hover:text-black dark:hover:text-white transition-all duration-300 uppercase tracking-wide hover:translate-x-2 hover-lift"
                  >
                    MOOCS
                  </a>
                  <a
                    href="/about/undergraduate-papers"
                    className="block py-2 text-sm text-muted-foreground hover:text-black dark:hover:text-white transition-all duration-300 uppercase tracking-wide hover:translate-x-2 hover-lift"
                  >
                    UNDERGRADUATE PAPERS
                  </a>
                </nav>
              </div>
            </aside>

            {/* Right Content Area */}
            <div className="lg:col-span-3 space-y-12">
              <section data-animate="fade-up">
                <div className="border-l-4 border-purple-500 dark:border-purple-400 pl-4 mb-6 hover:border-purple-600 dark:hover:border-purple-300 transition-colors duration-300">
                  <h2 className="text-3xl font-bold hover-text-glow transition-all duration-300">
                    Atlas Axillia Co. (Pvt) Ltd, Colombo, Sri Lanka
                  </h2>
                  <p className="text-lg text-muted-foreground mt-2">
                    Internship – Production Data | 2024 – 2025
                  </p>
                </div>

                <div className="space-y-4 text-lg leading-relaxed hover-lift transition-all duration-300">
                  <p>
                    Atlas Axillia, a leading stationery brand under Hemas
                    Holdings PLC, is one of Sri Lanka's most respected
                    companies. Known for its high-quality learning tools and
                    innovative products, Atlas has been shaping the learning
                    ecosystem in Sri Lanka for over 60 years.
                  </p>
                  <p>
                    During these couple of months, I worked in production data
                    management, gaining hands-on experience in collecting,
                    analyzing, and reporting production data. I contributed to
                    improving data accuracy and efficiency, supporting
                    decision-making in production processes. This experience
                    allowed me to apply my academic knowledge in a professional
                    setting and strengthened my skills in data analysis,
                    problem-solving, and technical reporting.
                  </p>

                  <div className="mt-6">
                    <h3 className="text-2xl font-semibold mb-4">
                      Key contributions during my internship:
                    </h3>
                    <ul className="list-disc list-inside space-y-2">
                      <li>
                        Developed Production Data Updater software using Node.js
                        and Express.js, improving reporting accuracy.
                      </li>
                      <li>
                        Conducted API testing with Postman and integrated
                        database functionality with Excel export.
                      </li>
                      <li>
                        Created interactive Power BI reports for department
                        heads to support data-driven decisions.
                      </li>
                      <li>
                        Integrated 30-day production data loss into SAP to
                        support OEE (Overall Equipment Effectiveness) processes.
                      </li>
                      <li>
                        Built Loss Tree analysis using SAP BEx Analyzer to
                        identify and prioritize inefficiencies.
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Memories Grid */}
                <div className="mt-10">
                  <h3 className="text-2xl font-semibold mb-6 hover-underline-effect">
                    Memories from Atlas Axillia
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative h-64 rounded-lg overflow-hidden group">
                      <img
                        src="/about/Atlas1.jpeg"
                        alt="Atlas Axillia Team"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <div className="relative h-64 rounded-lg overflow-hidden group">
                      <img
                        src="/about/Atlas2.jpeg"
                        alt="Working on production data"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <div className="relative h-64 rounded-lg overflow-hidden group">
                      <img
                        src="/about/atlas (2).jpg"
                        alt="Power BI Dashboard"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <div className="relative h-64 rounded-lg overflow-hidden group">
                      <img
                        src="/about/atlas.jpeg"
                        alt="Data Analysis Work"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>
                </div>
              </section>

              <section data-animate="fade-up">
                <div className="border-l-4 border-black dark:border-gray-400 pl-4 mb-6 hover:border-gray-800 dark:hover:border-gray-300 transition-colors duration-300">
                  <h2 className="text-3xl font-bold hover-text-glow transition-all duration-300">
                    Freelance Work
                  </h2>
                  <p className="text-lg text-muted-foreground mt-2">
                    2019 - Present
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                  {/* Text Content - Left Side (2 columns) */}
                  <div className="lg:col-span-2 text-lg leading-relaxed space-y-4 hover-lift transition-all duration-300">
                    <p>
                      In the past lives, I worked as a freelance designer,
                      creating visual content, graphics, and designs for clients
                      across different industries. This experience helped me
                      develop creativity, client communication skills, and the
                      ability to deliver projects under deadlines.
                    </p>
                    <p>
                      Currently, I work as a freelance developer on{" "}
                      <a
                        href="https://www.freelancer.com/u/imeshadilshani03"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black dark:text-white hover:underline font-medium hover-highlight"
                      >
                        Freelancer.com
                      </a>
                      , building web and software solutions for clients. I focus
                      on developing data-driven applications, interactive
                      dashboards, and AI-based tools. Freelancing has
                      strengthened my problem-solving skills, project management
                      abilities, and adaptability, while allowing me to work
                      with diverse clients and real-world projects.
                    </p>
                  </div>

                  {/* Logo - Right Side (1 column) */}
                  <div className="lg:col-span-1 flex justify-center lg:justify-end">
                    <div className="w-48 h-48 bg-muted rounded-lg flex items-center justify-center border-2 border-border hover:border-gray-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-gray-500/10">
                      <img
                        src="/about/freelancer.png"
                        alt="Freelancer.com Logo"
                        className="max-w-full max-h-full object-contain p-4 hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>
              </section>

              <section data-animate="fade-up">
                <div className="border-l-4 border-black dark:border-gray-400 pl-4 mb-6 hover:border-gray-800 dark:hover:border-gray-300 transition-colors duration-300">
                  <h2 className="text-3xl font-bold hover-text-glow transition-all duration-300">
                    Mathematics Education Support
                  </h2>
                  <p className="text-lg text-muted-foreground mt-2">
                    Online & In-Person | 2025 – Present
                  </p>
                </div>

                <div className="text-lg leading-relaxed hover-lift transition-all duration-300">
                  <p>
                    I run Mathematics tuition classes for students from grade 6
                    to 11, helping them grasp complex concepts through practical
                    examples and creative problem-solving techniques. This
                    experience has strengthened my communication skills,
                    patience, and ability to simplify challenging topics, making
                    learning engaging and enjoyable for my students.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
