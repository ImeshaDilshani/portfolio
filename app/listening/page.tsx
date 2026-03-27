import Image from "next/image";

const podcasts = [
  {
    title: "The 80,000 Hours Podcast",
    host: "80,000 Hours",
    image: "/listen/8000.webp",
    description:
      "The 80,000 Hours Podcast features unusually in-depth conversations about the world's most pressing problems and how you can use your career to solve them. We invite guests pursuing a wide range of career paths – from academics and activists to entrepreneurs – to share their wisdom.",
    link: "https://80000hours.org/podcast/",
  },
  {
    title: "Diary of A CEO",
    host: "Steven Bartlett",
    image: "/listen/ceo.webp",
    description:
      "One of the world's most popular business podcasts featuring in-depth conversations with some of the most successful entrepreneurs, business leaders, and experts. Steven Bartlett dives deep into their stories, strategies, and mindsets that led to their success.",
    link: "https://www.youtube.com/channel/UCGq-a57w-aPwyi3pW7XLiHw",
  },
  {
    title: "Huberman Lab",
    host: "Andrew Huberman",
    image: "/listen/androw.webp",
    description:
      "The Huberman Lab Podcast is hosted by Dr. Andrew Huberman, a neuroscientist and professor at Stanford School of Medicine. The podcast discusses neuroscience and science-based tools for everyday life, exploring how our brain controls our perceptions, behaviors, and health.",
    link: "https://www.youtube.com/@hubermanlab",
  },
];

export default function LearningPage() {
  return (
    <main>
      {/* Header */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-10">
            <p className="text-xs font-medium tracking-widest uppercase text-[var(--muted-foreground)] pt-1">
              Listening
            </p>
            <div className="space-y-4 max-w-2xl">
              <h1 className="text-4xl md:text-5xl text-[var(--foreground)]">Voices that inspire and educate</h1>
              <p className="text-[var(--muted-foreground)] leading-relaxed">
                Podcasts allow you to hear diverse perspectives. Below is my personal listening list of podcasts that have shaped my thinking, acting as the successors of the radio shows that informed entire generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-[var(--border)]">
          {podcasts.map((podcast, index) => (
            <a
              key={index}
              href={podcast.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group border-r border-b border-[var(--border)] bg-[var(--card)] hover:bg-[var(--muted)] transition-colors p-6 md:p-8 flex flex-col space-y-6"
            >
              <div className="aspect-square relative w-full overflow-hidden border border-[var(--border)] bg-[var(--muted)]">
                <Image
                  src={podcast.image}
                  alt={podcast.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="space-y-3 flex-1">
                <p className="text-xs font-medium tracking-widest uppercase text-[var(--muted-foreground)]">{podcast.host}</p>
                <h3 className="text-xl font-medium text-[var(--foreground)] leading-tight">{podcast.title}</h3>
                <p className="text-sm text-[var(--muted-foreground)] line-clamp-4 leading-relaxed">{podcast.description}</p>
              </div>
              <p className="text-xs font-medium tracking-widest uppercase text-[var(--foreground)] hover:opacity-70 mt-auto">
                Listen Now ↗
              </p>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
