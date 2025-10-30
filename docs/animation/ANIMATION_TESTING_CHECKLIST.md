# 🧪 Animation Testing Checklist

Complete testing guide for all animations across your portfolio site.

---

## 🎯 Quick Test (5 minutes)

Visit http://localhost:3000/ and verify:

- [ ] Page loads with animations
- [ ] Theme toggle works (sun/moon icons)
- [ ] Light theme has readable text
- [ ] Dark theme has readable text
- [ ] Scroll down triggers animations
- [ ] Hover effects work on text
- [ ] Buttons have magnetic effect
- [ ] Cards lift on hover

---

## 📱 Full Site Testing

### 1. Navigation (All Pages)

**Theme Toggle**
- [ ] Located next to "Let's Talk" button
- [ ] Sun icon visible in light mode
- [ ] Moon icon visible in dark mode
- [ ] Smooth 500ms rotation animation
- [ ] Button has magnetic hover (scale 110%)
- [ ] Glow effect on hover
- [ ] Click toggles theme smoothly

**Navigation Links**
- [ ] Hover lifts link up slightly
- [ ] Gradient underline appears on hover
- [ ] Active page shows full underline
- [ ] Proper contrast in light mode
- [ ] Proper contrast in dark mode

**Logo**
- [ ] Hovers scales to 105%
- [ ] Color shifts to purple on hover
- [ ] Smooth 300ms transition

**"Let's Talk" Button**
- [ ] Purple background with border
- [ ] Scales to 105% on hover
- [ ] Arrow slides right on hover
- [ ] Shadow intensifies on hover
- [ ] Magnetic effect present

---

### 2. Homepage (`/`)

**Hero Section**
- [ ] Profile image animates on load
- [ ] Image scales 105% on hover
- [ ] Purple shadow glow on hover
- [ ] "Available for Work" badge pings
- [ ] Badge scales on hover
- [ ] Name has staggered fade-in
- [ ] Name glows purple on hover
- [ ] Subtitle fades in (0.2s delay)
- [ ] Description fades in (0.4s delay)
- [ ] Social icons visible
- [ ] Icons rotate 6° on hover
- [ ] Icons scale 110% on hover
- [ ] Download CV button animates
- [ ] Button has magnetic effect

**Tech Stack Banner**
- [ ] Continuous scroll animation (30s)
- [ ] Seamless loop (no jump)
- [ ] Each item hovers independently
- [ ] Items scale 110% on hover
- [ ] Items lift 2px on hover
- [ ] Purple glow appears on hover
- [ ] Color shifts to light purple

**Life Motto Section**
- [ ] Heading fades in on scroll
- [ ] Heading glows on hover
- [ ] "Work" section appears
- [ ] Section heading has underline on hover
- [ ] Paragraphs fade in with blur effect
- [ ] Paragraphs lift on hover
- [ ] Purple highlights have underline
- [ ] Underline slides from left
- [ ] List items animate sequentially
- [ ] List items shift right on hover
- [ ] Links have sliding underline
- [ ] All 4 sections animate (Work, Education, Side Hustles, Social)

**Featured Cards**
- [ ] Cards scale in on scroll (0.1s, 0.2s, 0.3s)
- [ ] Cards lift -8px on hover
- [ ] Purple shadow glows on hover
- [ ] Images zoom to 110% on hover (700ms)
- [ ] Purple gradient overlay fades in
- [ ] Card title shifts to purple
- [ ] Card description brightens
- [ ] Arrow icon slides right on hover
- [ ] Gradient border appears on hover

---

### 3. About Page (`/about`)

**Hero Section**
- [ ] Title "Here's How I Grow" appears
- [ ] Title glows purple on hover
- [ ] Background gradient visible
- [ ] Overlay effects present

**Sidebar Navigation**
- [ ] "About" heading glows on hover
- [ ] Links have hover lift
- [ ] Links shift right on hover
- [ ] Purple color on hover
- [ ] Proper contrast in both themes

**Content Sections**
- [ ] "Introduction" section fades in
- [ ] Section heading has underline on hover
- [ ] Paragraphs reveal with stagger
- [ ] Purple keywords have hover effect
- [ ] List items readable in both themes

**Education Timeline**
- [ ] Each school section fades in on scroll
- [ ] School names glow on hover
- [ ] Border color transitions on hover
- [ ] Paragraphs lift on hover
- [ ] Images zoom 110% on hover
- [ ] Purple gradient overlay on images
- [ ] All 5 institutions visible (Primary, O/L, A/L, Design, University)

---

### 4. Writes Page (`/writes`)

**Hero Section**
- [ ] "Lessons I've learned" title visible
- [ ] Title glows on hover
- [ ] Background image visible with overlay

**Intro Text**
- [ ] Paragraph fades in on scroll
- [ ] Highlighted keywords visible
- [ ] Keywords have hover underline
- [ ] Text lifts on hover

**Article Cards**
- [ ] Cards fade in on scroll
- [ ] Cards lift on hover (-1px translateY)
- [ ] Purple shadow on hover
- [ ] Category badge has purple border
- [ ] Badge changes on hover
- [ ] Date text lifts on hover
- [ ] Title has sliding underline
- [ ] Title turns purple on hover
- [ ] Description lifts on hover
- [ ] Tags scale 105% on hover
- [ ] Tags change color on hover
- [ ] "Read More" button has magnetic effect
- [ ] Arrow slides right on hover

---

### 5. Remaining Pages

Test these pages have basic animation support:

**Reads (`/reads`)**
- [ ] Hero section animates
- [ ] Content sections have scroll triggers
- [ ] Hover effects on interactive elements

**Listening (`/listening`)**
- [ ] Hero section animates
- [ ] Content sections have scroll triggers
- [ ] Hover effects on interactive elements

**Captures (`/captures`)**
- [ ] Hero section animates
- [ ] Images have zoom on hover
- [ ] Hover effects on interactive elements

**Contact (`/contact`)**
- [ ] Hero section animates
- [ ] Form inputs have focus states
- [ ] Submit button has magnetic effect

---

## 🌓 Theme Testing

### Light Theme
- [ ] Background is white/near-white
- [ ] Main text is dark (readable)
- [ ] Headings are dark (readable)
- [ ] Muted text is gray (readable)
- [ ] Purple accents are 600/700 shades
- [ ] Links are visible
- [ ] Buttons are visible
- [ ] Cards have white background
- [ ] Borders are visible
- [ ] Shadows are subtle
- [ ] No white text on white background
- [ ] All text passes contrast check (WCAG AA)

### Dark Theme
- [ ] Background is dark purple gradient
- [ ] Main text is white/light
- [ ] Headings are white
- [ ] Muted text is light gray
- [ ] Purple accents are 300/400 shades
- [ ] Links are visible
- [ ] Buttons are visible
- [ ] Cards have dark background
- [ ] Borders are visible
- [ ] Shadows are purple glow
- [ ] No dark text on dark background
- [ ] All text passes contrast check (WCAG AA)

### Theme Toggle
- [ ] Smooth 300ms transition
- [ ] No flash of unstyled content
- [ ] All colors transition smoothly
- [ ] Icons rotate smoothly
- [ ] No layout shift
- [ ] Preference saved (persists on refresh)

---

## 🎬 Animation Smoothness

**60 FPS Check** (Open DevTools > Performance)
- [ ] Scroll animations maintain 60 FPS
- [ ] Hover animations maintain 60 FPS
- [ ] Page load animations smooth
- [ ] No janky transitions
- [ ] No excessive repaints

**Easing Curves**
- [ ] Animations feel natural (not linear)
- [ ] Buttons ease in/out smoothly
- [ ] Cards lift gracefully
- [ ] Text reveals elegantly

**Timing**
- [ ] Scroll reveals: ~800ms
- [ ] Hover effects: ~300ms
- [ ] Card animations: ~500ms
- [ ] Image zooms: ~700ms
- [ ] Theme toggle: ~300ms

---

## 📱 Responsive Testing

### Desktop (1920x1080)
- [ ] All animations smooth
- [ ] Hover effects work
- [ ] Layout perfect
- [ ] No overflow issues

### Laptop (1366x768)
- [ ] All animations smooth
- [ ] Hover effects work
- [ ] Layout responsive
- [ ] No overflow issues

### Tablet (768x1024)
- [ ] Animations simplified
- [ ] Touch interactions work
- [ ] Layout adapts
- [ ] Readable text

### Mobile (375x667)
- [ ] Animations simplified
- [ ] Touch interactions work
- [ ] Layout mobile-friendly
- [ ] Text readable
- [ ] No horizontal scroll
- [ ] Buttons easy to tap

---

## ♿ Accessibility Testing

**Reduced Motion**
- [ ] Enable "Reduce motion" in OS settings
- [ ] Animations become instant (0.01ms)
- [ ] Content still accessible
- [ ] No functionality lost

**Keyboard Navigation**
- [ ] Tab through all links
- [ ] Focus visible on all elements
- [ ] Enter/Space activates buttons
- [ ] No keyboard traps

**Screen Reader**
- [ ] All animations have semantic HTML
- [ ] No content hidden from screen readers
- [ ] Proper ARIA labels present

---

## 🌐 Browser Testing

### Chrome/Edge
- [ ] All animations work
- [ ] Theme toggle works
- [ ] Performance good

### Firefox
- [ ] All animations work
- [ ] Theme toggle works
- [ ] Performance good

### Safari
- [ ] All animations work
- [ ] Theme toggle works
- [ ] Performance good
- [ ] Webkit prefixes working

### Mobile Safari
- [ ] Touch interactions work
- [ ] Animations smooth
- [ ] Theme toggle works

---

## 🚀 Performance Metrics

**Lighthouse Scores** (Run in DevTools)
- [ ] Performance: 90+
- [ ] Accessibility: 95+
- [ ] Best Practices: 95+
- [ ] SEO: 95+

**Core Web Vitals**
- [ ] LCP (Largest Contentful Paint): < 2.5s
- [ ] FID (First Input Delay): < 100ms
- [ ] CLS (Cumulative Layout Shift): < 0.1

---

## 🐛 Common Issues & Fixes

### Animation Not Triggering
- **Issue**: Element doesn't animate on scroll
- **Check**: Has `data-animate` attribute?
- **Check**: Is element in viewport?
- **Check**: Is Intersection Observer initialized?
- **Fix**: Add `data-animate="fade-up"` to element

### Hover Not Working
- **Issue**: Hover effect not showing
- **Check**: Is element interactive?
- **Check**: Has hover class applied?
- **Fix**: Add `cursor-pointer` class

### Theme Contrast Poor
- **Issue**: Text hard to read
- **Check**: Using correct color classes?
- **Fix Light**: Use `text-foreground` or `text-purple-600`
- **Fix Dark**: Use `dark:text-white` or `dark:text-purple-400`

### Animation Too Fast/Slow
- **Issue**: Animation timing feels off
- **Check**: Duration in className
- **Fix**: Add `duration-300` or `duration-500` class

### Layout Shift on Animation
- **Issue**: Content jumps during animation
- **Check**: Using `transform` instead of `margin/padding`?
- **Fix**: Use `translateY` instead of `margin-top`

---

## ✅ Sign-Off Checklist

Before deploying:

- [ ] All pages tested
- [ ] Light theme readable
- [ ] Dark theme readable
- [ ] Theme toggle works
- [ ] Animations smooth (60 FPS)
- [ ] Mobile responsive
- [ ] Keyboard accessible
- [ ] Screen reader compatible
- [ ] Browser compatibility checked
- [ ] Performance metrics good
- [ ] No console errors
- [ ] No layout shifts
- [ ] Reduced motion respected

---

## 📊 Test Results Template

```
Date: _____________
Tester: _____________
Browser: _____________
Device: _____________

Navigation:        ✅ / ❌
Homepage:          ✅ / ❌
About:             ✅ / ❌
Writes:            ✅ / ❌
Light Theme:       ✅ / ❌
Dark Theme:        ✅ / ❌
Performance:       ✅ / ❌
Accessibility:     ✅ / ❌

Notes:
_________________________________
_________________________________
_________________________________

Overall Status:    ✅ PASS / ❌ FAIL
```

---

## 🎉 Success Criteria

Your animations are ready when:

✅ **All animations smooth** at 60 FPS
✅ **Both themes readable** with proper contrast
✅ **Theme toggle works** with smooth transitions
✅ **All pages consistent** with animation style
✅ **Mobile responsive** with simplified animations
✅ **Accessibility compliant** with reduced motion
✅ **No performance issues** (Lighthouse 90+)
✅ **Cross-browser compatible** (Chrome, Firefox, Safari)
✅ **User feedback positive** (feels professional)

---

**Happy Testing! 🚀**

Visit: http://localhost:3000/
Toggle theme, scroll, hover, and enjoy! ✨