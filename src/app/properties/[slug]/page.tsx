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
  "meridian-residence": {
    title: "The Meridian Residence \u2014 Beverly Hills",
    description: "Explore The Meridian Residence, a luxury 5-bed estate in Beverly Hills with 6,200 sq ft of premium living, panoramic views, and smart home automation. Enquire with RedStar Huts.",
    price: "$4,850,000",
    location: "Beverly Hills, CA",
    beds: 5,
    baths: 4,
    sqft: "6,200",
    type: "Residential",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
  },
  "harborview-estate": {
    title: "Harborview Estate \u2014 Miami Beach",
    description: "Discover Harborview Estate in Miami Beach \u2014 4-bed waterfront luxury living with private marina, resort-style pool, and panoramic water views. Listed by RedStar Huts.",
    price: "$3,200,000",
    location: "Miami Beach, FL",
    beds: 4,
    baths: 3,
    sqft: "4,800",
    type: "Residential",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
  },
  "crestwood-manor": {
    title: "Crestwood Manor \u2014 Greenwich Estate",
    description: "Crestwood Manor offers 8,500 sq ft of refined living on 3+ acres in Greenwich. 6 bedrooms, tennis court, heated pool, and guest cottage. RedStar Huts.",
    price: "$7,100,000",
    location: "Greenwich, CT",
    beds: 6,
    baths: 5,
    sqft: "8,500",
    type: "Estate",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
  },
  "pinnacle-penthouse": {
    title: "The Pinnacle Penthouse \u2014 Manhattan Skyline",
    description: "A prestigious penthouse in Manhattan with 360-degree skyline views, private elevator, and 4,200 sq ft of ultra-modern living. Enquire via RedStar Huts.",
    price: "$12,500,000",
    location: "Manhattan, NY",
    beds: 3,
    baths: 3,
    sqft: "4,200",
    type: "Penthouse",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
  },
  "lakeshore-villa": {
    title: "Lakeshore Villa \u2014 Lake Tahoe Waterfront",
    description: "Luxury lakefront living at Lakeshore Villa, Lake Tahoe. 5 bedrooms, private beach, dock, and ski trail access across 5,800 sq ft. Presented by RedStar Huts.",
    price: "$5,600,000",
    location: "Lake Tahoe, NV",
    beds: 5,
    baths: 4,
    sqft: "5,800",
    type: "Residential",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
  },
  "the-wellington": {
    title: "The Wellington \u2014 San Francisco",
    description: "The Wellington in San Francisco combines classic architecture with modern luxury. 3-bed corner unit with Golden Gate Bridge views. RedStar Huts.",
    price: "$2,950,000",
    location: "San Francisco, CA",
    beds: 3,
    baths: 2,
    sqft: "3,100",
    type: "Condominium",
    image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1200&q=80",
  },
  "aspen-ridge-retreat": {
    title: "Aspen Ridge Retreat \u2014 Mountain Estate",
    description: "A 9,200 sq ft mountain retreat in Aspen with 7 bedrooms, infinity pool, spa suite, and ski-in/ski-out access. Listed exclusively with RedStar Huts.",
    price: "$8,900,000",
    location: "Aspen, CO",
    beds: 7,
    baths: 6,
    sqft: "9,200",
    type: "Estate",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
  },
  "pacific-heights-modern": {
    title: "Pacific Heights Modern \u2014 San Francisco",
    description: "Modern architectural masterpiece in Pacific Heights, San Francisco. 4-bed, 5,100 sq ft with bay views and premium finishes. RedStar Huts.",
    price: "$6,250,000",
    location: "San Francisco, CA",
    beds: 4,
    baths: 4,
    sqft: "5,100",
    type: "Residential",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=80",
  },
  "strand-collection": {
    title: "The Strand Collection \u2014 Malibu Beachfront",
    description: "Beachfront luxury at The Strand Collection in Malibu. 5-bed, 7,400 sq ft with direct ocean access and resort-level amenities. RedStar Huts.",
    price: "$15,800,000",
    location: "Malibu, CA",
    beds: 5,
    baths: 5,
    sqft: "7,400",
    type: "Beachfront",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&q=80",
  },
  "luxury-sample-property": {
    title: "Luxury Sample Residence \u2014 Chandigarh",
    description: "Premium 3-BHK apartment in Chandigarh with contemporary design, covered parking, and luxury finishes. Schedule a site visit with RedStar Huts.",
    price: "On Request",
    location: "Chandigarh, India",
    beds: 3,
    baths: 3,
    sqft: "2,800",
    type: "Premium Apartment",
    image: "/properties/sample/living-room.jpg",
  },
  "royal-greens-villa": {
    title: "The Royal Greens Villa \u2014 Mohali, Punjab | Luxury Villa for Sale",
    description: "Buy luxury 4-BHK villa in Mohali, Punjab at \u20B92.8 Cr. Gated community with Italian marble, private garden, and Shivalik views. Contact RedStar Huts for site visit.",
    price: "\u20B92.8 Cr",
    location: "Mohali, Punjab",
    beds: 4,
    baths: 3,
    sqft: "3,200",
    type: "Villa",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
  },
  "mohali-heights-penthouse": {
    title: "Mohali Heights Penthouse \u2014 Mohali, Punjab | Premium Penthouse for Sale",
    description: "Luxury 3-BHK penthouse in Mohali at \u20B91.6 Cr with panoramic Shivalik views, private rooftop terrace, and smart home automation. Enquire with RedStar Huts.",
    price: "\u20B91.6 Cr",
    location: "Mohali, Punjab",
    beds: 3,
    baths: 3,
    sqft: "2,400",
    type: "Penthouse",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
  },
  "elante-residences": {
    title: "Elante Residences \u2014 Chandigarh | Luxury Apartments Near Elante Mall",
    description: "Premium 4-BHK luxury apartment in Chandigarh at \u20B93.5 Cr. Near Elante Mall with floor-to-ceiling windows and Italian marble. Contact RedStar Huts today.",
    price: "\u20B93.5 Cr",
    location: "Chandigarh",
    beds: 4,
    baths: 4,
    sqft: "3,800",
    type: "Residential",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
  },
  "sector-9-heritage-home": {
    title: "Sector 9 Heritage Home \u2014 Chandigarh | 5-BHK Estate in Prime Location",
    description: "Buy a distinguished 5-BHK heritage home in Chandigarh Sector 9 at \u20B94.2 Cr. Grand architecture, landscaped gardens, and covered pavilion. RedStar Huts.",
    price: "\u20B94.2 Cr",
    location: "Chandigarh",
    beds: 5,
    baths: 4,
    sqft: "4,500",
    type: "Estate",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
  },
  "ambience-boulevard": {
    title: "Ambience Boulevard \u2014 Zirakpur, Punjab | Modern 3-BHK Apartment for Sale",
    description: "Modern 3-BHK luxury apartment in Zirakpur at \u20B91.2 Cr. Prime location between Chandigarh and Mohali with premium finishes. Contact RedStar Huts.",
    price: "\u20B91.2 Cr",
    location: "Zirakpur, Punjab",
    beds: 3,
    baths: 2,
    sqft: "1,800",
    type: "Residential",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&q=80",
  },
  "vr-punjab-luxury-floors": {
    title: "VR Punjab Luxury Floors \u2014 Zirakpur | Affordable Luxury Near VR Punjab Mall",
    description: "Buy 3-BHK independent luxury floors in Zirakpur at \u20B985 Lac. Near VR Punjab Mall and Chandigarh Airport. Premium interiors by RedStar Huts.",
    price: "\u20B985 Lac",
    location: "Zirakpur, Punjab",
    beds: 3,
    baths: 2,
    sqft: "1,650",
    type: "Residential",
    image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1200&q=80",
  },
};

function getLocationKeywords(location: string): string[] {
  const kw: string[] = [];
  if (location.includes("Punjab")) kw.push("Punjab real estate", "North India property", "NRI investment Punjab");
  if (location.includes("Chandigarh")) kw.push("Chandigarh real estate", "luxury homes Chandigarh", "buy property Chandigarh");
  if (location.includes("Mohali")) kw.push("Mohali real estate", "luxury villa Mohali", "property investment Mohali");
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
    { slug: "royal-greens-villa" },
    { slug: "mohali-heights-penthouse" },
    { slug: "elante-residences" },
    { slug: "sector-9-heritage-home" },
    { slug: "ambience-boulevard" },
    { slug: "vr-punjab-luxury-floors" },
  ];
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
