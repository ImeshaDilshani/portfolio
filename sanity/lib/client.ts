import { createClient } from 'next-sanity'
import { createImageUrlBuilder } from '@sanity/image-url'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'missing-project-id'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export const client = createClient({
  projectId,
  dataset,
  apiVersion: '2023-05-03',
  useCdn: false,
})

const builder = createImageUrlBuilder(client)

export function urlFor(source: any) {
  if (!source || projectId === 'missing-project-id') {
    return { url: () => '/placeholder.jpg' } as any
  }
  return builder.image(source)
}

export function urlForImage(source: any, fallback: string = '/about-bg.webp'): string {
  if (!source) return fallback
  if (typeof source === 'string') return source
  try {
    const url = builder.image(source).url()
    return url || fallback
  } catch {
    return fallback
  }
}

