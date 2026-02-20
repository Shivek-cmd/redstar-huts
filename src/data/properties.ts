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

export interface NearbyCategory {
  category: string;
  places: { name: string; distance: string }[];
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
  nearby: NearbyCategory[];
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
  keywords: string[];
}

const sharedNearby: NearbyCategory[] = [
  {
    category: "Shopping Destinations",
    places: [
      { name: "Bestech Mall, Mohali", distance: "8 Kms" },
      { name: "VR Punjab Mall", distance: "9 Kms" },
      { name: "3B2 Commercial Hub, Mohali", distance: "6 Kms" },
      { name: "Sector 70 Commercial Hub, Mohali", distance: "4 Kms" },
      { name: "Centra Mall", distance: "14 Kms" },
      { name: "Waves Mall", distance: "15 Kms" },
      { name: "Elante Mall", distance: "16 Kms" },
      { name: "Sector 17 Plaza", distance: "13 Kms" },
    ],
  },
  {
    category: "Health Facilities",
    places: [
      { name: "Sohana Hospital", distance: "2 Kms" },
      { name: "IVY Hospital", distance: "4 Kms" },
      { name: "Park Hospital", distance: "5 Kms" },
      { name: "Fortis Hospital", distance: "6 Kms" },
      { name: "Silver Oak Hospital", distance: "6.5 Kms" },
      { name: "Max Hospital", distance: "11 Kms" },
      { name: "PGIMER", distance: "14 Kms" },
    ],
  },
  {
    category: "Education Institutions",
    places: [
      { name: "Amity International School", distance: "3.5 Kms" },
      { name: "Smart Wonder School", distance: "3.5 Kms" },
      { name: "Shemrock School", distance: "4.5 Kms" },
      { name: "Gurukul", distance: "4.5 Kms" },
      { name: "NIPER", distance: "5.5 Kms" },
      { name: "ISB \u2013 Indian School of Business", distance: "6 Kms" },
      { name: "Yadavindra Public School", distance: "6 Kms" },
      { name: "Ryan International School", distance: "6 Kms" },
      { name: "IISER", distance: "6.5 Kms" },
      { name: "Manav Mangal Smart School", distance: "8 Kms" },
      { name: "Manav Rachna International School", distance: "10 Kms" },
      { name: "Punjab University", distance: "13.5 Kms" },
    ],
  },
  {
    category: "Leisure Spots",
    places: [
      { name: "Thunder Zone", distance: "6 Kms" },
      { name: "Punjab Cricket Stadium (PCA), Phase 9", distance: "6.5 Kms" },
      { name: "Hockey Stadium, Sector 42", distance: "9 Kms" },
      { name: "Proposed Golf Course, Sector 74", distance: "9 Kms" },
      { name: "Rose Garden", distance: "13 Kms" },
      { name: "Chandigarh Golf Club", distance: "16.5 Kms" },
      { name: "Rock Garden", distance: "17 Kms" },
      { name: "Sukhna Lake", distance: "18.5 Kms" },
    ],
  },
  {
    category: "Public Utility",
    places: [
      { name: "Proposed Metro Station", distance: "4 Kms" },
      { name: "ISBT, Sector 43, Chandigarh", distance: "8.5 Kms" },
      { name: "Chandigarh International Airport", distance: "15 Kms" },
      { name: "Mini Secretariat", distance: "15.5 Kms" },
      { name: "Chandigarh High Court", distance: "16.5 Kms" },
    ],
  },
  {
    category: "Hotels",
    places: [
      { name: "Radisson", distance: "8 Kms" },
      { name: "JW Marriott", distance: "11 Kms" },
      { name: "Taj Hotel", distance: "13 Kms" },
      { name: "Hyatt", distance: "16 Kms" },
      { name: "Park Plaza", distance: "18 Kms" },
    ],
  },
];

export const allProperties: PropertyListItem[] = [
  {
    title: "4+1 BHK Premium Flat in Mohali",
    slug: "4-plus-1-bhk-premium-flat-for-sale-in-mohali-punjab",
    code: "RSH-MOH-003",
    location: "Mohali, Punjab",
    price: "On Request",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
    beds: 4,
    baths: 4,
    sqft: "3,677 - 4,055",
    type: "Premium Flat",
  },
  {
    title: "3+1 BHK Ultra Luxury Flat in Mohali",
    slug: "3-plus-1-bhk-ultra-luxury-flat-for-sale-in-mohali-punjab",
    code: "RSH-MOH-002",
    location: "Mohali, Punjab",
    price: "On Request",
    image: "/properties/RSH-MOH-002/lobby.png",
    beds: 3,
    baths: 3,
    sqft: "3,377 - 3,788",
    type: "Ultra Luxury Flat",
  },
  {
    title: "3+1 BHK Premium Flat in Mohali",
    slug: "3-plus-1-bhk-premium-flat-for-sale-in-mohali-punjab-2901-sq-ft",
    code: "RSH-MOH-001",
    location: "Mohali, Punjab",
    price: "On Request",
    image: "/properties/RSH-MOH-001/living-room.jpg",
    beds: 3,
    baths: 3,
    sqft: "2,901",
    type: "Premium Flat",
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
      "This 3+1 BHK premium flat in Mohali is built for families who want comfort, space, and modern living. Spread across 2,901 sq ft, every room is designed to feel open, bright, and welcoming. Whether you are upgrading your home or investing in Mohali\u2019s growing real estate market, this flat checks all the right boxes.",
      "The home comes with premium vitrified tiles, wooden flooring, full-height wardrobes, false ceilings with ambient lighting, and branded sanitary fittings. The kitchen is fully equipped with a granite countertop, inbuilt hob, chimney, microwave, and OTG. You also get centralized hybrid AC in all rooms (except kitchen and washrooms), 24x7 power backup, and dedicated basement parking.",
      "With LPG pipeline, fire safety sprinklers, and a common powder room for guests, this flat offers everything a modern family needs. Located in Mohali, Punjab, you are minutes away from Chandigarh, the international airport, top hospitals, and leading schools.",
    ],
    features: [
      "Premium vitrified tiles and wooden flooring",
      "Kitchen with premium granite countertop",
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
      { label: "Bedrooms", value: "3 Bedrooms, 3 Bathrooms" },
      { label: "Type", value: "Premium Flat" },
      { label: "Finishing", value: "Fully Equipped" },
      { label: "Parking", value: "Dedicated Basement Parking" },
    ],
    nearby: sharedNearby,
    images: [
      { src: "/properties/RSH-MOH-001/dining-room.jpg", alt: "Elegant dining room with designer chandelier in premium Mohali flat" },
      { src: "/properties/RSH-MOH-001/kitchen.jpg", alt: "Modern kitchen with premium fittings in Mohali property" },
      { src: "/properties/RSH-MOH-001/master-bedroom.jpg", alt: "Master bedroom with contemporary wall art in Mohali flat" },
      { src: "/properties/RSH-MOH-001/bedroom-2.jpg", alt: "Spacious bedroom with ambient LED lighting in premium Mohali flat" },
      { src: "/properties/RSH-MOH-001/living-room.jpg", alt: "Living and dining area with glass partition in 3+1 BHK Mohali flat" },
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
        question: "How far is this property from key locations?",
        answer: "The flat is in Mohali, Punjab, just 15 kms from Chandigarh International Airport, 6 kms from Fortis Hospital, 6 kms from ISB, 8 kms from Bestech Mall, and 4 kms from the proposed Metro station.",
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
      "One common powder room",
      "Separate servant entry",
      "Customizable layout plan",
      "Dedicated basement parking",
      "24x7 power backup",
      "Fire safety provisions",
      "Top-notch security systems",
      "Triple-height grand reception",
      "25,000 sq ft clubhouse with world-class amenities",
      "Green-facing views",
      "On-site doctor and veterinary facility",
      "On-call servant, passport services \u2013 7-star experience",
    ],
    highlights: [
      { label: "Configuration", value: "3+1 BHK" },
      { label: "Sizes Available", value: "3,377 & 3,788 Sq Ft" },
      { label: "Bedrooms", value: "3 Bedrooms, 3 Bathrooms" },
      { label: "Type", value: "Ultra Luxury Flat" },
      { label: "Clubhouse", value: "25,000 Sq Ft" },
      { label: "Smart Home", value: "Yale Locks, Automated Lighting" },
    ],
    nearby: sharedNearby,
    images: [
      { src: "/properties/RSH-MOH-002/lobby.png", alt: "Grand lobby with luxury chandelier in ultra luxury flat Mohali" },
      { src: "/properties/RSH-MOH-002/elevator-lobby.png", alt: "Premium elevator lobby with designer lighting in Mohali property" },
      { src: "/properties/RSH-MOH-002/bar-lounge.png", alt: "Bar lounge with marble countertop in ultra luxury flat Mohali" },
      { src: "/properties/RSH-MOH-002/master-bedroom.png", alt: "Master bedroom with crystal chandelier in luxury Mohali flat" },
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
        question: "How far is this property from hospitals and schools?",
        answer: "Sohana Hospital is just 2 kms away, IVY Hospital is 4 kms, and Fortis Hospital is 6 kms. For schools, Amity International and Smart Wonder School are 3.5 kms away, and ISB is just 6 kms.",
      },
      {
        question: "How do I book a site visit for this property in Mohali?",
        answer: "Contact RedStar Huts through the form on this page or call us at +91 889 434 3056. We will arrange a private site visit and walk you through all the features in person.",
      },
    ],
  },
  "4-plus-1-bhk-premium-flat-for-sale-in-mohali-punjab": {
    title: "4+1 BHK Premium Flat in Mohali",
    code: "RSH-MOH-003",
    location: "Mohali, Punjab",
    price: "On Request",
    beds: 4,
    baths: 4,
    sqft: "3,677 - 4,055",
    type: "Premium Flat",
    configuration: "4+1 BHK",
    description: [
      "This 4+1 BHK premium flat in Mohali is designed for families who need extra space without compromising on quality. Available in two generous sizes (3,677 sq ft and 4,055 sq ft), this home gives you 4 bedrooms, 4 bathrooms, and a common powder room \u2013 perfect for large families or those who love entertaining guests.",
      "The flat comes with premium marble and vitrified tiles, wooden flooring, a kitchen with granite countertop and inbuilt branded hob, chimney, and RO. You get attached AC in the living room, dining area, drawing room, and all bedrooms. Add to that 24x7 power backup, false ceilings with ambient lighting, automated curtain systems, and branded sanitary fittings throughout.",
      "Located in Mohali, Punjab, this property puts you close to everything that matters \u2013 top schools, hospitals, malls, and the Chandigarh International Airport. With dedicated basement parking and a well-planned layout, this is a home that is ready to move into and built to last.",
    ],
    features: [
      "Premium marble, vitrified tiles, and wooden flooring",
      "Kitchen with premium granite countertop",
      "Inbuilt branded hob, chimney, and RO",
      "Attached AC in living, dining, drawing, and all bedrooms",
      "24x7 power backup",
      "False ceilings with ambient lighting",
      "Automated curtain systems",
      "Branded sanitary and vanity fittings",
      "One common powder room",
      "Dedicated basement parking",
    ],
    highlights: [
      { label: "Configuration", value: "4+1 BHK" },
      { label: "Sizes Available", value: "3,677 & 4,055 Sq Ft" },
      { label: "Bedrooms", value: "4 Bedrooms, 4 Bathrooms" },
      { label: "Type", value: "Premium Flat" },
      { label: "Finishing", value: "Marble & Wooden Flooring" },
      { label: "Parking", value: "Dedicated Basement Parking" },
    ],
    nearby: sharedNearby,
    images: [
      { src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80", alt: "Spacious living room of 4+1 BHK premium flat in Mohali" },
      // { src: "https://images.unsplash.com/photo-1600566753376-12c8ab7a5a38?w=800&q=80", alt: "Master bedroom with attached AC in Mohali flat" },
      { src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80", alt: "Modern kitchen with granite countertop in Mohali property" },
      { src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80", alt: "Dining area with false ceiling and ambient lighting in Mohali" },
      { src: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80", alt: "Premium bathroom with branded fittings in Mohali flat" },
    ],
    faqs: [
      {
        question: "What is the size and configuration of this 4+1 BHK flat?",
        answer: "This is a 4+1 BHK premium flat available in two sizes: 3,677 sq ft and 4,055 sq ft. It includes 4 bedrooms, 4 bathrooms, and one common powder room with dedicated basement parking.",
      },
      {
        question: "What flooring is used in this flat?",
        answer: "The flat features premium marble and vitrified tiles in common areas, with wooden flooring in select spaces. All rooms have false ceilings with ambient lighting for a refined look.",
      },
      {
        question: "Does this property come with air conditioning?",
        answer: "Yes. Attached AC is provided in the living room, dining area, drawing room, and all 4 bedrooms. The flat also has 24x7 power backup so your comfort is never interrupted.",
      },
      {
        question: "What kitchen fittings come with this flat?",
        answer: "The kitchen comes with a premium granite countertop and inbuilt branded hob, chimney, and RO system. It is designed to be functional and ready to use from day one.",
      },
      {
        question: "Does this flat have automated features?",
        answer: "Yes. The flat includes automated curtain systems for added convenience, along with false ceilings with ambient lighting and branded sanitary and vanity fittings throughout.",
      },
      {
        question: "Is this flat suitable for large families?",
        answer: "Absolutely. With 4 spacious bedrooms, 4 bathrooms, a common powder room, and up to 4,055 sq ft of living space, this flat is ideal for large families or those who need extra room.",
      },
      {
        question: "How far is this property from schools and hospitals?",
        answer: "Sohana Hospital is just 2 kms away, Fortis Hospital is 6 kms, and PGIMER is 14 kms. For schools, Amity International is 3.5 kms, ISB is 6 kms, and Punjab University is 13.5 kms away.",
      },
      {
        question: "How can I schedule a visit for this property?",
        answer: "Contact RedStar Huts through the form on this page or call us at +91 889 434 3056. We will arrange a private site visit at a time that works for you.",
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
    image: "/properties/RSH-MOH-001/living-room.jpg",
    keywords: [
      "3 BHK flat for sale in Mohali",
      "premium flat Mohali Punjab",
      "3+1 BHK Mohali",
      "luxury flat Mohali",
      "flat for sale near Chandigarh",
      "2901 sq ft flat Mohali",
      "buy flat in Mohali",
      "premium property Mohali",
      "gated community Mohali",
      "ready to move flat Mohali",
      "Mohali real estate",
      "property investment Mohali Punjab",
      "NRI property Mohali",
      "RedStar Huts Mohali",
    ],
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
    keywords: [
      "ultra luxury flat Mohali",
      "3 BHK luxury flat for sale Mohali",
      "3+1 BHK ultra luxury Mohali Punjab",
      "smart home flat Mohali",
      "imported marble flat Mohali",
      "VRF HVAC flat Mohali",
      "Yale digital lock property",
      "clubhouse flat Mohali",
      "7 star living Mohali",
      "luxury residence near Chandigarh",
      "premium apartment Mohali",
      "high end flat Punjab",
      "NRI luxury investment Mohali",
      "RedStar Huts ultra luxury",
    ],
  },
  "4-plus-1-bhk-premium-flat-for-sale-in-mohali-punjab": {
    title: "4+1 BHK Premium Flat for Sale in Mohali, Punjab | 3,677-4,055 Sq Ft | RedStar Huts",
    description: "Premium 4+1 BHK flat in Mohali, Punjab. Available in 3,677 & 4,055 sq ft. Premium marble flooring, attached AC, automated curtains, granite kitchen, 24x7 power backup. Contact RedStar Huts.",
    price: "On Request",
    location: "Mohali, Punjab",
    beds: 4,
    baths: 4,
    sqft: "3,677 - 4,055",
    type: "Premium Flat",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
    keywords: [
      "4 BHK flat for sale in Mohali",
      "4+1 BHK premium flat Mohali Punjab",
      "large family flat Mohali",
      "spacious flat near Chandigarh",
      "4 bedroom flat Mohali",
      "premium marble flooring flat",
      "automated curtains flat Mohali",
      "4055 sq ft flat Mohali",
      "buy 4 BHK flat Punjab",
      "luxury 4 BHK near Chandigarh",
      "premium property Mohali Punjab",
      "family home Mohali",
      "NRI investment 4 BHK Mohali",
      "RedStar Huts property",
    ],
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
