"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";
import LeadCaptureForm from "@/components/LeadCaptureForm";

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
  },
};

export default function PropertyDetailClient({ slug }: { slug: string }) {
  const property = propertiesData[slug];
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

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
              <div className="relative aspect-[4/5] overflow-hidden cursor-pointer group" onClick={() => openLightbox(1)}>
                <Image src={property.images[1].src} alt={property.images[1].alt} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300 flex items-center justify-center">
                  <svg className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                  </svg>
                </div>
              </div>
            </SectionReveal>
            <div className="grid grid-cols-2 gap-4">
              {property.images.slice(2).map((img, i) => (
                <SectionReveal key={img.src} delay={i * 0.1}>
                  <div className="relative aspect-square overflow-hidden cursor-pointer group" onClick={() => openLightbox(i + 2)}>
                    <Image src={img.src} alt={img.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300 flex items-center justify-center">
                      <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                      </svg>
                    </div>
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
