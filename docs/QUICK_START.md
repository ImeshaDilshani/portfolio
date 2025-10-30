# Quick Start Guide - Portfolio Animations

## 🚀 Start Using Animations in 5 Minutes

### 1. Run Your Project

```bash
npm run dev
# or
pnpm dev
```

Visit `http://localhost:3000` to see animations in action!

## 🎨 Basic Usage

### Add Animation to Any Element

Simply add a class name to any HTML/JSX element:

```tsx
<div className="animate-fadeInUp">
  <h1>This fades in from below!</h1>
</div>
```

### Available Animation Classes

| Class | Effect | Best For |
|-------|--------|----------|
| `animate-fadeInUp` | Fades in + moves up | Text, sections |
| `animate-fadeIn` | Simple fade in | Backgrounds |
| `animate-scaleIn` | Scales from 95% to 100% | Images, icons |
| `animate-slideInLeft` | Slides from left | Side panels |
| `animate-slideInRight` | Slides from right | Side panels |

### Add Delays

```tsx
<div className="animate-fadeInUp animation-delay-200">Item 1</div>
<div className="animate-fadeInUp animation-delay-400">Item 2</div>
<div className="animate-fadeInUp animation-delay-600">Item 3</div>
```

Delay options: `animation-delay-200`, `animation-delay-400`, `animation-delay-600`, `animation-delay-800`

## 🎯 Hover Effects

### Card Hover

```tsx
<Card className="card-hover">
  <CardContent>Hover me!</CardContent>
</Card>
```

### Button Hover (Scale + Glow)

```tsx
<Button className="transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30">
  Click Me
</Button>
```

### Link Underline Animation

```tsx
<a href="#" className="link-underline">
  Hover for underline
</a>
```

### Image Zoom

```tsx
<div className="overflow-hidden rounded-lg">
  <img src="/image.jpg" className="zoom-hover" />
</div>
```

## 📦 React Components (Recommended)

### AnimatedSection - For Scroll Animations

```tsx
import { AnimatedSection } from "@/components/animated-section";

<AnimatedSection animation="fadeInUp" delay={200}>
  <YourContent />
</AnimatedSection>
```

**Props:**
- `animation`: "fadeInUp" | "fadeIn" | "scaleIn" | "slideInLeft" | "slideInRight"
- `delay`: number (in milliseconds)
- `threshold`: number (0-1, when to trigger)

### AnimatedCard - For Card Grids

```tsx
import { AnimatedCard } from "@/components/animated-card";

<AnimatedCard variant="hover-lift" delay={100}>
  <CardHeader>
    <CardTitle>My Card</CardTitle>
  </CardHeader>
</AnimatedCard>
```

**Variants:**
- `hover-lift`: Elevates on hover (default)
- `hover-glow`: Purple glow on hover
- `hover-scale`: Scales up on hover
- `default`: No hover effect

## 🔥 Common Patterns

### Hero Section

```tsx
<section>
  <div className="animate-scaleIn">
    <img src="/profile.jpg" alt="Profile" />
  </div>
  <div className="animate-fadeInUp animation-delay-200">
    <h1>Your Name</h1>
  </div>
  <div className="animate-fadeInUp animation-delay-400">
    <p>Your description</p>
  </div>
</section>
```

### Staggered Cards

```tsx
<div className="grid gap-6">
  <AnimatedCard delay={100}>Card 1</AnimatedCard>
  <AnimatedCard delay={200}>Card 2</AnimatedCard>
  <AnimatedCard delay={300}>Card 3</AnimatedCard>
</div>
```

### Automatic Stagger (No delay props needed!)

```tsx
<div className="stagger-children">
  <div>Auto-delays by 100ms</div>
  <div>Auto-delays by 200ms</div>
  <div>Auto-delays by 300ms</div>
</div>
```

## ⚡ Special Effects

### Shimmer Loading

```tsx
<div className="shimmer h-16 rounded-lg">
  Loading...
</div>
```

### Pulse Badge

```tsx
<div className="pulse-subtle">
  <span className="bg-green-500 rounded-full h-3 w-3" />
</div>
```

### Glowing Button

```tsx
<Button className="border-glow">
  Call to Action
</Button>
```

### Floating Button

```tsx
<Button className="btn-float">
  Hover to Float
</Button>
```

## 💡 Pro Tips

### 1. Less is More
Don't animate everything! Use animations to:
- Guide user attention
- Indicate interactivity
- Smooth transitions

### 2. Consistent Timing
Stick to these durations:
- Fast: 200-300ms (hover effects)
- Normal: 400-600ms (page elements)
- Slow: 800-1000ms (hero sections)

### 3. Stagger Delays
For lists, add 100-200ms between items:
```tsx
delay={index * 100}
```

### 4. Performance
✅ DO animate: `opacity`, `transform`
❌ DON'T animate: `width`, `height`, `top`, `left`

## 🎓 Examples from Your Site

### Navigation Link (Already Done!)
```tsx
<Link 
  href="/about"
  className="hover:text-purple-400 hover:-translate-y-0.5 transition-all duration-300"
>
  About
</Link>
```

### Footer Social Icon (Already Done!)
```tsx
<a 
  href="https://github.com"
  className="hover:scale-110 hover:-translate-y-1 transition-all duration-300"
>
  <Github />
</a>
```

## 🐛 Troubleshooting

**Animations not working?**
1. Check class name spelling
2. Make sure element has `opacity: 0` initially for delayed animations
3. Clear browser cache

**Animations too fast/slow?**
Edit `app/globals.css`:
```css
.animate-fadeInUp {
  animation: fadeInUp 1s ease-out forwards; /* Change 0.8s to 1s */
}
```

**Animations causing lag?**
- Remove animations from very large lists
- Use `will-change: transform` sparingly
- Check browser DevTools Performance tab

## 📚 More Information

- **Full Guide**: See `ANIMATIONS.md`
- **Implementation Details**: See `ANIMATION_SUMMARY.md`
- **Preview All Animations**: Use `<AnimationShowcase />` component

## ✨ You're Ready!

Start adding animations to your pages. Remember:
- Use `animate-*` classes for entry animations
- Use `card-hover`, `zoom-hover` for hover effects
- Use `<AnimatedSection>` and `<AnimatedCard>` components
- Keep it minimal and professional

Happy animating! 🎉