"use client";

import Image from "next/image";
import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";
import SectionHeading from "@/components/SectionHeading";

import { services } from "@/data/services";

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1600&q=80"
            alt="Luxury real estate services"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <SectionReveal>
            <p className="text-xs font-body font-semibold tracking-widest uppercase text-background-secondary/60 mb-4">
              Our Services
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-background-secondary max-w-3xl leading-tight drop-shadow-lg">
              Advisory Excellence
              <br />
              at Every Stage
            </h1>
            <p className="mt-6 text-base md:text-lg text-background-secondary/80 max-w-2xl leading-relaxed">
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
                    <div className="mt-10 flex flex-wrap gap-4">
                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-block text-sm font-body tracking-wide px-8 py-3.5 rounded-full bg-foreground text-background-secondary hover:bg-body transition-colors duration-300"
                      >
                        Read More
                      </Link>
                      <Link
                        href="/contact"
                        className="inline-block text-sm font-body tracking-wide px-8 py-3.5 rounded-full border border-foreground text-foreground hover:bg-foreground hover:text-background-secondary transition-colors duration-300"
                      >
                        Inquire
                      </Link>
                    </div>
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
              className="inline-block mt-10 text-sm font-body tracking-wide px-8 py-3.5 rounded-full bg-background-secondary text-foreground hover:bg-background transition-colors duration-300"
            >
              Schedule a Consultation
            </Link>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
