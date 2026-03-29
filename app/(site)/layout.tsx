import type React from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Suspense } from "react";
import "./globals.css";

/**
 * Layout for all site pages (excludes /studio).
 * Adds the Navigation bar and Footer chrome.
 */
export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation />
      <div className="min-h-screen">
        <Suspense fallback={null}>{children}</Suspense>
      </div>
      <Footer />
    </>
  );
}
