"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";
import {
  getBlogBySlug,
  getRelatedBlogs,
  blogAuthors,
  generateTableOfContents,
} from "@/data/blogs";
import type { BlogContentBlock } from "@/data/blogs";

function ShareButtons({ url, title }: { url: string; title: string }) {
  const encoded = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  return (
    <div className="flex items-center gap-3">
      <span className="text-xs font-body tracking-widest uppercase text-muted">
        Share
      </span>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encoded}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted hover:text-foreground hover:border-foreground transition-colors duration-300"
        aria-label="Share on Facebook"
      >
        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      </a>
      <a
        href={`https://www.instagram.com/`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted hover:text-foreground hover:border-foreground transition-colors duration-300"
        aria-label="Share on Instagram"
      >
        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      </a>
      <a
        href={`https://twitter.com/intent/tweet?url=${encoded}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted hover:text-foreground hover:border-foreground transition-colors duration-300"
        aria-label="Share on X"
      >
        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </a>
      <button
        onClick={() => {
          navigator.clipboard.writeText(url);
        }}
        className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted hover:text-foreground hover:border-foreground transition-colors duration-300"
        aria-label="Copy link"
      >
        <svg
          className="w-3.5 h-3.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path d="M13.828 10.172a4 4 0 0 0-5.656 0l-4 4a4 4 0 1 0 5.656 5.656l1.102-1.101m-.758-4.899a4 4 0 0 0 5.656 0l4-4a4 4 0 0 0-5.656-5.656l-1.1 1.1" />
        </svg>
      </button>
    </div>
  );
}

function ContentRenderer({ block }: { block: BlogContentBlock }) {
  if (block.type === "paragraph") {
    return (
      <p className="text-base md:text-lg text-body leading-relaxed mb-8">
        {block.value}
      </p>
    );
  }

  if (block.type === "heading") {
    const id = block.value
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
    if (block.level === "h3") {
      return (
        <h3
          id={id}
          className="font-heading text-xl md:text-2xl text-foreground mt-10 mb-5 scroll-mt-24"
        >
          {block.value}
        </h3>
      );
    }
    return (
      <h2
        id={id}
        className="font-heading text-2xl md:text-3xl text-foreground mt-14 mb-6 scroll-mt-24"
      >
        {block.value}
      </h2>
    );
  }

  if (block.type === "image") {
    return (
      <div className="relative aspect-[16/9] overflow-hidden my-10">
        <Image
          src={block.value}
          alt={block.alt || ""}
          fill
          className="object-cover"
        />
      </div>
    );
  }

  if (block.type === "list") {
    return (
      <div className="my-8">
        {block.value && (
          <p className="text-base text-body mb-3 font-medium">{block.value}</p>
        )}
        <ul className="space-y-2.5 pl-5">
          {block.items?.map((item, i) => (
            <li
              key={i}
              className="text-base text-body leading-relaxed relative before:content-[''] before:absolute before:left-[-18px] before:top-[10px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-foreground/30"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (block.type === "callout") {
    const styles = {
      tip: "border-l-green-600/40 bg-green-50/30",
      warning: "border-l-amber-600/40 bg-amber-50/30",
      info: "border-l-blue-600/40 bg-blue-50/30",
    };
    const labels = { tip: "Tip", warning: "Note", info: "Insight" };
    const ct = block.calloutType || "info";
    return (
      <div className={`border-l-4 px-6 py-5 my-8 ${styles[ct]}`}>
        <p className="text-xs font-body font-semibold tracking-widest uppercase text-foreground/60 mb-2">
          {labels[ct]}
        </p>
        <p className="text-sm text-body leading-relaxed">{block.value}</p>
      </div>
    );
  }

  if (block.type === "property-link" && block.propertySlug) {
    return (
      <div className="my-8 border border-border bg-background-depth/50 p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <p className="text-sm text-body">{block.value}</p>
          <p className="text-base font-heading text-foreground mt-1">
            {block.propertyTitle}
          </p>
        </div>
        <Link
          href={`/properties/${block.propertySlug}`}
          className="shrink-0 text-xs font-body tracking-widest uppercase px-5 py-2.5 border border-foreground text-foreground hover:bg-foreground hover:text-background-secondary transition-colors duration-300"
        >
          View Property
        </Link>
      </div>
    );
  }

  return null;
}

export default function BlogDetailClient({ slug }: { slug: string }) {
  const post = getBlogBySlug(slug);
  const [activeSection, setActiveSection] = useState("");
  const [pageUrl, setPageUrl] = useState("");

  useEffect(() => {
    setPageUrl(window.location.href);
  }, []);

  useEffect(() => {
    if (!post) return;
    const toc = generateTableOfContents(post.content);
    const ids = toc.map((t) => t.id);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-100px 0px -60% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [post]);

  if (!post) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="font-heading text-4xl text-foreground">
            Article Not Found
          </h1>
          <p className="mt-4 text-sm text-body">
            The article you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>
          <Link
            href="/blog"
            className="mt-8 inline-block text-sm font-body tracking-wide px-8 py-3.5 border border-foreground text-foreground hover:bg-foreground hover:text-background-secondary transition-colors duration-300"
          >
            Back to Journal
          </Link>
        </div>
      </section>
    );
  }

  const author = blogAuthors[post.author];
  const toc = generateTableOfContents(post.content);
  const related = getRelatedBlogs(slug, 3);
  const introBlock = post.content.find((b) => b.type === "paragraph");
  const keyTakeaways = post.content
    .filter((b) => b.type === "heading")
    .slice(0, 4)
    .map((b) => b.value);

  return (
    <>
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <SectionReveal>
            <nav className="flex items-center gap-2 text-xs text-background-secondary/50 mb-8">
              <Link
                href="/"
                className="hover:text-background-secondary transition-colors"
              >
                Home
              </Link>
              <span>/</span>
              <Link
                href="/blog"
                className="hover:text-background-secondary transition-colors"
              >
                Blog
              </Link>
              <span>/</span>
              <span className="text-background-secondary/80 truncate max-w-[200px]">
                {post.title}
              </span>
            </nav>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs font-body tracking-widest uppercase bg-background-secondary/15 px-3 py-1.5 text-background-secondary">
                {post.category}
              </span>
            </div>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-background-secondary max-w-4xl leading-tight drop-shadow-lg">
              {post.title}
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-background-secondary/20 overflow-hidden relative">
                  <Image
                    src={author.image}
                    alt={author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <Link
                    href="/about"
                    className="text-sm text-background-secondary hover:underline"
                  >
                    {author.name}
                  </Link>
                  <p className="text-xs text-background-secondary/50">
                    {author.role}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-xs text-background-secondary/60">
                <span>{post.date}</span>
                {post.updatedDate && (
                  <>
                    <span className="w-px h-3 bg-background-secondary/20" />
                    <span>Updated {post.updatedDate}</span>
                  </>
                )}
                <span className="w-px h-3 bg-background-secondary/20" />
                <span>{post.readTime}</span>
              </div>
            </div>
            {post.tags.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog?tag=${encodeURIComponent(tag)}`}
                    className="text-xs bg-background-secondary/10 px-3 py-1 text-background-secondary/70 hover:text-background-secondary transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            )}
          </SectionReveal>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12 lg:gap-16">
            <article className="max-w-3xl">
              {introBlock && (
                <p className="text-lg md:text-xl text-foreground leading-relaxed mb-10 font-heading italic">
                  {introBlock.value}
                </p>
              )}

              <div className="mb-8">
                <ShareButtons url={pageUrl} title={post.title} />
              </div>

              <hr className="border-border mb-10" />

              {post.content.slice(introBlock ? 1 : 0).map((block, i) => (
                <SectionReveal key={i} delay={0}>
                  <ContentRenderer block={block} />
                </SectionReveal>
              ))}

              {keyTakeaways.length > 0 && (
                <div className="mt-14 border border-border bg-background-depth/30 p-8">
                  <h3 className="font-heading text-xl text-foreground mb-5">
                    Key Takeaways
                  </h3>
                  <ul className="space-y-3">
                    {keyTakeaways.map((t, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-body leading-relaxed"
                      >
                        <span className="shrink-0 w-5 h-5 rounded-full bg-foreground/10 flex items-center justify-center text-xs text-foreground font-medium mt-0.5">
                          {i + 1}
                        </span>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-14 border-t border-border pt-10">
                <ShareButtons url={pageUrl} title={post.title} />
              </div>

              <div className="mt-14 border border-border p-8 flex flex-col sm:flex-row gap-6">
                <div className="w-20 h-20 rounded-full bg-background-depth overflow-hidden relative shrink-0">
                  <Image
                    src={author.image}
                    alt={author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-xs font-body tracking-widest uppercase text-muted mb-1">
                    Written by
                  </p>
                  <Link
                    href="/about"
                    className="font-heading text-xl text-foreground hover:text-body transition-colors"
                  >
                    {author.name}
                  </Link>
                  <p className="text-xs text-muted mt-0.5">{author.role}</p>
                  <p className="mt-3 text-sm text-body leading-relaxed">
                    {author.bio}
                  </p>
                </div>
              </div>

              <div className="mt-14 bg-foreground text-background-secondary p-8 md:p-10 text-center">
                <h3 className="font-heading text-2xl">
                  Looking for Expert Guidance?
                </h3>
                <p className="mt-3 text-sm text-background-secondary/70 max-w-lg mx-auto">
                  Our team is ready to help you navigate the luxury real estate
                  market with confidence.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="/contact"
                    className="text-sm font-body tracking-wide px-8 py-3 border border-background-secondary text-background-secondary hover:bg-background-secondary hover:text-foreground transition-colors duration-300"
                  >
                    Schedule a Consultation
                  </Link>
                  <Link
                    href="/properties"
                    className="text-sm font-body tracking-wide px-8 py-3 bg-background-secondary/10 text-background-secondary hover:bg-background-secondary/20 transition-colors duration-300"
                  >
                    Browse Properties
                  </Link>
                </div>
              </div>
            </article>

            <aside className="hidden lg:block">
              <div className="sticky top-28">
                {toc.length > 0 && (
                  <div className="mb-10">
                    <p className="text-xs font-body font-semibold tracking-widest uppercase text-muted mb-5">
                      Table of Contents
                    </p>
                    <nav className="space-y-2.5">
                      {toc.map((item) => (
                        <a
                          key={item.id}
                          href={`#${item.id}`}
                          className={`block text-sm leading-snug transition-colors duration-200 ${
                            item.level === "h3" ? "pl-4" : ""
                          } ${
                            activeSection === item.id
                              ? "text-foreground font-medium"
                              : "text-muted hover:text-foreground"
                          }`}
                        >
                          {item.title}
                        </a>
                      ))}
                    </nav>
                  </div>
                )}

                <div className="border border-border p-5 bg-background-depth/30">
                  <p className="text-xs font-body font-semibold tracking-widest uppercase text-muted mb-3">
                    Category
                  </p>
                  <Link
                    href={`/blog?category=${encodeURIComponent(post.category)}`}
                    className="text-sm text-foreground hover:text-body transition-colors"
                  >
                    {post.category}
                  </Link>
                  {post.tags.length > 0 && (
                    <>
                      <p className="text-xs font-body font-semibold tracking-widest uppercase text-muted mt-5 mb-3">
                        Tags
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {post.tags.map((tag) => (
                          <Link
                            key={tag}
                            href={`/blog?tag=${encodeURIComponent(tag)}`}
                            className="text-xs bg-background-depth px-2.5 py-1 text-muted hover:text-foreground transition-colors"
                          >
                            {tag}
                          </Link>
                        ))}
                      </div>
                    </>
                  )}
                </div>

                <div className="mt-6 border border-border p-5 bg-foreground text-background-secondary text-center">
                  <p className="font-heading text-lg">Free Consultation</p>
                  <p className="text-xs text-background-secondary/60 mt-2">
                    Get expert advice on luxury real estate
                  </p>
                  <Link
                    href="/contact"
                    className="mt-4 inline-block text-xs font-body tracking-wide px-6 py-2.5 border border-background-secondary/30 hover:bg-background-secondary/10 transition-colors duration-300"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-20 md:py-28 bg-background-depth border-t border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <SectionReveal>
              <p className="text-xs font-body font-semibold tracking-widest uppercase text-muted mb-8">
                Related Articles
              </p>
            </SectionReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {related.map((r, i) => (
                <SectionReveal key={r.slug} delay={i * 0.1}>
                  <Link href={`/blog/${r.slug}`} className="group block">
                    <div className="relative aspect-[16/10] overflow-hidden bg-background-depth">
                      <Image
                        src={r.image}
                        alt={r.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="text-xs font-body tracking-widest uppercase bg-background-secondary/90 px-3 py-1.5 text-foreground">
                          {r.category}
                        </span>
                      </div>
                    </div>
                    <div className="mt-5">
                      <div className="flex items-center gap-3 text-xs text-muted">
                        <span>{r.date}</span>
                        <span className="w-px h-3 bg-border" />
                        <span>{r.readTime}</span>
                      </div>
                      <h3 className="mt-3 font-heading text-lg text-foreground group-hover:text-body transition-colors duration-300 leading-snug">
                        {r.title}
                      </h3>
                      <p className="mt-2 text-sm text-body leading-relaxed line-clamp-2">
                        {r.excerpt}
                      </p>
                    </div>
                  </Link>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
