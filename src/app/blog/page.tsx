import type { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Journal | RedStar Huts — Luxury Real Estate Insights & Market Analysis",
  description:
    "Expert insights on luxury real estate trends, investment strategies, property staging, and market analysis across North India. Read the RedStar Huts Journal.",
  keywords: [
    "luxury real estate blog",
    "real estate market insights",
    "property investment tips",
    "North India real estate trends",
    "Chandigarh property market",
    "Punjab real estate news",
    "luxury home buying guide",
    "real estate investment India",
    "RedStar Huts journal",
  ],
  alternates: {
    canonical: "https://redstarhuts.com/blog",
  },
  openGraph: {
    title: "Journal | RedStar Huts",
    description:
      "Expert insights on luxury real estate trends, investment strategies, and market analysis.",
    url: "https://redstarhuts.com/blog",
    type: "website",
    siteName: "RedStar Huts",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "RedStar Huts Journal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Journal | RedStar Huts",
    description:
      "Expert insights on luxury real estate trends, investment strategies, and market analysis.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "RedStar Huts Journal",
  description:
    "Expert insights on luxury real estate trends, investment strategies, and market analysis.",
  url: "https://redstarhuts.com/blog",
  publisher: {
    "@type": "Organization",
    name: "RedStar Huts",
    url: "https://redstarhuts.com",
  },
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogClient />
    </>
  );
}
