# Portfolio Animations Guide

This document describes all the animations implemented in the portfolio website for a minimal, professional look.

## Animation Philosophy

All animations follow these principles:
- **Minimal & Subtle**: Animations are smooth and don't distract from content
- **Performance-Focused**: Using CSS animations for better performance
- **Purposeful**: Each animation serves to improve UX
- **Accessible**: Respects user preferences for reduced motion

## Core Animations

### 1. Fade In Up
**Usage**: Page sections, cards, text content
```css
.animate-fadeInUp
```
- Fades in while moving up 20px
- Duration: 0.8s
- Easing: ease-out

### 2. Fade In
**Usage**: Background elements, overlays
```css
.animate-fadeIn
```
- Simple opacity transition
- Duration: 0.8s
- Easing: ease-out

### 3. Scale In
**Usage**: Images, profile pictures, icons
```css
.animate-scaleIn
```
- Fades in while scaling from 95% to 100%
- Duration: 0.8s
- Easing: ease-out

### 4. Slide In (Left/Right)
**Usage**: Side panels, navigation items
```css
.animate-slideInLeft
.animate-slideInRight
```
- Slides in from left/right with fade
- Duration: 0.8s
- Distance: 30px

## Hover Effects

### Navigation Links
- Color transition to purple
- Subtle upward movement (-0.5px)
- Underline animation from left to right
- Duration: 300ms

### Buttons
- Scale increase (1.05x)
- Shadow enhancement
- Background color transition
- Duration: 300ms

### Cards
```css
.card-hover
```
- Lift effect (translateY -4px)
- Purple shadow (0 10px 30px)
- Duration: 300ms

### Social Icons
- Scale increase (1.1x)
- Upward movement (-4px)
- Color change to purple
- Duration: 300ms

### Images
```css
.zoom-hover
```
- Subtle zoom (1.05x scale)
- Duration: 400ms
- Use with overflow hidden parent

## Stagger Animations

### Children Elements
```css
.stagger-children
```
Apply to parent container to automatically stagger child animations:
- Each child delays by 100ms
- Supports up to 8 children
- Uses fadeInUp animation

### Manual Delays
```css
.animation-delay-200  /* 200ms delay */
.animation-delay-400  /* 400ms delay */
.animation-delay-600  /* 600ms delay */
.animation-delay-800  /* 800ms delay */
```

### Card Delays
```css
.card-delay-1  /* 100ms */
.card-delay-2  /* 200ms */
.card-delay-3  /* 300ms */
```

## Special Effects

### Shimmer
```css
.shimmer
```
- Gradient animation moving left to right
- Purple tint (168, 85, 247)
- Duration: 3s infinite
- Use for loading states or highlights

### Pulse (Subtle)
```css
.pulse-subtle
```
- Opacity variation (1 to 0.8)
- Duration: 3s infinite
- Use for "Available for Work" badge

### Border Glow
```css
.border-glow
```
- Box shadow pulse effect
- Purple glow color
- Duration: 2s infinite
- Use for call-to-action elements

### Float
```css
.btn-float (on hover)
```
- Gentle up and down motion
- Range: 5px
- Duration: 2s infinite
- Use for floating buttons

## Scroll Animations

### Smooth Scroll
Enabled globally on `<html>`:
```css
scroll-behavior: smooth;
```
All anchor links will have smooth scrolling.

### Scroll-Triggered Fade In
```css
.fade-in-view
```
- Triggers when element enters viewport
- 30px upward movement
- Duration: 0.8s

## React Components

### AnimatedSection
Wrapper component for scroll-triggered animations:

```tsx
import { AnimatedSection } from "@/components/animated-section";

<AnimatedSection 
  animation="fadeInUp"  // or fadeIn, scaleIn, slideInLeft, slideInRight
  delay={200}           // delay in ms
  threshold={0.1}       // intersection threshold (0-1)
>
  <YourContent />
</AnimatedSection>
```

### AnimatedCard
Card component with built-in animations:

```tsx
import { AnimatedCard } from "@/components/animated-card";

<AnimatedCard 
  variant="hover-lift"  // or hover-glow, hover-scale, default
  delay={100}           // stagger delay
>
  <CardContent />
</AnimatedCard>
```

## Page Transitions

All `<main>` elements automatically have page enter animation:
- Fade in from opacity 0
- Move up 10px
- Duration: 500ms

## Performance Tips

1. **Use CSS transforms over position properties**
   - ✅ `transform: translateY(-4px)`
   - ❌ `top: -4px`

2. **Use will-change sparingly**
   - Only add to elements that will definitely animate
   - Remove after animation completes

3. **Avoid animating**:
   - Width/height (use scale instead)
   - Top/left/right/bottom (use translate instead)
   - Box-shadow on every frame (pre-define states)

4. **Prefer opacity and transform**
   - These properties are GPU-accelerated
   - Smoother animations at 60fps

## Browser Support

All animations use standard CSS3 features supported by:
- Chrome/Edge 88+
- Firefox 78+
- Safari 14+

## Accessibility

Animations respect `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

Add this to `globals.css` if you want to respect user motion preferences.

## Common Patterns

### Hero Section
```tsx
<div className="animate-scaleIn">
  <img src="/profile.jpeg" />
</div>
<div className="animate-fadeInUp animation-delay-200">
  <h1>Heading</h1>
</div>
<div className="animate-fadeInUp animation-delay-400">
  <p>Description</p>
</div>
```

### Card Grid
```tsx
<div className="grid gap-6">
  <AnimatedCard delay={100}>Card 1</AnimatedCard>
  <AnimatedCard delay={200}>Card 2</AnimatedCard>
  <AnimatedCard delay={300}>Card 3</AnimatedCard>
</div>
```

### Navigation
Navigation items automatically have:
- Hover color transitions
- Active underline animation
- Smooth vertical movement

No additional classes needed!

## Customization

To modify animation durations globally, update these values in `globals.css`:

```css
/* Change all fadeInUp animations to 1s */
.animate-fadeInUp {
  animation: fadeInUp 1s ease-out forwards;
}

/* Change hover transition speed */
a, button {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
```

## Summary

- 🎯 **8 core animations** for different use cases
- 🎨 **6 hover effects** for interactive elements
- ⚡ **Performance-optimized** with GPU acceleration
- 📦 **2 React components** for easy implementation
- ♿ **Accessible** with reduced motion support
- 🎭 **Minimal** design that enhances rather than distracts

For questions or custom animation needs, refer to `app/globals.css` for all animation definitions.