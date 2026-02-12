"use client";

import { useState } from "react";
import Image from "next/image";
import SectionReveal from "@/components/SectionReveal";

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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1600&q=80"
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
              Get in Touch
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-[#FBFAF8] max-w-3xl leading-tight drop-shadow-lg">
              Start a
              <br />
              Conversation
            </h1>
            <p className="mt-6 text-base md:text-lg text-[#FBFAF8]/80 max-w-2xl leading-relaxed">
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
                {submitted ? (
                  <div className="bg-background-secondary border border-border rounded-2xl p-16 text-center">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-background-depth flex items-center justify-center">
                      <svg className="w-8 h-8 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <h3 className="font-heading text-2xl text-foreground">
                      Thank You
                    </h3>
                    <p className="mt-4 text-base text-body leading-relaxed max-w-sm mx-auto">
                      Your inquiry has been received. A member of our team will
                      be in touch within 24 hours to discuss your needs.
                    </p>
                  </div>
                ) : (
                  <div className="bg-background-secondary border border-border rounded-2xl p-10 md:p-14">
                    <p className="text-xs font-body font-semibold tracking-widest uppercase text-muted mb-2">
                      Inquiry Form
                    </p>
                    <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-10">
                      Tell Us About Your Goals
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <label className="block text-xs font-body font-semibold tracking-widest uppercase text-muted mb-3">
                            Full Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-5 py-4 bg-background border border-border rounded-xl text-foreground text-sm focus:outline-none focus:border-foreground focus:ring-1 focus:ring-foreground/20 transition-all duration-300 placeholder:text-muted/50"
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-body font-semibold tracking-widest uppercase text-muted mb-3">
                            Email Address
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-5 py-4 bg-background border border-border rounded-xl text-foreground text-sm focus:outline-none focus:border-foreground focus:ring-1 focus:ring-foreground/20 transition-all duration-300 placeholder:text-muted/50"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <label className="block text-xs font-body font-semibold tracking-widest uppercase text-muted mb-3">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-5 py-4 bg-background border border-border rounded-xl text-foreground text-sm focus:outline-none focus:border-foreground focus:ring-1 focus:ring-foreground/20 transition-all duration-300 placeholder:text-muted/50"
                            placeholder="+1 (555) 000-0000"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-body font-semibold tracking-widest uppercase text-muted mb-3">
                            Area of Interest
                          </label>
                          <select
                            name="interest"
                            value={formData.interest}
                            onChange={handleChange}
                            className="w-full px-5 py-4 bg-background border border-border rounded-xl text-foreground text-sm focus:outline-none focus:border-foreground focus:ring-1 focus:ring-foreground/20 transition-all duration-300 appearance-none cursor-pointer"
                          >
                            <option value="">Select an option</option>
                            <option value="buying">Buying a Property</option>
                            <option value="selling">Selling a Property</option>
                            <option value="investing">
                              Investment Consulting
                            </option>
                            <option value="valuation">
                              Market Analysis &amp; Valuation
                            </option>
                            <option value="other">General Inquiry</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-body font-semibold tracking-widest uppercase text-muted mb-3">
                          Message
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          className="w-full px-5 py-4 bg-background border border-border rounded-xl text-foreground text-sm focus:outline-none focus:border-foreground focus:ring-1 focus:ring-foreground/20 transition-all duration-300 placeholder:text-muted/50 resize-none"
                          placeholder="Tell us about your goals and how we can assist you..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full md:w-auto text-sm font-body tracking-wide px-12 py-4 rounded-full bg-foreground text-background-secondary hover:bg-body transition-colors duration-300"
                      >
                        Send Inquiry
                      </button>
                    </form>
                  </div>
                )}
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
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
                    alt="Office building"
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
