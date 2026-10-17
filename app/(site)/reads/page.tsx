import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Reads | Imesha Dilshani",
  description: "Books that shaped my thinking across personal development, productivity, psychology, and technology. Constantly updated on Goodreads.",
};

const books = [
  {
    title: "Atomic Habits",
    author: "James Clear",
    image: "/books/atomic habit.webp",
  },
  {
    title: "The monk who sold his ferrari",
    author: "Robin Sharma",
    image: "/books/the monk who sold his ferari.webp",
  },
  {
    title: "Mindsets",
    author: "Dr. Carol S. Dweck",
    image: "/books/mindset.webp",
  },
  {
    title: "Psychology of Money",
    author: "Morgan Housel",
    image: "/books/psychology of money.webp",
  },
  {
    title: "Deep Work",
    author: "Cal Newport",
    image: "/books/deep work.webp",
  },
  {
    title: "Don't Believe Everything You Think",
    author: "Joseph Nguyen",
    image: "/books/dont belive everything you think.webp",
  },
];

export default function ReadsPage() {
  return (
    <main>
      {/* Header */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-10">
            <p className="text-xs font-medium tracking-widest uppercase text-[var(--muted-foreground)] pt-1">
              Reads
            </p>
            <div className="space-y-4 max-w-2xl">
              <h1 className="text-4xl md:text-5xl text-[var(--foreground)]">Books that shaped my thinking</h1>
              <p className="text-[var(--muted-foreground)] leading-relaxed">
                I believe in continuous learning through reading. This collection features an eclectic set of books on personal development, productivity, psychology, and more.
              </p>
              <div className="pt-2">
                <a
                  href="https://www.goodreads.com/user/show/201873711-imesha-dilshani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-[var(--foreground)] border border-[var(--border)] px-4 py-2.5 hover:bg-[var(--muted)] transition-colors"
                >
                  Follow my live reading list on Goodreads ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-0 border-t border-l border-[var(--border)]">
          {books.map((book, index) => (
            <div key={index} className="group border-r border-b border-[var(--border)] bg-[var(--card)] hover:bg-[var(--muted)] transition-colors p-4 flex flex-col items-center text-center space-y-4">
              <div className="aspect-[3/4] relative w-full overflow-hidden border border-[var(--border)] bg-[var(--muted)]">
                <Image
                  src={book.image}
                  alt={book.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div>
                <h3 className="text-sm font-medium text-[var(--foreground)] line-clamp-2 leading-tight mb-1">{book.title}</h3>
                <p className="text-xs text-[var(--muted-foreground)] line-clamp-1">{book.author}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Goodreads Live Banner */}
        <div className="mt-12 border border-[var(--border)] p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 bg-[var(--card)]">
          <div className="space-y-1">
            <p className="text-xs font-medium tracking-widest uppercase text-[var(--muted-foreground)]">Always Updated</p>
            <h2 className="text-lg font-medium text-[var(--foreground)]">Live Reading Log & Current Reads</h2>
            <p className="text-sm text-[var(--muted-foreground)] max-w-xl">
              I continuously track my reading progress, book reviews, and current reads directly on Goodreads.
            </p>
          </div>
          <a
            href="https://www.goodreads.com/user/show/201873711-imesha-dilshani"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--foreground)] text-[var(--background)] text-xs font-medium tracking-widest uppercase hover:opacity-85 transition-opacity whitespace-nowrap"
          >
            Visit Goodreads Profile ↗
          </a>
        </div>
      </section>
    </main>
  );
}
