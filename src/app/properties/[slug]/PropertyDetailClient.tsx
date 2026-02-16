"use client";

import Image from "next/image";
import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";

const propertiesData: Record<
  string,
  {
    title: string;
    location: string;
    price: string;
    beds: number;
    baths: number;
    sqft: string;
    type: string;
    description: string[];
    features: string[];
    images: { src: string; alt: string }[];
    image: string;
  }
> = {
  "meridian-residence": {
    title: "The Meridian Residence",
    location: "Beverly Hills, CA",
    price: "$4,850,000",
    beds: 5,
    baths: 4,
    sqft: "6,200",
    type: "Residential",
    description: [
      "Nestled in the heart of Beverly Hills, The Meridian Residence is a masterfully designed home that seamlessly blends modern luxury with timeless elegance. Every detail has been carefully considered to create a living experience that is both refined and welcoming.",
      "Floor-to-ceiling windows flood the interiors with natural light, while premium materials and finishes create an atmosphere of quiet sophistication throughout. The open floor plan connects seamlessly to expansive outdoor living spaces with panoramic views.",
    ],
    features: [
      "Chef's kitchen with Italian marble countertops",
      "Primary suite with private terrace and spa bath",
      "Infinity pool with city views",
      "Home theater and wine cellar",
      "Smart home automation throughout",
      "Three-car garage with EV charging",
    ],
    images: [
      { src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80", alt: "Meridian Residence exterior" },
      { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80", alt: "Modern kitchen" },
      { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80", alt: "Living room" },
      { src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80", alt: "Master bedroom" },
      { src: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80", alt: "Pool area" },
    ],
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
  },
  "harborview-estate": {
    title: "Harborview Estate",
    location: "Miami Beach, FL",
    price: "$3,200,000",
    beds: 4,
    baths: 3,
    sqft: "4,800",
    type: "Residential",
    description: [
      "Harborview Estate captures the essence of coastal luxury living in one of Miami Beach's most prestigious neighborhoods. This stunning waterfront property offers breathtaking views and an unparalleled lifestyle experience.",
      "The residence features an open-concept design with soaring ceilings, a gourmet kitchen, and walls of glass that blur the line between indoor and outdoor living. The private dock and resort-style pool complete this exceptional offering.",
    ],
    features: [
      "Direct waterfront with private dock",
      "Resort-style pool and outdoor kitchen",
      "Impact-resistant floor-to-ceiling windows",
      "Gourmet kitchen with top-tier appliances",
      "Rooftop terrace with panoramic water views",
      "Hurricane-rated construction",
    ],
    images: [
      { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80", alt: "Harborview Estate exterior" },
      { src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80", alt: "Open living space" },
      { src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80", alt: "Waterfront view" },
      { src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80", alt: "Bedroom suite" },
      { src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80", alt: "Pool and garden" },
    ],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
  "crestwood-manor": {
    title: "Crestwood Manor",
    location: "Greenwich, CT",
    price: "$7,100,000",
    beds: 6,
    baths: 5,
    sqft: "8,500",
    type: "Estate",
    description: [
      "Crestwood Manor is a distinguished estate set on over three acres of meticulously landscaped grounds in Greenwich's most coveted enclave. This property represents the pinnacle of New England luxury living.",
      "The manor features grand formal rooms with soaring ceilings, a library with hand-carved woodwork, and a chef's kitchen designed for both intimate dinners and grand entertaining. The grounds include a tennis court, heated pool, and guest cottage.",
    ],
    features: [
      "3+ acres of professionally landscaped grounds",
      "Grand foyer with double-height ceiling",
      "Library with custom millwork and fireplace",
      "Heated pool and championship tennis court",
      "Separate guest cottage with full kitchen",
      "Six-car heated garage",
    ],
    images: [
      { src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80", alt: "Crestwood Manor exterior" },
      { src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80", alt: "Grand interior" },
      { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80", alt: "Formal living room" },
      { src: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80", alt: "Estate grounds" },
      { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80", alt: "Garden view" },
    ],
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
  },
  "pinnacle-penthouse": {
    title: "The Pinnacle Penthouse",
    location: "Manhattan, NY",
    price: "$12,500,000",
    beds: 3,
    baths: 3,
    sqft: "4,200",
    type: "Penthouse",
    description: [
      "Perched atop one of Manhattan's most prestigious towers, The Pinnacle Penthouse offers an unrivaled living experience with 360-degree views of the city skyline, Central Park, and the Hudson River.",
      "This meticulously designed residence features museum-quality finishes, a private elevator entry, and floor-to-ceiling windows that frame the city as living art. The chef's kitchen, spacious entertaining areas, and serene private quarters create the ultimate urban retreat.",
    ],
    features: [
      "360-degree panoramic city and park views",
      "Private elevator entry with dedicated landing",
      "Floor-to-ceiling windows throughout",
      "Custom Italian cabinetry and stone finishes",
      "Radiant heated floors",
      "Full-service building with concierge",
    ],
    images: [
      { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80", alt: "Pinnacle Penthouse interior" },
      { src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80", alt: "City skyline view" },
      { src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80", alt: "Living area" },
      { src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80", alt: "Master suite" },
      { src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80", alt: "Kitchen detail" },
    ],
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  },
  "lakeshore-villa": {
    title: "Lakeshore Villa",
    location: "Lake Tahoe, NV",
    price: "$5,600,000",
    beds: 5,
    baths: 4,
    sqft: "5,800",
    type: "Residential",
    description: [
      "Lakeshore Villa is a stunning lakefront property offering direct access to the pristine waters of Lake Tahoe. This mountain modern masterpiece combines rustic warmth with contemporary luxury in one of America's most breathtaking settings.",
      "The home features dramatic vaulted ceilings with exposed timber beams, a great room with floor-to-ceiling stone fireplace, and expansive decks that frame the lake and mountain views. A private beach and dock complete this extraordinary retreat.",
    ],
    features: [
      "Direct lakefront with private beach and dock",
      "Vaulted ceilings with exposed timber beams",
      "Great room with floor-to-ceiling stone fireplace",
      "Heated outdoor living areas with fire pit",
      "Ski-in/ski-out trail access",
      "Separate guest wing with private entrance",
    ],
    images: [
      { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80", alt: "Lakeshore Villa exterior" },
      { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80", alt: "Lake view" },
      { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80", alt: "Interior great room" },
      { src: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80", alt: "Outdoor deck" },
      { src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80", alt: "Mountain view" },
    ],
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
  },
  "the-wellington": {
    title: "The Wellington",
    location: "San Francisco, CA",
    price: "$2,950,000",
    beds: 3,
    baths: 2,
    sqft: "3,100",
    type: "Condominium",
    description: [
      "The Wellington offers sophisticated urban living in one of San Francisco's most desirable neighborhoods. This beautifully appointed condominium combines classic architectural character with modern luxury amenities.",
      "Thoughtfully designed interiors feature hardwood floors, custom millwork, and an open kitchen that flows seamlessly into generous living and dining areas. The private terrace provides the perfect setting for enjoying iconic city views.",
    ],
    features: [
      "Corner unit with abundant natural light",
      "Private terrace with Golden Gate Bridge views",
      "Hardwood floors and custom millwork throughout",
      "Chef's kitchen with premium appliances",
      "In-unit laundry and ample storage",
      "Deeded parking and building amenities",
    ],
    images: [
      { src: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1200&q=80", alt: "The Wellington exterior" },
      { src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80", alt: "Living room" },
      { src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80", alt: "Kitchen" },
      { src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80", alt: "Bedroom" },
      { src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80", alt: "City view" },
    ],
    image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80",
  },
  "aspen-ridge-retreat": {
    title: "Aspen Ridge Retreat",
    location: "Aspen, CO",
    price: "$8,900,000",
    beds: 7,
    baths: 6,
    sqft: "9,200",
    type: "Estate",
    description: [
      "Aspen Ridge Retreat is an extraordinary mountain estate that redefines luxury living in one of the world's most exclusive resort destinations. Set against a backdrop of pristine alpine peaks, this property offers an unmatched combination of grandeur and natural beauty.",
      "The estate features a dramatic great room with soaring windows, a wine cellar, home theater, and a spa-level wellness suite. Outdoor living includes heated terraces, an infinity-edge pool, and direct trail access for skiing and hiking.",
    ],
    features: [
      "Panoramic mountain views from every room",
      "Great room with 30-foot ceilings and stone fireplace",
      "Wine cellar and tasting room",
      "Home theater with Dolby Atmos",
      "Infinity-edge heated pool and hot tub",
      "Spa suite with sauna and steam room",
    ],
    images: [
      { src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80", alt: "Aspen Ridge exterior" },
      { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80", alt: "Mountain great room" },
      { src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80", alt: "Estate view" },
      { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80", alt: "Interior detail" },
      { src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80", alt: "Pool area" },
    ],
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
  },
  "pacific-heights-modern": {
    title: "Pacific Heights Modern",
    location: "San Francisco, CA",
    price: "$6,250,000",
    beds: 4,
    baths: 4,
    sqft: "5,100",
    type: "Residential",
    description: [
      "Pacific Heights Modern is a striking contemporary residence in San Francisco's most prestigious neighborhood. This architectural gem combines clean lines and innovative design with warm, livable spaces that welcome both daily life and grand entertaining.",
      "The home features an open floor plan that flows across three levels, connected by a sculptural floating staircase. Premium materials, integrated smart home technology, and a rooftop terrace with panoramic bay views define this exceptional property.",
    ],
    features: [
      "Three levels of open-concept living",
      "Sculptural floating staircase",
      "Rooftop terrace with bay and bridge views",
      "Integrated smart home system",
      "Chef's kitchen with waterfall island",
      "Two-car garage with direct interior access",
    ],
    images: [
      { src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=80", alt: "Pacific Heights exterior" },
      { src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80", alt: "Modern facade" },
      { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80", alt: "Living area" },
      { src: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80", alt: "Kitchen" },
      { src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80", alt: "Terrace view" },
    ],
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80",
  },
  "strand-collection": {
    title: "The Strand Collection",
    location: "Malibu, CA",
    price: "$15,800,000",
    beds: 5,
    baths: 5,
    sqft: "7,400",
    type: "Beachfront",
    description: [
      "The Strand Collection represents the ultimate in California beachfront living. This exceptional Malibu property sits directly on the sand with unobstructed ocean views that stretch to the horizon, offering a lifestyle that is truly without equal.",
      "Designed by a renowned architect, the residence features walls of glass that open completely to the ocean, creating an indoor-outdoor living experience that celebrates the natural beauty of its setting. Premium materials and meticulous craftsmanship are evident in every detail.",
    ],
    features: [
      "Direct beachfront on Carbon Beach",
      "Retractable glass walls to ocean",
      "Oceanfront primary suite with spa bath",
      "Heated infinity pool overlooking the Pacific",
      "Professional-grade outdoor kitchen",
      "Private beach access and guest house",
    ],
    images: [
      { src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&q=80", alt: "Strand Collection exterior" },
      { src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80", alt: "Beach view" },
      { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80", alt: "Ocean-view living" },
      { src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80", alt: "Primary suite" },
      { src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80", alt: "Pool and ocean" },
    ],
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80",
  },
  "royal-greens-villa": {
    title: "The Royal Greens Villa",
    location: "Mohali, Punjab",
    price: "\u20B92.8 Cr",
    beds: 4,
    baths: 3,
    sqft: "3,200",
    type: "Villa",
    description: [
      "The Royal Greens Villa is a distinguished property situated in one of Mohali's most sought-after gated communities. Surrounded by lush green landscapes and designed with meticulous attention to detail, this villa offers an elevated lifestyle that is both serene and luxurious.",
      "Spacious living areas flow seamlessly into manicured gardens, while the premium interiors feature Italian marble flooring, designer lighting, and a modern modular kitchen. The private terrace offers panoramic views of the Shivalik foothills.",
    ],
    features: [
      "Gated community with 24/7 security",
      "Italian marble flooring throughout",
      "Private terrace with Shivalik views",
      "Modular kitchen with premium appliances",
      "Landscaped private garden",
      "Covered parking for two vehicles",
    ],
    images: [
      { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80", alt: "Royal Greens Villa exterior" },
      { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80", alt: "Living room" },
      { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80", alt: "Kitchen" },
      { src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80", alt: "Master bedroom" },
      { src: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80", alt: "Garden area" },
    ],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
  "mohali-heights-penthouse": {
    title: "Mohali Heights Penthouse",
    location: "Mohali, Punjab",
    price: "\u20B91.6 Cr",
    beds: 3,
    baths: 3,
    sqft: "2,400",
    type: "Penthouse",
    description: [
      "Mohali Heights Penthouse is a sky-level residence offering unmatched views of the Tricity skyline. Positioned in a premium high-rise tower, this penthouse combines contemporary design with thoughtful luxury for an extraordinary urban living experience.",
      "Double-height ceilings in the living area, a wraparound balcony, and floor-to-ceiling glazing create a dramatic sense of openness. The designer interiors feature imported fixtures, a spa-style master bath, and a private rooftop terrace for entertaining.",
    ],
    features: [
      "Double-height ceiling in living area",
      "Wraparound balcony with city views",
      "Private rooftop terrace",
      "Spa-style master bathroom",
      "Imported fixtures and fittings",
      "Dedicated elevator access",
    ],
    images: [
      { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80", alt: "Mohali Heights Penthouse" },
      { src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80", alt: "Living area" },
      { src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80", alt: "Balcony views" },
      { src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80", alt: "Bedroom" },
      { src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80", alt: "City skyline" },
    ],
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  },
  "elante-residences": {
    title: "Elante Residences",
    location: "Chandigarh",
    price: "\u20B93.5 Cr",
    beds: 4,
    baths: 4,
    sqft: "3,800",
    type: "Residential",
    description: [
      "Elante Residences is a premium address in the heart of Chandigarh, offering sophisticated living with world-class amenities. Designed for discerning homeowners who value both location and quality, this residence sits within walking distance of the city's finest retail and dining destinations.",
      "The interiors showcase a harmonious blend of warm wood accents and contemporary minimalism. Expansive windows invite abundant natural light, while the open floor plan creates an effortless flow between living, dining, and entertainment spaces.",
    ],
    features: [
      "Prime location near Elante Mall",
      "Open-concept living with 10-foot ceilings",
      "Premium wood and stone finishes",
      "Temperature-controlled wine storage",
      "Clubhouse with pool and gymnasium",
      "Underground parking with two dedicated spots",
    ],
    images: [
      { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80", alt: "Elante Residences exterior" },
      { src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80", alt: "Living space" },
      { src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80", alt: "Dining area" },
      { src: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80", alt: "Master bedroom" },
      { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80", alt: "Balcony" },
    ],
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
  },
  "sector-9-heritage-home": {
    title: "Sector 9 Heritage Home",
    location: "Chandigarh",
    price: "\u20B94.2 Cr",
    beds: 5,
    baths: 4,
    sqft: "4,500",
    type: "Estate",
    description: [
      "Sector 9 Heritage Home is a distinguished independent property in one of Chandigarh's most prestigious sectors, originally designed in the Le Corbusier tradition. This fully renovated estate combines mid-century architectural character with modern luxury throughout.",
      "Set on a generous plot with mature trees and a private driveway, the home features a grand double-height entrance, formal living and dining areas, and a landscaped rear garden with a covered entertaining pavilion. Premium materials and craftsmanship define every space.",
    ],
    features: [
      "Prime Sector 9 location near Sukhna Lake",
      "Grand double-height entrance foyer",
      "Fully renovated with premium finishes",
      "Landscaped garden with entertaining pavilion",
      "Separate servants' quarters",
      "Covered parking for three vehicles",
    ],
    images: [
      { src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80", alt: "Sector 9 Heritage Home" },
      { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80", alt: "Formal living room" },
      { src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80", alt: "Estate view" },
      { src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80", alt: "Interior" },
      { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80", alt: "Garden" },
    ],
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
  },
  "ambience-boulevard": {
    title: "Ambience Boulevard",
    location: "Zirakpur, Punjab",
    price: "\u20B91.2 Cr",
    beds: 3,
    baths: 2,
    sqft: "1,800",
    type: "Residential",
    description: [
      "Ambience Boulevard offers a refined living experience along the Chandigarh-Ambala highway corridor, one of the Tricity's fastest-developing residential belts. This thoughtfully designed apartment combines smart space planning with premium finishes at an exceptional value.",
      "The residence features an open kitchen with a breakfast bar, generous balconies overlooking landscaped greens, and a master suite with walk-in wardrobe. The development includes a clubhouse, swimming pool, and children's play area within the gated community.",
    ],
    features: [
      "Gated community with landscaped greens",
      "Open kitchen with breakfast bar",
      "Master suite with walk-in wardrobe",
      "Clubhouse, pool, and play area",
      "Proximity to Chandigarh-Ambala highway",
      "Covered parking with EV charging provision",
    ],
    images: [
      { src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&q=80", alt: "Ambience Boulevard" },
      { src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80", alt: "Living area" },
      { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80", alt: "Kitchen" },
      { src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80", alt: "Bedroom" },
      { src: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80", alt: "Balcony view" },
    ],
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80",
  },
  "vr-punjab-luxury-floors": {
    title: "VR Punjab Luxury Floors",
    location: "Zirakpur, Punjab",
    price: "\u20B985 Lac",
    beds: 3,
    baths: 2,
    sqft: "1,650",
    type: "Residential",
    description: [
      "VR Punjab Luxury Floors offers an exceptional independent floor living experience near one of the region's most popular lifestyle destinations. Designed for families seeking space, privacy, and modern convenience, these luxury floors combine contemporary architecture with practical elegance.",
      "Each floor features an open-plan living and dining area with premium vitrified tile flooring, a modular kitchen with chimney and hob, and well-appointed bedrooms with ample natural ventilation. The development is situated minutes from VR Punjab Mall, schools, and hospitals.",
    ],
    features: [
      "Independent floor with private entrance",
      "Near VR Punjab Mall and IT Park",
      "Modular kitchen with chimney and hob",
      "Premium vitrified tile flooring",
      "Ample natural light and ventilation",
      "Stilt parking with visitor spaces",
    ],
    images: [
      { src: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1200&q=80", alt: "VR Punjab Luxury Floors" },
      { src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80", alt: "Living room" },
      { src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80", alt: "Exterior" },
      { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80", alt: "Kitchen area" },
      { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80", alt: "Bedroom" },
    ],
    image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80",
  },
};

function getRelatedProperties(currentSlug: string, currentLocation: string, currentType: string) {
  const entries = Object.entries(propertiesData).filter(([slug]) => slug !== currentSlug);
  const sameLocation = entries.filter(([, p]) => p.location === currentLocation);
  const sameType = entries.filter(([, p]) => p.type === currentType && p.location !== currentLocation);
  const others = entries.filter(([, p]) => p.location !== currentLocation && p.type !== currentType);
  const combined = [...sameLocation, ...sameType, ...others];
  const seen = new Set<string>();
  const unique: [string, typeof propertiesData[string]][] = [];
  for (const item of combined) {
    if (!seen.has(item[0])) {
      seen.add(item[0]);
      unique.push(item);
    }
  }
  return unique.slice(0, 3);
}

export default function PropertyDetailClient({ slug }: { slug: string }) {
  const property = propertiesData[slug];

  if (!property) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="font-heading text-4xl text-foreground">Property Not Found</h1>
          <Link href="/properties" className="mt-6 inline-block text-sm font-body tracking-wide px-8 py-3.5 rounded-full border border-foreground text-foreground hover:bg-foreground hover:text-background-secondary transition-colors duration-300">
            Back to Properties
          </Link>
        </div>
      </section>
    );
  }

  const relatedProperties = getRelatedProperties(slug, property.location, property.type);

  return (
    <>
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={property.images[0].src} alt={property.images[0].alt} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <SectionReveal>
            <span className="inline-block text-xs font-body tracking-widest uppercase bg-background-secondary/15 px-3 py-1.5 text-background-secondary mb-4">
              {property.type}
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-background-secondary max-w-4xl leading-tight drop-shadow-lg">
              {property.title}
            </h1>
            <p className="mt-4 text-base text-background-secondary/70">{property.location}</p>
          </SectionReveal>
        </div>
      </section>

      <section className="bg-background-secondary border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-8 text-sm text-body">
              <div className="flex items-center gap-2">
                <span className="text-xs font-body tracking-widest uppercase text-muted">Beds</span>
                <span className="font-heading text-lg text-foreground">{property.beds}</span>
              </div>
              <span className="w-px h-6 bg-border" />
              <div className="flex items-center gap-2">
                <span className="text-xs font-body tracking-widest uppercase text-muted">Baths</span>
                <span className="font-heading text-lg text-foreground">{property.baths}</span>
              </div>
              <span className="w-px h-6 bg-border" />
              <div className="flex items-center gap-2">
                <span className="text-xs font-body tracking-widest uppercase text-muted">Sq Ft</span>
                <span className="font-heading text-lg text-foreground">{property.sqft}</span>
              </div>
            </div>
            <p className="font-heading text-2xl md:text-3xl text-foreground">{property.price}</p>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SectionReveal>
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image src={property.images[1].src} alt={property.images[1].alt} fill className="object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </SectionReveal>
            <div className="grid grid-cols-2 gap-4">
              {property.images.slice(2).map((img, i) => (
                <SectionReveal key={img.src} delay={i * 0.1}>
                  <div className="relative aspect-square overflow-hidden">
                    <Image src={img.src} alt={img.alt} fill className="object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <SectionReveal>
              <p className="text-xs font-body font-semibold tracking-widest uppercase text-muted mb-4">About This Property</p>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground">Property Overview</h2>
              <div className="mt-8 space-y-6">
                {property.description.map((para, i) => (
                  <p key={i} className="text-base text-body leading-relaxed">{para}</p>
                ))}
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <p className="text-xs font-body font-semibold tracking-widest uppercase text-muted mb-4">Features & Amenities</p>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground">Key Highlights</h2>
              <ul className="mt-8 space-y-4">
                {property.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-base text-body">
                    <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </SectionReveal>
          </div>
        </div>
      </section>

      {relatedProperties.length > 0 && (
        <section className="py-24 md:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <SectionReveal>
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
                <div>
                  <p className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-muted mb-4">
                    Explore More
                  </p>
                  <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground">
                    Related Properties
                  </h2>
                </div>
                <Link
                  href="/properties"
                  className="mt-6 md:mt-0 text-sm font-body tracking-wide text-muted hover:text-foreground transition-colors duration-300"
                >
                  View All Properties &rarr;
                </Link>
              </div>
            </SectionReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProperties.map(([relSlug, relProperty], i) => (
                <SectionReveal key={relSlug} delay={i * 0.12}>
                  <Link href={`/properties/${relSlug}`} className="group block">
                    <div className="relative aspect-[4/5] overflow-hidden bg-background-depth">
                      <Image
                        src={relProperty.image}
                        alt={relProperty.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute top-4 left-4">
                        <span className="text-xs font-body tracking-widest uppercase bg-background-secondary/90 px-3 py-1.5 text-foreground">
                          {relProperty.type}
                        </span>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <span className="text-sm font-body text-background-secondary">
                          View Property &rarr;
                        </span>
                      </div>
                    </div>
                    <div className="mt-5">
                      <p className="text-xs font-body tracking-widest uppercase text-muted">
                        {relProperty.location}
                      </p>
                      <h3 className="mt-2 font-heading text-xl text-foreground group-hover:text-body transition-colors duration-300">
                        {relProperty.title}
                      </h3>
                      <div className="mt-3 flex items-center gap-4 text-xs text-muted">
                        <span>{relProperty.beds} Beds</span>
                        <span className="w-px h-3 bg-border" />
                        <span>{relProperty.baths} Baths</span>
                        <span className="w-px h-3 bg-border" />
                        <span>{relProperty.sqft} Sq Ft</span>
                      </div>
                      <p className="mt-3 font-heading text-lg text-foreground">
                        {relProperty.price}
                      </p>
                    </div>
                  </Link>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image src={property.images[0].src} alt="Contact background" fill className="object-cover" />
          <div className="absolute inset-0 bg-foreground/75" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <SectionReveal>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-background-secondary">Interested in This Property?</h2>
            <p className="mt-6 text-base text-background-depth/70 leading-relaxed max-w-lg mx-auto">
              Schedule a private viewing or request additional details. Our team is ready to assist you with your next acquisition.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="inline-block text-sm font-body tracking-wide px-8 py-3.5 rounded-full bg-background-secondary text-foreground hover:bg-background transition-colors duration-300">
                Schedule a Viewing
              </Link>
              <Link href="/properties" className="inline-block text-sm font-body tracking-wide px-8 py-3.5 rounded-full border border-background-secondary/40 text-background-secondary hover:bg-background-secondary/10 transition-colors duration-300">
                View All Properties
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
