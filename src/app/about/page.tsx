import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us | RedStar Huts — Luxury Real Estate Consulting",
  description:
    "Learn about RedStar Huts — a trusted real estate consulting firm serving homebuyers and investors across Mohali, Chandigarh, Zirakpur, and Dholera Smart City.",
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
      "Trusted real estate consulting serving homebuyers and investors across Mohali, Chandigarh, Zirakpur, and Dholera Smart City.",
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
      "Trusted real estate consulting serving homebuyers and investors across North India.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      name: "About RedStar Huts",
      description:
        "RedStar Huts is a trusted real estate consulting firm serving homebuyers and investors across Mohali, Chandigarh, Zirakpur, and Dholera Smart City.",
      url: "https://redstarhuts.com/about",
      isPartOf: {
        "@type": "WebSite",
        name: "RedStar Huts",
        url: "https://redstarhuts.com",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://redstarhuts.com" },
        { "@type": "ListItem", position: 2, name: "About", item: "https://redstarhuts.com/about" },
      ],
    },
  ],
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
