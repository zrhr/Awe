import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Awe",
  description:
    "An interactive map for noticing awe in human accomplishment, nature, and everyday life.",
  openGraph: {
    title: "Awe",
    description:
      "Choose a path and find awe in accomplishments, nature, and ordinary moments.",
    siteName: "Awe",
    url: siteUrl("/"),
    images: [
      {
        url: siteUrl("/generated/level-1-desktop.png"),
        width: 1600,
        height: 1000,
        alt: "Awe discovery map"
      }
    ]
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#111827"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
