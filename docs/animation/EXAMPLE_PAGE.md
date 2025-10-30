# Complete Example Page with All Animations

This is a comprehensive example showing how to use all animations together in a real portfolio page.

## Full Page Example

```tsx
import { AnimatedSection } from "@/components/animated-section";
import { AnimatedCard } from "@/components/animated-card";
import {
  AnimatedText,
  AnimatedParagraph,
  AnimatedLines,
  InlineLink,
  HighlightText,
} from "@/components/animated-text";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ExamplePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Blur and Fade Animations */}
      <section className="py-20 md:py-32">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center space-y-6">
            {/* Profile Image - Scale In */}
            <div className="animate-scaleIn">
              <img
                src="/profile.jpeg"
                alt="Your Name"
                className="w-32 h-32 rounded-full mx-auto border-4 border-purple-500/40"
              />
            </div>

            {/* Main Heading - Blur In */}
            <AnimatedText variant="blur-in" as="h1" className="text-5xl md:text-6xl font-bold">
              Hi, I'm <span className="text-gradient-animate">Your Name</span>
            </AnimatedText>

            {/* Subtitle - Fade Up */}
            <AnimatedText variant="fade-up" as="p" delay={200} className="text-xl md:text-2xl text-muted-foreground">
              Full-Stack Developer • Designer • Problem Solver
            </AnimatedText>

            {/* Description - Animated Paragraph */}
            <AnimatedParagraph delay={400} className="text-lg max-w-2xl mx-auto">
              I create <HighlightText>beautiful digital experiences</HighlightText> that solve
              real problems. Specialized in modern web technologies and user-centered design.
            </AnimatedParagraph>

            {/* CTA Buttons - Staggered */}
            <div className="flex gap-4 justify-center pt-4 stagger-children">
              <Button className="bg-purple-600 hover:bg-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30">
                View My Work
              </Button>
              <Button variant="outline" className="transition-all duration-300 hover:scale-105">
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Slide Animations */}
      <AnimatedSection animation="fadeInUp">
        <section className="py-16 bg-purple-500/5">
          <div className="container max-w-4xl mx-auto px-4">
            <AnimatedText variant="underline-reveal" as="h2" className="text-3xl font-bold text-center mb-8">
              About Me
            </AnimatedText>

            <div className="space-y-6">
              <AnimatedParagraph delay={100}>
                With over 5 years of experience in web development, I've helped dozens of clients
                bring their ideas to life. My approach combines technical expertise with creative
                thinking to deliver solutions that not only work flawlessly but also delight users.
              </AnimatedParagraph>

              <AnimatedParagraph delay={200}>
                I specialize in <InlineLink href="/skills">React, Next.js, and TypeScript</InlineLink>,
                and I'm passionate about creating accessible, performant applications. When I'm not
                coding, you can find me <InlineLink href="/blog">writing technical articles</InlineLink> or
                contributing to open source projects.
              </AnimatedParagraph>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Skills Section - Grid with Staggered Cards */}
      <AnimatedSection animation="fadeInUp">
        <section className="py-16">
          <div className="container max-w-6xl mx-auto px-4">
            <AnimatedText variant="gradient" as="h2" className="text-3xl font-bold text-center mb-12">
              What I Do Best
            </AnimatedText>

            <div className="grid md:grid-cols-3 gap-6">
              <AnimatedCard delay={100} variant="hover-lift">
                <CardHeader>
                  <div className="text-4xl mb-2">💻</div>
                  <CardTitle className="text-xl">Frontend Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <AnimatedParagraph delay={150}>
                    Building responsive, accessible interfaces with React, Next.js, and modern CSS.
                  </AnimatedParagraph>
                </CardContent>
              </AnimatedCard>

              <AnimatedCard delay={200} variant="hover-lift">
                <CardHeader>
                  <div className="text-4xl mb-2">⚙️</div>
                  <CardTitle className="text-xl">Backend Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <AnimatedParagraph delay={250}>
                    Creating robust APIs and databases with Node.js, PostgreSQL, and modern cloud services.
                  </AnimatedParagraph>
                </CardContent>
              </AnimatedCard>

              <AnimatedCard delay={300} variant="hover-lift">
                <CardHeader>
                  <div className="text-4xl mb-2">🎨</div>
                  <CardTitle className="text-xl">UI/UX Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <AnimatedParagraph delay={350}>
                    Designing intuitive user experiences with Figma, focusing on usability and aesthetics.
                  </AnimatedParagraph>
                </CardContent>
              </AnimatedCard>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Featured Projects - Mix of Animations */}
      <AnimatedSection animation="fadeInUp">
        <section className="py-16 bg-purple-500/5">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <AnimatedText variant="letter-reveal" as="h2" className="text-3xl font-bold mb-4">
                FEATURED PROJECTS
              </AnimatedText>
              <AnimatedParagraph delay={100}>
                A selection of my recent work
              </AnimatedParagraph>
            </div>

            <div className="space-y-8">
              {/* Project 1 */}
              <AnimatedCard delay={100} variant="hover-glow">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-6 items-center">
                    <div className="overflow-hidden rounded-lg">
                      <img
                        src="/project1.jpg"
                        alt="Project 1"
                        className="zoom-hover w-full h-64 object-cover"
                      />
                    </div>
                    <div className="space-y-4">
                      <AnimatedText variant="gradient" as="h3" className="text-2xl font-bold">
                        E-Commerce Platform
                      </AnimatedText>
                      <AnimatedParagraph delay={150}>
                        A full-featured online store with real-time inventory, payment processing,
                        and admin dashboard. Built with Next.js, Stripe, and PostgreSQL.
                      </AnimatedParagraph>
                      <div className="flex gap-2 flex-wrap">
                        <span className="text-sm px-3 py-1 bg-purple-500/10 rounded-full">Next.js</span>
                        <span className="text-sm px-3 py-1 bg-purple-500/10 rounded-full">TypeScript</span>
                        <span className="text-sm px-3 py-1 bg-purple-500/10 rounded-full">Stripe</span>
                      </div>
                      <Button className="transition-all duration-300 hover:scale-105">
                        View Project
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </AnimatedCard>

              {/* Project 2 */}
              <AnimatedCard delay={200} variant="hover-glow">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-6 items-center">
                    <div className="space-y-4 md:order-2">
                      <AnimatedText variant="gradient" as="h3" className="text-2xl font-bold">
                        Task Management App
                      </AnimatedText>
                      <AnimatedParagraph delay={250}>
                        A collaborative productivity tool with real-time updates, team workspaces,
                        and smart task prioritization. Built with React and Firebase.
                      </AnimatedParagraph>
                      <div className="flex gap-2 flex-wrap">
                        <span className="text-sm px-3 py-1 bg-purple-500/10 rounded-full">React</span>
                        <span className="text-sm px-3 py-1 bg-purple-500/10 rounded-full">Firebase</span>
                        <span className="text-sm px-3 py-1 bg-purple-500/10 rounded-full">Tailwind</span>
                      </div>
                      <Button className="transition-all duration-300 hover:scale-105">
                        View Project
                      </Button>
                    </div>
                    <div className="overflow-hidden rounded-lg md:order-1">
                      <img
                        src="/project2.jpg"
                        alt="Project 2"
                        className="zoom-hover w-full h-64 object-cover"
                      />
                    </div>
                  </div>
                </CardContent>
              </AnimatedCard>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Testimonials - Staggered Lines */}
      <AnimatedSection animation="fadeInUp">
        <section className="py-16">
          <div className="container max-w-4xl mx-auto px-4">
            <AnimatedText variant="blur-in" as="h2" className="text-3xl font-bold text-center mb-12">
              What People Say
            </AnimatedText>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="card-hover">
                <CardContent className="p-6">
                  <AnimatedLines
                    lines={[
                      '"Exceptional work! The attention to detail and professionalism exceeded our expectations."',
                      "— Sarah Johnson",
                      "CEO, TechStart Inc."
                    ]}
                    className="space-y-2"
                    lineClassName="text-muted-foreground italic"
                  />
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardContent className="p-6">
                  <AnimatedLines
                    lines={[
                      '"Delivered ahead of schedule with outstanding quality. Highly recommended!"',
                      "— Michael Chen",
                      "Product Manager, DesignCo"
                    ]}
                    className="space-y-2"
                    lineClassName="text-muted-foreground italic"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Section - Multiple Text Animations */}
      <AnimatedSection animation="scaleIn">
        <section className="py-16 bg-gradient-to-r from-purple-900/20 to-purple-800/20">
          <div className="container max-w-4xl mx-auto px-4 text-center space-y-6">
            <AnimatedText variant="gradient-animate" as="h2" className="text-4xl font-bold">
              Let's Work Together
            </AnimatedText>

            <AnimatedParagraph delay={100} className="text-xl">
              Have a project in mind? I'd love to hear about it.
            </AnimatedParagraph>

            <AnimatedParagraph delay={200}>
              Whether you need a <HighlightText>full website</HighlightText>, a
              <HighlightText>custom application</HighlightText>, or just some
              <HighlightText>consulting</HighlightText>, I'm here to help.
            </AnimatedParagraph>

            <div className="pt-4 animate-fadeInUp animation-delay-400">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 border-glow">
                Get In Touch
              </Button>
            </div>

            <div className="pt-8">
              <AnimatedParagraph delay={500} className="text-sm">
                Or email me directly at{" "}
                <InlineLink href="mailto:hello@example.com">
                  hello@example.com
                </InlineLink>
              </AnimatedParagraph>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Footer Note */}
      <section className="py-8 text-center">
        <div className="container px-4">
          <p className="text-sm text-muted-foreground">
            Built with ❤️ using Next.js, React, and Tailwind CSS
          </p>
        </div>
      </section>
    </main>
  );
}
```

---

## Breakdown of Animations Used

### Hero Section
- **Profile Image**: `animate-scaleIn` - Scales up smoothly
- **Main Heading**: `blur-in` variant - Blurs into focus
- **Name Highlight**: `text-gradient-animate` - Animated gradient
- **Subtitle**: `fade-up` variant with 200ms delay
- **Description**: `AnimatedParagraph` with 400ms delay + `HighlightText`
- **Buttons**: `stagger-children` for sequential reveal

### About Section
- **Section wrapper**: `fadeInUp` from `AnimatedSection`
- **Heading**: `underline-reveal` variant - Animated underline
- **Paragraphs**: Staggered with 100ms and 200ms delays
- **Links**: `InlineLink` with hover underline animation

### Skills Section
- **Section wrapper**: `fadeInUp` from `AnimatedSection`
- **Heading**: `gradient` variant for emphasis
- **Cards**: `AnimatedCard` with staggered delays (100ms, 200ms, 300ms)
- **Card content**: `AnimatedParagraph` with matching delays

### Projects Section
- **Heading**: `letter-reveal` for dramatic effect
- **Cards**: `hover-glow` variant for interactive effect
- **Images**: `zoom-hover` class for zoom on hover
- **Text**: `gradient` variant for project titles
- **Buttons**: Custom hover with scale and shadow

### Testimonials
- **Heading**: `blur-in` variant
- **Cards**: `card-hover` class for lift effect
- **Quotes**: `AnimatedLines` for staggered reveal

### CTA Section
- **Section wrapper**: `scaleIn` from `AnimatedSection`
- **Heading**: `gradient-animate` for attention
- **Paragraphs**: Staggered delays with `HighlightText`
- **Button**: Multiple effects - scale, shadow, glow, border-glow
- **Link**: `InlineLink` component

---

## Key Techniques Demonstrated

1. **Layered Delays**: Each section has internal staggering for natural flow
2. **Mix of Animations**: Different animations for different content types
3. **Hover Effects**: Interactive elements have appropriate hover states
4. **Semantic HTML**: Proper heading hierarchy with animations
5. **Accessibility**: All animations respect reduced motion preferences
6. **Performance**: Only using transform and opacity for smooth 60fps
7. **Professional Balance**: Not every element is animated

---

## Tips for Your Own Pages

1. Start with section-level animations (`AnimatedSection`)
2. Add text animations to headings (`AnimatedText`)
3. Stagger body content with delays (100-200ms)
4. Use hover effects on interactive elements
5. Keep total animation time under 1 second per section
6. Test on mobile for smooth performance

---

## Copy This Template

You can copy this entire page structure and customize:
- Replace text content with your own
- Change delays to match your preference
- Swap animation variants as needed
- Adjust colors and spacing
- Add or remove sections

Everything is composable and reusable!