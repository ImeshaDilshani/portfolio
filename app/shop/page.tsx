import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart } from "lucide-react"

const products = [
  {
    id: 1,
    title: "Photography Presets Pack",
    description: "Professional Lightroom presets for travel and landscape photography",
    price: "$29",
    image: "/data-science-code-on-multiple-monitors.jpg",
    category: "Digital Products",
  },
  {
    id: 2,
    title: "Data Science Course",
    description: "Complete guide to data science and machine learning fundamentals",
    price: "$99",
    image: "/academic-research-presentation-university.jpg",
    category: "Courses",
  },
  {
    id: 3,
    title: "Portfolio Template",
    description: "Modern, responsive portfolio template built with Next.js and Tailwind CSS",
    price: "$49",
    image: "/data-journalism-writing-laptop-notebook.jpg",
    category: "Templates",
  },
  {
    id: 4,
    title: "Photography Prints",
    description: "High-quality prints of my best travel and landscape photographs",
    price: "$79",
    image: "/serene-harbor-dock-with-boats-at-sunset.jpg",
    category: "Prints",
  },
  {
    id: 5,
    title: "Writing Workshop",
    description: "Learn technical writing and content creation for developers",
    price: "$149",
    image: "/data-journalism-writing-laptop-notebook.jpg",
    category: "Workshops",
  },
  {
    id: 6,
    title: "Design System Kit",
    description: "Complete UI component library and design system for modern web apps",
    price: "$69",
    image: "/academic-research-presentation-university.jpg",
    category: "Digital Products",
  },
]

export default function ShopPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: "url('/serene-harbor-dock-with-boats-at-sunset.jpg')",
          }}
        />
        <div className="relative container px-4 text-center mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">Shop</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Digital products, courses, and resources to help you grow your skills
          </p>
          <div className="mt-6 inline-block bg-primary/10 border border-primary/20 rounded-lg px-6 py-3">
            <p className="text-sm text-muted-foreground">
              🚧 Currently building my digital shop - Stay tuned for exciting products coming soon!
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-20">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden group hover:shadow-lg transition-shadow flex flex-col">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 right-4">{product.category}</Badge>
                </div>
                <CardHeader>
                  <CardTitle>{product.title}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-2xl font-bold text-primary">{product.price}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container px-4 text-center mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Looking for Custom Work?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 text-balance">
            I'm available for freelance projects, consulting, and custom product development.
          </p>
          <Button size="lg" asChild>
            <a href="/contact">Get in Touch</a>
          </Button>
        </div>
      </section>
    </main>
  )
}
