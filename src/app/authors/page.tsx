import type { Metadata } from "next";
import AuthorsClient from "./AuthorsClient";
import { authors } from "@/data/authors";

export const metadata: Metadata = {
  title: "Our Authors | RedStar Huts — Meet the Real Estate Experts",
  description:
    "Meet the RedStar Huts team of luxury real estate experts. Our authors share insights on property investment, market trends, and buying guides across North India.",
  keywords: [
    "RedStar Huts team",
    "real estate experts",
    "luxury property advisors",
    "real estate authors",
    "property investment experts",
    "North India real estate team",
    "Chandigarh property consultants",
  ],
  alternates: {
    canonical: "https://redstarhuts.com/authors",
  },
  openGraph: {
    title: "Our Authors | RedStar Huts",
    description:
      "Meet the RedStar Huts team of luxury real estate experts sharing insights on property investment and market trends.",
    url: "https://redstarhuts.com/authors",
    type: "website",
    siteName: "RedStar Huts",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "RedStar Huts Authors",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Authors | RedStar Huts",
    description:
      "Meet the RedStar Huts team of luxury real estate experts.",
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
  name: "RedStar Huts Authors",
  description:
    "Meet the RedStar Huts team of luxury real estate experts sharing insights on property investment and market trends.",
  url: "https://redstarhuts.com/authors",
  publisher: {
    "@type": "Organization",
    name: "RedStar Huts",
    url: "https://redstarhuts.com",
  },
  mainEntity: authors.map((a) => ({
    "@type": "Person",
    name: a.name,
    jobTitle: a.role,
    description: a.bio,
    image: `https://redstarhuts.com${a.image}`,
    url: `https://redstarhuts.com/authors/${a.slug}`,
  })),
};

export default function AuthorsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AuthorsClient />
    </>
  );
}
