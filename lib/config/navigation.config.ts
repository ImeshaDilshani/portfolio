/**
 * Navigation Configuration
 * Centralized navigation items and routes
 * Following SOLID principles - Single Responsibility
 */

export interface NavItem {
  href: string;
  label: string;
  description?: string;
  children?: readonly NavItem[];
}

export const NAVIGATION_CONFIG = {
  mainNav: [
    { href: "/", label: "Start Here", description: "Welcome to my portfolio" },
    { href: "/about", label: "About Me", description: "Learn more about me" },
    { 
      href: "/myworks", 
      label: "Work", 
      description: "My work and projects",
      children: [
        { href: "/about/data-portfolio", label: "Data Portfolio", description: "Data analysis projects" },
        { href: "/about/coding-portfolio", label: "Code Portfolio", description: "Coding projects" },
      ]
    },
    { href: "/myworks/techstack", label: "Skills", description: "My technical skills" },
    { 
      href: "#", 
      label: "Learn", 
      description: "Learning resources",
      children: [
        { href: "/writes", label: "Articles I Wrote", description: "My writings and thoughts" },
        { href: "/reads", label: "Books I Read", description: "Books and articles" },
        { href: "/listening", label: "Podcasts I Listen", description: "Podcasts and audio" },
      ]
    },
    { href: "/creative-lab", label: "Creative Lab", description: "Creative projects and experiments" },
  ] as const satisfies readonly NavItem[],
  
  cta: {
    href: "/contact",
    label: "Let's Talk",
    description: "Get in touch",
  } as const satisfies NavItem,
  
  logo: {
    text: "Imesha",
    href: "/",
  } as const,
} as const;

export type NavigationConfig = typeof NAVIGATION_CONFIG;
