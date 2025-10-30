# Framer Motion Quick Start Guide

## 🚀 Get Started in 5 Minutes

### Step 1: Import Components

```tsx
import {
  Reveal,
  MagneticButton,
  FloatingCard,
  TextReveal,
  WordReveal,
  StaggerContainer,
} from "@/components/motion";
```

### Step 2: Use in Your Page

```tsx
export default function HomePage() {
  return (
    <main>
      {/* Hero with Text Animation */}
      <TextReveal
        text="Welcome to My Portfolio"
        as="h1"
        className="text-5xl font-bold"
        variant="wave"
      />

      {/* Scroll-triggered Content */}
      <Reveal variant="slide-up">
        <h2>About Me</h2>
        <p>Your content here...</p>
      </Reveal>

      {/* Magnetic CTA Button */}
      <MagneticButton className="px-8 py-4 bg-purple-600 text-white rounded-full">
        Contact Me
      </MagneticButton>
    </main>
  );
}
```

---

## 🎯 Most Common Patterns

### Hero Section
```tsx
<TextReveal text="Your Name" variant="wave" as="h1" />
<WordReveal text="Your tagline here" delay={1} />
<MagneticButton>Get Started</MagneticButton>
```

### Feature Grid
```tsx
<StaggerContainer className="grid grid-cols-3 gap-6">
  <FloatingCard><Card>Feature 1</Card></FloatingCard>
  <FloatingCard><Card>Feature 2</Card></FloatingCard>
  <FloatingCard><Card>Feature 3</Card></FloatingCard>
</StaggerContainer>
```

### Content Sections
```tsx
<Reveal variant="slide-up">
  <h2>Section Title</h2>
  <p>Content that appears on scroll</p>
</Reveal>
```

---

## 📦 Component Quick Reference

| Component | Purpose | Example |
|-----------|---------|---------|
| **TextReveal** | Animate text character-by-character | `<TextReveal text="Hi" variant="wave" />` |
| **WordReveal** | Animate text word-by-word | `<WordReveal text="Your tagline" />` |
| **Reveal** | Show content on scroll | `<Reveal variant="slide-up">` |
| **MagneticButton** | Interactive magnetic button | `<MagneticButton>Click</MagneticButton>` |
| **FloatingCard** | 3D hover effect on cards | `<FloatingCard><Card/></FloatingCard>` |
| **StaggerContainer** | Sequential child animations | `<StaggerContainer>` |
| **ParallaxText** | Scrolling parallax effect | `<ParallaxText speed={0.5}>` |
| **ScaleOnView** | Scale up when visible | `<ScaleOnView scale={0.5}>` |

---

## ⚡ Component Props

### TextReveal
```tsx
text: string           // The text to animate
variant?: "slide-up" | "fade" | "blur" | "wave"  // Animation style
as?: "h1" | "h2" | "p" | "span"  // HTML element
duration?: number      // Delay between characters (0.05 default)
delay?: number        // Initial delay
```

### Reveal
```tsx
variant?: "slide-up" | "slide-down" | "slide-left" | "slide-right" | "zoom" | "fade"
delay?: number        // Delay before animation (seconds)
duration?: number     // Animation duration (0.6 default)
```

### MagneticButton
```tsx
strength?: number     // Magnetic pull strength (0.3 default, 0.3-0.5 recommended)
className?: string    // Your button styles
```

### FloatingCard
```tsx
intensity?: number    // 3D tilt intensity (15 default, 5-10 for subtle)
className?: string
```

---

## 💡 Best Practices

### ✅ DO
- Use **TextReveal** for hero headings
- Use **MagneticButton** for important CTAs
- Use **FloatingCard** for project showcases
- Use **Reveal** for content sections
- Keep delays under 3 seconds total
- Use **StaggerContainer** for grids

### ❌ DON'T
- Don't use TextReveal on long paragraphs
- Don't set magnetic strength above 0.6
- Don't animate every single element
- Don't forget to test on mobile

---

## 🎨 Animation Variants

### TextReveal Variants
- `wave` - Characters wave in with rotation (best for titles)
- `slide-up` - Characters slide up smoothly
- `blur` - Characters blur into focus
- `fade` - Simple fade in

### Reveal Variants
- `slide-up` - Content slides up from below (most common)
- `slide-left` - Content slides from left
- `slide-right` - Content slides from right
- `zoom` - Content scales up
- `fade` - Simple fade

---

## 🔥 Copy-Paste Examples

### Example 1: Impressive Hero
```tsx
<section className="min-h-screen flex items-center justify-center">
  <div className="text-center space-y-8">
    <TextReveal
      text="Hi, I'm John Doe"
      as="h1"
      className="text-6xl font-bold"
      variant="wave"
    />
    
    <WordReveal
      text="Full-Stack Developer & Designer"
      as="p"
      className="text-2xl text-muted-foreground"
      delay={1.5}
    />
    
    <Reveal variant="zoom" delay={2.5}>
      <MagneticButton className="px-8 py-4 bg-purple-600 text-white rounded-full">
        View My Work
      </MagneticButton>
    </Reveal>
  </div>
</section>
```

### Example 2: Feature Cards
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
          <p>Node.js, PostgreSQL</p>
        </CardContent>
      </Card>
    </FloatingCard>

    <FloatingCard>
      <Card>
        <CardHeader>
          <CardTitle>Design</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Figma, UI/UX</p>
        </CardContent>
      </Card>
    </FloatingCard>
  </StaggerContainer>
</section>
```

### Example 3: Project Showcase
```tsx
<Reveal variant="slide-left">
  <FloatingCard intensity={5}>
    <Card>
      <div className="grid md:grid-cols-2 gap-6">
        <img src="/project.jpg" alt="Project" className="w-full" />
        <CardContent className="p-6">
          <h3 className="text-2xl font-bold mb-4">Project Title</h3>
          <p className="mb-4">Description of your amazing project...</p>
          <MagneticButton className="px-6 py-3 bg-purple-600 text-white rounded-lg">
            View Project
          </MagneticButton>
        </CardContent>
      </div>
    </Card>
  </FloatingCard>
</Reveal>
```

---

## 🎬 Demo Page

Visit `/framer-demo` to see all animations in action!

---

## 📚 Full Documentation

- **FRAMER_MOTION_GUIDE.md** - Complete reference
- **FRAMER_EXAMPLE_PAGE.md** - Full page example
- **Demo**: `/framer-demo`

---

## ✨ Summary

You now have powerful animations that:
- ✅ Attract client attention
- ✅ Look professional
- ✅ Are simple to use
- ✅ Perform at 60fps
- ✅ Work on all devices

**Start with**:
1. Add TextReveal to your hero heading
2. Wrap sections in Reveal components
3. Use MagneticButton for CTAs
4. Add FloatingCard to project showcases

That's it! Your portfolio will immediately stand out. 🚀