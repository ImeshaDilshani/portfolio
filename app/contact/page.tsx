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
import {
  Send,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

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
    <main className="min-h-screen pt-24 pb-20 px-4">
      <div className="container max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Let's{" "}
            <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent">
              Connect
            </span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            I'm always excited to discuss new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-purple-500/10 border border-purple-500/30 backdrop-blur-sm">
            <span className="text-2xl">✨</span>
            <span className="text-purple-300 font-medium">
              Currently available for freelance projects and full-time
              opportunities
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Information Cards */}
          <div className="space-y-6 animate-fadeInUp animation-delay-200">
            {/* Email Card */}
            <Card className="bg-purple-950/30 border-purple-800/40 hover:border-purple-600/60 hover:bg-purple-950/40 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-900/30">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl border border-purple-500/30">
                    <Mail className="h-6 w-6 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2 text-white">
                      Email
                    </h3>
                    <a
                      href="mailto:imesha.contact@gmail.com"
                      className="text-white/60 hover:text-purple-400 transition-colors break-all"
                    >
                      imesha.contact@gmail.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Phone Card */}
            <Card className="bg-purple-950/30 border-purple-800/40 hover:border-purple-600/60 hover:bg-purple-950/40 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-900/30">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl border border-purple-500/30">
                    <Phone className="h-6 w-6 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2 text-white">
                      Phone
                    </h3>
                    <a
                      href="tel:+1234567890"
                      className="text-white/60 hover:text-purple-400 transition-colors"
                    >
                      +94775933501
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Location Card */}
            <Card className="bg-purple-950/30 border-purple-800/40 hover:border-purple-600/60 hover:bg-purple-950/40 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-900/30">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl border border-purple-500/30">
                    <MapPin className="h-6 w-6 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2 text-white">
                      Location
                    </h3>
                    <p className="text-white/60">
                      Sri Lanka
                      <br />
                      <span className="text-purple-300">
                        Available for remote work
                      </span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2 animate-fadeInUp animation-delay-400">
            <Card className="bg-purple-950/30 border-purple-800/40 backdrop-blur-sm hover:shadow-2xl hover:shadow-purple-900/30 transition-all duration-500">
              <CardHeader>
                <CardTitle className="text-3xl text-white">
                  Send Me a Message
                </CardTitle>
                <CardDescription className="text-base text-white/60">
                  Fill out the form below and I'll get back to you as soon as
                  possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label
                        htmlFor="firstName"
                        className="text-base text-white/90"
                      >
                        First Name <span className="text-purple-400">*</span>
                      </Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="h-12 text-base bg-purple-950/50 border-purple-800/50 text-white placeholder:text-white/40 focus:border-purple-500 focus:ring-purple-500/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="lastName"
                        className="text-base text-white/90"
                      >
                        Last Name <span className="text-purple-400">*</span>
                      </Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="h-12 text-base bg-purple-950/50 border-purple-800/50 text-white placeholder:text-white/40 focus:border-purple-500 focus:ring-purple-500/20"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-base text-white/90">
                      Email Address <span className="text-purple-400">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john.doe@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-12 text-base bg-purple-950/50 border-purple-800/50 text-white placeholder:text-white/40 focus:border-purple-500 focus:ring-purple-500/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="message"
                      className="text-base text-white/90"
                    >
                      Message <span className="text-purple-400">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project or inquiry..."
                      rows={8}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="text-base resize-none bg-purple-950/50 border-purple-800/50 text-white placeholder:text-white/40 focus:border-purple-500 focus:ring-purple-500/20"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full rounded-full bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white border-0 shadow-lg shadow-purple-900/50 text-base font-semibold h-14 transition-all duration-300 hover:scale-105"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Social Links Section */}
        <div className="mt-20 text-center space-y-8 animate-fadeInUp animation-delay-600">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-white">
              Other Ways to{" "}
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                Connect
              </span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              You can also find me on various social platforms. Feel free to
              connect and follow my work!
            </p>
          </div>

          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/ImeshaDilshani"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 bg-purple-950/30 border-2 border-purple-800/40 rounded-xl hover:border-purple-500 hover:bg-purple-950/50 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-purple-900/30"
              aria-label="GitHub"
            >
              <Github className="h-7 w-7 text-white/70 group-hover:text-purple-400 transition-colors" />
            </a>
            <a
              href="www.linkedin.com/in/imesha-dilshani-61862422b"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 bg-purple-950/30 border-2 border-purple-800/40 rounded-xl hover:border-purple-500 hover:bg-purple-950/50 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-purple-900/30"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-7 w-7 text-white/70 group-hover:text-purple-400 transition-colors" />
            </a>
            <a
              href="https://x.com/ImeshaDilshani3"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 bg-purple-950/30 border-2 border-purple-800/40 rounded-xl hover:border-purple-500 hover:bg-purple-950/50 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-purple-900/30"
              aria-label="Twitter"
            >
              <Twitter className="h-7 w-7 text-white/70 group-hover:text-purple-400 transition-colors" />
            </a>
          </div>
        </div>

        {/* Additional CTA */}
        {/*<div className="mt-16 text-center animate-fadeInUp animation-delay-800">
          <div className="inline-block p-8 bg-gradient-to-br from-purple-950/50 to-purple-900/30 border border-purple-700/40 rounded-2xl backdrop-blur-sm">
            <p className="text-white/80 text-lg mb-4">Prefer a quick chat?</p>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-purple-500/50 text-purple-300 hover:bg-purple-500/10 hover:text-purple-200 hover:border-purple-400 transition-all hover:scale-105"
              asChild
            >
              <a href="mailto:imesha@example.com">
                <Mail className="mr-2 h-5 w-5" />
                Email Me Directly
              </a>
            </Button>
          </div>
        </div>*/}
      </div>
    </main>
  );
}
