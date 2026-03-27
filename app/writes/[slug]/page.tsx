import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { getPost, getPosts } from "@/sanity/lib/queries";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/client";
import { format } from "date-fns";
import Image from "next/image";

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post: any) => ({
    slug: post.slug?.current,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main>
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: post.mainImage 
              ? `url(${urlFor(post.mainImage).url()})`
              : "url('/data-journalism-writing-laptop-notebook.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background" />
        </div>

        <div className="relative z-10 container text-center space-y-4 px-4">
          <Badge variant="outline" className="mb-4">
            {post.categories?.[0]?.title || "Article"}
          </Badge>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-balance max-w-4xl mx-auto">
            {post.title}
          </h1>
          <time className="text-sm text-muted-foreground">
            {post.publishedAt ? format(new Date(post.publishedAt), "MMMM dd, yyyy") : "Draft"}
          </time>
        </div>
      </section>

      <div className="py-16 md:py-24">
        <div className="container px-6 max-w-4xl mx-auto">
          <Button variant="ghost" asChild className="mb-8">
            <Link href="/writes">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to all posts
            </Link>
          </Button>

          <article className="prose prose-lg dark:prose-invert max-w-none text-left leading-relaxed [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-[var(--foreground)] [&_h2]:mt-6 [&_h2]:mb-4 [&_h2]:border-b border-[var(--border)] [&_h2]:pb-2">
            <div className="space-y-6">
              <PortableText value={post.body || []} />
            </div>
          </article>

          <div className="mt-12 pt-8 border-t flex justify-start">
            <div className="flex flex-wrap gap-2 justify-center">
              {(post.tags || []).map((tag: string) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
