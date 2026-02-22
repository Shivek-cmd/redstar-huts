import type { Metadata } from "next";
import DholeraLandingClient from "./DholeraLandingClient";

export const metadata: Metadata = {
  title: "Dholera Smart City Plots for Sale | Starting 310 Sq Yards | RedStar Huts",
  description:
    "Buy residential plots in Dholera Smart City, Gujarat. Starting from 310 sq yards in a 63-acre township with clubhouse, gym, solar park, 60 ft roads, expressway access, and DMIC alignment. Completion by 2028. Contact RedStar Huts.",
  keywords: [
    "Dholera Smart City plots for sale",
    "buy plot in Dholera",
    "Dholera SIR investment",
    "residential plots Dholera Gujarat",
    "Dholera Smart City investment 2026",
    "DMIC Dholera property",
    "Dholera airport nearby plots",
    "Dholera township plots",
    "Gujarat smart city plots",
    "Dholera land for sale",
    "Dholera real estate",
    "invest in Dholera",
    "Dholera plot price",
    "RedStar Huts Dholera",
  ],
  alternates: {
    canonical: "https://redstarhuts.com/dholera-smart-city-plots-for-sale",
  },
  openGraph: {
    title: "Dholera Smart City Plots for Sale | RedStar Huts",
    description:
      "Residential plots starting from 310 sq yards in India's first greenfield smart city. Expressway access, airport proximity, DMIC alignment. Completion by 2028.",
    url: "https://redstarhuts.com/dholera-smart-city-plots-for-sale",
    images: [
      {
        url: "/properties/RSH-DHO-001/expressway-aerial.jpg",
        width: 1200,
        height: 630,
        alt: "Dholera Smart City residential plots by RedStar Huts",
      },
    ],
    type: "website",
    siteName: "RedStar Huts",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dholera Smart City Plots for Sale | RedStar Huts",
    description:
      "Residential plots starting from 310 sq yards in India's first greenfield smart city. Contact RedStar Huts.",
    images: ["/properties/RSH-DHO-001/expressway-aerial.jpg"],
  },
};

function buildDholeraJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name: "Residential Plots in Dholera Smart City",
    description:
      "Residential plots starting from 310 sq yards in a 63-acre township within Dholera SIR, India's first greenfield smart city. Expressway access, airport proximity, DMIC alignment.",
    url: "https://redstarhuts.com/dholera-smart-city-plots-for-sale",
    image: "https://redstarhuts.com/properties/RSH-DHO-001/expressway-aerial.jpg",
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dholera",
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
    broker: {
      "@type": "RealEstateAgent",
      name: "RedStar Huts",
      url: "https://redstarhuts.com",
      telephone: "+918894343056",
    },
  };
}

function buildFaqJsonLd() {
  const faqs = [
    { q: "What is Dholera Smart City?", a: "Dholera SIR (Special Investment Region) is India's first greenfield smart city, spread across 920 sq km in Gujarat. It is being developed under the Delhi-Mumbai Industrial Corridor with world-class infrastructure including an international airport, expressway, and smart grid systems." },
    { q: "What plot sizes are available?", a: "Residential plots start from 310 sq yards within our 17 + 46 acre township. The township has 60 ft main roads, 40 ft internal roads, underground utilities, and full amenities. Completion is targeted by 2028." },
    { q: "Is Dholera a good investment in 2026?", a: "Three factors make 2026 compelling: the Ahmedabad-Dholera Expressway is nearing completion, the TATA Semiconductor Plant is attracting employment, and early-stage pricing is still available before major infrastructure goes live." },
    { q: "What amenities are included in the township?", a: "Grand clubhouse, gym, kids play zone, yoga studio, co-working lounge, commercial complex, solar park, in-house STP, underground utilities for power, water, and data, and 24x7 power supply." },
    { q: "How is Dholera connected to major cities?", a: "Direct access via Ahmedabad-Dholera Expressway, proximity to NHAI Adhelai Diamond Circle, upcoming Dholera International Airport (10 kms), and location on the Delhi-Mumbai Industrial Corridor. Ahmedabad is 80 kms away." },
    { q: "How can I book a plot through RedStar Huts?", a: "Contact us through the form on this page or call +91 889 434 3056. We will share available inventory, pricing, and arrange a site visit at your convenience." },
  ];

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };
}

export default function DholeraLandingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildDholeraJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqJsonLd()) }}
      />
      <DholeraLandingClient />
    </>
  );
}
