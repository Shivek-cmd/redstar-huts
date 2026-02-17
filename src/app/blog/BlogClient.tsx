"use client";

import Image from "next/image";
import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";

const blogPosts = [
  {
    slug: "why-mohali-is-the-next-premium-real-estate-destination",
    title: "Why Mohali Is the Next Premium Real Estate Destination",
    excerpt: "Mohali has rapidly evolved from a satellite town of Chandigarh into one of North India's most sought-after residential destinations, driven by world-class infrastructure and a surge in premium developments.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    category: "Local Insights",
    date: "February 17, 2026",
    readTime: "7 min read",
  },
  {
    slug: "luxury-living-in-chandigarh-investment-guide",
    title: "Luxury Living in Chandigarh: A Complete Investment Guide",
    excerpt: "A comprehensive guide to investing in Chandigarh's luxury real estate market — from sector analysis to NRI opportunities and the Tri-City advantage.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    category: "Investment",
    date: "February 10, 2026",
    readTime: "8 min read",
  },
  {
    slug: "zirakpur-real-estate-emerging-opportunities",
    title: "Zirakpur Real Estate: Emerging Opportunities for Smart Investors",
    excerpt: "Strategically positioned on the Chandigarh-Ambala highway, Zirakpur offers investors a unique blend of accessibility, affordability, and growth potential in the Tri-City region.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    category: "Market Insights",
    date: "February 3, 2026",
    readTime: "6 min read",
  },
  {
    slug: "rise-of-tri-city-real-estate-mohali-chandigarh-zirakpur",
    title: "The Rise of Tri-City Real Estate: Mohali, Chandigarh & Zirakpur",
    excerpt: "The Chandigarh Tri-City region has quietly become one of India's most compelling real estate markets, combining planned elegance, tech-driven growth, and commercial energy.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    category: "Local Insights",
    date: "January 27, 2026",
    readTime: "8 min read",
  },
  {
    slug: "beverly-hills-vs-manhattan-luxury-markets",
    title: "Beverly Hills vs Manhattan: Comparing America's Most Prestigious Markets",
    excerpt: "Beverly Hills and Manhattan represent two distinct philosophies of luxury living. For high-net-worth buyers, understanding their fundamental differences is essential.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    category: "Market Insights",
    date: "January 20, 2026",
    readTime: "7 min read",
  },
  {
    slug: "lake-tahoe-luxury-homes-buyer-guide",
    title: "Lake Tahoe Luxury Homes: What Buyers Need to Know",
    excerpt: "Lake Tahoe represents one of America's most unique luxury real estate markets — a year-round alpine destination where natural beauty meets world-class recreation.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    category: "Buying",
    date: "January 13, 2026",
    readTime: "6 min read",
  },
  {
    slug: "luxury-market-trends-2025",
    title: "Luxury Real Estate Market Trends to Watch",
    excerpt: "An in-depth look at the forces shaping high-end property markets and what discerning buyers and investors should anticipate in the year ahead.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    category: "Market Insights",
    date: "January 15, 2026",
    readTime: "6 min read",
  },
  {
    slug: "art-of-property-staging",
    title: "The Art of Property Staging for Premium Sales",
    excerpt: "How professional staging transforms spaces and drives higher offers in the luxury segment. A guide for sellers seeking maximum value.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    category: "Selling",
    date: "December 28, 2025",
    readTime: "5 min read",
  },
  {
    slug: "investment-portfolio-diversification",
    title: "Diversifying Your Real Estate Investment Portfolio",
    excerpt: "Strategic approaches to building a resilient property portfolio that balances risk and reward across market cycles.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    category: "Investment",
    date: "December 10, 2025",
    readTime: "7 min read",
  },
  {
    slug: "guide-to-buying-first-luxury-home",
    title: "A Considered Guide to Buying Your First Luxury Home",
    excerpt: "From defining your vision to closing with confidence, everything first-time luxury buyers need to know about navigating the premium market.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    category: "Buying",
    date: "November 22, 2025",
    readTime: "8 min read",
  },
  {
    slug: "architecture-trends-modern-estates",
    title: "Architecture Trends Defining Modern Estates",
    excerpt: "From biophilic design to smart integration, exploring the architectural movements that are redefining luxury residential living.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    category: "Design",
    date: "November 5, 2025",
    readTime: "5 min read",
  },
  {
    slug: "understanding-property-valuation",
    title: "Understanding Property Valuation in Premium Markets",
    excerpt: "A comprehensive breakdown of how luxury properties are valued and what factors influence pricing at the highest end of the market.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    category: "Market Insights",
    date: "October 18, 2025",
    readTime: "6 min read",
  },
];

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
