import PropertyDetailClient from "./PropertyDetailClient";

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
