import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export const metadata: Metadata = {
  title: {
    default: "RedStar Huts — Luxury Real Estate & Consulting",
    template: "%s | RedStar Huts",
  },
  description:
    "Trusted guidance in real estate — from acquisition to investment strategy. RedStar Huts brings clarity, discretion, and results to every engagement.",
  keywords: [
    "luxury real estate",
    "real estate consulting",
    "property sales",
    "buyer advisory",
    "investment consulting",
    "premium properties",
    "RedStar Huts",
    "Himachal Pradesh real estate",
    "Punjab property investment",
    "Chandigarh luxury homes",
    "Haryana property consultants",
    "Uttarakhand real estate",
    "North India luxury properties",
    "real estate investment India",
    "NRI property investment",
    "South India investors North India property",
  ],
  alternates: {
    canonical: "https://redstarhuts.com",
  },
  authors: [{ name: "RedStar Huts" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "RedStar Huts",
    title: "RedStar Huts — Luxury Real Estate & Consulting",
    description:
      "Trusted guidance in real estate — from acquisition to investment strategy. RedStar Huts brings clarity, discretion, and results to every engagement.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "RedStar Huts — Luxury Real Estate & Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RedStar Huts — Luxury Real Estate & Consulting",
    description:
      "Trusted guidance in real estate — from acquisition to investment strategy.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://redstarhuts.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/logo-circle.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#F6F5F3" />
        <meta
          name="google-site-verification"
          content="rOJbsGfx8wGUTXwDp2iY-xUw-76ijVbEMr7f6R4k43c"
        />
        <link rel="alternate" hrefLang="en-IN" href="https://redstarhuts.com" />
        <link rel="alternate" hrefLang="en" href="https://redstarhuts.com" />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://redstarhuts.com"
        />

        {/* Google Tag Manager */}
        <Script id="gtm-head" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;
          f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-M7TZBCRK');`}
        </Script>

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["RealEstateAgent", "LocalBusiness"],
              name: "RedStar Huts",
              url: "https://redstarhuts.com",
              logo: "https://redstarhuts.com/logo-circle.png",
              image: "https://redstarhuts.com/og-image.png",
              description:
                "Trusted real estate consulting and property advisory services in Mohali, Zirakpur, and Chandigarh. Premium flats, luxury apartments, and smart city investment plots.",
              email: "redstarhuts9@gmail.com",
              telephone: "+918894343056",
              address: {
                "@type": "PostalAddress",
                streetAddress: "SCO 08, Jublee Junction, Sector 66",
                addressLocality: "S.A.S Nagar Mohali",
                addressRegion: "Punjab",
                postalCode: "160062",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 30.6942,
                longitude: 76.7225,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],
                opens: "10:00",
                closes: "19:00",
              },
              areaServed: [
                { "@type": "City", name: "Mohali" },
                { "@type": "City", name: "Zirakpur" },
                { "@type": "City", name: "Chandigarh" },
                { "@type": "City", name: "Dholera" },
                { "@type": "State", name: "Punjab" },
                { "@type": "State", name: "Gujarat" },
              ],
              sameAs: [
                "https://www.instagram.com/redstar__huts/",
                "https://www.facebook.com/people/Redstar-Huts/61588365781493/",
                "https://youtube.com/@redstarhuts?si=hEDmuk9rk61lh4Su",
              ],
              priceRange: "₹1 Cr - ₹3 Cr",
              currenciesAccepted: "INR",
              paymentAccepted: "Bank Transfer, Cheque",
            }),
          }}
        />
      </head>

      <body className="antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-foreground focus:text-background-secondary focus:px-4 focus:py-2 focus:rounded-full focus:text-sm"
        >
          Skip to main content
        </a>

        <Header />
        <main id="main-content" role="main">
          {children}
        </main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}