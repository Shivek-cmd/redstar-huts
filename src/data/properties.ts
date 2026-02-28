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

export interface PropertySocialLinks {
  youtube?: string;
  facebook?: string;
  instagram?: string;
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
  videoEmbed?: string;
  socialLinks?: PropertySocialLinks;
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
    title: "3 & 4+1 BHK Smart Home Ultra Luxury Flats in Zirakpur",
    slug: "3-4-plus-1-bhk-smart-home-ultra-luxury-flats-for-sale-in-zirakpur-punjab",
    code: "RSH-ZIR-003",
    location: "Zirakpur, Punjab",
    price: "On Request",
    image: "/properties/RSH-ZIR-003/living-room.jpg",
    beds: 4,
    baths: 4,
    sqft: "1,843 - 2,945",
    type: "Smart Home Ultra Luxury Flat",
  },
  {
    title: "3 & 4+1 BHK IGBC Platinum Luxury Flats in Zirakpur",
    slug: "3-4-plus-1-bhk-igbc-platinum-luxury-flats-for-sale-in-zirakpur-punjab",
    code: "RSH-ZIR-002",
    location: "Zirakpur, Punjab",
    price: "On Request",
    image: "/properties/RSH-ZIR-002/living-room.jpg",
    beds: 4,
    baths: 4,
    sqft: "2,325 - 3,204",
    type: "IGBC Platinum Luxury Flat",
  },
  {
    title: "4+1 BHK Premium Flat in Zirakpur",
    slug: "4-plus-1-bhk-premium-flat-for-sale-in-zirakpur-punjab",
    code: "RSH-ZIR-001",
    location: "Zirakpur, Punjab",
    price: "On Request",
    image: "/properties/RSH-ZIR-001/living-room.jpg",
    beds: 4,
    baths: 4,
    sqft: "2,505",
    type: "Premium Flat",
  },
  {
    title: "Residential Plots in Dholera Smart City",
    slug: "residential-plots-for-sale-in-dholera-smart-city-gujarat",
    code: "RSH-DHO-001",
    location: "Dholera, Gujarat",
    price: "On Request",
    image: "/properties/RSH-DHO-001/expressway-aerial.jpg",
    beds: 0,
    baths: 0,
    sqft: "310+",
    type: "Residential Plot",
  },
  {
    title: "4+1 BHK Premium Flat in Mohali",
    slug: "4-plus-1-bhk-premium-flat-for-sale-in-mohali-punjab",
    code: "RSH-MOH-003",
    location: "Mohali, Punjab",
    price: "On Request",
    image: "/properties/RSH-MOH-003/living-room.jpg",
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
      { src: "/properties/RSH-MOH-003/living-room.jpg", alt: "Spacious living room with crystal chandelier and designer sofas in 4+1 BHK premium flat Mohali" },
      { src: "/properties/RSH-MOH-003/dining-area.jpg", alt: "Formal 8-seater dining area with wall clock and mirror accent in premium Mohali flat" },
      { src: "/properties/RSH-MOH-003/kitchen.jpg", alt: "Modular parallel kitchen with Samsung appliances and LED track lighting in Mohali property" },
      { src: "/properties/RSH-MOH-003/master-bedroom.jpg", alt: "Master bedroom with upholstered headboard, designer chandelier and lounge sofa in Mohali flat" },
      { src: "/properties/RSH-MOH-003/bedroom-2.jpg", alt: "Bedroom with walnut wood accent wall, sliding wardrobe and brass chandelier in premium Mohali flat" },
      { src: "/properties/RSH-MOH-003/bedroom-3.jpg", alt: "Bedroom with track lighting, wooden ceiling panel and blue armchair in 4+1 BHK Mohali flat" },
      { src: "/properties/RSH-MOH-003/foyer.jpg", alt: "Grand entrance foyer with marble accent wall, round mirror and Sputnik chandelier in Mohali property" },
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
  "3-4-plus-1-bhk-smart-home-ultra-luxury-flats-for-sale-in-zirakpur-punjab": {
    title: "3 & 4+1 BHK Smart Home Ultra Luxury Flats in Zirakpur",
    code: "RSH-ZIR-003",
    location: "Zirakpur, Punjab",
    price: "On Request",
    beds: 4,
    baths: 4,
    sqft: "1,843 - 2,945",
    type: "Smart Home Ultra Luxury Flat",
    configuration: "3 BHK / 3+1 BHK / 4+1 BHK",
    description: [
      "This ready-to-move IGBC green certified high-rise on the Zirakpur-Patiala Highway redefines ultra luxury living with fully automated smart home technology. Available in 3 BHK (1,843 sq ft), 3+1 BHK (2,247 sq ft), and 4+1 BHK (2,945 sq ft) configurations, every apartment is equipped with voice-controlled AC, automated lighting systems, presence and motion sensors, touch panels, and mobile app integration for complete home automation.",
      "Built with MIVAN construction technology, the project features only 2 apartments per floor with 2 lifts and 2 emergency staircases. Every unit is park-facing at no extra cost, with 7.5 to 10 KVA power backup, a 3-tier security system, and a separate pet-friendly zone. The central themed park includes a Bamboo Garden, Zen Garden, and Amphitheatre, while the clubhouse offers a gym, table tennis room, banquet hall, and coffee shop.",
      "The project also features a rooftop swimming pool, separate outdoor sports arena, EV car charging points, and 24x7 ambulance service on standby. With all park-facing units, MIVAN precision construction, and smart home automation as standard, this is one of the most technologically advanced residential projects in the Zirakpur-Patiala Highway corridor. Ideal for families who want a ready, move-in luxury home with future-ready smart living features.",
    ],
    features: [
      "IGBC Green Building Certification",
      "MIVAN construction technology",
      "Fully automated smart lighting system",
      "Voice-controlled AC temperature control",
      "Presence and motion sensors throughout",
      "Touch panels and mobile app home control",
      "Only 2 apartments per floor",
      "All park-facing units (no extra cost)",
      "2 lifts plus 2 emergency staircases",
      "7.5-10 KVA power backup",
      "3-tier security system",
      "Rooftop swimming pool",
      "Separate outdoor sports arena",
      "Separate pet-friendly zone",
      "Central themed park (Bamboo Garden, Zen Garden, Amphitheatre)",
      "Clubhouse with gym, table tennis, banquet hall, coffee shop",
      "EV car charging point",
      "24x7 ambulance service",
    ],
    highlights: [
      { label: "Configuration", value: "3 BHK / 3+1 BHK / 4+1 BHK" },
      { label: "Sizes Available", value: "1,843 / 2,247 / 2,945 Sq Ft" },
      { label: "Certification", value: "IGBC Green Building" },
      { label: "Construction", value: "MIVAN Technology" },
      { label: "Status", value: "Ready to Move" },
      { label: "Smart Home", value: "Voice Control, Automation, Sensors" },
    ],
    nearby: [
      {
        category: "Shopping Destinations",
        places: [
          { name: "Paras Downtown Mall, Zirakpur", distance: "4 Kms" },
          { name: "VR Punjab Mall", distance: "8 Kms" },
          { name: "North Country Mall", distance: "6 Kms" },
          { name: "Bestech Mall, Mohali", distance: "15 Kms" },
          { name: "Elante Mall, Chandigarh", distance: "14 Kms" },
        ],
      },
      {
        category: "Health Facilities",
        places: [
          { name: "Amandeep Hospital, Zirakpur", distance: "4 Kms" },
          { name: "Ivy Hospital, Mohali", distance: "10 Kms" },
          { name: "Fortis Hospital, Mohali", distance: "13 Kms" },
          { name: "Max Hospital, Mohali", distance: "16 Kms" },
          { name: "PGIMER, Chandigarh", distance: "15 Kms" },
        ],
      },
      {
        category: "Education Institutions",
        places: [
          { name: "DPS Zirakpur", distance: "5 Kms" },
          { name: "Saupin's School", distance: "6 Kms" },
          { name: "Ryan International School", distance: "7 Kms" },
          { name: "Chandigarh University", distance: "20 Kms" },
          { name: "Punjab University, Chandigarh", distance: "15 Kms" },
          { name: "ISB Mohali", distance: "13 Kms" },
        ],
      },
      {
        category: "Leisure & Recreation",
        places: [
          { name: "Timber Trail Resort", distance: "20 Kms" },
          { name: "Sukhna Lake, Chandigarh", distance: "18 Kms" },
          { name: "Rock Garden, Chandigarh", distance: "19 Kms" },
          { name: "Rose Garden, Chandigarh", distance: "15 Kms" },
          { name: "Fun City, Chandigarh", distance: "12 Kms" },
        ],
      },
      {
        category: "Transport & Connectivity",
        places: [
          { name: "Chandigarh International Airport", distance: "12 Kms" },
          { name: "Chandigarh Railway Station", distance: "16 Kms" },
          { name: "Mohali Railway Station", distance: "8 Kms" },
          { name: "Zirakpur-Patiala Highway", distance: "Direct Access" },
          { name: "NH-22 (Chandigarh-Ambala Highway)", distance: "3 Kms" },
        ],
      },
    ],
    images: [
      { src: "/properties/RSH-ZIR-003/living-room.jpg", alt: "Spacious living room with L-shaped sofa and walnut wood TV unit in smart home ultra luxury flat Zirakpur" },
      { src: "/properties/RSH-ZIR-003/living-dining.jpg", alt: "Open-plan living and dining area with wingback chairs and gold-framed mirror in Zirakpur luxury apartment" },
      { src: "/properties/RSH-ZIR-003/kitchen.jpg", alt: "Modular kitchen with wood finish cabinets and LED under-cabinet lighting in smart home Zirakpur flat" },
      { src: "/properties/RSH-ZIR-003/master-bedroom.jpg", alt: "Master bedroom with grey geometric accent wall and sheer curtains in ultra luxury Zirakpur flat" },
      { src: "/properties/RSH-ZIR-003/guest-bedroom.jpg", alt: "Guest bedroom with navy blue bedding and mirrored wardrobe in Zirakpur smart home apartment" },
      { src: "/properties/RSH-ZIR-003/bedroom-ensuite.jpg", alt: "Bedroom with 3D textured wall panel and en-suite bathroom in Zirakpur ultra luxury flat" },
      { src: "/properties/RSH-ZIR-003/bedroom-dark.jpg", alt: "Bedroom with pendant lights, geometric cushions, and floating shelves in smart home Zirakpur property" },
    ],
    faqs: [
      {
        question: "What configurations are available in this Zirakpur smart home project?",
        answer: "This project offers 3 BHK (1,843 sq ft), 3+1 BHK (2,247 sq ft), and 4+1 BHK (2,945 sq ft) ultra luxury flats. All configurations come with smart home automation, MIVAN construction, and park-facing views.",
      },
      {
        question: "What smart home features are included?",
        answer: "Every flat comes with a fully automated lighting system, voice-controlled AC temperature, presence and motion sensors, touch panels, and mobile app integration. You can control your entire home from your phone or through voice commands.",
      },
      {
        question: "Is this a ready-to-move project?",
        answer: "Yes, this is a ready-to-move project. You can move in immediately after completing the purchase formalities.",
      },
      {
        question: "What is IGBC certification and why does it matter?",
        answer: "IGBC (Indian Green Building Council) certification means the project meets strict environmental standards for energy efficiency, water conservation, and sustainable construction. This results in lower utility bills, healthier indoor spaces, and stronger long-term property value.",
      },
      {
        question: "What amenities does the project offer?",
        answer: "The project features a rooftop swimming pool, clubhouse with gym, table tennis room, banquet hall, and coffee shop. There is also a separate outdoor sports arena, pet-friendly zone, central themed park with Bamboo Garden, Zen Garden, and Amphitheatre, EV car charging, and 24x7 ambulance service.",
      },
      {
        question: "How many flats are there per floor?",
        answer: "There are only 2 apartments per floor with 2 lifts and 2 emergency staircases. This ensures maximum privacy, superior ventilation, and an exclusive living experience.",
      },
      {
        question: "Is the project pet-friendly?",
        answer: "Yes, the project has a dedicated pet-friendly zone designed for residents with pets. This is a rare amenity in Zirakpur and reflects the project's focus on inclusive, modern living.",
      },
      {
        question: "How can I schedule a site visit for this property?",
        answer: "Contact RedStar Huts through the form on this page or call us at +91 889 434 3056. We will arrange a private site visit at your convenience and walk you through the sample flat, clubhouse, smart home features, and surrounding area.",
      },
    ],
  },
  "3-4-plus-1-bhk-igbc-platinum-luxury-flats-for-sale-in-zirakpur-punjab": {
    title: "3 & 4+1 BHK IGBC Platinum Luxury Flats in Zirakpur",
    code: "RSH-ZIR-002",
    location: "Zirakpur, Punjab",
    price: "On Request",
    beds: 4,
    baths: 4,
    sqft: "2,325 - 3,204",
    type: "IGBC Platinum Luxury Flat",
    configuration: "3 BHK / 3+1 BHK / 4+1 BHK",
    videoEmbed: "https://www.youtube.com/embed/htUR51ehy88",
    socialLinks: {
      youtube: "https://www.youtube.com/shorts/htUR51ehy88",
      facebook: "https://www.facebook.com/share/r/1HaDQNUKnT/",
      instagram: "https://www.instagram.com/reel/DVNgwFeD0ky/",
    },
    description: [
      "This IGBC Platinum certified high-rise luxury project on PR7 Road, Zirakpur offers 3 BHK, 3+1 BHK, and 4+1 BHK configurations ranging from 2,325 sq ft to 3,204 sq ft. Designed for families who want world-class living without compromise, every flat features MIVAN construction, wraparound balconies, a personal lift, and park-facing views with expansive green areas.",
      "Each home is finished with premium interiors including designer crystal chandeliers, artistic wall panels, engineered wooden flooring, modular kitchens with built-in Hafele appliances, and designer cane and upholstered furniture across bedrooms. The project features only 2 flats per floor for maximum privacy, dedicated basement parking, and 15+ leisure activities in the clubhouse including a swimming pool, banquet hall, yoga and meditation zone, senior citizen relaxation area, and outdoor gazebos.",
      "Strategically located on PR7 Road with multiconnectivity to Punjab, Chandigarh, Himachal, Haryana, and Delhi, this project is just 9 km from Chandigarh International Airport, 5 km from Mohali Railway Station, and 14 km from Chandigarh Railway Station. Possession for 3+1 BHK units is expected by January 2027 and 4+1 BHK units by December 2027. For families and investors looking at Zirakpur, this IGBC Platinum project is a rare combination of green certification, luxury finishes, and strategic location.",
    ],
    features: [
      "IGBC Platinum Certification",
      "MIVAN construction technology",
      "Personal lift in every flat",
      "Wraparound balconies with park-facing views",
      "Only 2 flats per floor",
      "Designer crystal chandeliers and artistic wall panels",
      "Engineered wooden flooring in bedrooms",
      "Modular kitchen with built-in Hafele hob, chimney, oven, and microwave",
      "LED strip ceiling lighting throughout",
      "Cane and upholstered designer bedroom furniture",
      "Dedicated basement parking",
      "15+ leisure activities in clubhouse",
      "Swimming pool and banquet hall",
      "Yoga and meditation zone",
      "Senior citizen relaxation zone",
      "Outdoor sittings and gazebos",
      "Larger green area and park-facing layout",
    ],
    highlights: [
      { label: "Configuration", value: "3 BHK / 3+1 BHK / 4+1 BHK" },
      { label: "Sizes Available", value: "2,325 / 2,600 / 3,204 Sq Ft" },
      { label: "Certification", value: "IGBC Platinum" },
      { label: "Construction", value: "MIVAN Technology" },
      { label: "Possession", value: "Jan 2027 (3+1) / Dec 2027 (4+1)" },
      { label: "Privacy", value: "2 Flats Per Floor + Personal Lift" },
    ],
    nearby: [
      {
        category: "Shopping Destinations",
        places: [
          { name: "Paras Downtown Mall, Zirakpur", distance: "3 Kms" },
          { name: "VR Punjab Mall", distance: "7 Kms" },
          { name: "North Country Mall", distance: "5 Kms" },
          { name: "Bestech Mall, Mohali", distance: "14 Kms" },
          { name: "Elante Mall, Chandigarh", distance: "12 Kms" },
        ],
      },
      {
        category: "Health Facilities",
        places: [
          { name: "Amandeep Hospital, Zirakpur", distance: "3 Kms" },
          { name: "Ivy Hospital, Mohali", distance: "9 Kms" },
          { name: "Fortis Hospital, Mohali", distance: "12 Kms" },
          { name: "Max Hospital, Mohali", distance: "15 Kms" },
          { name: "PGIMER, Chandigarh", distance: "14 Kms" },
        ],
      },
      {
        category: "Education Institutions",
        places: [
          { name: "DPS Zirakpur", distance: "4 Kms" },
          { name: "Saupin's School", distance: "5 Kms" },
          { name: "Ryan International School", distance: "6 Kms" },
          { name: "Chandigarh University", distance: "18 Kms" },
          { name: "Punjab University, Chandigarh", distance: "14 Kms" },
          { name: "ISB Mohali", distance: "12 Kms" },
        ],
      },
      {
        category: "Leisure & Recreation",
        places: [
          { name: "Timber Trail Resort", distance: "22 Kms" },
          { name: "Sukhna Lake, Chandigarh", distance: "16 Kms" },
          { name: "Rock Garden, Chandigarh", distance: "17 Kms" },
          { name: "Rose Garden, Chandigarh", distance: "13 Kms" },
          { name: "Fun City, Chandigarh", distance: "10 Kms" },
        ],
      },
      {
        category: "Transport & Connectivity",
        places: [
          { name: "Chandigarh International Airport", distance: "9 Kms" },
          { name: "Chandigarh Railway Station", distance: "14 Kms" },
          { name: "Mohali Railway Station", distance: "5 Kms" },
          { name: "Mohali Bus Stand", distance: "13 Kms" },
          { name: "PR7 Road, Mohali", distance: "Direct Access" },
          { name: "Multiconnectivity to Punjab, Chandigarh, Himachal, Haryana & Delhi", distance: "Via NH" },
        ],
      },
    ],
    images: [
      { src: "/properties/RSH-ZIR-002/living-room.jpg", alt: "Luxury living room with crystal chandelier and designer sofas in IGBC Platinum flat Zirakpur" },
      { src: "/properties/RSH-ZIR-002/living-dining.jpg", alt: "Open-plan living and dining area with artistic wall panels in Zirakpur luxury flat" },
      { src: "/properties/RSH-ZIR-002/dining-area.jpg", alt: "Formal dining area with crystal chandelier and crockery cabinet in Zirakpur property" },
      { src: "/properties/RSH-ZIR-002/master-bedroom.jpg", alt: "Master bedroom with designer headboard and balcony view in IGBC Platinum Zirakpur flat" },
      { src: "/properties/RSH-ZIR-002/guest-bedroom.jpg", alt: "Guest bedroom with cane headboard and pendant lights in luxury Zirakpur flat" },
      { src: "/properties/RSH-ZIR-002/kitchen.jpg", alt: "Modern modular kitchen with LED strip lighting and built-in appliances in Zirakpur flat" },
      { src: "/properties/RSH-ZIR-002/modular-kitchen.jpg", alt: "Modular kitchen with Hafele built-in oven and hob in IGBC Platinum Zirakpur property" },
    ],
    faqs: [
      {
        question: "What configurations are available in this Zirakpur project?",
        answer: "This project offers 3 BHK (2,325 sq ft), 3+1 BHK (2,600 sq ft), and 4+1 BHK (3,204 sq ft) luxury flats. All configurations come with 3 or 4 bedrooms and bathrooms, wraparound balconies, and a personal lift in every flat.",
      },
      {
        question: "What is IGBC Platinum certification and why does it matter?",
        answer: "IGBC Platinum is the highest level of green building certification from the Indian Green Building Council. It means the project meets strict standards for energy efficiency, water conservation, and sustainable construction. This results in lower utility bills, healthier indoor air quality, and better long-term property value.",
      },
      {
        question: "What is MIVAN construction technology?",
        answer: "MIVAN is an advanced aluminium formwork construction technology that creates stronger, more precise structures with uniform walls and minimal joints. It is faster, more durable, and produces a superior finish compared to conventional construction methods.",
      },
      {
        question: "When is the expected possession date?",
        answer: "Possession for 3+1 BHK units is expected by January 2027. Possession for 4+1 BHK units is expected by December 2027.",
      },
      {
        question: "What clubhouse and leisure amenities are available?",
        answer: "The project offers 15+ leisure activities in the clubhouse including a swimming pool, banquet hall, yoga and meditation zone, senior citizen relaxation area, outdoor sittings and gazebos. The project also features larger green areas and park-facing layouts.",
      },
      {
        question: "How many flats are there per floor?",
        answer: "There are only 2 flats per floor, which ensures maximum privacy, better ventilation, and a more exclusive living experience. Each flat also comes with a personal lift.",
      },
      {
        question: "How far is this property from the airport and railway stations?",
        answer: "Chandigarh International Airport is 9 km away, Mohali Railway Station is 5 km, Chandigarh Railway Station is 14 km, and Mohali Bus Stand is 13 km. The project is strategically located on PR7 Road with multiconnectivity to Punjab, Chandigarh, Himachal, Haryana, and Delhi.",
      },
      {
        question: "How can I schedule a site visit for this property?",
        answer: "Contact RedStar Huts through the form on this page or call us at +91 889 434 3056. We will arrange a private site visit at your convenience and walk you through the sample flat, clubhouse, and surrounding area.",
      },
    ],
  },
  "4-plus-1-bhk-premium-flat-for-sale-in-zirakpur-punjab": {
    title: "4+1 BHK Premium Flat in Zirakpur",
    code: "RSH-ZIR-001",
    location: "Zirakpur, Punjab",
    price: "On Request",
    beds: 4,
    baths: 4,
    sqft: "2,505",
    type: "Premium Flat",
    configuration: "4+1 BHK",
    description: [
      "This 4+1 BHK premium flat in Zirakpur offers 2,505 sq ft of thoughtfully designed living space for families who want comfort, convenience, and a modern lifestyle. With 4 spacious bedrooms, 4 bathrooms, and a dedicated stilt parking area, this home is built for everyday ease and long-term value.",
      "The flat features premium vitrified tiles and anti-skid tile finishing, laminate flush doors, acrylic emulsion paint, and a kitchen with a premium granite countertop. Every bedroom comes with attached AC, and the home includes false ceilings with ambient lighting, Jaquar and Kohler sanitary and vanity fittings, and 24x7 power backup. The building is an earthquake-resistant frame structure vetted from IIT Roorkee.",
      "Step outside your front door and you have access to a lavish clubhouse, swimming pool, gymnasium, indoor games room, party hall, jogging area, meditation area, and gazebo. The property also features rainwater harvesting, on-site kitchen and garden waste management, and separate guest parking. Located in Zirakpur, Punjab, you are minutes from Chandigarh, top schools, hospitals, and shopping centres on the Chandigarh-Ambala highway.",
    ],
    features: [
      "Premium vitrified tiles and anti-skid tile finishing",
      "Kitchen with premium granite countertop",
      "Attached AC in living, dining, drawing, and all bedrooms",
      "24x7 power backup",
      "False ceilings with ambient lighting",
      "Laminate flush doors",
      "Acrylic emulsion paint finish",
      "Jaquar and Kohler sanitary and vanity fittings",
      "Earthquake-resistant frame structure (IIT Roorkee vetted)",
      "Dedicated stilt parking",
      "Separate guest parking",
      "Rainwater harvesting system",
      "On-site kitchen and garden waste management",
      "Lavish clubhouse with swimming pool",
      "Gymnasium, indoor games room, and party hall",
      "Jogging area, meditation area, and gazebo",
    ],
    highlights: [
      { label: "Configuration", value: "4+1 BHK" },
      { label: "Super Area", value: "2,505 Sq Ft" },
      { label: "Bedrooms", value: "4 Bedrooms, 4 Bathrooms" },
      { label: "Type", value: "Premium Flat" },
      { label: "Structure", value: "Earthquake Resistant (IIT Roorkee)" },
      { label: "Parking", value: "Dedicated Stilt Parking" },
    ],
    nearby: [
      {
        category: "Shopping Destinations",
        places: [
          { name: "VR Punjab Mall", distance: "5 Kms" },
          { name: "North Country Mall", distance: "3 Kms" },
          { name: "Bestech Mall, Mohali", distance: "12 Kms" },
          { name: "Elante Mall, Chandigarh", distance: "10 Kms" },
          { name: "Paras Downtown Mall, Zirakpur", distance: "2 Kms" },
        ],
      },
      {
        category: "Health Facilities",
        places: [
          { name: "Amandeep Hospital, Zirakpur", distance: "2 Kms" },
          { name: "Ivy Hospital, Mohali", distance: "8 Kms" },
          { name: "Fortis Hospital, Mohali", distance: "10 Kms" },
          { name: "Max Hospital, Mohali", distance: "14 Kms" },
          { name: "PGIMER, Chandigarh", distance: "12 Kms" },
        ],
      },
      {
        category: "Education Institutions",
        places: [
          { name: "DPS Zirakpur", distance: "3 Kms" },
          { name: "Saupin's School", distance: "4 Kms" },
          { name: "Ryan International School", distance: "5 Kms" },
          { name: "Chandigarh University", distance: "15 Kms" },
          { name: "Punjab University, Chandigarh", distance: "12 Kms" },
          { name: "ISB Mohali", distance: "10 Kms" },
        ],
      },
      {
        category: "Leisure & Recreation",
        places: [
          { name: "Timber Trail Resort", distance: "20 Kms" },
          { name: "Sukhna Lake, Chandigarh", distance: "14 Kms" },
          { name: "Rock Garden, Chandigarh", distance: "15 Kms" },
          { name: "Rose Garden, Chandigarh", distance: "11 Kms" },
          { name: "Fun City, Chandigarh", distance: "8 Kms" },
        ],
      },
      {
        category: "Transport & Connectivity",
        places: [
          { name: "Chandigarh-Ambala Highway (NH-22)", distance: "Direct Access" },
          { name: "Chandigarh International Airport", distance: "18 Kms" },
          { name: "Chandigarh Railway Station", distance: "12 Kms" },
          { name: "ISBT Chandigarh", distance: "10 Kms" },
          { name: "Proposed Zirakpur Metro Station", distance: "2 Kms" },
        ],
      },
    ],
    images: [
      { src: "/properties/RSH-ZIR-001/living-room.jpg", alt: "Luxury living room with designer furniture in 4+1 BHK flat Zirakpur" },
      { src: "/properties/RSH-ZIR-001/dining-area.jpg", alt: "Elegant dining area with mirror wall in premium Zirakpur flat" },
      { src: "/properties/RSH-ZIR-001/master-bedroom.jpg", alt: "Master bedroom with gold accent wall in Zirakpur property" },
      { src: "/properties/RSH-ZIR-001/guest-bedroom.jpg", alt: "Guest bedroom with upholstered headboard in Zirakpur flat" },
      { src: "/properties/RSH-ZIR-001/kids-bedroom.jpg", alt: "Kids bedroom with vibrant decor in premium Zirakpur flat" },
      { src: "/properties/RSH-ZIR-001/kitchen.jpg", alt: "Modern kitchen with granite countertop in Zirakpur property" },
      { src: "/properties/RSH-ZIR-001/drawing-room.jpg", alt: "Drawing room with contemporary design in Zirakpur flat" },
      { src: "/properties/RSH-ZIR-001/clubhouse-aerial.jpg", alt: "Aerial view of clubhouse with swimming pool and landscaped gardens in Zirakpur" },
    ],
    faqs: [
      {
        question: "What is the size and configuration of this flat in Zirakpur?",
        answer: "This is a 4+1 BHK premium flat with a super area of 2,505 sq ft. It includes 4 bedrooms, 4 bathrooms, dedicated stilt parking, and separate guest parking.",
      },
      {
        question: "What kitchen fittings are included in this Zirakpur property?",
        answer: "The kitchen comes with a premium granite countertop. The flat also features premium vitrified tiles, anti-skid tile finishing, and laminate flush doors throughout.",
      },
      {
        question: "Does this flat have air conditioning and power backup?",
        answer: "Yes. The flat comes with attached AC in the living room, dining area, drawing room, and all bedrooms. It also has 24x7 power backup for uninterrupted comfort.",
      },
      {
        question: "What amenities are available in the society?",
        answer: "The property features a lavish clubhouse, swimming pool, gymnasium, indoor games room, party hall, jogging area, meditation area, gazebo, rainwater harvesting, and on-site waste management.",
      },
      {
        question: "Is this building earthquake resistant?",
        answer: "Yes. The building uses an earthquake-resistant frame structure that has been vetted by IIT Roorkee, one of India's top engineering institutions.",
      },
      {
        question: "What sanitary fittings are used in this property?",
        answer: "The flat comes with Jaquar and Kohler sanitary and vanity fittings throughout, along with acrylic emulsion paint finish and false ceilings with ambient lighting.",
      },
      {
        question: "How far is this property from key locations?",
        answer: "The flat is in Zirakpur, Punjab, on the Chandigarh-Ambala Highway. Chandigarh International Airport is 18 kms away, VR Punjab Mall is 5 kms, Fortis Hospital Mohali is 10 kms, and DPS Zirakpur is just 3 kms.",
      },
      {
        question: "How can I schedule a site visit for this property?",
        answer: "Contact RedStar Huts through the form on this page or call us at +91 889 434 3056. We will arrange a private site visit at your convenience.",
      },
    ],
  },
  "residential-plots-for-sale-in-dholera-smart-city-gujarat": {
    title: "Residential Plots in Dholera Smart City",
    code: "RSH-DHO-001",
    location: "Dholera, Gujarat",
    price: "On Request",
    beds: 0,
    baths: 0,
    sqft: "310+",
    type: "Residential Plot",
    configuration: "Plotting",
    description: [
      "Dholera Smart City is India's first greenfield smart city, and one of the most ambitious infrastructure projects in the country. Spread across 920 sq km in Gujarat, Dholera SIR (Special Investment Region) is being built from the ground up with world-class planning, smart infrastructure, and direct connectivity to major economic corridors. This is not just a real estate opportunity. It is an early entry into what will become one of India's most important urban centres.",
      "RedStar Huts is working across 17 acres and 46 acres within Dholera, offering residential plots starting from 310 sq yards. The township is planned with 60 ft wide roads, 40 ft internal roads, underground utilities for power, water, and data, a solar park, grand clubhouse, modern gym, kids play zone, yoga and wellness studio, co-working lounge, commercial complex, and an in-house STP plant. Completion is targeted by 2028.",
      "Dholera's location gives it direct connectivity to the Ahmedabad-Dholera Expressway, the NHAI Adhelai Diamond Circle, and the upcoming Dholera International Airport. It sits on the Delhi-Mumbai Industrial Corridor (DMIC) and is close to the TATA Semiconductor Plant, sea port, and proposed sea links. For investors looking at high appreciation potential in a government-backed smart city, Dholera is the strongest bet in India right now.",
    ],
    features: [
      "Plot sizes starting from 310 sq yards",
      "60 ft wide main roads and 40 ft internal roads",
      "Underground utilities for power, water, and data",
      "Solar park within the township",
      "Grand clubhouse with lounge",
      "Modern fully equipped gymnasium",
      "Kids play zone",
      "Yoga and wellness studio",
      "Co-working lounge",
      "Commercial complex",
      "In-house STP plant",
      "24x7 power supply",
    ],
    highlights: [
      { label: "Project Type", value: "Residential Plotting" },
      { label: "Plot Size", value: "Starting from 310 Sq Yards" },
      { label: "Total Area", value: "17 + 46 Acres" },
      { label: "Completion", value: "2028" },
      { label: "Roads", value: "60 ft Main, 40 ft Internal" },
      { label: "Smart City Area", value: "920 Sq Km" },
    ],
    nearby: [
      {
        category: "Transport & Connectivity",
        places: [
          { name: "Ahmedabad-Dholera Expressway", distance: "Direct Access" },
          { name: "NHAI Adhelai Diamond Circle", distance: "Nearby" },
          { name: "Dholera International Airport (under development)", distance: "10 Kms" },
          { name: "Ahmedabad City", distance: "80 Kms" },
          { name: "Sea Port & Proposed Sea Links", distance: "30 Kms" },
        ],
      },
      {
        category: "Industrial & Economic Hubs",
        places: [
          { name: "TATA Semiconductor Plant", distance: "Direct Connectivity" },
          { name: "Delhi-Mumbai Industrial Corridor (DMIC)", distance: "On Corridor" },
          { name: "Dholera SIR Activation Area", distance: "Within SIR" },
          { name: "Solar Power Park", distance: "Within Township" },
        ],
      },
      {
        category: "Key Landmarks",
        places: [
          { name: "Dholera SIR Administrative Office", distance: "5 Kms" },
          { name: "Bhavnagar City", distance: "60 Kms" },
          { name: "Rajkot City", distance: "180 Kms" },
          { name: "Gandhinagar (State Capital)", distance: "100 Kms" },
        ],
      },
    ],
    images: [
      { src: "/properties/RSH-DHO-001/expressway-aerial.jpg", alt: "Aerial view of Ahmedabad-Dholera Expressway connecting to Dholera Smart City" },
      { src: "/properties/RSH-DHO-001/satellite-view.jpg", alt: "Satellite view of 17 acre and 46 acre Serenity Estate in Dholera" },
      { src: "/properties/RSH-DHO-001/layout-plan.jpg", alt: "Layout plan of residential plots in Dholera Smart City township" },
      { src: "/properties/RSH-DHO-001/dholera-sir-map.jpg", alt: "Dholera SIR master plan showing India's first greenfield smart city" },
    ],
    faqs: [
      {
        question: "What is Dholera Smart City and why should I invest here?",
        answer: "Dholera is India's first greenfield smart city, spread across 920 sq km in Gujarat. It is part of the Delhi-Mumbai Industrial Corridor (DMIC) and is being developed with world-class infrastructure including an international airport, expressway connectivity, and smart grid systems. Early investors stand to benefit from high appreciation as the city develops.",
      },
      {
        question: "What plot sizes are available in this Dholera township?",
        answer: "Residential plots start from 310 sq yards. The township spans 17 acres and 46 acres within Dholera SIR, with 60 ft wide main roads and 40 ft internal roads for comfortable living.",
      },
      {
        question: "When will the Dholera township be completed?",
        answer: "The township is planned for completion by 2028. Infrastructure development including roads, underground utilities, and amenities is already in progress.",
      },
      {
        question: "What amenities are included in the township?",
        answer: "The township includes a grand clubhouse, modern gym, kids play zone, yoga and wellness studio, co-working lounge, commercial complex, solar park, in-house STP plant, underground utilities for power, water, and data, and 24x7 power supply.",
      },
      {
        question: "How is Dholera connected to major cities?",
        answer: "Dholera has direct connectivity via the Ahmedabad-Dholera Expressway, is close to the NHAI Adhelai Diamond Circle, and will be connected to the upcoming Dholera International Airport. It also has proximity to the TATA Semiconductor Plant, sea port, and proposed sea links.",
      },
      {
        question: "Is Dholera suitable for end users or only investors?",
        answer: "Dholera is designed for both. The smart city infrastructure, township amenities, and commercial complex make it suitable for families who want to live here. At the same time, the DMIC connectivity, airport, and industrial development make it a strong investment with high appreciation potential.",
      },
      {
        question: "How can I book a plot in Dholera through RedStar Huts?",
        answer: "Contact RedStar Huts through the form on this page or call us at +91 889 434 3056. We will share the available plot inventory, pricing, and arrange a site visit to Dholera at your convenience.",
      },
    ],
  },
};

export const propertyMeta: Record<string, PropertySEO> = {
  "3-plus-1-bhk-premium-flat-for-sale-in-mohali-punjab-2901-sq-ft": {
    title: "3+1 BHK Premium Flat for Sale in Mohali, Punjab | 2,901 Sq Ft",
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
    title: "3+1 BHK Ultra Luxury Flat for Sale in Mohali, Punjab | 3,377-3,788 Sq Ft",
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
    title: "4+1 BHK Premium Flat for Sale in Mohali, Punjab | 3,677-4,055 Sq Ft",
    description: "Premium 4+1 BHK flat in Mohali, Punjab. Available in 3,677 & 4,055 sq ft. Premium marble flooring, attached AC, automated curtains, granite kitchen, 24x7 power backup. Contact RedStar Huts.",
    price: "On Request",
    location: "Mohali, Punjab",
    beds: 4,
    baths: 4,
    sqft: "3,677 - 4,055",
    type: "Premium Flat",
    image: "/properties/RSH-MOH-003/living-room.jpg",
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
  "3-4-plus-1-bhk-smart-home-ultra-luxury-flats-for-sale-in-zirakpur-punjab": {
    title: "3 & 4+1 BHK Smart Home Ultra Luxury Flats for Sale in Zirakpur, Punjab | 1,843-2,945 Sq Ft",
    description: "Ready-to-move IGBC certified 3 BHK, 3+1 BHK, and 4+1 BHK smart home ultra luxury flats on Zirakpur-Patiala Highway. 1,843-2,945 sq ft with voice control, automated lighting, motion sensors, MIVAN construction, rooftop pool, pet-friendly zone. Contact RedStar Huts.",
    price: "On Request",
    location: "Zirakpur, Punjab",
    beds: 4,
    baths: 4,
    sqft: "1,843 - 2,945",
    type: "Smart Home Ultra Luxury Flat",
    image: "/properties/RSH-ZIR-003/living-room.jpg",
    keywords: [
      "smart home flat Zirakpur",
      "3 BHK ultra luxury flat Zirakpur",
      "4+1 BHK smart home Zirakpur",
      "ready to move luxury flat Zirakpur",
      "IGBC certified flat Zirakpur Punjab",
      "voice control flat Zirakpur",
      "automated home Zirakpur",
      "MIVAN construction Zirakpur",
      "rooftop pool flat Zirakpur",
      "pet friendly apartment Zirakpur",
      "Zirakpur Patiala Highway property",
      "buy flat in Zirakpur ready to move",
      "NRI property Zirakpur Punjab",
      "RedStar Huts Zirakpur",
    ],
  },
  "3-4-plus-1-bhk-igbc-platinum-luxury-flats-for-sale-in-zirakpur-punjab": {
    title: "3 & 4+1 BHK IGBC Platinum Luxury Flats for Sale in Zirakpur, Punjab | 2,325-3,204 Sq Ft",
    description: "IGBC Platinum certified 3 BHK, 3+1 BHK, and 4+1 BHK luxury flats on PR7 Road, Zirakpur. 2,325-3,204 sq ft with MIVAN construction, personal lift, wraparound balconies, Hafele kitchen, swimming pool, 15+ clubhouse activities. Possession from Jan 2027. Contact RedStar Huts.",
    price: "On Request",
    location: "Zirakpur, Punjab",
    beds: 4,
    baths: 4,
    sqft: "2,325 - 3,204",
    type: "IGBC Platinum Luxury Flat",
    image: "/properties/RSH-ZIR-002/living-room.jpg",
    keywords: [
      "IGBC Platinum flat Zirakpur",
      "3 BHK luxury flat Zirakpur",
      "4+1 BHK flat for sale Zirakpur",
      "PR7 Road Zirakpur property",
      "MIVAN construction flat Zirakpur",
      "luxury flat near Chandigarh",
      "personal lift flat Zirakpur",
      "green certified flat Punjab",
      "high rise luxury apartment Zirakpur",
      "flat with swimming pool Zirakpur",
      "buy flat in Zirakpur 2027",
      "Zirakpur real estate investment",
      "NRI property Zirakpur Punjab",
      "RedStar Huts Zirakpur",
    ],
  },
  "4-plus-1-bhk-premium-flat-for-sale-in-zirakpur-punjab": {
    title: "4+1 BHK Premium Flat for Sale in Zirakpur, Punjab | 2,505 Sq Ft",
    description: "Premium 4+1 BHK flat for sale in Zirakpur, Punjab. 2,505 sq ft with 4 bedrooms, 4 bathrooms, attached AC, Jaquar/Kohler fittings, clubhouse, swimming pool, gymnasium, and earthquake-resistant structure. Contact RedStar Huts.",
    price: "On Request",
    location: "Zirakpur, Punjab",
    beds: 4,
    baths: 4,
    sqft: "2,505",
    type: "Premium Flat",
    image: "/properties/RSH-ZIR-001/living-room.jpg",
    keywords: [
      "4 BHK flat for sale in Zirakpur",
      "4+1 BHK premium flat Zirakpur Punjab",
      "flat for sale in Zirakpur",
      "premium flat Zirakpur",
      "luxury flat near Chandigarh",
      "2505 sq ft flat Zirakpur",
      "buy flat in Zirakpur",
      "Zirakpur real estate",
      "property in Zirakpur Punjab",
      "gated community Zirakpur",
      "flat with clubhouse Zirakpur",
      "earthquake resistant flat Punjab",
      "NRI property Zirakpur",
      "RedStar Huts Zirakpur",
    ],
  },
  "residential-plots-for-sale-in-dholera-smart-city-gujarat": {
    title: "Residential Plots for Sale in Dholera Smart City, Gujarat | Starting 310 Sq Yards",
    description: "Buy residential plots in Dholera Smart City, Gujarat. Starting from 310 sq yards in a 63-acre township with clubhouse, gym, solar park, 60 ft roads, and direct expressway connectivity. Completion by 2028. Contact RedStar Huts.",
    price: "On Request",
    location: "Dholera, Gujarat",
    beds: 0,
    baths: 0,
    sqft: "310+",
    type: "Residential Plot",
    image: "/properties/RSH-DHO-001/expressway-aerial.jpg",
    keywords: [
      "plots for sale in Dholera",
      "Dholera Smart City plots",
      "residential plots Dholera Gujarat",
      "Dholera SIR investment",
      "buy plot in Dholera",
      "Dholera Smart City investment",
      "DMIC Dholera property",
      "Dholera airport nearby plots",
      "Gujarat smart city plots",
      "Dholera township plots",
      "Dholera land for sale",
      "invest in Dholera 2026",
      "Dholera real estate",
      "RedStar Huts Dholera",
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
