"use client";

import Image from "next/image";
import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";
import { blogPosts } from "@/data/blogs";

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

export default function BlogPage() {
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

      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
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
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs font-body tracking-widest uppercase text-muted group-hover:text-foreground transition-colors duration-300">
                        Read Article →
                      </span>
                      <ShareIcons slug={post.slug} title={post.title} />
                    </div>
                  </div>
                </Link>
              </SectionReveal>
            ))}
          </div>
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
