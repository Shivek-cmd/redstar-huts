"use client";

import Image from "next/image";
import SectionReveal from "@/components/SectionReveal";
import LeadCaptureForm from "@/components/LeadCaptureForm";

const contactInfo = [
  {
    label: "Email",
    value: "redstarhuts9@gmail.com",
    href: "mailto:redstarhuts9@gmail.com",
  },
  {
    label: "Phone",
    value: "+91 889 434 3056",
    href: "tel:+918894343056",
  },
  {
    label: "Office",
    value: "450 Park Avenue, Suite 2800, New York, NY 10022",
    href: "#",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1600&q=80"
            alt="Premium office building"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <SectionReveal>
            <p className="text-xs font-body font-semibold tracking-widest uppercase text-background-secondary/60 mb-4">
              Get in Touch
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-background-secondary max-w-3xl leading-tight drop-shadow-lg">
              Start a
              <br />
              Conversation
            </h1>
            <p className="mt-6 text-base md:text-lg text-background-secondary/80 max-w-2xl leading-relaxed">
              Whether you have a specific property in mind or are exploring your
              options, we are here to help. Reach out and let us understand how
              we can serve you.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            <div className="lg:col-span-3">
              <SectionReveal>
                <div className="bg-background-secondary border border-border rounded-2xl p-10 md:p-14">
                  <LeadCaptureForm leadType="general" />
                </div>
              </SectionReveal>
            </div>

            <div className="lg:col-span-2">
              <SectionReveal delay={0.2}>
                <div className="bg-background-secondary border border-border rounded-2xl p-10 md:p-12">
                  <p className="text-xs font-body font-semibold tracking-widest uppercase text-muted mb-6">
                    Contact Information
                  </p>
                  <div className="space-y-8">
                    {contactInfo.map((info) => (
                      <div key={info.label}>
                        <p className="text-xs font-body font-semibold tracking-widest uppercase text-muted mb-2">
                          {info.label}
                        </p>
                        <a
                          href={info.href}
                          className="text-base text-foreground hover:text-body transition-colors duration-300"
                        >
                          {info.value}
                        </a>
                      </div>
                    ))}

                    <div className="pt-6 border-t border-border">
                      <p className="text-xs font-body font-semibold tracking-widest uppercase text-muted mb-2">
                        Business Hours
                      </p>
                      <p className="text-base text-foreground">
                        Monday — Friday: 9:00 AM — 6:00 PM
                      </p>
                      <p className="text-sm text-muted mt-1">
                        Weekend consultations by appointment
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                    alt="Modern office interior"
                    fill
                    className="object-cover"
                  />
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
