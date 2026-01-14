import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <main>
      {/* Hero Section - Optimized for Performance and Mobile */}
      <section className="relative overflow-hidden pt-8 pb-8 sm:pt-10 sm:pb-10 md:pt-16 md:pb-16 lg:pt-20 lg:pb-24 min-h-[auto] sm:min-h-[450px] md:min-h-[550px]">
        <div className="container px-4 sm:px-6 md:px-8 lg:px-16 max-w-7xl mx-auto">
          <div className="relative">
            {/* Top Label - Full Width */}
            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4 md:mb-5">
              <span className="w-5 sm:w-6 md:w-8 h-[2px] bg-gray-400" aria-hidden="true"></span>
              <span className="uppercase tracking-wider font-medium">Hello! I'm Imesha</span>
            </div>

            {/* Main Headline - LCP Element */}
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight text-black mb-4 sm:mb-6 md:mb-8 font-[family-name:var(--font-adamina)] font-bold max-w-3xl">
              I'm Building Intelligent Software and Data Systems that make an Quality Impact.
            </h1>

            {/* Mobile Image - Shows below headline on mobile */}
            <div className="mb-4 sm:mb-6 lg:hidden">
              <Image
                src="/imesha.webp"
                alt="Imesha Dilshani - Software and Data Engineer"
                width={384}
                height={500}
                className="w-full max-w-[280px] sm:max-w-xs md:max-w-sm mx-auto h-auto object-cover rounded-lg shadow-xl"
                priority
                fetchPriority="high"
                sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, 384px"
              />
            </div>

            {/* Content - Description, Button, Icons */}
            <div className="max-w-xl lg:max-w-2xl space-y-4 md:space-y-5 animate-fadeInUp animation-delay-200 lg:animation-delay-200">
              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-sm max-w-lg">
                Every project is an opportunity to evolve. I’m a developer who actually enjoys the "messy" parts of tech, like untangling complex data or building systems that need to scale. I spend my time at the intersection of software engineering and data science, creating clean, intelligent tools that solve real-world problems without the extra fluff.
              </p>

              {/* CTA Button */}
              <div className="pt-2">
                <Button
                  size="lg"
                  className="rounded-md bg-black hover:bg-gray-800 text-white px-6 py-3 text-sm font-medium transition-all hover:scale-105 w-full sm:w-auto"
                  asChild
                >
                  <Link href="/contact">
                    Let’s talk about your project →
                  </Link>
                </Button>
              </div>

              {/* Services/Skills Icons - Responsive Grid */}
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 sm:gap-3 pt-2 sm:pt-3 max-w-lg">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                  <svg className="w-4 h-4 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span className="font-medium">Full-Stack Development</span>
                </div>

                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                  <svg className="w-4 h-4 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  <span className="font-medium">Data Engineering</span>
                </div>

                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                  <svg className="w-4 h-4 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <span className="font-medium">Mobile App Development</span>
                </div>

                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                  <svg className="w-4 h-4 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                  <span className="font-medium">Process Automation</span>
                </div>

                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-700 sm:col-span-2 md:col-span-1">
                  <svg className="w-4 h-4 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                  <span className="font-medium">Cloud Computing & Deployment</span>
                </div>
              </div>
            </div>

            {/* Desktop Image - Positioned Right */}
            <div className="absolute top-24 lg:top-28 right-0 hidden lg:block">
              <Image
                src="/imesha.webp"
                alt="Imesha Dilshani - Software and Data Engineer"
                width={320}
                height={420}
                className="w-72 xl:w-80 h-auto object-cover rounded-lg shadow-2xl"
                priority
                fetchPriority="high"
                sizes="(min-width: 1280px) 320px, 288px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Life Motto Section */}
      <section className="py-12 sm:py-16 md:py-20 mt-8 sm:mt-12 md:mt-16 bg-gray-50">
        <div className="container px-4 sm:px-6 max-w-4xl mx-auto">
          <h2 className="font-[family-name:var(--font-adamina)] font-bold text-2xl sm:text-3xl md:text-4xl text-center mb-8 sm:mb-10 md:mb-12 text-balance text-black">
            My Life Motto: "Small Steps, Big Systems with Continuous improvements."
          </h2>

          {/* Work Section */}
          <div className="space-y-8 sm:space-y-10 md:space-y-12 mb-8 sm:mb-10 md:mb-12">
            <h3 className="font-[family-name:var(--font-adamina)] text-xl sm:text-2xl font-bold text-left text-black">Work</h3>
            
            <div className="space-y-8 text-gray-700 text-left">
              
              {/* Current Role */}
              <div className="space-y-1">
                <p>
                  Currently, I’m an <span className="font-semibold text-black">Associate Data & Software Engineer</span> at{" "}
                  <span className="font-medium text-black"> 
                    <a
                      href="https://www.wirity.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:no-underline"
                    > Wirity Labs </a></span> (Part-time). Focusing on Software Engineering practices, Data Engineering, and Mobile App Development.
                </p>
              </div>

              {/* Previous Role */}
              <div className="space-y-1">
                <p>
                  Previously, I worked at{" "}
                  <span className="font-medium text-black">
                    <a
                      href="https://www.atlas.lk/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:no-underline"
                    >
                      Atlas Axillia Co. (Pvt) Ltd.
                    </a>
                  </span>{" "}
                  as a Production Data Analyst Intern, where I:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    Built a Production Data Updater using <span className="text-black font-medium">Node.js and Express.js</span> to fix reporting accuracy.
                  </li>
                  <li>
                    Tested APIs with Postman and handled database integrations with Excel exports.
                  </li>
                  <li>
                    Created interactive <span className="text-black font-medium">Power BI dashboards</span> for department heads.
                  </li>
                  <li>
                    Worked with <span className="text-black font-medium">SAP and BEx Analyzer</span> to track production loss and fix inefficiencies.
                  </li>
                </ul>
              </div>

              {/* Freelance */}
              <p>
                In my past lives, I also used to freelance as a designer and I'm currently active as a developer at{" "}
                <a
                  href="https://www.freelancer.com/u/imeshadilshani03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-black underline hover:no-underline"
                >
                  Freelancer.com
                </a>.
              </p>
            </div>
          </div>

          {/* Education Section */}
          <div className="space-y-8 mb-12">
            <h3 className="font-[family-name:var(--font-adamina)] font-medium text-2xl font-bold text-left text-black">Education</h3>
            <div className="space-y-4 text-gray-700 text-left">
              <p>
                Before this, I completed my graduation with a Bachelor's Degree
                in Computer Science specializing in{" "}
                <span className="font-medium text-black">Data Science</span> from the{" "}
                <span className="font-medium text-black">
                  University of Kelaniya, Sri Lanka
                </span>
                , in 2025, where my research lies in{" "}
                <span className="font-medium text-black">
                  AI Solutions for Sinhala and Tamil Communication in Sri Lanka
                </span>
                , aiming to bridge local language barriers with technology.
              </p>
              <p>
                I finished school at{" "}
                <span className="font-medium text-black">
                  President College, Minuwangoda
                </span>
                , in 2019, achieving an A for Mathematics, a B for Chemistry,
                and a C for Physics in the Advanced Level. Before this, I spent
                grades 6 to 11 at{" "}
                <span className="font-medium text-black">
                  Seelewimala Maha Vidyalaya, Minuwangoda
                </span>
                . After getting the best result in the school, I moved to
                President College for higher studies.
              </p>
              <p>
                Before grade 6, I spent 5 years in my village school,{" "}
                <span className="font-medium text-black">Arangawa Primary School</span>
                .
              </p>
            </div>
          </div>

          {/* Side Hustles Section */}
          <div className="space-y-8 mb-12">
            <h3 className="font-[family-name:var(--font-adamina)] font-medium text-2xl font-bold text-left text-black">Side Hustles</h3>
            <div className="space-y-4 text-gray-700 text-left">
              <p>
                I'm currently developing a stock photography portfolio on{" "}
                <span className="font-medium text-black">
                  Adobe Stock, Shutterstock, and Dreamstime
                </span>
                , capturing moments and scenes that tell stories.
              </p>
              <p>
                Recently, I started to complete my little hope that came with me
                from my childhood:{" "}
                <span className="font-medium text-black">book writing</span>, including
                kids' books and self-help books. I hope to publish those in the
                future.
              </p>
              <p>
                I write on <span className="font-medium text-black">Medium</span> and
                my{" "}
                <Link
                  href="/writes"
                  className="font-medium text-black underline hover:no-underline"
                >
                  blog section
                </Link>
                , covering what I learn from my studies and from my life. I also
                conduct{" "}
                <span className="font-medium text-black">mathematics classes</span> for
                students both online and physically.
              </p>
            </div>
          </div>

          {/* Social Section */}
          <div className="space-y-6 sm:space-y-8">
            <h3 className="font-[family-name:var(--font-adamina)] font-medium text-xl sm:text-2xl font-bold text-left text-black">Social</h3>
            <div className="space-y-4 text-gray-700 text-left">
              <p>
                I maintain a list of the books I read on{" "}
                <Link href="/reads" className="font-medium text-black underline hover:no-underline">
                  my Reads page
                </Link>{" "}
                and keep track of my reading. I always look to connect on{" "}
                <a
                  href="https://www.linkedin.com/in/imesha-dilshani-61862422b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-black underline hover:no-underline"
                >
                  LinkedIn
                </a>
                , and I'm reducing distractions from social media.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cards Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container px-4 sm:px-6 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto">
            {/* Card 1 */}
            <Card className="overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src="/CW1.webp"
                  alt="Community work and collaboration activities"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <CardHeader>
                <CardTitle>Community Work</CardTitle>
                <CardDescription>
                  I’m passionate about continuous learning and collaboration. By
                  sharing ideas and supporting others, I aim to build meaningful
                  connections and create a positive impact within the tech
                  community.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="link"
                  className="p-0 h-auto font-semibold"
                  asChild
                >
                  <Link href="/myworks/community">
                    View Community Work <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src="/PL1.webp"
                  alt="Programming languages and tech stack visualization"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <CardHeader>
                <CardTitle>Tech Stack I Use</CardTitle>
                <CardDescription>
                  A comprehensive overview of the technologies, frameworks, and
                  tools I work with. From programming languages to deployment
                  platforms, here's what powers my projects.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="link"
                  className="p-0 h-auto font-semibold"
                  asChild
                >
                  <Link href="/myworks/techstack">
                    Explore Tech Stack <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Card 3 */}
            <Card className="overflow-hidden group hover:shadow-lg transition-shadow sm:col-span-2 lg:col-span-1">
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src="/J1.webp"
                  alt="Journalism and writing - blog articles and insights"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <CardHeader>
                <CardTitle>Journalism</CardTitle>
                <CardDescription>
                  My writings on data science, machine learning, technology and
                  also lessons learned from my life. I share insights and
                  stories focused on making complex things accessible to
                  everyone.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="link"
                  className="p-0 h-auto font-semibold"
                  asChild
                >
                  <Link href="/writes" aria-label="Read Imesha's blog posts and articles">
                    Read Articles <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
