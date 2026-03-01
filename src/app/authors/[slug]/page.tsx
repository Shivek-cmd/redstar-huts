import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AuthorDetailClient from "./AuthorDetailClient";
import { authors, getAuthorBySlug, getAllAuthorSlugs } from "@/data/authors";
import { blogPosts } from "@/data/blogs";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllAuthorSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);
  if (!author) return {};

  const postCount = blogPosts.filter((p) => p.authorSlug === slug).length;

  return {
    title: `${author.name} — ${author.role} | RedStar Huts`,
    description: `${author.bio} Read ${author.name}'s ${postCount} articles on luxury real estate, market trends, and investment insights.`,
    keywords: [
      author.name,
      author.role,
      "RedStar Huts author",
      "real estate expert",
      ...author.expertise,
      "luxury real estate insights",
      "property investment",
    ],
    alternates: {
      canonical: `https://redstarhuts.com/authors/${slug}`,
    },
    openGraph: {
      title: `${author.name} — ${author.role} | RedStar Huts`,
      description: author.bio,
      url: `https://redstarhuts.com/authors/${slug}`,
      type: "profile",
      siteName: "RedStar Huts",
      images: [
        {
          url: author.image,
          width: 400,
          height: 400,
          alt: author.name,
        },
      ],
    },
    twitter: {
      card: "summary",
      title: `${author.name} — ${author.role} | RedStar Huts`,
      description: author.bio,
      images: [author.image],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function AuthorPage({ params }: PageProps) {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);
  if (!author) notFound();

  const authorPosts = blogPosts.filter((p) => p.authorSlug === slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: author.name,
      jobTitle: author.role,
      description: author.longBio,
      image: `https://redstarhuts.com${author.image}`,
      url: `https://redstarhuts.com/authors/${slug}`,
      worksFor: {
        "@type": "Organization",
        name: "RedStar Huts",
        url: "https://redstarhuts.com",
      },
      knowsAbout: author.expertise,
    },
    hasPart: authorPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: `https://redstarhuts.com/blog/${post.slug}`,
      datePublished: post.date,
      image: `https://redstarhuts.com${post.image}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AuthorDetailClient slug={slug} />
    </>
  );
}
