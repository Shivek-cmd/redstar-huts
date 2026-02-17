"use client";

import { useState } from "react";

type LeadType =
  | "property-inquiry"
  | "service-inquiry"
  | "floor-plan-request"
  | "location-request"
  | "intro-call"
  | "analysis-report"
  | "general";

interface LeadCaptureFormProps {
  leadType: LeadType;
  propertyName?: string;
  serviceName?: string;
  compact?: boolean;
  dark?: boolean;
}

const leadConfig: Record<LeadType, { title: string; subtitle: string; buttonText: string; fields: string[] }> = {
  "property-inquiry": {
    title: "Interested in This Property?",
    subtitle: "Share your details and our team will reach out with more information.",
    buttonText: "Request Property Details",
    fields: ["name", "email", "phone", "message"],
  },
  "service-inquiry": {
    title: "Get Expert Advisory",
    subtitle: "Tell us about your goals and we will outline how we can help.",
    buttonText: "Request Consultation",
    fields: ["name", "email", "phone", "message"],
  },
  "floor-plan-request": {
    title: "Request Floor Plan",
    subtitle: "Get detailed architectural drawings and layout specifications.",
    buttonText: "Send Request",
    fields: ["name", "email", "phone"],
  },
  "location-request": {
    title: "Get Location Details",
    subtitle: "Receive precise location and directions for a site visit.",
    buttonText: "Get Directions",
    fields: ["name", "email", "phone"],
  },
  "intro-call": {
    title: "Schedule an Intro Call",
    subtitle: "A brief call to understand your requirements and how we can assist.",
    buttonText: "Schedule Call",
    fields: ["name", "email", "phone", "preferredTime"],
  },
  "analysis-report": {
    title: "Request Market Analysis",
    subtitle: "Get a detailed market analysis report for your area of interest.",
    buttonText: "Request Report",
    fields: ["name", "email", "phone", "message"],
  },
  general: {
    title: "Start a Conversation",
    subtitle: "Tell us how we can help you.",
    buttonText: "Send Inquiry",
    fields: ["name", "email", "phone", "interest", "message"],
  },
};

export default function LeadCaptureForm({ leadType, propertyName, serviceName, compact, dark }: LeadCaptureFormProps) {
  const config = leadConfig[leadType];
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Lead captured:", { leadType, propertyName, serviceName, ...formData });
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClass = dark
    ? "w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white text-sm focus:outline-none focus:border-white/50 transition-all duration-300 placeholder:text-white/40"
    : "w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground text-sm focus:outline-none focus:border-foreground/40 focus:ring-1 focus:ring-foreground/10 transition-all duration-300 placeholder:text-muted/50";

  const labelClass = dark
    ? "block text-xs font-body tracking-widest uppercase text-white/60 mb-2"
    : "block text-xs font-body tracking-widest uppercase text-muted mb-2";

  if (submitted) {
    return (
      <div className={`text-center ${compact ? "py-8" : "py-12"}`}>
        <div className={`w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center ${dark ? "bg-white/10" : "bg-background-depth"}`}>
          <svg className={`w-7 h-7 ${dark ? "text-white" : "text-foreground"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className={`font-heading text-xl ${dark ? "text-white" : "text-foreground"}`}>Thank You</h3>
        <p className={`mt-3 text-sm leading-relaxed max-w-sm mx-auto ${dark ? "text-white/60" : "text-body"}`}>
          Your request has been received. A member of our team will be in touch within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <div>
      {!compact && (
        <div className="mb-6">
          <h3 className={`font-heading text-xl md:text-2xl ${dark ? "text-white" : "text-foreground"}`}>{config.title}</h3>
          <p className={`mt-2 text-sm ${dark ? "text-white/60" : "text-body"}`}>{config.subtitle}</p>
        </div>
      )}
      <form onSubmit={handleSubmit} className={`space-y-4 ${compact ? "" : "space-y-5"}`}>
        {propertyName && <input type="hidden" name="property" value={propertyName} />}
        {serviceName && <input type="hidden" name="service" value={serviceName} />}

        <div className={config.fields.includes("phone") && config.fields.includes("email") ? "grid grid-cols-1 md:grid-cols-2 gap-4" : ""}>
          {config.fields.includes("name") && (
            <div>
              <label className={labelClass}>Full Name</label>
              <input type="text" name="name" value={formData.name || ""} onChange={handleChange} required placeholder="Your full name" className={inputClass} />
            </div>
          )}
          {config.fields.includes("email") && (
            <div>
              <label className={labelClass}>Email</label>
              <input type="email" name="email" value={formData.email || ""} onChange={handleChange} required placeholder="your@email.com" className={inputClass} />
            </div>
          )}
        </div>

        <div className={config.fields.includes("preferredTime") ? "grid grid-cols-1 md:grid-cols-2 gap-4" : ""}>
          {config.fields.includes("phone") && (
            <div>
              <label className={labelClass}>Phone</label>
              <input type="tel" name="phone" value={formData.phone || ""} onChange={handleChange} placeholder="+91 00000 00000" className={inputClass} />
            </div>
          )}
          {config.fields.includes("preferredTime") && (
            <div>
              <label className={labelClass}>Preferred Time</label>
              <select name="preferredTime" value={formData.preferredTime || ""} onChange={handleChange} className={inputClass}>
                <option value="">Select a time</option>
                <option value="morning">Morning (9 AM - 12 PM)</option>
                <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                <option value="evening">Evening (4 PM - 7 PM)</option>
              </select>
            </div>
          )}
          {config.fields.includes("interest") && (
            <div>
              <label className={labelClass}>Area of Interest</label>
              <select name="interest" value={formData.interest || ""} onChange={handleChange} className={inputClass}>
                <option value="">Select an option</option>
                <option value="buying">Buying a Property</option>
                <option value="selling">Selling a Property</option>
                <option value="investing">Investment Consulting</option>
                <option value="valuation">Market Analysis &amp; Valuation</option>
                <option value="other">General Inquiry</option>
              </select>
            </div>
          )}
        </div>

        {config.fields.includes("message") && (
          <div>
            <label className={labelClass}>Message</label>
            <textarea name="message" value={formData.message || ""} onChange={handleChange} rows={compact ? 3 : 4} placeholder="Tell us about your requirements..." className={`${inputClass} resize-none`} />
          </div>
        )}

        <button
          type="submit"
          className={`w-full text-sm font-body tracking-wide px-8 py-3.5 rounded-full transition-colors duration-300 ${
            dark
              ? "bg-white text-foreground hover:bg-white/90"
              : "bg-foreground text-background-secondary hover:bg-body"
          }`}
        >
          {config.buttonText}
        </button>
      </form>
    </div>
  );
}
