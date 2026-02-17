import PropertyDetailClient from "./PropertyDetailClient";

export function generateStaticParams() {
  return [
    { slug: "rsh-bh-001" },
    { slug: "rsh-mb-001" },
    { slug: "rsh-gr-001" },
    { slug: "rsh-mn-001" },
    { slug: "rsh-lt-001" },
    { slug: "rsh-sf-001" },
    { slug: "rsh-as-001" },
    { slug: "rsh-sf-002" },
    { slug: "rsh-ml-001" },
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
