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
              backgroundImage: "url('/CW1.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-950/30 via-black to-purple-950/20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(80,0,180,0.08),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(50,0,120,0.06),transparent_60%)]" />
        </div>

        <div className="relative z-10 container text-center space-y-4 px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance text-white">Community Work</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Giving back through leadership, volunteering to open-source Community
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
                    src="/CW3.jpg"
                    alt="Community memory 1"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg border-2 border-border hover:border-primary transition-colors">
                  <Image
                    src="/CW4.jpg"
                    alt="Community memory 2"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg border-2 border-border hover:border-primary transition-colors">
                  <Image
                    src="/CW5.png"
                    alt="Community memory 3"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg border-2 border-border hover:border-primary transition-colors">
                  <Image
                    src="/CW6.jpg"
                    alt="Community memory 4"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg border-2 border-border hover:border-primary transition-colors">
                  <Image
                    src="/CW7.jpg"
                    alt="Community memory 5"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg border-2 border-border hover:border-primary transition-colors">
                  <Image
                    src="/CW8.jpg"
                    alt="Community memory 6"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg border-2 border-border hover:border-primary transition-colors">
                  <Image
                    src="/CW9.jpg"
                    alt="Community memory 7"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg border-2 border-border hover:border-primary transition-colors">
                  <Image
                    src="/CW10.jpg"
                    alt="Community memory 8"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg border-2 border-border hover:border-primary transition-colors">
                  <Image
                    src="/CW11.jpg"
                    alt="Community memory 8"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg border-2 border-border hover:border-primary transition-colors">
                  <Image
                    src="/CW12.jpg"
                    alt="Community memory 8"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg border-2 border-border hover:border-primary transition-colors">
                  <Image
                    src="/CW13.jpg"
                    alt="Community memory 8"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg border-2 border-border hover:border-primary transition-colors">
                  <Image
                    src="/CW14.jpg"
                    alt="Community memory 8"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* <div className="relative aspect-square overflow-hidden rounded-lg border-2 border-border hover:border-primary transition-colors">
                  <Image
                    src="/CW15.jpg"
                    alt="Community memory 8"
                    fill
                    className="object-cover"
                  />
                </div> */}
                {/* <div className="relative aspect-square overflow-hidden rounded-lg border-2 border-border hover:border-primary transition-colors">
                  <Image
                    src="/CW16.jpg"
                    alt="Community memory 8"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg border-2 border-border hover:border-primary transition-colors">
                  <Image
                    src="/CW17.jpg"
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
