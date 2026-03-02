import type { Metadata } from "next";
import ServiceDetailClient from "./ServiceDetailClient";

interface ServiceSEO {
  title: string;
  description: string;
  image: string;
  keywords: string[];
}

const serviceMeta: Record<string, ServiceSEO> = {
  "property-sales": {
    title: "Property Sales & Disposition",
    description: "Premium property sales services in Himachal Pradesh, Punjab, Chandigarh, Haryana & Uttarakhand. Strategic marketing and expert negotiation by RedStar Huts.",
    image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1200&q=80",
    keywords: ["property sales", "sell luxury property", "real estate agent Chandigarh", "sell house Punjab", "property disposition North India"],
  },
  "buyer-advisory": {
    title: "Buyer Advisory & Acquisition",
    description: "Personalized property search and buyer advisory for luxury homes in North India. Trusted guidance for South India investors exploring Himachal & Punjab.",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=80",
    keywords: ["buyer advisory", "buy luxury home India", "property acquisition", "NRI property buying", "buyer agent Chandigarh"],
  },
  "investment-consulting": {
    title: "Investment Consulting",
    description: "Data-driven real estate investment consulting for North India markets. Portfolio optimization and market insights for investors from across India.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80",
    keywords: ["real estate investment", "property investment India", "NRI investment consulting", "portfolio optimization", "real estate ROI"],
  },
  "market-research": {
    title: "Market Research & Valuation",
    description: "Comprehensive property valuation and market research across Himachal Pradesh, Punjab, Chandigarh, Haryana & Uttarakhand by RedStar Huts.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
    keywords: ["property valuation", "market research real estate", "property appraisal India", "real estate analysis Chandigarh", "market trends North India"],
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const meta = serviceMeta[slug];
  const title = meta ? `${meta.title} | RedStar Huts` : "Services | RedStar Huts";
  const description = meta?.description || "Professional real estate services by RedStar Huts.";
  const image = meta?.image || "/og-image.png";
  const url = `https://redstarhuts.com/services/${slug}`;

  return {
    title,
    description,
    keywords: meta
      ? ["RedStar Huts", "real estate services", ...meta.keywords]
      : ["real estate services", "RedStar Huts"],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      siteName: "RedStar Huts",
      images: [{ url: image, width: 1200, height: 630, alt: meta?.title || "RedStar Huts Services" }],
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

function buildServiceJsonLd(slug: string) {
  const meta = serviceMeta[slug];
  if (!meta) return null;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: meta.title,
        description: meta.description,
        url: `https://redstarhuts.com/services/${slug}`,
        image: meta.image,
        provider: {
          "@type": "RealEstateAgent",
          name: "RedStar Huts",
          url: "https://redstarhuts.com",
        },
        areaServed: [
          { "@type": "City", name: "Chandigarh" },
          { "@type": "City", name: "Mohali" },
          { "@type": "City", name: "Zirakpur" },
          { "@type": "State", name: "Punjab" },
          { "@type": "State", name: "Himachal Pradesh" },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://redstarhuts.com" },
          { "@type": "ListItem", position: 2, name: "Services", item: "https://redstarhuts.com/services" },
          { "@type": "ListItem", position: 3, name: meta.title, item: `https://redstarhuts.com/services/${slug}` },
        ],
      },
    ],
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
  const jsonLd = buildServiceJsonLd(slug);

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <ServiceDetailClient slug={slug} />
    </>
  );
}
