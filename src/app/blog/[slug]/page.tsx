import type { Metadata } from "next";
import BlogDetailClient from "./BlogDetailClient";
import { blogPosts, blogAuthors, getBlogBySlug } from "@/data/blogs";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) {
    return { title: "Article Not Found | RedStar Huts" };
  }
  const author = blogAuthors[post.author];
  return {
    title: `${post.title} | RedStar Huts Blog`,
    description: post.excerpt,
    authors: [{ name: author.name }],
    alternates: {
      canonical: `https://www.redstarhuts.com/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://www.redstarhuts.com/blog/${slug}`,
      type: "article",
      publishedTime: new Date(post.date).toISOString(),
      ...(post.updatedDate
        ? { modifiedTime: new Date(post.updatedDate).toISOString() }
        : {}),
      authors: [author.name],
      images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
    },
  };
}

function ArticleSchema({ slug }: { slug: string }) {
  const post = getBlogBySlug(slug);
  if (!post) return null;
  const author = blogAuthors[post.author];
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: new Date(post.date).toISOString(),
    ...(post.updatedDate
      ? { dateModified: new Date(post.updatedDate).toISOString() }
      : {}),
    author: {
      "@type": "Person",
      name: author.name,
      jobTitle: author.role,
    },
    publisher: {
      "@type": "Organization",
      name: "RedStar Huts",
      url: "https://www.redstarhuts.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.redstarhuts.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.redstarhuts.com/blog/${slug}`,
    },
    articleSection: post.category,
    keywords: post.tags.join(", "),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <>
      <ArticleSchema slug={slug} />
      <BlogDetailClient slug={slug} />
    </>
  );
}
