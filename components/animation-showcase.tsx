"use client";

import { useState } from "react";
import { AnimatedSection } from "@/components/animated-section";
import { AnimatedCard } from "@/components/animated-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function AnimationShowcase() {
  const [trigger, setTrigger] = useState(0);

  const resetAnimations = () => {
    setTrigger((prev) => prev + 1);
  };

  return (
    <div className="space-y-12 py-12" key={trigger}>
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Animation Showcase</h2>
        <p className="text-muted-foreground">
          Preview of all animations implemented in the portfolio
        </p>
        <Button onClick={resetAnimations} variant="outline">
          Reset Animations
        </Button>
      </div>

      {/* Fade In Up */}
      <AnimatedSection animation="fadeInUp">
        <Card>
          <CardHeader>
            <CardTitle>Fade In Up</CardTitle>
            <CardDescription>
              Elements fade in while moving upward. Perfect for hero sections
              and main content.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="animate-fadeInUp">
              <p className="text-sm text-muted-foreground">
                This text uses the fadeInUp animation
              </p>
            </div>
          </CardContent>
        </Card>
      </AnimatedSection>

      {/* Fade In */}
      <AnimatedSection animation="fadeIn">
        <Card>
          <CardHeader>
            <CardTitle>Fade In</CardTitle>
            <CardDescription>
              Simple opacity transition. Great for backgrounds and overlays.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="animate-fadeIn">
              <p className="text-sm text-muted-foreground">
                This text uses the fadeIn animation
              </p>
            </div>
          </CardContent>
        </Card>
      </AnimatedSection>

      {/* Scale In */}
      <AnimatedSection animation="scaleIn">
        <Card>
          <CardHeader>
            <CardTitle>Scale In</CardTitle>
            <CardDescription>
              Scales up from 95% to 100%. Ideal for images and profile pictures.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="animate-scaleIn">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full mx-auto" />
            </div>
          </CardContent>
        </Card>
      </AnimatedSection>

      {/* Slide Animations */}
      <div className="grid md:grid-cols-2 gap-6">
        <AnimatedSection animation="slideInLeft">
          <Card>
            <CardHeader>
              <CardTitle>Slide In Left</CardTitle>
              <CardDescription>Slides from left with fade</CardDescription>
            </CardHeader>
          </Card>
        </AnimatedSection>

        <AnimatedSection animation="slideInRight">
          <Card>
            <CardHeader>
              <CardTitle>Slide In Right</CardTitle>
              <CardDescription>Slides from right with fade</CardDescription>
            </CardHeader>
          </Card>
        </AnimatedSection>
      </div>

      {/* Hover Effects */}
      <Card>
        <CardHeader>
          <CardTitle>Hover Effects</CardTitle>
          <CardDescription>Interactive animations on hover</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Card Hover */}
          <div>
            <h4 className="text-sm font-semibold mb-3">Card Hover (Lift)</h4>
            <Card className="card-hover p-4 cursor-pointer">
              <p className="text-sm">Hover me to see the lift effect</p>
            </Card>
          </div>

          {/* Button Hover */}
          <div>
            <h4 className="text-sm font-semibold mb-3">Button Hover</h4>
            <Button className="bg-purple-600 hover:bg-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30">
              Hover for Scale & Glow
            </Button>
          </div>

          {/* Image Zoom */}
          <div>
            <h4 className="text-sm font-semibold mb-3">Image Zoom</h4>
            <div className="overflow-hidden rounded-lg w-48 h-48 mx-auto">
              <div className="zoom-hover w-full h-full bg-gradient-to-br from-purple-400 to-purple-600" />
            </div>
          </div>

          {/* Link Underline */}
          <div>
            <h4 className="text-sm font-semibold mb-3">Link Underline</h4>
            <a href="#" className="link-underline text-purple-400 font-medium">
              Hover to see underline animation
            </a>
          </div>
        </CardContent>
      </Card>

      {/* Stagger Animation */}
      <Card>
        <CardHeader>
          <CardTitle>Stagger Animation</CardTitle>
          <CardDescription>
            Children elements animate in sequence
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="stagger-children space-y-3">
            <div className="p-3 bg-purple-500/10 rounded-lg">Item 1</div>
            <div className="p-3 bg-purple-500/10 rounded-lg">Item 2</div>
            <div className="p-3 bg-purple-500/10 rounded-lg">Item 3</div>
            <div className="p-3 bg-purple-500/10 rounded-lg">Item 4</div>
            <div className="p-3 bg-purple-500/10 rounded-lg">Item 5</div>
          </div>
        </CardContent>
      </Card>

      {/* Animated Cards Grid */}
      <Card>
        <CardHeader>
          <CardTitle>Animated Card Grid</CardTitle>
          <CardDescription>
            Cards with staggered entrance animation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <AnimatedCard delay={100} variant="hover-lift">
              <CardHeader>
                <CardTitle className="text-lg">Card 1</CardTitle>
                <CardDescription>Delay: 100ms</CardDescription>
              </CardHeader>
            </AnimatedCard>
            <AnimatedCard delay={200} variant="hover-glow">
              <CardHeader>
                <CardTitle className="text-lg">Card 2</CardTitle>
                <CardDescription>Delay: 200ms</CardDescription>
              </CardHeader>
            </AnimatedCard>
            <AnimatedCard delay={300} variant="hover-scale">
              <CardHeader>
                <CardTitle className="text-lg">Card 3</CardTitle>
                <CardDescription>Delay: 300ms</CardDescription>
              </CardHeader>
            </AnimatedCard>
          </div>
        </CardContent>
      </Card>

      {/* Special Effects */}
      <Card>
        <CardHeader>
          <CardTitle>Special Effects</CardTitle>
          <CardDescription>Continuous animation effects</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Shimmer */}
          <div>
            <h4 className="text-sm font-semibold mb-3">Shimmer</h4>
            <div className="shimmer h-16 rounded-lg flex items-center justify-center">
              <span className="text-white font-medium">Loading...</span>
            </div>
          </div>

          {/* Pulse */}
          <div>
            <h4 className="text-sm font-semibold mb-3">Subtle Pulse</h4>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30">
              <span className="relative flex h-3 w-3">
                <span className="pulse-subtle absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-green-400 text-sm font-medium">
                Status Badge
              </span>
            </div>
          </div>

          {/* Border Glow */}
          <div>
            <h4 className="text-sm font-semibold mb-3">Border Glow</h4>
            <Button className="border-glow bg-purple-600 hover:bg-purple-700">
              Glowing Button
            </Button>
          </div>

          {/* Float Effect */}
          <div>
            <h4 className="text-sm font-semibold mb-3">Float on Hover</h4>
            <Button className="btn-float bg-gradient-to-r from-purple-600 to-purple-800">
              Hover to Float
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Performance Note */}
      <Card className="border-purple-500/30 bg-purple-500/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">⚡</span>
            Performance Tips
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-muted-foreground">
          <p>✅ All animations use CSS transforms for GPU acceleration</p>
          <p>✅ Smooth 60fps performance on modern browsers</p>
          <p>✅ Respects prefers-reduced-motion for accessibility</p>
          <p>✅ Minimal CSS with reusable classes</p>
        </CardContent>
      </Card>
    </div>
  );
}
