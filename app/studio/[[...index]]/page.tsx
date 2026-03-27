import Studio from './Studio'

export async function generateStaticParams() {
  return [
    { index: [] }
  ]
}

export default function StudioPage() {
  return <Studio />
}
