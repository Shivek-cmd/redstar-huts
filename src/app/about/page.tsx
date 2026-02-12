"use client";

import Image from "next/image";
import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";
import SectionHeading from "@/components/SectionHeading";

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
    name: "Alexander Reed",
    role: "Founder & Principal Advisor",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    bio: "With over two decades in luxury real estate, Alexander founded RedStar Huts to redefine the client advisory experience.",
  },
  {
    name: "Victoria Chen",
    role: "Director of Sales",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
    bio: "Victoria brings strategic precision and an unmatched network to every property engagement.",
  },
  {
    name: "Marcus Thompson",
    role: "Head of Investment Advisory",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80",
    bio: "A former institutional analyst, Marcus translates complex market dynamics into portfolio-building opportunities.",
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
          <div className="absolute inset-0 bg-gradient-to-r from-[#1F1F1F]/80 via-[#1F1F1F]/60 to-[#1F1F1F]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F1F]/50 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <SectionReveal>
            <p className="text-xs font-body font-semibold tracking-widest uppercase text-[#FBFAF8]/60 mb-4">
              About RedStar Huts
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-[#FBFAF8] max-w-3xl leading-tight drop-shadow-lg">
              A Legacy of Trust
              <br />
              in Real Estate
            </h1>
            <p className="mt-6 text-base md:text-lg text-[#FBFAF8]/80 max-w-2xl leading-relaxed">
              For over fifteen years, we have served discerning clients with a
              singular commitment: to bring clarity, integrity, and exceptional
              outcomes to every real estate engagement.
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
                Refined by Experience
              </h2>
              <div className="mt-8 space-y-5 text-base text-body leading-relaxed">
                <p>
                  RedStar Huts was established with a clear vision: to provide
                  real estate advisory services that match the sophistication of
                  the properties and clients we serve.
                </p>
                <p>
                  From our earliest transactions to our current portfolio of
                  over $2.4 billion in completed deals, our approach has remained
                  consistent — listen carefully, analyze deeply, advise honestly,
                  and execute with precision.
                </p>
                <p>
                  Today, we are trusted by property buyers, sellers, and
                  investors who demand not just results, but a partnership built
                  on transparency and long-term value.
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
                <div className="group">
                  <div className="relative aspect-[3/4] overflow-hidden bg-background-depth">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-6">
                    <h3 className="font-heading text-xl text-foreground">
                      {member.name}
                    </h3>
                    <p className="text-xs font-body tracking-widest uppercase text-muted mt-2">
                      {member.role}
                    </p>
                    <p className="mt-4 text-sm text-body leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
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
