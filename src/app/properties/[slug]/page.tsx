import type { Metadata } from "next";
import PropertyDetailClient from "./PropertyDetailClient";

interface PropertySEO {
  title: string;
  description: string;
  price: string;
  location: string;
  beds: number;
  baths: number;
  sqft: string;
  type: string;
  image: string;
}

const propertyMeta: Record<string, PropertySEO> = {
  "5-bedroom-residential-for-sale-in-beverly-hills-ca-6200-sq-ft": {
    title: "The Meridian Residence \u2014 Beverly Hills, CA",
    description: "Luxury 5-bed residence in Beverly Hills with infinity pool, home theater, and smart home automation. $4.85M. Contact RedStar Huts.",
    price: "$4,850,000",
    location: "Beverly Hills, CA",
    beds: 5,
    baths: 4,
    sqft: "6,200",
    type: "Residential",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
  },
  "4-bedroom-estate-for-sale-in-miami-beach-fl-4800-sq-ft": {
    title: "Harborview Estate \u2014 Miami Beach, FL",
    description: "Waterfront 4-bed estate in Miami Beach with private dock and resort-style pool. $3.2M. Contact RedStar Huts.",
    price: "$3,200,000",
    location: "Miami Beach, FL",
    beds: 4,
    baths: 3,
    sqft: "4,800",
    type: "Residential",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
  },
  "6-bedroom-estate-for-sale-in-greenwich-ct-8500-sq-ft": {
    title: "Crestwood Manor \u2014 Greenwich, CT",
    description: "Distinguished 6-bed estate on 3+ acres in Greenwich with tennis court, heated pool, and guest cottage. $7.1M. Contact RedStar Huts.",
    price: "$7,100,000",
    location: "Greenwich, CT",
    beds: 6,
    baths: 5,
    sqft: "8,500",
    type: "Estate",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
  },
  "3-bedroom-penthouse-for-sale-in-manhattan-ny-4200-sq-ft": {
    title: "The Pinnacle Penthouse \u2014 Manhattan, NY",
    description: "360-degree skyline views from this 3-bed Manhattan penthouse with private elevator entry. $12.5M. Contact RedStar Huts.",
    price: "$12,500,000",
    location: "Manhattan, NY",
    beds: 3,
    baths: 3,
    sqft: "4,200",
    type: "Penthouse",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
  },
  "5-bedroom-villa-for-sale-in-lake-tahoe-nv-5800-sq-ft": {
    title: "Lakeshore Villa \u2014 Lake Tahoe, NV",
    description: "Stunning 5-bed lakefront villa with private beach, dock, and ski access. $5.6M. Contact RedStar Huts.",
    price: "$5,600,000",
    location: "Lake Tahoe, NV",
    beds: 5,
    baths: 4,
    sqft: "5,800",
    type: "Residential",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
  },
  "3-bedroom-condominium-for-sale-in-san-francisco-ca-3100-sq-ft": {
    title: "The Wellington \u2014 San Francisco, CA",
    description: "Sophisticated 3-bed condo in San Francisco with Golden Gate views and private terrace. $2.95M. Contact RedStar Huts.",
    price: "$2,950,000",
    location: "San Francisco, CA",
    beds: 3,
    baths: 2,
    sqft: "3,100",
    type: "Condominium",
    image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1200&q=80",
  },
  "7-bedroom-estate-for-sale-in-aspen-co-9200-sq-ft": {
    title: "Aspen Ridge Retreat \u2014 Aspen, CO",
    description: "Extraordinary 7-bed mountain estate in Aspen with infinity pool, spa suite, and home theater. $8.9M. Contact RedStar Huts.",
    price: "$8,900,000",
    location: "Aspen, CO",
    beds: 7,
    baths: 6,
    sqft: "9,200",
    type: "Estate",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
  },
  "4-bedroom-residential-for-sale-in-san-francisco-ca-5100-sq-ft": {
    title: "Pacific Heights Modern \u2014 San Francisco, CA",
    description: "Striking 4-bed contemporary residence in Pacific Heights with rooftop terrace and bay views. $6.25M. Contact RedStar Huts.",
    price: "$6,250,000",
    location: "San Francisco, CA",
    beds: 4,
    baths: 4,
    sqft: "5,100",
    type: "Residential",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=80",
  },
  "5-bedroom-beachfront-for-sale-in-malibu-ca-7400-sq-ft": {
    title: "The Strand Collection \u2014 Malibu, CA",
    description: "Ultimate 5-bed beachfront property on Carbon Beach with retractable glass walls and infinity pool. $15.8M. Contact RedStar Huts.",
    price: "$15,800,000",
    location: "Malibu, CA",
    beds: 5,
    baths: 5,
    sqft: "7,400",
    type: "Beachfront",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&q=80",
  },
  "3-plus-1-bhk-premium-residence-for-sale-in-mohali-punjab-2901-sq-ft": {
    title: "The Grand Mohali \u2014 3+1 BHK Premium Residence | Mohali, Punjab",
    description: "Ultra-premium 3+1 BHK residence in Mohali, Punjab. 2,901 sq ft with H\u00E4fele kitchen, 1 lakh sq ft clubhouse, basement parking. Near Airport, ISBT, Elante Mall. Contact RedStar Huts for site visit.",
    price: "On Request",
    location: "Mohali, Punjab",
    beds: 4,
    baths: 4,
    sqft: "2,901",
    type: "Premium Residence",
    image: "/properties/grand-mohali/living-room.jpg",
  },
};

function getLocationKeywords(location: string): string[] {
  const kw: string[] = [];
  if (location.includes("Punjab")) kw.push("Punjab real estate", "North India property", "NRI investment Punjab");
  if (location.includes("Chandigarh")) kw.push("Chandigarh real estate", "luxury homes Chandigarh", "buy property Chandigarh");
  if (location.includes("Mohali")) kw.push("Mohali real estate", "luxury residence Mohali", "property investment Mohali", "3 BHK Mohali", "premium flat Mohali");
  if (location.includes("Zirakpur")) kw.push("Zirakpur real estate", "buy flat Zirakpur", "luxury floors Zirakpur");
  return kw;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const meta = propertyMeta[slug];
  const title = meta?.title || "Property";
  const description = meta?.description || "Explore premium properties listed by RedStar Huts across North India and international markets.";
  const image = meta?.image || "/og-image.png";
  const url = `https://redstarhuts.com/properties/${slug}`;

  return {
    title,
    description,
    keywords: meta
      ? [
          meta.type,
          `${meta.type} for sale`,
          `luxury property ${meta.location}`,
          `buy ${meta.type.toLowerCase()} ${meta.location}`,
          `${meta.beds} BHK ${meta.location}`,
          "RedStar Huts",
          "luxury real estate",
          "property for sale",
          meta.location,
          ...getLocationKeywords(meta.location),
        ]
      : ["luxury property", "real estate", "RedStar Huts"],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | RedStar Huts`,
      description,
      url,
      type: "website",
      siteName: "RedStar Huts",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | RedStar Huts`,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

function buildPropertyJsonLd(slug: string) {
  const meta = propertyMeta[slug];
  if (!meta) return null;

  const priceStr = meta.price;
  let priceValue = "";
  let priceCurrency = "USD";

  if (priceStr.includes("\u20B9")) {
    priceCurrency = "INR";
    if (priceStr.includes("Cr")) {
      const num = parseFloat(priceStr.replace(/[^\d.]/g, ""));
      priceValue = String(num * 10000000);
    } else if (priceStr.includes("Lac")) {
      const num = parseFloat(priceStr.replace(/[^\d.]/g, ""));
      priceValue = String(num * 100000);
    }
  } else if (priceStr.includes("$")) {
    priceValue = priceStr.replace(/[$,]/g, "");
  }

  const isIndia =
    meta.location.includes("India") ||
    meta.location.includes("Punjab") ||
    meta.location.includes("Chandigarh") ||
    meta.location.includes("Zirakpur") ||
    meta.location.includes("Mohali");

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "RealEstateListing",
        name: meta.title,
        description: meta.description,
        url: `https://redstarhuts.com/properties/${slug}`,
        image: meta.image,
        datePosted: "2025-01-01",
        ...(priceValue && {
          offers: {
            "@type": "Offer",
            price: priceValue,
            priceCurrency,
            availability: "https://schema.org/InStock",
            seller: {
              "@type": "RealEstateAgent",
              name: "RedStar Huts",
              url: "https://redstarhuts.com",
            },
          },
        }),
        about: {
          "@type": "Residence",
          name: meta.title,
          description: meta.description,
          numberOfBedrooms: meta.beds,
          numberOfBathroomsTotal: meta.baths,
          floorSize: {
            "@type": "QuantitativeValue",
            value: parseInt(meta.sqft.replace(/,/g, "")),
            unitCode: "FTK",
          },
          address: {
            "@type": "PostalAddress",
            addressLocality: meta.location.split(",")[0].trim(),
            addressRegion: meta.location.split(",")[1]?.trim() || "",
            addressCountry: isIndia ? "IN" : "US",
          },
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://redstarhuts.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Properties",
            item: "https://redstarhuts.com/properties",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: meta.title.split(" \u2014 ")[0],
            item: `https://redstarhuts.com/properties/${slug}`,
          },
        ],
      },
    ],
  };
}

export function generateStaticParams() {
  return [
    { slug: "5-bedroom-residential-for-sale-in-beverly-hills-ca-6200-sq-ft" },
    { slug: "4-bedroom-estate-for-sale-in-miami-beach-fl-4800-sq-ft" },
    { slug: "6-bedroom-estate-for-sale-in-greenwich-ct-8500-sq-ft" },
    { slug: "3-bedroom-penthouse-for-sale-in-manhattan-ny-4200-sq-ft" },
    { slug: "5-bedroom-villa-for-sale-in-lake-tahoe-nv-5800-sq-ft" },
    { slug: "3-bedroom-condominium-for-sale-in-san-francisco-ca-3100-sq-ft" },
    { slug: "7-bedroom-estate-for-sale-in-aspen-co-9200-sq-ft" },
    { slug: "4-bedroom-residential-for-sale-in-san-francisco-ca-5100-sq-ft" },
    { slug: "5-bedroom-beachfront-for-sale-in-malibu-ca-7400-sq-ft" },
    { slug: "3-plus-1-bhk-premium-residence-for-sale-in-mohali-punjab-2901-sq-ft" },
  ];
}

export default async function PropertyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const jsonLd = buildPropertyJsonLd(slug);

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <PropertyDetailClient slug={slug} />
    </>
  );
}
