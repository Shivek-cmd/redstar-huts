import Link from "next/link";

const footerLinks = {
  Company: [
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/properties", label: "Properties" },
    { href: "/contact", label: "Contact" },
  ],
  Services: [
    { href: "/services", label: "Property Sales" },
    { href: "/services", label: "Buyer Advisory" },
    { href: "/services", label: "Investment Consulting" },
    { href: "/services", label: "Market Analysis" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="py-20 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="md:col-span-2">
            <span className="font-heading text-2xl tracking-wide text-background-secondary">
              RedStar<span className="font-light"> Huts</span>
            </span>
            <p className="mt-6 text-sm leading-relaxed text-background-depth/70 max-w-sm">
              Trusted guidance in real estate — from acquisition to investment
              strategy. We bring clarity, discretion, and results to every
              engagement.
            </p>
            <div className="mt-8 flex gap-6">
              <a
                href="mailto:info@redstarhuts.com"
                className="text-sm text-background-depth/60 hover:text-background-secondary transition-colors duration-300"
              >
                info@redstarhuts.com
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs font-body font-semibold tracking-widest uppercase text-background-depth/50 mb-6">
                {title}
              </h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-background-depth/70 hover:text-background-secondary transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-background-depth/10 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-background-depth/40">
            &copy; {new Date().getFullYear()} RedStar Huts. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link
              href="/contact"
              className="text-xs text-background-depth/40 hover:text-background-secondary transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/contact"
              className="text-xs text-background-depth/40 hover:text-background-secondary transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
