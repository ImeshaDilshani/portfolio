"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"
import { Github } from "lucide-react"

const navItems = [
  { href: "/", label: "Start Here" },
  { href: "/about", label: "About" },
  { href: "/writes", label: "Writes" },
  { href: "/reads", label: "Reads" },
  { href: "/listening", label: "Listening" },
  { href: "/captures", label: "Captures" },
  { href: "/contact", label: "Contact Me" },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/0 bg-transparent backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between max-w-7xl mx-auto px-6">
        <Link href="/" className="text-xl font-bold tracking-tight text-white hover:text-purple-400 transition-colors">
          IMESHA • D⁴
        </Link>

        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-[15px] font-medium transition-colors relative",
                pathname === item.href 
                  ? "text-white" 
                  : "text-white/60 hover:text-purple-400"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center gap-3">
          <Link href="/contact">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 backdrop-blur-sm hover:bg-purple-500/20 transition-colors cursor-pointer">
              <span className="text-purple-300 text-sm font-medium">Let's Talk</span>
              <svg className="w-4 h-4 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </header>
  )
}
