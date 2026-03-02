import BlogDetailClient from "./BlogDetailClient";

export function generateStaticParams() {
  return [
    { slug: "new-link-road-mohali-2026-impact-property-prices-connectivity" },
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
