import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nagiso Local Dive — Zero-night day tours in the Kiso Valley",
  description:
    "Catered breakfast & dinner delivered to your inn, plus a full day exploring hidden Nagiso by e-bike and hand. Three day tours from ¥15,000 — dive into the real rural Japan, and leave it real.",
  openGraph: {
    title: "Nagiso Local Dive — Zero-night day tours in the Kiso Valley",
    description:
      "Catered meals to your inn + a day of the real Nagiso. Kominka life, gorge rides, and a 50 km river descent. From Scratch LLC.",
    siteName: "Nagiso Local Dive",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400;1,9..144,500&family=Outfit:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
