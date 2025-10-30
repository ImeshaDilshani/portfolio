"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="h-9 w-9 rounded-full bg-gray-100/50 dark:bg-white/5 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 hover:bg-gray-200/50 dark:hover:bg-white/10 transition-all duration-300"
      >
        <Sun className="h-[1.1rem] w-[1.1rem]" />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="h-9 w-9 rounded-full bg-gray-100/50 dark:bg-white/5 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 hover:bg-gray-200/50 dark:hover:bg-white/10 hover:scale-110 hover:border-violet-500/30 transition-all duration-300 magnetic-hover relative overflow-hidden group"
      aria-label="Toggle theme"
    >
      {/* Light mode icon (Sun) */}
      <Sun className="h-[1.1rem] w-[1.1rem] rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0 text-amber-500 group-hover:text-amber-600" />

      {/* Dark mode icon (Moon) */}
      <Moon className="absolute h-[1.1rem] w-[1.1rem] rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100 text-violet-400 group-hover:text-violet-300" />

      {/* Hover glow effect */}
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-500/10 to-violet-500/10 dark:from-violet-500/10 dark:to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>

      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
