"use client";

import Image from "next/image";
import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";
import SectionHeading from "@/components/SectionHeading";
import Breadcrumbs from "@/components/Breadcrumbs";

const values = [
  {
    title: "Integrity",
    description:
      "Every recommendation is rooted in honesty. We prioritize your interests above all else.",
  },
  {
    title: "Discretion",
    description:
      "Your transactions and personal details are handled with the utmost confidentiality.",
  },
  {
    title: "Excellence",
    description:
      "We hold ourselves to the highest standards in market knowledge, negotiation, and client care.",
  },
  {
    title: "Clarity",
    description:
      "Complex decisions made simple. We distill market data into actionable, confident guidance.",
  },
];

const team = [
  {
    name: "Naveen",
    slug: "naveen",
    role: "Founder & Principal Advisor",
    image: "/team/naveen.jpg",
    bio: "A visionary leader with deep expertise in luxury real estate, Naveen founded RedStar Huts to deliver trusted, client-first advisory services across premium property markets.",
  },
  {
    name: "Disha",
    slug: "disha",
    role: "Sales Consultant",
    image: "/team/disha.jpg",
    bio: "With a sharp eye for client needs and a results-driven approach, Disha connects buyers with the right properties through personalized guidance and seamless sales support.",
  },
  {
    name: "Krish",
    slug: "krish",
    role: "Co-Founder & Advisor",
    image: "/team/krish.jpg",
    bio: "As Co-Founder of RedStar Huts, Krish brings a data-driven perspective to the advisory team, supporting clients with market research, property evaluations, and end-to-end advisory assistance.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1600&q=80"
            alt="Luxury architecture"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <SectionReveal>
            <div className="mb-6">
              <Breadcrumbs items={[{ label: "About" }]} />
            </div>
            <p className="text-xs font-body font-semibold tracking-widest uppercase text-background-secondary/60 mb-4">
              About RedStar Huts
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-background-secondary max-w-3xl leading-tight drop-shadow-lg">
              Built on Trust,
              <br />
              Driven by Passion
            </h1>
            <p className="mt-6 text-base md:text-lg text-background-secondary/80 max-w-2xl leading-relaxed">
              A young, passionate team of real estate professionals committed
              to bringing clarity, integrity, and exceptional outcomes to every
              client engagement across the Chandigarh Tri-City region.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionReveal>
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80"
                  alt="Luxury architectural detail"
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
                Founded on Principle,
                <br />
                Growing with Purpose
              </h2>
              <div className="mt-8 space-y-5 text-base text-body leading-relaxed">
                <p>
                  RedStar Huts was founded with a clear vision: to bring
                  honesty, transparency, and genuine expertise to the real
                  estate experience in North India.
                </p>
                <p>
                  In a short time, we have built a growing portfolio of premium
                  properties across Mohali, Zirakpur, and Chandigarh — and
                  expanded into emerging markets like Dholera Smart City. Our
                  approach has remained consistent: listen carefully, research
                  deeply, advise honestly, and deliver with care.
                </p>
                <p>
                  Today, we are trusted by homebuyers, families, and investors
                  who value a partnership built on transparency, local knowledge,
                  and a commitment to finding the right property — not just
                  closing a deal.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 bg-background-depth">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionReveal>
            <SectionHeading
              label="Our Principles"
              title="What Guides Us"
              subtitle="These values are not aspirational — they are operational. They shape every client interaction, every negotiation, and every recommendation."
            />
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <SectionReveal key={value.title} delay={i * 0.1}>
                <div className="bg-background-secondary p-8 h-full">
                  <div className="w-10 h-px bg-foreground mb-6" />
                  <h3 className="font-heading text-xl text-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-4 text-sm text-body leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionReveal>
            <SectionHeading
              label="Leadership"
              title="Meet Our Team"
              subtitle="Experienced professionals united by a shared commitment to client success."
            />
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {team.map((member, i) => (
              <SectionReveal key={member.name} delay={i * 0.15}>
                <Link href={`/authors/${member.slug}`} className="group block">
                  <div className="relative aspect-[3/4] overflow-hidden bg-background-depth">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-6">
                    <h3 className="font-heading text-xl text-foreground group-hover:text-body transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-xs font-body tracking-widest uppercase text-muted mt-2">
                      {member.role}
                    </p>
                    <p className="mt-4 text-sm text-body leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background-depth">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionReveal>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm text-body">
              <p>Discover our full range of <Link href="/services" className="text-foreground underline underline-offset-4 hover:text-muted transition-colors">advisory services</Link></p>
              <p>Browse our <Link href="/properties" className="text-foreground underline underline-offset-4 hover:text-muted transition-colors">curated property portfolio</Link></p>
              <p>Read expert insights on our <Link href="/blog" className="text-foreground underline underline-offset-4 hover:text-muted transition-colors">Journal</Link></p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-background-secondary border-t border-border">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <SectionReveal>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground">
              Ready to Work Together?
            </h2>
            <p className="mt-5 text-base text-body leading-relaxed">
              We welcome the opportunity to understand your goals and explore
              how our expertise can serve you.
            </p>
            <Link
              href="/contact"
              className="inline-block mt-10 text-sm font-body tracking-wide px-8 py-3.5 rounded-full bg-foreground text-background-secondary hover:bg-body transition-colors duration-300"
            >
              Start a Conversation
            </Link>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
