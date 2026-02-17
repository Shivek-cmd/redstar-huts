"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "@/components/SectionReveal";

import { blogData } from "@/data/blogDetails";

const allSlugs = Object.keys(blogData);

export default function BlogDetailClient({ slug }: { slug: string }) {
  const post = blogData[slug];
  const [showStickyTitle, setShowStickyTitle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyTitle(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!post) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="font-heading text-4xl text-foreground">Article Not Found</h1>
          <Link href="/blog" className="mt-6 inline-block text-sm font-body tracking-wide px-8 py-3.5 rounded-full border border-foreground text-foreground hover:bg-foreground hover:text-background-secondary transition-colors duration-300">
            Back to Journal
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <AnimatePresence>
        {showStickyTitle && (
          <motion.div
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -60, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-20 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-b border-border"
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between gap-4">
              <div className="flex items-center gap-4 min-w-0">
                <span className="hidden sm:inline-block text-xs font-body tracking-widest uppercase bg-background-depth px-3 py-1 text-muted shrink-0">
                  {post.category}
                </span>
                <h2 className="font-heading text-sm md:text-base text-foreground truncate">
                  {post.title}
                </h2>
              </div>
              <span className="text-xs text-muted shrink-0">{post.readTime}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={post.heroImage} alt={post.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <SectionReveal>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs font-body tracking-widest uppercase bg-background-secondary/15 px-3 py-1.5 text-background-secondary">
                {post.category}
              </span>
              <span className="text-xs text-background-secondary/50">{post.date}</span>
              <span className="text-xs text-background-secondary/50">{post.readTime}</span>
            </div>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-background-secondary max-w-4xl leading-tight drop-shadow-lg">
              {post.title}
            </h1>
          </SectionReveal>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          {post.content.map((block, i) => (
            <SectionReveal key={i} delay={i * 0.03}>
              {block.type === "paragraph" && (
                <p className="text-base md:text-lg text-body leading-relaxed mb-8">{block.value}</p>
              )}
              {block.type === "heading" && (
                <h2 className="font-heading text-2xl md:text-3xl text-foreground mt-12 mb-6">{block.value}</h2>
              )}
              {block.type === "image" && (
                <div className="relative aspect-[16/9] overflow-hidden my-10">
                  <Image src={block.value} alt={block.alt || ""} fill className="object-cover" />
                </div>
              )}
            </SectionReveal>
          ))}
        </div>
      </section>

      <section className="py-12 bg-background-depth">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <SectionReveal>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm text-body">
              <p>Explore our <Link href="/services" className="text-foreground underline underline-offset-4 hover:text-muted transition-colors">advisory services</Link> for expert guidance</p>
              <p>Browse <Link href="/properties" className="text-foreground underline underline-offset-4 hover:text-muted transition-colors">curated properties</Link> across premium markets</p>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="py-16 bg-background border-t border-border">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <SectionReveal>
            <p className="text-xs font-body font-semibold tracking-widest uppercase text-muted mb-8">
              More Articles
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {allSlugs
                .filter((s) => s !== slug)
                .slice(0, 2)
                .map((s) => (
                  <Link key={s} href={`/blog/${s}`} className="group block">
                    <div className="relative aspect-[16/10] overflow-hidden bg-background-depth">
                      <Image src={blogData[s].heroImage} alt={blogData[s].title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <h3 className="mt-4 font-heading text-lg text-foreground group-hover:text-body transition-colors duration-300">
                      {blogData[s].title}
                    </h3>
                    <p className="mt-1 text-xs text-muted">{blogData[s].date}</p>
                  </Link>
                ))}
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
