import type { Metadata } from "next";
import PropertyDetailClient from "./PropertyDetailClient";

const propertyMeta: Record<string, { title: string; description: string }> = {
  "meridian-residence": {
    title: "The Meridian Residence — Beverly Hills",
    description: "Explore The Meridian Residence, a luxury 5-bed estate in Beverly Hills. Premium interiors and panoramic views. Enquire with RedStar Huts.",
  },
  "harborview-estate": {
    title: "Harborview Estate — Miami Beach",
    description: "Discover Harborview Estate in Miami Beach. 4-bed waterfront luxury living with private marina access. Listed by RedStar Huts.",
  },
  "crestwood-manor": {
    title: "Crestwood Manor — Greenwich",
    description: "Crestwood Manor offers 8,500 sq ft of refined living in Greenwich. 6 bedrooms, chef's kitchen, and private grounds. RedStar Huts.",
  },
  "pinnacle-penthouse": {
    title: "The Pinnacle Penthouse — Manhattan",
    description: "A prestigious penthouse in Manhattan with 360-degree skyline views. Premium finishes throughout. Enquire via RedStar Huts.",
  },
  "lakeshore-villa": {
    title: "Lakeshore Villa — Lake Tahoe",
    description: "Luxury lakefront living at Lakeshore Villa, Lake Tahoe. 5 bedrooms with direct water access. Presented by RedStar Huts.",
  },
  "the-wellington": {
    title: "The Wellington — San Francisco",
    description: "The Wellington in San Francisco combines classic architecture with modern luxury. 4 bedrooms in a prime location. RedStar Huts.",
  },
  "aspen-ridge-retreat": {
    title: "Aspen Ridge Retreat — Aspen",
    description: "A 9,200 sq ft mountain retreat in Aspen with 7 bedrooms and ski-in/ski-out access. Listed exclusively with RedStar Huts.",
  },
  "pacific-heights-modern": {
    title: "Pacific Heights Modern — San Francisco",
    description: "Modern architectural masterpiece in Pacific Heights, San Francisco. Clean lines, bay views, and premium finishes. RedStar Huts.",
  },
  "strand-collection": {
    title: "The Strand Collection — Malibu",
    description: "Beachfront luxury at The Strand Collection in Malibu. Direct ocean access, private beach, and resort-level amenities. RedStar Huts.",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const meta = propertyMeta[slug];
  return {
    title: meta?.title || "Property",
    description: meta?.description || "Explore premium properties listed by RedStar Huts.",
    openGraph: {
      title: meta?.title ? `${meta.title} | RedStar Huts` : "Property | RedStar Huts",
      description: meta?.description || "Explore premium properties.",
    },
    twitter: {
      card: "summary_large_image",
      title: meta?.title ? `${meta.title} | RedStar Huts` : "Property | RedStar Huts",
      description: meta?.description || "Explore premium properties.",
    },
  };
}

export function generateStaticParams() {
  return [
    { slug: "meridian-residence" },
    { slug: "harborview-estate" },
    { slug: "crestwood-manor" },
    { slug: "pinnacle-penthouse" },
    { slug: "lakeshore-villa" },
    { slug: "the-wellington" },
    { slug: "aspen-ridge-retreat" },
    { slug: "pacific-heights-modern" },
    { slug: "strand-collection" },
    { slug: "luxury-sample-property" },
  ];
}

export default async function PropertyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <PropertyDetailClient slug={slug} />;
}
