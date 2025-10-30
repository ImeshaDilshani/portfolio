# Text Animations - Quick Reference Card

## 🚀 5-Second Cheat Sheet

### React Components (Easiest)
```tsx
import { AnimatedText, AnimatedParagraph, InlineLink } from "@/components/animated-text";

<AnimatedText variant="blur-in" as="h1">Heading</AnimatedText>
<AnimatedParagraph delay={100}>Body text</AnimatedParagraph>
<InlineLink href="/page">Link</InlineLink>
```

### CSS Classes (Direct)
```tsx
<h1 className="text-blur-in">Heading</h1>
<p className="text-fade-up text-delay-200">Text</p>
<span className="text-gradient">Highlight</span>
```

---

## 📋 Quick Lookup Table

| What You Want | Component | CSS Class |
|---------------|-----------|-----------|
| **Heading blur effect** | `<AnimatedText variant="blur-in" as="h1">` | `text-blur-in` |
| **Body text fade** | `<AnimatedParagraph>` | `text-fade-up` |
| **Purple gradient** | `<AnimatedText variant="gradient">` | `text-gradient` |
| **Animated gradient** | `<AnimatedText variant="gradient-animate">` | `text-gradient-animate` |
| **Underlined header** | `<AnimatedText variant="underline-reveal">` | `text-underline-reveal` |
| **Staggered lines** | `<AnimatedLines lines={[...]} />` | `text-stagger-lines` |
| **Link with underline** | `<InlineLink href="...">` | `inline-link` |
| **Highlighted text** | `<HighlightText>` | `text-highlight` |
| **Hover glow** | `variant="glow-hover"` | `text-glow-hover` |

---

## ⚡ Common Patterns

### Hero Section
```tsx
<AnimatedText variant="blur-in" as="h1">Your Name</AnimatedText>
<AnimatedText variant="fade-up" as="p" delay={200}>Your Title</AnimatedText>
<AnimatedParagraph delay={400}>Description</AnimatedParagraph>
```

### Card Content
```tsx
<AnimatedText variant="gradient" as="h3">Card Title</AnimatedText>
<AnimatedParagraph delay={100}>First paragraph</AnimatedParagraph>
<AnimatedParagraph delay={200}>Second paragraph</AnimatedParagraph>
```

### Quote/Testimonial
```tsx
<AnimatedLines 
  lines={[
    "Quote text here",
    "— Author Name"
  ]}
  className="text-xl italic"
/>
```

### In-Text Links
```tsx
<p>
  Check my <InlineLink href="/work">portfolio</InlineLink> or
  visit <InlineLink href="https://github.com" external>GitHub</InlineLink>
</p>
```

---

## ⏱️ Delay Guide

| Delay | When to Use |
|-------|-------------|
| **0ms** | First element |
| **100ms** | Second element |
| **200ms** | Third element |
| **300-400ms** | Supporting content |
| **500ms+** | Avoid (too slow) |

**Classes**: `text-delay-100`, `text-delay-200`, `text-delay-300`, `text-delay-400`, `text-delay-500`

---

## ✅ Do's and ❌ Don'ts

### ✅ DO
- Use `blur-in` for H1/H2
- Use `fade-up` for paragraphs
- Use `gradient` for 1-2 keywords only
- Keep delays under 500ms
- Use `inline-link` for text links

### ❌ DON'T
- Animate every text element
- Use `gradient-animate` everywhere
- Use `glow-hover` on body text
- Stack multiple effects
- Use delays over 800ms

---

## 🎯 By Element Type

| Element | Best Animation |
|---------|---------------|
| **H1** | `blur-in` or `gradient` |
| **H2** | `underline-reveal` or `blur-in` |
| **H3-H6** | `fade-up` or `gradient` |
| **Paragraph** | `fade-up` |
| **Quote** | `stagger-lines` |
| **Link** | `inline-link` |
| **Keyword** | `text-gradient` or `highlight` |
| **CTA** | `glow-hover` |

---

## 🎨 All Variants

```tsx
variant="blur-in"           // Blur to focus
variant="letter-reveal"     // Letter spacing
variant="fade-up"           // Subtle fade + lift
variant="gradient"          // Static gradient
variant="gradient-animate"  // Moving gradient (8s)
variant="underline-reveal"  // Animated underline
variant="glow-hover"        // Glow on hover
```

---

## 📦 Component Props

### AnimatedText
```tsx
variant?: "blur-in" | "letter-reveal" | "fade-up" | "gradient" | "gradient-animate" | "underline-reveal" | "glow-hover"
delay?: number              // milliseconds
as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div"
className?: string
```

### AnimatedParagraph
```tsx
delay?: number              // milliseconds
className?: string
```

### InlineLink
```tsx
href: string
external?: boolean          // adds target="_blank"
className?: string
```

### AnimatedLines
```tsx
lines: string[]             // Array of text lines
className?: string          // Container styles
lineClassName?: string      // Individual line styles
as?: "div" | "p" | "h1" etc
```

---

## 💡 Pro Tips

1. **First element = 0ms delay**
2. **Stagger siblings by 100-200ms**
3. **Max 3 animated text elements per section**
4. **Use gradient sparingly (1-2 per page)**
5. **Test on mobile for smoothness**

---

## 🔗 Full Documentation

- **Complete Guide**: `TEXT_ANIMATIONS.md`
- **Live Demo**: Visit `/text-animation-demo`
- **All Animations**: `ANIMATIONS.md`

---

## 🎬 Copy-Paste Examples

### Example 1: Simple Hero
```tsx
<AnimatedText variant="blur-in" as="h1" className="text-5xl font-bold">
  Welcome
</AnimatedText>
<AnimatedParagraph delay={200} className="text-xl">
  I build amazing things
</AnimatedParagraph>
```

### Example 2: Feature Card
```tsx
<Card>
  <AnimatedText variant="gradient" as="h3" className="text-2xl">
    Premium Feature
  </AnimatedText>
  <AnimatedParagraph delay={100}>
    Description text here
  </AnimatedParagraph>
</Card>
```

### Example 3: About Section
```tsx
<AnimatedText variant="underline-reveal" as="h2">
  About Me
</AnimatedText>
<AnimatedParagraph delay={100}>
  I'm a <HighlightText>developer</HighlightText> based in...
</AnimatedParagraph>
```

---

**That's it! Keep it minimal, professional, and purposeful.** ✨