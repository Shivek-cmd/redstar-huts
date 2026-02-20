"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { propertiesData } from "@/data/properties";
import type { PropertyDetail } from "@/data/properties";
import { blogPosts } from "@/data/blogs";

const mediaTabs = ["Photos", "Video Tour", "Floor Plan", "Location"] as const;
type MediaTab = (typeof mediaTabs)[number];

function getRelatedProperties(currentSlug: string, currentLocation: string, currentType: string) {
  const entries = Object.entries(propertiesData).filter(([s]) => s !== currentSlug);
  const sameLocation = entries.filter(([, p]) => p.location === currentLocation);
  const sameType = entries.filter(([, p]) => p.type === currentType && p.location !== currentLocation);
  const others = entries.filter(([, p]) => p.location !== currentLocation && p.type !== currentType);
  const combined = [...sameLocation, ...sameType, ...others];
  const seen = new Set<string>();
  const unique: [string, PropertyDetail][] = [];
  for (const item of combined) {
    if (!seen.has(item[0])) {
      seen.add(item[0]);
      unique.push(item);
    }
  }
  return unique.slice(0, 3);
}

export default function PropertyDetailClient({ slug }: { slug: string }) {
  const property = propertiesData[slug];
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<MediaTab>("Photos");
  const [selectedImage, setSelectedImage] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const relatedProperties = property ? getRelatedProperties(slug, property.location, property.type) : [];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const goNext = useCallback(() => {
    if (property) setLightboxIndex((prev) => (prev + 1) % property.images.length);
  }, [property]);

  const goPrev = useCallback(() => {
    if (property) setLightboxIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
  }, [property]);

  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [lightboxOpen, closeLightbox, goNext, goPrev]);

  useEffect(() => {
    setActiveTab("Photos");
    setSelectedImage(0);
    setIsVideoPlaying(false);
    setOpenFaq(null);
  }, [slug]);

  if (!property) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="font-heading text-4xl text-foreground">Property Not Found</h1>
          <Link href="/properties" className="mt-6 inline-block text-sm font-body tracking-wide px-8 py-3.5 rounded-full border border-foreground text-foreground hover:bg-foreground hover:text-background-secondary transition-colors duration-300">
            Back to Properties
          </Link>
        </div>
      </section>
    );
  }

  const availableTabs = mediaTabs.filter((tab) => {
    if (tab === "Video Tour") return !!property.video;
    return true;
  });

  return (
    <>
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={property.images[0].src} alt={property.images[0].alt} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <SectionReveal>
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block text-xs font-body tracking-widest uppercase bg-background-secondary/15 px-3 py-1.5 text-background-secondary">
                {property.configuration}
              </span>
              <span className="inline-block text-[10px] font-body tracking-wider bg-background-secondary/10 px-2.5 py-1 text-background-secondary/70">
                {property.code}
              </span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-background-secondary max-w-4xl leading-tight drop-shadow-lg">
              {property.title}
            </h1>
            <p className="mt-4 text-base text-background-secondary/70">{property.location}</p>
            <div className="mt-8">
              <button
                onClick={() => document.getElementById('property-inquiry')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-block text-sm font-body tracking-wide px-8 py-3.5 rounded-full bg-background-secondary text-foreground hover:bg-background transition-colors duration-300 cursor-pointer"
              >
                Schedule Site Visit
              </button>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 md:py-20">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {property.highlights.map((h, i) => (
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

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-1 border-b border-border mb-10">
            {availableTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-sm font-body tracking-widest uppercase px-6 py-4 whitespace-nowrap transition-colors duration-300 border-b-2 -mb-px cursor-pointer ${
                  activeTab === tab
                    ? "border-foreground text-foreground"
                    : "border-transparent text-muted hover:text-foreground"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {activeTab === "Photos" && (
            <div>
              <div className="relative aspect-[16/9] md:aspect-[2/1] overflow-hidden bg-background-depth mb-4 cursor-pointer group" onClick={() => openLightbox(selectedImage)}>
                <Image
                  src={property.images[selectedImage].src}
                  alt={property.images[selectedImage].alt}
                  fill
                  className="object-contain transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300 flex items-center justify-center">
                  <svg className="w-12 h-12 text-white opacity-0 group-hover:opacity-80 transition-opacity duration-300 drop-shadow-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                  </svg>
                </div>
              </div>
              <div className="grid grid-cols-5 gap-3">
                {property.images.map((img, i) => (
                  <button
                    key={img.src}
                    onClick={() => setSelectedImage(i)}
                    className={`relative aspect-[4/3] overflow-hidden transition-all duration-300 ${
                      selectedImage === i ? "ring-2 ring-foreground ring-offset-2" : "opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image src={img.src} alt={img.alt} fill className="object-cover" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {activeTab === "Video Tour" && property.video && (
            <div className="relative aspect-video overflow-hidden bg-foreground/5 cursor-pointer group" onClick={() => {
              setIsVideoPlaying(!isVideoPlaying);
              if (videoRef.current) {
                if (isVideoPlaying) videoRef.current.pause();
                else videoRef.current.play();
              }
            }}>
              <video
                ref={videoRef}
                src={property.video}
                className="w-full h-full object-contain"
                loop
                muted
                playsInline
              />
              {!isVideoPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-foreground/20 group-hover:bg-foreground/30 transition-colors duration-300">
                  <div className="w-20 h-20 rounded-full bg-background-secondary/90 flex items-center justify-center shadow-lg">
                    <svg className="w-8 h-8 text-foreground ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === "Floor Plan" && (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <svg className="w-16 h-16 text-muted/40 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
              </svg>
              <p className="text-sm font-body tracking-widest uppercase text-muted mb-2">Floor Plan</p>
              <p className="text-base text-body max-w-md">Floor plan available on request. Contact us to receive detailed architectural drawings and layout specifications.</p>
              <Link href="/contact" className="mt-6 inline-block text-sm font-body tracking-wide px-8 py-3 rounded-full border border-foreground text-foreground hover:bg-foreground hover:text-background-secondary transition-colors duration-300">
                Request Floor Plan
              </Link>
            </div>
          )}

          {activeTab === "Location" && (
            <div>
              {property.mapEmbed ? (
                <div className="aspect-video overflow-hidden" dangerouslySetInnerHTML={{ __html: property.mapEmbed }} />
              ) : (
                <div className="aspect-video bg-background-depth flex flex-col items-center justify-center text-center">
                  <svg className="w-16 h-16 text-muted/40 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <p className="font-heading text-xl text-foreground mb-2">{property.location}</p>
                  <p className="text-sm text-body max-w-md">Precise location shared upon scheduling a site visit.</p>
                  <Link href="/contact" className="mt-6 inline-block text-sm font-body tracking-wide px-8 py-3 rounded-full border border-foreground text-foreground hover:bg-foreground hover:text-background-secondary transition-colors duration-300">
                    Get Directions
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      <section className="py-24 md:py-32 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <SectionReveal>
              <p className="text-xs font-body font-semibold tracking-widest uppercase text-muted mb-4">About This Property</p>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground">Property Overview</h2>
              <div className="mt-8 space-y-6">
                {property.description.map((para, i) => (
                  <p key={i} className="text-base text-body leading-relaxed">{para}</p>
                ))}
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <p className="text-xs font-body font-semibold tracking-widest uppercase text-muted mb-4">Features & Amenities</p>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground">Key Highlights</h2>
              <ul className="mt-8 space-y-4">
                {property.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-base text-body">
                    <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </SectionReveal>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-background-depth">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionReveal>
            <p className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-muted mb-4 text-center">Connectivity & Convenience</p>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground text-center">Nearby Landmarks</h2>
            <p className="mt-4 text-sm text-body text-center max-w-2xl mx-auto">Everything you need is within easy reach. Here is how far key destinations are from this property.</p>
          </SectionReveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8">
            {property.nearby.map((cat, catIdx) => (
              <SectionReveal key={cat.category} delay={catIdx * 0.08}>
                <div className="h-full">
                  <h3 className="text-[11px] font-body font-semibold tracking-[0.2em] uppercase text-foreground mb-6 pb-3 border-b border-border">{cat.category}</h3>
                  <div className="space-y-0">
                    {cat.places.map((p, pIdx) => (
                      <div
                        key={p.name}
                        className={`flex items-center justify-between py-3 ${pIdx < cat.places.length - 1 ? "border-b border-border/50" : ""}`}
                      >
                        <span className="text-sm font-body text-body pr-4">{p.name}</span>
                        <span className="text-xs font-body font-medium text-foreground whitespace-nowrap tabular-nums">{p.distance}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {property.faqs && property.faqs.length > 0 && (
        <section className="py-24 md:py-32 bg-background">
          <div className="max-w-4xl mx-auto px-6 lg:px-10">
            <SectionReveal>
              <p className="text-xs font-body font-semibold tracking-widest uppercase text-muted mb-4 text-center">Common Questions</p>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground text-center mb-12">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {property.faqs.map((faq, i) => (
                  <div key={i} className="border border-border bg-background-secondary">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
                    >
                      <span className="font-body text-base text-foreground pr-4">{faq.question}</span>
                      <svg
                        className={`w-5 h-5 text-muted shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${openFaq === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                    >
                      <p className="px-6 pb-6 text-sm text-body leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>
        </section>
      )}

      {relatedProperties.length > 0 && (
        <section className="py-24 md:py-32 bg-background-secondary">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <SectionReveal>
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
                <div>
                  <p className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-muted mb-4">Explore More</p>
                  <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground">Related Properties</h2>
                </div>
                <Link href="/properties" className="mt-6 md:mt-0 text-sm font-body tracking-wide text-muted hover:text-foreground transition-colors duration-300">
                  View All Properties &rarr;
                </Link>
              </div>
            </SectionReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProperties.map(([relSlug, relProperty], i) => (
                <SectionReveal key={relSlug} delay={i * 0.12}>
                  <Link href={`/properties/${relSlug}`} className="group block">
                    <div className="relative aspect-[4/5] overflow-hidden bg-background-depth">
                      <Image src={relProperty.images[0].src} alt={relProperty.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute top-4 left-4">
                        <span className="text-xs font-body tracking-widest uppercase bg-background-secondary/90 px-3 py-1.5 text-foreground">{relProperty.type}</span>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <span className="text-sm font-body text-background-secondary">View Property &rarr;</span>
                      </div>
                    </div>
                    <div className="mt-5">
                      <p className="text-xs font-body tracking-widest uppercase text-muted">{relProperty.location}</p>
                      <h3 className="mt-2 font-heading text-xl text-foreground group-hover:text-body transition-colors duration-300">{relProperty.title}</h3>
                      <div className="mt-3 flex items-center gap-4 text-xs text-muted">
                        <span>{relProperty.beds} Beds</span>
                        <span className="w-px h-3 bg-border" />
                        <span>{relProperty.baths} Baths</span>
                        <span className="w-px h-3 bg-border" />
                        <span>{relProperty.sqft} Sq Ft</span>
                      </div>
                      <p className="mt-3 font-heading text-lg text-foreground">{relProperty.price}</p>
                    </div>
                  </Link>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section id="property-inquiry" className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image src={property.images[0].src} alt="Contact background" fill className="object-cover" />
          <div className="absolute inset-0 bg-foreground/80" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <SectionReveal>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-background-secondary">Interested in This Property?</h2>
              <p className="mt-6 text-base text-background-secondary/60 leading-relaxed">
                Schedule a private viewing or request additional details. Our team is ready to assist you with your next acquisition.
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
                <LeadCaptureForm leadType="property-inquiry" propertyName={property.title} dark />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
              <div>
                <p className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-muted mb-4">Insights & Advice</p>
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground">Related Articles</h2>
              </div>
              <Link href="/blog" className="mt-6 md:mt-0 text-sm font-body tracking-wide text-muted hover:text-foreground transition-colors duration-300">
                View All Articles &rarr;
              </Link>
            </div>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((post, i) => (
              <SectionReveal key={post.slug} delay={i * 0.12}>
                <Link href={`/blog/${post.slug}`} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden bg-background-depth">
                    <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-4 left-4">
                      <span className="text-xs font-body tracking-widest uppercase bg-background-secondary/90 px-3 py-1.5 text-foreground">{post.category}</span>
                    </div>
                  </div>
                  <div className="mt-5">
                    <div className="flex items-center gap-3 text-xs text-muted mb-2">
                      <span>{post.date}</span>
                      <span className="w-px h-3 bg-border" />
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="font-heading text-lg text-foreground group-hover:text-body transition-colors duration-300 line-clamp-2">{post.title}</h3>
                    <p className="mt-2 text-sm text-body leading-relaxed line-clamp-2">{post.excerpt}</p>
                  </div>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center" onClick={closeLightbox}>
          <button onClick={closeLightbox} className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <button onClick={(e) => { e.stopPropagation(); goPrev(); }} className="absolute left-4 md:left-8 text-white/70 hover:text-white transition-colors z-10">
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button onClick={(e) => { e.stopPropagation(); goNext(); }} className="absolute right-4 md:right-8 text-white/70 hover:text-white transition-colors z-10">
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
          <div className="relative w-[90vw] h-[80vh] max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={property.images[lightboxIndex].src}
              alt={property.images[lightboxIndex].alt}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
            {property.images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setLightboxIndex(i); }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${i === lightboxIndex ? "bg-white w-6" : "bg-white/40 hover:bg-white/60"}`}
              />
            ))}
          </div>
          <p className="absolute bottom-14 left-1/2 -translate-x-1/2 text-xs text-white/50 tracking-widest">
            {lightboxIndex + 1} / {property.images.length}
          </p>
        </div>
      )}
    </>
  );
}
