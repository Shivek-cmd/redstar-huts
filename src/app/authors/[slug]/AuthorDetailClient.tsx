"use client";

import Image from "next/image";
import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";
import { getAuthorBySlug, authors } from "@/data/authors";
import { blogPosts } from "@/data/blogs";

export default function AuthorDetailClient({ slug }: { slug: string }) {
  const author = getAuthorBySlug(slug);
  const authorPosts = blogPosts.filter((p) => p.authorSlug === slug);
  const otherAuthors = authors.filter((a) => a.slug !== slug);

  if (!author) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="font-heading text-4xl text-foreground">Author Not Found</h1>
          <Link
            href="/authors"
            className="mt-6 inline-block text-sm font-body tracking-wide px-8 py-3.5 border border-foreground text-foreground hover:bg-foreground hover:text-background-secondary transition-colors duration-300"
          >
            View All Authors
          </Link>
        </div>
      </section>
    );
  }

  const socialLinks = [
    { key: "instagram", label: "Instagram", url: author.social.instagram },
    { key: "facebook", label: "Facebook", url: author.social.facebook },
    { key: "youtube", label: "YouTube", url: author.social.youtube },
    { key: "linkedin", label: "LinkedIn", url: author.social.linkedin },
  ].filter((s) => s.url && s.url.length > 0);

  return (
    <>
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden bg-foreground">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03),transparent_70%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <SectionReveal>
            <Link
              href="/authors"
              className="inline-flex items-center gap-2 text-xs font-body tracking-widest uppercase text-muted hover:text-background-secondary transition-colors mb-10"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
              All Authors
            </Link>
          </SectionReveal>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
            <SectionReveal>
              <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-2 border-border shrink-0">
                <Image
                  src={author.image}
                  alt={author.name}
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <div className="text-center md:text-left">
                <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-background-secondary">
                  {author.name}
                </h1>
                <p className="mt-2 text-xs font-body tracking-[0.25em] uppercase text-muted">
                  {author.role}
                </p>
                <p className="mt-6 text-base text-body leading-relaxed max-w-2xl">
                  {author.longBio}
                </p>
                <div className="mt-6 flex flex-wrap gap-2 justify-center md:justify-start">
                  {author.expertise.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] px-3 py-1.5 bg-background-secondary/10 text-background-secondary/70 tracking-wide"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                {socialLinks.length > 0 && (
                  <div className="mt-6 flex items-center gap-4 justify-center md:justify-start">
                    <span className="text-xs text-background-secondary/40 tracking-wide uppercase">Follow</span>
                    {socialLinks.map((s) => (
                      <a
                        key={s.key}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${author.name} on ${s.label}`}
                        className="w-10 h-10 rounded-full border border-background-secondary/30 flex items-center justify-center text-background-secondary/60 hover:text-background-secondary hover:border-background-secondary hover:scale-110 transition-all duration-300"
                      >
                        {s.key === "instagram" && (
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                          </svg>
                        )}
                        {s.key === "facebook" && (
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                          </svg>
                        )}
                        {s.key === "youtube" && (
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                          </svg>
                        )}
                        {s.key === "linkedin" && (
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        )}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionReveal>
            <div className="flex items-center justify-between mb-12">
              <div>
                <p className="text-xs font-body tracking-[0.3em] uppercase text-muted mb-2">
                  Written by {author.name}
                </p>
                <h2 className="font-heading text-2xl md:text-3xl text-foreground">
                  Articles ({authorPosts.length})
                </h2>
              </div>
            </div>
          </SectionReveal>

          {authorPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {authorPosts.map((post, i) => (
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
                      <div className="mt-4">
                        <span className="text-xs font-body tracking-widest uppercase text-muted group-hover:text-foreground transition-colors duration-300">
                          Read Article &rarr;
                        </span>
                      </div>
                    </div>
                  </Link>
                </SectionReveal>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-body">No articles by this author yet.</p>
            </div>
          )}
        </div>
      </section>

      {otherAuthors.length > 0 && (
        <section className="py-16 md:py-20 bg-background-depth">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <SectionReveal>
              <p className="text-xs font-body tracking-[0.3em] uppercase text-muted mb-2 text-center">
                More Experts
              </p>
              <h2 className="font-heading text-2xl md:text-3xl text-foreground text-center mb-12">
                Meet Other Authors
              </h2>
            </SectionReveal>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {otherAuthors.map((other, i) => (
                <SectionReveal key={other.slug} delay={i * 0.1}>
                  <Link
                    href={`/authors/${other.slug}`}
                    className="group flex flex-col items-center text-center"
                  >
                    <div className="relative w-20 h-20 rounded-full overflow-hidden bg-background-depth border border-border group-hover:border-foreground/30 transition-colors duration-500">
                      <Image
                        src={other.image}
                        alt={other.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="mt-4 font-heading text-lg text-foreground group-hover:text-body transition-colors">
                      {other.name}
                    </h3>
                    <p className="text-xs text-muted mt-1">{other.role}</p>
                    <span className="mt-3 text-xs font-body tracking-widest uppercase text-muted group-hover:text-foreground transition-colors">
                      View Profile &rarr;
                    </span>
                  </Link>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-12 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionReveal>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm text-body">
              <p>Explore our <Link href="/properties" className="text-foreground underline underline-offset-4 hover:text-muted transition-colors">curated properties</Link></p>
              <p>Read more on our <Link href="/blog" className="text-foreground underline underline-offset-4 hover:text-muted transition-colors">Journal</Link></p>
              <p>Learn about our <Link href="/services" className="text-foreground underline underline-offset-4 hover:text-muted transition-colors">advisory services</Link></p>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background-depth">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <SectionReveal>
            <h2 className="font-heading text-2xl md:text-3xl text-foreground">
              Get Expert Guidance
            </h2>
            <p className="mt-4 text-sm text-body max-w-xl mx-auto leading-relaxed">
              Schedule a consultation with {author.name} and our team for personalized real estate advice.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block text-sm font-body tracking-widest uppercase px-10 py-4 border border-foreground text-foreground hover:bg-foreground hover:text-background-secondary transition-all duration-300"
            >
              Book a Consultation
            </Link>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
