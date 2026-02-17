"use client";

import Image from "next/image";
import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";
import LeadCaptureForm from "@/components/LeadCaptureForm";

const servicesData: Record<
  string,
  {
    number: string;
    title: string;
    tagline: string;
    description: string[];
    features: { title: string; text: string }[];
    images: { src: string; alt: string }[];
    cta: string;
  }
> = {
  "property-sales": {
    number: "01",
    title: "Property Sales & Disposition",
    tagline: "Maximize Value with Strategic Positioning",
    description: [
      "Selling a high-value property requires more than listing it on the market. At RedStar Huts, we craft a tailored disposition strategy that positions your asset to attract the most qualified buyers and achieve premium outcomes.",
      "Our team combines deep market intelligence with discreet, targeted marketing to ensure your property reaches the right audience at the right time. From initial valuation through final closing, every detail is managed with precision.",
    ],
    features: [
      {
        title: "Strategic Pricing",
        text: "Data-driven valuation and competitive positioning to establish the optimal asking price.",
      },
      {
        title: "Premium Marketing",
        text: "Professional photography, virtual tours, and targeted campaigns that showcase your property at its finest.",
      },
      {
        title: "Qualified Buyer Access",
        text: "Direct connections to our vetted network of high-net-worth buyers and institutional investors.",
      },
      {
        title: "Expert Negotiation",
        text: "Skilled negotiation to protect your interests and maximize returns at every stage.",
      },
    ],
    images: [
      { src: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1200&q=80", alt: "Luxury home exterior" },
      { src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80", alt: "Premium interior design" },
      { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80", alt: "Elegant living space" },
    ],
    cta: "Discuss Selling Your Property",
  },
  "buyer-advisory": {
    number: "02",
    title: "Buyer Advisory & Acquisition",
    tagline: "Find the Right Property with Confidence",
    description: [
      "Acquiring the right property is one of the most significant decisions you will make. Our Buyer Advisory service provides the insight, access, and strategic guidance needed to navigate the process with clarity and confidence.",
      "We go beyond browsing listings. Our team conducts rigorous market research, evaluates opportunities against your specific criteria, and manages every aspect of the acquisition process to ensure your investment aligns with your vision.",
    ],
    features: [
      { title: "Personalized Search", text: "A curated property search tailored to your lifestyle preferences, investment goals, and timeline." },
      { title: "Market Intelligence", text: "In-depth comparative analysis and neighborhood insights to inform every decision." },
      { title: "Due Diligence", text: "Comprehensive property assessment including inspections, legal review, and risk evaluation." },
      { title: "Acquisition Strategy", text: "Strategic offer positioning and negotiation to secure your property at the best possible terms." },
    ],
    images: [
      { src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=80", alt: "Modern luxury residence" },
      { src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80", alt: "Premium estate exterior" },
      { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80", alt: "Contemporary architecture" },
    ],
    cta: "Start Your Property Search",
  },
  "investment-consulting": {
    number: "03",
    title: "Investment Consulting",
    tagline: "Strategic Insights for Long-Term Returns",
    description: [
      "Real estate investment demands more than intuition. Our Investment Consulting service delivers the analytical rigor, market expertise, and strategic vision needed to build and optimize a high-performing property portfolio.",
      "Whether you are a first-time investor or managing a diversified portfolio, we provide data-driven guidance that identifies opportunities, mitigates risk, and maximizes long-term value creation.",
    ],
    features: [
      { title: "Portfolio Analysis", text: "Comprehensive review of existing holdings with recommendations for optimization and growth." },
      { title: "Opportunity Identification", text: "Proactive market scanning to uncover high-potential investment opportunities before they reach the broader market." },
      { title: "Financial Modeling", text: "Detailed projections including ROI analysis, cash flow modeling, and risk-adjusted return scenarios." },
      { title: "Exit Strategy", text: "Strategic planning for disposition timing and approach to maximize realized gains." },
    ],
    images: [
      { src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80", alt: "Investment property" },
      { src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80", alt: "Commercial real estate" },
      { src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80", alt: "Luxury development" },
    ],
    cta: "Explore Investment Opportunities",
  },
  "market-research": {
    number: "04",
    title: "Market Research & Valuation",
    tagline: "Informed Decisions Start with Accurate Data",
    description: [
      "In a dynamic real estate market, accurate data is the foundation of every sound decision. Our Market Research & Valuation service provides the comprehensive analysis and expert insight needed to act with confidence.",
      "From neighborhood-level trend analysis to detailed property valuations, our research team delivers actionable intelligence that supports buying, selling, and investment decisions at the highest level.",
    ],
    features: [
      { title: "Market Analysis", text: "In-depth examination of market conditions, pricing trends, and supply-demand dynamics in your target area." },
      { title: "Property Valuation", text: "Rigorous assessment using comparable sales, replacement cost, and income approaches for accurate pricing." },
      { title: "Trend Forecasting", text: "Forward-looking analysis of market trajectories to inform timing and strategy decisions." },
      { title: "Custom Research", text: "Bespoke reports tailored to your specific investment criteria, geographic focus, or asset class." },
    ],
    images: [
      { src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80", alt: "Urban skyline" },
      { src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80", alt: "Architectural detail" },
      { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80", alt: "Residential property" },
    ],
    cta: "Request a Market Report",
  },
};

const allSlugs = Object.keys(servicesData);

export default function ServiceDetailClient({ slug }: { slug: string }) {
  const service = servicesData[slug];

  if (!service) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="font-heading text-4xl text-foreground">Service Not Found</h1>
          <Link href="/services" className="mt-6 inline-block text-sm font-body tracking-wide px-8 py-3.5 rounded-full border border-foreground text-foreground hover:bg-foreground hover:text-background-secondary transition-colors duration-300">
            Back to Services
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={service.images[0].src} alt={service.images[0].alt} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <SectionReveal>
            <span className="block text-xs font-body tracking-widest text-background-secondary/50 mb-4">{service.number}</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-background-secondary max-w-4xl leading-tight drop-shadow-lg">
              {service.title}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-background-secondary/80 max-w-2xl leading-relaxed">{service.tagline}</p>
          </SectionReveal>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {service.description.map((para, i) => (
            <div key={i} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${i > 0 ? "mt-24" : ""}`}>
              {i % 2 === 0 ? (
                <>
                  <SectionReveal>
                    <div>
                      <p className="text-base md:text-lg text-body leading-relaxed">{para}</p>
                      {i === 0 && (
                        <Link href="/contact" className="inline-block mt-10 text-sm font-body tracking-wide px-8 py-3.5 rounded-full bg-foreground text-background-secondary hover:bg-body transition-colors duration-300">
                          {service.cta}
                        </Link>
                      )}
                    </div>
                  </SectionReveal>
                  <SectionReveal delay={0.2}>
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <Image src={service.images[i < service.images.length ? i : 0].src} alt={service.images[i < service.images.length ? i : 0].alt} fill className="object-cover" />
                    </div>
                  </SectionReveal>
                </>
              ) : (
                <>
                  <SectionReveal>
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <Image src={service.images[i < service.images.length ? i : 0].src} alt={service.images[i < service.images.length ? i : 0].alt} fill className="object-cover" />
                    </div>
                  </SectionReveal>
                  <SectionReveal delay={0.2}>
                    <p className="text-base md:text-lg text-body leading-relaxed">{para}</p>
                  </SectionReveal>
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 md:py-32 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionReveal>
            <p className="text-xs font-body font-semibold tracking-widest uppercase text-muted mb-4">What We Deliver</p>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground max-w-2xl">A Comprehensive Approach</h2>
          </SectionReveal>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {service.features.map((feature, i) => (
              <SectionReveal key={feature.title} delay={i * 0.1}>
                <div className="bg-background-secondary p-10 md:p-14 h-full">
                  <span className="text-xs font-body tracking-widest text-muted">0{i + 1}</span>
                  <h3 className="mt-4 font-heading text-xl text-foreground">{feature.title}</h3>
                  <p className="mt-4 text-sm text-body leading-relaxed">{feature.text}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionReveal>
            <p className="text-xs font-body font-semibold tracking-widest uppercase text-muted mb-4">Gallery</p>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground">Excellence in Detail</h2>
          </SectionReveal>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.images.map((img, i) => (
              <SectionReveal key={img.src} delay={i * 0.1}>
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image src={img.src} alt={img.alt} fill className="object-cover hover:scale-105 transition-transform duration-700" />
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-background-depth">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionReveal>
            <p className="text-xs font-body font-semibold tracking-widest uppercase text-muted mb-4">Explore More</p>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground">Other Services</h2>
          </SectionReveal>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {allSlugs
              .filter((s) => s !== slug)
              .map((s, i) => (
                <SectionReveal key={s} delay={i * 0.1}>
                  <Link href={`/services/${s}`} className="group block">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image src={servicesData[s].images[0].src} alt={servicesData[s].title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-foreground/40 group-hover:bg-foreground/20 transition-colors duration-500" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <span className="text-xs font-body tracking-widest text-background-secondary/60">{servicesData[s].number}</span>
                        <h3 className="mt-1 font-heading text-lg text-background-secondary">{servicesData[s].title}</h3>
                      </div>
                    </div>
                  </Link>
                </SectionReveal>
              ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionReveal>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm text-body">
              <p>Looking for a property? <Link href="/properties" className="text-foreground underline underline-offset-4 hover:text-muted transition-colors">Browse our curated listings</Link></p>
              <p>Read expert insights on our <Link href="/blog" className="text-foreground underline underline-offset-4 hover:text-muted transition-colors">Journal</Link></p>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image src={service.images[2].src} alt="Contact background" fill className="object-cover" />
          <div className="absolute inset-0 bg-foreground/80" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <SectionReveal>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-background-secondary">Ready to Get Started?</h2>
              <p className="mt-6 text-base text-background-secondary/60 leading-relaxed">
                Let us understand your goals and outline exactly how we can help you achieve them.
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
                <LeadCaptureForm leadType="service-inquiry" serviceName={service.title} dark />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>
    </>
  );
}
