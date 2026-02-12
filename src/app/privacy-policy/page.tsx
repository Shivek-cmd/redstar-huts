"use client";

import SectionReveal from "@/components/SectionReveal";

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionReveal>
            <p className="text-xs font-body font-semibold tracking-widest uppercase text-muted mb-4">
              Legal
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground max-w-3xl">
              Privacy Policy
            </h1>
            <p className="mt-6 text-sm text-muted">
              Last updated: January 1, 2025
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <SectionReveal>
            <div className="space-y-12">
              <div>
                <h2 className="font-heading text-2xl text-foreground mb-4">Introduction</h2>
                <p className="text-base text-body leading-relaxed">
                  RedStar Huts (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage our services.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl text-foreground mb-4">Information We Collect</h2>
                <p className="text-base text-body leading-relaxed mb-4">We may collect information that you voluntarily provide to us, including:</p>
                <ul className="space-y-3">
                  {["Name and contact information (email address, phone number)", "Property preferences and search criteria", "Financial information relevant to property transactions", "Communication records from inquiries and consultations", "Website usage data through cookies and analytics"].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-base text-body">
                      <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-heading text-2xl text-foreground mb-4">How We Use Your Information</h2>
                <p className="text-base text-body leading-relaxed mb-4">We use the information we collect to:</p>
                <ul className="space-y-3">
                  {["Respond to your inquiries and provide requested services", "Match you with suitable property opportunities", "Send you relevant market updates and property listings", "Improve our website and service offerings", "Comply with legal obligations and protect our rights"].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-base text-body">
                      <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-heading text-2xl text-foreground mb-4">Data Security</h2>
                <p className="text-base text-body leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl text-foreground mb-4">Third-Party Sharing</h2>
                <p className="text-base text-body leading-relaxed">
                  We do not sell your personal information. We may share your data with trusted third parties only as necessary to provide our services, comply with legal obligations, or with your explicit consent.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl text-foreground mb-4">Your Rights</h2>
                <p className="text-base text-body leading-relaxed">
                  You have the right to access, correct, or delete your personal data at any time. You may also opt out of marketing communications. To exercise any of these rights, please contact us at redstarhuts9@gmail.com.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl text-foreground mb-4">Contact Us</h2>
                <p className="text-base text-body leading-relaxed">
                  If you have questions about this Privacy Policy, please contact us at{" "}
                  <a href="mailto:redstarhuts9@gmail.com" className="text-foreground underline underline-offset-4">redstarhuts9@gmail.com</a> or call{" "}
                  <a href="tel:+918894343056" className="text-foreground underline underline-offset-4">+91 889 434 3056</a>.
                </p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
