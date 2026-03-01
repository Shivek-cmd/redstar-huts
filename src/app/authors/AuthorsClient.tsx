"use client";

import Image from "next/image";
import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";
import Breadcrumbs from "@/components/Breadcrumbs";
import { authors } from "@/data/authors";
import { blogPosts } from "@/data/blogs";

export default function AuthorsClient() {
  return (
    <>
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden bg-foreground">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03),transparent_70%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <SectionReveal>
            <div className="mb-6">
              <Breadcrumbs items={[{ label: "Authors" }]} />
            </div>
            <p className="text-xs font-body tracking-[0.3em] uppercase text-muted mb-4">
              The Team Behind the Insights
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-background-secondary leading-tight">
              Our Authors
            </h1>
            <p className="mt-6 text-base md:text-lg text-body max-w-2xl mx-auto leading-relaxed">
              Meet the experts who bring you trusted insights on luxury real estate,
              investment strategy, and the North India property market.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {authors.map((author, i) => {
              const postCount = blogPosts.filter(
                (p) => p.authorSlug === author.slug
              ).length;
              return (
                <SectionReveal key={author.slug} delay={i * 0.1}>
                  <Link
                    href={`/authors/${author.slug}`}
                    className="group block"
                  >
                    <div className="flex flex-col sm:flex-row gap-6">
                      <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden bg-background-depth shrink-0 mx-auto sm:mx-0 border-2 border-border group-hover:border-foreground/30 transition-colors duration-500">
                        <Image
                          src={author.image}
                          alt={author.name}
                          fill
                          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div className="text-center sm:text-left">
                        <h2 className="font-heading text-2xl text-foreground group-hover:text-body transition-colors duration-300">
                          {author.name}
                        </h2>
                        <p className="text-xs font-body tracking-widest uppercase text-muted mt-1">
                          {author.role}
                        </p>
                        <p className="mt-3 text-sm text-body leading-relaxed line-clamp-3">
                          {author.bio}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2 justify-center sm:justify-start">
                          {author.expertise.slice(0, 3).map((skill) => (
                            <span
                              key={skill}
                              className="text-[10px] px-2.5 py-1 bg-background-depth text-muted tracking-wide"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                        <div className="mt-4 flex items-center gap-4 justify-center sm:justify-start">
                          <span className="text-xs text-muted">
                            {postCount} {postCount === 1 ? "Article" : "Articles"}
                          </span>
                          <span className="text-xs font-body tracking-widest uppercase text-muted group-hover:text-foreground transition-colors duration-300">
                            View Profile &rarr;
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background-depth">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <SectionReveal>
            <p className="text-xs font-body tracking-[0.3em] uppercase text-muted mb-4">
              Have a Question?
            </p>
            <h2 className="font-heading text-2xl md:text-3xl text-foreground">
              Connect With Our Team
            </h2>
            <p className="mt-4 text-sm text-body max-w-xl mx-auto leading-relaxed">
              Our authors are available for consultations and personalized real estate guidance.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block text-sm font-body tracking-widest uppercase px-10 py-4 border border-foreground text-foreground hover:bg-foreground hover:text-background-secondary transition-all duration-300"
            >
              Get in Touch
            </Link>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
