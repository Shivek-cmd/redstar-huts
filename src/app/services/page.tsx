import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Real Estate Services | RedStar Huts — Property Sales, Buyer Advisory & More",
  description:
    "Comprehensive real estate services by RedStar Huts: property sales, buyer advisory, investment consulting, and market research across Chandigarh, Mohali, Zirakpur, and North India.",
  keywords: [
    "real estate services",
    "property sales service",
    "buyer advisory India",
    "investment consulting real estate",
    "market research property",
    "RedStar Huts services",
    "property consultant Chandigarh",
    "real estate advisor Punjab",
    "NRI property buying service",
    "luxury property services North India",
  ],
  alternates: {
    canonical: "https://redstarhuts.com/services",
  },
  openGraph: {
    title: "Real Estate Services | RedStar Huts",
    description:
      "Property sales, buyer advisory, investment consulting, and market research across North India.",
    url: "https://redstarhuts.com/services",
    type: "website",
    siteName: "RedStar Huts",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "RedStar Huts Real Estate Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Estate Services | RedStar Huts",
    description:
      "Property sales, buyer advisory, investment consulting, and market research across North India.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  provider: {
    "@type": "RealEstateAgent",
    name: "RedStar Huts",
    url: "https://redstarhuts.com",
  },
  name: "Luxury Real Estate Advisory Services",
  description:
    "Comprehensive real estate services including property sales, buyer advisory, investment consulting, and market research.",
  url: "https://redstarhuts.com/services",
  areaServed: [
    { "@type": "City", name: "Chandigarh" },
    { "@type": "City", name: "Mohali" },
    { "@type": "City", name: "Zirakpur" },
    { "@type": "State", name: "Punjab" },
    { "@type": "State", name: "Himachal Pradesh" },
  ],
  serviceType: [
    "Property Sales",
    "Buyer Advisory",
    "Investment Consulting",
    "Market Research",
  ],
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicesClient />
    </>
  );
}
