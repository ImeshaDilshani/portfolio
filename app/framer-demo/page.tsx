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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function FramerDemoPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container max-w-7xl mx-auto px-4 space-y-32">
        {/* Hero Section */}
        <section className="text-center space-y-8">
          <TextReveal
            text="Powerful Framer Motion Animations"
            as="h1"
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent"
            variant="wave"
          />

          <WordReveal
            text="Simple to use, impressive to see. Attract clients with professional animations."
            as="p"
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            delay={0.5}
          />

          <div className="flex gap-4 justify-center pt-4">
            <MagneticButton className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-semibold shadow-lg">
              Magnetic Button
            </MagneticButton>
            <MagneticButton className="px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-full font-semibold hover:bg-purple-500/10">
              Try Hover
            </MagneticButton>
          </div>
        </section>

        {/* Text Reveal Variants */}
        <Reveal variant="slide-up">
          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-center mb-12">Text Reveal Animations</h2>

            <div className="space-y-6">
              <div className="p-6 bg-purple-500/5 rounded-lg">
                <p className="text-sm text-muted-foreground mb-4">Slide Up Variant:</p>
                <TextReveal
                  text="Every character slides up smoothly"
                  className="text-2xl font-semibold"
                  variant="slide-up"
                />
              </div>

              <div className="p-6 bg-purple-500/5 rounded-lg">
                <p className="text-sm text-muted-foreground mb-4">Wave Variant:</p>
                <TextReveal
                  text="Characters wave into view with rotation"
                  className="text-2xl font-semibold"
                  variant="wave"
                />
              </div>

              <div className="p-6 bg-purple-500/5 rounded-lg">
                <p className="text-sm text-muted-foreground mb-4">Blur Variant:</p>
                <TextReveal
                  text="Text comes into focus from blur"
                  className="text-2xl font-semibold"
                  variant="blur"
                />
              </div>

              <div className="p-6 bg-purple-500/5 rounded-lg">
                <p className="text-sm text-muted-foreground mb-4">Word Reveal:</p>
                <WordReveal
                  text="Each word appears one after another creating a smooth reading experience"
                  className="text-2xl font-semibold"
                  staggerDelay={0.08}
                />
              </div>
            </div>
          </section>
        </Reveal>

        {/* Parallax Effect */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <ParallaxText speed={0.5} className="text-[200px] font-bold">
              PARALLAX
            </ParallaxText>
          </div>

          <div className="relative z-10 text-center space-y-6">
            <Reveal variant="zoom">
              <h2 className="text-4xl font-bold">Parallax Scrolling</h2>
            </Reveal>
            <Reveal variant="fade" delay={0.2}>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The background text moves at a different speed as you scroll,
                creating depth and visual interest.
              </p>
            </Reveal>
          </div>
        </section>

        {/* 3D Floating Cards */}
        <Reveal variant="slide-up">
          <section className="space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">3D Floating Cards</h2>
              <p className="text-muted-foreground">Hover over cards to see the 3D effect</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <FloatingCard intensity={10}>
                <Card className="h-full bg-gradient-to-br from-purple-500/10 to-purple-600/5 border-purple-500/20">
                  <CardHeader>
                    <div className="text-4xl mb-2">🚀</div>
                    <CardTitle>Fast Performance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Smooth 60fps animations powered by Framer Motion and GPU acceleration.
                    </p>
                  </CardContent>
                </Card>
              </FloatingCard>

              <FloatingCard intensity={10}>
                <Card className="h-full bg-gradient-to-br from-blue-500/10 to-blue-600/5 border-blue-500/20">
                  <CardHeader>
                    <div className="text-4xl mb-2">🎨</div>
                    <CardTitle>Beautiful Design</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Stunning visual effects that capture attention and impress clients.
                    </p>
                  </CardContent>
                </Card>
              </FloatingCard>

              <FloatingCard intensity={10}>
                <Card className="h-full bg-gradient-to-br from-green-500/10 to-green-600/5 border-green-500/20">
                  <CardHeader>
                    <div className="text-4xl mb-2">⚡</div>
                    <CardTitle>Easy to Use</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Simple components that you can drop into any project instantly.
                    </p>
                  </CardContent>
                </Card>
              </FloatingCard>
            </div>
          </section>
        </Reveal>

        {/* Stagger Animation */}
        <section className="space-y-12">
          <Reveal variant="slide-up">
            <h2 className="text-3xl font-bold text-center">Stagger Animations</h2>
          </Reveal>

          <StaggerContainer staggerDelay={0.15} className="grid md:grid-cols-2 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card key={item} className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <h3 className="text-xl font-semibold mb-2">Feature {item}</h3>
                <p className="text-muted-foreground">
                  Each item animates in sequence creating a smooth, professional entrance.
                </p>
              </Card>
            ))}
          </StaggerContainer>
        </section>

        {/* Different Reveal Directions */}
        <section className="space-y-12">
          <h2 className="text-3xl font-bold text-center">Reveal Directions</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Reveal variant="slide-left">
              <Card className="p-6 bg-purple-500/5 border-purple-500/20">
                <h3 className="text-xl font-semibold mb-2">← Slide from Left</h3>
                <p className="text-muted-foreground">
                  Content slides in from the left side
                </p>
              </Card>
            </Reveal>

            <Reveal variant="slide-right">
              <Card className="p-6 bg-blue-500/5 border-blue-500/20">
                <h3 className="text-xl font-semibold mb-2">Slide from Right →</h3>
                <p className="text-muted-foreground">
                  Content slides in from the right side
                </p>
              </Card>
            </Reveal>

            <Reveal variant="slide-up">
              <Card className="p-6 bg-green-500/5 border-green-500/20">
                <h3 className="text-xl font-semibold mb-2">↑ Slide Up</h3>
                <p className="text-muted-foreground">
                  Content slides up from below
                </p>
              </Card>
            </Reveal>

            <Reveal variant="zoom">
              <Card className="p-6 bg-orange-500/5 border-orange-500/20">
                <h3 className="text-xl font-semibold mb-2">⚡ Zoom In</h3>
                <p className="text-muted-foreground">
                  Content scales up into view
                </p>
              </Card>
            </Reveal>
          </div>
        </section>

        {/* Scale on View */}
        <section className="space-y-12">
          <Reveal variant="slide-up">
            <h2 className="text-3xl font-bold text-center">Scale on Scroll</h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {[0, 0.1, 0.2].map((delay, index) => (
              <ScaleOnView key={index} delay={delay} scale={0.5}>
                <div className="aspect-square bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
                  {index + 1}
                </div>
              </ScaleOnView>
            ))}
          </div>
        </section>

        {/* Interactive Buttons Grid */}
        <Reveal variant="slide-up">
          <section className="space-y-12">
            <h2 className="text-3xl font-bold text-center">Magnetic Interactions</h2>
            <p className="text-center text-muted-foreground mb-8">
              Move your mouse over these buttons to feel the magnetic pull
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <MagneticButton
                className="aspect-square bg-purple-600 hover:bg-purple-700 rounded-2xl flex items-center justify-center text-white font-semibold shadow-lg"
                strength={0.4}
              >
                <div className="text-center">
                  <div className="text-3xl mb-2">💼</div>
                  <div>Portfolio</div>
                </div>
              </MagneticButton>

              <MagneticButton
                className="aspect-square bg-blue-600 hover:bg-blue-700 rounded-2xl flex items-center justify-center text-white font-semibold shadow-lg"
                strength={0.4}
              >
                <div className="text-center">
                  <div className="text-3xl mb-2">📧</div>
                  <div>Contact</div>
                </div>
              </MagneticButton>

              <MagneticButton
                className="aspect-square bg-green-600 hover:bg-green-700 rounded-2xl flex items-center justify-center text-white font-semibold shadow-lg"
                strength={0.4}
              >
                <div className="text-center">
                  <div className="text-3xl mb-2">🎨</div>
                  <div>Design</div>
                </div>
              </MagneticButton>

              <MagneticButton
                className="aspect-square bg-orange-600 hover:bg-orange-700 rounded-2xl flex items-center justify-center text-white font-semibold shadow-lg"
                strength={0.4}
              >
                <div className="text-center">
                  <div className="text-3xl mb-2">⚡</div>
                  <div>Speed</div>
                </div>
              </MagneticButton>
            </div>
          </section>
        </Reveal>

        {/* Final CTA */}
        <section className="text-center space-y-8 py-20">
          <ScaleOnView scale={0.8}>
            <motion.div
              className="inline-block"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
                Ready to Impress?
              </h2>
            </motion.div>
          </ScaleOnView>

          <Reveal variant="fade" delay={0.3}>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These animations are simple to implement and will make your portfolio
              stand out to potential clients.
            </p>
          </Reveal>

          <Reveal variant="zoom" delay={0.5}>
            <MagneticButton className="px-12 py-6 bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white text-xl rounded-full font-bold shadow-2xl">
              Start Using Now
            </MagneticButton>
          </Reveal>
        </section>

        {/* Usage Instructions */}
        <Reveal variant="slide-up">
          <Card className="border-purple-500/30 bg-purple-500/5">
            <CardHeader>
              <CardTitle className="text-2xl">How to Use</CardTitle>
              <CardDescription>Copy these components into your project</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <p className="font-semibold text-purple-400">1. Import the components:</p>
                <pre className="bg-black/50 p-4 rounded-lg text-sm overflow-x-auto">
                  <code>{`import { Reveal, MagneticButton, FloatingCard } from "@/components/motion";`}</code>
                </pre>
              </div>

              <div className="space-y-2">
                <p className="font-semibold text-purple-400">2. Use them in your JSX:</p>
                <pre className="bg-black/50 p-4 rounded-lg text-sm overflow-x-auto">
                  <code>{`<Reveal variant="slide-up">
  <YourContent />
</Reveal>

<MagneticButton>
  Click Me
</MagneticButton>

<FloatingCard>
  <Card>3D Effect</Card>
</FloatingCard>`}</code>
                </pre>
              </div>

              <div className="pt-4">
                <p className="text-muted-foreground">
                  All components are located in <code className="text-purple-400">components/motion/</code>
                </p>
              </div>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </div>
  );
}
