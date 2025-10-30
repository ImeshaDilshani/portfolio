# Framer Motion Animation Guide

## 🚀 Powerful Animations for Client Attraction

This guide covers all Framer Motion components created for your portfolio. These animations are designed to be **simple to use** but **impressive to see**.

---

## 📦 Installation

Framer Motion is already installed in your project:

```bash
npm install framer-motion
```

---

## 🎯 Quick Start

### Import Components

```tsx
import {
  Reveal,
  MagneticButton,
  ParallaxText,
  StaggerContainer,
  FloatingCard,
  TextReveal,
  WordReveal,
  ScaleOnView,
  PageTransition,
} from "@/components/motion";
```

### Use in Your Pages

```tsx
<Reveal variant="slide-up">
  <h1>Your Heading</h1>
</Reveal>

<MagneticButton>
  Click Me
</MagneticButton>

<FloatingCard>
  <Card>Your Content</Card>
</FloatingCard>
```

---

## 🎨 Components

### 1. Reveal - Scroll-Triggered Animations

**Purpose**: Animate elements when they scroll into view

**Variants**:
- `slide-up` - Slides up from below (default)
- `slide-down` - Slides down from above
- `slide-left` - Slides from left
- `slide-right` - Slides from right
- `zoom` - Scales up into view
- `fade` - Simple fade in

**Props**:
```tsx
interface RevealProps {
  children: React.ReactNode;
  variant?: "slide-up" | "slide-down" | "slide-left" | "slide-right" | "zoom" | "fade";
  delay?: number;        // delay in seconds (default: 0)
  duration?: number;     // animation duration (default: 0.6)
  className?: string;
}
```

**Example**:
```tsx
<Reveal variant="slide-up" delay={0.2}>
  <h2>This slides up when scrolled into view</h2>
</Reveal>

<Reveal variant="zoom" duration={0.8}>
  <Card>This zooms in</Card>
</Reveal>
```

**When to Use**:
- Section headings
- Cards and content blocks
- Images and media
- Call-to-action sections

---

### 2. MagneticButton - Interactive Magnetic Effect

**Purpose**: Button follows mouse cursor with magnetic attraction

**Props**:
```tsx
interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;     // magnetic pull strength (default: 0.3)
}
```

**Example**:
```tsx
<MagneticButton 
  className="px-8 py-4 bg-purple-600 text-white rounded-full"
  strength={0.4}
>
  Contact Me
</MagneticButton>

<MagneticButton className="btn-primary">
  View Projects
</MagneticButton>
```

**When to Use**:
- Primary CTA buttons
- Navigation buttons
- Interactive elements you want to highlight
- Portfolio project links

**Pro Tip**: Higher strength (0.5-0.8) = more dramatic effect

---

### 3. FloatingCard - 3D Tilt Effect

**Purpose**: Card tilts in 3D based on mouse position

**Props**:
```tsx
interface FloatingCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;    // tilt intensity (default: 15)
}
```

**Example**:
```tsx
<FloatingCard intensity={10}>
  <Card>
    <CardHeader>
      <CardTitle>Project Title</CardTitle>
    </CardHeader>
    <CardContent>
      <p>Hover over me for 3D effect</p>
    </CardContent>
  </Card>
</FloatingCard>
```

**When to Use**:
- Project showcase cards
- Service/feature cards
- Team member cards
- Testimonial cards

**Pro Tip**: Lower intensity (5-10) for subtle, professional look

---

### 4. ParallaxText - Scroll Parallax Effect

**Purpose**: Text moves at different speed than page scroll

**Props**:
```tsx
interface ParallaxTextProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;        // parallax speed (default: 0.5)
  direction?: "up" | "down";
}
```

**Example**:
```tsx
<ParallaxText speed={0.5} className="text-9xl font-bold opacity-10">
  DEVELOPER
</ParallaxText>

<ParallaxText speed={0.8} direction="down">
  <h2>Scrolls slower than page</h2>
</ParallaxText>
```

**When to Use**:
- Background text
- Section dividers
- Hero section decorative text
- Creative visual effects

---

### 5. TextReveal - Character Animation

**Purpose**: Animate text character by character

**Variants**:
- `slide-up` - Each character slides up
- `fade` - Each character fades in
- `blur` - Each character blurs into focus
- `wave` - Each character waves in with rotation

**Props**:
```tsx
interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;     // delay between characters (default: 0.05)
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  variant?: "slide-up" | "fade" | "blur" | "wave";
}
```

**Example**:
```tsx
<TextReveal
  text="Welcome to My Portfolio"
  as="h1"
  className="text-5xl font-bold"
  variant="wave"
/>

<TextReveal
  text="Every character animates individually"
  variant="blur"
  duration={0.03}
/>
```

**When to Use**:
- Hero headings
- Section titles you want to emphasize
- Landing page headers
- Special announcements

---

### 6. WordReveal - Word-by-Word Animation

**Purpose**: Animate text word by word (faster than character)

**Props**:
```tsx
interface WordRevealProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number; // delay between words (default: 0.1)
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
}
```

**Example**:
```tsx
<WordReveal
  text="I create beautiful digital experiences that users love"
  as="p"
  className="text-xl"
  staggerDelay={0.08}
/>
```

**When to Use**:
- Taglines and slogans
- Longer headings
- Descriptions under hero
- Quote sections

---

### 7. StaggerContainer - Sequential Children Animation

**Purpose**: Animate children elements in sequence

**Props**:
```tsx
interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;  // delay between items (default: 0.1)
  initialDelay?: number;  // delay before first item (default: 0)
}
```

**Example**:
```tsx
<StaggerContainer staggerDelay={0.15} className="grid grid-cols-3 gap-6">
  <Card>Feature 1</Card>
  <Card>Feature 2</Card>
  <Card>Feature 3</Card>
  <Card>Feature 4</Card>
  <Card>Feature 5</Card>
  <Card>Feature 6</Card>
</StaggerContainer>
```

**When to Use**:
- Feature grids
- Service lists
- Project galleries
- Team member grids
- Skill lists

---

### 8. ScaleOnView - Scale When Visible

**Purpose**: Element scales up when scrolled into view

**Props**:
```tsx
interface ScaleOnViewProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;     // animation duration (default: 0.6)
  scale?: number;        // initial scale (default: 0.8)
}
```

**Example**:
```tsx
<ScaleOnView scale={0.5} duration={0.8}>
  <div className="w-64 h-64 bg-purple-600 rounded-full" />
</ScaleOnView>

<ScaleOnView delay={0.2}>
  <img src="/logo.png" alt="Logo" />
</ScaleOnView>
```

**When to Use**:
- Logos and icons
- Images that need emphasis
- Statistics or numbers
- Decorative elements

---

### 9. PageTransition - Smooth Page Changes

**Purpose**: Animate between page navigations

**Three Variants Available**:

**PageTransition** - Fade and slide up:
```tsx
import { PageTransition } from "@/components/motion";

export default function Layout({ children }) {
  return <PageTransition>{children}</PageTransition>;
}
```

**SlidePageTransition** - Slide horizontally:
```tsx
import { SlidePageTransition } from "@/components/motion";

export default function Layout({ children }) {
  return <SlidePageTransition>{children}</SlidePageTransition>;
}
```

**ScalePageTransition** - Scale effect:
```tsx
import { ScalePageTransition } from "@/components/motion";

export default function Layout({ children }) {
  return <ScalePageTransition>{children}</ScalePageTransition>;
}
```

**When to Use**:
- Wrap entire page content in layout
- Adds polish to navigation
- Makes site feel like an app

---

## 🎓 Real-World Examples

### Hero Section

```tsx
<section className="py-20">
  <div className="container">
    <TextReveal
      text="Hi, I'm John Doe"
      as="h1"
      className="text-6xl font-bold mb-4"
      variant="wave"
    />
    
    <WordReveal
      text="Full-Stack Developer & Designer"
      as="p"
      className="text-2xl text-muted-foreground mb-8"
      delay={1}
    />
    
    <Reveal variant="zoom" delay={1.5}>
      <MagneticButton className="btn-primary">
        View My Work
      </MagneticButton>
    </Reveal>
  </div>
</section>
```

---

### Feature Grid with Stagger

```tsx
<section>
  <Reveal variant="slide-up">
    <h2 className="text-4xl font-bold text-center mb-12">
      What I Do
    </h2>
  </Reveal>

  <StaggerContainer staggerDelay={0.15} className="grid md:grid-cols-3 gap-6">
    <FloatingCard>
      <Card>
        <CardHeader>
          <CardTitle>Frontend</CardTitle>
        </CardHeader>
        <CardContent>
          <p>React, Next.js, TypeScript</p>
        </CardContent>
      </Card>
    </FloatingCard>

    <FloatingCard>
      <Card>
        <CardHeader>
          <CardTitle>Backend</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Node.js, PostgreSQL, APIs</p>
        </CardContent>
      </Card>
    </FloatingCard>

    <FloatingCard>
      <Card>
        <CardHeader>
          <CardTitle>Design</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Figma, UI/UX, Prototyping</p>
        </CardContent>
      </Card>
    </FloatingCard>
  </StaggerContainer>
</section>
```

---

### Projects Showcase

```tsx
<section>
  <ParallaxText speed={0.5} className="text-[200px] font-bold opacity-5">
    PROJECTS
  </ParallaxText>

  <div className="relative space-y-12">
    {projects.map((project, index) => (
      <Reveal 
        key={project.id} 
        variant={index % 2 === 0 ? "slide-left" : "slide-right"}
        delay={index * 0.1}
      >
        <FloatingCard>
          <Card>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{project.description}</p>
              <MagneticButton className="mt-4">
                View Project
              </MagneticButton>
            </CardContent>
          </Card>
        </FloatingCard>
      </Reveal>
    ))}
  </div>
</section>
```

---

### Call-to-Action

```tsx
<section className="text-center py-20">
  <ScaleOnView scale={0.7}>
    <TextReveal
      text="Let's Work Together"
      as="h2"
      className="text-5xl font-bold mb-6"
      variant="blur"
    />
  </ScaleOnView>

  <Reveal variant="fade" delay={0.8}>
    <p className="text-xl mb-8">
      Have a project in mind? Let's make it happen.
    </p>
  </Reveal>

  <Reveal variant="zoom" delay={1.2}>
    <MagneticButton 
      className="px-12 py-6 bg-purple-600 text-white text-xl rounded-full"
      strength={0.5}
    >
      Get In Touch
    </MagneticButton>
  </Reveal>
</section>
```

---

## 💡 Best Practices

### ✅ DO

1. **Use Reveal for scroll animations**
   - Perfect for content that should appear as user scrolls

2. **Use MagneticButton for CTAs**
   - Makes important buttons interactive and noticeable

3. **Use FloatingCard for portfolios**
   - Great for project showcases and feature cards

4. **Use TextReveal for headlines**
   - Catches attention on hero sections

5. **Use StaggerContainer for grids**
   - Makes lists and grids feel alive

6. **Keep delays reasonable**
   - 0.1-0.3s between items is good
   - Don't exceed 2s total wait time

7. **Combine animations**
   - Mix different components for variety

### ❌ DON'T

1. **Don't animate everything**
   - Choose key elements for animation

2. **Don't use long character animations everywhere**
   - TextReveal is powerful - use it for headlines only

3. **Don't set magnetic strength too high**
   - 0.3-0.5 is professional, higher is gimmicky

4. **Don't forget mobile**
   - Some effects (like 3D tilt) work better on desktop

5. **Don't overuse parallax**
   - One or two per page maximum

---

## 🎯 Animation Timing Guide

| Component | Recommended Duration | Recommended Delay |
|-----------|---------------------|-------------------|
| Reveal | 0.5-0.8s | 0-0.3s |
| TextReveal (char) | 0.03-0.08s | 0-0.5s |
| WordReveal | 0.08-0.15s | 0-0.5s |
| StaggerContainer | 0.1-0.2s between | 0-0.3s initial |
| ScaleOnView | 0.6-1s | 0-0.3s |
| FloatingCard | Instant on hover | N/A |
| MagneticButton | Instant on hover | N/A |

---

## 🎬 Demo Page

Visit `/framer-demo` to see all animations in action with live examples!

---

## 🔧 Customization

All components accept `className` prop for styling:

```tsx
<Reveal variant="slide-up" className="my-custom-class">
  <div>Content</div>
</Reveal>
```

For more control, you can modify the component files in `components/motion/`

---

## 📊 Performance

All animations:
- ✅ Use GPU acceleration (transform and opacity)
- ✅ Render at 60fps on modern devices
- ✅ Use Framer Motion's optimized animation engine
- ✅ Support reduced motion preferences (automatic)

---

## ♿ Accessibility

Framer Motion automatically respects `prefers-reduced-motion`:
- Users who prefer reduced motion see instant content
- No additional code needed
- Built into the library

---

## 🚀 Quick Reference

**Most Used Combinations**:

```tsx
// Hero Section
<TextReveal text="Title" variant="wave" />
<WordReveal text="Subtitle" delay={1} />
<MagneticButton>CTA</MagneticButton>

// Feature Grid
<StaggerContainer>
  <FloatingCard>Card 1</FloatingCard>
  <FloatingCard>Card 2</FloatingCard>
  <FloatingCard>Card 3</FloatingCard>
</StaggerContainer>

// Content Sections
<Reveal variant="slide-up">
  <Section />
</Reveal>

// Interactive Elements
<MagneticButton strength={0.4}>
  Click Me
</MagneticButton>
```

---

## 📚 Summary

You now have:
- ✅ **9 powerful animation components**
- ✅ **Multiple variants** for different effects
- ✅ **Simple API** - easy to use
- ✅ **Professional animations** that attract clients
- ✅ **GPU-accelerated** performance
- ✅ **Full accessibility** support

**Start with**:
1. Add `Reveal` to your sections
2. Use `MagneticButton` for CTAs
3. Add `TextReveal` to hero
4. Use `FloatingCard` for projects
5. Try `StaggerContainer` for grids

These animations will make your portfolio stand out and impress potential clients! 🎉