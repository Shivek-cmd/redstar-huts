"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// ------------------------------------------------------------------
// LIVE PAGES CONFIG — Add paths here to make pages accessible.
// All other routes redirect to /coming-soon.
//
// To enable a page, add its path to this array:
//   "/about"              → enables /about
//   "/services"           → enables /services AND /services/property-sales, etc.
//   "/properties"         → enables /properties AND /properties/meridian-residence, etc.
//   "/blog"               → enables /blog AND /blog/luxury-market-trends-2025, etc.
//   "/contact"            → enables /contact
//   "/privacy-policy"     → enables /privacy-policy
//   "/terms-of-service"   → enables /terms-of-service
//   "/legal-disclaimer"   → enables /legal-disclaimer
//
// To make the full site live, add all paths or remove the redirect logic.
// ------------------------------------------------------------------
const LIVE_PAGES = [
  "/",
];

function isPageLive(pathname: string): boolean {
  if (pathname === "/" || pathname === "/coming-soon") return true;
  return LIVE_PAGES.some(
    (p) => p !== "/" && (pathname === p || pathname.startsWith(p + "/"))
  );
}


export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const isComingSoon = pathname === "/coming-soon";
  const isAllowed = isPageLive(pathname);

  useEffect(() => {
    if (!isAllowed) {
      router.replace("/coming-soon");
    }
  }, [pathname, isAllowed, router]);

  if (!isAllowed) {
    return null;
  }

  if (isComingSoon) {
    return <>{children}</>;
  }

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-foreground focus:text-background-secondary focus:px-4 focus:py-2 focus:rounded-full focus:text-sm"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content" role="main">{children}</main>
      <Footer />
    </>
  );
}
