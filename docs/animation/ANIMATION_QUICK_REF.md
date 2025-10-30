# 🎨 Animation Quick Reference Card

## One-Page Cheat Sheet for Portfolio Animations

---

## 🚀 Scroll-Triggered Animations

```jsx
// Fade up from bottom
<div data-animate="fade-up">Content</div>

// Fade from left
<div data-animate="fade-left">Content</div>

// Fade from right
<div data-animate="fade-right">Content</div>

// Scale in (90% → 100%)
<div data-animate="scale-in">Content</div>
```

---

## ✨ Hover Effects - Text

```jsx
// Purple glow on hover
<h1 className="hover-text-glow">Glowing Text</h1>

// Underline + color shift
<span className="hover-highlight">Highlighted</span>

// Sliding underline for links
<a className="hover-underline-slide">Link</a>

// Heading with 60px underline
<h2 className="hover-underline-effect">Heading</h2>

// Lift element 2px
<p className="hover-lift">Paragraph</p>
```

---

## 🎯 Hover Effects - Elements

```jsx
// Magnetic button (scale 105%)
<button className="magnetic-hover">Button</button>

// Tech stack item effect
<span className="hover-tech-item">REACT</span>

// Card with gradient border
<div className="card-hover-effect">Card</div>
```

---

## 🎭 Staggered Content

```jsx
// Paragraphs with stagger
<div className="content-reveal">
  <p className="text-reveal">Para 1 (0.1s)</p>
  <p className="text-reveal">Para 2 (0.2s)</p>
  <p className="text-reveal">Para 3 (0.3s)</p>
</div>

// List with stagger
<ul className="stagger-list">
  <li>Item 1 (0.1s)</li>
  <li>Item 2 (0.2s)</li>
  <li>Item 3 (0.3s)</li>
</ul>
```

---

## 🃏 Card Animations

```jsx
<Card 
  className="card-hover-effect hover:-translate-y-2 transition-all duration-500"
  data-animate="scale-in"
>
  <div className="overflow-hidden">
    <img className="group-hover:scale-110 transition-transform duration-700" />
  </div>
  <CardTitle className="group-hover:text-purple-300 transition-colors">
    Title
  </CardTitle>
</Card>
```

---

## ⏱️ Duration Reference

| Effect | Duration | Easing |
|--------|----------|--------|
| Scroll reveal | 800ms | cubic-bezier |
| Hover | 300ms | ease |
| Card | 500ms | cubic-bezier |
| Image zoom | 700ms | ease-out |

---

## 🎨 Color Palette

```css
/* Primary */
#a855f7 (purple-500)
#7c3aed (purple-600)

/* Accent */
#d8b4fe (purple-200)

/* Shadows */
rgba(168, 85, 247, 0.2) - default
rgba(168, 85, 247, 0.5) - hover
rgba(168, 85, 247, 0.6) - intense
```

---

## 🔄 Common Patterns

### Section with Header
```jsx
<section data-animate="fade-up">
  <h2 className="hover-underline-effect">Title</h2>
  <div className="content-reveal">
    <p className="text-reveal hover-lift">
      Text with <span className="hover-highlight">highlight</span>
    </p>
  </div>
</section>
```

### Interactive Button
```jsx
<button className="magnetic-hover hover:scale-105 transition-all duration-300">
  Action
</button>
```

### Featured Card
```jsx
<Card className="card-hover-effect hover:-translate-y-2" data-animate="scale-in">
  <img className="group-hover:scale-110 duration-700" />
</Card>
```

---

## 🐛 Troubleshooting

**Not animating?**
- Check `data-animate` attribute
- Ensure element is in viewport
- Verify Intersection Observer is running

**Hover not working?**
- Add `cursor-pointer` class
- Check for `overflow-hidden` on parent
- Test on actual device (not just DevTools)

**Performance issues?**
- Reduce simultaneous animations
- Remove `will-change` if overused
- Check FPS in DevTools Performance tab

---

## ✅ Testing Checklist

- [ ] Hero animations on load
- [ ] Scroll-triggered reveals work
- [ ] Hover effects responsive
- [ ] Mobile animations smooth
- [ ] Reduced motion respected
- [ ] 60 FPS maintained

---

## 📚 Full Documentation

- **`ANIMATION_FEATURES.md`** - Technical details
- **`ANIMATION_USAGE_GUIDE.md`** - Examples & patterns
- **`ANIMATION_SHOWCASE.md`** - Visual guide
- **`ANIMATIONS_SUMMARY.md`** - Overview

---

## 💡 Pro Tips

1. **Combine classes** for compound effects
2. **Use inline styles** for custom delays
3. **Test on real devices** not just desktop
4. **Respect user motion preferences**
5. **Keep animations subtle** - less is more

---

**🎉 Happy Animating!**

Visit: http://localhost:3000/