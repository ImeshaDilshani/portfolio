"use client";

import type React from "react";
import { useState } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          subject: `New Contact from ${formData.fullName}`,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setFormData({ fullName: "", email: "", phone: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        throw new Error(result.message || "Something went wrong");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Failed to send. Please try again.");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main>
      {/* Header */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-10">
            <p className="text-xs font-medium tracking-widest uppercase text-[var(--muted-foreground)] pt-1">
              Contact
            </p>
            <div className="space-y-4 max-w-2xl">
              <h1 className="text-4xl md:text-5xl text-[var(--foreground)]">Let's Talk</h1>
              <p className="text-[var(--muted-foreground)] leading-relaxed">
                Open to projects, collaborations, and good conversations. Whether you want to build something together or just say hello — I'd love to hear from you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-[var(--border)]">

          {/* Left — info */}
          <div className="p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-[var(--border)] space-y-8">
            <div className="space-y-2">
              <p className="text-xs font-medium tracking-widest uppercase text-[var(--muted-foreground)]">Email</p>
              <a href="mailto:work@imesha.dev" className="text-sm text-[var(--foreground)] hover:opacity-70 transition-opacity underline underline-offset-2">
                work@imesha.dev
              </a>
            </div>

            <div className="space-y-2">
              <p className="text-xs font-medium tracking-widest uppercase text-[var(--muted-foreground)]">Connect</p>
              <div className="flex flex-col gap-1.5 text-sm">
                <a href="https://www.linkedin.com/in/imesha-dilshani-61862422b" target="_blank" rel="noopener noreferrer" className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors">LinkedIn ↗</a>
                <a href="https://github.com/ImeshaDilshani" target="_blank" rel="noopener noreferrer" className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors">GitHub ↗</a>
                <a href="https://x.com/ImeshaDilshani3" target="_blank" rel="noopener noreferrer" className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors">Twitter / X ↗</a>
                <a href="https://www.freelancer.com/u/imeshadilshani03" target="_blank" rel="noopener noreferrer" className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors">Freelancer.com ↗</a>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-xs font-medium tracking-widest uppercase text-[var(--muted-foreground)]">Available for</p>
              <div className="flex flex-col gap-1 text-sm text-[var(--muted-foreground)]">
                <span>→ Full-stack Development projects</span>
                <span>→ Mobile Application Development projects</span>
                <span>→ Data Engineering & Data Pipelines projects</span>
                <span>→ AI/ML Development projects</span>
                <span>→ Freelance contracts</span>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-1.5">
                <label htmlFor="fullName" className="text-xs font-medium tracking-widest uppercase text-[var(--muted-foreground)]">
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Your name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  disabled={status === "loading"}
                  className="w-full px-4 py-3 text-sm border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] outline-none focus:border-[var(--foreground)] transition-colors disabled:opacity-50"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="email" className="text-xs font-medium tracking-widest uppercase text-[var(--muted-foreground)]">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="email@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={status === "loading"}
                  className="w-full px-4 py-3 text-sm border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] outline-none focus:border-[var(--foreground)] transition-colors disabled:opacity-50"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="phone" className="text-xs font-medium tracking-widest uppercase text-[var(--muted-foreground)]">
                  Phone <span className="normal-case">(optional)</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+1 (222) 333 4444"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={status === "loading"}
                  className="w-full px-4 py-3 text-sm border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] outline-none focus:border-[var(--foreground)] transition-colors disabled:opacity-50"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-medium tracking-widests uppercase text-[var(--muted-foreground)]">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={status === "loading"}
                  className="w-full px-4 py-3 text-sm border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] outline-none focus:border-[var(--foreground)] transition-colors resize-none disabled:opacity-50"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full px-6 py-3 text-sm font-medium tracking-wide uppercase bg-[var(--foreground)] text-[var(--primary-foreground)] hover:opacity-80 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === "loading" ? (
                  <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
                ) : (
                  "Send Message"
                )}
              </button>

              {status === "success" && (
                <div className="flex items-center gap-2 p-4 border border-green-300 bg-green-50 text-green-800 text-sm">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Message sent. I'll get back to you soon.</span>
                </div>
              )}
              {status === "error" && (
                <div className="flex items-center gap-2 p-4 border border-red-300 bg-red-50 text-red-800 text-sm">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
