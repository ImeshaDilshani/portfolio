# Text Animation Guide

## 📝 Minimalistic Text Animations for Professional Portfolios

This guide covers all text-specific animations that enhance readability and visual appeal without compromising professionalism.

---

## 🎯 Quick Start

### Using React Components (Recommended)

```tsx
import { AnimatedText, AnimatedParagraph, InlineLink } from "@/components/animated-text";

// Animated heading
<AnimatedText variant="blur-in" as="h1">
  Welcome to My Portfolio
</AnimatedText>

// Animated paragraph
<AnimatedParagraph delay={100}>
  This is body text with a subtle animation.
</AnimatedParagraph>

// Inline link with hover effect
<InlineLink href="/contact">Get in touch</InlineLink>
```

### Using CSS Classes

```tsx
// Blur-in effect
<h1 className="text-blur-in">My Heading</h1>

// Fade-up effect
<p className="text-fade-up">Body text</p>

// Gradient text
<span className="text-gradient">Highlighted</span>
```

---

## 🎨 Available Text Animations

### 1. **Blur In** - Best for Headings

**Effect**: Text comes into focus from a subtle blur
**Duration**: 1s
**Use Case**: H1, H2 headings, hero titles

```tsx
<AnimatedText variant="blur-in" as="h1" className="text-4xl font-bold">
  Main Heading
</AnimatedText>
```

**CSS Class**:
```tsx
<h1 className="text-blur-in">Main Heading</h1>
```

---

### 2. **Letter Reveal** - Best for Titles

**Effect**: Letters condense from wide spacing to normal
**Duration**: 0.8s
**Use Case**: Logo text, section titles, premium headings

```tsx
<AnimatedText variant="letter-reveal" as="h2">
  PREMIUM SERVICES
</AnimatedText>
```

**CSS Class**:
```tsx
<h2 className="text-letter-reveal">PREMIUM SERVICES</h2>
```

---

### 3. **Fade Up** - Best for Body Text

**Effect**: Subtle fade-in with upward movement
**Duration**: 0.7s
**Use Case**: Paragraphs, card descriptions, general content

```tsx
<AnimatedText variant="fade-up" as="p">
  This is body text with minimal animation.
</AnimatedText>
```

**CSS Class**:
```tsx
<p className="text-fade-up">Body text</p>
```

---

### 4. **Gradient Text** - Best for Emphasis

**Effect**: Static purple gradient on text
**Duration**: N/A (static)
**Use Case**: Keywords, brand names, call-to-action text

```tsx
<AnimatedText variant="gradient" as="span" className="text-2xl font-bold">
  Featured
</AnimatedText>
```

**CSS Class**:
```tsx
<span className="text-gradient">Important Text</span>
```

---

### 5. **Gradient Animate** - Best for Headers

**Effect**: Subtle gradient shift animation (8s loop)
**Duration**: 8s infinite
**Use Case**: Hero headings, featured text (use sparingly!)

```tsx
<AnimatedText variant="gradient-animate" as="h1" className="text-4xl">
  Animated Gradient
</AnimatedText>
```

**CSS Class**:
```tsx
<h1 className="text-gradient-animate">Hero Heading</h1>
```

---

### 6. **Underline Reveal** - Best for Section Headers

**Effect**: Gradient underline animates from left to right
**Duration**: 0.8s
**Use Case**: Section headers, featured items

```tsx
<AnimatedText variant="underline-reveal" as="h2">
  Featured Projects
</AnimatedText>
```

**CSS Class**:
```tsx
<h2 className="text-underline-reveal">Section Header</h2>
```

---

### 7. **Glow Hover** - Best for Interactive Text

**Effect**: Subtle purple glow on hover
**Duration**: 0.3s transition
**Use Case**: Interactive headings, clickable text

```tsx
<AnimatedText variant="glow-hover" as="h3" className="cursor-pointer">
  Hover Me
</AnimatedText>
```

**CSS Class**:
```tsx
<h3 className="text-glow-hover cursor-pointer">Hover Text</h3>
```

---

## 📦 React Components

### AnimatedText

Versatile component for any text element.

```tsx
interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
  variant?: "blur-in" | "letter-reveal" | "fade-up" | "gradient" | "gradient-animate" | "underline-reveal" | "glow-hover";
  delay?: number; // milliseconds
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
}
```

**Examples**:
```tsx
// H1 with blur effect
<AnimatedText variant="blur-in" as="h1">Title</AnimatedText>

// Delayed paragraph
<AnimatedText variant="fade-up" as="p" delay={200}>Text</AnimatedText>

// Gradient span
<AnimatedText variant="gradient" as="span">Highlighted</AnimatedText>
```

---

### AnimatedLines

Perfect for staggered multi-line reveals (quotes, poetry, lists).

```tsx
interface AnimatedLinesProps {
  lines: string[];
  className?: string;
  lineClassName?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "div";
}
```

**Example**:
```tsx
<AnimatedLines
  lines={[
    "First line appears first",
    "Second line follows",
    "Third line completes the sequence"
  ]}
  className="text-lg italic"
  lineClassName="text-muted-foreground"
/>
```

**Each line automatically delays by 100ms.**

---

### AnimatedParagraph

Specialized for body text with fade-up animation.

```tsx
interface AnimatedParagraphProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}
```

**Example**:
```tsx
<AnimatedParagraph delay={0}>
  First paragraph
</AnimatedParagraph>
<AnimatedParagraph delay={100}>
  Second paragraph with 100ms delay
</AnimatedParagraph>
<AnimatedParagraph delay={200}>
  Third paragraph with 200ms delay
</AnimatedParagraph>
```

---

### InlineLink

Links with smooth underline animation on hover.

```tsx
interface InlineLinkProps {
  children: ReactNode;
  href: string;
  className?: string;
  external?: boolean; // adds target="_blank" and rel
}
```

**Example**:
```tsx
<p>
  Check out my <InlineLink href="/projects">projects</InlineLink> or
  visit my <InlineLink href="https://github.com" external>GitHub</InlineLink>.
</p>
```

---

### HighlightText

Adds subtle background highlight behind text.

```tsx
interface HighlightTextProps {
  children: ReactNode;
  className?: string;
}
```

**Example**:
```tsx
<p>
  I specialize in <HighlightText>web development</HighlightText> and
  <HighlightText>UI design</HighlightText>.
</p>
```

---

## 🎓 Common Patterns

### Hero Section

```tsx
<section>
  <AnimatedText variant="blur-in" as="h1" className="text-5xl font-bold">
    Hi, I'm Your Name
  </AnimatedText>
  
  <AnimatedText variant="fade-up" as="p" delay={200} className="text-xl">
    Full-Stack Developer & Designer
  </AnimatedText>
  
  <AnimatedParagraph delay={400}>
    I create beautiful, functional web experiences.
  </AnimatedParagraph>
</section>
```

---

### About Section

```tsx
<section>
  <AnimatedText variant="underline-reveal" as="h2" className="text-3xl">
    About Me
  </AnimatedText>
  
  <AnimatedParagraph delay={100}>
    I'm a <HighlightText>passionate developer</HighlightText> with
    5 years of experience in building modern web applications.
  </AnimatedParagraph>
  
  <AnimatedParagraph delay={200}>
    Check out my <InlineLink href="/work">portfolio</InlineLink> to
    see what I've been working on.
  </AnimatedParagraph>
</section>
```

---

### Card Content

```tsx
<Card>
  <CardHeader>
    <AnimatedText variant="gradient" as="h3" className="text-xl">
      Premium Feature
    </AnimatedText>
  </CardHeader>
  <CardContent>
    <AnimatedParagraph delay={100}>
      Description of the feature goes here.
    </AnimatedParagraph>
    <AnimatedParagraph delay={200}>
      More details about benefits.
    </AnimatedParagraph>
  </CardContent>
</Card>
```

---

### Testimonial / Quote

```tsx
<AnimatedLines
  lines={[
    '"The best developer I've worked with."',
    '— Client Name, Company'
  ]}
  className="text-2xl font-light italic"
  lineClassName="text-center"
/>
```

---

## 🎨 CSS Classes Reference

### Animation Classes

| Class | Effect | Duration |
|-------|--------|----------|
| `text-blur-in` | Blur to focus | 1s |
| `text-letter-reveal` | Letter spacing condense | 0.8s |
| `text-line-reveal` | Line fade-up | 0.6s |
| `text-fade-up` | Subtle fade and lift | 0.7s |
| `text-char-reveal` | Character reveal | 0.5s |

### Style Classes

| Class | Effect |
|-------|--------|
| `text-gradient` | Purple gradient (static) |
| `text-gradient-animate` | Animated gradient (8s loop) |
| `text-underline-reveal` | Animated underline |
| `text-glow-hover` | Glow on hover |
| `text-highlight` | Background highlight |
| `inline-link` | Animated underline link |

### Delay Classes

| Class | Delay |
|-------|-------|
| `text-delay-100` | 100ms |
| `text-delay-200` | 200ms |
| `text-delay-300` | 300ms |
| `text-delay-400` | 400ms |
| `text-delay-500` | 500ms |

### Stagger Container

| Class | Effect |
|-------|--------|
| `text-stagger-lines` | Children animate sequentially (100ms apart) |

---

## 📐 Usage Guidelines

### ✅ DO

- Use **blur-in** for main headings (H1, H2)
- Use **fade-up** for body paragraphs
- Use **gradient** sparingly for emphasis
- Keep delays under 500ms for responsiveness
- Use **stagger effects** for lists (100-200ms intervals)
- Use **inline-link** for links within paragraphs
- Test animations on different devices

### ❌ DON'T

- Don't animate every single piece of text
- Don't use gradient-animate everywhere (too distracting)
- Don't use glow-hover on body text
- Don't combine multiple effects on the same text
- Don't set delays over 800ms
- Don't use blur-in on small text (hard to read)

---

## 🎯 Performance Tips

1. **Animate on entry only** - Don't re-animate on scroll
2. **Use will-change sparingly** - Only for active animations
3. **Prefer CSS over JS** - All these animations are pure CSS
4. **Test on mobile** - Ensure smooth 60fps
5. **Reduce motion** - All animations respect `prefers-reduced-motion`

---

## ♿ Accessibility

All text animations automatically respect user preferences:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
  }
}
```

Users who prefer reduced motion will see content immediately without animation.

---

## 🔧 Customization

### Changing Animation Speed

Edit `app/globals.css`:

```css
/* Make blur-in faster */
.text-blur-in {
  animation: blurIn 0.5s ease-out forwards;
}

/* Slower gradient animation */
.text-gradient-animate {
  animation: gradientShift 12s ease infinite;
}
```

### Changing Colors

```css
/* Custom gradient colors */
.text-gradient {
  background: linear-gradient(90deg, #your-color-1, #your-color-2);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

---

## 📊 When to Use Each Animation

| Context | Animation | Reason |
|---------|-----------|--------|
| Page title (H1) | `blur-in` | Commands attention |
| Section headers (H2) | `underline-reveal` | Clear separation |
| Body paragraphs | `fade-up` | Subtle, readable |
| Keywords/brand | `gradient` | Emphasis |
| Hero heading | `gradient-animate` | Visual interest |
| Quotes | `stagger-lines` | Dramatic reveal |
| Links in text | `inline-link` | Interactive feedback |
| Call-to-action | `glow-hover` | Draws attention |

---

## 🎬 Demo Page

Visit `/text-animation-demo` to see all text animations in action with live examples.

---

## 📝 Summary

You now have:
- ✅ **7 text animation variants** for different use cases
- ✅ **5 React components** for easy implementation
- ✅ **10+ CSS utility classes** for direct use
- ✅ **Delay system** for staggered reveals
- ✅ **Accessibility support** (prefers-reduced-motion)
- ✅ **Professional examples** and best practices

**Remember**: The best animation is the one you don't notice. Keep it minimal, subtle, and purposeful.

Happy animating! ✨