import type { Metadata } from "next";
import BlogDetailClient from "./BlogDetailClient";

import { blogMeta } from "@/data/blogMeta";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const meta = blogMeta[slug];
  const title = meta ? `${meta.title} | RedStar Huts Journal` : "Blog | RedStar Huts";
  const description = meta?.description || "Insights and perspectives on luxury real estate from RedStar Huts.";
  const image = meta?.image || "/og-image.png";
  const url = `https://redstarhuts.com/blog/${slug}`;

  return {
    title,
    description,
    keywords: meta
      ? ["RedStar Huts", "real estate blog", ...meta.keywords]
      : ["real estate blog", "RedStar Huts"],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      siteName: "RedStar Huts",
      images: [{ url: image, width: 1200, height: 630, alt: meta?.title || "RedStar Huts Blog" }],
      ...(meta && {
        publishedTime: meta.date,
        section: meta.category,
      }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

function buildArticleJsonLd(slug: string) {
  const meta = blogMeta[slug];
  if (!meta) return null;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: meta.title,
        description: meta.description,
        image: meta.image,
        datePublished: meta.date,
        url: `https://redstarhuts.com/blog/${slug}`,
        author: {
          "@type": "Organization",
          name: "RedStar Huts",
          url: "https://redstarhuts.com",
        },
        publisher: {
          "@type": "Organization",
          name: "RedStar Huts",
          url: "https://redstarhuts.com",
          logo: {
            "@type": "ImageObject",
            url: "https://redstarhuts.com/logo.png",
          },
        },
        articleSection: meta.category,
        keywords: meta.keywords.join(", "),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://redstarhuts.com" },
          { "@type": "ListItem", position: 2, name: "Journal", item: "https://redstarhuts.com/blog" },
          { "@type": "ListItem", position: 3, name: meta.title, item: `https://redstarhuts.com/blog/${slug}` },
        ],
      },
    ],
  };
}

export function generateStaticParams() {
  return [
    { slug: "why-mohali-is-the-next-premium-real-estate-destination" },
    { slug: "luxury-living-in-chandigarh-investment-guide" },
    { slug: "zirakpur-real-estate-emerging-opportunities" },
    { slug: "beverly-hills-vs-manhattan-luxury-markets" },
    { slug: "rise-of-tri-city-real-estate-mohali-chandigarh-zirakpur" },
    { slug: "lake-tahoe-luxury-homes-buyer-guide" },
    { slug: "luxury-market-trends-2025" },
    { slug: "art-of-property-staging" },
    { slug: "investment-portfolio-diversification" },
    { slug: "guide-to-buying-first-luxury-home" },
    { slug: "architecture-trends-modern-estates" },
    { slug: "understanding-property-valuation" },
  ];
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const jsonLd = buildArticleJsonLd(slug);

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <BlogDetailClient slug={slug} />
    </>
  );
}
