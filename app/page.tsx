import Link from "next/link";
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
      {/* Hero Section */}
      <section className="relative flex items-center justify-center overflow-hidden pt-24 pb-20 md:pt-32 md:pb-32">
        <div className="relative z-10 container px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
              {/* Profile Image - Left Side */}
              <div className="flex-shrink-0 animate-scaleIn">
                <div className="relative">
                  {/* Decorative elements */}
                  <div className="absolute -inset-3 bg-gradient-to-r from-purple-600/20 to-purple-800/20 rounded-full blur-xl"></div>

                  {/* Profile Image */}
                  <img
                    src="/profile.jpeg"
                    alt="Imesha Dilshani"
                    className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full object-cover border-4 border-purple-500/40 shadow-2xl shadow-purple-900/50 ring-4 ring-purple-900/20"
                  />
                </div>
              </div>

              <div className="flex-1 max-w-2xl text-center md:text-left space-y-6">
                <div className="space-y-3 animate-fadeInUp">
                  {/* Available for Work Badge */}
                  <div className="flex justify-center md:justify-start mb-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 backdrop-blur-sm">
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                      </span>
                      <span className="text-green-400 text-sm font-medium">
                        Available for Work
                      </span>
                    </div>
                  </div>

                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                    Hey, I'm{" "}
                    <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                      Imesha Dilshani
                    </span>
                  </h1>

                  <p className="text-xl md:text-2xl text-purple-200/70 font-light leading-relaxed">
                    Solo Developer | Data • Design • Development
                  </p>
                </div>

                <div className="space-y-3 animate-fadeInUp animation-delay-200">
                  <p className="text-lg text-white/70 leading-relaxed max-w-2xl mx-auto md:mx-0">
                    A creative problem-solver in{" "}
                    <span className="text-purple-300 font-medium">
                      Software Development
                    </span>
                    ,{" "}
                    <span className="text-purple-300 font-medium">
                      Data Science
                    </span>
                    , and{" "}
                    <span className="text-purple-300 font-medium">Design</span>
                  </p>

                  <div className="flex items-center justify-center md:justify-start gap-3 text-purple-300/80 font-mono text-sm">
                    <span className="w-2 h-2 bg-purple-300 rounded-full animate-pulse"></span>
                    <span>Quality • Product • Community</span>
                  </div>
                </div>

                <div className="space-y-5 pt-2 animate-fadeInUp animation-delay-400">
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                    <Button
                      size="lg"
                      className="rounded-full bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white border-0 shadow-lg shadow-purple-900/50 transition-all hover:scale-105 gap-2"
                      asChild
                    >
                      <a href="/cv.pdf" download>
                        <Download className="h-4 w-4" />
                        Download CV
                      </a>
                    </Button>

                    <div className="flex items-center gap-3">
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full bg-purple-950/30 border-purple-800/40 hover:bg-purple-900/40 hover:border-purple-700/60 backdrop-blur-sm transition-all hover:scale-110"
                        asChild
                      >
                        <a
                          href="https://github.com/ImeshaDilshani"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub"
                        >
                          <Github className="h-5 w-5 text-white" />
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full bg-purple-950/30 border-purple-800/40 hover:bg-purple-900/40 hover:border-purple-700/60 backdrop-blur-sm transition-all hover:scale-110"
                        asChild
                      >
                        <a
                          href="www.linkedin.com/in/imesha-dilshani-61862422b"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="LinkedIn"
                        >
                          <Linkedin className="h-5 w-5 text-white" />
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full bg-purple-950/30 border-purple-800/40 hover:bg-purple-900/40 hover:border-purple-700/60 backdrop-blur-sm transition-all hover:scale-110"
                        asChild
                      >
                        <a
                          href="https://x.com/ImeshaDilshani3"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Twitter"
                        >
                          <Twitter className="h-5 w-5 text-white" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Life Motto Section */}
      <section className="py-16 md:py-20 mt-16">
        <div className="container px-4 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">
            My Life Motto: "Small Steps, Big Systems."
          </h2>

          {/* Work Section */}
          <div className="space-y-8 mb-12">
            <h3 className="text-2xl font-bold text-left">Work</h3>
            <div className="space-y-4 text-muted-foreground text-left">
              <p>
                Previously, I have worked at{" "}
                <span className="text-purple-300">
                  <a
                    href="https://www.atlas.lk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-300 hover:underline"
                  >
                    Atlas Axillia Co. (Pvt) Ltd.
                  </a>
                </span>{" "}
                as a Production Data Intern:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Contributed to Production Data Updater software (Node.js,
                  Express.js), improving reporting accuracy
                </li>
                <li>
                  Conducted API testing with Postman and integrated database
                  functionality with Excel export
                </li>
                <li>
                  Developed interactive Power BI reports for department heads
                </li>
                <li>
                  Integrated 30-day production data loss into SAP supporting OEE
                  processes
                </li>
                <li>
                  Built Loss Tree analysis with SAP BEx Analyzer to prioritize
                  inefficiencies
                </li>
              </ul>
              <p>
                In my past lives, I also used to freelance as a designer and
                currently as a developer at{" "}
                <a
                  href="https://www.freelancer.com/u/imeshadilshani03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-300 hover:underline"
                >
                  Freelancer.com
                </a>
                .
              </p>
            </div>
          </div>

          {/* Education Section */}
          <div className="space-y-8 mb-12">
            <h3 className="text-2xl font-bold text-left">Education</h3>
            <div className="space-y-4 text-muted-foreground text-left">
              <p>
                Before this, I completed my graduation with a Bachelor's Degree
                in Computer Science specializing in{" "}
                <span className="text-purple-300">Data Science</span> from the{" "}
                <span className="text-purple-300">
                  University of Kelaniya, Sri Lanka
                </span>
                , in 2025, where my research lies in{" "}
                <span className="text-purple-300">
                  AI Solutions for Sinhala and Tamil Communication in Sri Lanka
                </span>
                , aiming to bridge local language barriers with technology.
              </p>
              <p>
                I finished school at{" "}
                <span className="text-purple-300">
                  President College, Minuwangoda
                </span>
                , in 2019, achieving an A for Mathematics, a B for Chemistry,
                and a C for Physics in the Advanced Level. Before this, I spent
                grades 6 to 11 at{" "}
                <span className="text-purple-300">
                  Seelewimala Maha Vidyalaya, Minuwangoda
                </span>
                . After getting the best result in the school, I moved to
                President College for higher studies.
              </p>
              <p>
                Before grade 6, I spent 5 years in my village school,{" "}
                <span className="text-purple-300">Arangawa Primary School</span>
                .
              </p>
            </div>
          </div>

          {/* Side Hustles Section */}
          <div className="space-y-8 mb-12">
            <h3 className="text-2xl font-bold text-left">Side Hustles</h3>
            <div className="space-y-4 text-muted-foreground text-left">
              <p>
                I'm currently developing a stock photography portfolio on{" "}
                <span className="text-purple-300">
                  Adobe Stock, Shutterstock, and Dreamstime
                </span>
                , capturing moments and scenes that tell stories.
              </p>
              <p>
                Recently, I started to complete my little hope that came with me
                from my childhood:{" "}
                <span className="text-purple-300">book writing</span>, including
                kids' books and self-help books. I hope to publish those in the
                future.
              </p>
              <p>
                I write on <span className="text-purple-300">Medium</span> and
                my{" "}
                <Link
                  href="/writes"
                  className="text-purple-300 hover:underline"
                >
                  blog section
                </Link>
                , covering what I learn from my studies and from my life. I also
                conduct{" "}
                <span className="text-purple-300">mathematics classes</span> for
                students both online and physically.
              </p>
            </div>
          </div>

          {/* Social Section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-left">Social</h3>
            <div className="space-y-4 text-muted-foreground text-left">
              <p>
                I maintain a list of the books I read on{" "}
                <Link href="/reads" className="text-purple-300 hover:underline">
                  Reads
                </Link>{" "}
                and keep track of my reading. I always look to connect on{" "}
                <a
                  href="www.linkedin.com/in/imesha-dilshani-61862422b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-300 hover:underline"
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
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto justify-items-center">
            <Card className="overflow-hidden group hover:shadow-lg transition-shadow animate-card card-delay-1">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src="/CW1.jpg"
                  alt="Community Work"
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
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

            <Card className="overflow-hidden group hover:shadow-lg transition-shadow animate-card card-delay-2">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src="/PL1.jpg"
                  alt="Tech Stack"
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
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

            <Card className="overflow-hidden group hover:shadow-lg transition-shadow animate-card card-delay-3">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src="/J1.jpg"
                  alt="Journalism"
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
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
