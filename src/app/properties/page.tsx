import type { Metadata } from "next";
import PropertiesClient from "./PropertiesClient";

export const metadata: Metadata = {
  title: "Luxury Properties for Sale | RedStar Huts",
  description:
    "Browse luxury properties for sale in Mohali, Chandigarh, Zirakpur, Beverly Hills, Manhattan, and more. Villas, penthouses, estates, and premium apartments curated by RedStar Huts.",
  keywords: [
    "luxury properties for sale",
    "buy luxury home",
    "premium real estate",
    "RedStar Huts properties",
    "Mohali villa for sale",
    "Chandigarh luxury apartment",
    "Zirakpur property",
    "North India real estate",
    "NRI property investment",
    "luxury villa Punjab",
    "penthouse Chandigarh",
    "buy property North India",
  ],
  alternates: {
    canonical: "https://redstarhuts.com/properties",
  },
  openGraph: {
    title: "Luxury Properties for Sale | RedStar Huts",
    description:
      "Browse luxury properties for sale in Mohali, Chandigarh, Zirakpur, Beverly Hills, Manhattan, and more. Curated by RedStar Huts.",
    url: "https://redstarhuts.com/properties",
    type: "website",
    siteName: "RedStar Huts",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "RedStar Huts Luxury Properties",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Properties for Sale | RedStar Huts",
    description:
      "Browse luxury properties for sale in Mohali, Chandigarh, Zirakpur, and international markets.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Luxury Properties for Sale",
  description:
    "Browse luxury properties for sale across North India and international markets, curated by RedStar Huts.",
  url: "https://redstarhuts.com/properties",
  isPartOf: {
    "@type": "WebSite",
    name: "RedStar Huts",
    url: "https://redstarhuts.com",
  },
};

export default function PropertiesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PropertiesClient />
    </>
  );
}
