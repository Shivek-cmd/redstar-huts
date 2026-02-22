"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";
import LeadCaptureForm from "@/components/LeadCaptureForm";

const amenities = [
  { icon: "M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21", label: "Grand Clubhouse" },
  { icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z", label: "Modern Gym" },
  { icon: "M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z", label: "Solar Park" },
  { icon: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z", label: "Kids Play Zone" },
  { icon: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z", label: "Yoga & Wellness Studio" },
  { icon: "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z", label: "Co-Working Lounge" },
  { icon: "M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016A3.001 3.001 0 0021 9.349m-18 0a2.999 2.999 0 012.25-1.098h13.5A2.999 2.999 0 0121 9.349m-18 0V3h18v6.35", label: "Commercial Complex" },
  { icon: "M11.42 15.17l-5.384-3.065A2.002 2.002 0 004 14.077V17.9c0 1.545 1.622 2.548 2.964 1.832l5.384-3.065a2 2 0 000-3.698zM14.58 8.83l5.384-3.065A2.002 2.002 0 0022 7.737v3.823a2 2 0 01-2.036 1.972l-5.384-3.065a2 2 0 010-3.698z", label: "In-House STP" },
  { icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z", label: "24x7 Power Supply" },
  { icon: "M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z", label: "60 ft & 40 ft Roads" },
  { icon: "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418", label: "Underground Utilities" },
  { icon: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25", label: "Plot Sizes from 310 Sq Yd" },
];

const connectivity = [
  { name: "Ahmedabad-Dholera Expressway", detail: "Direct Access" },
  { name: "NHAI Adhelai Diamond Circle", detail: "Nearby" },
  { name: "Dholera International Airport", detail: "Under Development, 10 Kms" },
  { name: "TATA Semiconductor Plant", detail: "Direct Connectivity" },
  { name: "Delhi-Mumbai Industrial Corridor", detail: "On Corridor" },
  { name: "Sea Port & Proposed Sea Links", detail: "30 Kms" },
];

const advantages = [
  { title: "International Airport", desc: "Dholera International Airport under development will connect to domestic and global destinations, driving commercial and residential demand." },
  { title: "DMIC Alignment", desc: "Positioned on the Delhi-Mumbai Industrial Corridor, attracting manufacturing, logistics, and technology investments at scale." },
  { title: "Smart Infrastructure", desc: "920 sq km masterplanned with underground utilities, smart grid, solar energy, automated waste management, and fibre optic connectivity." },
  { title: "High Appreciation Potential", desc: "Government-backed greenfield city with early-stage pricing. Comparable smart city corridors in India have shown 3-5x appreciation over a decade." },
];

const images = [
  { src: "/properties/RSH-DHO-001/expressway-aerial.jpg", alt: "Aerial view of Ahmedabad-Dholera Expressway" },
  { src: "/properties/RSH-DHO-001/satellite-view.jpg", alt: "Satellite view of Serenity Estate in Dholera" },
  { src: "/properties/RSH-DHO-001/layout-plan.jpg", alt: "Township layout plan with amenities" },
  { src: "/properties/RSH-DHO-001/dholera-sir-map.jpg", alt: "Dholera SIR master plan" },
];

const faqs = [
  { q: "What is Dholera Smart City?", a: "Dholera SIR (Special Investment Region) is India's first greenfield smart city, spread across 920 sq km in Gujarat. It is being developed under the Delhi-Mumbai Industrial Corridor with world-class infrastructure including an international airport, expressway, and smart grid systems." },
  { q: "What plot sizes are available?", a: "Residential plots start from 310 sq yards within our 17 + 46 acre township. The township has 60 ft main roads, 40 ft internal roads, underground utilities, and full amenities. Completion is targeted by 2028." },
  { q: "Is Dholera a good investment in 2026?", a: "Three factors make 2026 compelling: the Ahmedabad-Dholera Expressway is nearing completion, the TATA Semiconductor Plant is attracting employment, and early-stage pricing is still available before major infrastructure goes live." },
  { q: "What amenities are included in the township?", a: "Grand clubhouse, gym, kids play zone, yoga studio, co-working lounge, commercial complex, solar park, in-house STP, underground utilities for power, water, and data, and 24x7 power supply." },
  { q: "How is Dholera connected to major cities?", a: "Direct access via Ahmedabad-Dholera Expressway, proximity to NHAI Adhelai Diamond Circle, upcoming Dholera International Airport (10 kms), and location on the Delhi-Mumbai Industrial Corridor. Ahmedabad is 80 kms away." },
  { q: "How can I book a plot through RedStar Huts?", a: "Contact us through the form on this page or call +91 889 434 3056. We will share available inventory, pricing, and arrange a site visit at your convenience." },
];

export default function DholeraLandingClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <>
      <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/properties/RSH-DHO-001/expressway-aerial.jpg" alt="Dholera Smart City residential plots for sale" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/65 to-foreground/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <SectionReveal>
            <p className="text-xs font-body font-semibold tracking-widest uppercase text-background-secondary/60 mb-4">
              India&apos;s First Greenfield Smart City
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-background-secondary max-w-4xl leading-tight drop-shadow-lg">
              Residential Plots in
              <br />
              Dholera Smart City
            </h1>
            <p className="mt-6 text-base md:text-lg text-background-secondary/80 max-w-2xl leading-relaxed">
              Starting from 310 sq yards in a 63-acre township with expressway access, airport proximity, and DMIC alignment. Completion by 2028.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => document.getElementById("dholera-inquiry")?.scrollIntoView({ behavior: "smooth" })}
                className="text-sm font-body tracking-wide px-8 py-3.5 rounded-full bg-background-secondary text-foreground hover:bg-background transition-colors duration-300 cursor-pointer"
              >
                Get Plot Details
              </button>
              <Link
                href="/properties/residential-plots-for-sale-in-dholera-smart-city-gujarat"
                className="text-sm font-body tracking-wide px-8 py-3.5 rounded-full border border-background-secondary/40 text-background-secondary hover:bg-background-secondary/10 transition-colors duration-300"
              >
                View Full Listing
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 md:py-20">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {[
              { label: "Smart City Area", value: "920 Sq Km" },
              { label: "Developed Area", value: "422 Sq Km" },
              { label: "RedStar Working Area", value: "17 + 46 Acres" },
              { label: "Plot Size", value: "From 310 Sq Yards" },
              { label: "Completion", value: "2028" },
              { label: "Road Width", value: "60 ft Main, 40 ft Internal" },
            ].map((h, i) => (
              <SectionReveal key={h.label} delay={i * 0.06}>
                <div className="bg-background px-6 py-8 md:px-10 md:py-10 flex flex-col items-start gap-3">
                  <span className="text-[11px] font-body font-medium tracking-[0.2em] uppercase text-muted">{h.label}</span>
                  <span className="font-heading text-xl md:text-2xl text-foreground leading-snug">{h.value}</span>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <SectionReveal>
              <p className="text-xs font-body font-semibold tracking-widest uppercase text-muted mb-4">Project Overview</p>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground">Why Dholera Smart City</h2>
              <div className="mt-8 space-y-6">
                <p className="text-base text-body leading-relaxed">
                  Dholera SIR is India&apos;s most ambitious urban development  a 920 sq km greenfield smart city built from the ground up with smart infrastructure, trunk utilities, and industrial corridors. It sits on the Delhi-Mumbai Industrial Corridor and is backed by the Central and Gujarat State Governments.
                </p>
                <p className="text-base text-body leading-relaxed">
                  RedStar Huts is working across 17 acres and 46 acres within Dholera, offering residential plots starting from 310 sq yards. The township is planned with wide roads, underground utilities, solar energy, and a full suite of lifestyle amenities. Completion is targeted by 2028.
                </p>
                <p className="text-base text-body leading-relaxed">
                  For investors seeking early-stage pricing in a government-backed smart city with airport, expressway, and semiconductor plant connectivity  Dholera is the strongest bet in India right now.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src="/properties/RSH-DHO-001/satellite-view.jpg" alt="Satellite view of Dholera township showing 17 and 46 acre sites" fill className="object-cover" />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionReveal>
            <p className="text-xs font-body font-semibold tracking-widest uppercase text-muted mb-4 text-center">Township Features</p>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground text-center">Amenities & Infrastructure</h2>
            <p className="mt-4 text-sm text-body text-center max-w-2xl mx-auto">Every detail planned for comfortable living and long-term value.</p>
          </SectionReveal>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {amenities.map((a, i) => (
              <SectionReveal key={a.label} delay={i * 0.04}>
                <div className="bg-background-secondary p-6 flex flex-col items-center text-center gap-4 hover:shadow-md transition-shadow duration-300">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <svg className="w-7 h-7 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={a.icon} />
                    </svg>
                  </div>
                  <span className="text-sm font-body font-medium text-foreground">{a.label}</span>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-background-depth">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionReveal>
            <p className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-muted mb-4 text-center">Strategic Location</p>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground text-center">Connectivity & Access</h2>
          </SectionReveal>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {connectivity.map((c, i) => (
              <SectionReveal key={c.name} delay={i * 0.06}>
                <div className="bg-background p-8 border border-border">
                  <h3 className="font-heading text-lg text-foreground">{c.name}</h3>
                  <p className="mt-2 text-sm text-muted">{c.detail}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionReveal>
            <p className="text-xs font-body font-semibold tracking-widest uppercase text-muted mb-4 text-center">Investment Case</p>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground text-center">Why Invest in Dholera Now</h2>
          </SectionReveal>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {advantages.map((adv, i) => (
              <SectionReveal key={adv.title} delay={i * 0.08}>
                <div className="flex gap-5">
                  <div className="w-10 h-10 rounded-full bg-background-depth flex items-center justify-center shrink-0 mt-1">
                    <span className="font-heading text-sm text-foreground">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl text-foreground">{adv.title}</h3>
                    <p className="mt-2 text-sm text-body leading-relaxed">{adv.desc}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionReveal>
            <p className="text-xs font-body font-semibold tracking-widest uppercase text-muted mb-4 text-center">Visual Tour</p>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground text-center mb-12">Gallery</h2>
          </SectionReveal>
          <div className="relative aspect-[16/9] md:aspect-[2/1] overflow-hidden bg-background-depth mb-4">
            <Image
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              fill
              className="object-contain transition-opacity duration-500"
            />
          </div>
          <div className="grid grid-cols-4 gap-3">
            {images.map((img, i) => (
              <button
                key={img.src}
                onClick={() => setSelectedImage(i)}
                className={`relative aspect-[4/3] overflow-hidden transition-all duration-300 cursor-pointer ${
                  selectedImage === i ? "ring-2 ring-foreground ring-offset-2" : "opacity-60 hover:opacity-100"
                }`}
              >
                <Image src={img.src} alt={img.alt} fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="dholera-inquiry" className="py-24 md:py-32 bg-foreground">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <SectionReveal>
              <p className="text-xs font-body font-semibold tracking-widest uppercase text-background-secondary/50 mb-4">Get Started</p>
              <h2 className="font-heading text-3xl md:text-4xl text-background-secondary">Book Your Plot in Dholera</h2>
              <p className="mt-6 text-base text-background-secondary/70 leading-relaxed">
                Share your details and our advisory team will reach out with available inventory, pricing, and site visit options. No obligation.
              </p>
              <div className="mt-10 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-background-secondary/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-background-secondary/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-background-secondary/50 tracking-widest uppercase">Call Us</p>
                    <p className="text-base text-background-secondary">+91 889 434 3056</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-background-secondary/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-background-secondary/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-background-secondary/50 tracking-widest uppercase">Email</p>
                    <p className="text-base text-background-secondary">contact@redstarhuts.com</p>
                  </div>
                </div>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <div className="bg-background-secondary/10 backdrop-blur-sm p-8 md:p-10 border border-background-secondary/10 rounded-lg">
                <LeadCaptureForm leadType="property-inquiry" propertyName="Dholera Smart City Plots (RSH-DHO-001)" dark />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <SectionReveal>
            <p className="text-xs font-body font-semibold tracking-widest uppercase text-muted mb-4 text-center">Common Questions</p>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-border bg-background-secondary">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer"
                  >
                    <span className="font-heading text-base md:text-lg text-foreground pr-4">{faq.q}</span>
                    <svg
                      className={`w-5 h-5 text-muted shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-6">
                      <p className="text-sm text-body leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="py-12 bg-background-depth border-t border-border">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <SectionReveal>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm text-body">
              <p>Read more: <Link href="/blog/dholera-smart-city-plots-investment-opportunity-2026" className="text-foreground underline underline-offset-4 hover:text-muted transition-colors">Dholera Investment Guide 2026</Link></p>
              <p>Browse <Link href="/properties" className="text-foreground underline underline-offset-4 hover:text-muted transition-colors">all properties</Link></p>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
