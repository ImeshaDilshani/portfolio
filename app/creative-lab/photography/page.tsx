import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const platforms = [
  {
    name: "Adobe Stock",
    description:
      "Building a professional portfolio of high-quality stock images",
    status: "Active",
    link: "https://stock.adobe.com/lk/contributor/212936218/Imesha",
  },
  {
    name: "Shutterstock",
    description: "Contributing diverse content for commercial and creative use",
    status: "Active",
    link: "https://www.shutterstock.com/g/Imesha+Dilshani%2001?rid=244488516",
  },
  {
    name: "Dreamstime",
    description:
      "Expanding reach with unique photography and generated content",
    status: "Active",
    link: "https://www.dreamstime.com/imageincome_info",
  },
];

export default function PhotographyPage() {
  return (
    <main>
      <section className="relative h-[65vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
            style={{
              backgroundImage: "url('/portrait-person-ai-robot.webp')",
            }}
          />
        </div>

        <div className="relative z-10 container text-center space-y-4 px-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-black rounded-full mb-6">
            <span className="text-sm font-medium text-black">
              📸 Visual Art
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance text-black font-[family-name:var(--font-adamina)]">
            Stock Image Photography & Generation
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto font-[family-name:var(--font-adamina)]">
            Turning creativity into passive income
          </p>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Creating visual content through{" "}
            <span className="text-black font-medium">photography</span>,{" "}
            <span className="text-black font-medium">AI generation</span>, and{" "}
            <span className="text-black font-medium">artistic expression</span>.
          </p>
        </div>
      </section>

      <div className="py-16 md:py-24">
        <div className="container px-4 max-w-6xl mx-auto">
          <div className="mb-12">
            <Link
              href="/creative-lab"
              className="text-primary hover:underline mb-8 inline-block"
            >
              ← Back to Creative Lab
            </Link>

            <h2 className="text-3xl font-bold mb-6">
              My Journey in Stock Photography
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              I started stock photography as a way to combine my passion for
              visual storytelling with building a passive income stream. This
              journey allows me to explore different photography styles,
              experiment with AI-generated imagery, and learn about the
              commercial side of creative work.
            </p>

            <div className="prose dark:prose-invert max-w-none mb-12">
              <h3 className="text-2xl font-semibold mb-4">My Current Goal</h3>
              <p className="text-muted-foreground mb-6">
                Building a strong, diverse portfolio across multiple platforms
                is my primary focus. I work on this during my free time,
                creating content that meets market demands while staying true to
                my creative vision. Each platform has its unique requirements
                and audience, which keeps the work interesting and challenging.
              </p>

              <h3 className="text-2xl font-semibold mb-4">The Process</h3>
              <p className="text-muted-foreground mb-8">
                From capturing original photographs to experimenting with AI
                generation tools, I'm constantly learning what works in the
                stock photography market. It's a blend of creativity, technical
                skills, market research, and persistence. Every upload is a
                learning opportunity.
              </p>
            </div>

            <h3 className="text-2xl font-semibold mb-6">Active Platforms</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {platforms.map((platform, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{platform.name}</CardTitle>
                    <span className="text-sm text-green-600 dark:text-green-400 font-semibold">
                      {platform.status}
                    </span>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {platform.description}
                    </p>
                    <a
                      href={platform.link}
                      className="text-primary hover:underline font-semibold"
                    >
                      View Portfolio →
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-muted/50">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">
                  Portfolio Showcase
                </h3>
                <p className="text-muted-foreground">
                  I'm currently building my portfolio and will showcase my best
                  work here soon. Follow along as I grow my presence in the
                  stock photography space and share insights about this creative
                  journey.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
