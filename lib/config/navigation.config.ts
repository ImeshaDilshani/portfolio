/**
 * Navigation Configuration
 * Centralized navigation items and routes
 * Following SOLID principles - Single Responsibility
 */

export interface NavItem {
  href: string;
  label: string;
  description?: string;
}

export const NAVIGATION_CONFIG = {
  mainNav: [
    { href: "/", label: "Start Here", description: "Welcome to my portfolio" },
    { href: "/about", label: "About", description: "Learn more about me" },
    { href: "/writes", label: "Writes", description: "My writings and thoughts" },
    { href: "/reads", label: "Reads", description: "Books and articles" },
    { href: "/listening", label: "Listening", description: "Music and podcasts" },
    { href: "/captures", label: "Captures", description: "Photography and visuals" },
  ] as const satisfies readonly NavItem[],
  
  cta: {
    href: "/contact",
    label: "Let's Talk",
    description: "Get in touch",
  } as const satisfies NavItem,
  
  logo: {
    text: "IMESHA • D⁴",
    href: "/",
  } as const,
} as const;

export type NavigationConfig = typeof NAVIGATION_CONFIG;
