import { client } from './client'

export async function getPosts() {
  return await client.fetch(`*[_type == "post"] | order(publishedAt desc)`)
}

export async function getPost(slug: string) {
  return await client.fetch(`*[_type == "post" && slug.current == $slug][0]`, { slug })
}
