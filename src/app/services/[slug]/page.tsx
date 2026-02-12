import ServiceDetailClient from "./ServiceDetailClient";

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
