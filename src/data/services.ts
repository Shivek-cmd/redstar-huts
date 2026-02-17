export const services = [
  {
    number: "01",
    title: "Property Sales & Disposition",
    slug: "property-sales",
    description:
      "We position your property to attract the right buyers and achieve premium results. Our approach combines strategic market positioning, discreet marketing, and skilled negotiation to maximize value at every stage.",
    details: [
      "Comprehensive property valuation and pricing strategy",
      "Professional staging and photography coordination",
      "Targeted marketing to qualified buyer networks",
      "Expert negotiation and transaction management",
    ],
    image:
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80",
  },
  {
    number: "02",
    title: "Buyer Advisory & Acquisition",
    slug: "buyer-advisory",
    description:
      "Finding the right property requires more than browsing listings. We provide personalized search, rigorous due diligence, and strategic counsel to ensure your acquisition aligns with your lifestyle and financial objectives.",
    details: [
      "Personalized property search and shortlisting",
      "Market analysis and comparative evaluation",
      "Due diligence and risk assessment",
      "Offer strategy and closing coordination",
    ],
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80",
  },
  {
    number: "03",
    title: "Investment Consulting",
    slug: "investment-consulting",
    description:
      "Whether building a portfolio or optimizing existing holdings, our investment advisory service delivers data-driven insights and strategic guidance to maximize long-term returns.",
    details: [
      "Portfolio analysis and optimization",
      "Market opportunity identification",
      "Risk-adjusted return modeling",
      "Acquisition and disposition strategy",
    ],
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
  },
  {
    number: "04",
    title: "Market Research & Valuation",
    slug: "market-research",
    description:
      "Informed decisions start with accurate data. Our research team delivers comprehensive market analysis and valuation reports that form the foundation of confident real estate decision-making.",
    details: [
      "Neighborhood and submarket analysis",
      "Comparable sales and trend reporting",
      "Property valuation and appraisal coordination",
      "Custom research for specific investment criteria",
    ],
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  },
];

export const servicesData: Record<
  string,
  {
    number: string;
    title: string;
    tagline: string;
    description: string[];
    features: { title: string; text: string }[];
    images: { src: string; alt: string }[];
    cta: string;
  }
> = {
  "property-sales": {
    number: "01",
    title: "Property Sales & Disposition",
    tagline: "Maximize Value with Strategic Positioning",
    description: [
      "Selling a high-value property requires more than listing it on the market. At RedStar Huts, we craft a tailored disposition strategy that positions your asset to attract the most qualified buyers and achieve premium outcomes.",
      "Our team combines deep market intelligence with discreet, targeted marketing to ensure your property reaches the right audience at the right time. From initial valuation through final closing, every detail is managed with precision.",
    ],
    features: [
      {
        title: "Strategic Pricing",
        text: "Data-driven valuation and competitive positioning to establish the optimal asking price.",
      },
      {
        title: "Premium Marketing",
        text: "Professional photography, virtual tours, and targeted campaigns that showcase your property at its finest.",
      },
      {
        title: "Qualified Buyer Access",
        text: "Direct connections to our vetted network of high-net-worth buyers and institutional investors.",
      },
      {
        title: "Expert Negotiation",
        text: "Skilled negotiation to protect your interests and maximize returns at every stage.",
      },
    ],
    images: [
      { src: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1200&q=80", alt: "Luxury home exterior" },
      { src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80", alt: "Premium interior design" },
      { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80", alt: "Elegant living space" },
    ],
    cta: "Discuss Selling Your Property",
  },
  "buyer-advisory": {
    number: "02",
    title: "Buyer Advisory & Acquisition",
    tagline: "Find the Right Property with Confidence",
    description: [
      "Acquiring the right property is one of the most significant decisions you will make. Our Buyer Advisory service provides the insight, access, and strategic guidance needed to navigate the process with clarity and confidence.",
      "We go beyond browsing listings. Our team conducts rigorous market research, evaluates opportunities against your specific criteria, and manages every aspect of the acquisition process to ensure your investment aligns with your vision.",
    ],
    features: [
      { title: "Personalized Search", text: "A curated property search tailored to your lifestyle preferences, investment goals, and timeline." },
      { title: "Market Intelligence", text: "In-depth comparative analysis and neighborhood insights to inform every decision." },
      { title: "Due Diligence", text: "Comprehensive property assessment including inspections, legal review, and risk evaluation." },
      { title: "Acquisition Strategy", text: "Strategic offer positioning and negotiation to secure your property at the best possible terms." },
    ],
    images: [
      { src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=80", alt: "Modern luxury residence" },
      { src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80", alt: "Premium estate exterior" },
      { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80", alt: "Contemporary architecture" },
    ],
    cta: "Start Your Property Search",
  },
  "investment-consulting": {
    number: "03",
    title: "Investment Consulting",
    tagline: "Strategic Insights for Long-Term Returns",
    description: [
      "Real estate investment demands more than intuition. Our Investment Consulting service delivers the analytical rigor, market expertise, and strategic vision needed to build and optimize a high-performing property portfolio.",
      "Whether you are a first-time investor or managing a diversified portfolio, we provide data-driven guidance that identifies opportunities, mitigates risk, and maximizes long-term value creation.",
    ],
    features: [
      { title: "Portfolio Analysis", text: "Comprehensive review of existing holdings with recommendations for optimization and growth." },
      { title: "Opportunity Identification", text: "Proactive market scanning to uncover high-potential investment opportunities before they reach the broader market." },
      { title: "Financial Modeling", text: "Detailed projections including ROI analysis, cash flow modeling, and risk-adjusted return scenarios." },
      { title: "Exit Strategy", text: "Strategic planning for disposition timing and approach to maximize realized gains." },
    ],
    images: [
      { src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80", alt: "Investment property" },
      { src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80", alt: "Commercial real estate" },
      { src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80", alt: "Luxury development" },
    ],
    cta: "Explore Investment Opportunities",
  },
  "market-research": {
    number: "04",
    title: "Market Research & Valuation",
    tagline: "Informed Decisions Start with Accurate Data",
    description: [
      "In a dynamic real estate market, accurate data is the foundation of every sound decision. Our Market Research & Valuation service provides the comprehensive analysis and expert insight needed to act with confidence.",
      "From neighborhood-level trend analysis to detailed property valuations, our research team delivers actionable intelligence that supports buying, selling, and investment decisions at the highest level.",
    ],
    features: [
      { title: "Market Analysis", text: "In-depth examination of market conditions, pricing trends, and supply-demand dynamics in your target area." },
      { title: "Property Valuation", text: "Rigorous assessment using comparable sales, replacement cost, and income approaches for accurate pricing." },
      { title: "Trend Forecasting", text: "Forward-looking analysis of market trajectories to inform timing and strategy decisions." },
      { title: "Custom Research", text: "Bespoke reports tailored to your specific investment criteria, geographic focus, or asset class." },
    ],
    images: [
      { src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80", alt: "Urban skyline" },
      { src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80", alt: "Architectural detail" },
      { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80", alt: "Residential property" },
    ],
    cta: "Request a Market Report",
  },
};
