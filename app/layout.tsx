import type React from "react";
import type { Metadata } from "next";
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
});

const adamina = Adamina({
  subsets: ["latin"],
  variable: "--font-adamina",
  display: "swap",
  weight: ["400"],
});

// Emilio font configuration (you'll need to add the font files to /public/fonts/)
// For now, this is commented out. To enable:
// 1. Download Emilio font files (Regular and Bold)
// 2. Place them in /public/fonts/ directory
// 3. Uncomment the code below
/*
const emilio = localFont({
  src: [
    {
      path: "../public/fonts/Emilio-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Emilio-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-emilio",
  display: "swap",
})
*/

export const metadata: Metadata = {
  title: "Imesha Dilshani | Engineer building intelligent AI/ML driven software and data systems with process automation & MLOps.",
  description:
    "Data Engineer, Software Engineer, Data Scientist, and Self-Learner",
  generator: "v0.app",
  icons: {
    icon: "/profile.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable} ${adamina.variable} font-sans`}>
        <Suspense fallback={null}>
          <Navigation />
          <div className="min-h-screen">{children}</div>
          <Footer />
          <Analytics />
        </Suspense>
      </body>
    </html>
  );
}
