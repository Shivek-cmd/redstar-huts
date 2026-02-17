import BlogDetailClient from "./BlogDetailClient";

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
  return <BlogDetailClient slug={slug} />;
}
