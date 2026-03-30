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
  try {
    const posts = await getPosts();
    if (!posts || !Array.isArray(posts)) return [];
    
    return posts
      .filter((post: any) => post?.slug?.current)
      .map((post: any) => ({
        slug: post.slug.current,
      }));
  } catch (error) {
    console.error("Error generating static params for blog posts:", error);
    return [];
  }
}

export const dynamicParams = false;
export const dynamic = 'force-static';

const PortableTextComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <div className="my-10 relative w-full flex justify-center">
          <div className="relative w-full max-w-4xl overflow-hidden rounded-lg border border-[var(--border)]">
            <Image
              src={urlFor(value).url()}
              alt={value.alt || 'Blog image'}
              width={800}
              height={450}
              className="w-full h-auto object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
            {value.caption && (
              <div className="text-center text-sm text-[var(--muted-foreground)] mt-2 italic px-4">
                {value.caption}
              </div>
            )}
          </div>
        </div>
      );
    },
  },
};

// Components for rendering images within Portable Text

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main>
      <div className="py-16 md:py-24">
        <div className="container px-6 max-w-4xl mx-auto space-y-12">
          
          {/* Header */}
          <div className="text-center space-y-6">
            <div className="flex flex-wrap items-center justify-center gap-2">
              {post.categories?.[0]?.title && (
                <Badge variant="outline" className="font-normal text-xs text-[var(--foreground)] border-[var(--border)] uppercase tracking-widest px-3 py-1 bg-transparent">
                  {post.categories[0].title}
                </Badge>
              )}
            </div>

            
            <h1 className="text-3xl md:text-5xl font-bold text-balance text-[var(--foreground)] max-w-4xl mx-auto leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 text-sm text-[var(--muted-foreground)] pt-4">
              {post.author ? (
                <>
                  <div className="flex items-center gap-2">
                    {post.author.image && (
                      <Image
                        src={urlFor(post.author.image).url()}
                        alt={post.author.name}
                        width={28}
                        height={28}
                        className="w-7 h-7 rounded-full object-cover border border-[var(--border)] shrink-0"
                      />
                    )}
                    <span className="font-medium text-[var(--foreground)]">{post.author.name}</span>
                  </div>
                  <span className="text-[var(--border)] hidden md:inline">•</span>
                </>
              ) : null}
              
              <time>
                {post.publishedAt ? format(new Date(post.publishedAt), "MMMM dd, yyyy") : "Draft"}
              </time>
              
              {post.readTime && (
                <>
                  <span className="text-[var(--border)] hidden md:inline">•</span>
                  <span>{post.readTime}</span>
                </>
              )}
            </div>
          </div>

          {/* Main Image */}
          {post.mainImage && (
            <div className="w-full relative rounded-lg overflow-hidden border border-[var(--border)]">
              {/* Optional: using a large aspect ratio since it's the main image */}
              <Image
                src={urlFor(post.mainImage).url()}
                alt={post.title || "Main blog image"}
                width={1200}
                height={630}
                priority
                className="w-full h-auto object-cover max-h-[60vh]"
                sizes="(max-width: 768px) 100vw, 1200px"
              />
            </div>
          )}

          <div className="flex justify-start w-full">
            <Button variant="ghost" asChild className="-ml-4 mb-2">
              <Link href="/writes">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to all posts
              </Link>
            </Button>
          </div>

          {/* Body */}
          <article className="prose prose-lg dark:prose-invert max-w-none text-left leading-relaxed [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-[var(--foreground)] [&_h2]:mt-8 [&_h2]:mb-4 [&_h2]:border-b border-[var(--border)] [&_h2]:pb-2">
            <div className="space-y-6">
              <PortableText value={post.body || []} components={PortableTextComponents} />
            </div>
          </article>

          {/* Tags at the bottom */}
          {post.tags && post.tags.length > 0 && (
            <div className="pt-8 border-t border-[var(--border)] mt-12 flex flex-wrap gap-2">
              {post.tags.map((tag: string) => (
                <Badge key={tag} variant="secondary" className="font-normal text-xs px-3 py-1">
                  {tag}
                </Badge>
              ))}
            </div>
          )}


        </div>
      </div>
    </main>
  );
}
