import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function GardeningPage() {
  return (
    <main>
      <section className="relative h-[80vh] min-h-[550px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
            style={{
              backgroundImage:
                "url('/garding/senior-couple-harvesting-tomatoes.jpg')",
            }}
          />
        </div>

        <div className="relative z-10 container text-center space-y-4 px-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-black rounded-full mb-6">
            <span className="text-sm font-medium text-black">
              🌱 Mindful Living
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance text-black font-[family-name:var(--font-adamina)]">
            Gardening
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto font-[family-name:var(--font-adamina)]">
            My therapeutic escape and connection to nature
          </p>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Finding peace through{" "}
            <span className="text-black font-medium">nurturing plants</span>,{" "}
            <span className="text-black font-medium">connecting with nature</span>, and{" "}
            <span className="text-black font-medium">mindful living</span>.
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

              <h3 className="text-2xl font-semibold mb-4">How I Got Hooked</h3>
              <p className="text-muted-foreground mb-6">
                I'll admit it - I'm completely addicted to gardening now, and I
                have my amma (mother) to thank for that. Growing up, I watched
                her tend to her vegetable garden in her free time, transforming
                small patches of soil into sources of fresh produce. At the
                time, I didn't fully appreciate what she was doing, but
                something about her dedication and joy left a lasting impression
                on me.
              </p>
              <p className="text-muted-foreground mb-6">
                Now I understand that feeling completely. There's an
                indescribable happiness that comes from working with nature -
                getting your hands dirty, planting seeds, and then waiting with
                anticipation for the results. The process of watching something
                grow from a tiny seed into a thriving plant is magical. It's
                taught me patience, hope, and the value of nurturing something
                with care. Each sprout that breaks through the soil feels like a
                small victory, and I find myself checking on my plants every
                day, excited to see their progress.
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
