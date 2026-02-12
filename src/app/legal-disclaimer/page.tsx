"use client";

import SectionReveal from "@/components/SectionReveal";

export default function LegalDisclaimerPage() {
  return (
    <>
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionReveal>
            <p className="text-xs font-body font-semibold tracking-widest uppercase text-muted mb-4">
              Legal
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground max-w-3xl">
              Legal Disclaimer
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
                <h2 className="font-heading text-2xl text-foreground mb-4">General Disclaimer</h2>
                <p className="text-base text-body leading-relaxed">
                  The information provided on this website is for general informational purposes only. While we strive to keep the information accurate and up to date, RedStar Huts makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on this website.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl text-foreground mb-4">Property Information</h2>
                <p className="text-base text-body leading-relaxed">
                  Property listings, prices, specifications, and availability are subject to change without notice. All property information is provided as a courtesy and should be independently verified by prospective buyers. RedStar Huts does not guarantee the accuracy of property descriptions, measurements, or pricing information displayed on this website.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl text-foreground mb-4">Not Financial or Legal Advice</h2>
                <p className="text-base text-body leading-relaxed">
                  Nothing on this website constitutes financial, legal, or tax advice. The content provided is for informational purposes only and should not be relied upon as a substitute for professional advice. We recommend consulting with qualified professionals before making any real estate, investment, or financial decisions.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl text-foreground mb-4">Third-Party Links</h2>
                <p className="text-base text-body leading-relaxed">
                  This website may contain links to third-party websites or services that are not owned or controlled by RedStar Huts. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl text-foreground mb-4">Market Projections</h2>
                <p className="text-base text-body leading-relaxed">
                  Any market analysis, forecasts, or projections provided on this website are based on current market conditions and available data. Past performance is not indicative of future results. Real estate markets are subject to fluctuations, and actual outcomes may differ materially from any projections or estimates.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl text-foreground mb-4">Limitation of Liability</h2>
                <p className="text-base text-body leading-relaxed">
                  In no event shall RedStar Huts, its directors, employees, partners, agents, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, or other intangible losses, resulting from your access to or use of this website.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl text-foreground mb-4">Contact</h2>
                <p className="text-base text-body leading-relaxed">
                  For questions regarding this Legal Disclaimer, please contact us at{" "}
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
