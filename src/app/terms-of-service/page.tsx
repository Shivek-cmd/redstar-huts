"use client";

import SectionReveal from "@/components/SectionReveal";

export default function TermsOfServicePage() {
  return (
    <>
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionReveal>
            <p className="text-xs font-body font-semibold tracking-widest uppercase text-muted mb-4">
              Legal
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground max-w-3xl">
              Terms of Service
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
                <h2 className="font-heading text-2xl text-foreground mb-4">Agreement to Terms</h2>
                <p className="text-base text-body leading-relaxed">
                  By accessing and using the RedStar Huts website and services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not access or use our services.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl text-foreground mb-4">Services Description</h2>
                <p className="text-base text-body leading-relaxed">
                  RedStar Huts provides real estate advisory, consulting, property sales and acquisition services, market research, and investment consulting. Our services are intended for informational and advisory purposes. All property transactions are subject to separate legal agreements.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl text-foreground mb-4">User Responsibilities</h2>
                <p className="text-base text-body leading-relaxed mb-4">When using our services, you agree to:</p>
                <ul className="space-y-3">
                  {["Provide accurate and truthful information in all communications", "Use our website and services only for lawful purposes", "Respect the intellectual property rights of RedStar Huts and third parties", "Not attempt to interfere with the proper functioning of our website", "Maintain the confidentiality of any proprietary information shared with you"].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-base text-body">
                      <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-heading text-2xl text-foreground mb-4">Intellectual Property</h2>
                <p className="text-base text-body leading-relaxed">
                  All content on this website, including text, graphics, logos, images, and software, is the property of RedStar Huts or its content suppliers and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our prior written consent.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl text-foreground mb-4">Limitation of Liability</h2>
                <p className="text-base text-body leading-relaxed">
                  RedStar Huts shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services. Our liability is limited to the maximum extent permitted by applicable law.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl text-foreground mb-4">Modifications</h2>
                <p className="text-base text-body leading-relaxed">
                  We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services constitutes acceptance of the modified terms.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl text-foreground mb-4">Contact</h2>
                <p className="text-base text-body leading-relaxed">
                  For questions regarding these Terms of Service, please contact us at{" "}
                  <a href="mailto:redstarhuts9@gmail.com" className="text-foreground underline underline-offset-4">redstarhuts9@gmail.com</a>.
                </p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
