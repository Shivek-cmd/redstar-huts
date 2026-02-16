import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us | RedStar Huts — Luxury Real Estate Consulting",
  description:
    "Learn about RedStar Huts — a trusted luxury real estate consulting firm with 15+ years of experience across Mohali, Chandigarh, Zirakpur, Himachal Pradesh, and North India.",
  keywords: [
    "about RedStar Huts",
    "luxury real estate consultants",
    "real estate advisory India",
    "property consultants Chandigarh",
    "North India real estate firm",
    "trusted property advisors",
    "real estate consulting Punjab",
    "NRI property advisory",
  ],
  alternates: {
    canonical: "https://redstarhuts.com/about",
  },
  openGraph: {
    title: "About Us | RedStar Huts",
    description:
      "Trusted luxury real estate consulting with 15+ years of experience across North India and international markets.",
    url: "https://redstarhuts.com/about",
    type: "website",
    siteName: "RedStar Huts",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "About RedStar Huts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | RedStar Huts",
    description:
      "Trusted luxury real estate consulting with 15+ years of experience across North India.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About RedStar Huts",
  description:
    "RedStar Huts is a luxury real estate consulting firm with 15+ years of experience serving discerning clients across North India and international markets.",
  url: "https://redstarhuts.com/about",
  isPartOf: {
    "@type": "WebSite",
    name: "RedStar Huts",
    url: "https://redstarhuts.com",
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutClient />
    </>
  );
}
