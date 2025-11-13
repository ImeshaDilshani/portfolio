"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      message: "",
    });
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
                  className="w-full h-12 bg-black hover:bg-gray-800 text-white rounded-lg font-medium transition-colors"
                >
                  Send message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
