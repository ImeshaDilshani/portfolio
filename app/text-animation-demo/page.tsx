import {
  AnimatedText,
  AnimatedLines,
  AnimatedParagraph,
  InlineLink,
  HighlightText,
} from "@/components/animated-text";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedSection } from "@/components/animated-section";

export default function TextAnimationDemoPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container max-w-4xl mx-auto px-4 space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <AnimatedText variant="blur-in" as="h1" className="text-4xl font-bold">
            Text Animation Examples
          </AnimatedText>
          <AnimatedText variant="fade-up" delay={200} as="p" className="text-muted-foreground">
            Minimalistic animations that enhance readability without being distracting
          </AnimatedText>
        </div>

        {/* Blur In Effect */}
        <AnimatedSection animation="fadeInUp">
          <Card>
            <CardHeader>
              <CardTitle>Blur In Effect</CardTitle>
              <CardDescription>
                Text comes into focus - perfect for headings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <AnimatedText variant="blur-in" as="h2" className="text-2xl font-semibold">
                This heading blurs into focus
              </AnimatedText>
              <p className="text-sm text-muted-foreground">
                Usage: <code className="text-purple-400">variant="blur-in"</code>
              </p>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Letter Reveal */}
        <AnimatedSection animation="fadeInUp">
          <Card>
            <CardHeader>
              <CardTitle>Letter Reveal</CardTitle>
              <CardDescription>
                Letters condense from wide spacing - elegant for titles
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <AnimatedText
                variant="letter-reveal"
                as="h2"
                className="text-2xl font-semibold tracking-tight"
              >
                PREMIUM PORTFOLIO
              </AnimatedText>
              <p className="text-sm text-muted-foreground">
                Usage: <code className="text-purple-400">variant="letter-reveal"</code>
              </p>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Gradient Text */}
        <AnimatedSection animation="fadeInUp">
          <Card>
            <CardHeader>
              <CardTitle>Gradient Text</CardTitle>
              <CardDescription>
                Static and animated gradient text effects
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <AnimatedText
                  variant="gradient"
                  as="h3"
                  className="text-3xl font-bold"
                >
                  Static Gradient Text
                </AnimatedText>
                <p className="text-sm text-muted-foreground">
                  Usage: <code className="text-purple-400">variant="gradient"</code>
                </p>
              </div>
              <div className="space-y-2">
                <AnimatedText
                  variant="gradient-animate"
                  as="h3"
                  className="text-3xl font-bold"
                >
                  Animated Gradient Text
                </AnimatedText>
                <p className="text-sm text-muted-foreground">
                  Usage: <code className="text-purple-400">variant="gradient-animate"</code> (subtle 8s loop)
                </p>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Underline Reveal */}
        <AnimatedSection animation="fadeInUp">
          <Card>
            <CardHeader>
              <CardTitle>Underline Reveal</CardTitle>
              <CardDescription>
                Animated underline appears - great for section headers
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <AnimatedText
                variant="underline-reveal"
                as="h2"
                className="text-2xl font-semibold"
              >
                Featured Projects
              </AnimatedText>
              <p className="text-sm text-muted-foreground">
                Usage: <code className="text-purple-400">variant="underline-reveal"</code>
              </p>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Staggered Lines */}
        <AnimatedSection animation="fadeInUp">
          <Card>
            <CardHeader>
              <CardTitle>Staggered Line Animation</CardTitle>
              <CardDescription>
                Each line reveals sequentially - perfect for poetry or quotes
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <AnimatedLines
                lines={[
                  "Design is not just what it looks like and feels like.",
                  "Design is how it works.",
                  "- Steve Jobs",
                ]}
                className="text-lg space-y-2"
                lineClassName="text-muted-foreground italic"
              />
              <p className="text-sm text-muted-foreground pt-4">
                Usage: <code className="text-purple-400">&lt;AnimatedLines lines=[...] /&gt;</code>
              </p>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Animated Paragraphs */}
        <AnimatedSection animation="fadeInUp">
          <Card>
            <CardHeader>
              <CardTitle>Animated Paragraphs</CardTitle>
              <CardDescription>
                Body text with subtle fade-up animation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <AnimatedParagraph delay={0}>
                This is the first paragraph with a subtle animation. It fades in and moves up slightly,
                creating a professional entrance effect without being distracting.
              </AnimatedParagraph>
              <AnimatedParagraph delay={100}>
                This second paragraph has a 100ms delay, creating a nice sequential reveal effect.
                Perfect for card content or article introductions.
              </AnimatedParagraph>
              <AnimatedParagraph delay={200}>
                The third paragraph continues the sequence. This staggered approach helps guide
                the reader's eye through the content naturally.
              </AnimatedParagraph>
              <p className="text-sm text-muted-foreground pt-4">
                Usage: <code className="text-purple-400">&lt;AnimatedParagraph delay=&#123;100&#125; /&gt;</code>
              </p>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Inline Links */}
        <AnimatedSection animation="fadeInUp">
          <Card>
            <CardHeader>
              <CardTitle>Inline Links with Animation</CardTitle>
              <CardDescription>
                Links with smooth underline animation on hover
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Check out my{" "}
                <InlineLink href="/myworks">latest projects</InlineLink> or read my{" "}
                <InlineLink href="/writes">blog posts</InlineLink>. You can also visit my{" "}
                <InlineLink href="https://github.com" external>
                  GitHub profile
                </InlineLink>{" "}
                to see my open source work.
              </p>
              <p className="text-sm text-muted-foreground pt-4">
                Usage: <code className="text-purple-400">&lt;InlineLink href="..." /&gt;</code>
              </p>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Highlighted Text */}
        <AnimatedSection animation="fadeInUp">
          <Card>
            <CardHeader>
              <CardTitle>Text Highlight Effect</CardTitle>
              <CardDescription>
                Subtle background highlight for emphasis
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg">
                I specialize in <HighlightText>user experience design</HighlightText> and{" "}
                <HighlightText>full-stack development</HighlightText>, creating digital
                experiences that are both beautiful and functional.
              </p>
              <p className="text-sm text-muted-foreground pt-4">
                Usage: <code className="text-purple-400">&lt;HighlightText&gt;...&lt;/HighlightText&gt;</code>
              </p>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Glow Hover Effect */}
        <AnimatedSection animation="fadeInUp">
          <Card>
            <CardHeader>
              <CardTitle>Glow on Hover</CardTitle>
              <CardDescription>
                Text glows subtly when hovered - use sparingly
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <AnimatedText
                variant="glow-hover"
                as="h3"
                className="text-2xl font-bold cursor-pointer inline-block"
              >
                Hover over this text
              </AnimatedText>
              <p className="text-sm text-muted-foreground">
                Usage: <code className="text-purple-400">variant="glow-hover"</code>
              </p>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Real-world Example */}
        <AnimatedSection animation="fadeInUp">
          <Card className="border-purple-500/30 bg-purple-500/5">
            <CardHeader>
              <AnimatedText variant="blur-in" as="h2" className="text-2xl font-bold">
                Real-World Example
              </AnimatedText>
              <CardDescription>
                How these animations work together in a typical card
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <AnimatedText
                variant="gradient"
                as="h3"
                className="text-xl font-semibold"
              >
                Premium Web Development Services
              </AnimatedText>

              <AnimatedParagraph delay={100}>
                I help businesses create <HighlightText>exceptional digital experiences</HighlightText>{" "}
                through modern web technologies and thoughtful design.
              </AnimatedParagraph>

              <AnimatedParagraph delay={200}>
                My services include <InlineLink href="/services">full-stack development</InlineLink>,{" "}
                UI/UX design, and performance optimization. Let's build something amazing together.
              </AnimatedParagraph>

              <div className="pt-4">
                <AnimatedLines
                  lines={[
                    "✓ Modern React & Next.js development",
                    "✓ Responsive, accessible design",
                    "✓ Performance-optimized solutions",
                  ]}
                  className="space-y-2"
                  lineClassName="text-sm text-muted-foreground"
                />
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* CSS Class Reference */}
        <AnimatedSection animation="fadeInUp">
          <Card>
            <CardHeader>
              <CardTitle>Quick CSS Class Reference</CardTitle>
              <CardDescription>
                Use these classes directly in your HTML/JSX
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="grid grid-cols-2 gap-2">
                  <code className="text-purple-400">text-blur-in</code>
                  <span className="text-muted-foreground">Blur to focus animation</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <code className="text-purple-400">text-letter-reveal</code>
                  <span className="text-muted-foreground">Letter spacing animation</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <code className="text-purple-400">text-fade-up</code>
                  <span className="text-muted-foreground">Subtle fade and lift</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <code className="text-purple-400">text-gradient</code>
                  <span className="text-muted-foreground">Static gradient text</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <code className="text-purple-400">text-gradient-animate</code>
                  <span className="text-muted-foreground">Animated gradient</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <code className="text-purple-400">text-stagger-lines</code>
                  <span className="text-muted-foreground">Stagger child elements</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <code className="text-purple-400">inline-link</code>
                  <span className="text-muted-foreground">Animated underline link</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <code className="text-purple-400">text-highlight</code>
                  <span className="text-muted-foreground">Background highlight</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Best Practices */}
        <AnimatedSection animation="fadeInUp">
          <Card className="border-green-500/30 bg-green-500/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">💡</span>
                Best Practices
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>✅ Use blur-in for main headings (h1, h2)</p>
              <p>✅ Use fade-up for body text and paragraphs</p>
              <p>✅ Use gradient text sparingly for emphasis</p>
              <p>✅ Keep delays under 500ms for better UX</p>
              <p>✅ Use stagger effects for lists (100-200ms between items)</p>
              <p>❌ Don't animate every piece of text</p>
              <p>❌ Avoid glow effects on body text</p>
              <p>❌ Don't combine too many text effects in one area</p>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </div>
  );
}
