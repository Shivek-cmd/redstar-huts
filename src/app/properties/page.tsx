"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";

import { allProperties, budgetRanges, parsePrice } from "@/data/properties";

const locations = ["All Locations", ...Array.from(new Set(allProperties.map((p) => p.location)))];
const types = ["All Types", ...Array.from(new Set(allProperties.map((p) => p.type)))];

export default function PropertiesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [selectedType, setSelectedType] = useState("All Types");
  const [selectedBudget, setSelectedBudget] = useState(0);

  const filteredProperties = useMemo(() => {
    return [...allProperties].reverse().filter((property) => {
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
          {filteredProperties.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-heading text-2xl text-foreground mb-4">No Properties Found</p>
              <p className="text-sm text-muted">Try adjusting your search criteria or filters.</p>
            </div>
          ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property, i) => (
              <SectionReveal key={property.title} delay={(i % 3) * 0.1}>
                <Link href={`/properties/${property.slug}`} className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden bg-background-depth">
                    <Image
                      src={property.image}
                      alt={property.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="text-xs font-body tracking-widest uppercase bg-background-secondary/90 px-3 py-1.5 text-foreground">
                        {property.type}
                      </span>
                    </div>
                  </div>
                  <div className="mt-5">
                    <p className="text-xs font-body tracking-widest uppercase text-muted">
                      {property.location}
                    </p>
                    <h3 className="mt-2 font-heading text-xl text-foreground group-hover:text-body transition-colors duration-300">
                      {property.title}
                    </h3>
                    <div className="mt-3 flex items-center gap-4 text-xs text-muted">
                      <span>{property.beds} Beds</span>
                      <span className="w-px h-3 bg-border" />
                      <span>{property.baths} Baths</span>
                      <span className="w-px h-3 bg-border" />
                      <span>{property.sqft} Sq Ft</span>
                    </div>
                    <p className="mt-3 font-heading text-lg text-foreground">
                      {property.price}
                    </p>
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
