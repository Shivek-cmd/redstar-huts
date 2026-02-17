export interface PropertyListItem {
  title: string;
  slug: string;
  code: string;
  location: string;
  price: string;
  image: string;
  beds: number;
  baths: number;
  sqft: string;
  type: string;
}

export interface PropertyImage {
  src: string;
  alt: string;
}

export interface PropertyHighlight {
  label: string;
  value: string;
}

export interface PropertyFAQ {
  question: string;
  answer: string;
}

export interface PropertyDetail {
  title: string;
  code: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  sqft: string;
  type: string;
  configuration: string;
  description: string[];
  features: string[];
  images: PropertyImage[];
  video?: string;
  highlights: PropertyHighlight[];
  nearby: string[];
  mapEmbed?: string;
  faqs: PropertyFAQ[];
}

export interface PropertySEO {
  title: string;
  description: string;
  price: string;
  location: string;
  beds: number;
  baths: number;
  sqft: string;
  type: string;
  image: string;
}

export const allProperties: PropertyListItem[] = [
  {
    title: "3+1 BHK Premium Flat in Mohali",
    slug: "3-plus-1-bhk-premium-flat-for-sale-in-mohali-punjab-2901-sq-ft",
    code: "RSH-MOH-001",
    location: "Mohali, Punjab",
    price: "On Request",
    image: "/properties/grand-mohali/living-room.jpg",
    beds: 3,
    baths: 3,
    sqft: "2,901",
    type: "Premium Flat",
  },
  {
    title: "3+1 BHK Ultra Luxury Flat in Mohali",
    slug: "3-plus-1-bhk-ultra-luxury-flat-for-sale-in-mohali-punjab",
    code: "RSH-MOH-002",
    location: "Mohali, Punjab",
    price: "On Request",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    beds: 3,
    baths: 3,
    sqft: "3,377 - 3,788",
    type: "Ultra Luxury Flat",
  },
];

export const propertiesData: Record<string, PropertyDetail> = {
  "3-plus-1-bhk-premium-flat-for-sale-in-mohali-punjab-2901-sq-ft": {
    title: "3+1 BHK Premium Flat in Mohali",
    code: "RSH-MOH-001",
    location: "Mohali, Punjab",
    price: "On Request",
    beds: 3,
    baths: 3,
    sqft: "2,901",
    type: "Premium Flat",
    configuration: "3+1 BHK",
    description: [
      "This 3+1 BHK premium flat in Mohali is built for families who want comfort, space, and modern living. Spread across 2,901 sq ft, every room is designed to feel open, bright, and welcoming. Whether you are upgrading your home or investing in Mohali's growing real estate market, this flat checks all the right boxes.",
      "The home comes with premium vitrified tiles, wooden flooring, full-height wardrobes, false ceilings with ambient lighting, and branded sanitary fittings. The kitchen is fully equipped with a granite countertop, inbuilt hob, chimney, microwave, and OTG. You also get centralized hybrid AC in all rooms (except kitchen and washrooms), 24x7 power backup, and dedicated basement parking.",
      "With LPG pipeline, fire safety sprinklers, and a common powder room for guests, this flat offers everything a modern family needs. Located in Mohali, Punjab, you are minutes away from Chandigarh, the international airport, top hospitals, and leading schools.",
    ],
    features: [
      "Premium vitrified tiles and wooden flooring",
      "Kitchen with granite countertop",
      "Inbuilt branded hob, chimney, microwave, and OTG",
      "Centralized hybrid AC (all rooms except kitchen and washrooms)",
      "24x7 power backup",
      "Full-height wardrobes in all bedrooms",
      "False ceilings with ambient lighting",
      "Branded sanitary and vanity fittings",
      "One common powder room",
      "Dedicated basement parking",
      "LPG pipeline",
      "Fire safety sprinklers",
    ],
    highlights: [
      { label: "Configuration", value: "3+1 BHK" },
      { label: "Super Area", value: "2,901 Sq Ft" },
      { label: "Type", value: "Premium Flat" },
      { label: "Finishing", value: "Fully Equipped" },
    ],
    nearby: [
      "Chandigarh International Airport",
      "Fortis Hospital Mohali",
      "Indian School of Business (ISB)",
      "Phase 8 Market Mohali",
      "PCA Cricket Stadium",
      "Elante Mall Chandigarh",
      "IT City Mohali",
      "North Country Mall",
    ],
    images: [
      { src: "/properties/grand-mohali/living-room.jpg", alt: "Spacious living room of 3+1 BHK premium flat in Mohali" },
      { src: "/properties/grand-mohali/kitchen.jpg", alt: "Fully equipped kitchen with granite countertop in Mohali flat" },
      { src: "/properties/grand-mohali/bedroom-1.jpg", alt: "Master bedroom with full-height wardrobe in Mohali property" },
      { src: "/properties/grand-mohali/bedroom-2.jpg", alt: "Second bedroom with ambient lighting in Mohali flat" },
      { src: "/properties/grand-mohali/dining.jpg", alt: "Dining area of premium flat in Mohali, Punjab" },
    ],
    faqs: [
      {
        question: "What is the size and configuration of this flat in Mohali?",
        answer: "This is a 3+1 BHK premium flat with a super area of 2,901 sq ft. It includes 3 bedrooms, 3 bathrooms, and one common powder room, along with a dedicated basement parking space.",
      },
      {
        question: "What kitchen fittings are included in this Mohali property?",
        answer: "The kitchen comes fully equipped with a premium granite countertop and inbuilt branded hob, chimney, microwave, and OTG. You do not need to spend extra on kitchen appliances.",
      },
      {
        question: "Does this flat have air conditioning and power backup?",
        answer: "Yes. The flat comes with centralized hybrid AC in all rooms except the kitchen and washrooms. It also has 24x7 power backup, so you never face any disruption.",
      },
      {
        question: "What flooring is used in this property?",
        answer: "The flat features premium vitrified tiles in the common areas and wooden flooring in select spaces. All bedrooms have full-height wardrobes and false ceilings with ambient lighting.",
      },
      {
        question: "Is parking available with this flat?",
        answer: "Yes. Every unit comes with dedicated basement parking, keeping your vehicle safe and secure at all times.",
      },
      {
        question: "How far is this property from Chandigarh?",
        answer: "The flat is located in Mohali, Punjab, which is right next to Chandigarh. You are just a short drive from the Chandigarh International Airport, Fortis Hospital, Elante Mall, and major IT hubs.",
      },
      {
        question: "Is this flat suitable for families?",
        answer: "Absolutely. With 3 spacious bedrooms, a common powder room for guests, fire safety sprinklers, LPG pipeline, and 24x7 power backup, this flat is designed for comfortable family living.",
      },
      {
        question: "How can I schedule a site visit for this property?",
        answer: "You can contact RedStar Huts directly through the contact form on this page or call us at +91 889 434 3056. We will arrange a private site visit at your convenience.",
      },
    ],
  },
  "3-plus-1-bhk-ultra-luxury-flat-for-sale-in-mohali-punjab": {
    title: "3+1 BHK Ultra Luxury Flat in Mohali",
    code: "RSH-MOH-002",
    location: "Mohali, Punjab",
    price: "On Request",
    beds: 3,
    baths: 3,
    sqft: "3,377 - 3,788",
    type: "Ultra Luxury Flat",
    configuration: "3+1 BHK",
    description: [
      "This 3+1 BHK ultra luxury flat in Mohali is not just a home. It is a lifestyle upgrade. Available in two sizes (3,377 sq ft and 3,788 sq ft), this property is designed for people who want nothing but the best. From imported marble floors to smart home automation, every detail is crafted to deliver a 7-star living experience.",
      "The flat comes with imported marble tiles, engineered wooden flooring, a kitchen with engineered quartz countertop, and inbuilt branded hob, chimney, microwave, OTG, and dishwasher. You also get 5th generation VRF HVAC systems, centralized heat pumps, automated lighting and curtains, and Yale digital lock systems that work from your phone.",
      "The property includes a dedicated pooja room, separate servant entry, and a customizable layout plan so you can design your home exactly the way you want. The project offers a 25,000 sq ft clubhouse with world-class amenities, triple-height grand reception, green-facing views, on-site doctor and veterinary facility, and on-call services for a truly premium experience.",
    ],
    features: [
      "Imported marble tiles and engineered wooden flooring",
      "Kitchen with imported engineered quartz countertop",
      "Inbuilt branded hob, chimney, microwave, OTG, and dishwasher",
      "5th generation VRF HVAC systems",
      "Centralized heat pumps",
      "Automated lighting and curtains",
      "Ultra premium sanitary and vanity fittings",
      "Yale digital lock systems (operable through device)",
      "Dedicated pooja room",
      "Separate servant entry",
      "Customizable layout plan",
      "Dedicated basement parking",
      "24x7 power backup",
      "Fire safety provisions",
      "Top-notch security systems",
    ],
    highlights: [
      { label: "Configuration", value: "3+1 BHK" },
      { label: "Sizes Available", value: "3,377 & 3,788 Sq Ft" },
      { label: "Type", value: "Ultra Luxury Flat" },
      { label: "Clubhouse", value: "25,000 Sq Ft" },
    ],
    nearby: [
      "Chandigarh International Airport",
      "Fortis Hospital Mohali",
      "Indian School of Business (ISB)",
      "Phase 8 Market Mohali",
      "PCA Cricket Stadium",
      "Elante Mall Chandigarh",
      "IT City Mohali",
      "North Country Mall",
    ],
    images: [
      { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80", alt: "Ultra luxury flat living room in Mohali" },
      { src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80", alt: "Master bedroom with imported marble flooring in Mohali" },
      { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80", alt: "Spacious dining area in ultra luxury Mohali property" },
      { src: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80", alt: "Premium kitchen with quartz countertop in Mohali flat" },
      { src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80", alt: "Grand reception area of luxury flat in Mohali, Punjab" },
    ],
    faqs: [
      {
        question: "What sizes are available for this ultra luxury flat in Mohali?",
        answer: "This property is available in two sizes: 3,377 sq ft and 3,788 sq ft. Both options come with the same ultra-luxury features and fittings.",
      },
      {
        question: "What makes this flat 'ultra luxury'?",
        answer: "Everything in this flat is top-of-the-line. You get imported marble flooring, engineered quartz kitchen countertop, 5th gen VRF HVAC systems, automated lighting and curtains, Yale digital locks, and a 25,000 sq ft clubhouse. It is built for a 7-star living experience.",
      },
      {
        question: "Can I customize the layout of this flat?",
        answer: "Yes. This property offers a customizable layout plan. You can work with the team to design the interior layout according to your preferences before construction is finalized.",
      },
      {
        question: "Does this property have smart home features?",
        answer: "Yes. The flat comes with automated lighting and curtains, Yale digital lock systems that can be operated from your phone, and 5th generation VRF HVAC systems for efficient climate control.",
      },
      {
        question: "What amenities are available in the clubhouse?",
        answer: "The project features a 25,000 sq ft clubhouse with world-class amenities. You also get triple-height grand reception, green-facing views, on-site doctor and veterinary facility, and on-call services.",
      },
      {
        question: "Is there a separate entry for domestic help?",
        answer: "Yes. The flat includes a separate servant entry so your privacy is maintained. There is also a dedicated pooja room built into the layout.",
      },
      {
        question: "What security features does this property have?",
        answer: "The property has top-notch security provisions including Yale digital lock systems, fire safety provisions, and round-the-clock security. The gated community ensures complete safety for your family.",
      },
      {
        question: "How do I book a site visit for this property in Mohali?",
        answer: "Contact RedStar Huts through the form on this page or call us at +91 889 434 3056. We will arrange a private site visit and walk you through all the features in person.",
      },
    ],
  },
};

export const propertyMeta: Record<string, PropertySEO> = {
  "3-plus-1-bhk-premium-flat-for-sale-in-mohali-punjab-2901-sq-ft": {
    title: "3+1 BHK Premium Flat for Sale in Mohali, Punjab | 2,901 Sq Ft | RedStar Huts",
    description: "Spacious 3+1 BHK premium flat in Mohali, Punjab. 2,901 sq ft with centralized AC, 24x7 power backup, granite kitchen, branded fittings, and basement parking. Contact RedStar Huts for site visit.",
    price: "On Request",
    location: "Mohali, Punjab",
    beds: 3,
    baths: 3,
    sqft: "2,901",
    type: "Premium Flat",
    image: "/properties/grand-mohali/living-room.jpg",
  },
  "3-plus-1-bhk-ultra-luxury-flat-for-sale-in-mohali-punjab": {
    title: "3+1 BHK Ultra Luxury Flat for Sale in Mohali, Punjab | 3,377-3,788 Sq Ft | RedStar Huts",
    description: "Ultra luxury 3+1 BHK flat in Mohali, Punjab. Available in 3,377 & 3,788 sq ft. Imported marble, VRF HVAC, automated lighting, Yale digital locks, 25,000 sq ft clubhouse. Contact RedStar Huts.",
    price: "On Request",
    location: "Mohali, Punjab",
    beds: 3,
    baths: 3,
    sqft: "3,377 - 3,788",
    type: "Ultra Luxury Flat",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
  },
};

export const budgetRanges = [
  { label: "Any Budget", min: 0, max: Infinity },
  { label: "Under \u20B91 Cr", min: 0, max: 10000000 },
  { label: "\u20B91 Cr - \u20B93 Cr", min: 10000000, max: 30000000 },
  { label: "\u20B93 Cr+", min: 30000000, max: Infinity },
];

export function parsePrice(price: string): number {
  if (price.toLowerCase().includes("request")) return 0;
  if (price.includes("Cr")) {
    const num = parseFloat(price.replace(/[^\d.]/g, ""));
    return num * 10000000;
  }
  if (price.includes("Lac") || price.includes("Lakh")) {
    const num = parseFloat(price.replace(/[^\d.]/g, ""));
    return num * 100000;
  }
  return Number(price.replace(/[$,\u20B9]/g, ""));
}
