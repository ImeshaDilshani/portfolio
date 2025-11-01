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

              {/* Theme Toggle */}
              <ThemeToggle />

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors duration-200 text-white"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </header>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden transition-all duration-300",
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Content - Floating Box */}
        <div
          className={cn(
            "absolute top-24 md:top-26 left-4 right-4 mx-auto max-w-sm bg-black/95 backdrop-blur-xl rounded-2xl border border-purple-500/30 shadow-2xl shadow-purple-900/30 transition-all duration-300 transform overflow-hidden",
            isMobileMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-4 opacity-0",
          )}
        >
          <nav className="px-4 py-6 flex flex-col gap-1">
            {navItems.map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "px-4 py-3 text-base font-medium rounded-lg transition-all duration-200",
                    isActive
                      ? "text-white bg-purple-600/20 border border-purple-500/30"
                      : "text-white/70 hover:text-white hover:bg-white/5",
                  )}
                  style={{
                    animationDelay: `${index * 30}ms`,
                    animation: isMobileMenuOpen
                      ? "slideIn 0.3s ease-out forwards"
                      : "none",
                  }}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* Mobile CTA */}
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white transition-all duration-200 font-medium shadow-sm"
            >
              Let's Talk
              <svg
                className="w-4 h-4"
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
            <div className="mt-4 pt-4 border-t border-purple-500/20 flex items-center justify-between px-4">
              <span className="text-white/70 text-sm font-medium">Theme</span>
              <ThemeToggle />
            </div>
          </nav>
        </div>
      </div>

      {/* Animation styles */}
      <style jsx global>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}
