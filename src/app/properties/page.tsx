"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";

const allProperties = [
  {
    title: "The Meridian Residence",
    slug: "meridian-residence",
    location: "Beverly Hills, CA",
    price: "$4,850,000",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    beds: 5,
    baths: 4,
    sqft: "6,200",
    type: "Residential",
  },
  {
    title: "Harborview Estate",
    slug: "harborview-estate",
    location: "Miami Beach, FL",
    price: "$3,200,000",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    beds: 4,
    baths: 3,
    sqft: "4,800",
    type: "Residential",
  },
  {
    title: "Crestwood Manor",
    slug: "crestwood-manor",
    location: "Greenwich, CT",
    price: "$7,100,000",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    beds: 6,
    baths: 5,
    sqft: "8,500",
    type: "Estate",
  },
  {
    title: "The Pinnacle Penthouse",
    slug: "pinnacle-penthouse",
    location: "Manhattan, NY",
    price: "$12,500,000",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    beds: 3,
    baths: 3,
    sqft: "4,200",
    type: "Penthouse",
  },
  {
    title: "Lakeshore Villa",
    slug: "lakeshore-villa",
    location: "Lake Tahoe, NV",
    price: "$5,600,000",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    beds: 5,
    baths: 4,
    sqft: "5,800",
    type: "Residential",
  },
  {
    title: "The Wellington",
    slug: "the-wellington",
    location: "San Francisco, CA",
    price: "$2,950,000",
    image:
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80",
    beds: 3,
    baths: 2,
    sqft: "3,100",
    type: "Condominium",
  },
  {
    title: "Aspen Ridge Retreat",
    slug: "aspen-ridge-retreat",
    location: "Aspen, CO",
    price: "$8,900,000",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
    beds: 7,
    baths: 6,
    sqft: "9,200",
    type: "Estate",
  },
  {
    title: "Pacific Heights Modern",
    slug: "pacific-heights-modern",
    location: "San Francisco, CA",
    price: "$6,250,000",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80",
    beds: 4,
    baths: 4,
    sqft: "5,100",
    type: "Residential",
  },
  {
    title: "The Strand Collection",
    slug: "strand-collection",
    location: "Malibu, CA",
    price: "$15,800,000",
    image:
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80",
    beds: 5,
    baths: 5,
    sqft: "7,400",
    type: "Beachfront",
  },
];

const locations = ["All Locations", ...Array.from(new Set(allProperties.map((p) => p.location)))];
const types = ["All Types", ...Array.from(new Set(allProperties.map((p) => p.type)))];
const budgetRanges = [
  { label: "Any Budget", min: 0, max: Infinity },
  { label: "Under $5M", min: 0, max: 5000000 },
  { label: "$5M - $10M", min: 5000000, max: 10000000 },
  { label: "$10M+", min: 10000000, max: Infinity },
];

function parsePrice(price: string): number {
  return Number(price.replace(/[$,]/g, ""));
}

export default function PropertiesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [selectedType, setSelectedType] = useState("All Types");
  const [selectedBudget, setSelectedBudget] = useState(0);

  const filteredProperties = useMemo(() => {
    return allProperties.filter((property) => {
      const matchesSearch =
        searchQuery === "" ||
        property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.location.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesLocation =
        selectedLocation === "All Locations" || property.location === selectedLocation;
      const matchesType =
        selectedType === "All Types" || property.type === selectedType;
      const budget = budgetRanges[selectedBudget];
      const price = parsePrice(property.price);
      const matchesBudget = price >= budget.min && price < budget.max;
      return matchesSearch && matchesLocation && matchesType && matchesBudget;
    });
  }, [searchQuery, selectedLocation, selectedType, selectedBudget]);

  return (
    <>
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80"
            alt="Luxury property portfolio"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <SectionReveal>
            <p className="text-xs font-body font-semibold tracking-widest uppercase text-background-secondary/60 mb-4">
              Our Portfolio
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-background-secondary max-w-3xl leading-tight drop-shadow-lg">
              Exceptional Properties,
              <br />
              Carefully Curated
            </h1>
            <p className="mt-6 text-base md:text-lg text-background-secondary/80 max-w-2xl leading-relaxed">
              Each listing in our portfolio has been selected for its quality,
              location, and investment potential. Explore properties that meet
              the highest standards.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8">
          <div className="flex flex-col gap-6">
            <div className="relative">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
              <input
                type="text"
                placeholder="Search by name or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 bg-background-secondary border border-border rounded-full text-sm font-body text-foreground placeholder:text-muted focus:outline-none focus:border-foreground/30 transition-colors duration-300"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full px-4 py-3 bg-background-secondary border border-border rounded-full text-sm font-body text-body appearance-none cursor-pointer focus:outline-none focus:border-foreground/30 transition-colors duration-300"
              >
                {locations.map((loc) => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-4 py-3 bg-background-secondary border border-border rounded-full text-sm font-body text-body appearance-none cursor-pointer focus:outline-none focus:border-foreground/30 transition-colors duration-300"
              >
                {types.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              <select
                value={selectedBudget}
                onChange={(e) => setSelectedBudget(Number(e.target.value))}
                className="w-full px-4 py-3 bg-background-secondary border border-border rounded-full text-sm font-body text-body appearance-none cursor-pointer focus:outline-none focus:border-foreground/30 transition-colors duration-300"
              >
                {budgetRanges.map((range, i) => (
                  <option key={range.label} value={i}>{range.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionReveal>
            <div className="flex items-center justify-between mb-12">
              <p className="text-sm font-body text-muted">
                {filteredProperties.length} {filteredProperties.length === 1 ? "property" : "properties"} available
              </p>
            </div>
          </SectionReveal>
          {filteredProperties.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-heading text-2xl text-foreground mb-4">No Properties Found</p>
              <p className="text-sm text-muted">Try adjusting your search criteria or filters.</p>
            </div>
          ) : (
          <div className="space-y-16">
            {filteredProperties.map((property, i) => (
              <SectionReveal key={property.title} delay={(i % 3) * 0.08}>
                <Link href={`/properties/${property.slug}`} className="group block">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${i % 2 !== 0 ? "lg:direction-rtl" : ""}`}>
                    <div className={`relative aspect-[16/11] overflow-hidden bg-background-depth ${i % 2 !== 0 ? "lg:order-2" : ""}`}>
                      <Image
                        src={property.image}
                        alt={property.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-5 left-5">
                        <span className="text-xs font-body tracking-widest uppercase bg-foreground/80 backdrop-blur-sm px-4 py-2 text-background-secondary">
                          {property.type}
                        </span>
                      </div>
                    </div>
                    <div className={`${i % 2 !== 0 ? "lg:order-1 lg:text-right" : ""}`}>
                      <p className="text-xs font-body tracking-widest uppercase text-muted mb-3">
                        {property.location}
                      </p>
                      <h3 className="font-heading text-2xl md:text-3xl text-foreground group-hover:text-body transition-colors duration-300">
                        {property.title}
                      </h3>
                      <div className={`mt-5 flex items-center gap-6 text-sm text-body ${i % 2 !== 0 ? "lg:justify-end" : ""}`}>
                        <div className="text-center">
                          <span className="block font-heading text-xl text-foreground">{property.beds}</span>
                          <span className="text-xs font-body tracking-widest uppercase text-muted">Beds</span>
                        </div>
                        <span className="w-px h-10 bg-border" />
                        <div className="text-center">
                          <span className="block font-heading text-xl text-foreground">{property.baths}</span>
                          <span className="text-xs font-body tracking-widest uppercase text-muted">Baths</span>
                        </div>
                        <span className="w-px h-10 bg-border" />
                        <div className="text-center">
                          <span className="block font-heading text-xl text-foreground">{property.sqft}</span>
                          <span className="text-xs font-body tracking-widest uppercase text-muted">Sq Ft</span>
                        </div>
                      </div>
                      <div className="mt-6 pt-6 border-t border-border">
                        <p className="font-heading text-2xl text-foreground">
                          {property.price}
                        </p>
                      </div>
                      <span className="inline-block mt-6 text-xs font-body tracking-widest uppercase text-muted group-hover:text-foreground transition-colors duration-300">
                        View Property &rarr;
                      </span>
                    </div>
                  </div>
                </Link>
              </SectionReveal>
            ))}
          </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-background-depth">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <SectionReveal>
            <p className="text-xs font-body font-semibold tracking-widest uppercase text-muted mb-4">
              Looking for Something Specific?
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground">
              Not All Listings Are Public
            </h2>
            <p className="mt-5 text-base text-body leading-relaxed max-w-lg mx-auto">
              Many of our finest properties are available exclusively through
              private inquiry. Contact us to discuss your specific criteria and
              gain access to our full portfolio.
            </p>
            <Link
              href="/contact"
              className="inline-block mt-10 text-sm font-body tracking-wide px-8 py-3.5 rounded-full bg-foreground text-background-secondary hover:bg-body transition-colors duration-300"
            >
              Private Inquiry
            </Link>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
