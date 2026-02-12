"use client";

import Image from "next/image";
import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";

const allProperties = [
  {
    title: "The Meridian Residence",
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

export default function PropertiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionReveal>
            <p className="text-xs font-body font-semibold tracking-widest uppercase text-muted mb-4">
              Our Portfolio
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground max-w-3xl">
              Exceptional Properties,
              <br />
              Carefully Curated
            </h1>
            <p className="mt-6 text-base md:text-lg text-body max-w-2xl leading-relaxed">
              Each listing in our portfolio has been selected for its quality,
              location, and investment potential. Explore properties that meet
              the highest standards.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProperties.map((property, i) => (
              <SectionReveal key={property.title} delay={(i % 3) * 0.1}>
                <div className="group cursor-pointer">
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
                </div>
              </SectionReveal>
            ))}
          </div>
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
              className="inline-block mt-10 text-sm font-body tracking-wide px-8 py-3.5 bg-foreground text-background-secondary hover:bg-body transition-colors duration-300"
            >
              Private Inquiry
            </Link>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
