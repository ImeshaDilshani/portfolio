# Fonts Directory

This directory contains custom fonts used in the portfolio website.

## Emilio Font Installation

To use the Emilio font (Regular and Bold weights), follow these steps:

### 1. Obtain the Emilio Font Files

You'll need to get the Emilio font files in `.woff2` format (preferred for web) or `.woff`, `.ttf` formats.

- **Emilio Regular** (weight: 400)
- **Emilio Bold** (weight: 700)

### 2. Add Font Files to This Directory

Place the font files in this `/public/fonts/` directory with the following names:

```
portfolio/public/fonts/
├── Emilio-Regular.woff2
├── Emilio-Bold.woff2
└── README.md (this file)
```

If you have `.ttf` or `.woff` files instead, you can use an online converter like:
- https://cloudconvert.com/ttf-to-woff2
- https://transfonter.org/

### 3. Enable Emilio Font in the Code

After adding the font files, uncomment the Emilio font configuration in:

**File: `app/layout.tsx`**

Find the commented section and uncomment it:

```typescript
const emilio = localFont({
  src: [
    {
      path: "../public/fonts/Emilio-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Emilio-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-emilio",
  display: "swap",
})
```

Then update the body className to include the Emilio variable:

```typescript
<body className={`${inter.className} ${emilio.variable}`} suppressHydrationWarning>
```

### 4. Update CSS Variables

In `app/globals.css`, update the font-display variable:

```css
--font-display: "Emilio", "Inter", system-ui, -apple-system, sans-serif;
```

### 5. Using the Fonts

- **Inter**: Used for body text and general content (default)
- **Emilio**: Used for headings (h1-h6) and display text (via `font-display` class)

## Alternative: Using a Different Heading Font

If you don't have access to Emilio font, you can use other options:

### Option 1: Use Inter for Everything (Current Setup)
The site currently uses Inter for all text, which is already configured.

### Option 2: Use Another Google Font
Update the imports in `app/globals.css` and `app/layout.tsx`:

```typescript
import { Inter, Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "600", "700", "800"],
});
```

## Font Weights Available

### Inter (Sans-serif - Body Text)
- 300 (Light)
- 400 (Regular)
- 500 (Medium)
- 600 (Semi-bold)
- 700 (Bold)
- 800 (Extra-bold)

### Emilio (Display - Headings)
- 400 (Regular)
- 700 (Bold)

## Troubleshooting

If fonts don't load properly:

1. Check file paths are correct
2. Ensure font files are in the correct format (.woff2 recommended)
3. Clear Next.js cache: `rm -rf .next`
4. Restart the development server

## License

Make sure you have the proper license to use the Emilio font for web deployment. Check the font's license agreement before using it in production.