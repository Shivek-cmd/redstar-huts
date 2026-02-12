"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionReveal from "@/components/SectionReveal";
import SectionHeading from "@/components/SectionHeading";

const services = [
  {
    title: "Property Sales",
    description:
      "Strategic marketing and expert negotiation to achieve premium outcomes for sellers.",
    icon: "01",
  },
  {
    title: "Buyer Advisory",
    description:
      "Personalized guidance to identify, evaluate, and secure the right property for your goals.",
    icon: "02",
  },
  {
    title: "Investment Consulting",
    description:
      "Data-driven insights and market intelligence to maximize your real estate portfolio returns.",
    icon: "03",
  },
  {
    title: "Market Analysis",
    description:
      "Comprehensive research and valuation reports to inform confident decision-making.",
    icon: "04",
  },
];

const properties = [
  {
    title: "The Meridian Residence",
    location: "Beverly Hills, CA",
    price: "$4,850,000",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    beds: 5,
    baths: 4,
    sqft: "6,200",
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
  },
];

const testimonials = [
  {
    quote:
      "RedStar Huts understood exactly what we were looking for. Their market knowledge and discretion made the entire process effortless.",
    name: "Jonathan & Claire Mitchell",
    role: "Property Buyers",
  },
  {
    quote:
      "From valuation to closing, every detail was handled with precision. We achieved well above our expected sale price.",
    name: "David Harrington",
    role: "Property Seller",
  },
  {
    quote:
      "Their investment consulting transformed our approach to real estate. The returns have been exceptional.",
    name: "Sarah Lin",
    role: "Real Estate Investor",
  },
];

const stats = [
  { value: "$2.4B+", label: "Transaction Volume" },
  { value: "450+", label: "Properties Sold" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "15+", label: "Years of Experience" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80"
            alt="Luxury modern architecture"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/50 to-foreground/20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <p className="text-xs font-body font-semibold tracking-widest uppercase text-background-depth/70 mb-6">
              Real Estate & Consulting
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-background-secondary leading-tight">
              Where Vision
              <br />
              Meets Value
            </h1>
            <p className="mt-6 text-base md:text-lg text-background-depth/80 max-w-lg leading-relaxed">
              RedStar Huts delivers trusted guidance in property sales,
              acquisitions, and investment strategy — with the discretion and
              precision your portfolio demands.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-block text-sm font-body tracking-wide px-8 py-3.5 bg-background-secondary text-foreground hover:bg-background transition-colors duration-300"
              >
                Schedule a Consultation
              </Link>
              <Link
                href="/properties"
                className="inline-block text-sm font-body tracking-wide px-8 py-3.5 border border-background-depth/30 text-background-secondary hover:bg-background-secondary/10 transition-colors duration-300"
              >
                View Properties
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="w-px h-12 bg-background-secondary/30 mx-auto" />
        </motion.div>
      </section>

      {/* Stats Bar */}
      <section className="bg-background-secondary border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <SectionReveal key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <p className="font-heading text-3xl md:text-4xl text-foreground">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-xs font-body tracking-widest uppercase text-muted">
                    {stat.label}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionReveal>
            <SectionHeading
              label="Our Expertise"
              title="Comprehensive Real Estate Services"
              subtitle="From acquisition to disposition, our advisory practice serves discerning clients with clarity, strategy, and results."
            />
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {services.map((service, i) => (
              <SectionReveal key={service.title} delay={i * 0.1}>
                <div className="bg-background p-10 md:p-14 group hover:bg-background-secondary transition-colors duration-500">
                  <span className="text-xs font-body tracking-widest text-muted">
                    {service.icon}
                  </span>
                  <h3 className="mt-4 font-heading text-xl md:text-2xl text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm text-body leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    href="/services"
                    className="inline-block mt-6 text-xs font-body tracking-widest uppercase text-muted group-hover:text-foreground transition-colors duration-300"
                  >
                    Learn More →
                  </Link>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-24 md:py-32 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
              <div>
                <p className="text-xs font-body font-semibold tracking-widest uppercase text-muted mb-4">
                  Featured Listings
                </p>
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground">
                  Curated Properties
                </h2>
              </div>
              <Link
                href="/properties"
                className="mt-6 md:mt-0 text-sm font-body tracking-wide text-muted hover:text-foreground transition-colors duration-300"
              >
                View All Properties →
              </Link>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {properties.map((property, i) => (
              <SectionReveal key={property.title} delay={i * 0.15}>
                <Link href="/properties" className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden bg-background-depth">
                    <Image
                      src={property.image}
                      alt={property.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
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
        </div>
      </section>

      {/* About / Brand Story Teaser */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionReveal>
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80"
                  alt="Luxury interior"
                  fill
                  className="object-cover"
                />
              </div>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <p className="text-xs font-body font-semibold tracking-widest uppercase text-muted mb-4">
                Our Story
              </p>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground">
                Built on Trust,
                <br />
                Driven by Expertise
              </h2>
              <p className="mt-6 text-base text-body leading-relaxed">
                For over fifteen years, RedStar Huts has guided discerning
                clients through the complexities of real estate with unwavering
                integrity and market intelligence.
              </p>
              <p className="mt-4 text-base text-body leading-relaxed">
                Our approach is simple: understand deeply, advise honestly, and
                execute flawlessly. Every client relationship is built on
                transparency, discretion, and a commitment to exceptional
                outcomes.
              </p>
              <Link
                href="/about"
                className="inline-block mt-8 text-sm font-body tracking-wide px-8 py-3.5 border border-foreground text-foreground hover:bg-foreground hover:text-background-secondary transition-colors duration-300"
              >
                About Our Firm
              </Link>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 bg-background-depth">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionReveal>
            <SectionHeading
              label="Client Testimonials"
              title="Trusted by Those Who Expect the Best"
            />
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <SectionReveal key={t.name} delay={i * 0.12}>
                <div className="bg-background-secondary p-10 h-full flex flex-col">
                  <p className="font-heading text-lg text-foreground italic leading-relaxed flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-8 pt-6 border-t border-border">
                    <p className="text-sm font-body font-medium text-foreground">
                      {t.name}
                    </p>
                    <p className="text-xs text-muted mt-1">{t.role}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1600&q=80"
            alt="Luxury property"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-foreground/75" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <SectionReveal>
            <p className="text-xs font-body font-semibold tracking-widest uppercase text-background-depth/60 mb-4">
              Begin Your Journey
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-background-secondary">
              Your Next Chapter
              <br />
              Starts Here
            </h2>
            <p className="mt-6 text-base text-background-depth/70 leading-relaxed max-w-lg mx-auto">
              Whether buying, selling, or investing, our team is ready to
              deliver the clarity and confidence your next move deserves.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-block text-sm font-body tracking-wide px-8 py-3.5 bg-background-secondary text-foreground hover:bg-background transition-colors duration-300"
              >
                Schedule a Consultation
              </Link>
              <Link
                href="/services"
                className="inline-block text-sm font-body tracking-wide px-8 py-3.5 border border-background-depth/30 text-background-secondary hover:bg-background-secondary/10 transition-colors duration-300"
              >
                Explore Our Services
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
