import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80"
          alt="Luxury architecture"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-foreground/75" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-10 text-center py-32">
        <p className="text-xs font-body font-semibold tracking-widest uppercase text-background-secondary/50 mb-6">
          Page Not Found
        </p>
        <h1 className="font-heading text-6xl md:text-7xl lg:text-8xl text-background-secondary leading-tight">
          404
        </h1>
        <p className="mt-6 text-base md:text-lg text-background-secondary/70 max-w-md mx-auto leading-relaxed">
          The page you are looking for does not exist or has been moved.
          Let us guide you back.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-block text-sm font-body tracking-wide px-8 py-3.5 rounded-full bg-background-secondary text-foreground hover:bg-background transition-colors duration-300"
          >
            Return Home
          </Link>
          <Link
            href="/properties"
            className="inline-block text-sm font-body tracking-wide px-8 py-3.5 rounded-full border border-background-secondary/40 text-background-secondary hover:bg-background-secondary/10 transition-colors duration-300"
          >
            View Properties
          </Link>
          <Link
            href="/contact"
            className="inline-block text-sm font-body tracking-wide px-8 py-3.5 rounded-full border border-background-secondary/40 text-background-secondary hover:bg-background-secondary/10 transition-colors duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
