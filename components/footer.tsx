"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Github,
  Heart,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

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
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: "New Newsletter Subscription",
          email: email,
          message: `New newsletter subscription from: ${email}`,
          from_name: "Portfolio Newsletter",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setMessage("Thank you for subscribing! You're all set to receive updates.");
        setEmail("");
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        throw new Error(result.message || "Subscription failed");
      }
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Failed to subscribe. Please try again.");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <footer className="mt-auto">
      {/* Top decorative line */}
      <div className="border-t-2 border-gray-200" />

      <div className="border-b border-gray-200 py-12 md:py-16 bg-gray-50">
        <div className="container px-4 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Logo and Social Media */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-black">
                  Imesha Dilshani
                </h3>
                <p className="text-gray-600 flex items-center gap-2">
                  Small Steps, Big System with Continous Improvements.{" "}
                  <Heart className="h-4 w-4 text-black fill-red" />
                </p>
              </div>

              <div className="flex gap-4 items-center">
                <a
                  href="https://x.com/ImeshaDilshani3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="www.linkedin.com/in/imesha-dilshani-61862422b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://github.com/ImeshaDilshani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Right Side - Newsletter Subscription */}
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-semibold text-black">
                Subscribe to my newsletter
              </h3>
              <p className="text-gray-600">
                Stay updated with latest articles from my blog.
              </p>
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={status === "loading"}
                    className="flex-1"
                  />
                  <Button
                    type="submit"
                    disabled={status === "loading"}
                    className="bg-black hover:bg-gray-800 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Subscribing...
                      </>
                    ) : (
                      "Subscribe"
                    )}
                  </Button>
                </div>

                {/* Success Message */}
                {status === "success" && (
                  <div className="flex items-start gap-2 p-3 bg-green-50 border border-green-200 rounded-lg text-green-800">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <p className="text-sm">{message}</p>
                  </div>
                )}

                {/* Error Message */}
                {status === "error" && (
                  <div className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-800">
                    <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <p className="text-sm">{message}</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="py-6 bg-white">
        <div className="container px-4 max-w-7xl mx-auto">
          <p className="text-center text-sm text-gray-600">
            © 2025 Imesha Dilshani. All rights reserved.
          </p>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="border-b-2 border-gray-200" />
    </footer>
  );
}
