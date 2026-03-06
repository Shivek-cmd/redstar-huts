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
  "chandigarh-tricity-metro-project-real-estate-opportunity": {
    title: "Chandigarh Tricity Metro Project: Why Property Near Metro Stations Could Become the Next Big Real Estate Opportunity",
    description: "The proposed metro rail system for Chandigarh, Mohali, and Zirakpur could reshape real estate across the Tricity. Discover which areas may benefit most and why investors are watching closely.",
    image: "/blog/tricity-metro/metro-route-map.jpg",
    category: "Infrastructure",
    date: "2026-03-06",
    keywords: [
      "Chandigarh metro project",
      "Tricity metro real estate",
      "metro station property investment",
      "Mohali metro connectivity",
      "Zirakpur metro station",
      "Chandigarh MRTS",
      "property near metro Chandigarh",
      "Tricity infrastructure 2026",
    ],
  },
  "new-link-road-mohali-2026-impact-property-prices-connectivity": {
    title: "New 7.5 km Link Road in Mohali: A Major Boost for Real Estate and Connectivity",
    description: "Discover how GMADA's proposed 7.5 km link road will reduce Airport Road congestion, improve access to Aerocity and IT City, and drive property price appreciation across Mohali.",
    image: "/blog/mohali-link-road/hero.jpg",
    category: "Infrastructure",
    date: "2026-03-02",
    keywords: [
      "Mohali link road",
      "GMADA road project",
      "Airport Road Mohali",
      "Mohali real estate 2026",
      "Mohali property investment",
      "Aerocity IT City connectivity",
    ],
  },
  "smart-home-ultra-luxury-flats-zirakpur-patiala-highway-ready-to-move": {
    title: "Smart Home Ultra Luxury Flats on Zirakpur-Patiala Highway: Ready to Move, Future-Ready Living",
    description: "Discover a ready-to-move IGBC certified smart home project on Zirakpur-Patiala Highway with voice control, automated lighting, MIVAN construction, rooftop pool, and pet-friendly zones. 3 BHK, 3+1 BHK, and 4+1 BHK configurations.",
    image: "/properties/RSH-ZIR-003/living-room.jpg",
    category: "Property Spotlight",
    date: "2026-02-24",
    keywords: [
      "smart home flat Zirakpur",
      "ready to move luxury flat Zirakpur",
      "Zirakpur Patiala Highway property",
      "voice control flat Zirakpur",
      "IGBC certified flat Punjab",
      "MIVAN construction Zirakpur",
    ],
  },
  "igbc-platinum-luxury-flats-zirakpur-pr7-road-why-invest": {
    title: "IGBC Platinum Luxury Flats on PR7 Road Zirakpur: Why Families and Investors Are Taking Notice",
    description: "Discover why an IGBC Platinum certified high-rise project on PR7 Road, Zirakpur with MIVAN construction, personal lifts, wraparound balconies, and 15+ clubhouse activities is the smartest property choice in the Tri-City region.",
    image: "/properties/RSH-ZIR-002/living-room.jpg",
    category: "Property Spotlight",
    date: "2026-02-24",
    keywords: [
      "IGBC Platinum flat Zirakpur",
      "PR7 Road Zirakpur property",
      "MIVAN construction flat",
      "luxury flat Zirakpur 2027",
      "3 BHK 4+1 BHK Zirakpur",
      "green certified flat Punjab",
    ],
  },
  "4-plus-1-bhk-premium-flat-zirakpur-why-buy-now": {
    title: "4+1 BHK Premium Flat in Zirakpur: Why This Is the Right Time to Buy",
    description: "Discover why a 4+1 BHK premium flat in Zirakpur with clubhouse, swimming pool, Jaquar/Kohler fittings, and earthquake-resistant design is the smart choice for families and investors in the Tri-City region.",
    image: "/properties/RSH-ZIR-001/living-room.jpg",
    category: "Property Spotlight",
    date: "2026-02-24",
    keywords: [
      "4 BHK flat Zirakpur",
      "premium flat Zirakpur",
      "buy flat in Zirakpur",
      "Zirakpur real estate 2026",
      "4+1 BHK Zirakpur Punjab",
      "flat near Chandigarh",
    ],
  },
  "dholera-smart-city-plots-investment-opportunity-2026": {
    title: "Dholera Smart City Plots: 2026 Investment Opportunity Explained",
    description: "Investor guide to Dholera Smart City plots: connectivity, infrastructure, township amenities, and who should consider allocating here in 2026.",
    image: "/properties/RSH-DHO-001/expressway-aerial.jpg",
    category: "Investment",
    date: "2026-02-22",
    keywords: [
      "Dholera plots",
      "Dholera Smart City investment",
      "Dholera SIR Gujarat",
      "DMIC Dholera",
      "residential plots Dholera",
      "buy plot in Dholera",
    ],
  },
  "why-mohali-is-the-next-premium-real-estate-destination": {
    title: "Why Mohali Is the Next Premium Real Estate Destination",
    description: "Discover why Mohali is emerging as North India's most sought-after residential destination with world-class infrastructure and premium developments.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    category: "Local Insights",
    date: "2026-02-17",
    keywords: ["Mohali real estate", "premium property Mohali", "buy flat Mohali", "luxury residence Mohali", "Mohali IT City", "North India real estate"],
  },
  "luxury-living-in-chandigarh-investment-guide": {
    title: "Luxury Living in Chandigarh: A Complete Investment Guide",
    description: "A comprehensive guide to investing in Chandigarh's luxury real estate market — from sector analysis to NRI opportunities and the Tri-City advantage.",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=80",
    category: "Investment",
    date: "2026-02-10",
    keywords: ["Chandigarh real estate", "luxury homes Chandigarh", "invest in Chandigarh", "NRI property Chandigarh", "buy property Chandigarh"],
  },
  "zirakpur-real-estate-emerging-opportunities": {
    title: "Zirakpur Real Estate: Emerging Opportunities for Smart Investors",
    description: "Strategically positioned on the Chandigarh-Ambala highway, Zirakpur offers investors a unique blend of accessibility, affordability, and growth potential.",
    image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1200&q=80",
    category: "Market Insights",
    date: "2026-02-03",
    keywords: ["Zirakpur real estate", "buy flat Zirakpur", "Zirakpur property investment", "affordable luxury Zirakpur", "Chandigarh Tri-City"],
  },
  "rise-of-tri-city-real-estate-mohali-chandigarh-zirakpur": {
    title: "The Rise of Tri-City Real Estate: Mohali, Chandigarh & Zirakpur",
    description: "The Chandigarh Tri-City region has become one of India's most compelling real estate markets. Explore the opportunities across Mohali, Chandigarh, and Zirakpur.",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80",
    category: "Local Insights",
    date: "2026-01-27",
    keywords: ["Tri-City real estate", "Mohali Chandigarh Zirakpur", "North India property market", "NRI investment Punjab", "Chandigarh tricity"],
  },
  "beverly-hills-vs-manhattan-luxury-markets": {
    title: "Beverly Hills vs Manhattan: Comparing America's Most Prestigious Markets",
    description: "An in-depth comparison of two legendary luxury real estate markets — Beverly Hills and Manhattan — for high-net-worth buyers.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
    category: "Market Insights",
    date: "2026-01-20",
    keywords: ["Beverly Hills real estate", "Manhattan luxury property", "luxury market comparison", "high-net-worth real estate"],
  },
  "lake-tahoe-luxury-homes-buyer-guide": {
    title: "Lake Tahoe Luxury Homes: What Buyers Need to Know",
    description: "A comprehensive buyer guide to Lake Tahoe's luxury real estate market — from lakefront premiums to year-round investment value.",
    image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&q=80",
    category: "Buying",
    date: "2026-01-13",
    keywords: ["Lake Tahoe luxury homes", "lakefront property", "Lake Tahoe real estate", "mountain luxury homes", "buy home Lake Tahoe"],
  },
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
  const title = meta ? meta.title : "Blog";
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
    { slug: "chandigarh-tricity-metro-project-real-estate-opportunity" },
    { slug: "new-link-road-mohali-2026-impact-property-prices-connectivity" },
    { slug: "smart-home-ultra-luxury-flats-zirakpur-patiala-highway-ready-to-move" },
    { slug: "igbc-platinum-luxury-flats-zirakpur-pr7-road-why-invest" },
    { slug: "4-plus-1-bhk-premium-flat-zirakpur-why-buy-now" },
    { slug: "dholera-smart-city-plots-investment-opportunity-2026" },
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
