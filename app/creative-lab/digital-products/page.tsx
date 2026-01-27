import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function DigitalProductsPage() {
  return (
    <main>
      <section className="relative h-[80vh] min-h-[550px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
            style={{
              backgroundImage: "url('/about-bg.webp')",
            }}
          />
        </div>

        <div className="relative z-10 container text-center space-y-4 px-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-black rounded-full mb-6">
            <span className="text-sm font-medium text-black">
              💡 Digital Innovation
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance text-black font-[family-name:var(--font-adamina)]">
            Digital Product Design
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto font-[family-name:var(--font-adamina)]">
            Coming soon - Currently in Development Phase
          </p>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Exploring opportunities in{" "}
            <span className="text-black font-medium">digital products</span>,{" "}
            <span className="text-black font-medium">creative design</span>, and{" "}
            <span className="text-black font-medium">innovative solutions</span>.
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

            <h2 className="text-3xl font-bold mb-6">Exploring New Horizons</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Digital product design is an exciting venture I'm currently
              researching and developing MVP as a solontrupener. This space combines my technical skills, design
              sensibilities, and entrepreneurial interests in a way that could
              create meaningful value for others.
            </p>

            <div className="prose dark:prose-invert max-w-none mb-12">
              <h3 className="text-2xl font-semibold mb-4">
                Current Status: Building a Mobile App MVP
              </h3>
              <p className="text-muted-foreground mb-6">
                I’m currently designing and developing a mobile application 
                MVP called ClassLinka — a platform focused on shaping the future 
                of tutoring in Sri Lanka. This project represents my transition 
                from research into real-world product execution, where I’m applying 
                my skills in product design, frontend development, and backend systems.
              </p>

              <p className="text-muted-foreground mb-6" >
                ClassLinka aims to connect high-quality educators with students 
                who want to excel, while giving teachers better tools to grow 
                their careers and manage their work digitally.
              </p>

              <h3 className="text-2xl font-semibold mb-4">MVP Status</h3>
              <p className="text-muted-foreground mb-8">
                The MVP is under active development and testing. Once testing is complete, I will open an <b>exclusive 
                waitlist</b> for early users ahead of the public mobile app launch. <b>ClassLinka</b> connects 
                the island’s elite educators with students who want to excel.
              </p>
              <p className="text-muted-foreground mb-8">
                <b>👉 Project site:{" "}
                <a
                  href="https://classlinka.imesha.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  ClassLinka
                </a>
                </b>
              </p>
            </div>

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">🚀</div>
                    <div>
                    <h3 className="text-xl font-semibold mb-3">
                      Stay Tuned for Updatess
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      This is an exciting new chapter I'm preparing to embarking
                      on. I'll be documenting the journey from research to
                      creation to launch. Follow along to see how this venture
                      develop!
                    </p>
                    <p className="text-sm text-muted-foreground italic">
                      Expected timeline: Development phase ongoings • Planing to
                      open waitlisting collection on March, 2026.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-8 bg-muted/50">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">
                  Areas of Interest
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• SaaS products for niche markets</li>
                  <li>• Digital assets for creators</li>
                  <li>• Productivity and workflow tools</li>
                  <li>• Design templates and UI component libraries</li>
                  <li>• Educational resources and guides</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
