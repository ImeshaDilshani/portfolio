// Hero Section Template
// Copy this pattern for creating consistent hero sections across the portfolio

export default function PageTemplate() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/your-background-image.jpg')",
            }}
          />
        </div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

        {/* Content */}
        <div className="relative z-10 container max-w-5xl mx-auto text-center animate-fadeInUp">
          {/* Badge Label */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/20 rounded-full mb-6">
            <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
              🎯 Your Category Label
            </span>
          </div>

          {/* Main Heading with Gradient */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 dark:from-violet-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
            Your Page Title
          </h1>

          {/* Primary Tagline */}
          <p className="text-xl md:text-2xl text-foreground/80 mb-4 max-w-3xl mx-auto leading-relaxed">
            Your compelling tagline or subtitle
          </p>

          {/* Detailed Description with Highlighted Keywords */}
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Your detailed description with{" "}
            <span className="text-purple-600 dark:text-purple-400 font-medium">
              highlighted keywords
            </span>
            {" "}that provide{" "}
            <span className="text-purple-600 dark:text-purple-400 font-medium">
              context
            </span>
            {" "}and{" "}
            <span className="text-purple-600 dark:text-purple-400 font-medium">
              visual interest
            </span>
            {" "}to engage your readers.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 px-4">
        <div className="container max-w-5xl mx-auto">
          {/* Your page content goes here */}
        </div>
      </section>
    </main>
  );
}

/*
USAGE GUIDE:
============

1. BADGE LABEL
   - Use relevant emoji icon (👋 🎯 📚 🎧 ✨ 💡 🚀)
   - Keep text short and descriptive
   - Examples: "About Me", "Reading List", "Projects"

2. MAIN HEADING
   - Use 1-2 words max
   - Will automatically get purple gradient
   - Examples: "About", "Reads", "Writes", "Captures"

3. PRIMARY TAGLINE
   - Keep it concise (5-8 words)
   - Should explain the page purpose
   - Examples:
     - "Continuous learning and growth"
     - "Books that shaped my thinking"
     - "Voices that inspire and educate"

4. DETAILED DESCRIPTION
   - 2-4 sentences
   - Highlight 3-5 key words/phrases in purple
   - Provide context and value proposition
   - Make it engaging and personal

5. BACKGROUND IMAGE
   - Replace '/your-background-image.jpg' with actual image path
   - Ensure image is relevant to page content
   - Image will be displayed at 20% opacity

CUSTOMIZATION OPTIONS:
======================

Badge Colors (change all instances):
- Purple (default): purple-100/purple-900/purple-600/purple-400
- Blue: blue-100/blue-900/blue-600/blue-400
- Green: green-100/green-900/green-600/green-400
- Orange: orange-100/orange-900/orange-600/orange-400

Gradient Colors (change heading):
- Purple to Pink (default): violet-600→purple-600→pink-600
- Blue to Cyan: blue-600→cyan-600→teal-600
- Orange to Red: orange-600→red-600→pink-600
- Green to Teal: green-600→emerald-600→teal-600

Max Width Options:
- Narrow: max-w-3xl
- Default: max-w-5xl
- Wide: max-w-6xl
- Full: max-w-7xl

REAL EXAMPLES FROM PORTFOLIO:
==============================

About Page:
- Badge: "👋 About Me"
- Heading: "Here's How I Grow"
- Tagline: "Continuous learning and growth through experiences"
- Keywords: professional experience, research, continuous education

Reads Page:
- Badge: "📚 Reading List"
- Heading: "Reads"
- Tagline: "Books that shaped my thinking"
- Keywords: personal development, productivity, psychology

Listening Page:
- Badge: "🎧 Podcasts & Audio"
- Heading: "Listening"
- Tagline: "Voices that inspire and educate"
- Keywords: radio shows, voices, perspectives

Captures Page:
- Badge: "✨ Side Projects & Passions"
- Heading: "Captures"
- Tagline: "Blooming Ideas"
- Keywords: experiment, create, gardening, photography

Writes Page:
- Badge: "📖 Blog & Articles"
- Heading: "Writes"
- Tagline: "Lessons I've learned along the way"
- Keywords: technology, data science, personal growth

ACCESSIBILITY NOTES:
====================
- Maintain contrast ratios (WCAG AA compliant)
- Use semantic HTML (h1, p tags)
- Ensure gradient text has sufficient contrast
- Test with screen readers
- Verify keyboard navigation

RESPONSIVE BREAKPOINTS:
=======================
- Mobile: < 768px (text-5xl)
- Tablet: 768px - 1024px (text-6xl)
- Desktop: > 1024px (text-7xl)

ANIMATION:
==========
- Uses animate-fadeInUp class
- Ensure CSS animation is defined in globals.css
- Can be customized or disabled if needed

DARK MODE:
==========
- All colors have dark: variants
- Gradient adjusts automatically
- Background overlay adapts to theme
- Test both modes for consistency
*/
