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
import { ArrowRight, Github, Linkedin, Twitter, Download } from "lucide-react";

export default function HomePage() {
  return (
    <main>
      {/* Hero Section - Minimal Design */}
      <section className="relative overflow-hidden pt-12 pb-12 md:pt-20 md:pb-20 lg:pt-22 lg:pb-32 min-h-[500px] md:min-h-[650px]">
        <div className="container px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          <div className="relative">
            {/* Top Label - Full Width */}
            <div className="flex items-center gap-2 text-xs md:text-sm text-gray-400 mb-4 md:mb-5 animate-fadeInUp">
              <span className="w-6 md:w-8 h-[2px] bg-gray-300"></span>
              <span className="uppercase tracking-wider font-medium">Hello! I'm Imesha</span>
            </div>

            {/* Main Headline - Responsive */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl leading-tight text-black mb-6 md:mb-8 animate-fadeInUp animation-delay-100 font-[family-name:var(--font-adamina)] font-bold">
              I'm Building Intelligent Software and Data Systems that make an Quality Impact.
            </h1>

            {/* Mobile Image - Shows below headline on mobile */}
            <div className="mb-6 lg:hidden animate-fadeInUp animation-delay-200">
              <Image
                src="/imesha.png"
                alt="Imesha Dilshani"
                width={384}
                height={500}
                className="w-full max-w-sm mx-auto h-auto object-cover rounded-lg shadow-2xl"
                priority
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

              {/* Services/Skills Icons - Compact Layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 max-w-lg">
                <div className="flex items-center gap-2 text-xs text-gray-700">
                  <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span className="font-medium">Full-Stack Development</span>
                </div>

                <div className="flex items-center gap-2 text-xs text-gray-700">
                  <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  <span className="font-medium">Data Engineering </span>
                </div>

                <div className="flex items-center gap-2 text-xs text-gray-700">
                  <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <span className="font-medium">Mobile App Development</span>
                </div>

                <div className="flex items-center gap-2 text-xs text-gray-700">
                  <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                  <span className="font-medium">Process Automation</span>
                </div>

                <div className="flex items-center gap-2 text-xs text-gray-700">
                  <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                  <span className="font-medium">Cloud Computing & Deployment</span>
                </div>
              </div>
            </div>

            {/* Image - Positioned Right, Aligned with Description */}
            <div className="absolute top-32 right-0 hidden lg:block animate-fadeInUp animation-delay-300">
              <Image
                src="/imesha.png"
                alt="Imesha Dilshani"
                width={320}
                height={420}
                className="w-80 h-auto object-cover rounded-lg shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Life Motto Section */}
      <section className="py-16 md:py-20 mt-16 bg-gray-50">
        <div className="container px-4 max-w-4xl mx-auto">
          <h2 className="font-[family-name:var(--font-adamina)] font-bold text-3xl md:text-4xl text-center mb-12 text-balance text-black">
            My Life Motto: "Small Steps, Big Systems with Continuous improvements."
          </h2>

          {/* Work Section */}
          <div className="space-y-12 mb-12">
            <h3 className="font-[family-name:var(--font-adamina)] text-2xl font-bold text-left text-black">Work</h3>
            
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
          <div className="space-y-8">
            <h3 className="font-[family-name:var(--font-adamina)] font-medium text-2xl font-bold text-left text-black">Social</h3>
            <div className="space-y-4 text-gray-700 text-left">
              <p>
                I maintain a list of the books I read on{" "}
                <Link href="/reads" className="font-medium text-black underline hover:no-underline">
                  Reads
                </Link>{" "}
                and keep track of my reading. I always look to connect on{" "}
                <a
                  href="www.linkedin.com/in/imesha-dilshani-61862422b"
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
      <section className="py-16 md:py-20">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {/* Card 1 */}
            <Card className="overflow-hidden group hover:shadow-lg transition-shadow animate-card card-delay-1">
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src="/CW1.jpg"
                  alt="Community Work"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
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
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="overflow-hidden group hover:shadow-lg transition-shadow animate-card card-delay-2">
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src="/PL1.jpg"
                  alt="Tech Stack"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
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
                    Read Them <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Card 3 */}
            <Card className="overflow-hidden group hover:shadow-lg transition-shadow animate-card card-delay-3">
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src="/J1.jpg"
                  alt="Journalism"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
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
                  <Link href="/writes">
                    Check Them Out <ArrowRight className="ml-2 h-4 w-4" />
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
