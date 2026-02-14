import type { Metadata } from "next";
import BlogDetailClient from "./BlogDetailClient";

const blogMeta: Record<string, { title: string; description: string }> = {
  "luxury-market-trends-2025": {
    title: "Luxury Real Estate Market Trends to Watch",
    description: "Key trends shaping high-end property markets in North India including Himachal Pradesh, Punjab, Chandigarh, and Uttarakhand for discerning investors.",
  },
  "art-of-property-staging": {
    title: "The Art of Property Staging for Premium Sales",
    description: "How professional staging transforms luxury properties and drives higher offers. Expert advice from RedStar Huts real estate consultants.",
  },
  "investment-portfolio-diversification": {
    title: "Diversifying Your Real Estate Investment Portfolio",
    description: "Strategic approaches to building a resilient property portfolio across North India markets. Ideal for South India-based investors seeking diversification.",
  },
  "guide-to-buying-first-luxury-home": {
    title: "A Considered Guide to Buying Your First Luxury Home",
    description: "Everything first-time luxury buyers need to know about navigating the premium real estate market in Himachal Pradesh, Punjab, and beyond.",
  },
  "architecture-trends-modern-estates": {
    title: "Architecture Trends Defining Modern Estates",
    description: "From biophilic design to smart integration, exploring architectural movements redefining luxury residential living in North India.",
  },
  "understanding-property-valuation": {
    title: "Understanding Property Valuation in Premium Markets",
    description: "How luxury properties are valued in North India markets. Expert insights from RedStar Huts on pricing strategies and market analysis.",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const meta = blogMeta[slug];
  return {
    title: meta?.title || "Blog",
    description: meta?.description || "Insights and perspectives on luxury real estate from RedStar Huts.",
    openGraph: {
      title: meta?.title || "Blog | RedStar Huts",
      description: meta?.description || "Insights and perspectives on luxury real estate.",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: meta?.title || "Blog | RedStar Huts",
      description: meta?.description || "Insights and perspectives on luxury real estate.",
    },
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
  return <BlogDetailClient slug={slug} />;
}
