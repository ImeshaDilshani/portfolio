import Link from "next/link";
import Image from "next/image";

export default function WorkExperiencePage() {
  return (
    <main>
      {/* ── HEADER ──────────────────────────────────────── */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-10">
            <p className="text-xs font-medium tracking-widest uppercase text-[var(--muted-foreground)] pt-1">
              Work Experience
            </p>
            <div className="space-y-4 max-w-2xl">
              <h1 className="text-4xl md:text-5xl text-[var(--foreground)]">Professional Journey</h1>
              <p className="text-[var(--muted-foreground)] leading-relaxed">
                Exploring my professional path through various roles in software development, data analytics, and technology innovation.
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
                const isActive = item.href === "/about/work-experience";
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

            {/* Sterling BPO */}
            <section className="space-y-6">
              <div className="border-b border-[var(--border)] pb-4 space-y-1">
                <h2 className="text-2xl text-[var(--foreground)]"><a href="http://www.sterlingbpo.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">Sterling BPO Solutions (Pvt.) Ltd ↗</a></h2>
                <p className="text-sm font-medium tracking-widest uppercase text-[var(--muted-foreground)]">Associate Software Engineer · 2025 – Present</p>
              </div>
              <div className="space-y-4 text-[var(--muted-foreground)] leading-relaxed">
                <p>
                  Established in 2011 in Sri Lanka, Sterling BPO is a respected IT-BPM service provider delivering desktop, web, and cloud applications, enterprise solutions, and innovative AI & AR app development to international clients across Australia and the UAE.
                </p>
                <p>
                  In my role as an Associate Software Engineer, I develop and implement scalable software and mobile solutions, collaborating with cross-functional teams.
                </p>
                <div className="pt-2">
                  <p className="text-[var(--foreground)] font-medium mb-2">Key contributions:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Delivered production-ready mobile web and backend services using modern frameworks.</li>
                    <li>Implemented RESTful APIs and integrated external services to streamline client workflows.</li>
                    <li>Improved performance, test coverage, and documentation.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Wirity Labs */}
            <section className="space-y-6">
              <div className="border-b border-[var(--border)] pb-4 space-y-1">
                <h2 className="text-2xl text-[var(--foreground)]"><a href="https://wirity.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">Wirity Labs ↗</a></h2>
                <p className="text-sm font-medium tracking-widest uppercase text-[var(--muted-foreground)]">Associate Software & Data Engineer · 2025 – Present (Part Time)</p>
              </div>
              <div className="space-y-4 text-[var(--muted-foreground)] leading-relaxed">
                <p>
                  Wirity Labs is a dedicated technology partner focused on designing, developing, and deploying software solutions that translate business challenges into powerful, scalable, and intelligent applications.
                </p>
                <p>
                  During my time here, I worked on software and mobile development, API integration, and data engineering, contributing to the delivery of high-performance scalable applications that support data-driven decision-making.
                </p>
              </div>
            </section>

            {/* Atlas Axillia */}
            <section className="space-y-6">
              <div className="border-b border-[var(--border)] pb-4 space-y-1">
                <h2 className="text-2xl text-[var(--foreground)]"><a href="https://www.atlas.lk" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">Atlas Axillia Co. (Pvt) Ltd ↗</a></h2>
                <p className="text-sm font-medium tracking-widest uppercase text-[var(--muted-foreground)]">Internship – Production Data Analyst · 2024 – 2025</p>
              </div>
              <div className="space-y-4 text-[var(--muted-foreground)] leading-relaxed">
                <p>
                  Atlas Axillia, a leading stationery brand under Hemas Holdings PLC, is known for its high-quality learning tools and has been shaping the learning ecosystem in Sri Lanka for over 60 years.
                </p>
                <p>
                  I worked in production data management, gaining hands-on experience in collecting, analyzing, and reporting production data. I contributed to improving data accuracy and efficiency, supporting decision-making in production processes.
                </p>
                <div className="pt-2">
                  <p className="text-[var(--foreground)] font-medium mb-2">Key contributions:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Developed Production Data Updater software using Node.js and Express.js, improving reporting accuracy.</li>
                    <li>Conducted API testing with Postman and integrated database functionality with Excel export.</li>
                    <li>Created interactive Power BI reports for department heads to support data-driven decisions.</li>
                    <li>Integrated 30-day production data loss into SAP to support OEE processes.</li>
                    <li>Built Loss Tree analysis using SAP BEx Analyzer to identify and prioritize inefficiencies.</li>
                  </ul>
                </div>
              </div>

              {/* Photos */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                {["/about/Atlas1.webp", "/about/Atlas2.webp", "/about/atlas (2).webp", "/about/atlas.webp"].map((src, i) => (
                  <div key={i} className="relative aspect-video bg-[var(--muted)] border border-[var(--border)] overflow-hidden group">
                    <Image src={src} fill alt={`Atlas Memory ${i+1}`} className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                ))}
              </div>
            </section>

            {/* Freelance Work */}
            <section className="space-y-6">
              <div className="border-b border-[var(--border)] pb-4 space-y-1">
                <h2 className="text-2xl text-[var(--foreground)]">Freelance Developer & Designer</h2>
                <p className="text-sm font-medium tracking-widest uppercase text-[var(--muted-foreground)]">2019 – Present</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-[1fr_160px] gap-8">
                <div className="space-y-4 text-[var(--muted-foreground)] leading-relaxed">
                  <p>
                    I have worked as a freelance designer, creating visual content, graphics, and designs for clients across different industries.
                  </p>
                  <p>
                    Currently, I work as a freelance developer on <a href="https://www.freelancer.com/u/imeshadilshani03" target="_blank" rel="noopener noreferrer" className="text-[var(--foreground)] underline underline-offset-2 hover:opacity-70">Freelancer.com</a>, building web and software solutions for clients. I focus on developing data-driven applications, interactive dashboards, and AI-based tools.
                  </p>
                </div>
                <div className="bg-[var(--card)] border border-[var(--border)] flex items-center justify-center p-6 group">
                  <Image src="/about/freelancer.webp" width={100} height={100} alt="Freelancer" className="object-contain grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
              </div>
            </section>

            {/* Math Education Support */}
            <section className="space-y-6">
              <div className="border-b border-[var(--border)] pb-4 space-y-1">
                <h2 className="text-2xl text-[var(--foreground)]">Mathematics Education Support</h2>
                <p className="text-sm font-medium tracking-widest uppercase text-[var(--muted-foreground)]">Online & In-Person · 2025 – Present</p>
              </div>
              <div className="space-y-4 text-[var(--muted-foreground)] leading-relaxed">
                <p>
                  I run Mathematics tuition classes for students from grade 6 to 11, helping them grasp complex concepts through practical examples and creative problem-solving techniques.
                </p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </main>
  );
}
