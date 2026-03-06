export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  tags: string[];
  date: string;
  readTime: string;
  authorSlug: string;
  featured?: boolean;
  relatedPropertySlugs?: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "chandigarh-tricity-metro-project-real-estate-opportunity",
    title: "Chandigarh Tricity Metro Project: Why Property Near Metro Stations Could Become the Next Big Real Estate Opportunity",
    excerpt: "The proposed metro rail system for Chandigarh, Mohali, and Zirakpur could reshape real estate across the Tricity. Discover which areas may benefit most and why investors are watching closely.",
    image: "/blog/tricity-metro/hero.jpg",
    category: "Infrastructure",
    tags: ["Chandigarh", "Metro", "Tricity", "Real Estate", "Investment", "Mohali", "Zirakpur"],
    date: "March 6, 2026",
    readTime: "10 min read",
    authorSlug: "krish",
    featured: false,
    relatedPropertySlugs: [
      "3-plus-1-bhk-premium-flat-for-sale-in-mohali-punjab-2901-sq-ft",
      "3-plus-1-bhk-ultra-luxury-flat-for-sale-in-mohali-punjab",
      "3-4-plus-1-bhk-igbc-platinum-luxury-flats-for-sale-in-zirakpur-punjab",
      "4-plus-1-bhk-premium-flat-for-sale-in-zirakpur-punjab",
    ],
  },
  {
    slug: "new-link-road-mohali-2026-impact-property-prices-connectivity",
    title: "New 7.5 km Link Road in Mohali: A Major Boost for Real Estate and Connectivity",
    excerpt: "Discover how GMADA's proposed 7.5 km link road will reduce Airport Road congestion, improve access to Aerocity and IT City, and drive property price appreciation across Mohali.",
    image: "/blog/mohali-link-road/hero.jpg",
    category: "Infrastructure",
    tags: ["Mohali", "Link Road", "GMADA", "Infrastructure", "Airport Road", "Property Investment"],
    date: "March 2, 2026",
    readTime: "7 min read",
    authorSlug: "krish",
    featured: false,
    relatedPropertySlugs: [
      "3-plus-1-bhk-premium-flat-for-sale-in-mohali-punjab-2901-sq-ft",
      "3-plus-1-bhk-ultra-luxury-flat-for-sale-in-mohali-punjab",
      "4-plus-1-bhk-premium-flat-for-sale-in-mohali-punjab",
    ],
  },
  {
    slug: "smart-home-ultra-luxury-flats-zirakpur-patiala-highway-ready-to-move",
    title: "Smart Home Ultra Luxury Flats on Zirakpur-Patiala Highway: Ready to Move, Future-Ready Living",
    excerpt: "A ready-to-move IGBC certified project on Zirakpur-Patiala Highway is setting a new benchmark with voice-controlled automation, MIVAN construction, rooftop pool, and pet-friendly zones. Here is what makes it different.",
    image: "/properties/RSH-ZIR-003/living-room.jpg",
    category: "Property Spotlight",
    tags: ["Zirakpur", "Smart Home", "IGBC", "Ready to Move", "Luxury Flat"],
    date: "February 24, 2026",
    readTime: "7 min read",
    authorSlug: "disha",
    featured: true,
    relatedPropertySlugs: ["3-4-plus-1-bhk-smart-home-ultra-luxury-flats-for-sale-in-zirakpur-punjab"],
  },
  {
    slug: "igbc-platinum-luxury-flats-zirakpur-pr7-road-why-invest",
    title: "IGBC Platinum Luxury Flats on PR7 Road Zirakpur: Why Families and Investors Are Taking Notice",
    excerpt: "An IGBC Platinum certified high-rise project on PR7 Road, Zirakpur is redefining luxury living with MIVAN construction, personal lifts, wraparound balconies, and 15+ clubhouse activities. Here is why this project deserves your attention.",
    image: "/properties/RSH-ZIR-002/living-room.jpg",
    category: "Property Spotlight",
    tags: ["Zirakpur", "IGBC Platinum", "MIVAN", "Investment", "PR7 Road"],
    date: "February 24, 2026",
    readTime: "7 min read",
    authorSlug: "naveen",
    relatedPropertySlugs: ["3-4-plus-1-bhk-igbc-platinum-luxury-flats-for-sale-in-zirakpur-punjab"],
  },
  {
    slug: "4-plus-1-bhk-premium-flat-zirakpur-why-buy-now",
    title: "4+1 BHK Premium Flat in Zirakpur: Why This Is the Right Time to Buy",
    excerpt: "Zirakpur is one of the fastest growing residential corridors in the Chandigarh Tri-City region. Here is why a 4+1 BHK premium flat with clubhouse, swimming pool, and earthquake-resistant design is the smart choice for families and investors.",
    image: "/properties/RSH-ZIR-001/living-room.jpg",
    category: "Property Spotlight",
    tags: ["Zirakpur", "4+1 BHK", "Premium Flat", "Tri-City", "Family Home"],
    date: "February 24, 2026",
    readTime: "7 min read",
    authorSlug: "krish",
    relatedPropertySlugs: ["4-plus-1-bhk-premium-flat-for-sale-in-zirakpur-punjab"],
  },
  {
    slug: "dholera-smart-city-plots-investment-opportunity-2026",
    title: "Dholera Smart City Plots: 2026 Investment Opportunity Explained",
    excerpt: "Dholera SIR is India's first greenfield smart city with airport, expressway and DMIC connectivity. Here's why residential plots in Dholera are drawing serious investor attention in 2026.",
    image: "/properties/RSH-DHO-001/expressway-aerial.jpg",
    category: "Investment",
    tags: ["Dholera", "Smart City", "Plots", "Gujarat", "DMIC"],
    date: "February 22, 2026",
    readTime: "7 min read",
    authorSlug: "shivek",
    relatedPropertySlugs: ["residential-plots-for-sale-in-dholera-smart-city-gujarat"],
  },
  {
    slug: "urban-challenge-fund-india-real-estate-impact-4-lakh-crore",
    title: "The \u20b94 Lakh Crore Game-Changer: How India\u2019s Urban Challenge Fund Is Reshaping Real Estate",
    excerpt: "The Urban Challenge Fund (UCF), a \u20b91 lakh crore initiative approved in February 2026, is set to leverage \u20b94 lakh crore into urban infrastructure over 5\u20138 years. Here is what it means for real estate businesses, developers, and investors across India.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    category: "Investment",
    tags: ["UCF", "Infrastructure", "Policy", "Urban Development", "India"],
    date: "February 20, 2026",
    readTime: "9 min read",
    authorSlug: "naveen",
  },
  {
    slug: "why-mohali-is-the-next-premium-real-estate-destination",
    title: "Why Mohali Is the Next Premium Real Estate Destination",
    excerpt: "Mohali has rapidly evolved from a satellite town of Chandigarh into one of North India's most sought-after residential destinations, driven by world-class infrastructure and a surge in premium developments.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    category: "Local Insights",
    tags: ["Mohali", "North India", "IT City", "Premium Property", "NRI"],
    date: "February 17, 2026",
    readTime: "7 min read",
    authorSlug: "disha",
    relatedPropertySlugs: [
      "3-plus-1-bhk-premium-flat-for-sale-in-mohali-punjab-2901-sq-ft",
      "3-plus-1-bhk-ultra-luxury-flat-for-sale-in-mohali-punjab",
      "4-plus-1-bhk-premium-flat-for-sale-in-mohali-punjab",
    ],
  },
  {
    slug: "luxury-living-in-chandigarh-investment-guide",
    title: "Luxury Living in Chandigarh: A Complete Investment Guide",
    excerpt: "A comprehensive guide to investing in Chandigarh\u2019s luxury real estate market \u2014 from sector analysis to NRI opportunities and the Tri-City advantage.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    category: "Investment",
    tags: ["Chandigarh", "Investment Guide", "NRI", "Luxury", "Tri-City"],
    date: "February 10, 2026",
    readTime: "8 min read",
    authorSlug: "shivek",
  },
  {
    slug: "zirakpur-real-estate-emerging-opportunities",
    title: "Zirakpur Real Estate: Emerging Opportunities for Smart Investors",
    excerpt: "Strategically positioned on the Chandigarh-Ambala highway, Zirakpur offers investors a unique blend of accessibility, affordability, and growth potential in the Tri-City region.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    category: "Market Insights",
    tags: ["Zirakpur", "Investment", "Tri-City", "Affordable Luxury", "Growth"],
    date: "February 3, 2026",
    readTime: "6 min read",
    authorSlug: "krish",
    relatedPropertySlugs: [
      "3-4-plus-1-bhk-smart-home-ultra-luxury-flats-for-sale-in-zirakpur-punjab",
      "3-4-plus-1-bhk-igbc-platinum-luxury-flats-for-sale-in-zirakpur-punjab",
      "4-plus-1-bhk-premium-flat-for-sale-in-zirakpur-punjab",
    ],
  },
  {
    slug: "rise-of-tri-city-real-estate-mohali-chandigarh-zirakpur",
    title: "The Rise of Tri-City Real Estate: Mohali, Chandigarh & Zirakpur",
    excerpt: "The Chandigarh Tri-City region has quietly become one of India\u2019s most compelling real estate markets, combining planned elegance, tech-driven growth, and commercial energy.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    category: "Local Insights",
    tags: ["Tri-City", "Mohali", "Chandigarh", "Zirakpur", "Market Overview"],
    date: "January 27, 2026",
    readTime: "8 min read",
    authorSlug: "naveen",
  },
  {
    slug: "beverly-hills-vs-manhattan-luxury-markets",
    title: "Beverly Hills vs Manhattan: Comparing America\u2019s Most Prestigious Markets",
    excerpt: "Beverly Hills and Manhattan represent two distinct philosophies of luxury living. For high-net-worth buyers, understanding their fundamental differences is essential.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    category: "Market Insights",
    tags: ["Luxury Markets", "Beverly Hills", "Manhattan", "Global"],
    date: "January 20, 2026",
    readTime: "7 min read",
    authorSlug: "shivek",
  },
  {
    slug: "lake-tahoe-luxury-homes-buyer-guide",
    title: "Lake Tahoe Luxury Homes: What Buyers Need to Know",
    excerpt: "Lake Tahoe represents one of America\u2019s most unique luxury real estate markets \u2014 a year-round alpine destination where natural beauty meets world-class recreation.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    category: "Buying",
    tags: ["Lake Tahoe", "Buyer Guide", "Luxury Homes", "Global"],
    date: "January 13, 2026",
    readTime: "6 min read",
    authorSlug: "disha",
  },
  {
    slug: "luxury-market-trends-2025",
    title: "Luxury Real Estate Market Trends to Watch",
    excerpt: "An in-depth look at the forces shaping high-end property markets and what discerning buyers and investors should anticipate in the year ahead.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    category: "Market Insights",
    tags: ["Market Trends", "Luxury", "2025", "North India"],
    date: "January 15, 2026",
    readTime: "6 min read",
    authorSlug: "krish",
  },
  {
    slug: "art-of-property-staging",
    title: "The Art of Property Staging for Premium Sales",
    excerpt: "How professional staging transforms spaces and drives higher offers in the luxury segment. A guide for sellers seeking maximum value.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    category: "Selling",
    tags: ["Staging", "Selling Tips", "Luxury", "Premium Sales"],
    date: "December 28, 2025",
    readTime: "5 min read",
    authorSlug: "disha",
  },
  {
    slug: "investment-portfolio-diversification",
    title: "Diversifying Your Real Estate Investment Portfolio",
    excerpt: "Strategic approaches to building a resilient property portfolio that balances risk and reward across market cycles.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    category: "Investment",
    tags: ["Portfolio", "Diversification", "Investment Strategy", "NRI"],
    date: "December 10, 2025",
    readTime: "7 min read",
    authorSlug: "naveen",
  },
  {
    slug: "guide-to-buying-first-luxury-home",
    title: "A Considered Guide to Buying Your First Luxury Home",
    excerpt: "From defining your vision to closing with confidence, everything first-time luxury buyers need to know about navigating the premium market.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    category: "Buying",
    tags: ["First Home", "Buyer Guide", "Luxury", "Tips"],
    date: "November 22, 2025",
    readTime: "8 min read",
    authorSlug: "shivek",
  },
  {
    slug: "architecture-trends-modern-estates",
    title: "Architecture Trends Defining Modern Estates",
    excerpt: "From biophilic design to smart integration, exploring the architectural movements that are redefining luxury residential living.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    category: "Design",
    tags: ["Architecture", "Biophilic Design", "Smart Home", "Modern"],
    date: "November 5, 2025",
    readTime: "5 min read",
    authorSlug: "krish",
  },
  {
    slug: "understanding-property-valuation",
    title: "Understanding Property Valuation in Premium Markets",
    excerpt: "A comprehensive breakdown of how luxury properties are valued and what factors influence pricing at the highest end of the market.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    category: "Market Insights",
    tags: ["Valuation", "Market Analysis", "Premium Property", "Pricing"],
    date: "October 18, 2025",
    readTime: "6 min read",
    authorSlug: "naveen",
  },
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getFeaturedBlog(): BlogPost | undefined {
  return blogPosts.find((p) => p.featured);
}

export function getAllCategories(): string[] {
  const cats = new Set(blogPosts.map((p) => p.category));
  return Array.from(cats);
}

export function getAllTags(): string[] {
  const tags = new Set(blogPosts.flatMap((p) => p.tags));
  return Array.from(tags);
}

export function getBlogsByCategory(category: string): BlogPost[] {
  return blogPosts.filter((p) => p.category === category);
}

export function getRelatedBlogs(slug: string, limit = 3): BlogPost[] {
  const current = getBlogBySlug(slug);
  if (!current) return blogPosts.filter((p) => p.slug !== slug).slice(0, limit);
  return blogPosts
    .filter((p) => p.slug !== slug)
    .sort((a, b) => {
      const aScore =
        (a.category === current.category ? 2 : 0) +
        a.tags.filter((t) => current.tags.includes(t)).length;
      const bScore =
        (b.category === current.category ? 2 : 0) +
        b.tags.filter((t) => current.tags.includes(t)).length;
      return bScore - aScore;
    })
    .slice(0, limit);
}
