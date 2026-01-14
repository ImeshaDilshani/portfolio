import type React from "react";
import type { Metadata, Viewport } from "next";
import { Lato, Adamina } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Navigation } from "@/components/navigation";
import { Suspense } from "react";
import { Footer } from "@/components/footer";
import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
  weight: ["300", "400", "700", "900"],
  preload: true,
});

const adamina = Adamina({
  subsets: ["latin"],
  variable: "--font-adamina",
  display: "swap",
  weight: ["400"],
  preload: true,
});

// Viewport configuration for better mobile responsiveness
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: "Imesha Dilshani | Engineer building intelligent AI/ML driven software and data systems with process automation & MLOps.",
  description:
    "Data Engineer, Software Engineer, Data Scientist, and Self-Learner building intelligent software and data systems.",
  generator: "Next.js",
  applicationName: "Imesha Dilshani Portfolio",
  keywords: ["Data Engineer", "Software Engineer", "AI", "ML", "Data Science", "Full Stack Developer", "Sri Lanka"],
  authors: [{ name: "Imesha Dilshani" }],
  creator: "Imesha Dilshani",
  publisher: "Imesha Dilshani",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://imesha.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Imesha Dilshani | Software & Data Engineer",
    description: "Building intelligent software and data systems that make an quality impact.",
    url: "https://imesha.dev",
    siteName: "Imesha Dilshani Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/imesha.webp",
        width: 1200,
        height: 630,
        alt: "Imesha Dilshani - Software & Data Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Imesha Dilshani | Software & Data Engineer",
    description: "Building intelligent software and data systems that make an quality impact.",
    creator: "@ImeshaDilshani3",
    images: ["/imesha.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/imesha.webp",
    apple: "/imesha.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preconnect to external domains for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* DNS prefetch for analytics */}
        <link rel="dns-prefetch" href="https://va.vercel-scripts.com" />
      </head>
      <body className={`${lato.variable} ${adamina.variable} font-sans antialiased`}>
        <Navigation />
        <div className="min-h-screen">
          <Suspense fallback={null}>{children}</Suspense>
        </div>
        <Footer />
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
      </body>
    </html>
  );
}
