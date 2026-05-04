import type React from "react";

/**
 * Layout for /studio route.
 * Intentionally bare — no Navigation or Footer.
 * The root layout provides html/body/fonts.
 */
export const metadata = {
  title: "Sanity Studio | Imesha Dilshani",
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

