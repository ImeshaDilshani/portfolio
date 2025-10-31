# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS, featuring a professional dark green theme.

## 🌟 Features

- **Modern Design**: Clean, professional layout with dark green color scheme
- **Responsive**: Fully responsive design that works on all devices
- **Interactive**: Smooth animations and transitions
- **TypeScript**: Type-safe development with TypeScript
- **SEO Optimized**: Built-in SEO optimization with Next.js
- **Performance**: Optimized for fast loading and great user experience

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Inter & JetBrains Mono (Google Fonts)
- **Deployment**: Ready for Vercel deployment

## 🎨 Design Features

- Dark green color theme (#0d1b1a, #134e4a, #047857, #10b981)
- Smooth scroll navigation
- Animated typing effect in hero section
- Interactive project cards with filters
- Contact form with validation
- Custom scrollbar styling
- Floating elements and subtle animations

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── About.tsx          # About section
│   ├── Contact.tsx        # Contact section
│   ├── Footer.tsx         # Footer component
│   ├── Hero.tsx           # Hero section
│   ├── Navbar.tsx         # Navigation bar
│   ├── Projects.tsx       # Projects section
│   └── Skills.tsx         # Skills section
└── ...
```

## 🎯 Sections

1. **Hero** - Eye-catching introduction with animated typing
2. **About** - Personal introduction and stats
3. **Skills** - Technical skills with progress bars
4. **Projects** - Portfolio projects with filtering
5. **Contact** - Contact form and information
6. **Footer** - Links and additional information

## 🔧 Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.tsx`):
   - Change name and roles in the typing animation
   - Update introduction text

2. **About Section** (`src/components/About.tsx`):
   - Update personal description
   - Modify stats (years, projects, technologies)

3. **Skills Section** (`src/components/Skills.tsx`):
   - Add/remove skills and proficiency levels
   - Update technology categories

4. **Projects Section** (`src/components/Projects.tsx`):
   - Replace with your actual projects
   - Update project descriptions, technologies, and links

5. **Contact Section** (`src/components/Contact.tsx`):
   - Update contact information
   - Configure form submission endpoint

### Theme Customization

Edit `tailwind.config.ts` to modify colors:
```typescript
colors: {
  primary: {
    // Your custom green shades
  },
  dark: {
    // Your custom dark shades
  }
}
```

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

### Build for Production

```bash
npm run build
npm start
```

## 📄 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using Next.js and Tailwind CSS

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
