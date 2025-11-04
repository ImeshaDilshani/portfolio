"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  { href: "/", label: "Start Here" },
  { href: "/about", label: "About" },
  { href: "/writes", label: "Writes" },
  { href: "/reads", label: "Reads" },
  { href: "/listening", label: "Listening" },
  { href: "/captures", label: "Captures" },
];

export function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Floating Navbar Container */}
      <div className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 pt-4 md:pt-6">
        <header
          className={cn(
            "max-w-5xl mx-auto rounded-2xl transition-all duration-300",
            isScrolled
              ? "bg-black/90 dark:bg-black/90 backdrop-blur-xl border border-purple-500/30 shadow-xl shadow-purple-900/20"
              : "bg-black/70 dark:bg-black/70 backdrop-blur-lg border border-purple-500/20 shadow-lg shadow-purple-900/10",
          )}
        >
          <div className="flex h-14 items-center justify-between px-4 md:px-6">
            {/* Left side: Logo + Nav Items */}
            <div className="flex items-center gap-6">
              {/* Logo */}
              <Link
                href="/"
                className="text-base md:text-lg font-bold tracking-tight text-white hover:text-purple-400 transition-colors duration-300"
              >
                IMESHA • D⁴
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-1">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "relative px-3 py-1.5 text-[13px] font-medium transition-all duration-200 rounded-lg",
                        isActive
                          ? "text-white"
                          : "text-white/60 hover:text-white hover:bg-white/5",
                      )}
                    >
                      {item.label}
                      {isActive && (
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-purple-400"></span>
                      )}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Right side: CTA + Theme Toggle */}
            <div className="flex items-center gap-2">
              {/* Let's Talk Button - Desktop */}
              <Link
                href="/contact"
                className="hidden md:inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-700 text-white transition-all duration-200 text-sm font-medium shadow-sm hover:shadow-md hover:scale-105"
              >
                Let's Talk
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>

              {/* Theme Toggle - Hide on mobile when menu is open */}
              <div
                className={cn(
                  "transition-opacity duration-200",
                  isMobileMenuOpen
                    ? "lg:opacity-100 opacity-0 pointer-events-none lg:pointer-events-auto"
                    : "opacity-100",
                )}
              >
                <ThemeToggle />
              </div>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-white/10 active:scale-95 transition-all duration-200 text-white"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
              >
                <div className="relative w-5 h-5">
                  <Menu
                    className={cn(
                      "w-5 h-5 absolute inset-0 transition-all duration-300",
                      isMobileMenuOpen
                        ? "rotate-90 opacity-0 scale-50"
                        : "rotate-0 opacity-100 scale-100",
                    )}
                  />
                  <X
                    className={cn(
                      "w-5 h-5 absolute inset-0 transition-all duration-300",
                      isMobileMenuOpen
                        ? "rotate-0 opacity-100 scale-100"
                        : "-rotate-90 opacity-0 scale-50",
                    )}
                  />
                </div>
              </button>
            </div>
          </div>
        </header>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden transition-all duration-300",
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
      >
        {/* Backdrop with blur */}
        <div
          className={cn(
            "absolute inset-0 bg-black/80 backdrop-blur-md transition-all duration-300",
            isMobileMenuOpen ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Menu Content - Floating Box */}
        <div
          className={cn(
            "absolute top-20 left-4 right-4 mx-auto max-w-md bg-gradient-to-b from-black/95 to-black/90 backdrop-blur-xl rounded-2xl border border-purple-500/30 shadow-2xl shadow-purple-900/30 overflow-hidden transition-all duration-500 ease-out",
            isMobileMenuOpen
              ? "translate-y-0 opacity-100 scale-100"
              : "-translate-y-8 opacity-0 scale-95",
          )}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-purple-500/10 pointer-events-none" />

          <nav className="relative px-4 py-6 flex flex-col gap-1">
            {navItems.map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "group relative px-4 py-3.5 text-base font-medium rounded-xl transition-all duration-300 active:scale-98 touch-manipulation",
                    isActive
                      ? "text-white bg-purple-600/30 border border-purple-500/40 shadow-lg shadow-purple-900/20"
                      : "text-white/70 hover:text-white hover:bg-white/5 border border-transparent",
                  )}
                  style={{
                    transitionDelay: isMobileMenuOpen
                      ? `${index * 40}ms`
                      : "0ms",
                    animation: isMobileMenuOpen
                      ? `slideInFromLeft 0.5s ease-out ${index * 40}ms both`
                      : "none",
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span className="relative z-10">{item.label}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                    )}
                  </div>
                  {!isActive && (
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600/0 via-purple-600/5 to-purple-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  )}
                </Link>
              );
            })}

            {/* Divider */}
            <div className="my-2 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

            {/* Mobile CTA Button */}
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="group relative flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white transition-all duration-300 font-medium shadow-lg shadow-purple-900/30 hover:shadow-purple-900/50 active:scale-98 overflow-hidden touch-manipulation"
              style={{
                transitionDelay: isMobileMenuOpen
                  ? `${navItems.length * 40}ms`
                  : "0ms",
                animation: isMobileMenuOpen
                  ? `slideInFromLeft 0.5s ease-out ${navItems.length * 40}ms both`
                  : "none",
              }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <span className="relative z-10">Let's Talk</span>
              <svg
                className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>

            {/* Theme Toggle for Mobile */}
            <div
              className="mt-3 pt-4 border-t border-purple-500/20 flex items-center justify-between px-4"
              style={{
                transitionDelay: isMobileMenuOpen
                  ? `${(navItems.length + 1) * 40}ms`
                  : "0ms",
                animation: isMobileMenuOpen
                  ? `slideInFromLeft 0.5s ease-out ${(navItems.length + 1) * 40}ms both`
                  : "none",
              }}
            >
              <span className="text-white/70 text-sm font-medium">
                Appearance
              </span>
              <ThemeToggle />
            </div>
          </nav>
        </div>
      </div>

      {/* Enhanced Animation Styles */}
      <style jsx global>{`
        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @media (hover: none) and (pointer: coarse) {
          /* Better touch target sizes on mobile */
          .touch-manipulation {
            -webkit-tap-highlight-color: transparent;
            touch-action: manipulation;
          }
        }

        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }

        /* Remove iOS tap highlight */
        * {
          -webkit-tap-highlight-color: transparent;
        }
      `}</style>
    </>
  );
}
