"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";
import Breadcrumbs from "@/components/Breadcrumbs";
import LeadCaptureForm from "@/components/LeadCaptureForm";

const contactInfo = [
  {
    icon: "email",
    label: "Email",
    value: "redstarhuts9@gmail.com",
    href: "mailto:redstarhuts9@gmail.com",
  },
  {
    icon: "phone",
    label: "Phone",
    value: "+91 889 434 3056",
    href: "tel:+918894343056",
  },
  {
    icon: "office",
    label: "Office",
    value: "SCO 08, Jublee Junction, Sector 66, S.A.S Nagar Mohali, Punjab 160062",
    href: "https://maps.google.com/?q=SCO+08+Jublee+Junction+Sector+66+SAS+Nagar+Mohali+Punjab+160062",
  },
];

const trustSignals = [
  { number: "50+", label: "Happy Families Served" },
  { number: "7+", label: "Premium Properties Listed" },
  { number: "3", label: "Cities Covered (Mohali, Chandigarh, Zirakpur)" },
  { number: "24hrs", label: "Average Response Time" },
];

const whoIsThisFor = [
  {
    title: "First-Time Homebuyers",
    desc: "Navigating the luxury market for the first time? We simplify the process with honest guidance, curated options, and end-to-end support.",
  },
  {
    title: "NRI Investors",
    desc: "Investing in Indian real estate from abroad? We handle site visits, documentation, legal verification, and provide regular updates remotely.",
  },
  {
    title: "Growing Families",
    desc: "Looking to upgrade to a spacious 3+1 or 4+1 BHK? We match your lifestyle needs with the right property in the right location.",
  },
  {
    title: "Smart Investors",
    desc: "Want high-appreciation properties in emerging corridors? Our market analysis and advisory helps you make data-driven investment decisions.",
  },
];

const faqs = [
  {
    q: "Is the consultation free?",
    a: "Yes, your first consultation is completely free. We believe in building relationships before transactions. Contact us to schedule a no-obligation discussion about your property goals.",
  },
  {
    q: "What areas do you cover?",
    a: "We specialize in premium properties across Mohali (Sectors 66-80), Zirakpur (PR7 Road, Patiala Highway), Chandigarh, and Dholera Smart City. Our team has deep knowledge of micro-markets within these regions.",
  },
  {
    q: "Can you help NRI buyers with remote purchases?",
    a: "Absolutely. We have a dedicated NRI advisory service that covers virtual site tours, legal documentation, power of attorney coordination, and post-purchase property management. Many of our clients complete their entire purchase remotely.",
  },
  {
    q: "How quickly will I get a response?",
    a: "We respond to all inquiries within 24 hours. For urgent matters, call us directly at +91 889 434 3056 during business hours (9 AM - 6 PM, Monday to Saturday).",
  },
  {
    q: "What types of properties do you deal in?",
    a: "We focus on premium residential properties including 3 BHK, 3+1 BHK, and 4+1 BHK luxury flats, IGBC-certified green buildings, smart home apartments, and residential plots in emerging smart cities.",
  },
  {
    q: "Do you charge any brokerage fees?",
    a: "Our fee structure is transparent and competitive. We will discuss all terms upfront during your initial consultation so there are no surprises. Contact us to learn more about our pricing.",
  },
];

function EmailIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  );
}

function OfficeIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  );
}

const iconMap: Record<string, () => React.ReactElement> = {
  email: EmailIcon,
  phone: PhoneIcon,
  office: OfficeIcon,
};

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1600&q=80"
            alt="RedStar Huts office Mohali"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/65 to-foreground/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <SectionReveal>
            <div className="mb-6">
              <Breadcrumbs items={[{ label: "Contact" }]} />
            </div>
            <p className="text-xs font-body font-semibold tracking-widest uppercase text-background-secondary/60 mb-4">
              Get in Touch
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-background-secondary max-w-3xl leading-tight drop-shadow-lg">
              Your Property Journey
              <br />
              Starts Here
            </h1>
            <p className="mt-6 text-base md:text-lg text-background-secondary/80 max-w-2xl leading-relaxed">
              Whether you are buying your first luxury home, exploring investment
              opportunities, or need expert advisory on the Tri-City market — our
              team is ready to help you make confident, informed decisions.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+918894343056"
                className="inline-flex items-center justify-center gap-2 text-sm font-body tracking-wide px-8 py-3.5 rounded-full bg-background-secondary text-foreground hover:bg-background-secondary/90 transition-colors duration-300"
              >
                <PhoneIcon />
                Call Now: +91 889 434 3056
              </a>
              <a
                href="#inquiry-form"
                className="inline-flex items-center justify-center text-sm font-body tracking-wide px-8 py-3.5 rounded-full border border-background-secondary/40 text-background-secondary hover:border-background-secondary hover:bg-background-secondary/10 transition-all duration-300"
              >
                Send an Inquiry
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="py-16 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionReveal>
            <div className="text-center mb-12">
              <p className="text-xs font-body font-semibold tracking-widest uppercase text-muted mb-3">
                Why Reach Out
              </p>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground">
                Expert Guidance You Can Trust
              </h2>
              <p className="mt-4 text-base text-body max-w-2xl mx-auto leading-relaxed">
                RedStar Huts is not just another property listing platform. We are a
                dedicated real estate advisory firm based in Mohali, specializing in
                premium properties across Punjab and emerging smart cities.
              </p>
            </div>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SectionReveal delay={0.1}>
              <div className="p-8 border border-border bg-background-secondary hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 rounded-full bg-background-depth flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl text-foreground mb-3">Verified Properties Only</h3>
                <p className="text-sm text-body leading-relaxed">
                  Every property we list is personally verified by our team. We check
                  legal clearances, construction quality, builder credibility, and RERA
                  compliance before recommending anything to you.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <div className="p-8 border border-border bg-background-secondary hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 rounded-full bg-background-depth flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl text-foreground mb-3">Transparent Advisory</h3>
                <p className="text-sm text-body leading-relaxed">
                  No hidden fees, no pressure tactics. We provide honest market analysis,
                  realistic pricing guidance, and strategic advice tailored to your
                  budget and goals.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.3}>
              <div className="p-8 border border-border bg-background-secondary hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 rounded-full bg-background-depth flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl text-foreground mb-3">End-to-End Support</h3>
                <p className="text-sm text-body leading-relaxed">
                  From shortlisting to site visits, negotiations, documentation, and
                  post-purchase support — we walk with you through every step of your
                  property journey.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>


      <section id="inquiry-form" className="py-24 md:py-32 bg-background scroll-mt-24">
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
                <div className="bg-background-secondary border border-border rounded-2xl p-8 md:p-10">
                  <p className="text-xs font-body font-semibold tracking-widest uppercase text-muted mb-6">
                    Contact Information
                  </p>
                  <div className="space-y-6">
                    {contactInfo.map((info) => {
                      const IconComponent = iconMap[info.icon];
                      return (
                        <div key={info.label} className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-full bg-background-depth flex items-center justify-center shrink-0 mt-0.5">
                            <div className="text-foreground">
                              <IconComponent />
                            </div>
                          </div>
                          <div>
                            <p className="text-xs font-body font-semibold tracking-widest uppercase text-muted mb-1">
                              {info.label}
                            </p>
                            <a
                              href={info.href}
                              target={info.icon === "office" ? "_blank" : undefined}
                              rel={info.icon === "office" ? "noopener noreferrer" : undefined}
                              className="text-sm text-foreground hover:text-body transition-colors duration-300 leading-relaxed"
                            >
                              {info.value}
                            </a>
                          </div>
                        </div>
                      );
                    })}

                    <div className="pt-6 border-t border-border">
                      <p className="text-xs font-body font-semibold tracking-widest uppercase text-muted mb-2">
                        Business Hours
                      </p>
                      <p className="text-sm text-foreground">
                        Monday — Saturday: 9:00 AM — 6:00 PM
                      </p>
                      <p className="text-xs text-muted mt-1">
                        Sunday consultations by appointment
                      </p>
                    </div>

                    <div className="pt-6 border-t border-border">
                      <p className="text-xs font-body font-semibold tracking-widest uppercase text-muted mb-3">
                        Follow Us
                      </p>
                      <div className="flex gap-3">
                        <a href="https://www.instagram.com/redstar__huts/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted hover:text-foreground hover:border-foreground transition-all duration-300" aria-label="Instagram">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                        </a>
                        <a href="https://youtube.com/@redstarhuts?si=hEDmuk9rk61lh4Su" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted hover:text-foreground hover:border-foreground transition-all duration-300" aria-label="YouTube">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a2.978 2.978 0 00-2.096-2.11C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.402.576a2.978 2.978 0 00-2.096 2.11A31.054 31.054 0 000 12a31.054 31.054 0 00.502 5.814 2.978 2.978 0 002.096 2.11C4.5 20.5 12 20.5 12 20.5s7.5 0 9.402-.576a2.978 2.978 0 002.096-2.11A31.054 31.054 0 0024 12a31.054 31.054 0 00-.502-5.814zM9.75 15.568V8.432L15.818 12 9.75 15.568z"/></svg>
                        </a>
                        <a href="https://www.facebook.com/people/Redstar-Huts/61588365781493/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted hover:text-foreground hover:border-foreground transition-all duration-300" aria-label="Facebook">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.0!2d76.7!3d30.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSCO+08+Jublee+Junction+Sector+66+Mohali!5e0!3m2!1sen!2sin!4v1709000000000"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="RedStar Huts Office - SCO 08 Jublee Junction Sector 66 Mohali"
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background-depth">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionReveal>
            <div className="text-center mb-14">
              <p className="text-xs font-body font-semibold tracking-widest uppercase text-muted mb-3">
                Who This Is For
              </p>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground">
                Is This Consultation Right for You?
              </h2>
            </div>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whoIsThisFor.map((item, i) => (
              <SectionReveal key={item.title} delay={i * 0.1}>
                <div className="bg-background-secondary border border-border p-8 hover:shadow-lg transition-shadow duration-300">
                  <h3 className="font-heading text-xl text-foreground mb-3">{item.title}</h3>
                  <p className="text-sm text-body leading-relaxed">{item.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
          <SectionReveal delay={0.4}>
            <div className="mt-12 text-center">
              <a
                href="#inquiry-form"
                className="inline-flex items-center justify-center text-sm font-body tracking-wide px-10 py-4 rounded-full bg-foreground text-background-secondary hover:bg-body transition-colors duration-300"
              >
                Book Your Free Consultation
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <SectionReveal>
            <div className="text-center mb-12">
              <p className="text-xs font-body font-semibold tracking-widest uppercase text-muted mb-3">
                FAQs
              </p>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground">
                Frequently Asked Questions
              </h2>
            </div>
          </SectionReveal>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <SectionReveal key={i} delay={i * 0.05}>
                <div className="border border-border bg-background-secondary">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="font-heading text-base md:text-lg text-foreground pr-4">
                      {faq.q}
                    </span>
                    <svg
                      className={`w-5 h-5 text-muted shrink-0 transition-transform duration-300 ${
                        openFaq === i ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-6">
                      <p className="text-sm text-body leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-body">
              <p>
                Explore our{" "}
                <Link href="/properties" className="text-foreground underline underline-offset-4 hover:text-muted transition-colors">
                  premium properties
                </Link>{" "}
                in Mohali, Zirakpur & Chandigarh
              </p>
              <p>
                Learn about our{" "}
                <Link href="/services" className="text-foreground underline underline-offset-4 hover:text-muted transition-colors">
                  advisory services
                </Link>{" "}
                and how we can help
              </p>
              <p>
                Read our{" "}
                <Link href="/blog" className="text-foreground underline underline-offset-4 hover:text-muted transition-colors">
                  market insights blog
                </Link>{" "}
                for expert analysis
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-foreground">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <SectionReveal>
            <h2 className="font-heading text-3xl md:text-4xl text-background-secondary">
              Ready to Take the First Step?
            </h2>
            <p className="mt-5 text-base text-background-secondary/70 leading-relaxed max-w-lg mx-auto">
              Your dream property is closer than you think. Schedule a free
              consultation with our team and let us help you find the perfect
              home or investment opportunity.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#inquiry-form"
                className="inline-block text-sm font-body tracking-wide px-10 py-4 rounded-full bg-background-secondary text-foreground hover:bg-background-secondary/90 transition-colors duration-300"
              >
                Schedule Free Consultation
              </a>
              <a
                href="tel:+918894343056"
                className="inline-block text-sm font-body tracking-wide px-8 py-3.5 rounded-full border border-background-secondary/30 text-background-secondary hover:border-background-secondary transition-colors duration-300"
              >
                Call +91 889 434 3056
              </a>
            </div>
            <p className="mt-6 text-xs text-background-secondary/40">
              SCO 08, Jublee Junction, Sector 66, S.A.S Nagar Mohali, Punjab 160062
            </p>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
