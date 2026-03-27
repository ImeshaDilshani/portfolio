import { client } from './client'

export async function getPosts() {
  return await client.fetch(`*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    readTime,
    tags,
    "categories": categories[]->{"title": title},
    "author": author->{name, image},
    body
  }`)
}

export async function getPost(slug: string) {
  return await client.fetch(`*[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    publishedAt,
    mainImage,
    excerpt,
    readTime,
    tags,
    "categories": categories[]->{"title": title},
    "author": author->{name, image},
    body
  }`, { slug })
}
