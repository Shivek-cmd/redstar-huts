import type { Metadata } from "next";
import PropertyDetailClient from "./PropertyDetailClient";

import { PropertySEO, propertyMeta, getLocationKeywords } from "@/data/propertyMeta";

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
    { slug: "3-bhk-premium-apartment-for-sale-in-chandigarh-2800-sq-ft" },
    { slug: "4-bhk-villa-for-sale-in-mohali-punjab-3200-sq-ft" },
    { slug: "3-bhk-penthouse-for-sale-in-mohali-punjab-2400-sq-ft" },
    { slug: "4-bhk-residential-for-sale-in-chandigarh-3800-sq-ft" },
    { slug: "5-bhk-estate-for-sale-in-sector-9-chandigarh-4500-sq-ft" },
    { slug: "3-bhk-residential-for-sale-in-zirakpur-punjab-1800-sq-ft" },
    { slug: "3-bhk-luxury-floors-for-sale-in-zirakpur-punjab-1650-sq-ft" },
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
