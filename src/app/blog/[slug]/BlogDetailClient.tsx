"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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
  "urban-challenge-fund-india-real-estate-impact-4-lakh-crore": {
    title: "The \u20B94 Lakh Crore Game-Changer: How India\u2019s Urban Challenge Fund Is Reshaping Real Estate",
    category: "Investment",
    date: "February 20, 2026",
    readTime: "9 min read",
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80",
    content: [
      { type: "paragraph", value: "For decades, urban development in India often felt like a slow, top-down process. Government grants flowed, but the pace of transformation was glacial, and private investment remained hesitant. Enter the Urban Challenge Fund (UCF), a \u20B91 lakh crore initiative approved in February 2026, and the game has changed entirely." },
      { type: "paragraph", value: "This is not just another government scheme. It is a paradigm shift that will leverage an astonishing \u20B94 lakh crore into urban infrastructure over the next 5\u20138 years. For real estate businesses \u2014 from mega-developers to niche startups \u2014 understanding the UCF is not just smart. It is crucial for survival and growth." },
      { type: "heading", value: "What Exactly Is the Urban Challenge Fund?" },
      { type: "paragraph", value: "Forget the old \u201Cgive money and hope\u201D approach. The UCF operates on a \u201C25-50-25\u201D principle. The Central Government provides 25% of a project\u2019s cost as assistance. The city or state must raise 50% of the project cost from the open market through loans, municipal bonds, and Public-Private Partnerships. The remaining 25% comes from the state or local body\u2019s own resources, often through land value capture." },
      { type: "paragraph", value: "This means cities are now being challenged to become financially bankable, reform-oriented, and attractive to private capital. They can win funding for projects across three key areas: Cities as Growth Hubs (building new greenfield urban extensions and transit corridors), Creative Redevelopment (revitalizing decaying city centres, heritage zones, and brownfield sites), and Water and Sanitation (modernizing essential services for a healthier urban environment)." },
      { type: "image", value: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=80", alt: "Urban infrastructure development in India" },
      { type: "heading", value: "The Rise of Public-Private Partnerships" },
      { type: "paragraph", value: "This is the biggest immediate impact of the UCF. Cities need the private sector to bring in that 50% market funding. Developers become partners, not just contractors. Expect more Hybrid Annuity Models (HAMs) and Build-Operate-Transfer (BOT) projects, especially for large-scale townships, ring roads, and integrated urban centres." },
      { type: "paragraph", value: "The 25% Central assistance acts as a de-risking mechanism, making bank loans and private equity investments in urban infrastructure projects significantly more attractive. For real estate businesses, this opens the door to long-term, government-backed revenue streams." },
      { type: "heading", value: "The Unlocking of Land Value" },
      { type: "paragraph", value: "UCF projects are specifically designed to maximise Land Value Capture (LVC). New Growth Hubs like Dholera or AURIC will see massive investment in trunk infrastructure \u2014 roads, utilities, and transit \u2014 that instantly escalates the value of surrounding land. Previously choked city centres or old industrial zones, once revitalised with UCF funds, will become prime targets for high-density, high-value commercial and residential redevelopment." },
      { type: "image", value: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80", alt: "Real estate land value appreciation in Indian cities" },
      { type: "heading", value: "Focus on Bankable and Sustainable Assets" },
      { type: "paragraph", value: "The UCF demands accountability. Cities applying for UCF funds are graded on their governance and reform implementation. This means faster approvals, less red tape, and more predictable project timelines for developers aligned with the city\u2019s vision." },
      { type: "paragraph", value: "Projects that incorporate sustainable practices \u2014 zero-waste systems, water recycling, energy efficiency \u2014 and smart city technologies like IoT and digital monitoring will get priority. For startups in civic-tech and prop-tech, this is a massive new market. A dedicated \u20B95,000 crore Credit Repayment Guarantee for smaller cities means organised real estate development will expand beyond saturated metros, opening up new, untapped markets in Tier-II and Tier-III cities." },
      { type: "heading", value: "The End of Urban Sprawl, the Beginning of Planned Growth" },
      { type: "paragraph", value: "With a strong emphasis on Transit-Oriented Development (TOD) and creating counter-magnet cities, the UCF will curb haphazard urban sprawl. Real estate developments will be concentrated around efficient public transport networks, fostering denser, more liveable, and well-connected communities. This is a fundamental shift in how Indian cities will grow." },
      { type: "heading", value: "What This Means for Real Estate in Punjab and the Tri-City Region" },
      { type: "paragraph", value: "For markets like Mohali, Chandigarh, and Zirakpur, the UCF creates significant tailwinds. Improved urban infrastructure, better transit connectivity, and government-backed development corridors will accelerate appreciation in premium residential segments. Investors and homebuyers who position themselves early in UCF-aligned growth corridors stand to benefit the most." },
      { type: "paragraph", value: "At RedStar Huts, we track policy developments like the UCF closely because they directly impact where value is created in the market. Whether you are a developer seeking partnership opportunities or a buyer evaluating long-term investment potential, our advisory team can help you navigate this new landscape with precision." },
    ],
  },
  "why-mohali-is-the-next-premium-real-estate-destination": {
    title: "Why Mohali Is the Next Premium Real Estate Destination",
    category: "Local Insights",
    date: "February 17, 2026",
    readTime: "7 min read",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80",
    content: [
      { type: "paragraph", value: "Mohali has rapidly evolved from a satellite town of Chandigarh into one of North India's most sought-after residential destinations. With world-class infrastructure, proximity to the international airport, and a surge in premium developments, Mohali is now firmly on the radar of discerning buyers and institutional investors alike." },
      { type: "heading", value: "Infrastructure That Drives Value" },
      { type: "paragraph", value: "The Mohali International Airport, the upcoming metro corridor connecting Mohali to Chandigarh, and the expansion of key arterial roads have transformed connectivity. Sectors 66A through 80 have seen the most significant appreciation, with premium 3+1 and 4+1 BHK residences commanding attention from buyers relocating from Delhi, Mumbai, and NRI investors." },
      { type: "image", value: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80", alt: "Premium residential development in Mohali" },
      { type: "heading", value: "The IT Corridor Effect" },
      { type: "paragraph", value: "IT City Mohali and the surrounding commercial ecosystem have created sustained demand for premium housing. Professionals seeking walkable, well-connected residences close to their workplaces are driving the luxury segment forward. This organic demand ensures long-term value stability unlike speculative markets." },
      { type: "heading", value: "Investment Potential" },
      { type: "paragraph", value: "With property prices still 40-60% lower than equivalent developments in Gurgaon or Noida, Mohali represents exceptional value for investors. The combination of GMADA-regulated development, improving social infrastructure, and a growing professional class makes this market uniquely positioned for sustained appreciation over the next decade." },
      { type: "image", value: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80", alt: "Luxury living spaces in Mohali" },
      { type: "paragraph", value: "At RedStar Huts, we have deep expertise in the Mohali premium market. Whether you are looking to acquire your dream residence or evaluate investment opportunities, our team provides the local insight and strategic guidance you need." },
    ],
  },
  "luxury-living-in-chandigarh-investment-guide": {
    title: "Luxury Living in Chandigarh: A Complete Investment Guide",
    category: "Investment",
    date: "February 10, 2026",
    readTime: "8 min read",
    heroImage: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1600&q=80",
    content: [
      { type: "paragraph", value: "Chandigarh, India's most planned city, has long been synonymous with quality of life. Today, the city's luxury real estate market is experiencing a renaissance, driven by discerning buyers who value the unique combination of urban sophistication, green spaces, and cultural richness that only the City Beautiful can offer." },
      { type: "heading", value: "Sectors That Command Premium" },
      { type: "paragraph", value: "The established sectors of Chandigarh — particularly Sectors 2 through 11 in the original layout — continue to command the highest premiums due to their generous plot sizes, mature tree-lined avenues, and proximity to the Capitol Complex. Meanwhile, the southern sectors and areas along the Madhya Marg corridor are emerging as new luxury hotspots with contemporary developments." },
      { type: "image", value: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80", alt: "Chandigarh luxury residential area" },
      { type: "heading", value: "Why NRI Investors Choose Chandigarh" },
      { type: "paragraph", value: "For NRI investors, Chandigarh offers a compelling proposition: a stable, well-governed market with consistent appreciation, excellent rental yields from the professional class, and the emotional connection of owning property in one of India's most liveable cities. The absence of speculative excess that plagues other metros makes Chandigarh a safer, more predictable investment destination." },
      { type: "heading", value: "The Tri-City Advantage" },
      { type: "paragraph", value: "Chandigarh's position at the centre of the Tri-City region — encompassing Mohali and Panchkula — amplifies its strategic value. Investors gain exposure to three distinct but interconnected markets, each with its own growth trajectory and demand drivers." },
      { type: "image", value: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80", alt: "Premium interiors in Chandigarh" },
      { type: "paragraph", value: "Our advisory team specialises in Chandigarh's premium segment. From heritage kothi restorations to contemporary luxury apartments, we guide clients through every aspect of acquisition and investment in the City Beautiful." },
    ],
  },
  "zirakpur-real-estate-emerging-opportunities": {
    title: "Zirakpur Real Estate: Emerging Opportunities for Smart Investors",
    category: "Market Insights",
    date: "February 3, 2026",
    readTime: "6 min read",
    heroImage: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1600&q=80",
    content: [
      { type: "paragraph", value: "Zirakpur has emerged as one of the most dynamic real estate markets in the Chandigarh Tri-City region. Strategically positioned on the Chandigarh-Ambala highway with direct connectivity to NH-22, this rapidly growing town offers investors a unique blend of accessibility, affordability, and growth potential." },
      { type: "heading", value: "Strategic Location Advantage" },
      { type: "paragraph", value: "Zirakpur serves as the gateway to Chandigarh for anyone travelling from Delhi, Haryana, or Himachal Pradesh. This natural transit advantage has attracted premium commercial and residential developments, with areas like VIP Road, Patiala Road, and the Aerocity corridor seeing particularly strong demand." },
      { type: "image", value: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80", alt: "Zirakpur skyline development" },
      { type: "heading", value: "Rental Yield Potential" },
      { type: "paragraph", value: "Zirakpur's proximity to Chandigarh's commercial hubs, combined with significantly lower property prices, creates attractive rental yield opportunities. Young professionals and families who work in Chandigarh or Mohali increasingly prefer Zirakpur for its modern housing stock and comprehensive amenities at accessible price points." },
      { type: "heading", value: "Key Developments to Watch" },
      { type: "paragraph", value: "Several premium township projects are transforming Zirakpur from a transit town into a self-sufficient residential hub. Integrated developments with clubhouses, commercial spaces, and educational institutions are attracting a new demographic of quality-conscious buyers who demand more than just four walls." },
      { type: "image", value: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80", alt: "Modern residential projects in Zirakpur" },
      { type: "paragraph", value: "If you are considering Zirakpur for investment or residence, our team can provide market intelligence and property recommendations tailored to your objectives." },
    ],
  },
  "beverly-hills-vs-manhattan-luxury-markets": {
    title: "Beverly Hills vs Manhattan: Comparing America's Most Prestigious Markets",
    category: "Market Insights",
    date: "January 27, 2026",
    readTime: "7 min read",
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80",
    content: [
      { type: "paragraph", value: "Beverly Hills and Manhattan represent two distinct philosophies of luxury living in the United States. One offers sprawling estates under California sunshine; the other delivers vertical grandeur amid the world's most iconic skyline. For high-net-worth buyers choosing between these two legendary markets, understanding their fundamental differences is essential." },
      { type: "heading", value: "Lifestyle and Space" },
      { type: "paragraph", value: "Beverly Hills delivers the quintessential California luxury experience — gated estates with private pools, manicured grounds, and indoor-outdoor living. Manhattan, by contrast, concentrates luxury vertically: penthouse views, full-service buildings, and doorstep access to world-class dining, culture, and commerce. The choice ultimately reflects a buyer's lifestyle priorities." },
      { type: "image", value: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80", alt: "Beverly Hills luxury estate" },
      { type: "heading", value: "Investment Characteristics" },
      { type: "paragraph", value: "Manhattan's luxury market tends to offer more liquidity and consistent demand from both domestic and international buyers. Beverly Hills properties, while less liquid, often deliver stronger long-term appreciation due to limited land supply and the enduring global appeal of the 90210 zip code. Both markets have proven resilient through multiple economic cycles." },
      { type: "heading", value: "Price Dynamics" },
      { type: "paragraph", value: "Entry points differ significantly: a luxury apartment in Manhattan's most prestigious buildings starts around $3 million, while a comparable Beverly Hills estate begins at $5 million or more. However, per-square-foot prices in Manhattan often exceed Beverly Hills, reflecting the premium placed on urban convenience and scarcity." },
      { type: "image", value: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&q=80", alt: "Manhattan skyline penthouse view" },
      { type: "paragraph", value: "Our advisory team has deep expertise in both markets. Whether you are drawn to the sun-drenched estates of Beverly Hills or the vertical luxury of Manhattan, we can guide your acquisition with precision and local knowledge." },
    ],
  },
  "rise-of-tri-city-real-estate-mohali-chandigarh-zirakpur": {
    title: "The Rise of Tri-City Real Estate: Mohali, Chandigarh & Zirakpur",
    category: "Local Insights",
    date: "January 20, 2026",
    readTime: "8 min read",
    heroImage: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1600&q=80",
    content: [
      { type: "paragraph", value: "The Chandigarh Tri-City region — encompassing Chandigarh, Mohali, and Zirakpur — has quietly become one of India's most compelling real estate markets. Combining the planned elegance of Chandigarh, the tech-driven growth of Mohali, and the commercial energy of Zirakpur, this interconnected urban cluster offers diversified opportunities for buyers and investors at every level." },
      { type: "heading", value: "A Market Greater Than Its Parts" },
      { type: "paragraph", value: "What makes the Tri-City unique is the complementary nature of its three components. Chandigarh provides the administrative and cultural anchor, Mohali drives economic growth through its IT and pharmaceutical sectors, and Zirakpur serves as the commercial and transit hub connecting the region to the national highway network. Together, they create a self-reinforcing ecosystem that supports sustained real estate demand." },
      { type: "image", value: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=80", alt: "Tri-City aerial development view" },
      { type: "heading", value: "Infrastructure Catalysts" },
      { type: "paragraph", value: "The proposed Chandigarh Metro, the expansion of the international airport, new flyovers and expressways, and the development of GMADA-regulated sectors are collectively transforming the region's connectivity and liveability. These infrastructure investments are the kind of long-term catalysts that institutional investors specifically seek when evaluating emerging markets." },
      { type: "heading", value: "Who Is Buying" },
      { type: "paragraph", value: "The buyer profile in the Tri-City has evolved significantly. Beyond local professionals and business owners, the market now attracts NRI investors from Canada, the UK, and the Middle East, Delhi-NCR professionals seeking better quality of life, and South India-based investors looking for high-growth markets outside their traditional geographies." },
      { type: "image", value: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80", alt: "Modern Tri-City development" },
      { type: "paragraph", value: "RedStar Huts is deeply embedded in the Tri-City market. Our local intelligence and advisory expertise help clients navigate this evolving landscape with confidence." },
    ],
  },
  "lake-tahoe-luxury-homes-buyer-guide": {
    title: "Lake Tahoe Luxury Homes: What Buyers Need to Know",
    category: "Buying",
    date: "January 13, 2026",
    readTime: "6 min read",
    heroImage: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1600&q=80",
    content: [
      { type: "paragraph", value: "Lake Tahoe represents one of America's most unique luxury real estate markets — a year-round alpine destination where pristine natural beauty meets world-class recreation. For buyers considering lakefront or mountain properties in this iconic setting, understanding the market's nuances is essential to making an informed acquisition." },
      { type: "heading", value: "Lakefront Premium" },
      { type: "paragraph", value: "Direct lakefront properties on Lake Tahoe are exceptionally rare and command significant premiums. With strict environmental regulations limiting new lakefront development, existing properties with private beach access and dock permits represent irreplaceable assets. These homes typically start at $5 million and can exceed $30 million for the most exceptional estates." },
      { type: "image", value: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80", alt: "Lake Tahoe lakefront luxury home" },
      { type: "heading", value: "North Shore vs South Shore" },
      { type: "paragraph", value: "The North Shore offers a quieter, more exclusive experience with communities like Incline Village and Crystal Bay. The South Shore provides more entertainment options and accessibility. Buyers should consider their lifestyle preferences carefully — the two shores offer genuinely different living experiences despite their proximity." },
      { type: "heading", value: "Year-Round Investment Value" },
      { type: "paragraph", value: "Unlike seasonal markets that see demand only during peak periods, Lake Tahoe's dual-season appeal — world-class skiing in winter and water sports, hiking, and outdoor living in summer — creates year-round demand. This translates to strong rental income potential and consistent occupancy for owners who choose to rent their properties during off-periods." },
      { type: "image", value: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1200&q=80", alt: "Mountain luxury estate near Lake Tahoe" },
      { type: "paragraph", value: "Our team understands the unique dynamics of the Lake Tahoe luxury market. From lakefront estates to ski-in retreats, we can help you find the property that matches your vision." },
    ],
  },
  "luxury-market-trends-2025": {
    title: "Luxury Real Estate Market Trends to Watch",
    category: "Market Insights",
    date: "January 6, 2026",
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
    date: "December 30, 2025",
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
    date: "December 23, 2025",
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
    date: "December 16, 2025",
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
    date: "December 9, 2025",
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
    date: "December 2, 2025",
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
};

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
