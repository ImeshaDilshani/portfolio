"use client";

import type React from "react";
import { useState } from "react";
import Link from "next/link";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: "New Newsletter Subscription",
          email,
          message: `New newsletter subscription from: ${email}`,
          from_name: "Portfolio Newsletter",
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setMessage("You're subscribed. Thank you.");
        setEmail("");
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        throw new Error(result.message || "Subscription failed");
      }
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Failed. Please try again.");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <footer className="border-t border-[var(--border)] mt-auto">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[var(--foreground)] tracking-tight">
              Imesha Dilshani
            </h3>
            <p className="text-xs text-[var(--muted-foreground)] leading-relaxed max-w-xs">
              Data &amp; Software Engineer. Building intelligent systems with small steps and continuous improvement.
            </p>
            <div className="flex gap-4 text-xs text-[var(--muted-foreground)]">
              <a href="https://x.com/ImeshaDilshani3" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--foreground)] transition-colors">Twitter ↗</a>
              <a href="https://www.linkedin.com/in/imesha-dilshani-61862422b" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--foreground)] transition-colors">LinkedIn ↗</a>
              <a href="https://github.com/ImeshaDilshani" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--foreground)] transition-colors">GitHub ↗</a>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <p className="text-xs font-medium tracking-widest uppercase text-[var(--muted-foreground)]">Pages</p>
            <div className="space-y-2 text-sm">
              {[
                { label: "About", href: "/about" },
                { label: "Work", href: "/myworks" },
                { label: "Writes", href: "/writes" },
                { label: "Reads", href: "/reads" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <Link key={item.href} href={item.href} className="block text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <p className="text-xs font-medium tracking-widest uppercase text-[var(--muted-foreground)]">Newsletter</p>
            <p className="text-sm text-[var(--muted-foreground)]">Stay updated with latest articles and projects.</p>
            <form onSubmit={handleSubmit} className="space-y-2">
              <div className="flex">
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={status === "loading"}
                  className="flex-1 px-3 py-2 text-sm border border-[var(--border)] border-r-0 bg-[var(--background)] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] outline-none focus:border-[var(--foreground)] transition-colors disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="px-4 py-2 text-xs font-medium uppercase tracking-wide bg-[var(--foreground)] text-[var(--primary-foreground)] border border-[var(--foreground)] hover:opacity-80 transition-opacity disabled:opacity-50"
                >
                  {status === "loading" ? <Loader2 className="w-3 h-3 animate-spin" /> : "Go"}
                </button>
              </div>

              {status === "success" && (
                <div className="flex items-center gap-2 text-xs text-green-700">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>{message}</span>
                </div>
              )}
              {status === "error" && (
                <div className="flex items-center gap-2 text-xs text-red-700">
                  <AlertCircle className="w-3 h-3" />
                  <span>{message}</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-[var(--border)] px-6 md:px-10 py-4 max-w-7xl mx-auto">
        <p className="text-xs text-[var(--muted-foreground)]">
          © 2026 Imesha Dilshani. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
