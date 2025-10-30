# Animation Usage Guide 🎨

Quick reference for using the new Ammo Studio-inspired animations in your portfolio.

---

## 🚀 Quick Start

### 1. **Scroll-Triggered Animations**

Add `data-animate` attribute to any element:

```jsx
<section data-animate="fade-up">
  <h2>This fades in from bottom when scrolled into view</h2>
</section>
```

**Available Options:**
- `data-animate="fade-up"` - Slides up and fades in
- `data-animate="fade-left"` - Slides from left
- `data-animate="fade-right"` - Slides from right
- `data-animate="scale-in"` - Scales from 90% to 100%

---

### 2. **Text Hover Effects**

#### Glowing Text
```jsx
<h1 className="hover-text-glow">
  This text glows purple on hover
</h1>
```

#### Highlighted Text with Underline
```jsx
<span className="hover-highlight">
  Hover me for underline effect
</span>
```

#### Sliding Underline for Links
```jsx
<a href="#" className="hover-underline-slide">
  Link with sliding underline
</a>
```

#### Heading with Underline Bar
```jsx
<h2 className="hover-underline-effect">
  Section Heading
</h2>
```

---

### 3. **Interactive Elements**

#### Magnetic Buttons
```jsx
<button className="magnetic-hover">
  Click Me
</button>
```

#### Lifting Elements
```jsx
<p className="hover-lift">
  This paragraph lifts on hover
</p>
```

#### Tech Stack Items
```jsx
<span className="hover-tech-item">REACT</span>
<span className="hover-tech-item">NEXT.JS</span>
```

---

### 4. **Card Animations**

#### Enhanced Card with All Effects
```jsx
<Card 
  className="card-hover-effect hover:-translate-y-2 transition-all duration-500"
  data-animate="scale-in"
>
  <div className="aspect-video overflow-hidden">
    <img 
      src="/image.jpg"
      className="group-hover:scale-110 transition-transform duration-700"
    />
  </div>
  <CardHeader>
    <CardTitle className="group-hover:text-purple-300 transition-colors">
      Card Title
    </CardTitle>
  </CardHeader>
</Card>
```

---

### 5. **Staggered Content**

#### Text Paragraphs
```jsx
<div className="content-reveal">
  <p className="text-reveal">First paragraph (delay 0.1s)</p>
  <p className="text-reveal">Second paragraph (delay 0.2s)</p>
  <p className="text-reveal">Third paragraph (delay 0.3s)</p>
</div>
```

#### List Items
```jsx
<ul className="stagger-list">
  <li>Item 1 (animates first)</li>
  <li>Item 2 (delay 0.1s)</li>
  <li>Item 3 (delay 0.2s)</li>
  <li>Item 4 (delay 0.3s)</li>
</ul>
```

---

## 🎯 Common Patterns

### Pattern 1: Section with Header and Content
```jsx
<section className="py-20" data-animate="fade-up">
  <h2 className="text-4xl font-bold hover-underline-effect">
    Section Title
  </h2>
  
  <div className="content-reveal mt-8">
    <p className="text-reveal hover-lift">
      First paragraph with <span className="hover-highlight">highlighted text</span>
    </p>
    <p className="text-reveal hover-lift">
      Second paragraph
    </p>
  </div>
</section>
```

### Pattern 2: Interactive Button Group
```jsx
<div className="flex gap-4">
  <button className="magnetic-hover bg-purple-600 hover:scale-105 transition-all duration-300">
    Primary Action
  </button>
  
  <button className="magnetic-hover hover:scale-110 hover:rotate-6 transition-all duration-300">
    Secondary Action
  </button>
</div>
```

### Pattern 3: Feature Cards Grid
```jsx
<div className="grid md:grid-cols-3 gap-8">
  {features.map((feature, index) => (
    <Card 
      key={index}
      className="card-hover-effect hover:-translate-y-2 transition-all duration-500"
      data-animate="scale-in"
    >
      {/* Card content */}
    </Card>
  ))}
</div>
```

---

## ⚡ Pro Tips

### Tip 1: Combining Effects
You can combine multiple animation classes:

```jsx
<div 
  className="hover-lift hover-text-glow transition-all duration-300" 
  data-animate="fade-up"
>
  Multiple effects!
</div>
```

### Tip 2: Custom Delays
Add inline styles for custom delays:

```jsx
<div 
  data-animate="fade-up"
  style={{ animationDelay: '0.5s' }}
>
  Delayed animation
</div>
```

### Tip 3: Nested Animations
Animate parent and children separately:

```jsx
<div data-animate="fade-up">
  <h2 className="hover-text-glow">Title</h2>
  <div className="content-reveal">
    <p className="text-reveal">Staggered content</p>
  </div>
</div>
```

---

## 🎨 Animation Intensity Levels

### Subtle (Professional)
```jsx
className="hover:scale-102 transition-all duration-300"
```

### Medium (Default)
```jsx
className="hover:scale-105 transition-all duration-300"
```

### Strong (Attention-grabbing)
```jsx
className="hover:scale-110 hover:rotate-6 transition-all duration-300"
```

---

## 🔄 Animation States

### On Load
```jsx
className="animate-fadeInUp"
```

### On Scroll
```jsx
data-animate="fade-up"
```

### On Hover
```jsx
className="hover-lift"
```

### On Click/Active
```jsx
className="active:scale-95"
```

---

## 🎭 Custom Animations

### Creating Your Own

Add to `globals.css`:

```css
@keyframes myCustomAnimation {
  from {
    opacity: 0;
    transform: translateY(20px) rotate(5deg);
  }
  to {
    opacity: 1;
    transform: translateY(0) rotate(0deg);
  }
}

.my-custom-anim {
  animation: myCustomAnimation 0.8s ease-out forwards;
}
```

Use in component:

```jsx
<div className="my-custom-anim">
  Custom animation!
</div>
```

---

## 📱 Responsive Animations

### Desktop Only
```jsx
<div className="md:hover-lift md:hover:scale-105">
  Only animates on medium+ screens
</div>
```

### Mobile Optimized
```jsx
<div className="animate-fadeIn md:data-animate='fade-up'">
  Simple fade on mobile, fancy animation on desktop
</div>
```

---

## 🐛 Troubleshooting

### Animation Not Working?

1. **Check if element is in viewport**
   - Scroll animations need Intersection Observer
   - Add `data-animate` attribute

2. **Opacity is 0?**
   - Elements with `data-animate` start hidden
   - They animate when scrolled into view

3. **Hover not working?**
   - Ensure element has cursor: pointer
   - Check if parent has overflow: hidden

4. **Performance issues?**
   - Reduce number of simultaneous animations
   - Use `will-change: transform` sparingly

---

## ✅ Best Practices

1. **Don't Over-Animate**: Less is more
2. **Maintain Consistency**: Use same easing functions
3. **Test on Real Devices**: Mobile performance matters
4. **Respect User Preferences**: Honor prefers-reduced-motion
5. **Accessible by Default**: Don't rely only on animations to convey info

---

## 🎯 Animation Decision Tree

```
Need animation?
├─ On page load → Use animate-* classes
├─ On scroll → Use data-animate="*"
├─ On hover → Use hover-* classes
└─ On interaction → Use state-based classes

Which effect?
├─ Text → hover-text-glow, hover-highlight
├─ Elements → hover-lift, magnetic-hover
├─ Cards → card-hover-effect
└─ Links → hover-underline-slide
```

---

## 📚 Complete Example

Here's a full section with all animations:

```jsx
"use client";

import { useEffect } from "react";

export default function AnimatedSection() {
  useEffect(() => {
    // Initialize scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    document.querySelectorAll("[data-animate]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20" data-animate="fade-up">
      {/* Header */}
      <h2 className="text-4xl font-bold hover-underline-effect">
        My Work
      </h2>

      {/* Content */}
      <div className="content-reveal mt-8 space-y-4">
        <p className="text-reveal hover-lift">
          I specialize in{" "}
          <span className="text-purple-300 hover-highlight">
            web development
          </span>{" "}
          and design.
        </p>

        <ul className="stagger-list space-y-2">
          <li className="hover:translate-x-2 transition-all">
            Feature One
          </li>
          <li className="hover:translate-x-2 transition-all">
            Feature Two
          </li>
        </ul>
      </div>

      {/* CTA */}
      <button className="magnetic-hover mt-8 px-6 py-3 bg-purple-600 rounded-full hover:scale-105 transition-all duration-300">
        Learn More
      </button>
    </section>
  );
}
```

---

**Happy Animating! ✨**

For more details, see `ANIMATION_FEATURES.md`
