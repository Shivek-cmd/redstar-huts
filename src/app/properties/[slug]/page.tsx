import type { Metadata } from "next";
import PropertyDetailClient from "./PropertyDetailClient";
import { propertyMeta, allProperties } from "@/data/properties";

function getLocationKeywords(location: string): string[] {
  const kw: string[] = [];
  if (location.includes("Punjab")) kw.push("Punjab real estate", "North India property", "NRI investment Punjab");
  if (location.includes("Chandigarh")) kw.push("Chandigarh real estate", "luxury homes Chandigarh", "buy property Chandigarh");
  if (location.includes("Mohali")) kw.push("Mohali real estate", "luxury residence Mohali", "property investment Mohali", "3 BHK Mohali", "premium flat Mohali", "flat for sale Mohali");
  if (location.includes("Zirakpur")) kw.push("Zirakpur real estate", "buy flat Zirakpur", "luxury floors Zirakpur");
  return kw;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const meta = propertyMeta[slug];
  const title = meta?.title || "Property";
  const description = meta?.description || "Explore premium properties listed by RedStar Huts in Mohali, Chandigarh, and across North India.";
  const image = meta?.image || "/og-image.png";
  const url = `https://redstarhuts.com/properties/${slug}`;

  return {
    title,
    description,
    keywords: meta
      ? [
          ...meta.keywords,
          ...getLocationKeywords(meta.location),
        ]
      : ["luxury property", "real estate", "RedStar Huts", "Mohali", "Punjab"],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
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

function buildPropertyJsonLd(slug: string) {
  const meta = propertyMeta[slug];
  if (!meta) return null;

  const priceStr = meta.price;
  let priceValue = "";
  const priceCurrency = "INR";

  if (priceStr.includes("\u20B9") || priceStr.includes("\u20b9")) {
    if (priceStr.includes("Cr")) {
      const num = parseFloat(priceStr.replace(/[^\d.]/g, ""));
      priceValue = String(num * 10000000);
    } else if (priceStr.includes("Lac") || priceStr.includes("Lakh")) {
      const num = parseFloat(priceStr.replace(/[^\d.]/g, ""));
      priceValue = String(num * 100000);
    }
  }

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
            addressCountry: "IN",
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
            name: meta.title,
            item: `https://redstarhuts.com/properties/${slug}`,
          },
        ],
      },
    ],
  };
}

export function generateStaticParams() {
  return allProperties.map((p) => ({ slug: p.slug }));
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
