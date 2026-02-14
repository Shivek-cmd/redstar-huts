import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import LayoutShell from "@/components/LayoutShell";

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
    "Himachal Pradesh real estate",
    "Punjab property investment",
    "Chandigarh luxury homes",
    "Haryana property consultants",
    "Uttarakhand real estate",
    "North India luxury properties",
    "real estate investment India",
    "NRI property investment",
    "South India investors North India property",
  ],
  alternates: {
    canonical: "https://redstarhuts.com",
  },
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
        <link rel="icon" href="/logo-circle.png" type="image/png" />
        <meta name="theme-color" content="#F6F5F3" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              name: "RedStar Huts",
              url: "https://redstarhuts.com",
              logo: "https://redstarhuts.com/logo-circle.png",
              description: "Luxury real estate consulting and property advisory services across North India — Himachal Pradesh, Punjab, Chandigarh, Haryana, and Uttarakhand.",
              email: "redstarhuts9@gmail.com",
              telephone: "+918894343056",
              areaServed: [
                { "@type": "State", name: "Himachal Pradesh" },
                { "@type": "State", name: "Punjab" },
                { "@type": "City", name: "Chandigarh" },
                { "@type": "State", name: "Haryana" },
                { "@type": "State", name: "Uttarakhand" },
              ],
              sameAs: [
                "https://www.instagram.com/",
                "https://www.facebook.com/",
                "https://www.linkedin.com/",
                "https://twitter.com/",
              ],
              priceRange: "$$$",
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
