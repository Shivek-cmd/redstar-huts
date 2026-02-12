"use client";

import Image from "next/image";
import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";
import SectionHeading from "@/components/SectionHeading";

const services = [
  {
    number: "01",
    title: "Property Sales & Disposition",
    description:
      "We position your property to attract the right buyers and achieve premium results. Our approach combines strategic market positioning, discreet marketing, and skilled negotiation to maximize value at every stage.",
    details: [
      "Comprehensive property valuation and pricing strategy",
      "Professional staging and photography coordination",
      "Targeted marketing to qualified buyer networks",
      "Expert negotiation and transaction management",
    ],
    image:
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80",
  },
  {
    number: "02",
    title: "Buyer Advisory & Acquisition",
    description:
      "Finding the right property requires more than browsing listings. We provide personalized search, rigorous due diligence, and strategic counsel to ensure your acquisition aligns with your lifestyle and financial objectives.",
    details: [
      "Personalized property search and shortlisting",
      "Market analysis and comparative evaluation",
      "Due diligence and risk assessment",
      "Offer strategy and closing coordination",
    ],
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80",
  },
  {
    number: "03",
    title: "Investment Consulting",
    description:
      "Whether building a portfolio or optimizing existing holdings, our investment advisory service delivers data-driven insights and strategic guidance to maximize long-term returns.",
    details: [
      "Portfolio analysis and optimization",
      "Market opportunity identification",
      "Risk-adjusted return modeling",
      "Acquisition and disposition strategy",
    ],
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
  },
  {
    number: "04",
    title: "Market Research & Valuation",
    description:
      "Informed decisions start with accurate data. Our research team delivers comprehensive market analysis and valuation reports that form the foundation of confident real estate decision-making.",
    details: [
      "Neighborhood and submarket analysis",
      "Comparable sales and trend reporting",
      "Property valuation and appraisal coordination",
      "Custom research for specific investment criteria",
    ],
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionReveal>
            <p className="text-xs font-body font-semibold tracking-widest uppercase text-muted mb-4">
              Our Services
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground max-w-3xl">
              Advisory Excellence
              <br />
              at Every Stage
            </h1>
            <p className="mt-6 text-base md:text-lg text-body max-w-2xl leading-relaxed">
              From first conversation to final closing, our comprehensive
              services are designed to deliver clarity, confidence, and
              exceptional results.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Services Detail */}
      <section className="bg-background">
        {services.map((service, i) => (
          <div
            key={service.number}
            className={`py-24 md:py-32 ${
              i % 2 === 1 ? "bg-background-secondary" : "bg-background"
            }`}
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  i % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                <SectionReveal>
                  <div
                    className={`${i % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}
                  >
                    <span className="text-xs font-body tracking-widest text-muted">
                      {service.number}
                    </span>
                    <h2 className="mt-4 font-heading text-3xl md:text-4xl text-foreground">
                      {service.title}
                    </h2>
                    <p className="mt-6 text-base text-body leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="mt-8 space-y-3">
                      {service.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex items-start gap-3 text-sm text-body"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className="inline-block mt-10 text-sm font-body tracking-wide px-8 py-3.5 border border-foreground text-foreground hover:bg-foreground hover:text-background-secondary transition-colors duration-300"
                    >
                      Inquire About This Service
                    </Link>
                  </div>
                </SectionReveal>

                <SectionReveal delay={0.2}>
                  <div
                    className={`relative aspect-[4/5] overflow-hidden ${
                      i % 2 === 1 ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </SectionReveal>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Process */}
      <section className="py-24 md:py-32 bg-background-depth">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionReveal>
            <SectionHeading
              label="Our Process"
              title="How We Work"
              subtitle="A structured, transparent approach that prioritizes your goals at every stage."
            />
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                desc: "We listen. Understanding your objectives, timeline, and priorities is where every engagement begins.",
              },
              {
                step: "02",
                title: "Strategy",
                desc: "We develop a tailored plan informed by market data, competitive analysis, and your unique position.",
              },
              {
                step: "03",
                title: "Execution",
                desc: "We act with precision — managing every detail from marketing to negotiation to closing.",
              },
              {
                step: "04",
                title: "Results",
                desc: "We deliver outcomes that exceed expectations and build lasting client relationships.",
              },
            ].map((item, i) => (
              <SectionReveal key={item.step} delay={i * 0.1}>
                <div className="bg-background-secondary p-8 h-full">
                  <span className="text-3xl font-heading text-border">
                    {item.step}
                  </span>
                  <h3 className="mt-4 font-heading text-xl text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm text-body leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1600&q=80"
            alt="Architecture detail"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-foreground/75" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <SectionReveal>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-background-secondary">
              Let&apos;s Discuss Your Goals
            </h2>
            <p className="mt-6 text-base text-background-depth/70 leading-relaxed max-w-lg mx-auto">
              Every successful outcome starts with a conversation. Tell us what
              you&apos;re looking for, and we&apos;ll outline how we can help.
            </p>
            <Link
              href="/contact"
              className="inline-block mt-10 text-sm font-body tracking-wide px-8 py-3.5 bg-background-secondary text-foreground hover:bg-background transition-colors duration-300"
            >
              Schedule a Consultation
            </Link>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
