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

export default function StartHerePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[550px] flex items-center justify-center overflow-hidden -mb-16">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-950/30 via-black to-purple-950/20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(80,0,180,0.08),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(50,0,120,0.06),transparent_60%)]" />
        </div>

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

              {/* Content - Right Side */}
              <div className="flex-1 max-w-2xl text-center md:text-left space-y-6">
                <div className="space-y-3 animate-fadeInUp">
                  {/* Badges */}
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-4">
                    {/* Available for Work Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 backdrop-blur-sm">
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                      </span>
                      <span className="text-green-400 text-sm font-medium">
                        Available for Work
                      </span>
                    </div>

                    {/* Let's Talk Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 backdrop-blur-sm hover:bg-purple-500/20 transition-colors cursor-pointer">
                      <span className="text-purple-300 text-sm font-medium">
                        Let's Talk
                      </span>
                      <svg
                        className="w-4 h-4 text-purple-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>

                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                    Hey, I'm{" "}
                    <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                      Imesha
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
                    <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
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
                          href="https://github.com/imeshadilshani"
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
                          href="https://linkedin.com/in/imeshadilshani"
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
                          href="https://twitter.com/imeshadilshani"
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
        <div className="container px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">
            My Life Motto: "Constraints Drive Creativity"
          </h2>

          {/* Work Section */}
          <div className="space-y-8 mb-12">
            <h3 className="text-2xl font-bold">Work</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I am currently leading Developer Experience at{" "}
                <span className="text-purple-300 font-medium">Twelve Labs</span>
                . We are building foundation models for video understanding.
              </p>
              <p>
                Previously, I have worked at the nexus of enterprise ML/AI and
                data infrastructure:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Drove product-led and community-led growth at Superb AI by way
                  of advocacy and partnerships
                </li>
                <li>
                  Bridged the gap between Research and Production Machine
                  Learning with Full-Stack Deep Learning
                </li>
                <li>
                  Organized community events in the Bay Area via MLOps World
                </li>
              </ul>
              <p>
                In my past lives, I have built Data Science solutions for
                startups in Los Angeles (Fin-Tech) and New York (Enterprise). I
                also used to freelance as a data science journalist - having
                written 200+ technical articles for various publications and
                startups (Tecton, Weights and Biases, Snorkel AI, Saturn Cloud,
                etc.)
              </p>
            </div>
          </div>

          {/* Education Section */}
          <div className="space-y-8 mb-12">
            <h3 className="text-2xl font-bold">Education</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Before this, I completed my M.S. degree in Computer Science from
                the{" "}
                <span className="text-purple-300 font-medium">
                  Rochester Institute of Technology
                </span>{" "}
                - where my research lies at the intersection of Deep Learning
                and Recommendation Systems, along with cross-functional work on
                Meta-Learning.
              </p>
              <p>
                I graduated with a Bachelor Degree in Communication and a minor
                in Computer Science from{" "}
                <span className="text-purple-300 font-medium">
                  Denison University
                </span>{" "}
                in 2017, during which I did summer internships in Business
                Analytics and Product Management at VC-backed startups in
                Seattle (Ed-Tech) and San Francisco (Non-Profit).
              </p>
              <p>
                I finished boarding school in Rabun Gap, Georgia in 2013, prior
                to which I spent 16 years being born and raised in Hanoi,
                Vietnam.
              </p>
            </div>
          </div>

          {/* Side Hustles Section */}
          <div className="space-y-8 mb-12">
            <h3 className="text-2xl font-bold">Side Hustles</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I write a Medium publication called{" "}
                <span className="text-purple-300 font-medium">Data Notes</span>{" "}
                - covering industry applications, emerging research themes, and
                advice from luminaries.
              </p>
              <p>
                I host Datacast - featuring raw conversations with data
                practitioners/researchers to unpack the career lessons they have
                learned along the way. Subscribe to receive the latest episodes.
              </p>
              <p>
                I used to be quite involved with the Effective Altruism
                community. Reach out if you want to learn more about topics such
                as AI Safety, Applied Rationality, and High-Impact Careers.
              </p>
            </div>
          </div>

          {/* Social Section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold">Social</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I maintain a list of the books I read on Reads and keep track of
                the podcasts I listen to regularly on Listens. I frequently blog
                on Writes, regularly commit on GitHub, daily tweet at
                @le_james94, and always look to connect on LinkedIn.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cards Section */}
      <section className="py-16 md:py-20">
        <div className="container px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src="/data-science-code-on-multiple-monitors.jpg"
                  alt="Data Science"
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle>Stock Photography</CardTitle>
                <CardDescription>
                  I am specialized at travel, landscape, and architectural
                  photography due to my extensive traveling experiences
                  throughout major cities in America and Europe.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="link"
                  className="p-0 h-auto font-semibold"
                  asChild
                >
                  <Link href="/creative-lab">
                    Check Out My Collection{" "}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src="/academic-research-presentation-university.jpg"
                  alt="Gardening"
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle>Gardening</CardTitle>
                <CardDescription>
                  During my study abroad term in Copenhagen, I did 37 YouTube
                  Vlogs using a DSLR Nikon camera and a GoPro Hero 3, capturing
                  all my travel experience in film.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="link"
                  className="p-0 h-auto font-semibold"
                  asChild
                >
                  <Link href="/learning">
                    Follow Along My Adventures{" "}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src="/data-journalism-writing-laptop-notebook.jpg"
                  alt="Digital Product Designing"
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle>Digital Product Designing</CardTitle>
                <CardDescription>
                  During my study abroad term in Copenhagen, I did 37 YouTube
                  Vlogs using a DSLR Nikon camera and a GoPro Hero 3, capturing
                  all my travel experience in film.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="link"
                  className="p-0 h-auto font-semibold"
                  asChild
                >
                  <Link href="/myworks">
                    View My Product <ArrowRight className="ml-2 h-4 w-4" />
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
