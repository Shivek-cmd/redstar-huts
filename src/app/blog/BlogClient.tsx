"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";
import {
  blogPosts,
  blogAuthors,
  getAllCategories,
  getAllTags,
} from "@/data/blogs";

const POSTS_PER_PAGE = 6;

export default function BlogClient() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [sortBy, setSortBy] = useState<"latest" | "popular">("latest");
  const [page, setPage] = useState(1);

  const categories = getAllCategories();
  const tags = getAllTags();

  const filtered = useMemo(() => {
    let results = [...blogPosts];

    if (search.trim()) {
      const q = search.toLowerCase();
      results = results.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    if (selectedCategory) {
      results = results.filter((p) => p.category === selectedCategory);
    }

    if (selectedTag) {
      results = results.filter((p) => p.tags.includes(selectedTag));
    }

    if (sortBy === "latest") {
      results.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    }

    return results;
  }, [search, selectedCategory, selectedTag, sortBy]);

  const featured = blogPosts.find((p) => p.featured);
  const nonFeatured = filtered.filter((p) => p.slug !== featured?.slug);
  const totalPages = Math.ceil(nonFeatured.length / POSTS_PER_PAGE);
  const paginated = nonFeatured.slice(0, page * POSTS_PER_PAGE);
  const hasMore = page < totalPages;

  const clearFilters = () => {
    setSearch("");
    setSelectedCategory("");
    setSelectedTag("");
    setSortBy("latest");
    setPage(1);
  };

  const isFiltered = search || selectedCategory || selectedTag;

  return (
    <>
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1600&q=80"
            alt="Luxury real estate journal"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
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
              <span className="text-background-secondary/80">Blog</span>
            </nav>
            <p className="text-xs font-body font-semibold tracking-widest uppercase text-background-secondary/60 mb-4">
              Journal
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-background-secondary max-w-3xl leading-tight drop-shadow-lg">
              Insights &<br />
              Perspectives
            </h1>
            <p className="mt-6 text-base md:text-lg text-background-secondary/80 max-w-2xl leading-relaxed">
              Expert analysis, market intelligence, and thoughtful perspectives
              on luxury real estate from the RedStar Huts advisory team.
            </p>
          </SectionReveal>
        </div>
      </section>

      {featured && !isFiltered && (
        <section className="py-16 md:py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <SectionReveal>
              <p className="text-xs font-body font-semibold tracking-widest uppercase text-muted mb-8">
                Featured Article
              </p>
              <Link
                href={`/blog/${featured.slug}`}
                className="group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-background-depth">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-body tracking-widest uppercase bg-foreground/90 px-3 py-1.5 text-background-secondary">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-3 text-xs text-muted mb-3">
                    <span className="font-body tracking-widest uppercase text-foreground/70">
                      {featured.category}
                    </span>
                    <span className="w-px h-3 bg-border" />
                    <span>{featured.date}</span>
                    <span className="w-px h-3 bg-border" />
                    <span>{featured.readTime}</span>
                  </div>
                  <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-foreground group-hover:text-body transition-colors duration-300 leading-snug">
                    {featured.title}
                  </h2>
                  <p className="mt-4 text-base text-body leading-relaxed line-clamp-3">
                    {featured.excerpt}
                  </p>
                  <div className="mt-5 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-background-depth overflow-hidden relative">
                      <Image
                        src={blogAuthors[featured.author].image}
                        alt={blogAuthors[featured.author].name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-sm text-muted">
                      {blogAuthors[featured.author].name}
                    </span>
                  </div>
                  <span className="inline-block mt-6 text-xs font-body tracking-widest uppercase text-muted group-hover:text-foreground transition-colors duration-300">
                    Read Article →
                  </span>
                </div>
              </Link>
            </SectionReveal>
          </div>
        </section>
      )}

      <section className="py-16 md:py-20 bg-background-depth">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionReveal>
            <div className="flex flex-col gap-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setPage(1);
                  }}
                  className="w-full bg-background-secondary border border-border px-5 py-3.5 pr-12 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-foreground transition-colors duration-300"
                />
                <svg
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <select
                  value={selectedCategory}
                  onChange={(e) => {
                    setSelectedCategory(e.target.value);
                    setPage(1);
                  }}
                  className="bg-background-secondary border border-border px-4 py-2.5 text-xs font-body tracking-wide text-foreground focus:outline-none focus:border-foreground transition-colors duration-300 cursor-pointer"
                >
                  <option value="">All Categories</option>
                  {categories.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>

                <select
                  value={selectedTag}
                  onChange={(e) => {
                    setSelectedTag(e.target.value);
                    setPage(1);
                  }}
                  className="bg-background-secondary border border-border px-4 py-2.5 text-xs font-body tracking-wide text-foreground focus:outline-none focus:border-foreground transition-colors duration-300 cursor-pointer"
                >
                  <option value="">All Tags</option>
                  {tags.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>

                <select
                  value={sortBy}
                  onChange={(e) => {
                    setSortBy(e.target.value as "latest" | "popular");
                    setPage(1);
                  }}
                  className="bg-background-secondary border border-border px-4 py-2.5 text-xs font-body tracking-wide text-foreground focus:outline-none focus:border-foreground transition-colors duration-300 cursor-pointer"
                >
                  <option value="latest">Latest First</option>
                  <option value="popular">Popular</option>
                </select>

                {isFiltered && (
                  <button
                    onClick={clearFilters}
                    className="text-xs font-body tracking-widest uppercase text-muted hover:text-foreground transition-colors duration-300 ml-auto"
                  >
                    Clear Filters
                  </button>
                )}
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {filtered.length === 0 ? (
            <SectionReveal>
              <div className="text-center py-20">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-background-depth flex items-center justify-center">
                  <svg
                    className="w-7 h-7 text-muted"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                  </svg>
                </div>
                <h3 className="font-heading text-2xl text-foreground mb-3">
                  No Articles Found
                </h3>
                <p className="text-sm text-body max-w-md mx-auto leading-relaxed">
                  We couldn&apos;t find any articles matching your criteria.
                  Try adjusting your search or filters.
                </p>
                <button
                  onClick={clearFilters}
                  className="mt-8 text-sm font-body tracking-wide px-8 py-3 border border-foreground text-foreground hover:bg-foreground hover:text-background-secondary transition-colors duration-300"
                >
                  View All Articles
                </button>
              </div>
            </SectionReveal>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {paginated.map((post, i) => (
                  <SectionReveal key={post.slug} delay={(i % 3) * 0.1}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group block"
                    >
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
                        <div className="mt-4 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-background-depth overflow-hidden relative">
                              <Image
                                src={blogAuthors[post.author].image}
                                alt={blogAuthors[post.author].name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <span className="text-xs text-muted">
                              {blogAuthors[post.author].name}
                            </span>
                          </div>
                          <span className="text-xs font-body tracking-widest uppercase text-muted group-hover:text-foreground transition-colors duration-300">
                            Read →
                          </span>
                        </div>
                      </div>
                    </Link>
                  </SectionReveal>
                ))}
              </div>

              {hasMore && (
                <div className="mt-16 text-center">
                  <button
                    onClick={() => setPage((p) => p + 1)}
                    className="text-sm font-body tracking-wide px-10 py-3.5 border border-foreground text-foreground hover:bg-foreground hover:text-background-secondary transition-colors duration-300"
                  >
                    Load More Articles
                  </button>
                </div>
              )}
            </>
          )}
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
