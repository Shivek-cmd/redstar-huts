import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs font-body tracking-wide">
      <ol className="flex items-center flex-wrap gap-1.5">
        <li>
          <Link href="/" className="text-background-secondary/70 hover:text-background-secondary transition-colors duration-300">
            Home
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-1.5">
            <span className="text-background-secondary/40">/</span>
            {item.href && i < items.length - 1 ? (
              <Link href={item.href} className="text-background-secondary/70 hover:text-background-secondary transition-colors duration-300">
                {item.label}
              </Link>
            ) : (
              <span className="text-background-secondary">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function BreadcrumbSchema({ items }: BreadcrumbsProps) {
  const BASE_URL = "https://redstarhuts.com";
  const listItems = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: BASE_URL,
    },
    ...items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 2,
      name: item.label,
      ...(item.href ? { item: `${BASE_URL}${item.href}` } : {}),
    })),
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: listItems,
        }),
      }}
    />
  );
}
