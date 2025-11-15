"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { NAVIGATION_CONFIG } from "@/lib/config";

export function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
      // Show navbar after scrolling down 100px
      setIsVisible(scrollPosition > 100);
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
      {/* Floating Navbar Container - Hidden initially, shows on scroll */}
      <div 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 px-4 md:px-6 pt-4 md:pt-6 transition-all duration-500 ease-out",
          isVisible 
            ? "translate-y-0 opacity-100" 
            : "-translate-y-full opacity-0"
        )}
      >
        <header
          className={cn(
            "max-w-6xl mx-auto rounded-full transition-all duration-300",
            isScrolled
              ? "bg-white/95 backdrop-blur-xl border border-gray-200/50 shadow-lg"
              : "bg-white/90 backdrop-blur-lg border border-gray-200/40 shadow-md",
          )}
        >
          <div className="flex h-16 items-center justify-between px-6 md:px-8">
            {/* Left side: Logo + Nav Items */}
            <div className="flex items-center gap-8">
              {/* Logo */}
              <Link
                href={NAVIGATION_CONFIG.logo.href}
                className="text-lg md:text-xl font-bold tracking-tight text-black hover:text-gray-700 transition-colors duration-300 font-[family-name:var(--font-adamina)]"
              >
                {NAVIGATION_CONFIG.logo.text}
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-2">
                {NAVIGATION_CONFIG.mainNav.map((item) => {
                  const isActive = pathname === item.href;
                  const hasChildren = item.children && item.children.length > 0;
                  
                  if (hasChildren) {
                    return (
                      <div 
                        key={item.label}
                        className="relative group"
                        onMouseEnter={() => setOpenDropdown(item.label)}
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        <button
                          className={cn(
                            "flex items-center gap-1 px-4 py-2 text-sm font-medium transition-all duration-200 rounded-full",
                            "text-gray-700 hover:text-black hover:bg-gray-50"
                          )}
                        >
                          {item.label}
                          <ChevronDown className="w-3.5 h-3.5" />
                        </button>
                        
                        {/* Dropdown Menu */}
                        <div className={cn(
                          "absolute top-full left-0 mt-3 w-56 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-200",
                          openDropdown === item.label ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                        )}>
                          <div className="py-3 px-2">
                            {item.children?.map((child, idx) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-black transition-all duration-150 rounded-xl mx-1"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  }
                  
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-full",
                        isActive
                          ? "text-black bg-gray-100"
                          : "text-gray-700 hover:text-black hover:bg-gray-50",
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Right side: CTA + Mobile Menu */}
            <div className="flex items-center gap-3">
              {/* Let's Talk Button - Desktop */}
              <Link
                href={NAVIGATION_CONFIG.cta.href}
                className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-black hover:bg-gray-800 text-white transition-all duration-200 text-sm font-medium shadow-md hover:shadow-lg hover:scale-105"
              >
                {NAVIGATION_CONFIG.cta.label}
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2.5 rounded-full hover:bg-gray-100 active:scale-95 transition-all duration-200 text-black"
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
            "absolute inset-0 bg-black/20 backdrop-blur-sm transition-all duration-300",
            isMobileMenuOpen ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Menu Content - Floating Box */}
        <div
          className={cn(
            "absolute top-24 left-4 right-4 mx-auto max-w-md bg-white/95 backdrop-blur-xl rounded-3xl border border-gray-200/50 shadow-2xl overflow-hidden transition-all duration-500 ease-out",
            isMobileMenuOpen
              ? "translate-y-0 opacity-100 scale-100"
              : "-translate-y-8 opacity-0 scale-95",
          )}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          <nav className="relative px-4 py-6 flex flex-col gap-1">
            {NAVIGATION_CONFIG.mainNav.map((item, index) => {
              const isActive = pathname === item.href;
              const hasChildren = item.children && item.children.length > 0;
              
              if (hasChildren) {
                return (
                  <div key={item.label}>
                    <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      {item.label}
                    </div>
                    {item.children?.map((child, childIndex) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                          "group relative px-6 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 active:scale-98 touch-manipulation block",
                          pathname === child.href
                            ? "text-black bg-gray-100"
                            : "text-gray-600 hover:text-black hover:bg-gray-50",
                        )}
                        style={{
                          transitionDelay: isMobileMenuOpen
                            ? `${(index + childIndex) * 40}ms`
                            : "0ms",
                          animation: isMobileMenuOpen
                            ? `slideInFromLeft 0.5s ease-out ${(index + childIndex) * 40}ms both`
                            : "none",
                        }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                );
              }
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "group relative px-4 py-3.5 text-base font-medium rounded-xl transition-all duration-300 active:scale-98 touch-manipulation",
                    isActive
                      ? "text-black bg-gray-100 border border-gray-200 shadow-sm"
                      : "text-gray-600 hover:text-black hover:bg-gray-50 border border-transparent",
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
                      <span className="w-2 h-2 rounded-full bg-black" />
                    )}
                  </div>
                </Link>
              );
            })}

            {/* Divider */}
            <div className="my-2 h-px bg-gray-200" />

            {/* Mobile CTA Button */}
            <Link
              href={NAVIGATION_CONFIG.cta.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="group relative flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-black hover:bg-gray-800 text-white transition-all duration-300 font-medium shadow-lg hover:shadow-xl active:scale-98 overflow-hidden touch-manipulation"
              style={{
                transitionDelay: isMobileMenuOpen
                  ? `${NAVIGATION_CONFIG.mainNav.length * 40}ms`
                  : "0ms",
                animation: isMobileMenuOpen
                  ? `slideInFromLeft 0.5s ease-out ${NAVIGATION_CONFIG.mainNav.length * 40}ms both`
                  : "none",
              }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <span className="relative z-10">{NAVIGATION_CONFIG.cta.label}</span>
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
