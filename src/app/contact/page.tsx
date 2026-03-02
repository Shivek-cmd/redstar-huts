import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | RedStar Huts — Book a Consultation",
  description:
    "Get in touch with RedStar Huts for luxury property buying, selling, or investment advisory. Schedule a consultation for properties in Chandigarh, Mohali, Zirakpur, and North India.",
  keywords: [
    "contact RedStar Huts",
    "book property consultation",
    "real estate inquiry",
    "property advisor contact",
    "schedule site visit",
    "luxury property inquiry Chandigarh",
    "property buying help Mohali",
    "real estate consultation Punjab",
    "NRI property inquiry India",
  ],
  alternates: {
    canonical: "https://redstarhuts.com/contact",
  },
  openGraph: {
    title: "Contact Us | RedStar Huts",
    description:
      "Schedule a consultation for luxury property buying, selling, or investment advisory across North India.",
    url: "https://redstarhuts.com/contact",
    type: "website",
    siteName: "RedStar Huts",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact RedStar Huts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | RedStar Huts",
    description:
      "Schedule a consultation for luxury property buying, selling, or investment advisory.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact RedStar Huts",
  description:
    "Get in touch with RedStar Huts for property buying, selling, or investment advisory.",
  url: "https://redstarhuts.com/contact",
  mainEntity: {
    "@type": "RealEstateAgent",
    name: "RedStar Huts",
    email: "redstarhuts9@gmail.com",
    telephone: "+918894343056",
    url: "https://redstarhuts.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "SCO 08, Jublee Junction, Sector 66",
      addressLocality: "S.A.S Nagar Mohali",
      addressRegion: "Punjab",
      postalCode: "160062",
      addressCountry: "IN",
    },
    areaServed: [
      { "@type": "City", name: "Mohali" },
      { "@type": "City", name: "Chandigarh" },
      { "@type": "City", name: "Zirakpur" },
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "18:00",
    },
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactClient />
    </>
  );
}
