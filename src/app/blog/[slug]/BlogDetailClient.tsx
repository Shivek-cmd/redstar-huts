"use client";

import Image from "next/image";
import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";

const blogData: Record<
  string,
  {
    title: string;
    category: string;
    date: string;
    readTime: string;
    heroImage: string;
    content: { type: "paragraph" | "heading" | "image"; value: string; alt?: string }[];
  }
> = {
  "luxury-market-trends-2025": {
    title: "Luxury Real Estate Market Trends to Watch",
    category: "Market Insights",
    date: "January 15, 2025",
    readTime: "6 min read",
    heroImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&q=80",
    content: [
      { type: "paragraph", value: "The luxury real estate market continues to evolve, shaped by shifting demographics, technological innovation, and changing lifestyle priorities. As we look ahead, several key trends are poised to define the premium property landscape for discerning buyers and investors." },
      { type: "heading", value: "The Rise of Lifestyle-Driven Purchases" },
      { type: "paragraph", value: "Today's luxury buyers are increasingly motivated by lifestyle considerations rather than pure investment returns. Properties that offer unique experiences — whether waterfront access, mountain retreats, or urban penthouses with panoramic views — command premium prices and attract the most qualified buyers." },
      { type: "image", value: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80", alt: "Luxury waterfront property" },
      { type: "heading", value: "Technology Integration as a Standard" },
      { type: "paragraph", value: "Smart home technology has moved from a luxury add-on to a baseline expectation in premium properties. Buyers now expect integrated systems for climate, security, entertainment, and energy management — seamlessly designed to enhance rather than complicate daily living." },
      { type: "heading", value: "Sustainability Meets Luxury" },
      { type: "paragraph", value: "Environmental consciousness is no longer at odds with luxury living. The most forward-thinking developments are incorporating sustainable materials, energy-efficient systems, and biophilic design principles that align premium aesthetics with environmental responsibility." },
      { type: "image", value: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80", alt: "Modern sustainable architecture" },
      { type: "heading", value: "Market Outlook" },
      { type: "paragraph", value: "Despite broader economic uncertainties, the luxury segment continues to demonstrate resilience. Limited inventory in prime locations, combined with strong demand from both domestic and international buyers, suggests that well-positioned premium properties will maintain their value and appeal throughout the coming year." },
    ],
  },
  "art-of-property-staging": {
    title: "The Art of Property Staging for Premium Sales",
    category: "Selling",
    date: "December 28, 2024",
    readTime: "5 min read",
    heroImage: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1600&q=80",
    content: [
      { type: "paragraph", value: "In the luxury real estate market, presentation is not merely important — it is essential. Professional staging transforms a property from a house into an aspirational lifestyle, creating emotional connections that drive higher offers and faster sales." },
      { type: "heading", value: "Creating an Emotional Narrative" },
      { type: "paragraph", value: "The most effective staging goes beyond furniture placement. It tells a story about the life that awaits the buyer. Every room should evoke a feeling — tranquility in the bedroom, sophistication in the living areas, warmth in the kitchen. The goal is to make buyers envision their best life within these walls." },
      { type: "image", value: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80", alt: "Professionally staged living room" },
      { type: "heading", value: "The Return on Investment" },
      { type: "paragraph", value: "Data consistently shows that professionally staged luxury properties sell faster and for higher prices than their unstaged counterparts. In the premium segment, where buyers expect perfection, staging typically delivers a return of five to ten times the initial investment." },
      { type: "heading", value: "Key Principles of Luxury Staging" },
      { type: "paragraph", value: "Successful luxury staging follows several guiding principles: emphasize natural light, maintain a cohesive color palette, select furniture that complements the architecture, and ensure every detail — from art placement to table settings — reflects the caliber of the property." },
      { type: "image", value: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=80", alt: "Elegant interior design" },
      { type: "paragraph", value: "The investment in professional staging is not an expense — it is a strategic decision that positions your property to achieve its maximum potential value in the market." },
    ],
  },
  "investment-portfolio-diversification": {
    title: "Diversifying Your Real Estate Investment Portfolio",
    category: "Investment",
    date: "December 10, 2024",
    readTime: "7 min read",
    heroImage: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1600&q=80",
    content: [
      { type: "paragraph", value: "A well-diversified real estate portfolio is the cornerstone of sustainable wealth creation. By spreading investments across property types, geographic markets, and risk profiles, investors can build resilience against market fluctuations while maintaining strong long-term returns." },
      { type: "heading", value: "Geographic Diversification" },
      { type: "paragraph", value: "Concentrating investments in a single market exposes your portfolio to localized economic risks. Strategic allocation across multiple high-growth markets — from established luxury enclaves to emerging premium destinations — creates a more balanced and resilient investment profile." },
      { type: "image", value: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1200&q=80", alt: "Diverse real estate markets" },
      { type: "heading", value: "Asset Class Mix" },
      { type: "paragraph", value: "Beyond residential properties, sophisticated investors are exploring opportunities in luxury commercial spaces, mixed-use developments, and hospitality assets. Each asset class offers distinct risk-return characteristics that can complement a predominantly residential portfolio." },
      { type: "heading", value: "Long-Term Perspective" },
      { type: "paragraph", value: "The most successful real estate investors share a common trait: patience. Real estate rewards long-term thinking, and the most significant returns are typically realized over holding periods of seven to fifteen years, allowing properties to appreciate through multiple market cycles." },
      { type: "image", value: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80", alt: "Premium investment property" },
      { type: "paragraph", value: "Our investment consulting team can help you evaluate your current holdings and develop a diversification strategy aligned with your financial objectives and risk tolerance." },
    ],
  },
  "guide-to-buying-first-luxury-home": {
    title: "A Considered Guide to Buying Your First Luxury Home",
    category: "Buying",
    date: "November 22, 2024",
    readTime: "8 min read",
    heroImage: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1600&q=80",
    content: [
      { type: "paragraph", value: "Purchasing your first luxury property is a milestone that requires careful preparation, informed decision-making, and expert guidance. This guide distills the essential considerations for navigating the premium real estate market with clarity and confidence." },
      { type: "heading", value: "Define Your Vision" },
      { type: "paragraph", value: "Before exploring listings, take time to articulate what luxury means to you personally. Is it the location, the architectural style, the amenities, or the investment potential? Understanding your priorities will focus your search and prevent decision fatigue in a market filled with exceptional options." },
      { type: "image", value: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80", alt: "Luxury home interior" },
      { type: "heading", value: "Assemble Your Advisory Team" },
      { type: "paragraph", value: "In the luxury segment, the right advisors are indispensable. A specialized buyer's agent, experienced real estate attorney, qualified inspector, and financial advisor together form a team that protects your interests and ensures informed decision-making at every stage." },
      { type: "heading", value: "Due Diligence is Non-Negotiable" },
      { type: "paragraph", value: "Premium properties demand premium due diligence. Beyond standard inspections, consider environmental assessments, title deep-dives, insurance evaluations, and community governance reviews. The thoroughness of your due diligence directly correlates with the confidence of your purchase." },
      { type: "image", value: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80", alt: "Premium property details" },
      { type: "paragraph", value: "The journey to your first luxury home should be as exceptional as the property itself. With the right preparation and guidance, it becomes an experience defined by confidence, clarity, and excitement." },
    ],
  },
  "architecture-trends-modern-estates": {
    title: "Architecture Trends Defining Modern Estates",
    category: "Design",
    date: "November 5, 2024",
    readTime: "5 min read",
    heroImage: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1600&q=80",
    content: [
      { type: "paragraph", value: "The architecture of luxury estates is undergoing a fascinating evolution, blending innovation with timelessness. Contemporary designs are redefining what it means to live well, prioritizing connection to nature, material authenticity, and seamless indoor-outdoor transitions." },
      { type: "heading", value: "Biophilic Design" },
      { type: "paragraph", value: "The integration of natural elements into architectural design — living walls, water features, natural materials, and abundant greenery — creates spaces that promote wellbeing while maintaining a sense of refined luxury. This approach recognizes that true luxury is, at its core, a connection to the natural world." },
      { type: "image", value: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80", alt: "Biophilic architecture" },
      { type: "heading", value: "Minimalist Grandeur" },
      { type: "paragraph", value: "Modern luxury estates are moving away from ornate excess toward a more restrained aesthetic that lets premium materials and spatial design speak for themselves. Clean lines, generous proportions, and thoughtful detailing create an impression of grandeur through simplicity rather than decoration." },
      { type: "heading", value: "Indoor-Outdoor Living" },
      { type: "paragraph", value: "Retractable glass walls, covered outdoor rooms, and infinity-edge pools that blend into landscape views are becoming standard features in premium estates. These elements dissolve the boundaries between interior and exterior spaces, creating living environments that embrace their natural settings." },
      { type: "image", value: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&q=80", alt: "Modern estate design" },
      { type: "paragraph", value: "These architectural trends reflect a deeper shift in how we define luxury living — one that values experience, authenticity, and connection above all else." },
    ],
  },
  "understanding-property-valuation": {
    title: "Understanding Property Valuation in Premium Markets",
    category: "Market Insights",
    date: "October 18, 2024",
    readTime: "6 min read",
    heroImage: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1600&q=80",
    content: [
      { type: "paragraph", value: "Accurate property valuation is the foundation of every informed real estate decision. In the premium market, where properties are unique and comparable sales may be limited, understanding the valuation process is essential for both buyers and sellers." },
      { type: "heading", value: "The Three Approaches" },
      { type: "paragraph", value: "Professional valuers typically employ three methodologies: the sales comparison approach (analyzing recent comparable transactions), the cost approach (estimating replacement value), and the income approach (projecting potential rental returns). In luxury markets, the sales comparison approach is most commonly relied upon, though all three may be considered." },
      { type: "image", value: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80", alt: "Property valuation" },
      { type: "heading", value: "Beyond the Numbers" },
      { type: "paragraph", value: "Luxury properties often possess intangible qualities — provenance, architectural significance, privacy, views — that resist simple quantification. Experienced valuers understand how to account for these factors, drawing on deep market knowledge and professional judgment to arrive at figures that reflect true market value." },
      { type: "heading", value: "When to Seek a Valuation" },
      { type: "paragraph", value: "Whether you are considering a purchase, planning a sale, reviewing your portfolio, or assessing insurance needs, a professional valuation provides the objective foundation for confident decision-making. In dynamic markets, regular revaluations ensure your understanding of asset value remains current." },
      { type: "image", value: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1200&q=80", alt: "Luxury property assessment" },
      { type: "paragraph", value: "Our Market Research & Valuation team delivers rigorous, independent assessments that inform confident decision-making at every level." },
    ],
  },
  "chandigarh-tricity-metro-project-real-estate-opportunity": {
    title: "Chandigarh Tricity Metro Project: Why Property Near Metro Stations Could Become the Next Big Real Estate Opportunity",
    category: "Investment",
    date: "March 6, 2026",
    readTime: "10 min read",
    heroImage: "/blog/tricity-metro/hero-metro-tricity.jpg",
    content: [
      { type: "paragraph", value: "The Tricity region \u2014 comprising Chandigarh, Mohali, and Zirakpur \u2014 has become one of North India\u2019s fastest-growing urban zones. With growing population, expanding IT parks, and increasing housing demand, daily commuting has also become more challenging." },
      { type: "paragraph", value: "To solve these problems and prepare the region for future growth, authorities have proposed a metro rail system for Chandigarh Tricity. While the metro will mainly improve transportation, its biggest impact could be seen in real estate growth across the region." },
      { type: "paragraph", value: "Across India, metro projects have consistently boosted property demand. Areas near metro stations often see faster development, higher rental demand, and rising property prices. This is why many real estate investors are closely watching the Chandigarh Tricity metro proposal." },
      { type: "image", value: "/blog/tricity-metro/metro-route-map.jpg", alt: "Chandigarh Tricity MRTS metro route map showing Phase I and Phase II corridors connecting Mohali, Chandigarh, Panchkula, and Zirakpur" },
      { type: "heading", value: "Why the Chandigarh Tricity Metro Is Important" },
      { type: "paragraph", value: "The Tricity is a unique urban cluster where people frequently travel between three cities for work, education, and business. Every day thousands of people commute from Mohali to Chandigarh for jobs and offices, Zirakpur to Chandigarh for business and shopping, and airport travellers moving toward Shaheed Bhagat Singh International Airport." },
      { type: "paragraph", value: "Currently, most commuters rely on cars, bikes, taxis, and buses. During peak hours, traffic congestion becomes a major issue. A metro system can bring several advantages \u2014 faster travel across the Tricity, reduced traffic congestion, better connectivity between residential and commercial areas, and lower travel costs over time." },
      { type: "paragraph", value: "Because of these benefits, metro systems usually trigger rapid urban development around station locations." },
      { type: "heading", value: "How Metro Projects Increase Property Prices" },
      { type: "paragraph", value: "In many Indian cities, property values have increased significantly near metro corridors. For example, areas around the metro network in Delhi and Bengaluru experienced strong real estate growth after metro connectivity improved." },
      { type: "image", value: "/blog/tricity-metro/metro-property-growth.jpg", alt: "Property price appreciation near metro corridors in Indian cities showing 15-30% growth" },
      { type: "paragraph", value: "There are three main reasons behind this trend. First, people prefer living near metro stations because easy access to transport reduces daily commuting stress. Homebuyers often look for properties within a short distance from metro stations." },
      { type: "paragraph", value: "Second, businesses move toward high-traffic areas. Commercial spaces like shops, restaurants, and offices tend to develop near metro stations because they attract more visitors." },
      { type: "paragraph", value: "Third, better transportation encourages developers to build new housing projects, commercial complexes, and retail spaces. This combination often results in rising property demand and increasing land value." },
      { type: "heading", value: "Mohali: The Emerging Investment Hub" },
      { type: "paragraph", value: "Mohali has become one of the most attractive real estate destinations near Chandigarh. Key reasons include wide roads and planned infrastructure, rapid growth of IT companies, and new residential sectors and townships." },
      { type: "paragraph", value: "If metro connectivity links Mohali directly to Chandigarh\u2019s major sectors, demand for homes in Mohali could rise even further. This could make real estate investment in Mohali particularly attractive for long-term investors." },
      { type: "image", value: "/blog/tricity-metro/mohali-investment-hub.jpg", alt: "Mohali emerging as a real estate investment hub with IT parks, wide roads, and premium residential sectors" },
      { type: "heading", value: "Zirakpur: Affordable Housing with Strong Connectivity" },
      { type: "paragraph", value: "Zirakpur has grown rapidly because of its strategic location between Punjab, Haryana, and Himachal Pradesh. Many homebuyers choose Zirakpur because property prices are relatively affordable, the area connects easily to major highways, and large residential projects are being developed." },
      { type: "paragraph", value: "If the metro expands toward Zirakpur or nearby areas, it could significantly increase housing demand in the region." },
      { type: "image", value: "/blog/tricity-metro/zirakpur-housing.jpg", alt: "Zirakpur affordable housing growth with strategic highway connectivity and residential development" },
      { type: "heading", value: "Airport Road Corridor" },
      { type: "paragraph", value: "The corridor leading to Shaheed Bhagat Singh International Airport has already become a key development zone. Several luxury residential projects and commercial spaces have emerged along this stretch." },
      { type: "paragraph", value: "Metro connectivity here could lead to higher property demand, growth of office spaces, and increased rental opportunities." },
      { type: "image", value: "/blog/tricity-metro/airport-road-corridor.jpg", alt: "Airport Road corridor development with luxury residential projects and commercial growth near Chandigarh International Airport" },
      { type: "heading", value: "Why Investors Are Paying Attention" },
      { type: "paragraph", value: "For real estate investors, infrastructure projects often signal future growth opportunities. The Chandigarh metro project is particularly interesting because it could reshape commuting patterns across the entire Tricity." },
      { type: "paragraph", value: "Early investors often benefit the most because property prices are lower before construction begins, demand increases as infrastructure develops, and rental income rises in well-connected areas. This is why many investors look for properties near proposed metro stations before prices start increasing." },
      { type: "image", value: "/blog/tricity-metro/investment-opportunity.jpg", alt: "Early investment advantage in Chandigarh Tricity metro corridor real estate" },
      { type: "heading", value: "Benefits for Homebuyers" },
      { type: "paragraph", value: "While investors focus on price appreciation, homebuyers benefit in other ways. Living near a metro station can offer shorter travel time to offices and schools, reduced dependence on cars and bikes, lower daily commuting costs, and easier access to commercial areas. These factors make metro-connected neighbourhoods more attractive for families." },
      { type: "heading", value: "Future Outlook for Chandigarh Tricity Real Estate" },
      { type: "paragraph", value: "The Tricity region already has several advantages \u2014 planned infrastructure, high quality of life, and strong educational and healthcare facilities. If the proposed metro system becomes operational, it could become one of the most important infrastructure developments in the region." },
      { type: "paragraph", value: "Over time, metro connectivity could lead to expansion of residential sectors, development of commercial hubs, and higher property values near metro stations. For investors and homebuyers alike, keeping an eye on the Chandigarh metro project could help identify promising real estate opportunities." },
      { type: "heading", value: "Conclusion" },
      { type: "paragraph", value: "The proposed metro system for Chandigarh, Mohali, and Zirakpur has the potential to transform both transportation and real estate in the region. Improved connectivity often leads to increased property demand, faster development, and higher long-term value." },
      { type: "paragraph", value: "For anyone considering real estate investment in the Chandigarh Tricity, areas near future metro corridors may become some of the most promising locations in the coming years." },
    ],
  },
};

const allSlugs = Object.keys(blogData);

export default function BlogDetailClient({ slug }: { slug: string }) {
  const post = blogData[slug];

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
