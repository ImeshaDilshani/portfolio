# Troubleshooting Guide - Blank Pages Issue

## Problem: Pages Showing Blank Content

If you're experiencing blank or missing content on pages (like `/writes`, `/contact`, etc.), follow these troubleshooting steps:

---

## Quick Fixes

### 1. Clear Cache and Restart Dev Server

**Windows:**
```bash
# Stop all Node processes
taskkill /F /IM node.exe

# Clear Next.js cache
rmdir /s /q .next

# Restart dev server
npm run dev
```

**Mac/Linux:**
```bash
# Stop dev server
pkill -f "next dev"

# Clear Next.js cache
rm -rf .next

# Restart dev server
npm run dev
```

### 2. Hard Refresh Browser

- **Windows/Linux:** `Ctrl + Shift + R` or `Ctrl + F5`
- **Mac:** `Cmd + Shift + R`

### 3. Clear Browser Cache

1. Open DevTools (F12)
2. Right-click the refresh button
3. Select "Empty Cache and Hard Reload"

---

## Common Causes & Solutions

### Issue 1: Content Hidden Behind Navigation

**Symptom:** Navigation bar is visible, but page content is missing

**Solution:** Pages need proper top padding to account for fixed navigation

```tsx
// CORRECT - Add pt-32 for fixed nav spacing
<main className="min-h-screen pt-32 pb-20 px-4">
  <div className="container max-w-6xl mx-auto">
    {/* Your content here */}
  </div>
</main>

// WRONG - No top padding
<main className="min-h-screen">
  {/* Content hidden behind fixed nav */}
</main>
```

### Issue 2: CSS z-index Problems

**Symptom:** Content exists in HTML but not visible on screen

**Solution:** Ensure proper z-index stacking

```tsx
// Fixed navigation should have high z-index
<header className="fixed top-0 z-50 w-full">

// Page content should have relative positioning
<main className="relative z-10">
```

### Issue 3: Dark Mode Contrast Issues

**Symptom:** Text color matches background color

**Solution:** Use proper foreground colors

```tsx
// CORRECT - Uses theme-aware colors
<h1 className="text-foreground">Title</h1>
<p className="text-muted-foreground">Description</p>

// WRONG - Hardcoded colors that may not work in all themes
<h1 className="text-white">Title</h1>
```

### Issue 4: Animation Classes Preventing Display

**Symptom:** Content flashes briefly then disappears

**Solution:** Check CSS animation classes in `globals.css`

```css
/* Ensure animations don't hide content permanently */
[data-animate] {
  opacity: 1; /* Not 0 */
  transform: none;
  transition: all 0.6s ease;
}
```

### Issue 5: JavaScript Errors Preventing Render

**Symptom:** Console shows errors, page is blank

**Solution:** Check browser console (F12)

Common errors:
- `Hydration mismatch` - Clear `.next` folder
- `Module not found` - Run `npm install`
- `Unexpected token` - Check for syntax errors

---

## Page-Specific Fixes

### Writes Page (`/writes`)

Verify the page has:
```tsx
<main className="min-h-screen">
  {/* Hero Section */}
  <section className="relative pt-32 pb-20 px-4">
    <h1>Writes</h1>
    {/* Visible content */}
  </section>
  
  {/* Articles Section */}
  <section className="py-16 px-4">
    {/* Article cards */}
  </section>
</main>
```

### Contact Page (`/contact`)

Verify the page has:
```tsx
<main className="min-h-screen pt-32 pb-20 px-4">
  <div className="container max-w-6xl mx-auto">
    <h1>Let's Connect</h1>
    {/* Contact form and info */}
  </div>
</main>
```

### Home Page (`/`)

Should have:
```tsx
<main className="overflow-hidden">
  <section className="relative flex items-center justify-center min-h-screen">
    {/* Hero content */}
  </section>
</main>
```

---

## Diagnostic Steps

### Step 1: Check if Content Exists in HTML

1. Open DevTools (F12)
2. Go to Elements/Inspector tab
3. Search for main heading text (e.g., "Writes", "Contact Me")
4. If found but not visible → CSS issue
5. If not found → Rendering issue

### Step 2: Check Console for Errors

1. Open DevTools (F12)
2. Go to Console tab
3. Look for red error messages
4. Common errors:
   - Hydration errors → Clear cache
   - Import errors → Check file paths
   - Syntax errors → Check recent changes

### Step 3: Check Network Tab

1. Open DevTools (F12)
2. Go to Network tab
3. Reload page
4. Check if:
   - CSS files load (200 status)
   - JS bundles load (200 status)
   - No 404 errors for assets

### Step 4: Inspect Element Styles

1. Right-click on page
2. Select "Inspect"
3. Check computed styles
4. Look for:
   - `display: none`
   - `opacity: 0`
   - `visibility: hidden`
   - `z-index: -1`

---

## Nuclear Option (Last Resort)

If nothing else works:

```bash
# 1. Stop all processes
taskkill /F /IM node.exe  # Windows
# OR
pkill -f node  # Mac/Linux

# 2. Remove all generated files
rmdir /s /q .next node_modules  # Windows
# OR
rm -rf .next node_modules  # Mac/Linux

# 3. Reinstall dependencies
npm install

# 4. Clear browser data completely
# - Clear cookies
# - Clear cache
# - Clear local storage

# 5. Restart dev server
npm run dev

# 6. Open in incognito/private window
# - Windows/Linux: Ctrl + Shift + N
# - Mac: Cmd + Shift + N
```

---

## Verification Checklist

After applying fixes, verify:

- [ ] Navigation bar is visible and clickable
- [ ] Page title/heading is visible
- [ ] Main content is visible and readable
- [ ] Buttons and links are clickable
- [ ] Text has proper contrast with background
- [ ] Images load correctly
- [ ] Animations work smoothly
- [ ] Both light and dark modes work
- [ ] Responsive design works on mobile
- [ ] No console errors

---

## Prevention Tips

### 1. Always Include Proper Spacing

```tsx
// Template for new pages
export default function NewPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-foreground">
          Page Title
        </h1>
        {/* Your content */}
      </div>
    </main>
  );
}
```

### 2. Use Theme-Aware Colors

```tsx
// Good
<div className="bg-background text-foreground">
<p className="text-muted-foreground">

// Bad
<div className="bg-white text-black">
<p className="text-gray-600">
```

### 3. Test Both Themes

Always test in:
- Light mode
- Dark mode
- System preference mode

### 4. Test Responsiveness

Test on:
- Desktop (1920px)
- Tablet (768px)
- Mobile (375px)

---

## Getting Help

If you're still experiencing issues:

1. **Check Dev Server Logs**
   ```bash
   # Look at terminal where npm run dev is running
   # Check for compilation errors
   ```

2. **Create Minimal Reproduction**
   - Isolate the problematic page
   - Remove unnecessary code
   - Test with basic content

3. **Check Recent Changes**
   ```bash
   git diff HEAD~1  # See what changed
   git log --oneline -5  # Recent commits
   ```

4. **Verify Next.js Version**
   ```bash
   npm list next
   # Should be 15.2.4 or compatible
   ```

---

## Contact & Support

- Check Next.js documentation: https://nextjs.org/docs
- Check Tailwind CSS docs: https://tailwindcss.com/docs
- Review project files in `/portfolio/FONT_CHANGES_SUMMARY.md`

**Last Updated:** 2025
**Version:** 1.0.0