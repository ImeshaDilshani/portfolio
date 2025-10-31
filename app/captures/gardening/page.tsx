import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function GardeningPage() {
  return (
    <main>
      <section className="relative h-[80vh] min-h-[550px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/garding/senior-couple-harvesting-tomatoes.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background" />
        </div>

        <div className="relative z-10 container text-center space-y-4 px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
            Gardening
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My therapeutic escape and connection to nature
          </p>
        </div>
      </section>

      <div className="py-16 md:py-24">
        <div className="container px-4 max-w-6xl mx-auto">
          <div className="mb-12">
            <Link
              href="/captures"
              className="text-primary hover:underline mb-8 inline-block"
            >
              ← Back to Life Capturing
            </Link>

            <h2 className="text-3xl font-bold mb-6">Finding Peace in Nature</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Gardening has become my favorite hobby - a peaceful retreat that
              gives me mental relaxation and helps me disconnect from the busy
              digital world. There's something incredibly therapeutic about
              working with soil, nurturing plants, and watching them grow over
              time.
            </p>

            <div className="prose dark:prose-invert max-w-none">
              <h3 className="text-2xl font-semibold mb-4">Why I Garden</h3>
              <p className="text-muted-foreground mb-6">
                In our fast-paced, technology-driven lives, gardening offers a
                unique opportunity to slow down and connect with nature. It's
                meditative, grounding, and incredibly rewarding. Each season
                brings new lessons, challenges, and moments of joy as I watch my
                garden flourish.
              </p>

              <h3 className="text-2xl font-semibold mb-4">What I Grow</h3>
              <p className="text-muted-foreground mb-8">
                I'm currently exploring different types of plants and learning
                what works best in my space. From flowers that brighten the
                garden to vegetables that eventually make it to my kitchen, each
                plant teaches me something new about patience, care, and the
                cycles of nature.
              </p>
            </div>

            <Card className="mt-12 bg-muted/50">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">Garden Gallery</h3>
                <p className="text-muted-foreground">
                  Photo gallery coming soon! I'm documenting my gardening
                  journey and will share photos of my plants, garden setup, and
                  the peaceful moments spent among the greenery.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
