"use client";

import Image from "next/image";
import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";
import { blogPosts } from "@/data/blogs";

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
                    <span className="inline-block mt-4 text-xs font-body tracking-widest uppercase text-muted group-hover:text-foreground transition-colors duration-300">
                      Read Article →
                    </span>
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
