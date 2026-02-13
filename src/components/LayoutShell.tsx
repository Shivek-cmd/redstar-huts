"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ALLOWED_PATHS = ["/", "/coming-soon"];

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const isComingSoon = pathname === "/coming-soon";
  const isAllowed = ALLOWED_PATHS.includes(pathname);

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
