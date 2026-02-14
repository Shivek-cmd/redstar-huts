import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "RedStar Huts — Luxury Real Estate & Consulting",
    template: "%s | RedStar Huts",
  },
  description:
    "Trusted guidance in real estate — from acquisition to investment strategy. RedStar Huts brings clarity, discretion, and results to every engagement.",
  keywords: [
    "luxury real estate",
    "real estate consulting",
    "property sales",
    "buyer advisory",
    "investment consulting",
    "premium properties",
    "RedStar Huts",
  ],
  authors: [{ name: "RedStar Huts" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "RedStar Huts",
    title: "RedStar Huts — Luxury Real Estate & Consulting",
    description:
      "Trusted guidance in real estate — from acquisition to investment strategy. RedStar Huts brings clarity, discretion, and results to every engagement.",
  },
  twitter: {
    card: "summary_large_image",
    title: "RedStar Huts — Luxury Real Estate & Consulting",
    description:
      "Trusted guidance in real estate — from acquisition to investment strategy.",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://redstarhuts.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/logo-circle.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#F6F5F3" />
      </head>
      <body className="antialiased">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-foreground focus:text-background-secondary focus:px-4 focus:py-2 focus:rounded-full focus:text-sm">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" role="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
