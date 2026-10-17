import { client } from './client'

export interface SanityProject {
  _id: string
  title: string
  slug?: { current: string }
  label?: string
  category?: 'featured' | 'coding' | 'data' | string
  description: string
  mainImage?: any
  tags?: string[]
  href?: string
  githubUrl?: string
  links?: { label: string; href: string }[]
  year?: number
  order?: number
  publishedAt?: string
}

export async function getProjects(): Promise<SanityProject[]> {
  try {
    return await client.fetch(
      `*[_type == "project"] | order(order asc, year desc, _createdAt desc) {
        _id,
        title,
        slug,
        label,
        category,
        description,
        mainImage,
        tags,
        href,
        githubUrl,
        links,
        year,
        order,
        publishedAt
      }`,
      {},
      { next: { revalidate: 60 } }
    )
  } catch (error) {
    console.error('Error fetching projects from Sanity:', error)
    return []
  }
}

export async function getFeaturedProjects(): Promise<SanityProject[]> {
  try {
    const projects = await client.fetch(
      `*[_type == "project" && (category == "featured" || !defined(category))] | order(order asc, year desc, _createdAt desc) {
        _id,
        title,
        slug,
        label,
        category,
        description,
        mainImage,
        tags,
        href,
        githubUrl,
        links,
        year,
        order,
        publishedAt
      }`,
      {},
      { next: { revalidate: 60 } }
    )
    if (projects && projects.length > 0) return projects
    // Fallback: if no projects specifically marked "featured", return all projects
    return await getProjects()
  } catch (error) {
    console.error('Error fetching featured projects from Sanity:', error)
    return []
  }
}

export async function getCodingProjects(): Promise<SanityProject[]> {
  try {
    return await client.fetch(
      `*[_type == "project" && category == "coding"] | order(order asc, year desc, _createdAt desc) {
        _id,
        title,
        slug,
        label,
        category,
        description,
        mainImage,
        tags,
        href,
        githubUrl,
        links,
        year,
        order,
        publishedAt
      }`,
      {},
      { next: { revalidate: 60 } }
    )
  } catch (error) {
    console.error('Error fetching coding projects from Sanity:', error)
    return []
  }
}

export async function getDataProjects(): Promise<SanityProject[]> {
  try {
    return await client.fetch(
      `*[_type == "project" && category == "data"] | order(order asc, year desc, _createdAt desc) {
        _id,
        title,
        slug,
        label,
        category,
        description,
        mainImage,
        tags,
        href,
        githubUrl,
        links,
        year,
        order,
        publishedAt
      }`,
      {},
      { next: { revalidate: 60 } }
    )
  } catch (error) {
    console.error('Error fetching data projects from Sanity:', error)
    return []
  }
}

export async function getPosts() {
  return await client.fetch(
    `*[_type == "post"] | order(publishedAt desc) {
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
  }`,
    {},
    { next: { revalidate: 60 } }
  )
}

export async function getPost(slug: string) {
  return await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
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
  }`,
    { slug },
    { next: { revalidate: 60 } }
  )
}
