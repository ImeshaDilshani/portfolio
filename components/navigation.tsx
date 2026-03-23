"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { NAVIGATION_CONFIG } from "@/lib/config";

export function Navigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

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
      {/* Top Fixed Nav Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)] bg-[var(--background)]">
        <header className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex h-14 items-center justify-between">
            {/* Logo */}
            <Link
              href={NAVIGATION_CONFIG.logo.href}
              className="text-sm font-semibold tracking-tight text-[var(--foreground)] font-[family-name:var(--font-adamina)]"
            >
              {NAVIGATION_CONFIG.logo.text}
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-0">
              {NAVIGATION_CONFIG.mainNav.map((item) => {
                const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
                const hasChildren = "children" in item && item.children && item.children.length > 0;

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
                          "flex items-center gap-1 px-4 py-1.5 text-xs font-medium tracking-wide uppercase transition-colors",
                          isActive
                            ? "text-[var(--foreground)]"
                            : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                        )}
                      >
                        {item.label}
                        <ChevronDown className="w-3 h-3" />
                      </button>

                      {/* Dropdown */}
                      <div
                        className={cn(
                          "absolute top-full left-0 mt-0 w-52 bg-[var(--background)] border border-[var(--border)] shadow-lg transition-all duration-150",
                          openDropdown === item.label
                            ? "opacity-100 visible translate-y-0"
                            : "opacity-0 invisible -translate-y-1"
                        )}
                      >
                        {"children" in item &&
                          item.children?.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block px-4 py-2.5 text-xs font-medium uppercase tracking-wide text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)] transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "px-4 py-1.5 text-xs font-medium tracking-wide uppercase transition-colors",
                      isActive
                        ? "text-[var(--foreground)]"
                        : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right: CTA + Mobile Toggle */}
            <div className="flex items-center gap-4">
              <Link
                href={NAVIGATION_CONFIG.cta.href}
                className="hidden md:inline-flex items-center gap-2 px-4 py-1.5 bg-[var(--foreground)] text-[var(--primary-foreground)] text-xs font-medium tracking-wide uppercase transition-opacity hover:opacity-80"
              >
                {NAVIGATION_CONFIG.cta.label}
              </Link>

              {/* Mobile Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-1.5 text-[var(--foreground)]"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </header>
      </div>

      {/* Spacer for fixed nav */}
      <div className="h-14" />

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/20"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute top-14 left-0 right-0 bg-[var(--background)] border-b border-[var(--border)] shadow-lg">
            <nav className="px-6 py-4 flex flex-col gap-0">
              {NAVIGATION_CONFIG.mainNav.map((item) => {
                const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
                const hasChildren = "children" in item && item.children && item.children.length > 0;

                if (hasChildren) {
                  return (
                    <div key={item.label}>
                      <div className="py-2 text-xs font-semibold text-[var(--muted-foreground)] uppercase tracking-widest">
                        {item.label}
                      </div>
                      {"children" in item &&
                        item.children?.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block pl-4 py-2 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
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
                      "py-2.5 text-sm font-medium transition-colors",
                      isActive
                        ? "text-[var(--foreground)]"
                        : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <div className="my-3 h-px bg-[var(--border)]" />

              <Link
                href={NAVIGATION_CONFIG.cta.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2.5 text-sm font-medium tracking-wide uppercase text-[var(--foreground)]"
              >
                {NAVIGATION_CONFIG.cta.label} →
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
