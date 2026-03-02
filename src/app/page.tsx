"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "@/components/SectionReveal";
import SectionHeading from "@/components/SectionHeading";
import { allProperties } from "@/data/properties";

const heroSlides = [
  { image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80", alt: "Luxury modern architecture" },
  { image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80", alt: "Premium residential estate" },
  { image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80", alt: "Elegant home exterior" },
  { image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1600&q=80", alt: "Contemporary luxury villa" },
];

const services = [
  {
    title: "Property Sales",
    slug: "property-sales",
    description:
      "Strategic marketing and expert negotiation to achieve premium outcomes for sellers.",
    icon: "01",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80",
  },
  {
    title: "Buyer Advisory",
    slug: "buyer-advisory",
    description:
      "Personalized guidance to identify, evaluate, and secure the right property for your goals.",
    icon: "02",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80",
  },
  {
    title: "Investment Consulting",
    slug: "investment-consulting",
    description:
      "Data-driven insights and market intelligence to maximize your real estate portfolio returns.",
    icon: "03",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=600&q=80",
  },
  {
    title: "Market Analysis",
    slug: "market-research",
    description:
      "Comprehensive research and valuation reports to inform confident decision-making.",
    icon: "04",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
  },
];

const properties = allProperties;

const testimonials = [
  {
    quote: "RedStar Huts guided us through every step of buying our first home in Mohali. Their transparency and patience made us feel completely confident in our decision.",
    name: "Amit & Priya Sharma",
    role: "First-Time Homebuyers, Mohali",
  },
  {
    quote: "As an NRI, managing a property purchase remotely felt daunting. The team handled everything — from site visits to paperwork — with absolute professionalism.",
    name: "Rajesh Kapoor",
    role: "NRI Investor, Dubai",
  },
  {
    quote: "We were looking to upgrade to a premium flat in Zirakpur and the team matched us with exactly the right property. Genuine advice, no pushy sales.",
    name: "Gurpreet & Mandeep Kaur",
    role: "Property Buyers, Zirakpur",
  },
  {
    quote: "Their market knowledge of the Tri-City region is outstanding. We invested in a Dholera plot based on their research and couldn't be happier with the returns.",
    name: "Vikram Mehta",
    role: "Smart City Investor, Chandigarh",
  },
  {
    quote: "What impressed me most was the honesty. They told us which properties to avoid and why. That kind of integrity is rare in real estate.",
    name: "Neha Bansal",
    role: "Homebuyer, Mohali",
  },
];

const stats = [
  { value: "50+", label: "Happy Families Served" },
  { value: "7+", label: "Premium Properties Listed" },
  { value: "3", label: "Cities Covered" },
  { value: "100%", label: "Client-First Approach" },
];

const partnerLogos = [
  "Motiaz Royal", "Janta Land", "SBP Group", "Hero Homes",
  "Godrej Properties", "Homeland Group", "Beacon Trusts", "True Value Homes",
];

const faqs = [
  {
    question: "What areas does RedStar Huts serve?",
    answer: "We primarily serve the Chandigarh Tri-City region — Mohali, Zirakpur, and Chandigarh — along with emerging investment markets like Dholera Smart City in Gujarat. Our team has deep, on-ground knowledge of these areas.",
  },
  {
    question: "How does the consultation process begin?",
    answer: "Every engagement begins with a confidential conversation to understand your objectives, timeline, and preferences. From there, we develop a tailored strategy and provide a clear scope of services, ensuring alignment before any commitment.",
  },
  {
    question: "What types of properties do you handle?",
    answer: "We specialize in premium residential flats (3 BHK, 4+1 BHK), luxury apartments, and smart city investment plots. Our current portfolio includes properties across Mohali, Zirakpur, and Dholera Smart City.",
  },
  {
    question: "Do you work with NRI buyers?",
    answer: "Yes. We have experience guiding NRI buyers through the process of purchasing property in India remotely — from virtual site tours and legal documentation to power of attorney handling and registration support.",
  },
  {
    question: "What sets RedStar Huts apart from other firms?",
    answer: "We are a client-first advisory firm, not a brokerage. We don't push properties — we guide you to the right one. Our team personally visits and vets every property before recommending it, and we provide honest advice even if it means telling you to wait.",
  },
  {
    question: "Are there fees for an initial consultation?",
    answer: "Initial consultations are complimentary. We believe in demonstrating our value before any formal engagement, giving you the opportunity to assess our approach and expertise firsthand.",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [propertyPage, setPropertyPage] = useState(0);
  const propertiesPerPage = 3;
  const totalPropertyPages = Math.ceil(properties.length / propertiesPerPage);
  const visibleProperties = properties.slice(
    propertyPage * propertiesPerPage,
    propertyPage * propertiesPerPage + propertiesPerPage
  );

  const nextSlide= useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const nextTestimonial = useCallback(() => {
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 3500);
    return () => clearInterval(interval);
  }, [nextSlide]);

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 3500);
    return () => clearInterval(interval);
  }, [nextTestimonial]);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={heroSlides[currentSlide].image}
                alt={heroSlides[currentSlide].alt}
                fill
                className="object-cover"
                priority={currentSlide === 0}
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/65 to-foreground/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <p className="text-xs font-body font-semibold tracking-widest uppercase text-background-secondary/60 mb-6">
              Real Estate & Consulting
            </p>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-background-secondary leading-tight drop-shadow-lg">
              Where Vision
              <br />
              Meets Value
            </h1>
            <p className="mt-6 text-base md:text-lg text-background-secondary/85 max-w-2xl leading-relaxed">
              RedStar Huts delivers trusted guidance in property sales,
              acquisitions, and investment strategy — with the discretion and
              precision your portfolio demands.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-block text-sm font-body tracking-wide px-8 py-3.5 rounded-full bg-background-secondary text-foreground hover:bg-background transition-colors duration-300"
              >
                Schedule a Consultation
              </Link>
              <Link
                href="/properties"
                className="inline-block text-sm font-body tracking-wide px-8 py-3.5 rounded-full border border-background-secondary/40 text-background-secondary hover:bg-background-secondary/10 transition-colors duration-300"
              >
                View Properties
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex gap-2.5">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2 rounded-full transition-all duration-500 ${
                i === currentSlide
                  ? "bg-background-secondary w-8"
                  : "bg-background-secondary/40 hover:bg-background-secondary/60 w-2"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-foreground">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
            {stats.map((stat, i) => (
              <SectionReveal key={stat.label} delay={i * 0.1}>
                <div className="text-center relative">
                  <p className="font-heading text-4xl md:text-5xl lg:text-6xl text-background-secondary tracking-tight leading-none">
                    {stat.value}
                  </p>
                  <div className="mt-4 mx-auto w-8 h-px bg-background-depth/20" />
                  <p className="mt-4 text-xs md:text-sm font-body tracking-[0.2em] uppercase text-background-depth/50">
                    {stat.label}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionReveal>
            <div className="text-center mb-20">
              <p className="text-xs font-body font-semibold tracking-widest uppercase text-muted mb-4">
                Our Expertise
              </p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground max-w-3xl mx-auto">
                Four Pillars of
                <br />
                Real Estate Excellence
              </h2>
              <p className="mt-6 text-base text-body leading-relaxed max-w-2xl mx-auto">
                Each discipline is led by specialists with deep market knowledge,
                working in concert to deliver outcomes that exceed expectations.
              </p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {services.map((service, i) => (
              <SectionReveal key={service.title} delay={i * 0.1}>
                <Link href={`/services/${service.slug}`} className="group block relative overflow-hidden">
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent group-hover:from-foreground/90 transition-all duration-500" />
                    <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
                      <span className="text-xs font-body tracking-widest text-background-secondary/50 mb-2">
                        {service.icon}
                      </span>
                      <h3 className="font-heading text-2xl md:text-3xl text-background-secondary mb-3">
                        {service.title}
                      </h3>
                      <p className="text-sm text-background-secondary/70 leading-relaxed max-w-md mb-4">
                        {service.description}
                      </p>
                      <span className="text-xs font-body tracking-widest uppercase text-background-secondary/50 group-hover:text-background-secondary transition-colors duration-300">
                        Explore Service &rarr;
                      </span>
                    </div>
                  </div>
                </Link>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal delay={0.3}>
            <div className="text-center mt-16">
              <Link
                href="/services"
                className="inline-block text-sm font-body tracking-wide px-8 py-3.5 rounded-full border border-foreground text-foreground hover:bg-foreground hover:text-background-secondary transition-colors duration-300"
              >
                View All Services
              </Link>
            </div>
          </SectionReveal>
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
              <div className="mt-6 md:mt-0 flex items-center gap-6">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setPropertyPage((p) => Math.max(0, p - 1))}
                    disabled={propertyPage === 0}
                    className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center text-foreground hover:bg-foreground hover:text-background-secondary transition-all duration-300 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-foreground disabled:cursor-not-allowed"
                    aria-label="Previous properties"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setPropertyPage((p) => Math.min(totalPropertyPages - 1, p + 1))}
                    disabled={propertyPage === totalPropertyPages - 1}
                    className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center text-foreground hover:bg-foreground hover:text-background-secondary transition-all duration-300 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-foreground disabled:cursor-not-allowed"
                    aria-label="Next properties"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>
                </div>
                <Link
                  href="/properties"
                  className="text-sm font-body tracking-wide text-muted hover:text-foreground transition-colors duration-300"
                >
                  View All →
                </Link>
              </div>
            </div>
          </SectionReveal>

          <AnimatePresence mode="wait">
            <motion.div
              key={propertyPage}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {visibleProperties.map((property, i) => (
                <SectionReveal key={property.title} delay={i * 0.1}>
                  <Link href={`/properties/${property.slug}`} className="group block">
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
                        {property.beds > 0 && (<><span>{property.beds} Beds</span><span className="w-px h-3 bg-border" /></>)}
                        {property.baths > 0 && (<><span>{property.baths} Baths</span><span className="w-px h-3 bg-border" /></>)}
                        <span>{property.sqft} {property.type.toLowerCase().includes("plot") ? "Sq Yards" : "Sq Ft"}</span>
                      </div>
                      <p className="mt-3 font-heading text-lg text-foreground">
                        {property.price}
                      </p>
                    </div>
                  </Link>
                </SectionReveal>
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-2 mt-12">
            {Array.from({ length: totalPropertyPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPropertyPage(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === propertyPage
                    ? "bg-foreground w-8"
                    : "bg-border hover:bg-muted w-4"
                }`}
                aria-label={`Go to property page ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

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
                Founded by a team of passionate real estate professionals,
                RedStar Huts has quickly grown into a trusted advisory firm
                across the Chandigarh Tri-City region — Mohali, Zirakpur, and
                Chandigarh.
              </p>
              <p className="mt-4 text-base text-body leading-relaxed">
                Our approach is simple: understand deeply, advise honestly, and
                execute with care. Every client relationship is built on
                transparency, genuine market knowledge, and a commitment to
                finding the right property — not just any property.
              </p>
              <Link
                href="/about"
                className="inline-block mt-8 text-sm font-body tracking-wide px-8 py-3.5 rounded-full border border-foreground text-foreground hover:bg-foreground hover:text-background-secondary transition-colors duration-300"
              >
                About Our Firm
              </Link>
            </SectionReveal>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background-secondary border-y border-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionReveal>
            <p className="text-xs font-body font-semibold tracking-widest uppercase text-muted mb-10 text-center">
              Builders & Developers We Work With
            </p>
          </SectionReveal>
        </div>
        <div className="relative">
          <div className="flex animate-scroll">
            {[...partnerLogos, ...partnerLogos].map((logo, i) => (
              <div key={`${logo}-${i}`} className="flex-shrink-0 mx-8 md:mx-12">
                <span className="font-heading text-xl md:text-2xl text-muted/40 whitespace-nowrap">
                  {logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-background-depth">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionReveal>
            <SectionHeading
              label="Client Testimonials"
              title="Trusted by Those Who Expect the Best"
            />
          </SectionReveal>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={testimonialIndex}
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -60 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="bg-background-secondary p-10 md:p-16 rounded-lg text-center"
                >
                  <svg className="w-10 h-10 mx-auto mb-8 text-border" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="font-heading text-xl md:text-2xl text-foreground italic leading-relaxed">
                    &ldquo;{testimonials[testimonialIndex].quote}&rdquo;
                  </p>
                  <div className="mt-8 pt-6 border-t border-border inline-block">
                    <p className="text-sm font-body font-medium text-foreground">
                      {testimonials[testimonialIndex].name}
                    </p>
                    <p className="text-xs text-muted mt-1">
                      {testimonials[testimonialIndex].role}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex justify-center gap-2.5 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTestimonialIndex(i)}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    i === testimonialIndex
                      ? "bg-foreground w-8"
                      : "bg-border hover:bg-muted w-2"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <SectionReveal>
            <div className="text-center mb-16">
              <p className="text-xs font-body font-semibold tracking-widest uppercase text-muted mb-4">
                Common Questions
              </p>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground">
                Frequently Asked Questions
              </h2>
            </div>
          </SectionReveal>

          <div className="space-y-0">
            {faqs.map((faq, i) => (
              <SectionReveal key={faq.question} delay={i * 0.05}>
                <div className="border-b border-border">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full py-6 flex items-center justify-between text-left group"
                  >
                    <span className="font-heading text-lg text-foreground pr-8 group-hover:text-body transition-colors duration-300">
                      {faq.question}
                    </span>
                    <motion.span
                      animate={{ rotate: openFaq === i ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-2xl text-muted shrink-0 leading-none"
                    >
                      +
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 text-base text-body leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
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
                className="inline-block text-sm font-body tracking-wide px-8 py-3.5 rounded-full bg-background-secondary text-foreground hover:bg-background transition-colors duration-300"
              >
                Schedule a Consultation
              </Link>
              <Link
                href="/services"
                className="inline-block text-sm font-body tracking-wide px-8 py-3.5 rounded-full border border-background-depth/30 text-background-secondary hover:bg-background-secondary/10 transition-colors duration-300"
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
