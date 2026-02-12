"use client";

import { useState } from "react";
import Image from "next/image";
import SectionReveal from "@/components/SectionReveal";

const contactInfo = [
  {
    label: "Email",
    value: "info@redstarhuts.com",
    href: "mailto:info@redstarhuts.com",
  },
  {
    label: "Phone",
    value: "+1 (555) 824-7100",
    href: "tel:+15558247100",
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
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionReveal>
            <p className="text-xs font-body font-semibold tracking-widest uppercase text-muted mb-4">
              Get in Touch
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground max-w-3xl">
              Start a
              <br />
              Conversation
            </h1>
            <p className="mt-6 text-base md:text-lg text-body max-w-2xl leading-relaxed">
              Whether you have a specific property in mind or are exploring your
              options, we are here to help. Reach out and let us understand how
              we can serve you.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <SectionReveal>
                {submitted ? (
                  <div className="bg-background-secondary p-12 text-center">
                    <h3 className="font-heading text-2xl text-foreground">
                      Thank You
                    </h3>
                    <p className="mt-4 text-base text-body leading-relaxed">
                      Your inquiry has been received. A member of our team will
                      be in touch within 24 hours to discuss your needs.
                    </p>
                  </div>
                ) : (
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
                          className="w-full px-0 py-3 bg-transparent border-b border-border text-foreground text-sm focus:outline-none focus:border-foreground transition-colors duration-300 placeholder:text-muted/50"
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
                          className="w-full px-0 py-3 bg-transparent border-b border-border text-foreground text-sm focus:outline-none focus:border-foreground transition-colors duration-300 placeholder:text-muted/50"
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
                          className="w-full px-0 py-3 bg-transparent border-b border-border text-foreground text-sm focus:outline-none focus:border-foreground transition-colors duration-300 placeholder:text-muted/50"
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
                          className="w-full px-0 py-3 bg-transparent border-b border-border text-foreground text-sm focus:outline-none focus:border-foreground transition-colors duration-300 appearance-none cursor-pointer"
                        >
                          <option value="">Select an option</option>
                          <option value="buying">Buying a Property</option>
                          <option value="selling">Selling a Property</option>
                          <option value="investing">
                            Investment Consulting
                          </option>
                          <option value="valuation">
                            Market Analysis & Valuation
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
                        className="w-full px-0 py-3 bg-transparent border-b border-border text-foreground text-sm focus:outline-none focus:border-foreground transition-colors duration-300 placeholder:text-muted/50 resize-none"
                        placeholder="Tell us about your goals and how we can assist you..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="text-sm font-body tracking-wide px-10 py-4 bg-foreground text-background-secondary hover:bg-body transition-colors duration-300"
                    >
                      Send Inquiry
                    </button>
                  </form>
                )}
              </SectionReveal>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <SectionReveal delay={0.2}>
                <div className="space-y-10">
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

                  <div>
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

                <div className="mt-14 relative aspect-[4/3] overflow-hidden">
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
