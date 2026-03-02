"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const serviceLinks = [
  { href: "/services/property-sales", label: "Property Sales" },
  { href: "/services/buyer-advisory", label: "Buyer Advisory" },
  { href: "/services/investment-consulting", label: "Investment Consulting" },
  { href: "/services/market-research", label: "Market Analysis" },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services", hasDropdown: true },
  { href: "/properties", label: "Properties" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const useLightText = isHome && !scrolled;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || !isHome
            ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="relative z-50 flex items-center gap-3">
              <Image
                src="/logo-circle.png"
                alt="RedStar Huts"
                width={44}
                height={44}
                className="rounded-full"
              />
              <span
                className={`font-heading text-xl tracking-wide transition-colors duration-500 ${
                  useLightText ? "text-background-secondary" : "text-foreground"
                }`}
              >
                RedStar<span className="font-light"> Huts</span>
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-10">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div
                    key={link.href}
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={() => {
                      if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
                      setServicesOpen(true);
                    }}
                    onMouseLeave={() => {
                      hoverTimeout.current = setTimeout(() => setServicesOpen(false), 150);
                    }}
                  >
                    <Link
                      href={link.href}
                      className={`text-sm font-body font-medium tracking-wide transition-colors duration-300 flex items-center gap-1 ${
                        useLightText
                          ? "text-background-secondary/90 hover:text-background-secondary"
                          : "text-foreground/80 hover:text-foreground"
                      }`}
                    >
                      {link.label}
                      <svg
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </Link>
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-56 bg-background-secondary border border-border rounded-lg shadow-lg overflow-hidden"
                        >
                          <Link
                            href="/services"
                            onClick={() => setServicesOpen(false)}
                            className="block px-5 py-3 text-sm font-body text-foreground font-medium border-b border-border hover:bg-background-depth transition-colors duration-200"
                          >
                            All Services
                          </Link>
                          {serviceLinks.map((sLink) => (
                            <Link
                              key={sLink.href}
                              href={sLink.href}
                              onClick={() => setServicesOpen(false)}
                              className="block px-5 py-3 text-sm font-body text-body hover:text-foreground hover:bg-background-depth transition-colors duration-200"
                            >
                              {sLink.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm font-body font-medium tracking-wide transition-colors duration-300 ${
                      useLightText
                        ? "text-background-secondary/90 hover:text-background-secondary"
                        : "text-foreground/80 hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <Link
                href="/contact"
                className={`text-sm font-body tracking-wide px-6 py-2.5 rounded-full transition-colors duration-300 ${
                  useLightText
                    ? "bg-background-secondary text-foreground hover:bg-background"
                    : "bg-foreground text-background-secondary hover:bg-body"
                }`}
              >
                Book a Consultation
              </Link>
            </nav>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden relative z-50 w-8 h-8 flex flex-col justify-center items-center gap-1.5"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-px transition-all duration-300 ${
                  useLightText && !mobileOpen ? "bg-background-secondary" : "bg-foreground"
                } ${mobileOpen ? "rotate-45 translate-y-1" : ""}`}
              />
              <span
                className={`block w-6 h-px transition-all duration-300 ${
                  useLightText && !mobileOpen ? "bg-background-secondary" : "bg-foreground"
                } ${mobileOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block w-6 h-px transition-all duration-300 ${
                  useLightText && !mobileOpen ? "bg-background-secondary" : "bg-foreground"
                } ${mobileOpen ? "-rotate-45 -translate-y-1" : ""}`}
              />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="flex flex-col items-center"
                >
                  {link.hasDropdown ? (
                    <>
                      <button
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className="font-heading text-3xl text-foreground hover:text-muted transition-colors duration-300 flex items-center gap-2"
                      >
                        {link.label}
                        <svg
                          className={`w-5 h-5 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden mt-4 flex flex-col items-center gap-4"
                          >
                            {serviceLinks.map((sLink) => (
                              <Link
                                key={sLink.href}
                                href={sLink.href}
                                onClick={() => { setMobileOpen(false); setMobileServicesOpen(false); }}
                                className="text-lg font-body text-muted hover:text-foreground transition-colors duration-300"
                              >
                                {sLink.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="font-heading text-3xl text-foreground hover:text-muted transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-4 text-sm font-body tracking-wide px-8 py-3 rounded-full bg-foreground text-background-secondary"
                >
                  Book a Consultation
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
