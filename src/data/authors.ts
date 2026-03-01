export interface Author {
  slug: string;
  name: string;
  role: string;
  bio: string;
  longBio: string;
  image: string;
  expertise: string[];
  social: {
    instagram?: string;
    facebook?: string;
    youtube?: string;
    linkedin?: string;
  };
}

export const authors: Author[] = [
  {
    slug: "naveen",
    name: "Naveen",
    role: "Founder & Principal Advisor",
    bio: "A visionary leader with deep expertise in luxury real estate, Naveen founded RedStar Huts to deliver trusted, client-first advisory services across premium property markets.",
    longBio: "With years of hands-on experience in North India's premium real estate market, Naveen founded RedStar Huts with a clear mission: to bring transparency, trust, and genuine expertise to every property transaction. His deep understanding of the Chandigarh Tri-City market — from Mohali's evolving residential corridors to Zirakpur's fast-growing luxury segment — has helped dozens of families and investors make confident property decisions. Naveen personally oversees every client engagement, ensuring that RedStar Huts' commitment to integrity and excellence is reflected in every interaction. His writing covers investment strategy, market analysis, and the broader forces shaping real estate in Punjab and beyond.",
    image: "/team/naveen.jpg",
    expertise: ["Investment Strategy", "Market Analysis", "Luxury Advisory", "NRI Consulting"],
    social: {
      instagram: "",
      facebook: "",
      youtube: "",
      linkedin: "",
    },
  },
  {
    slug: "krish",
    name: "Krish",
    role: "Junior Advisor",
    bio: "Driven by a passion for real estate and sharp analytical skills, Krish supports clients with market research, property evaluations, and end-to-end advisory assistance.",
    longBio: "Krish brings a fresh, data-driven perspective to RedStar Huts' advisory team. With a strong foundation in market research and property analysis, he specializes in identifying emerging trends and undervalued opportunities across the Tri-City region. His meticulous approach to due diligence and property evaluation ensures that every recommendation is backed by solid research. Krish is passionate about making real estate knowledge accessible and writes extensively about market trends, architectural innovations, and the evolving luxury landscape in North India.",
    image: "/team/krish.jpg",
    expertise: ["Market Research", "Property Evaluation", "Trend Analysis", "Due Diligence"],
    social: {
      instagram: "",
      facebook: "",
      youtube: "",
      linkedin: "",
    },
  },
  {
    slug: "disha",
    name: "Disha",
    role: "Sales Consultant",
    bio: "With a sharp eye for client needs and a results-driven approach, Disha connects buyers with the right properties through personalized guidance and seamless sales support.",
    longBio: "Disha is the driving force behind RedStar Huts' sales operations, known for her ability to truly understand what clients need and match them with the perfect property. Her expertise spans premium residential sales across Mohali, Zirakpur, and Chandigarh, with a particular strength in new project launches and builder relationships. Disha's client-first philosophy means she never pushes a sale — instead, she guides buyers through the entire journey with patience, transparency, and genuine care. Her writing focuses on property spotlights, buying guides, and practical advice for homebuyers navigating the luxury market.",
    image: "/team/disha.jpg",
    expertise: ["Property Sales", "Client Advisory", "New Launches", "Buyer Guidance"],
    social: {
      instagram: "",
      facebook: "",
      youtube: "",
      linkedin: "",
    },
  },
  {
    slug: "shivek",
    name: "Shivek",
    role: "Strategy & Growth",
    bio: "A strategic thinker with a passion for real estate technology and market intelligence, Shivek drives RedStar Huts' growth initiatives and content strategy.",
    longBio: "Shivek combines strategic thinking with deep market knowledge to drive RedStar Huts' growth and digital presence. With expertise spanning real estate technology, investment analysis, and content strategy, he plays a key role in shaping how RedStar Huts communicates value to clients and investors. His analytical approach to market intelligence helps the team identify emerging opportunities across Punjab, Gujarat, and other high-growth markets. Shivek's writing covers investment opportunities, global market comparisons, and actionable insights for both first-time buyers and seasoned investors.",
    image: "/team/shivek.jpg",
    expertise: ["Growth Strategy", "Investment Analysis", "Real Estate Technology", "Content Strategy"],
    social: {
      instagram: "",
      facebook: "",
      youtube: "",
      linkedin: "",
    },
  },
];

export function getAuthorBySlug(slug: string): Author | undefined {
  return authors.find((a) => a.slug === slug);
}

export function getAllAuthorSlugs(): string[] {
  return authors.map((a) => a.slug);
}
