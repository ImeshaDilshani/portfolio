"use client";

import { useEffect } from "react";

export default function AboutPage() {
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
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/about-bg.jpg')",
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

        <div className="relative z-10 container max-w-5xl mx-auto text-center animate-fadeInUp">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/20 rounded-full mb-6">
            <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
              👋 About Me
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 dark:from-violet-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
            Here's How I Grow
          </h1>

          <p className="text-xl md:text-2xl text-foreground/80 mb-4 max-w-3xl mx-auto leading-relaxed">
            Continuous learning and growth through experiences
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            My journey through{" "}
            <span className="text-purple-600 dark:text-purple-400 font-medium">
              professional experience
            </span>
            ,{" "}
            <span className="text-purple-600 dark:text-purple-400 font-medium">
              research
            </span>
            ,{" "}
            <span className="text-purple-600 dark:text-purple-400 font-medium">
              continuous education
            </span>
            , and passion for innovation.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <div className="py-16 md:py-24">
        <div className="container px-4 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Left Sidebar Navigation */}
            <aside
              className="lg:col-span-1 animate-fadeIn"
              data-animate="fade-right"
            >
              <div className="sticky top-24 space-y-2">
                <h2 className="text-xl font-bold mb-6 text-purple-600 dark:text-purple-400 hover-text-glow">
                  About
                </h2>
                <nav className="space-y-1">
                  <a
                    href="/about/work-experience"
                    className="block py-2 text-sm text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 uppercase tracking-wide hover:translate-x-2 hover-lift"
                  >
                    WORK EXPERIENCE
                  </a>
                  <a
                    href="/about/ai-research"
                    className="block py-2 text-sm text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 uppercase tracking-wide hover:translate-x-2 hover-lift"
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
            <div className="lg:col-span-3 space-y-12">
              {/* Introduction Section */}
              <section data-animate="fade-up">
                <h2 className="text-3xl font-bold mb-6 hover-underline-effect">
                  Introduction
                </h2>
                <div className="space-y-4 text-lg leading-relaxed">
                  <p className="hover-lift transition-all duration-300">
                    1. I am passionate about{" "}
                    <span className="text-purple-600 dark:text-purple-400 font-medium hover-highlight cursor-pointer">
                      data science
                    </span>{" "}
                    and{" "}
                    <span className="text-purple-600 dark:text-purple-400 font-medium hover-highlight cursor-pointer">
                      AI-based software development
                    </span>
                    .
                  </p>
                  <p className="hover-lift transition-all duration-300">
                    2. I am very curious and enjoy meeting people with different
                    interests.
                  </p>
                  <p className="hover-lift transition-all duration-300">
                    3. I love to travel and explore new places.
                  </p>
                  <p className="hover-lift transition-all duration-300">
                    4. I enjoy reading books to learn new things.
                  </p>
                  <p className="mt-6 hover-lift transition-all duration-300">
                    Over the past few years, I have built strong skills to
                    prepare for a career in the{" "}
                    <span className="text-purple-600 dark:text-purple-400 font-medium hover-highlight cursor-pointer">
                      tech industry
                    </span>
                    . I have gained practical experience in software
                    development, data science, digital product management, and
                    technical writing.
                  </p>
                </div>
              </section>

              {/* How I Learn from My Childhood Section */}
              <section data-animate="fade-up">
                <h2 className="text-3xl font-bold mb-6 hover-underline-effect">
                  How I Learn from My Childhood
                </h2>
                <div className="space-y-12">
                  {/* Primary School */}
                  <div className="space-y-4" data-animate="fade-up">
                    <div className="border-l-4 border-purple-500 dark:border-purple-400 pl-4 hover:border-purple-600 dark:hover:border-purple-300 transition-colors duration-300">
                      <h3 className="text-2xl font-semibold hover-text-glow transition-all duration-300">
                        Arangawa Sri Dhammarama Primary College
                      </h3>
                      <p className="text-muted-foreground">
                        Grade 1 to 5 • 2004 - 2009
                      </p>
                    </div>
                    <div className="text-lg leading-relaxed">
                      <p className="hover-lift transition-all duration-300">
                        I grew up in a{" "}
                        <span className="text-purple-600 dark:text-purple-400 font-medium hover-highlight cursor-pointer">
                          small village
                        </span>{" "}
                        and attended Minu/Arangawa Sri Dhammarama Primary
                        College. Those early years taught me the value of
                        curiosity, hard work, and learning from the world around
                        me.
                      </p>
                    </div>
                    <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden group">
                      <img
                        src="/arangawa school.jpeg"
                        alt="Minu/Arangawa Sri Dhammarama Primary College"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>

                  {/* Secondary School - O/L */}
                  <div className="space-y-4" data-animate="fade-up">
                    <div className="border-l-4 border-purple-500 dark:border-purple-400 pl-4 hover:border-purple-600 dark:hover:border-purple-300 transition-colors duration-300">
                      <h3 className="text-2xl font-semibold hover-text-glow transition-all duration-300">
                        Seelavimala Maha Vidyalaya, Minuwangoda
                      </h3>
                      <p className="text-muted-foreground">
                        Ordinary Level • Grade 6 to 11 • 2010 - 2015
                      </p>
                    </div>
                    <div className="text-lg leading-relaxed">
                      <p className="hover-lift transition-all duration-300">
                        I worked hard and achieved{" "}
                        <span className="text-purple-600 dark:text-purple-400 font-medium hover-highlight cursor-pointer">
                          excellent results
                        </span>{" "}
                        in my O/L (Ordinary Level) exams. That school was a
                        turning point in my life.
                      </p>
                    </div>
                    <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden group">
                      <img
                        src="/seelavimala.jpeg"
                        alt="Minu/Seelavimala Maha Vidyalaya"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>

                  {/* Advanced Level */}
                  <div className="space-y-4" data-animate="fade-up">
                    <div className="border-l-4 border-purple-500 dark:border-purple-400 pl-4 hover:border-purple-600 dark:hover:border-purple-300 transition-colors duration-300">
                      <h3 className="text-2xl font-semibold hover-text-glow transition-all duration-300">
                        President's College, Minuwangoda
                      </h3>
                      <p className="text-muted-foreground">
                        Advanced Level • Mathematics Stream • 2016 - 2019
                      </p>
                    </div>
                    <div className="text-lg leading-relaxed">
                      <p className="hover-lift transition-all duration-300">
                        During this time, I focused on{" "}
                        <span className="text-purple-600 dark:text-purple-400 font-medium hover-highlight cursor-pointer">
                          Mathematics
                        </span>
                        ,{" "}
                        <span className="text-purple-600 dark:text-purple-400 font-medium hover-highlight cursor-pointer">
                          Physics
                        </span>
                        , and{" "}
                        <span className="text-purple-600 dark:text-purple-400 font-medium hover-highlight cursor-pointer">
                          Chemistry
                        </span>
                        , which helped me develop strong analytical and
                        problem-solving skills. Studying these subjects not only
                        deepened my understanding of logical thinking and
                        scientific concepts but also taught me discipline, time
                        management, and the importance of consistent effort.
                        This period of study laid a strong foundation for my
                        future career in science and data-driven fields.
                      </p>
                    </div>
                    <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden group">
                      <img
                        src="/president college.webp"
                        alt="President's College, Minuwangoda"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>

                  {/* Graphic Design Course */}
                  <div className="space-y-4" data-animate="fade-up">
                    <div className="border-l-4 border-purple-500 dark:border-purple-400 pl-4 hover:border-purple-600 dark:hover:border-purple-300 transition-colors duration-300">
                      <h3 className="text-2xl font-medium hover-text-glow transition-all duration-300">
                        InTech College, Gampaha
                      </h3>
                      <p className="text-muted-foreground">
                        Graphic Design and Advertising Course • 2020 - 2021
                      </p>
                    </div>
                    <div className="text-lg leading-relaxed">
                      <p className="hover-lift transition-all duration-300">
                        While waiting for my Advanced Level results, I enrolled
                        in this course which gave me a solid foundation in{" "}
                        <span className="text-purple-600 dark:text-purple-400 font-medium hover-highlight cursor-pointer">
                          design principles
                        </span>
                        ,{" "}
                        <span className="text-purple-600 dark:text-purple-400 font-medium hover-highlight cursor-pointer">
                          visual communication
                        </span>
                        , and creative thinking. I learned how to create
                        appealing graphics, work with different design tools,
                        and develop concepts for advertising and branding. This
                        experience not only strengthened my creative skills but
                        also taught me the importance of attention to detail,
                        aesthetics, and combining creativity with
                        practicality—skills that have been very useful in both
                        my tech projects and professional work.
                      </p>
                    </div>
                    <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden group">
                      <img
                        src="/intech.jfif"
                        alt="InTech College, Gampaha"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>

                  {/* University - Computer Science */}
                  <div className="space-y-4" data-animate="fade-up">
                    <div className="border-l-4 border-purple-500 dark:border-purple-400 pl-4 hover:border-purple-600 dark:hover:border-purple-300 transition-colors duration-300">
                      <h3 className="text-2xl font-semibold hover-text-glow transition-all duration-300">
                        University of Kelaniya
                      </h3>
                      <p className="text-muted-foreground">
                        BSc (Hons) in Computer Science, specializing in Data
                        Science • 2022 - 2025
                      </p>
                    </div>
                    <div className="text-lg leading-relaxed">
                      <p className="hover-lift transition-all duration-300">
                        After completing my Advanced Level studies and design
                        course, I pursued my degree in{" "}
                        <span className="text-purple-600 dark:text-purple-400 font-medium hover-highlight cursor-pointer">
                          Computer Science
                        </span>
                        . During this time, I gained strong theoretical
                        knowledge and practical skills in programming, data
                        analysis, machine learning, and AI-driven software
                        development. I worked on various projects that involved
                        data processing, predictive modeling, and
                        problem-solving using real-world datasets. This degree
                        not only enhanced my technical expertise but also helped
                        me develop critical thinking, research abilities, and
                        teamwork skills—preparing me for a successful career in
                        the tech industry.
                      </p>
                    </div>
                    <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden group">
                      <img
                        src="/data-science-code-on-multiple-monitors.jpg"
                        alt="University of Kelaniya"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
