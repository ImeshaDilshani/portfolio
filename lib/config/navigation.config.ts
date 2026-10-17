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
    { href: "/", label: "Home", description: "Welcome to my portfolio" },
    { href: "/services", label: "Services", description: "What I offer" },
    { href: "/myworks", label: "Work", description: "My work and projects" },
    { href: "/about", label: "About", description: "Learn more about me" },
    { href: "/library", label: "Library", description: "My articles, reading lists, and podcasts" },
  ] as const satisfies readonly NavItem[],
  
  cta: {
    href: "/contact",
    label: "Book a Call",
    description: "Schedule a free consultation",
  } as const satisfies NavItem,
  
  logo: {
    text: "Imesha",
    href: "/",
  } as const,
} as const;

export type NavigationConfig = typeof NAVIGATION_CONFIG;
