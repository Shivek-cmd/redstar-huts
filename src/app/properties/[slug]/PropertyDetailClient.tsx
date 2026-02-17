"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";
import LeadCaptureForm from "@/components/LeadCaptureForm";

interface PropertyData {
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  sqft: string;
  type: string;
  configuration: string;
  description: string[];
  features: string[];
  images: { src: string; alt: string }[];
  video?: string;
  highlights: { label: string; value: string }[];
  nearby: string[];
  mapEmbed?: string;
}

const propertiesData: Record<string, PropertyData> = {
  "5-bedroom-residential-for-sale-in-beverly-hills-ca-6200-sq-ft": {
    title: "The Meridian Residence",
    location: "Beverly Hills, CA",
    price: "$4,850,000",
    beds: 5,
    baths: 4,
    sqft: "6,200",
    type: "Residential",
    configuration: "5 BHK",
    description: [
      "Nestled in the heart of Beverly Hills, The Meridian Residence is a masterfully designed home that seamlessly blends modern luxury with timeless elegance. Every detail has been carefully considered to create a living experience that is both refined and welcoming.",
      "Floor-to-ceiling windows flood the interiors with natural light, while premium materials and finishes create an atmosphere of quiet sophistication throughout. The open floor plan connects seamlessly to expansive outdoor living spaces with panoramic views.",
    ],
    features: [
      "Chef\u2019s kitchen with Italian marble countertops",
      "Primary suite with private terrace and spa bath",
      "Infinity pool with city views",
      "Home theater and wine cellar",
      "Smart home automation throughout",
      "Three-car garage with EV charging",
    ],
    highlights: [
      { label: "Configuration", value: "5 BHK" },
      { label: "Super Area", value: "6,200 Sq Ft" },
      { label: "Type", value: "Residential" },
      { label: "Finishing", value: "Premium" },
    ],
    nearby: [
      "Rodeo Drive",
      "Beverly Hills Hotel",
      "Cedars-Sinai Medical Center",
      "Century City Mall",
      "UCLA Campus",
      "Los Angeles Country Club",
    ],
    images: [
      { src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80", alt: "Meridian Residence exterior" },
      { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80", alt: "Modern kitchen" },
      { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80", alt: "Living room" },
      { src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80", alt: "Master bedroom" },
      { src: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80", alt: "Pool area" },
    ],
  },
  "4-bedroom-estate-for-sale-in-miami-beach-fl-4800-sq-ft": {
    title: "Harborview Estate",
    location: "Miami Beach, FL",
    price: "$3,200,000",
    beds: 4,
    baths: 3,
    sqft: "4,800",
    type: "Residential",
    configuration: "4 BHK",
    description: [
      "Harborview Estate captures the essence of coastal luxury living in one of Miami Beach\u2019s most prestigious neighborhoods. This stunning waterfront property offers breathtaking views and an unparalleled lifestyle experience.",
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
    highlights: [
      { label: "Configuration", value: "4 BHK" },
      { label: "Super Area", value: "4,800 Sq Ft" },
      { label: "Type", value: "Waterfront" },
      { label: "Finishing", value: "Premium" },
    ],
    nearby: [
      "South Beach",
      "Miami International Airport",
      "Bal Harbour Shops",
      "Mount Sinai Medical Center",
      "Art Deco Historic District",
      "Bayfront Park",
    ],
    images: [
      { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80", alt: "Harborview Estate exterior" },
      { src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80", alt: "Open living space" },
      { src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80", alt: "Waterfront view" },
      { src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80", alt: "Bedroom suite" },
      { src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80", alt: "Pool and garden" },
    ],
  },
  "6-bedroom-estate-for-sale-in-greenwich-ct-8500-sq-ft": {
    title: "Crestwood Manor",
    location: "Greenwich, CT",
    price: "$7,100,000",
    beds: 6,
    baths: 5,
    sqft: "8,500",
    type: "Estate",
    configuration: "6 BHK",
    description: [
      "Crestwood Manor is a distinguished estate set on over three acres of meticulously landscaped grounds in Greenwich\u2019s most coveted enclave. This property represents the pinnacle of New England luxury living.",
      "The manor features grand formal rooms with soaring ceilings, a library with hand-carved woodwork, and a chef\u2019s kitchen designed for both intimate dinners and grand entertaining. The grounds include a tennis court, heated pool, and guest cottage.",
    ],
    features: [
      "3+ acres of professionally landscaped grounds",
      "Grand foyer with double-height ceiling",
      "Library with custom millwork and fireplace",
      "Heated pool and championship tennis court",
      "Separate guest cottage with full kitchen",
      "Six-car heated garage",
    ],
    highlights: [
      { label: "Configuration", value: "6 BHK" },
      { label: "Super Area", value: "8,500 Sq Ft" },
      { label: "Plot", value: "3+ Acres" },
      { label: "Finishing", value: "Grand Estate" },
    ],
    nearby: [
      "Greenwich Avenue Shopping",
      "Greenwich Hospital",
      "Metro-North Railroad",
      "Bruce Museum",
      "Greenwich Country Club",
      "Tod\u2019s Point Beach",
    ],
    images: [
      { src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80", alt: "Crestwood Manor exterior" },
      { src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80", alt: "Grand interior" },
      { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80", alt: "Formal living room" },
      { src: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80", alt: "Estate grounds" },
      { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80", alt: "Garden view" },
    ],
  },
  "3-bedroom-penthouse-for-sale-in-manhattan-ny-4200-sq-ft": {
    title: "The Pinnacle Penthouse",
    location: "Manhattan, NY",
    price: "$12,500,000",
    beds: 3,
    baths: 3,
    sqft: "4,200",
    type: "Penthouse",
    configuration: "3 BHK",
    description: [
      "Perched atop one of Manhattan\u2019s most prestigious towers, The Pinnacle Penthouse offers an unrivaled living experience with 360-degree views of the city skyline, Central Park, and the Hudson River.",
      "This meticulously designed residence features museum-quality finishes, a private elevator entry, and floor-to-ceiling windows that frame the city as living art. The chef\u2019s kitchen, spacious entertaining areas, and serene private quarters create the ultimate urban retreat.",
    ],
    features: [
      "360-degree panoramic city and park views",
      "Private elevator entry with dedicated landing",
      "Floor-to-ceiling windows throughout",
      "Custom Italian cabinetry and stone finishes",
      "Radiant heated floors",
      "Full-service building with concierge",
    ],
    highlights: [
      { label: "Configuration", value: "3 BHK" },
      { label: "Super Area", value: "4,200 Sq Ft" },
      { label: "Type", value: "Penthouse" },
      { label: "Finishing", value: "Museum-Grade" },
    ],
    nearby: [
      "Central Park",
      "Fifth Avenue Shopping",
      "Lincoln Center",
      "Museum of Modern Art",
      "Times Square",
      "Grand Central Terminal",
    ],
    images: [
      { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80", alt: "Pinnacle Penthouse interior" },
      { src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80", alt: "City skyline view" },
      { src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80", alt: "Living area" },
      { src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80", alt: "Master suite" },
      { src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80", alt: "Kitchen detail" },
    ],
  },
  "5-bedroom-villa-for-sale-in-lake-tahoe-nv-5800-sq-ft": {
    title: "Lakeshore Villa",
    location: "Lake Tahoe, NV",
    price: "$5,600,000",
    beds: 5,
    baths: 4,
    sqft: "5,800",
    type: "Residential",
    configuration: "5 BHK",
    description: [
      "Lakeshore Villa is a stunning lakefront property offering direct access to the pristine waters of Lake Tahoe. This mountain modern masterpiece combines rustic warmth with contemporary luxury in one of America\u2019s most breathtaking settings.",
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
    highlights: [
      { label: "Configuration", value: "5 BHK" },
      { label: "Super Area", value: "5,800 Sq Ft" },
      { label: "Type", value: "Lakefront" },
      { label: "Finishing", value: "Mountain Modern" },
    ],
    nearby: [
      "Lake Tahoe Beaches",
      "Heavenly Ski Resort",
      "Edgewood Tahoe Golf Course",
      "Emerald Bay State Park",
      "Reno-Tahoe International Airport",
      "Barton Memorial Hospital",
    ],
    images: [
      { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80", alt: "Lakeshore Villa exterior" },
      { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80", alt: "Lake view" },
      { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80", alt: "Interior great room" },
      { src: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80", alt: "Outdoor deck" },
      { src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80", alt: "Mountain view" },
    ],
  },
  "3-bedroom-condominium-for-sale-in-san-francisco-ca-3100-sq-ft": {
    title: "The Wellington",
    location: "San Francisco, CA",
    price: "$2,950,000",
    beds: 3,
    baths: 2,
    sqft: "3,100",
    type: "Condominium",
    configuration: "3 BHK",
    description: [
      "The Wellington offers sophisticated urban living in one of San Francisco\u2019s most desirable neighborhoods. This beautifully appointed condominium combines classic architectural character with modern luxury amenities.",
      "Thoughtfully designed interiors feature hardwood floors, custom millwork, and an open kitchen that flows seamlessly into generous living and dining areas. The private terrace provides the perfect setting for enjoying iconic city views.",
    ],
    features: [
      "Corner unit with abundant natural light",
      "Private terrace with Golden Gate Bridge views",
      "Hardwood floors and custom millwork throughout",
      "Chef\u2019s kitchen with premium appliances",
      "In-unit laundry and ample storage",
      "Deeded parking and building amenities",
    ],
    highlights: [
      { label: "Configuration", value: "3 BHK" },
      { label: "Super Area", value: "3,100 Sq Ft" },
      { label: "Type", value: "Condominium" },
      { label: "Finishing", value: "Premium" },
    ],
    nearby: [
      "Golden Gate Bridge",
      "Union Square",
      "UCSF Medical Center",
      "Ferry Building Marketplace",
      "Presidio National Park",
      "San Francisco International Airport",
    ],
    images: [
      { src: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1200&q=80", alt: "The Wellington exterior" },
      { src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80", alt: "Living room" },
      { src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80", alt: "Kitchen" },
      { src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80", alt: "Bedroom" },
      { src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80", alt: "City view" },
    ],
  },
  "7-bedroom-estate-for-sale-in-aspen-co-9200-sq-ft": {
    title: "Aspen Ridge Retreat",
    location: "Aspen, CO",
    price: "$8,900,000",
    beds: 7,
    baths: 6,
    sqft: "9,200",
    type: "Estate",
    configuration: "7 BHK",
    description: [
      "Aspen Ridge Retreat is an extraordinary mountain estate that redefines luxury living in one of the world\u2019s most exclusive resort destinations. Set against a backdrop of pristine alpine peaks, this property offers an unmatched combination of grandeur and natural beauty.",
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
    highlights: [
      { label: "Configuration", value: "7 BHK" },
      { label: "Super Area", value: "9,200 Sq Ft" },
      { label: "Type", value: "Mountain Estate" },
      { label: "Finishing", value: "Ultra Premium" },
    ],
    nearby: [
      "Aspen Mountain Ski Area",
      "Aspen Art Museum",
      "Maroon Bells",
      "Aspen Valley Hospital",
      "Aspen/Pitkin County Airport",
      "Downtown Aspen",
    ],
    images: [
      { src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80", alt: "Aspen Ridge exterior" },
      { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80", alt: "Mountain great room" },
      { src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80", alt: "Estate view" },
      { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80", alt: "Interior detail" },
      { src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80", alt: "Pool area" },
    ],
  },
  "4-bedroom-residential-for-sale-in-san-francisco-ca-5100-sq-ft": {
    title: "Pacific Heights Modern",
    location: "San Francisco, CA",
    price: "$6,250,000",
    beds: 4,
    baths: 4,
    sqft: "5,100",
    type: "Residential",
    configuration: "4 BHK",
    description: [
      "Pacific Heights Modern is a striking contemporary residence in San Francisco\u2019s most prestigious neighborhood. This architectural gem combines clean lines and innovative design with warm, livable spaces that welcome both daily life and grand entertaining.",
      "The home features an open floor plan that flows across three levels, connected by a sculptural floating staircase. Premium materials, integrated smart home technology, and a rooftop terrace with panoramic bay views define this exceptional property.",
    ],
    features: [
      "Three levels of open-concept living",
      "Sculptural floating staircase",
      "Rooftop terrace with bay and bridge views",
      "Integrated smart home system",
      "Chef\u2019s kitchen with waterfall island",
      "Two-car garage with direct interior access",
    ],
    highlights: [
      { label: "Configuration", value: "4 BHK" },
      { label: "Super Area", value: "5,100 Sq Ft" },
      { label: "Type", value: "Contemporary" },
      { label: "Finishing", value: "Premium" },
    ],
    nearby: [
      "Golden Gate Bridge",
      "Pacific Heights Shops",
      "CPMC Medical Center",
      "Palace of Fine Arts",
      "Marina District",
      "San Francisco International Airport",
    ],
    images: [
      { src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=80", alt: "Pacific Heights exterior" },
      { src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80", alt: "Modern facade" },
      { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80", alt: "Living area" },
      { src: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80", alt: "Kitchen" },
      { src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80", alt: "Terrace view" },
    ],
  },
  "5-bedroom-beachfront-for-sale-in-malibu-ca-7400-sq-ft": {
    title: "The Strand Collection",
    location: "Malibu, CA",
    price: "$15,800,000",
    beds: 5,
    baths: 5,
    sqft: "7,400",
    type: "Beachfront",
    configuration: "5 BHK",
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
    highlights: [
      { label: "Configuration", value: "5 BHK" },
      { label: "Super Area", value: "7,400 Sq Ft" },
      { label: "Type", value: "Beachfront" },
      { label: "Finishing", value: "Architect-Designed" },
    ],
    nearby: [
      "Malibu Pier",
      "Point Dume State Beach",
      "Malibu Country Mart",
      "Pepperdine University",
      "Santa Monica",
      "Los Angeles International Airport",
    ],
    images: [
      { src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&q=80", alt: "Strand Collection exterior" },
      { src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80", alt: "Beach view" },
      { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80", alt: "Ocean-view living" },
      { src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80", alt: "Primary suite" },
      { src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80", alt: "Pool and ocean" },
    ],
  },
  "3-plus-1-bhk-premium-residence-for-sale-in-mohali-punjab-2901-sq-ft": {
    title: "The Grand Mohali",
    location: "Mohali, Punjab",
    price: "On Request",
    beds: 4,
    baths: 4,
    sqft: "2,901",
    type: "Premium Residence",
    configuration: "3+1 BHK",
    description: [
      "The Grand Mohali is an ultra-premium 3+1 BHK residence spanning 2,901 sq ft of meticulously designed living space in one of Mohali\u2019s most prestigious developments. Every detail has been crafted for discerning homeowners who demand nothing less than perfection \u2014 from imported marble flooring to designer cove lighting that transforms each room into a curated experience.",
      "The residence features a fully-loaded modular kitchen with attached hob, chimney, H\u00E4fele microwave, and built-in oven \u2014 ready to use from day one. Each bedroom comes with an attached bathroom, and a separate powder room adds convenience for guests. With a dedicated servant\u2019s entry, basement parking, and access to a sprawling 1 lakh sq ft clubhouse, this is luxury living reimagined for modern families.",
    ],
    features: [
      "Premium modular kitchen with attached hob & chimney",
      "H\u00E4fele microwave and built-in oven included",
      "Each bedroom with attached bathroom",
      "Common powder room for guests",
      "Separate servant\u2019s entry for privacy",
      "1 lakh sq ft clubhouse with world-class amenities",
      "Basement parking with dedicated slots",
      "Premium finishing with imported fixtures",
      "Designer cove lighting throughout",
      "Central air conditioning provision",
    ],
    highlights: [
      { label: "Configuration", value: "3+1 BHK" },
      { label: "Super Area", value: "2,901 Sq Ft" },
      { label: "Clubhouse", value: "1 Lac Sq Ft" },
      { label: "Finishing", value: "Ultra Premium" },
    ],
    nearby: [
      "Chandigarh International Airport",
      "ISBT Mohali",
      "Proposed Metro Station",
      "Elante Mall",
      "Sohana Hospital",
      "Proposed GMADA Park",
    ],
    images: [
      { src: "/properties/grand-mohali/bedroom-1.jpg", alt: "Premium master bedroom with designer cove lighting" },
      { src: "/properties/grand-mohali/kitchen.jpg", alt: "Modular kitchen with H\u00E4fele appliances and hob" },
      { src: "/properties/grand-mohali/bedroom-2.jpg", alt: "Spacious bedroom with art-inspired wall design" },
      { src: "/properties/grand-mohali/living-room.jpg", alt: "Elegant living room with floor-to-ceiling curtains" },
      { src: "/properties/grand-mohali/dining.jpg", alt: "Designer dining room with artisan pendant lighting" },
    ],
    video: "/properties/grand-mohali/tour.mp4",
  },
  "3-bhk-premium-apartment-for-sale-in-chandigarh-2800-sq-ft": {
    title: "Luxury Sample Residence",
    location: "Chandigarh, India",
    price: "On Request",
    beds: 3,
    baths: 3,
    sqft: "2,800",
    type: "Premium Apartment",
    configuration: "3 BHK",
    description: [
      "A thoughtfully designed 3 BHK premium apartment in the heart of Chandigarh, offering a perfect blend of modern luxury and urban convenience. Every element has been curated to deliver an elevated living experience for discerning homeowners.",
      "The residence features spacious interiors with premium finishes, ample natural light, and a functional layout ideal for families. With proximity to Chandigarh\u2019s finest educational institutions, healthcare facilities, and retail destinations, this is city living at its finest.",
    ],
    features: [
      "Premium modular kitchen with branded fittings",
      "Spacious balconies with city views",
      "Vitrified tile flooring throughout",
      "24/7 security with CCTV surveillance",
      "Dedicated parking space",
      "Rainwater harvesting and power backup",
    ],
    highlights: [
      { label: "Configuration", value: "3 BHK" },
      { label: "Super Area", value: "2,800 Sq Ft" },
      { label: "Type", value: "Premium Apartment" },
      { label: "Finishing", value: "Premium" },
    ],
    nearby: [
      "Elante Mall",
      "PGI Hospital",
      "Chandigarh Railway Station",
      "Sukhna Lake",
      "Sector 17 Market",
      "Chandigarh International Airport",
    ],
    images: [
      { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80", alt: "Premium apartment interior" },
      { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80", alt: "Living room" },
      { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80", alt: "Bedroom" },
      { src: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80", alt: "Kitchen" },
      { src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80", alt: "Balcony view" },
    ],
  },
  "4-bhk-villa-for-sale-in-mohali-punjab-3200-sq-ft": {
    title: "The Royal Greens Villa",
    location: "Mohali, Punjab",
    price: "\u20B92.8 Cr",
    beds: 4,
    baths: 3,
    sqft: "3,200",
    type: "Villa",
    configuration: "4 BHK",
    description: [
      "The Royal Greens Villa is an exquisite 4 BHK independent villa nestled in one of Mohali\u2019s most sought-after gated communities. Designed for families who appreciate space, privacy, and refined living, this villa offers a lifestyle that is both luxurious and grounded.",
      "Spread across 3,200 sq ft, the villa features a grand living area, a designer kitchen, and bedrooms with en-suite bathrooms. The private garden and terrace provide serene outdoor spaces, while the gated community ensures world-class security and amenities.",
    ],
    features: [
      "Independent villa with private garden",
      "Grand double-height living room",
      "Designer modular kitchen with breakfast counter",
      "All bedrooms with en-suite bathrooms",
      "Private terrace with panoramic views",
      "Gated community with 24/7 security",
    ],
    highlights: [
      { label: "Configuration", value: "4 BHK" },
      { label: "Super Area", value: "3,200 Sq Ft" },
      { label: "Type", value: "Villa" },
      { label: "Finishing", value: "Premium" },
    ],
    nearby: [
      "Mohali International Airport",
      "Phase 8 Market Mohali",
      "Fortis Hospital Mohali",
      "ISB Mohali",
      "IT City Mohali",
      "Punjab Cricket Association Stadium",
    ],
    images: [
      { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80", alt: "Royal Greens Villa exterior" },
      { src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80", alt: "Grand living room" },
      { src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80", alt: "Master bedroom" },
      { src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80", alt: "Designer kitchen" },
      { src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80", alt: "Private garden" },
    ],
  },
  "3-bhk-penthouse-for-sale-in-mohali-punjab-2400-sq-ft": {
    title: "Mohali Heights Penthouse",
    location: "Mohali, Punjab",
    price: "\u20B91.6 Cr",
    beds: 3,
    baths: 3,
    sqft: "2,400",
    type: "Penthouse",
    configuration: "3 BHK",
    description: [
      "Mohali Heights Penthouse offers an elevated living experience in one of Mohali\u2019s premium high-rise developments. This 3 BHK penthouse combines the exclusivity of top-floor living with panoramic views of the Shivalik range and the city skyline.",
      "The residence features a large wraparound terrace, double-height living spaces, and premium finishes throughout. With direct elevator access and a private rooftop area, this penthouse is designed for those who seek distinction in every aspect of their home.",
    ],
    features: [
      "Top-floor penthouse with private terrace",
      "Double-height living room with panoramic views",
      "Wraparound balcony with Shivalik range views",
      "Direct elevator access to unit",
      "Premium Italian marble flooring",
      "Smart home automation ready",
    ],
    highlights: [
      { label: "Configuration", value: "3 BHK" },
      { label: "Super Area", value: "2,400 Sq Ft" },
      { label: "Type", value: "Penthouse" },
      { label: "Finishing", value: "Premium" },
    ],
    nearby: [
      "Mohali International Airport",
      "Quark City IT Park",
      "Fortis Hospital Mohali",
      "North Country Mall",
      "Chandigarh University",
      "Mohali Club",
    ],
    images: [
      { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80", alt: "Mohali Heights Penthouse" },
      { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80", alt: "Double-height living room" },
      { src: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80", alt: "Terrace view" },
      { src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80", alt: "Master suite" },
      { src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80", alt: "City view" },
    ],
  },
  "4-bhk-residential-for-sale-in-chandigarh-3800-sq-ft": {
    title: "Elante Residences",
    location: "Chandigarh",
    price: "\u20B93.5 Cr",
    beds: 4,
    baths: 4,
    sqft: "3,800",
    type: "Residential",
    configuration: "4 BHK",
    description: [
      "Elante Residences represents the pinnacle of luxury apartment living in Chandigarh. This 4 BHK residence is part of an iconic development adjacent to one of the city\u2019s most celebrated retail and entertainment destinations, offering unmatched convenience and prestige.",
      "Spanning 3,800 sq ft, the apartment features expansive living and dining areas, a gourmet kitchen, and four generous bedrooms each with walk-in closets and premium bathrooms. Floor-to-ceiling windows frame views of the Shivalik hills and the city\u2019s iconic skyline.",
    ],
    features: [
      "Adjacent to Elante Mall \u2014 Chandigarh\u2019s premier retail hub",
      "Floor-to-ceiling windows with hill views",
      "Gourmet kitchen with European appliances",
      "Walk-in closets in all bedrooms",
      "Club-level amenities including pool and gym",
      "Valet parking and concierge services",
    ],
    highlights: [
      { label: "Configuration", value: "4 BHK" },
      { label: "Super Area", value: "3,800 Sq Ft" },
      { label: "Type", value: "Luxury Apartment" },
      { label: "Finishing", value: "Ultra Premium" },
    ],
    nearby: [
      "Elante Mall",
      "IT Park Chandigarh",
      "PGI Hospital",
      "Sukhna Lake",
      "Chandigarh Railway Station",
      "Chandigarh International Airport",
    ],
    images: [
      { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80", alt: "Elante Residences exterior" },
      { src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80", alt: "Spacious living area" },
      { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80", alt: "Premium bedroom" },
      { src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80", alt: "Gourmet kitchen" },
      { src: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80", alt: "Hill view from balcony" },
    ],
  },
  "5-bhk-estate-for-sale-in-sector-9-chandigarh-4500-sq-ft": {
    title: "Sector 9 Heritage Home",
    location: "Chandigarh",
    price: "\u20B94.2 Cr",
    beds: 5,
    baths: 4,
    sqft: "4,500",
    type: "Estate",
    configuration: "5 BHK",
    description: [
      "Sector 9 Heritage Home is a distinguished 5 BHK estate located in one of Chandigarh\u2019s most prestigious and tree-lined sectors. This property embodies the city\u2019s signature blend of Le Corbusier-era architecture and modern luxury living.",
      "Set on a generous plot, the home features high ceilings, large windows that flood interiors with natural light, and a private landscaped garden. The five spacious bedrooms, formal drawing and dining rooms, and a private study make this an ideal family home with room for generations.",
    ],
    features: [
      "Prime Sector 9 location \u2014 Chandigarh\u2019s heritage sector",
      "Large plot with private landscaped garden",
      "High ceilings with original Le Corbusier proportions",
      "5 bedrooms with attached bathrooms",
      "Formal drawing and dining rooms",
      "Private study and servant quarters",
    ],
    highlights: [
      { label: "Configuration", value: "5 BHK" },
      { label: "Super Area", value: "4,500 Sq Ft" },
      { label: "Type", value: "Heritage Estate" },
      { label: "Finishing", value: "Premium Restored" },
    ],
    nearby: [
      "Sector 17 Plaza",
      "Government Museum & Art Gallery",
      "PGI Hospital",
      "Sukhna Lake",
      "Rose Garden",
      "Chandigarh Club",
    ],
    images: [
      { src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80", alt: "Heritage Home exterior" },
      { src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80", alt: "Grand entrance" },
      { src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80", alt: "Drawing room" },
      { src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80", alt: "Garden view" },
      { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80", alt: "Master bedroom" },
    ],
  },
  "3-bhk-residential-for-sale-in-zirakpur-punjab-1800-sq-ft": {
    title: "Ambience Boulevard",
    location: "Zirakpur, Punjab",
    price: "\u20B91.2 Cr",
    beds: 3,
    baths: 2,
    sqft: "1,800",
    type: "Residential",
    configuration: "3 BHK",
    description: [
      "Ambience Boulevard offers modern 3 BHK living in Zirakpur\u2019s fastest-growing corridor. This well-planned residential apartment combines contemporary design with practical luxury, making it an ideal home for young professionals and growing families.",
      "The 1,800 sq ft apartment features an open-plan living and dining area, a modular kitchen, three well-proportioned bedrooms, and two balconies offering views of the surrounding green belt. The development includes landscaped gardens, a fitness center, and children\u2019s play areas.",
    ],
    features: [
      "Open-plan living and dining area",
      "Modular kitchen with granite countertops",
      "Two private balconies with green views",
      "Landscaped community gardens",
      "Fitness center and swimming pool",
      "Children\u2019s play area and jogging track",
    ],
    highlights: [
      { label: "Configuration", value: "3 BHK" },
      { label: "Super Area", value: "1,800 Sq Ft" },
      { label: "Type", value: "Residential" },
      { label: "Finishing", value: "Semi-Furnished" },
    ],
    nearby: [
      "VR Punjab Mall",
      "Chandigarh-Ambala Highway",
      "Panchkula IT Park",
      "GMCH Hospital",
      "Timber Trail Resort",
      "Chandigarh International Airport",
    ],
    images: [
      { src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&q=80", alt: "Ambience Boulevard exterior" },
      { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80", alt: "Modern living room" },
      { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80", alt: "Bedroom" },
      { src: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80", alt: "Kitchen" },
      { src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80", alt: "Balcony view" },
    ],
  },
  "3-bhk-luxury-floors-for-sale-in-zirakpur-punjab-1650-sq-ft": {
    title: "VR Punjab Luxury Floors",
    location: "Zirakpur, Punjab",
    price: "\u20B985 Lac",
    beds: 3,
    baths: 2,
    sqft: "1,650",
    type: "Residential",
    configuration: "3 BHK",
    description: [
      "VR Punjab Luxury Floors offers an exceptional opportunity to own a premium 3 BHK independent floor in Zirakpur\u2019s prime VR Punjab corridor. These thoughtfully designed floors provide the privacy of independent living with the convenience of a gated township.",
      "Each 1,650 sq ft floor features spacious rooms, modern fixtures, and a functional layout designed for comfortable family living. With proximity to VR Punjab Mall and excellent connectivity to Chandigarh and Panchkula, this is smart living at an accessible price point.",
    ],
    features: [
      "Independent floor with private entrance",
      "Spacious 3 BHK layout with servant room",
      "Modular kitchen with chimney and hob",
      "Vitrified tile flooring throughout",
      "Covered parking for two vehicles",
      "Gated township with 24/7 security",
    ],
    highlights: [
      { label: "Configuration", value: "3 BHK" },
      { label: "Super Area", value: "1,650 Sq Ft" },
      { label: "Type", value: "Independent Floor" },
      { label: "Finishing", value: "Ready to Move" },
    ],
    nearby: [
      "VR Punjab Mall",
      "Chandigarh-Ambala Highway",
      "Zirakpur Bus Stand",
      "Max Hospital Mohali",
      "Chandigarh Railway Station",
      "Panchkula City Center",
    ],
    images: [
      { src: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1200&q=80", alt: "VR Punjab Luxury Floors" },
      { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80", alt: "Living area" },
      { src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80", alt: "Bedroom" },
      { src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80", alt: "Kitchen" },
      { src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80", alt: "Exterior view" },
    ],
  },
};

const mediaTabs = ["Photos", "Video Tour", "Floor Plan", "Location"] as const;
type MediaTab = (typeof mediaTabs)[number];

function getRelatedProperties(currentSlug: string, currentLocation: string, currentType: string) {
  const entries = Object.entries(propertiesData).filter(([s]) => s !== currentSlug);
  const sameLocation = entries.filter(([, p]) => p.location === currentLocation);
  const sameType = entries.filter(([, p]) => p.type === currentType && p.location !== currentLocation);
  const others = entries.filter(([, p]) => p.location !== currentLocation && p.type !== currentType);
  const combined = [...sameLocation, ...sameType, ...others];
  const seen = new Set<string>();
  const unique: [string, PropertyData][] = [];
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
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<MediaTab>("Photos");
  const [selectedImage, setSelectedImage] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const relatedProperties = property ? getRelatedProperties(slug, property.location, property.type) : [];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const goNext = useCallback(() => {
    if (property) setLightboxIndex((prev) => (prev + 1) % property.images.length);
  }, [property]);

  const goPrev = useCallback(() => {
    if (property) setLightboxIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
  }, [property]);

  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [lightboxOpen, closeLightbox, goNext, goPrev]);

  useEffect(() => {
    setActiveTab("Photos");
    setSelectedImage(0);
    setIsVideoPlaying(false);
  }, [slug]);

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

  const availableTabs = mediaTabs.filter((tab) => {
    if (tab === "Video Tour") return !!property.video;
    return true;
  });

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={property.images[0].src} alt={property.images[0].alt} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <SectionReveal>
            <span className="inline-block text-xs font-body tracking-widest uppercase bg-background-secondary/15 px-3 py-1.5 text-background-secondary mb-4">
              {property.configuration}
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-background-secondary max-w-4xl leading-tight drop-shadow-lg">
              {property.title}
            </h1>
            <p className="mt-4 text-base text-background-secondary/70">{property.location}</p>
            <div className="mt-8">
              <Link href="/contact" className="inline-block text-sm font-body tracking-wide px-8 py-3.5 rounded-full bg-background-secondary text-foreground hover:bg-background transition-colors duration-300">
                Schedule Site Visit
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {property.highlights.map((h) => (
              <SectionReveal key={h.label}>
                <div className="text-center">
                  <p className="text-xs font-body tracking-widest uppercase text-muted mb-2">{h.label}</p>
                  <p className="font-heading text-xl md:text-2xl text-foreground">{h.value}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tab-Based Media Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-1 border-b border-border mb-10 ">
            {availableTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-sm font-body tracking-widest uppercase px-6 py-4 whitespace-nowrap transition-colors duration-300 border-b-2 -mb-px cursor-pointer ${
                  activeTab === tab
                    ? "border-foreground text-foreground"
                    : "border-transparent text-muted hover:text-foreground"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {activeTab === "Photos" && (
            <div>
              <div className="relative aspect-[16/9] md:aspect-[2/1] overflow-hidden bg-background-depth mb-4 cursor-pointer group" onClick={() => openLightbox(selectedImage)}>
              
                <Image
                  src={property.images[selectedImage].src}
                  alt={property.images[selectedImage].alt}
                  fill
                  className="object-contain transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300 flex items-center justify-center">
                  <svg className="w-12 h-12 text-white opacity-0 group-hover:opacity-80 transition-opacity duration-300 drop-shadow-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                  </svg>
                </div>
              </div>
              
              <div className="grid grid-cols-5 gap-3">
                {property.images.map((img, i) => (
                  <button
                    key={img.src}
                    onClick={() => setSelectedImage(i)}
                    className={`relative aspect-[4/3] overflow-hidden transition-all duration-300 ${
                      selectedImage === i ? "ring-2 ring-foreground ring-offset-2" : "opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image src={img.src} alt={img.alt} fill className="object-cover" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {activeTab === "Video Tour" && property.video && (
            <div className="relative aspect-video overflow-hidden bg-foreground/5 cursor-pointer group" onClick={() => {
              setIsVideoPlaying(!isVideoPlaying);
              if (videoRef.current) {
                if (isVideoPlaying) videoRef.current.pause();
                else videoRef.current.play();
              }
            }}>
              <video
                ref={videoRef}
                src={property.video}
                className="w-full h-full object-contain"
                loop
                muted
                playsInline
              />
              {!isVideoPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-foreground/20 group-hover:bg-foreground/30 transition-colors duration-300">
                  <div className="w-20 h-20 rounded-full bg-background-secondary/90 flex items-center justify-center shadow-lg">
                    <svg className="w-8 h-8 text-foreground ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === "Floor Plan" && (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <svg className="w-16 h-16 text-muted/40 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
              </svg>
              <p className="text-sm font-body tracking-widest uppercase text-muted mb-2">Floor Plan</p>
              <p className="text-base text-body max-w-md">Floor plan available on request. Contact us to receive detailed architectural drawings and layout specifications.</p>
              <Link href="/contact" className="mt-6 inline-block text-sm font-body tracking-wide px-8 py-3 rounded-full border border-foreground text-foreground hover:bg-foreground hover:text-background-secondary transition-colors duration-300">
                Request Floor Plan
              </Link>
            </div>
          )}

          {activeTab === "Location" && (
            <div>
              {property.mapEmbed ? (
                <div className="aspect-video overflow-hidden" dangerouslySetInnerHTML={{ __html: property.mapEmbed }} />
              ) : (
                <div className="aspect-video bg-background-depth flex flex-col items-center justify-center text-center">
                  <svg className="w-16 h-16 text-muted/40 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <p className="font-heading text-xl text-foreground mb-2">{property.location}</p>
                  <p className="text-sm text-body max-w-md">Precise location shared upon scheduling a site visit.</p>
                  <Link href="/contact" className="mt-6 inline-block text-sm font-body tracking-wide px-8 py-3 rounded-full border border-foreground text-foreground hover:bg-foreground hover:text-background-secondary transition-colors duration-300">
                    Get Directions
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Property Overview + Features */}
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

      {/* Nearby Landmarks */}
      <section className="py-20 md:py-28 bg-background-depth">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionReveal>
            <p className="text-xs font-body font-semibold tracking-widest uppercase text-muted mb-4 text-center">Connectivity & Convenience</p>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground text-center">Nearby Landmarks</h2>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6">
              {property.nearby.map((place) => (
                <div key={place} className="flex items-center gap-3 p-5 bg-background-secondary border border-border">
                  <svg className="w-5 h-5 text-muted shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <span className="text-sm font-body text-body">{place}</span>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Related Properties */}
      {relatedProperties.length > 0 && (
        <section className="py-24 md:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <SectionReveal>
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
                <div>
                  <p className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-muted mb-4">Explore More</p>
                  <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground">Related Properties</h2>
                </div>
                <Link href="/properties" className="mt-6 md:mt-0 text-sm font-body tracking-wide text-muted hover:text-foreground transition-colors duration-300">
                  View All Properties &rarr;
                </Link>
              </div>
            </SectionReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProperties.map(([relSlug, relProperty], i) => (
                <SectionReveal key={relSlug} delay={i * 0.12}>
                  <Link href={`/properties/${relSlug}`} className="group block">
                    <div className="relative aspect-[4/5] overflow-hidden bg-background-depth">
                      <Image src={relProperty.images[0].src} alt={relProperty.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute top-4 left-4">
                        <span className="text-xs font-body tracking-widest uppercase bg-background-secondary/90 px-3 py-1.5 text-foreground">{relProperty.type}</span>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <span className="text-sm font-body text-background-secondary">View Property &rarr;</span>
                      </div>
                    </div>
                    <div className="mt-5">
                      <p className="text-xs font-body tracking-widest uppercase text-muted">{relProperty.location}</p>
                      <h3 className="mt-2 font-heading text-xl text-foreground group-hover:text-body transition-colors duration-300">{relProperty.title}</h3>
                      <div className="mt-3 flex items-center gap-4 text-xs text-muted">
                        <span>{relProperty.beds} Beds</span>
                        <span className="w-px h-3 bg-border" />
                        <span>{relProperty.baths} Baths</span>
                        <span className="w-px h-3 bg-border" />
                        <span>{relProperty.sqft} Sq Ft</span>
                      </div>
                      <p className="mt-3 font-heading text-lg text-foreground">{relProperty.price}</p>
                    </div>
                  </Link>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image src={property.images[0].src} alt="Contact background" fill className="object-cover" />
          <div className="absolute inset-0 bg-foreground/80" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <SectionReveal>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-background-secondary">Interested in This Property?</h2>
              <p className="mt-6 text-base text-background-secondary/60 leading-relaxed">
                Schedule a private viewing or request additional details. Our team is ready to assist you with your next acquisition.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-background-secondary/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  <span className="text-sm text-background-secondary/70">+91 889 434 3056</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-background-secondary/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <span className="text-sm text-background-secondary/70">redstarhuts9@gmail.com</span>
                </div>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <div className="bg-foreground/40 backdrop-blur-sm border border-white/10 p-8 md:p-10 rounded-lg">
                <LeadCaptureForm leadType="property-inquiry" propertyName={property.title} dark />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center" onClick={closeLightbox}>
          <button onClick={closeLightbox} className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <button onClick={(e) => { e.stopPropagation(); goPrev(); }} className="absolute left-4 md:left-8 text-white/70 hover:text-white transition-colors z-10">
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button onClick={(e) => { e.stopPropagation(); goNext(); }} className="absolute right-4 md:right-8 text-white/70 hover:text-white transition-colors z-10">
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
          <div className="relative w-[90vw] h-[80vh] max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={property.images[lightboxIndex].src}
              alt={property.images[lightboxIndex].alt}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
            {property.images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setLightboxIndex(i); }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${i === lightboxIndex ? "bg-white w-6" : "bg-white/40 hover:bg-white/60"}`}
              />
            ))}
          </div>
          <p className="absolute bottom-14 left-1/2 -translate-x-1/2 text-xs text-white/50 tracking-widest">
            {lightboxIndex + 1} / {property.images.length}
          </p>
        </div>
      )}
    </>
  );
}
