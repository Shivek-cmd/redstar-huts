"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";
import { blogPosts, getAllCategories, getAllTags } from "@/data/blogs";
import type { BlogPost } from "@/data/blogs";
import { getAuthorBySlug } from "@/data/authors";

const BASE_URL = "https://redstarhuts.com";

function ShareIcons({ slug, title }: { slug: string; title: string }) {
  const url = `${BASE_URL}/blog/${slug}`;
  const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
  const igUrl = `https://www.instagram.com/redstar__huts/`;

  return (
    <div className="flex items-center gap-2">
      <a
        href={fbUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Share "${title}" on Facebook`}
        className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted hover:text-foreground hover:border-foreground transition-all duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      </a>
      <a
        href={igUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit RedStar Huts on Instagram`}
        className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted hover:text-foreground hover:border-foreground transition-all duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      </a>
    </div>
  );
}

function parseDate(dateStr: string): number {
  return new Date(dateStr).getTime();
}

export default function BlogPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [sort, setSort] = useState<"latest" | "oldest">("latest");

  const categories = useMemo(() => getAllCategories(), []);
  const tags = useMemo(() => getAllTags(), []);

  const featured = useMemo(() => blogPosts.find((p) => p.featured), []);

  const filteredPosts = useMemo(() => {
    let posts = blogPosts.filter((p) => !p.featured);

    if (search.trim()) {
      const q = search.toLowerCase();
      posts = posts.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    if (activeCategory) {
      posts = posts.filter((p) => p.category === activeCategory);
    }

    if (activeTag) {
      posts = posts.filter((p) => p.tags.includes(activeTag));
    }

    posts.sort((a, b) => {
      const da = parseDate(a.date);
      const db = parseDate(b.date);
      return sort === "latest" ? db - da : da - db;
    });

    return posts;
  }, [search, activeCategory, activeTag, sort]);

  const clearFilters = () => {
    setSearch("");
    setActiveCategory(null);
    setActiveTag(null);
  };

  const hasActiveFilters = search.trim() || activeCategory || activeTag;

  return (
    <>
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1600&q=80"
            alt="Luxury real estate"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <SectionReveal>
            <p className="text-xs font-body font-semibold tracking-widest uppercase text-background-secondary/60 mb-4">
              Journal
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-background-secondary max-w-3xl leading-tight drop-shadow-lg">
              Insights &
              <br />
              Perspectives
            </h1>
            <p className="mt-6 text-base md:text-lg text-background-secondary/80 max-w-2xl leading-relaxed">
              Expert analysis, market intelligence, and thoughtful perspectives on
              luxury real estate from the RedStar Huts advisory team.
            </p>
          </SectionReveal>
        </div>
      </section>

      {featured && (
        <section className="py-16 md:py-20 bg-background border-b border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <SectionReveal>
              <p className="text-xs font-body font-semibold tracking-widest uppercase text-muted mb-8">
                Featured Article
              </p>
              <Link href={`/blog/${featured.slug}`} className="group block">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                  <div className="relative aspect-[16/10] overflow-hidden bg-background-depth">
                    <Image
                      src={featured.image}
                      alt={featured.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="text-xs font-body tracking-widest uppercase bg-background-secondary/90 px-3 py-1.5 text-foreground">
                        {featured.category}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-3 text-xs text-muted mb-4">
                      <span>{featured.date}</span>
                      <span className="w-px h-3 bg-border" />
                      <span>{featured.readTime}</span>
                    </div>
                    <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-foreground group-hover:text-body transition-colors duration-300 leading-snug">
                      {featured.title}
                    </h2>
                    <p className="mt-4 text-sm md:text-base text-body leading-relaxed line-clamp-3">
                      {featured.excerpt}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {featured.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-1 bg-background-depth text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {(() => {
                      const author = getAuthorBySlug(featured.authorSlug);
                      return author ? (
                        <div className="mt-6 flex items-center gap-3">
                          <div className="relative w-8 h-8 rounded-full overflow-hidden bg-background-depth">
                            <Image src={author.image} alt={author.name} fill className="object-cover" />
                          </div>
                          <Link
                            href={`/authors/${author.slug}`}
                            className="text-xs font-body tracking-wide text-muted hover:text-foreground transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            By {author.name}
                          </Link>
                        </div>
                      ) : null;
                    })()}
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs font-body tracking-widest uppercase text-muted group-hover:text-foreground transition-colors duration-300">
                        Read Article &rarr;
                      </span>
                      <ShareIcons slug={featured.slug} title={featured.title} />
                    </div>
                  </div>
                </div>
              </Link>
            </SectionReveal>
          </div>
        </section>
      )}

      <section className="py-12 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <div className="relative w-full sm:w-80">
                <svg
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 text-sm bg-background border border-border text-foreground placeholder:text-muted focus:outline-none focus:border-foreground transition-colors"
                />
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-muted">Sort:</span>
                <button
                  onClick={() => setSort("latest")}
                  className={`text-xs px-3 py-1.5 border transition-colors ${
                    sort === "latest"
                      ? "border-foreground text-foreground bg-foreground/5"
                      : "border-border text-muted hover:border-foreground hover:text-foreground"
                  }`}
                >
                  Latest
                </button>
                <button
                  onClick={() => setSort("oldest")}
                  className={`text-xs px-3 py-1.5 border transition-colors ${
                    sort === "oldest"
                      ? "border-foreground text-foreground bg-foreground/5"
                      : "border-border text-muted hover:border-foreground hover:text-foreground"
                  }`}
                >
                  Oldest
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveCategory(null)}
                className={`text-xs px-3 py-1.5 border transition-colors ${
                  !activeCategory
                    ? "border-foreground text-foreground bg-foreground/5"
                    : "border-border text-muted hover:border-foreground hover:text-foreground"
                }`}
              >
                All Categories
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() =>
                    setActiveCategory(activeCategory === cat ? null : cat)
                  }
                  className={`text-xs px-3 py-1.5 border transition-colors ${
                    activeCategory === cat
                      ? "border-foreground text-foreground bg-foreground/5"
                      : "border-border text-muted hover:border-foreground hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {tags.slice(0, 12).map((tag) => (
                <button
                  key={tag}
                  onClick={() =>
                    setActiveTag(activeTag === tag ? null : tag)
                  }
                  className={`text-xs px-2.5 py-1 transition-colors ${
                    activeTag === tag
                      ? "bg-foreground text-background-secondary"
                      : "bg-background-depth text-muted hover:text-foreground"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>

            {hasActiveFilters && (
              <div className="flex items-center gap-3">
                <span className="text-xs text-muted">
                  {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""} found
                </span>
                <button
                  onClick={clearFilters}
                  className="text-xs text-foreground underline underline-offset-4 hover:text-muted transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="font-heading text-2xl text-foreground mb-4">
                No articles found
              </p>
              <p className="text-sm text-body mb-8">
                Try adjusting your search or filters to find what you are looking for.
              </p>
              <button
                onClick={clearFilters}
                className="text-sm font-body tracking-wide px-6 py-2.5 border border-foreground text-foreground hover:bg-foreground hover:text-background-secondary transition-colors duration-300"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, i) => (
                <SectionReveal key={post.slug} delay={(i % 3) * 0.1}>
                  <Link href={`/blog/${post.slug}`} className="group block">
                    <div className="relative aspect-[16/10] overflow-hidden bg-background-depth">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="text-xs font-body tracking-widest uppercase bg-background-secondary/90 px-3 py-1.5 text-foreground">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="mt-5">
                      <div className="flex items-center gap-3 text-xs text-muted">
                        <span>{post.date}</span>
                        <span className="w-px h-3 bg-border" />
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="mt-3 font-heading text-xl text-foreground group-hover:text-body transition-colors duration-300 leading-snug">
                        {post.title}
                      </h3>
                      <p className="mt-3 text-sm text-body leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] px-2 py-0.5 bg-background-depth text-muted"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      {(() => {
                        const author = getAuthorBySlug(post.authorSlug);
                        return author ? (
                          <div className="mt-4 flex items-center gap-2.5">
                            <div className="relative w-6 h-6 rounded-full overflow-hidden bg-background-depth">
                              <Image src={author.image} alt={author.name} fill className="object-cover" />
                            </div>
                            <Link
                              href={`/authors/${author.slug}`}
                              className="text-xs text-muted hover:text-foreground transition-colors"
                              onClick={(e) => e.stopPropagation()}
                            >
                              {author.name}
                            </Link>
                          </div>
                        ) : null;
                      })()}
                      <div className="mt-3 flex items-center justify-between">
                        <span className="text-xs font-body tracking-widest uppercase text-muted group-hover:text-foreground transition-colors duration-300">
                          Read Article &rarr;
                        </span>
                        <ShareIcons slug={post.slug} title={post.title} />
                      </div>
                    </div>
                  </Link>
                </SectionReveal>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-12 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionReveal>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm text-body">
              <p>Need guidance? Explore our <Link href="/services" className="text-foreground underline underline-offset-4 hover:text-muted transition-colors">advisory services</Link></p>
              <p>Browse <Link href="/properties" className="text-foreground underline underline-offset-4 hover:text-muted transition-colors">premium properties</Link> across select markets</p>
              <p>Learn more <Link href="/about" className="text-foreground underline underline-offset-4 hover:text-muted transition-colors">about our team</Link></p>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-background-depth">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <SectionReveal>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground">
              Stay Informed
            </h2>
            <p className="mt-5 text-base text-body leading-relaxed max-w-lg mx-auto">
              Subscribe to receive our latest insights, market reports, and
              exclusive property updates directly to your inbox.
            </p>
            <Link
              href="/contact"
              className="inline-block mt-10 text-sm font-body tracking-wide px-8 py-3.5 rounded-full bg-foreground text-background-secondary hover:bg-body transition-colors duration-300"
            >
              Get in Touch
            </Link>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
