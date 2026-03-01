export interface BlogAuthor {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface BlogContentBlock {
  type: "paragraph" | "heading" | "image" | "list" | "callout" | "property-link";
  value: string;
  alt?: string;
  items?: string[];
  propertySlug?: string;
  propertyTitle?: string;
  level?: "h2" | "h3";
  calloutType?: "tip" | "warning" | "info";
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  tags: string[];
  date: string;
  updatedDate?: string;
  readTime: string;
  author: string;
  featured?: boolean;
  content: BlogContentBlock[];
  relatedProperties?: string[];
}

export const blogCategories = [
  "Market Insights",
  "Investment",
  "Buying",
  "Selling",
  "Design",
  "Lifestyle",
] as const;

export type BlogCategory = (typeof blogCategories)[number];

export const blogTags = [
  "Luxury Homes",
  "Market Trends",
  "Property Investment",
  "Interior Design",
  "Home Buying Tips",
  "Staging",
  "Architecture",
  "Valuation",
  "Mohali",
  "Zirakpur",
  "Chandigarh",
  "Punjab",
  "Smart Home",
  "IGBC",
  "Sustainability",
  "Real Estate Guide",
] as const;

export type BlogTag = (typeof blogTags)[number];

export const blogAuthors: Record<string, BlogAuthor> = {
  "naveen-kumar": {
    name: "Naveen Kumar",
    role: "Founder & Lead Advisor",
    image: "/team/naveen.jpg",
    bio: "With over 15 years of experience in premium real estate, Naveen leads RedStar Huts with a vision to deliver trusted guidance in property sales, acquisitions, and investment strategy across Mohali, Zirakpur, and Chandigarh.",
  },
  "krish-sharma": {
    name: "Krish Sharma",
    role: "Senior Property Consultant",
    image: "/team/krish.jpg",
    bio: "Krish brings deep market knowledge and analytical precision to every client engagement. He specializes in investment consulting and property valuation across the Tricity region.",
  },
  "disha-verma": {
    name: "Disha Verma",
    role: "Sales Consultant",
    image: "/team/disha.jpg",
    bio: "Disha is dedicated to helping families find their dream homes. With her warm approach and attention to detail, she guides buyers through every step of the property journey.",
  },
  "redstar-team": {
    name: "RedStar Huts Team",
    role: "Editorial",
    image: "/logo.png",
    bio: "Expert analysis and market intelligence from the RedStar Huts advisory team, delivering trusted guidance in luxury real estate across Punjab.",
  },
};

export const blogPosts: BlogPost[] = [
  {
    slug: "luxury-market-trends-2025",
    title: "Luxury Real Estate Market Trends to Watch in 2025",
    excerpt: "An in-depth look at the forces shaping high-end property markets and what discerning buyers and investors should anticipate in the year ahead.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    category: "Market Insights",
    tags: ["Market Trends", "Luxury Homes", "Property Investment"],
    date: "January 15, 2025",
    readTime: "6 min read",
    author: "naveen-kumar",
    featured: true,
    relatedProperties: [
      "3-4-plus-1-bhk-igbc-platinum-luxury-flats-for-sale-in-zirakpur-punjab",
      "3-4-plus-1-bhk-smart-home-ultra-luxury-flats-for-sale-in-zirakpur-punjab",
    ],
    content: [
      { type: "paragraph", value: "The luxury real estate market continues to evolve, shaped by shifting demographics, technological innovation, and changing lifestyle priorities. As we look ahead, several key trends are poised to define the premium property landscape for discerning buyers and investors." },
      { type: "heading", value: "The Rise of Lifestyle-Driven Purchases", level: "h2" },
      { type: "paragraph", value: "Today's luxury buyers are increasingly motivated by lifestyle considerations rather than pure investment returns. Properties that offer unique experiences — whether waterfront access, mountain retreats, or urban penthouses with panoramic views — command premium prices and attract the most qualified buyers." },
      { type: "callout", value: "In the Tricity region (Mohali, Zirakpur, Chandigarh), lifestyle-driven luxury projects with smart home features, IGBC certification, and resort-style amenities are seeing the highest demand in 2025.", calloutType: "tip" },
      { type: "image", value: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80", alt: "Luxury waterfront property showcasing lifestyle-driven design" },
      { type: "heading", value: "Technology Integration as a Standard", level: "h2" },
      { type: "paragraph", value: "Smart home technology has moved from a luxury add-on to a baseline expectation in premium properties. Buyers now expect integrated systems for climate, security, entertainment, and energy management — seamlessly designed to enhance rather than complicate daily living." },
      { type: "list", value: "Key smart home features buyers expect:", items: ["Voice-controlled AC and lighting systems", "Automated curtain and blind systems", "Motion and presence sensors", "Mobile app integration for home control", "EV charging points and energy management"] },
      { type: "property-link", value: "Looking for smart home luxury flats?", propertySlug: "3-4-plus-1-bhk-smart-home-ultra-luxury-flats-for-sale-in-zirakpur-punjab", propertyTitle: "3 & 4+1 BHK Smart Home Ultra Luxury Flats in Zirakpur" },
      { type: "heading", value: "Sustainability Meets Luxury", level: "h2" },
      { type: "paragraph", value: "Environmental consciousness is no longer at odds with luxury living. The most forward-thinking developments are incorporating sustainable materials, energy-efficient systems, and biophilic design principles that align premium aesthetics with environmental responsibility." },
      { type: "paragraph", value: "IGBC (Indian Green Building Council) certified projects are leading this shift, offering platinum-rated green buildings that reduce environmental impact without compromising on luxury finishes, amenities, or living experience." },
      { type: "property-link", value: "Explore IGBC Platinum certified luxury living:", propertySlug: "3-4-plus-1-bhk-igbc-platinum-luxury-flats-for-sale-in-zirakpur-punjab", propertyTitle: "3 & 4+1 BHK IGBC Platinum Luxury Flats in Zirakpur" },
      { type: "image", value: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80", alt: "Modern sustainable architecture with green building features" },
      { type: "heading", value: "Market Outlook for Punjab & Tricity", level: "h2" },
      { type: "paragraph", value: "Despite broader economic uncertainties, the luxury segment in Mohali, Zirakpur, and Chandigarh continues to demonstrate resilience. Limited inventory in prime locations, combined with strong demand from both domestic and NRI buyers, suggests that well-positioned premium properties will maintain their value and appeal throughout 2025." },
      { type: "callout", value: "The Tricity region offers some of the best value in India's luxury real estate market, with premium flats available at significantly lower per-sq-ft rates compared to Delhi NCR or Mumbai — making it an ideal time to invest.", calloutType: "info" },
    ],
  },
  {
    slug: "art-of-property-staging",
    title: "The Art of Property Staging for Premium Sales",
    excerpt: "How professional staging transforms spaces and drives higher offers in the luxury segment. A guide for sellers seeking maximum value.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    category: "Selling",
    tags: ["Staging", "Luxury Homes", "Home Buying Tips"],
    date: "December 28, 2024",
    readTime: "5 min read",
    author: "disha-verma",
    content: [
      { type: "paragraph", value: "In the luxury real estate market, presentation is not merely important — it is essential. Professional staging transforms a property from a house into an aspirational lifestyle, creating emotional connections that drive higher offers and faster sales." },
      { type: "heading", value: "Creating an Emotional Narrative", level: "h2" },
      { type: "paragraph", value: "The most effective staging goes beyond furniture placement. It tells a story about the life that awaits the buyer. Every room should evoke a feeling — tranquility in the bedroom, sophistication in the living areas, warmth in the kitchen. The goal is to make buyers envision their best life within these walls." },
      { type: "image", value: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80", alt: "Professionally staged living room with luxury furniture" },
      { type: "heading", value: "The Return on Investment", level: "h2" },
      { type: "paragraph", value: "Data consistently shows that professionally staged luxury properties sell faster and for higher prices than their unstaged counterparts. In the premium segment, where buyers expect perfection, staging typically delivers a return of five to ten times the initial investment." },
      { type: "heading", value: "Key Principles of Luxury Staging", level: "h2" },
      { type: "list", value: "Follow these guiding principles for effective luxury staging:", items: ["Emphasize natural light and open spaces", "Maintain a cohesive, neutral color palette", "Select furniture that complements the architecture", "Ensure every detail — from art placement to table settings — reflects quality", "Declutter and depersonalize while maintaining warmth"] },
      { type: "image", value: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=80", alt: "Elegant interior design showcasing staging principles" },
      { type: "paragraph", value: "The investment in professional staging is not an expense — it is a strategic decision that positions your property to achieve its maximum potential value in the market." },
    ],
  },
  {
    slug: "investment-portfolio-diversification",
    title: "Diversifying Your Real Estate Investment Portfolio",
    excerpt: "Strategic approaches to building a resilient property portfolio that balances risk and reward across market cycles.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    category: "Investment",
    tags: ["Property Investment", "Market Trends", "Real Estate Guide"],
    date: "December 10, 2024",
    readTime: "7 min read",
    author: "krish-sharma",
    relatedProperties: [
      "4-plus-1-bhk-premium-flat-for-sale-in-mohali-punjab",
    ],
    content: [
      { type: "paragraph", value: "A well-diversified real estate portfolio is the cornerstone of sustainable wealth creation. By spreading investments across property types, geographic markets, and risk profiles, investors can build resilience against market fluctuations while maintaining strong long-term returns." },
      { type: "heading", value: "Geographic Diversification", level: "h2" },
      { type: "paragraph", value: "Concentrating investments in a single market exposes your portfolio to localized economic risks. Strategic allocation across multiple high-growth markets — from established luxury enclaves to emerging premium destinations — creates a more balanced and resilient investment profile." },
      { type: "callout", value: "The Tricity region (Mohali-Zirakpur-Chandigarh) is emerging as one of India's top-performing real estate corridors, with 15-20% year-on-year appreciation in premium segments.", calloutType: "info" },
      { type: "image", value: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1200&q=80", alt: "Diverse real estate markets skyline" },
      { type: "heading", value: "Asset Class Mix", level: "h2" },
      { type: "paragraph", value: "Beyond residential properties, sophisticated investors are exploring opportunities in luxury commercial spaces, mixed-use developments, and hospitality assets. Each asset class offers distinct risk-return characteristics that can complement a predominantly residential portfolio." },
      { type: "heading", value: "Long-Term Perspective", level: "h2" },
      { type: "paragraph", value: "The most successful real estate investors share a common trait: patience. Real estate rewards long-term thinking, and the most significant returns are typically realized over holding periods of seven to fifteen years, allowing properties to appreciate through multiple market cycles." },
      { type: "property-link", value: "Explore premium investment opportunities:", propertySlug: "4-plus-1-bhk-premium-flat-for-sale-in-mohali-punjab", propertyTitle: "4+1 BHK Premium Flat in Mohali" },
      { type: "image", value: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80", alt: "Premium investment property exterior" },
      { type: "paragraph", value: "Our investment consulting team can help you evaluate your current holdings and develop a diversification strategy aligned with your financial objectives and risk tolerance." },
    ],
  },
  {
    slug: "guide-to-buying-first-luxury-home",
    title: "A Considered Guide to Buying Your First Luxury Home",
    excerpt: "From defining your vision to closing with confidence, everything first-time luxury buyers need to know about navigating the premium market.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    category: "Buying",
    tags: ["Home Buying Tips", "Luxury Homes", "Real Estate Guide"],
    date: "November 22, 2024",
    readTime: "8 min read",
    author: "naveen-kumar",
    relatedProperties: [
      "3-plus-1-bhk-ultra-luxury-flat-for-sale-in-mohali-punjab",
      "4-plus-1-bhk-premium-flat-for-sale-in-mohali-punjab",
    ],
    content: [
      { type: "paragraph", value: "Purchasing your first luxury property is a milestone that requires careful preparation, informed decision-making, and expert guidance. This guide distils the essential considerations for navigating the premium real estate market with clarity and confidence." },
      { type: "heading", value: "Define Your Vision", level: "h2" },
      { type: "paragraph", value: "Before exploring listings, take time to articulate what luxury means to you personally. Is it the location, the architectural style, the amenities, or the investment potential? Understanding your priorities will focus your search and prevent decision fatigue in a market filled with exceptional options." },
      { type: "image", value: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80", alt: "Luxury home interior with designer furnishings" },
      { type: "heading", value: "Assemble Your Advisory Team", level: "h2" },
      { type: "paragraph", value: "In the luxury segment, the right advisors are indispensable. A specialized buyer's agent, experienced real estate attorney, qualified inspector, and financial advisor together form a team that protects your interests and ensures informed decision-making at every stage." },
      { type: "callout", value: "RedStar Huts offers end-to-end buyer advisory services — from shortlisting properties to negotiation to paperwork. Contact us at +91 889 434 3056 for a free consultation.", calloutType: "tip" },
      { type: "heading", value: "Due Diligence is Non-Negotiable", level: "h2" },
      { type: "paragraph", value: "Premium properties demand premium due diligence. Beyond standard inspections, consider environmental assessments, title deep-dives, insurance evaluations, and community governance reviews. The thoroughness of your due diligence directly correlates with the confidence of your purchase." },
      { type: "list", value: "Essential due diligence checklist:", items: ["Verify RERA registration and approvals", "Check builder track record and delivery history", "Review title deed and encumbrance certificate", "Inspect construction quality (MIVAN vs conventional)", "Confirm possession timeline and penalties", "Evaluate resale value and rental potential"] },
      { type: "image", value: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80", alt: "Premium property details and finishings" },
      { type: "property-link", value: "Browse our curated luxury homes:", propertySlug: "3-plus-1-bhk-ultra-luxury-flat-for-sale-in-mohali-punjab", propertyTitle: "3+1 BHK Ultra Luxury Flat in Mohali" },
      { type: "paragraph", value: "The journey to your first luxury home should be as exceptional as the property itself. With the right preparation and guidance, it becomes an experience defined by confidence, clarity, and excitement." },
    ],
  },
  {
    slug: "architecture-trends-modern-estates",
    title: "Architecture Trends Defining Modern Estates",
    excerpt: "From biophilic design to smart integration, exploring the architectural movements that are redefining luxury residential living.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    category: "Design",
    tags: ["Architecture", "Interior Design", "Smart Home", "Sustainability"],
    date: "November 5, 2024",
    readTime: "5 min read",
    author: "redstar-team",
    relatedProperties: [
      "3-4-plus-1-bhk-smart-home-ultra-luxury-flats-for-sale-in-zirakpur-punjab",
    ],
    content: [
      { type: "paragraph", value: "The architecture of luxury estates is undergoing a fascinating evolution, blending innovation with timelessness. Contemporary designs are redefining what it means to live well, prioritizing connection to nature, material authenticity, and seamless indoor-outdoor transitions." },
      { type: "heading", value: "Biophilic Design", level: "h2" },
      { type: "paragraph", value: "The integration of natural elements into architectural design — living walls, water features, natural materials, and abundant greenery — creates spaces that promote wellbeing while maintaining a sense of refined luxury. This approach recognizes that true luxury is, at its core, a connection to the natural world." },
      { type: "image", value: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80", alt: "Biophilic architecture with natural materials and greenery" },
      { type: "heading", value: "Minimalist Grandeur", level: "h2" },
      { type: "paragraph", value: "Modern luxury estates are moving away from ornate excess toward a more restrained aesthetic that lets premium materials and spatial design speak for themselves. Clean lines, generous proportions, and thoughtful detailing create an impression of grandeur through simplicity rather than decoration." },
      { type: "heading", value: "Smart Home Integration", level: "h2" },
      { type: "paragraph", value: "The most advanced residential projects now come with fully automated smart home systems as standard — voice-controlled climate, automated lighting, motion sensors, and mobile app integration. These technologies are seamlessly integrated into the architecture rather than bolted on as afterthoughts." },
      { type: "property-link", value: "Experience smart home architecture:", propertySlug: "3-4-plus-1-bhk-smart-home-ultra-luxury-flats-for-sale-in-zirakpur-punjab", propertyTitle: "3 & 4+1 BHK Smart Home Ultra Luxury Flats in Zirakpur" },
      { type: "heading", value: "Indoor-Outdoor Living", level: "h2" },
      { type: "paragraph", value: "Retractable glass walls, covered outdoor rooms, and infinity-edge pools that blend into landscape views are becoming standard features in premium estates. These elements dissolve the boundaries between interior and exterior spaces, creating living environments that embrace their natural settings." },
      { type: "image", value: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&q=80", alt: "Modern estate with indoor-outdoor living design" },
      { type: "paragraph", value: "These architectural trends reflect a deeper shift in how we define luxury living — one that values experience, authenticity, and connection above all else." },
    ],
  },
  {
    slug: "understanding-property-valuation",
    title: "Understanding Property Valuation in Premium Markets",
    excerpt: "A comprehensive breakdown of how luxury properties are valued and what factors influence pricing at the highest end of the market.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    category: "Market Insights",
    tags: ["Valuation", "Market Trends", "Property Investment"],
    date: "October 18, 2024",
    readTime: "6 min read",
    author: "krish-sharma",
    content: [
      { type: "paragraph", value: "Accurate property valuation is the foundation of every informed real estate decision. In the premium market, where properties are unique and comparable sales may be limited, understanding the valuation process is essential for both buyers and sellers." },
      { type: "heading", value: "The Three Approaches to Valuation", level: "h2" },
      { type: "paragraph", value: "Professional valuers typically employ three methodologies: the sales comparison approach (analyzing recent comparable transactions), the cost approach (estimating replacement value), and the income approach (projecting potential rental returns). In luxury markets, the sales comparison approach is most commonly relied upon, though all three may be considered." },
      { type: "list", value: "Valuation methodologies explained:", items: ["Sales Comparison — benchmarks against recent comparable transactions", "Cost Approach — estimates land value plus construction replacement cost", "Income Approach — projects potential rental yield and capitalizes it"] },
      { type: "image", value: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80", alt: "Property valuation analysis and documentation" },
      { type: "heading", value: "Beyond the Numbers", level: "h2" },
      { type: "paragraph", value: "Luxury properties often possess intangible qualities — provenance, architectural significance, privacy, views — that resist simple quantification. Experienced valuers understand how to account for these factors, drawing on deep market knowledge and professional judgment to arrive at figures that reflect true market value." },
      { type: "heading", value: "When to Seek a Valuation", level: "h2" },
      { type: "paragraph", value: "Whether you are considering a purchase, planning a sale, reviewing your portfolio, or assessing insurance needs, a professional valuation provides the objective foundation for confident decision-making. In dynamic markets, regular revaluations ensure your understanding of asset value remains current." },
      { type: "callout", value: "In the Tricity market, property values can vary significantly between sectors and localities. Always get a professional valuation from someone with local market expertise before making investment decisions.", calloutType: "warning" },
      { type: "image", value: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1200&q=80", alt: "Luxury property exterior for assessment" },
      { type: "paragraph", value: "Our Market Research & Valuation team delivers rigorous, independent assessments that inform confident decision-making at every level. Contact RedStar Huts for a complimentary consultation." },
    ],
  },
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getBlogsByCategory(category: string): BlogPost[] {
  return blogPosts.filter((p) => p.category === category);
}

export function getBlogsByTag(tag: string): BlogPost[] {
  return blogPosts.filter((p) => p.tags.includes(tag));
}

export function getRelatedBlogs(slug: string, limit = 3): BlogPost[] {
  const current = getBlogBySlug(slug);
  if (!current) return blogPosts.slice(0, limit);
  const scored = blogPosts
    .filter((p) => p.slug !== slug)
    .map((p) => {
      let score = 0;
      if (p.category === current.category) score += 3;
      score += p.tags.filter((t) => current.tags.includes(t)).length;
      return { post: p, score };
    })
    .sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map((s) => s.post);
}

export function getAllCategories(): string[] {
  return [...new Set(blogPosts.map((p) => p.category))];
}

export function getAllTags(): string[] {
  return [...new Set(blogPosts.flatMap((p) => p.tags))];
}

export function generateTableOfContents(content: BlogContentBlock[]): { id: string; title: string; level: string }[] {
  return content
    .filter((b) => b.type === "heading")
    .map((b) => ({
      id: b.value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
      title: b.value,
      level: b.level || "h2",
    }));
}
