import type { Metadata } from "next";
import ServiceDetailClient from "./ServiceDetailClient";

const serviceMeta: Record<string, { title: string; description: string }> = {
  "property-sales": {
    title: "Property Sales & Disposition",
    description: "Premium property sales services in Himachal Pradesh, Punjab, Chandigarh, Haryana & Uttarakhand. Strategic marketing and expert negotiation by RedStar Huts.",
  },
  "buyer-advisory": {
    title: "Buyer Advisory & Acquisition",
    description: "Personalized property search and buyer advisory for luxury homes in North India. Trusted guidance for South India investors exploring Himachal & Punjab.",
  },
  "investment-consulting": {
    title: "Investment Consulting",
    description: "Data-driven real estate investment consulting for North India markets. Portfolio optimization and market insights for investors from across India.",
  },
  "market-research": {
    title: "Market Research & Valuation",
    description: "Comprehensive property valuation and market research across Himachal Pradesh, Punjab, Chandigarh, Haryana & Uttarakhand by RedStar Huts.",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const meta = serviceMeta[slug];
  return {
    title: meta?.title || "Services",
    description: meta?.description || "Professional real estate services by RedStar Huts.",
    openGraph: {
      title: meta?.title ? `${meta.title} | RedStar Huts` : "Services | RedStar Huts",
      description: meta?.description || "Professional real estate services.",
    },
    twitter: {
      card: "summary_large_image",
      title: meta?.title ? `${meta.title} | RedStar Huts` : "Services | RedStar Huts",
      description: meta?.description || "Professional real estate services.",
    },
  };
}

export function generateStaticParams() {
  return [
    { slug: "property-sales" },
    { slug: "buyer-advisory" },
    { slug: "investment-consulting" },
    { slug: "market-research" },
  ];
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ServiceDetailClient slug={slug} />;
}
