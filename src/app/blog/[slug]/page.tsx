import type { Metadata } from "next";
import BlogDetailClient from "./BlogDetailClient";

interface BlogSEO {
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
  keywords: string[];
}

const blogMeta: Record<string, BlogSEO> = {
  "luxury-market-trends-2025": {
    title: "Luxury Real Estate Market Trends to Watch",
    description: "Key trends shaping high-end property markets in North India including Himachal Pradesh, Punjab, Chandigarh, and Uttarakhand for discerning investors.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
    category: "Market Insights",
    date: "2025-01-15",
    keywords: ["luxury market trends", "real estate trends 2025", "North India property market", "high-end real estate"],
  },
  "art-of-property-staging": {
    title: "The Art of Property Staging for Premium Sales",
    description: "How professional staging transforms luxury properties and drives higher offers. Expert advice from RedStar Huts real estate consultants.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    category: "Selling",
    date: "2024-12-28",
    keywords: ["property staging", "luxury home staging", "sell luxury property", "real estate staging tips"],
  },
  "investment-portfolio-diversification": {
    title: "Diversifying Your Real Estate Investment Portfolio",
    description: "Strategic approaches to building a resilient property portfolio across North India markets. Ideal for South India-based investors seeking diversification.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
    category: "Investment",
    date: "2024-12-10",
    keywords: ["real estate investment", "portfolio diversification", "property investment India", "NRI investment"],
  },
  "guide-to-buying-first-luxury-home": {
    title: "A Considered Guide to Buying Your First Luxury Home",
    description: "Everything first-time luxury buyers need to know about navigating the premium real estate market in Himachal Pradesh, Punjab, and beyond.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
    category: "Buying",
    date: "2024-11-22",
    keywords: ["buying luxury home", "first luxury home guide", "luxury property buying tips", "premium real estate"],
  },
  "architecture-trends-modern-estates": {
    title: "Architecture Trends Defining Modern Estates",
    description: "From biophilic design to smart integration, exploring architectural movements redefining luxury residential living in North India.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
    category: "Design",
    date: "2024-11-05",
    keywords: ["architecture trends", "modern estate design", "luxury home architecture", "biophilic design"],
  },
  "understanding-property-valuation": {
    title: "Understanding Property Valuation in Premium Markets",
    description: "How luxury properties are valued in North India markets. Expert insights from RedStar Huts on pricing strategies and market analysis.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
    category: "Market Insights",
    date: "2024-10-18",
    keywords: ["property valuation", "luxury property pricing", "real estate appraisal", "market analysis India"],
  },
};

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
