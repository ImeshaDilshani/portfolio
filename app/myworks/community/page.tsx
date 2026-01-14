import Link from "next/link"
import Image from "next/image"

export default function CommunityPage() {
  return (
    <main>
      <section className="relative h-[80vh] min-h-[550px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
            style={{
              backgroundImage: "url('/CW1.webp')",
            }}
          />
        </div>

        <div className="relative z-10 container text-center space-y-4 px-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-black rounded-full mb-6">
            <span className="text-sm font-medium text-black">
              🤝 Community
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance text-black font-[family-name:var(--font-adamina)]">Community Work</h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto font-[family-name:var(--font-adamina)]">
            Giving back through leadership, volunteering to open-source Community
          </p>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Contributing through{" "}
            <span className="text-black font-medium">mentorship</span>,{" "}
            <span className="text-black font-medium">open-source projects</span>, and{" "}
            <span className="text-black font-medium">community building</span>.
          </p>
        </div>
      </section>

      <div className="py-16 md:py-24">
        <div className="container px-4 max-w-6xl mx-auto">
          <div className="mb-12">
            <Link href="/" className="text-primary hover:underline mb-8 inline-block">
              ← Back to Start
            </Link>
            
            <h2 className="text-3xl font-bold mb-6">Contributing to the Open-Source Community</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              I strongly believe in giving back to the community that has helped me grow. Through leadership, 
              teamwork and volunteer work, I strive to share knowledge and help others succeed in their journey.
            </p>

            {/* Community Gallery */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">Community Memories</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div className="relative aspect-square overflow-hidden rounded-lg border-2 border-border hover:border-primary transition-colors">
                  <Image
                    src="/CW3.webp"
                    alt="Community memory 1"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg border-2 border-border hover:border-primary transition-colors">
                  <Image
                    src="/CW4.webp"
                    alt="Community memory 2"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg border-2 border-border hover:border-primary transition-colors">
                  <Image
                    src="/CW5.webp"
                    alt="Community memory 3"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg border-2 border-border hover:border-primary transition-colors">
                  <Image
                    src="/CW6.webp"
                    alt="Community memory 4"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg border-2 border-border hover:border-primary transition-colors">
                  <Image
                    src="/CW7.webp"
                    alt="Community memory 5"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg border-2 border-border hover:border-primary transition-colors">
                  <Image
                    src="/CW8.webp"
                    alt="Community memory 6"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg border-2 border-border hover:border-primary transition-colors">
                  <Image
                    src="/CW9.webp"
                    alt="Community memory 7"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg border-2 border-border hover:border-primary transition-colors">
                  <Image
                    src="/CW10.webp"
                    alt="Community memory 8"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg border-2 border-border hover:border-primary transition-colors">
                  <Image
                    src="/CW11.webp"
                    alt="Community memory 8"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg border-2 border-border hover:border-primary transition-colors">
                  <Image
                    src="/CW12.webp"
                    alt="Community memory 8"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg border-2 border-border hover:border-primary transition-colors">
                  <Image
                    src="/CW13.webp"
                    alt="Community memory 8"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg border-2 border-border hover:border-primary transition-colors">
                  <Image
                    src="/CW14.webp"
                    alt="Community memory 8"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* <div className="relative aspect-square overflow-hidden rounded-lg border-2 border-border hover:border-primary transition-colors">
                  <Image
                    src="/CW15.webp"
                    alt="Community memory 8"
                    fill
                    className="object-cover"
                  />
                </div> */}
                {/* <div className="relative aspect-square overflow-hidden rounded-lg border-2 border-border hover:border-primary transition-colors">
                  <Image
                    src="/CW16.webp"
                    alt="Community memory 8"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg border-2 border-border hover:border-primary transition-colors">
                  <Image
                    src="/CW17.webp"
                    alt="Community memory 8"
                    fill
                    className="object-cover"
                  />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
