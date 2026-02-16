"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "@/components/SectionReveal";

type GalleryImage = {
  src: string;
  alt: string;
  label: string;
};

const propertiesData: Record<
  string,
  {
    title: string;
    location: string;
    price: string;
    priceLabel: string;
    beds: number;
    baths: number;
    sqft: string;
    type: string;
    tagline: string;
    description: string[];
    features: string[];
    heroImages: string[];
    gallery: GalleryImage[];
    highlights: { label: string; value: string }[];
  }
> = {
  "meridian-residence": {
    title: "The Meridian Residence",
    location: "Beverly Hills, CA",
    price: "$4,850,000",
    priceLabel: "Starting From",
    beds: 5,
    baths: 4,
    sqft: "6,200",
    type: "Residential",
    tagline: "Where modern luxury meets timeless design",
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
    heroImages: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80",
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80", alt: "Living Room", label: "Living Room" },
      { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80", alt: "Kitchen", label: "Kitchen" },
      { src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80", alt: "Master Bedroom", label: "Master Bedroom" },
      { src: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80", alt: "Pool & Views", label: "Pool & Views" },
      { src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80", alt: "Bathroom", label: "Bathroom" },
    ],
    highlights: [
      { label: "Built", value: "2023" },
      { label: "Lot Size", value: "0.45 Acres" },
      { label: "Parking", value: "3-Car Garage" },
      { label: "Style", value: "Contemporary" },
    ],
  },
  "harborview-estate": {
    title: "Harborview Estate",
    location: "Miami Beach, FL",
    price: "$3,200,000",
    priceLabel: "Starting From",
    beds: 4,
    baths: 3,
    sqft: "4,800",
    type: "Residential",
    tagline: "Coastal luxury living at its finest",
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
    heroImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1600&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1600&q=80",
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80", alt: "Living Room", label: "Living Room" },
      { src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80", alt: "Kitchen", label: "Kitchen" },
      { src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80", alt: "Master Bedroom", label: "Master Bedroom" },
      { src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80", alt: "Pool & Garden", label: "Pool & Garden" },
      { src: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80", alt: "Bathroom", label: "Bathroom" },
    ],
    highlights: [
      { label: "Built", value: "2022" },
      { label: "Lot Size", value: "0.38 Acres" },
      { label: "Parking", value: "2-Car Garage" },
      { label: "Style", value: "Modern Coastal" },
    ],
  },
  "crestwood-manor": {
    title: "Crestwood Manor",
    location: "Greenwich, CT",
    price: "$7,100,000",
    priceLabel: "Starting From",
    beds: 6,
    baths: 5,
    sqft: "8,500",
    type: "Estate",
    tagline: "New England grandeur, reimagined",
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
    heroImages: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1600&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1600&q=80",
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80", alt: "Living Room", label: "Living Room" },
      { src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80", alt: "Kitchen", label: "Kitchen" },
      { src: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80", alt: "Master Bedroom", label: "Master Bedroom" },
      { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80", alt: "Garden View", label: "Garden & Grounds" },
    ],
    highlights: [
      { label: "Built", value: "2021" },
      { label: "Lot Size", value: "3.2 Acres" },
      { label: "Parking", value: "6-Car Garage" },
      { label: "Style", value: "Colonial Revival" },
    ],
  },
  "pinnacle-penthouse": {
    title: "The Pinnacle Penthouse",
    location: "Manhattan, NY",
    price: "$12,500,000",
    priceLabel: "Starting From",
    beds: 3,
    baths: 3,
    sqft: "4,200",
    type: "Penthouse",
    tagline: "Above it all, in every sense",
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
    heroImages: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80",
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80", alt: "Living Room", label: "Living Room" },
      { src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80", alt: "Kitchen", label: "Kitchen" },
      { src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80", alt: "Master Suite", label: "Master Suite" },
      { src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80", alt: "City Views", label: "City Views" },
    ],
    highlights: [
      { label: "Floor", value: "58th" },
      { label: "Ceiling", value: "12 ft" },
      { label: "Parking", value: "2 Spaces" },
      { label: "Style", value: "Ultra-Modern" },
    ],
  },
  "lakeshore-villa": {
    title: "Lakeshore Villa",
    location: "Lake Tahoe, NV",
    price: "$5,600,000",
    priceLabel: "Starting From",
    beds: 5,
    baths: 4,
    sqft: "5,800",
    type: "Residential",
    tagline: "Mountain modern living on pristine waters",
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
    heroImages: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1600&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80",
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80", alt: "Great Room", label: "Great Room" },
      { src: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80", alt: "Outdoor Deck", label: "Outdoor Deck" },
      { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80", alt: "Lake View", label: "Lake View" },
      { src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80", alt: "Mountain View", label: "Mountain View" },
    ],
    highlights: [
      { label: "Built", value: "2022" },
      { label: "Lot Size", value: "0.65 Acres" },
      { label: "Parking", value: "3-Car Garage" },
      { label: "Style", value: "Mountain Modern" },
    ],
  },
  "the-wellington": {
    title: "The Wellington",
    location: "San Francisco, CA",
    price: "$2,950,000",
    priceLabel: "Starting From",
    beds: 3,
    baths: 2,
    sqft: "3,100",
    type: "Condominium",
    tagline: "Sophisticated urban living, elevated",
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
    heroImages: [
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1600&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1600&q=80",
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80", alt: "Living Room", label: "Living Room" },
      { src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80", alt: "Kitchen", label: "Kitchen" },
      { src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80", alt: "Bedroom", label: "Bedroom" },
      { src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80", alt: "City View", label: "City View" },
    ],
    highlights: [
      { label: "Floor", value: "12th" },
      { label: "HOA", value: "$850/mo" },
      { label: "Parking", value: "1 Space" },
      { label: "Style", value: "Classic Modern" },
    ],
  },
  "aspen-ridge-retreat": {
    title: "Aspen Ridge Retreat",
    location: "Aspen, CO",
    price: "$8,900,000",
    priceLabel: "Starting From",
    beds: 7,
    baths: 6,
    sqft: "9,200",
    type: "Estate",
    tagline: "An extraordinary mountain estate",
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
    heroImages: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1600&q=80",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1600&q=80",
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80", alt: "Great Room", label: "Great Room" },
      { src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80", alt: "Estate View", label: "Estate View" },
      { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80", alt: "Interior", label: "Interior Detail" },
      { src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80", alt: "Pool", label: "Pool & Terrace" },
    ],
    highlights: [
      { label: "Built", value: "2023" },
      { label: "Lot Size", value: "2.8 Acres" },
      { label: "Parking", value: "4-Car Garage" },
      { label: "Style", value: "Alpine Modern" },
    ],
  },
  "pacific-heights-modern": {
    title: "Pacific Heights Modern",
    location: "San Francisco, CA",
    price: "$6,250,000",
    priceLabel: "Starting From",
    beds: 4,
    baths: 4,
    sqft: "5,100",
    type: "Residential",
    tagline: "Clean lines, warm living",
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
    heroImages: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1600&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80",
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80", alt: "Living Area", label: "Living Area" },
      { src: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80", alt: "Kitchen", label: "Kitchen" },
      { src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80", alt: "Terrace", label: "Terrace View" },
      { src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80", alt: "Facade", label: "Modern Facade" },
    ],
    highlights: [
      { label: "Built", value: "2024" },
      { label: "Levels", value: "3" },
      { label: "Parking", value: "2-Car Garage" },
      { label: "Style", value: "Contemporary" },
    ],
  },
  "strand-collection": {
    title: "The Strand Collection",
    location: "Malibu, CA",
    price: "$15,800,000",
    priceLabel: "Starting From",
    beds: 5,
    baths: 5,
    sqft: "7,400",
    type: "Beachfront",
    tagline: "The ultimate in California beachfront living",
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
    heroImages: [
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1600&q=80",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1600&q=80",
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80", alt: "Ocean Living", label: "Ocean-view Living" },
      { src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80", alt: "Beach View", label: "Beach View" },
      { src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80", alt: "Primary Suite", label: "Primary Suite" },
      { src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80", alt: "Pool", label: "Pool & Ocean" },
    ],
    highlights: [
      { label: "Built", value: "2023" },
      { label: "Lot Size", value: "0.32 Acres" },
      { label: "Parking", value: "3-Car Garage" },
      { label: "Style", value: "Coastal Modern" },
    ],
  },
  "luxury-sample-property": {
    title: "Luxury Sample Residence",
    location: "Chandigarh, India",
    price: "On Request",
    priceLabel: "Price",
    beds: 3,
    baths: 3,
    sqft: "2,800",
    type: "Premium Apartment",
    tagline: "Refined living, meticulously crafted",
    description: [
      "This luxury residence sets a new benchmark for premium living with its exquisite interiors and thoughtful design. Every space has been meticulously crafted to offer comfort, elegance, and a sense of arrival that leaves a lasting impression.",
      "From the designer kitchen with premium finishes to the art-inspired bedrooms and elegant dining space, this property offers a lifestyle that is both aspirational and deeply livable. Natural textures, warm lighting, and curated details create an atmosphere of quiet sophistication.",
    ],
    features: [
      "Designer modular kitchen with premium finishes",
      "Art-inspired master bedroom with ambient lighting",
      "Elegant dining room with custom pendant fixtures",
      "Spacious living room with floor-to-ceiling curtains",
      "Central air conditioning throughout",
      "Premium flooring and imported fixtures",
    ],
    heroImages: [
      "/properties/sample/living-room.jpg",
      "/properties/sample/dining.jpg",
      "/properties/sample/bedroom-2.jpg",
    ],
    gallery: [
      { src: "/properties/sample/living-room.jpg", alt: "Living Room", label: "Living Room" },
      { src: "/properties/sample/kitchen.jpg", alt: "Kitchen", label: "Kitchen" },
      { src: "/properties/sample/bedroom-2.jpg", alt: "Master Bedroom", label: "Master Bedroom" },
      { src: "/properties/sample/bedroom-1.jpg", alt: "Bedroom", label: "Bedroom" },
      { src: "/properties/sample/dining.jpg", alt: "Dining Area", label: "Dining Area" },
    ],
    highlights: [
      { label: "Status", value: "Ready" },
      { label: "Floor", value: "Premium" },
      { label: "Parking", value: "Covered" },
      { label: "Style", value: "Contemporary" },
    ],
  },
  "royal-greens-villa": {
    title: "The Royal Greens Villa",
    location: "Mohali, Punjab",
    price: "\u20B92.8 Cr",
    priceLabel: "Starting From",
    beds: 4,
    baths: 3,
    sqft: "3,200",
    type: "Villa",
    tagline: "Elevated living amidst lush green landscapes",
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
    heroImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1600&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80",
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80", alt: "Living Room", label: "Living Room" },
      { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80", alt: "Kitchen", label: "Kitchen" },
      { src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80", alt: "Master Bedroom", label: "Master Bedroom" },
      { src: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80", alt: "Garden", label: "Garden" },
    ],
    highlights: [
      { label: "Built", value: "2024" },
      { label: "Lot Size", value: "0.25 Acres" },
      { label: "Parking", value: "2-Car Covered" },
      { label: "Style", value: "Contemporary Villa" },
    ],
  },
  "mohali-heights-penthouse": {
    title: "Mohali Heights Penthouse",
    location: "Mohali, Punjab",
    price: "\u20B91.6 Cr",
    priceLabel: "Starting From",
    beds: 3,
    baths: 3,
    sqft: "2,400",
    type: "Penthouse",
    tagline: "Sky-high luxury with panoramic horizons",
    description: [
      "Perched atop one of Mohali's most prestigious towers, this penthouse redefines urban luxury living. With sweeping views of the city skyline and the distant Shivalik range, every moment here feels like an escape.",
      "The open-plan living space features double-height ceilings, premium hardwood flooring, and a private rooftop terrace perfect for entertaining. The chef's kitchen is equipped with top-of-the-line appliances and imported stone countertops.",
    ],
    features: [
      "Double-height living room ceilings",
      "Private rooftop terrace",
      "Panoramic city and mountain views",
      "Premium hardwood flooring",
      "Smart home automation system",
      "Dedicated elevator access",
    ],
    heroImages: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1600&q=80",
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80", alt: "Living Area", label: "Living Area" },
      { src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80", alt: "Bedroom", label: "Master Bedroom" },
      { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80", alt: "Kitchen", label: "Kitchen" },
      { src: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80", alt: "Terrace", label: "Rooftop Terrace" },
    ],
    highlights: [
      { label: "Floor", value: "Top Floor" },
      { label: "View", value: "Panoramic" },
      { label: "Parking", value: "2-Car Reserved" },
      { label: "Style", value: "Modern Penthouse" },
    ],
  },
  "elante-residences": {
    title: "Elante Residences",
    location: "Chandigarh",
    price: "\u20B93.5 Cr",
    priceLabel: "Starting From",
    beds: 4,
    baths: 4,
    sqft: "3,800",
    type: "Residential",
    tagline: "Premium living in the heart of Chandigarh",
    description: [
      "Elante Residences offers an unparalleled living experience in one of Chandigarh's most vibrant neighborhoods. Steps from the renowned Elante Mall and surrounded by premium dining and entertainment, this residence combines convenience with absolute luxury.",
      "Expansive rooms with floor-to-ceiling windows invite natural light and offer commanding views of the city. The interiors showcase a harmonious blend of contemporary design with warm, natural materials.",
    ],
    features: [
      "Prime location near Elante Mall",
      "Floor-to-ceiling panoramic windows",
      "Imported Italian marble flooring",
      "Designer modular kitchen",
      "Temperature-controlled wine storage",
      "Private balcony with city views",
    ],
    heroImages: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1600&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80",
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80", alt: "Living Room", label: "Grand Living" },
      { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80", alt: "Kitchen", label: "Kitchen" },
      { src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80", alt: "Bedroom", label: "Master Suite" },
      { src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80", alt: "Exterior", label: "Building Exterior" },
    ],
    highlights: [
      { label: "Built", value: "2025" },
      { label: "Floor", value: "High Rise" },
      { label: "Parking", value: "2-Car Basement" },
      { label: "Style", value: "Contemporary Luxury" },
    ],
  },
  "sector-9-heritage-home": {
    title: "Sector 9 Heritage Home",
    location: "Chandigarh",
    price: "\u20B94.2 Cr",
    priceLabel: "Starting From",
    beds: 5,
    baths: 4,
    sqft: "4,500",
    type: "Estate",
    tagline: "A legacy of elegance in Chandigarh's finest sector",
    description: [
      "Located in the prestigious Sector 9 of Chandigarh, this heritage home represents the pinnacle of refined living. Built on a generous plot with mature trees and landscaped gardens, the property exudes timeless elegance and old-world charm.",
      "Thoughtfully renovated to blend heritage character with modern amenities, the home features spacious rooms with high ceilings, a grand entrance foyer, and multiple living areas. The private garden hosts a covered pavilion perfect for gatherings.",
    ],
    features: [
      "Prime Sector 9 location",
      "Heritage architecture with modern amenities",
      "Mature landscaped gardens",
      "Grand entrance foyer with high ceilings",
      "Covered garden pavilion",
      "Separate servants' quarters",
    ],
    heroImages: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1600&q=80",
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80", alt: "Exterior", label: "Heritage Facade" },
      { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80", alt: "Living Room", label: "Grand Living" },
      { src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80", alt: "Bedroom", label: "Master Bedroom" },
      { src: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80", alt: "Garden", label: "Private Garden" },
    ],
    highlights: [
      { label: "Plot", value: "500 Sq Yd" },
      { label: "Era", value: "Heritage" },
      { label: "Parking", value: "3-Car Driveway" },
      { label: "Style", value: "Colonial Heritage" },
    ],
  },
  "ambience-boulevard": {
    title: "Ambience Boulevard",
    location: "Zirakpur, Punjab",
    price: "\u20B91.2 Cr",
    priceLabel: "Starting From",
    beds: 3,
    baths: 2,
    sqft: "1,800",
    type: "Residential",
    tagline: "Modern comfort on Chandigarh's vibrant corridor",
    description: [
      "Ambience Boulevard brings modern luxury living to the thriving Zirakpur corridor, perfectly positioned between Chandigarh and Mohali. This thoughtfully designed residence offers the ideal balance of urban convenience and peaceful retreat.",
      "Clean architectural lines, open floor plans, and premium finishes define every space. The residence features a well-appointed kitchen, sun-drenched living areas, and private balconies that offer views of the surrounding greenery.",
    ],
    features: [
      "Strategic Zirakpur location",
      "Open-plan modern layout",
      "Premium vitrified tile flooring",
      "Modular kitchen with chimney and hob",
      "Private balconies with green views",
      "24/7 gated security with CCTV",
    ],
    heroImages: [
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1600&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80",
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80", alt: "Living Room", label: "Living Room" },
      { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80", alt: "Kitchen", label: "Modern Kitchen" },
      { src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80", alt: "Bedroom", label: "Master Bedroom" },
      { src: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80", alt: "Balcony", label: "Balcony View" },
    ],
    highlights: [
      { label: "Built", value: "2024" },
      { label: "Floor", value: "Mid Rise" },
      { label: "Parking", value: "1-Car Covered" },
      { label: "Style", value: "Modern Residential" },
    ],
  },
  "vr-punjab-luxury-floors": {
    title: "VR Punjab Luxury Floors",
    location: "Zirakpur, Punjab",
    price: "\u20B985 Lac",
    priceLabel: "Starting From",
    beds: 3,
    baths: 2,
    sqft: "1,650",
    type: "Residential",
    tagline: "Affordable luxury near VR Punjab Mall",
    description: [
      "VR Punjab Luxury Floors offers an exceptional opportunity to own a premium independent floor in one of Zirakpur's fastest-growing residential zones. Located just minutes from the iconic VR Punjab Mall, this property delivers luxury at an accessible price point.",
      "Designed with contemporary aesthetics and practical living in mind, each floor features spacious bedrooms, a modern kitchen, and a sun-lit drawing room. The community includes landscaped common areas and excellent connectivity to Chandigarh International Airport.",
    ],
    features: [
      "Near VR Punjab Mall",
      "Independent floor with private entrance",
      "Contemporary interior design",
      "Modular kitchen with granite countertops",
      "Landscaped community areas",
      "Proximity to Chandigarh International Airport",
    ],
    heroImages: [
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1600&q=80",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1600&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1600&q=80",
    ],
    gallery: [
      { src: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80", alt: "Exterior", label: "Building Exterior" },
      { src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80", alt: "Living Room", label: "Drawing Room" },
      { src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80", alt: "Bedroom", label: "Bedroom" },
      { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80", alt: "Kitchen", label: "Kitchen" },
    ],
    highlights: [
      { label: "Built", value: "2024" },
      { label: "Type", value: "Independent Floor" },
      { label: "Parking", value: "1-Car Open" },
      { label: "Style", value: "Contemporary" },
    ],
  },
};

const mediaTabs = ["Photos", "Video Tour", "Floor Plan", "Location"] as const;

function getRelatedProperties(currentSlug: string, currentLocation: string, currentType: string) {
  const entries = Object.entries(propertiesData).filter(([s]) => s !== currentSlug);
  const sameLocation = entries.filter(([, p]) => p.location === currentLocation);
  const sameType = entries.filter(([, p]) => p.type === currentType && p.location !== currentLocation);
  const others = entries.filter(([, p]) => p.location !== currentLocation && p.type !== currentType);
  const combined = [...sameLocation, ...sameType, ...others];
  const seen = new Set<string>();
  const unique: [string, (typeof propertiesData)[string]][] = [];
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
  const [heroIndex, setHeroIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<string>("Photos");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [formSent, setFormSent] = useState(false);
  const relatedProperties = property ? getRelatedProperties(slug, property.location, property.type) : [];

  const nextHero = useCallback(() => {
    if (!property) return;
    setHeroIndex((prev) => (prev + 1) % property.heroImages.length);
  }, [property]);

  useEffect(() => {
    if (!property) return;
    const timer = setInterval(nextHero, 10000);
    return () => clearInterval(timer);
  }, [property, nextHero]);

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

  return (
    <>
      <section className="relative h-[85vh] min-h-[600px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={heroIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={property.heroImages[heroIndex]}
              alt={property.title}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-foreground/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/50 to-transparent" />

        <div className="relative z-10 h-full flex flex-col justify-end pb-16 md:pb-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="inline-block text-xs font-body tracking-[0.2em] uppercase text-background-secondary/60 mb-3">
                {property.type} &middot; {property.location}
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl text-background-secondary max-w-4xl leading-[1.1] drop-shadow-lg">
                {property.title}
              </h1>
              <p className="mt-3 text-lg md:text-xl text-background-secondary/70 font-body italic max-w-xl">
                {property.tagline}
              </p>

              <div className="mt-8 flex flex-wrap items-end gap-8">
                <div>
                  <span className="text-xs font-body tracking-widest uppercase text-background-secondary/50">
                    {property.priceLabel}
                  </span>
                  <p className="font-heading text-3xl md:text-4xl text-background-secondary mt-1">
                    {property.price}
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-body tracking-wide px-8 py-4 rounded-full bg-background-secondary text-foreground hover:bg-background transition-colors duration-300"
                >
                  Schedule Site Visit
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>

            {property.heroImages.length > 1 && (
              <div className="flex gap-2 mt-8">
                {property.heroImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setHeroIndex(i)}
                    className={`h-1 rounded-full transition-all duration-700 ${
                      i === heroIndex ? "w-12 bg-background-secondary" : "w-4 bg-background-secondary/30"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="bg-background-secondary border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-6 md:gap-10">
              {[
                { label: "Bedrooms", value: String(property.beds) },
                { label: "Bathrooms", value: String(property.baths) },
                { label: "Area", value: `${property.sqft} Sq Ft` },
                ...property.highlights,
              ].map((item, i) => (
                <div key={item.label} className="flex items-center gap-3">
                  {i > 0 && <span className="w-px h-8 bg-border hidden md:block" />}
                  <div>
                    <span className="text-[10px] font-body tracking-[0.15em] uppercase text-muted block">
                      {item.label}
                    </span>
                    <span className="font-heading text-base text-foreground">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionReveal>
            <div className="flex items-center gap-4 mb-10">
              {mediaTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-sm font-body tracking-wide px-5 py-2.5 rounded-full border transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-foreground text-background-secondary border-foreground"
                      : "bg-transparent text-muted border-border hover:border-foreground hover:text-foreground"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </SectionReveal>

          {activeTab === "Photos" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                {property.gallery.map((img, i) => (
                  <SectionReveal key={img.src} delay={i * 0.08}>
                    <button
                      onClick={() => setSelectedImage(i)}
                      className="group relative w-full overflow-hidden block"
                    >
                      <div className={`relative overflow-hidden ${i === 0 ? "aspect-[4/5] md:row-span-2" : "aspect-square"}`}>
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-all duration-500" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <span className="text-xs font-body tracking-widest uppercase text-background-secondary">
                            {img.label}
                          </span>
                        </div>
                      </div>
                    </button>
                  </SectionReveal>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === "Video Tour" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center py-24 bg-background-depth rounded-lg"
            >
              <div className="text-center">
                <svg className="w-16 h-16 mx-auto text-muted/40 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                </svg>
                <p className="font-heading text-xl text-foreground">Video Tour Coming Soon</p>
                <p className="mt-2 text-sm text-muted">Contact us for a private video walkthrough</p>
              </div>
            </motion.div>
          )}

          {activeTab === "Floor Plan" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center py-24 bg-background-depth rounded-lg"
            >
              <div className="text-center">
                <svg className="w-16 h-16 mx-auto text-muted/40 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                </svg>
                <p className="font-heading text-xl text-foreground">Floor Plan Available on Request</p>
                <p className="mt-2 text-sm text-muted">Schedule a consultation to receive detailed floor plans</p>
              </div>
            </motion.div>
          )}

          {activeTab === "Location" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-background-depth rounded-lg overflow-hidden"
            >
              <div className="p-10 md:p-16 text-center">
                <svg className="w-16 h-16 mx-auto text-muted/40 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <p className="font-heading text-xl text-foreground">{property.location}</p>
                <p className="mt-2 text-sm text-muted max-w-md mx-auto">
                  Contact us for exact location details and to arrange a site visit to this property.
                </p>
                <Link
                  href="/contact"
                  className="inline-block mt-8 text-sm font-body tracking-wide px-8 py-3.5 rounded-full border border-foreground text-foreground hover:bg-foreground hover:text-background-secondary transition-colors duration-300"
                >
                  Request Location Details
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-background-secondary/10 flex items-center justify-center text-background-secondary hover:bg-background-secondary/20 transition-colors z-50"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage((prev) => (prev !== null ? (prev - 1 + property.gallery.length) % property.gallery.length : null));
              }}
              className="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-background-secondary/10 flex items-center justify-center text-background-secondary hover:bg-background-secondary/20 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage((prev) => (prev !== null ? (prev + 1) % property.gallery.length : null));
              }}
              className="absolute right-4 md:right-8 w-12 h-12 rounded-full bg-background-secondary/10 flex items-center justify-center text-background-secondary hover:bg-background-secondary/20 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-5xl aspect-[16/10]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={property.gallery[selectedImage].src}
                alt={property.gallery[selectedImage].alt}
                fill
                className="object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                <span className="text-sm font-body text-background-secondary/80">
                  {property.gallery[selectedImage].label} &middot; {selectedImage + 1} / {property.gallery.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="py-20 md:py-28 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <SectionReveal>
              <p className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-muted mb-4">About This Property</p>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground">Property Overview</h2>
              <div className="mt-8 space-y-6">
                {property.description.map((para, i) => (
                  <p key={i} className="text-base text-body leading-relaxed">{para}</p>
                ))}
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <p className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-muted mb-4">Features & Amenities</p>
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

      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionReveal>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
              <div className="lg:col-span-2">
                <p className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-muted mb-4">Get In Touch</p>
                <h2 className="font-heading text-3xl md:text-4xl text-foreground">
                  Interested in
                  <br />
                  This Property?
                </h2>
                <p className="mt-6 text-base text-body leading-relaxed">
                  Complete the form to schedule a private site visit, request additional details, or speak with our property specialists.
                </p>
                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-3 text-sm text-body">
                    <svg className="w-4 h-4 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    redstarhuts9@gmail.com
                  </div>
                  <div className="flex items-center gap-3 text-sm text-body">
                    <svg className="w-4 h-4 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    +91 889 434 3056
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3">
                {formSent ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-background-secondary rounded-lg p-12 text-center border border-border"
                  >
                    <svg className="w-12 h-12 mx-auto text-foreground mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="font-heading text-2xl text-foreground">Thank You</p>
                    <p className="mt-2 text-sm text-muted">Our team will contact you shortly regarding {property.title}.</p>
                  </motion.div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setFormSent(true);
                    }}
                    className="bg-background-secondary rounded-lg p-8 md:p-10 border border-border space-y-5"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="text-[10px] font-body tracking-[0.15em] uppercase text-muted mb-1.5 block">Full Name</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground font-body focus:outline-none focus:border-foreground transition-colors"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] font-body tracking-[0.15em] uppercase text-muted mb-1.5 block">Email</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground font-body focus:outline-none focus:border-foreground transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-[10px] font-body tracking-[0.15em] uppercase text-muted mb-1.5 block">Phone</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground font-body focus:outline-none focus:border-foreground transition-colors"
                        placeholder="+91 000 000 0000"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-body tracking-[0.15em] uppercase text-muted mb-1.5 block">Message</label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground font-body focus:outline-none focus:border-foreground transition-colors resize-none"
                        placeholder={`I'm interested in ${property.title}. Please share more details.`}
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full text-sm font-body tracking-wide px-8 py-4 rounded-full bg-foreground text-background-secondary hover:bg-body transition-colors duration-300"
                    >
                      Schedule Site Visit
                    </button>
                  </form>
                )}
              </div>
            </div>
          </SectionReveal>
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
                        src={relProperty.heroImages[0]}
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
          <Image src={property.heroImages[0]} alt="Contact background" fill className="object-cover" />
          <div className="absolute inset-0 bg-foreground/80" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <SectionReveal>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-background-secondary">
              Ready to Make This Home Yours?
            </h2>
            <p className="mt-6 text-base text-background-depth/70 leading-relaxed max-w-lg mx-auto">
              Our property specialists are ready to assist you through every step of your acquisition journey.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="inline-block text-sm font-body tracking-wide px-8 py-3.5 rounded-full bg-background-secondary text-foreground hover:bg-background transition-colors duration-300">
                Contact Our Team
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
