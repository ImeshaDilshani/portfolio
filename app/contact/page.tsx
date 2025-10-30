"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Initialize scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    }, observerOptions);

    // Observe all elements with data-animate attribute
    const animatedElements = document.querySelectorAll("[data-animate]");
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
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
    <main className="min-h-screen pt-32 pb-20 px-4">
      <div className="container max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 dark:from-violet-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
            Let's Connect
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I'm always excited to discuss new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <p className="text-lg text-purple-600 dark:text-purple-400 mt-4 font-medium">
            ✨ Currently available for freelance projects and full-time
            opportunities
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Information Cards */}
          <div className="space-y-6" data-animate="fade-up">
            {/* Email Card */}
            <Card className="hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 border-2 hover:border-purple-500/50">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
                    <Mail className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Email</h3>
                    <a
                      href="mailto:imesha@example.com"
                      className="text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      imesha@example.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Phone Card */}
            <Card className="hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 border-2 hover:border-purple-500/50">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
                    <Phone className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Phone</h3>
                    <a
                      href="tel:+1234567890"
                      className="text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Location Card */}
            <Card className="hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 border-2 hover:border-purple-500/50">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
                    <MapPin className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Location</h3>
                    <p className="text-muted-foreground">
                      Sri Lanka
                      <br />
                      Available for remote work
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2" data-animate="fade-up">
            <Card className="hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 border-2">
              <CardHeader>
                <CardTitle className="text-3xl">Send Me a Message</CardTitle>
                <CardDescription className="text-base">
                  Fill out the form below and I'll get back to you as soon as
                  possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-base">
                        First Name *
                      </Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="h-12 text-base"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-base">
                        Last Name *
                      </Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="h-12 text-base"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-base">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john.doe@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-12 text-base"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-base">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project or inquiry..."
                      rows={8}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="text-base resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white text-base font-semibold h-14 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 text-center space-y-4" data-animate="fade-up">
          <h2 className="text-2xl font-bold">Other Ways to Connect</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            You can also find me on various social platforms. Feel free to
            connect and follow my work!
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-card border-2 rounded-lg hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:scale-110"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-card border-2 rounded-lg hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:scale-110"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-card border-2 rounded-lg hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:scale-110"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
