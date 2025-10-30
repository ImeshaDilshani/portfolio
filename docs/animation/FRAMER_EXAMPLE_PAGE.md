# Ready-to-Use Portfolio Page with Framer Motion

Copy this entire page to create an impressive portfolio with powerful animations!

## Complete Home Page Example

```tsx
"use client";

import {
  Reveal,
  MagneticButton,
  ParallaxText,
  StaggerContainer,
  FloatingCard,
  TextReveal,
  WordReveal,
  ScaleOnView,
} from "@/components/motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react";

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section - Impressive First Impression */}
      <section className="relative min-h-screen flex items-center justify-center py-20">
        {/* Background Parallax Text */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
          <ParallaxText speed={0.5} className="text-[15vw] font-bold whitespace-nowrap">
            DEVELOPER • DESIGNER • CREATOR
          </ParallaxText>
        </div>

        <div className="container max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center space-y-8">
            {/* Profile Image with Scale */}
            <ScaleOnView scale={0.5} duration={1}>
              <div className="relative inline-block">
                <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-purple-500/40 shadow-2xl shadow-purple-500/20">
                  <img
                    src="/profile.jpeg"
                    alt="Your Name"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Animated Ring */}
                <div className="absolute inset-0 rounded-full border-2 border-purple-400 animate-ping opacity-20"></div>
              </div>
            </ScaleOnView>

            {/* Main Heading - Character Animation */}
            <TextReveal
              text="Hi, I'm Your Name"
              as="h1"
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent"
              variant="wave"
              duration={0.05}
            />

            {/* Subtitle - Word Animation */}
            <WordReveal
              text="Full-Stack Developer • UI/UX Designer • Creative Problem Solver"
              as="p"
              className="text-xl md:text-2xl text-muted-foreground"
              delay={1.5}
              staggerDelay={0.1}
            />

            {/* Description */}
            <Reveal variant="fade" delay={2.5}>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                I build exceptional digital experiences that combine beautiful design
                with powerful functionality. Let's create something amazing together.
              </p>
            </Reveal>

            {/* CTA Buttons - Magnetic Effect */}
            <div className="flex flex-wrap gap-4 justify-center pt-8">
              <Reveal variant="zoom" delay={3}>
                <MagneticButton
                  className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-semibold shadow-lg shadow-purple-500/30 transition-all"
                  strength={0.4}
                >
                  <span className="flex items-center gap-2">
                    <Download className="w-5 h-5" />
                    Download CV
                  </span>
                </MagneticButton>
              </Reveal>

              <Reveal variant="zoom" delay={3.2}>
                <MagneticButton
                  className="px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-full font-semibold hover:bg-purple-500/10 transition-all"
                  strength={0.3}
                >
                  <span className="flex items-center gap-2">
                    View Projects
                    <ExternalLink className="w-5 h-5" />
                  </span>
                </MagneticButton>
              </Reveal>
            </div>

            {/* Social Links */}
            <Reveal variant="slide-up" delay={3.5}>
              <div className="flex gap-4 justify-center pt-8">
                <MagneticButton className="p-3 rounded-full bg-purple-500/10 hover:bg-purple-500/20 transition-all">
                  <Github className="w-6 h-6 text-purple-400" />
                </MagneticButton>
                <MagneticButton className="p-3 rounded-full bg-purple-500/10 hover:bg-purple-500/20 transition-all">
                  <Linkedin className="w-6 h-6 text-purple-400" />
                </MagneticButton>
                <MagneticButton className="p-3 rounded-full bg-purple-500/10 hover:bg-purple-500/20 transition-all">
                  <Mail className="w-6 h-6 text-purple-400" />
                </MagneticButton>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Scroll Indicator */}
        <Reveal variant="fade" delay={4}>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
            <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center p-2">
              <div className="w-1 h-3 bg-purple-400 rounded-full animate-bounce"></div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent">
        <div className="container max-w-6xl mx-auto px-4">
          <Reveal variant="slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Reveal variant="slide-left" delay={0.2}>
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With over <span className="text-purple-400 font-semibold">5 years of experience</span> in
                  web development, I specialize in building modern, scalable applications that users love.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  My expertise spans the full stack, from crafting pixel-perfect interfaces with
                  <span className="text-purple-400 font-semibold"> React and Next.js</span> to
                  architecting robust backends with
                  <span className="text-purple-400 font-semibold"> Node.js and PostgreSQL</span>.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm passionate about creating <span className="text-purple-400 font-semibold">
                  exceptional user experiences</span> and writing clean, maintainable code.
                </p>
              </div>
            </Reveal>

            <Reveal variant="slide-right" delay={0.4}>
              <div className="grid grid-cols-2 gap-4">
                <ScaleOnView delay={0.6} scale={0.5}>
                  <div className="p-6 bg-purple-500/10 rounded-2xl border border-purple-500/20 text-center">
                    <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
                    <div className="text-sm text-muted-foreground">Projects</div>
                  </div>
                </ScaleOnView>
                <ScaleOnView delay={0.7} scale={0.5}>
                  <div className="p-6 bg-blue-500/10 rounded-2xl border border-blue-500/20 text-center">
                    <div className="text-4xl font-bold text-blue-400 mb-2">30+</div>
                    <div className="text-sm text-muted-foreground">Clients</div>
                  </div>
                </ScaleOnView>
                <ScaleOnView delay={0.8} scale={0.5}>
                  <div className="p-6 bg-green-500/10 rounded-2xl border border-green-500/20 text-center">
                    <div className="text-4xl font-bold text-green-400 mb-2">5+</div>
                    <div className="text-sm text-muted-foreground">Years</div>
                  </div>
                </ScaleOnView>
                <ScaleOnView delay={0.9} scale={0.5}>
                  <div className="p-6 bg-orange-500/10 rounded-2xl border border-orange-500/20 text-center">
                    <div className="text-4xl font-bold text-orange-400 mb-2">100%</div>
                    <div className="text-sm text-muted-foreground">Satisfied</div>
                  </div>
                </ScaleOnView>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Skills Section with 3D Cards */}
      <section className="py-20">
        <div className="container max-w-6xl mx-auto px-4">
          <Reveal variant="slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              What I Do Best
            </h2>
            <p className="text-center text-muted-foreground mb-16">
              Hover over cards to see the 3D effect
            </p>
          </Reveal>

          <StaggerContainer staggerDelay={0.15} className="grid md:grid-cols-3 gap-8">
            <FloatingCard intensity={8}>
              <Card className="h-full bg-gradient-to-br from-purple-500/10 to-purple-600/5 border-purple-500/20">
                <CardHeader>
                  <div className="text-5xl mb-4">💻</div>
                  <CardTitle className="text-2xl">Frontend Development</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">
                    Building responsive, accessible interfaces with modern frameworks.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-purple-500/20 rounded-full text-xs">React</span>
                    <span className="px-3 py-1 bg-purple-500/20 rounded-full text-xs">Next.js</span>
                    <span className="px-3 py-1 bg-purple-500/20 rounded-full text-xs">TypeScript</span>
                    <span className="px-3 py-1 bg-purple-500/20 rounded-full text-xs">Tailwind</span>
                  </div>
                </CardContent>
              </Card>
            </FloatingCard>

            <FloatingCard intensity={8}>
              <Card className="h-full bg-gradient-to-br from-blue-500/10 to-blue-600/5 border-blue-500/20">
                <CardHeader>
                  <div className="text-5xl mb-4">⚙️</div>
                  <CardTitle className="text-2xl">Backend Development</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">
                    Creating scalable APIs and robust server-side applications.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-500/20 rounded-full text-xs">Node.js</span>
                    <span className="px-3 py-1 bg-blue-500/20 rounded-full text-xs">PostgreSQL</span>
                    <span className="px-3 py-1 bg-blue-500/20 rounded-full text-xs">MongoDB</span>
                    <span className="px-3 py-1 bg-blue-500/20 rounded-full text-xs">REST APIs</span>
                  </div>
                </CardContent>
              </Card>
            </FloatingCard>

            <FloatingCard intensity={8}>
              <Card className="h-full bg-gradient-to-br from-pink-500/10 to-pink-600/5 border-pink-500/20">
                <CardHeader>
                  <div className="text-5xl mb-4">🎨</div>
                  <CardTitle className="text-2xl">UI/UX Design</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">
                    Designing beautiful, user-centered digital experiences.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-pink-500/20 rounded-full text-xs">Figma</span>
                    <span className="px-3 py-1 bg-pink-500/20 rounded-full text-xs">Adobe XD</span>
                    <span className="px-3 py-1 bg-pink-500/20 rounded-full text-xs">Prototyping</span>
                    <span className="px-3 py-1 bg-pink-500/20 rounded-full text-xs">User Research</span>
                  </div>
                </CardContent>
              </Card>
            </FloatingCard>
          </StaggerContainer>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="relative py-20 bg-gradient-to-b from-purple-500/5 to-transparent">
        {/* Background Parallax */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none overflow-hidden">
          <ParallaxText speed={0.3} className="text-[20vw] font-bold">
            PROJECTS
          </ParallaxText>
        </div>

        <div className="container max-w-6xl mx-auto px-4 relative z-10">
          <Reveal variant="slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Featured Work
            </h2>
          </Reveal>

          <div className="space-y-12">
            {/* Project 1 */}
            <Reveal variant="slide-left" delay={0.2}>
              <FloatingCard intensity={5}>
                <Card className="overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="aspect-video md:aspect-auto overflow-hidden">
                      <img
                        src="/project1.jpg"
                        alt="Project 1"
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-6 flex flex-col justify-center">
                      <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        E-Commerce Platform
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        A full-featured online shopping platform with real-time inventory,
                        secure payments, and admin dashboard. Built for scalability.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-purple-500/10 rounded-full text-xs">Next.js</span>
                        <span className="px-3 py-1 bg-purple-500/10 rounded-full text-xs">Stripe</span>
                        <span className="px-3 py-1 bg-purple-500/10 rounded-full text-xs">PostgreSQL</span>
                      </div>
                      <MagneticButton className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold w-fit">
                        View Project
                      </MagneticButton>
                    </CardContent>
                  </div>
                </Card>
              </FloatingCard>
            </Reveal>

            {/* Project 2 */}
            <Reveal variant="slide-right" delay={0.2}>
              <FloatingCard intensity={5}>
                <Card className="overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-6">
                    <CardContent className="p-6 flex flex-col justify-center md:order-1">
                      <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        SaaS Analytics Dashboard
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Real-time analytics platform with interactive charts, data visualization,
                        and custom reporting features for enterprise clients.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-blue-500/10 rounded-full text-xs">React</span>
                        <span className="px-3 py-1 bg-blue-500/10 rounded-full text-xs">D3.js</span>
                        <span className="px-3 py-1 bg-blue-500/10 rounded-full text-xs">Node.js</span>
                      </div>
                      <MagneticButton className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold w-fit">
                        View Project
                      </MagneticButton>
                    </CardContent>
                    <div className="aspect-video md:aspect-auto overflow-hidden md:order-2">
                      <img
                        src="/project2.jpg"
                        alt="Project 2"
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </Card>
              </FloatingCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-purple-900/20"></div>

        <div className="container max-w-4xl mx-auto px-4 relative z-10 text-center space-y-8">
          <ScaleOnView scale={0.7}>
            <TextReveal
              text="Let's Create Something Amazing"
              as="h2"
              className="text-4xl md:text-6xl font-bold"
              variant="blur"
              duration={0.04}
            />
          </ScaleOnView>

          <Reveal variant="fade" delay={1.5}>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I'm currently available for freelance projects and full-time opportunities.
              Let's bring your ideas to life.
            </p>
          </Reveal>

          <Reveal variant="zoom" delay={2}>
            <MagneticButton
              className="px-12 py-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-xl rounded-full font-bold shadow-2xl shadow-purple-500/30"
              strength={0.5}
            >
              <span className="flex items-center gap-3">
                Get In Touch
                <Mail className="w-6 h-6" />
              </span>
            </MagneticButton>
          </Reveal>

          <Reveal variant="slide-up" delay={2.5}>
            <p className="text-sm text-muted-foreground pt-8">
              Or email me directly at{" "}
              <a href="mailto:hello@example.com" className="text-purple-400 hover:underline">
                hello@example.com
              </a>
            </p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
```

## How to Use This Example

### 1. Copy the Code
Copy the entire component above into your `app/page.tsx` file.

### 2. Replace Content
- Change `"Your Name"` to your actual name
- Update `/profile.jpeg` to your image path
- Replace project images and descriptions
- Update social links
- Modify text content to match your skills

### 3. Customize Colors
Change the gradient colors throughout:
- `purple-400`, `purple-600` → your brand colors
- `pink-400`, `blue-400` → accent colors

### 4. Test Animations
Run your dev server and scroll through the page to see all animations trigger.

## Key Features Used

✅ **TextReveal** - Hero heading with wave effect
✅ **WordReveal** - Subtitle animation
✅ **MagneticButton** - All CTAs and buttons
✅ **FloatingCard** - Skills and project cards with 3D effect
✅ **ParallaxText** - Background decorative text
✅ **Reveal** - All scroll-triggered sections
✅ **ScaleOnView** - Statistics and profile image
✅ **StaggerContainer** - Skills grid

## Performance Tips

1. Images should be optimized (use Next.js Image component)
2. Keep total animations per section under 10
3. Test on mobile devices
4. Ensure smooth 60fps scrolling

## Customization Examples

### Change Animation Speed
```tsx
<TextReveal
  text="Your Text"
  duration={0.03}  // Faster character animation
/>
```

### Adjust Magnetic Strength
```tsx
<MagneticButton strength={0.6}>  // More dramatic pull
  Button
</MagneticButton>
```

### Different Reveal Directions
```tsx
<Reveal variant="slide-left">   // From left
<Reveal variant="slide-right">  // From right
<Reveal variant="zoom">          // Scale up
<Reveal variant="fade">          // Just fade
```

This page will immediately impress clients with its professional animations! 🚀