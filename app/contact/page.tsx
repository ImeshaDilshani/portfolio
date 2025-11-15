"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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
      // Using Web3Forms - Replace 'YOUR_ACCESS_KEY_HERE' with your actual access key
      // Get free access key from: https://web3forms.com
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          subject: `New Contact Form Submission from ${formData.fullName}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          message: "",
        });
        // Reset success message after 5 seconds
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        throw new Error(result.message || "Something went wrong");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Failed to send message. Please try again.");
      // Reset error after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen bg-white">
      <div className="container max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Side - Text Content */}
          <div className="space-y-6 lg:sticky lg:top-24">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black font-[family-name:var(--font-adamina)] leading-tight">
              Let's Contact ME
            </h1>
            
            <div className="space-y-4 text-gray-600 text-base md:text-lg leading-relaxed max-w-xl">
              <p>
                I'm passionate about creating intelligent software and data systems that solve real-world problems. Whether you're looking to build a new product, improve existing systems, or explore data-driven insights, I'd love to hear from you.
              </p>
              <p>
                With experience in full-stack development, data engineering, and cloud computing, I bring both technical expertise and a collaborative mindset to every project. Let's connect and discuss how we can work together.
              </p>
              <p className="text-black font-medium">
                Share your information below, and I'll be in touch.
              </p>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="w-full">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm">
              <h2 className="text-xl md:text-2xl font-semibold mb-6 text-black">
                Tell me how can I help
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-sm text-gray-700">
                    Full name
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    placeholder="Full name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="h-12 bg-white border-gray-300 focus:border-black focus:ring-black"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm text-gray-700">
                    Your email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="email@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12 bg-white border-gray-300 focus:border-black focus:ring-black"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm text-gray-700">
                    Phone number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="1-(222)-333-4444"
                    value={formData.phone}
                    onChange={handleChange}
                    className="h-12 bg-white border-gray-300 focus:border-black focus:ring-black"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm text-gray-700">
                    How can I help?
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="I'm interested in working together. I'd like to learn more about..."
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-white border-gray-300 focus:border-black focus:ring-black resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full h-12 bg-black hover:bg-gray-800 text-white rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send message"
                  )}
                </Button>

                {/* Success Message */}
                {status === "success" && (
                  <div className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    <p className="text-sm">
                      Thank you for your message! I'll get back to you soon.
                    </p>
                  </div>
                )}

                {/* Error Message */}
                {status === "error" && (
                  <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <p className="text-sm">
                      {errorMessage || "Failed to send message. Please try again."}
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
