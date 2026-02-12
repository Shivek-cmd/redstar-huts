"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ComingSoonPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80"
          alt="Luxury architecture"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1F1F1F]/70 via-[#1F1F1F]/60 to-[#1F1F1F]/80" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Link href="/" className="inline-flex items-center gap-3 mb-12">
            <Image
              src="/logo-circle.jpeg"
              alt="RedStar Huts"
              width={48}
              height={48}
              className="rounded-full"
            />
            <span className="font-heading text-2xl tracking-wide text-[#FBFAF8]">
              RedStar<span className="font-light"> Huts</span>
            </span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <p className="text-xs font-body font-semibold tracking-widest uppercase text-[#FBFAF8]/50 mb-6">
            Something Extraordinary is on the Way
          </p>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-[#FBFAF8] leading-tight">
            Coming
            <br />
            Soon
          </h1>
          <p className="mt-8 text-base md:text-lg text-[#FBFAF8]/70 leading-relaxed max-w-lg mx-auto">
            We are preparing a new experience that reflects our commitment to
            excellence in luxury real estate. Be the first to know when we launch.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-12"
        >
          {submitted ? (
            <div className="bg-[#FBFAF8]/10 backdrop-blur-sm border border-[#FBFAF8]/20 rounded-2xl px-8 py-6">
              <p className="text-sm text-[#FBFAF8]/90">
                Thank you. We will be in touch soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 bg-[#FBFAF8]/10 backdrop-blur-sm border border-[#FBFAF8]/20 rounded-full px-6 py-3.5 text-sm text-[#FBFAF8] placeholder:text-[#FBFAF8]/40 focus:outline-none focus:border-[#FBFAF8]/40 transition-colors duration-300"
              />
              <button
                type="submit"
                className="text-sm font-body tracking-wide px-8 py-3.5 rounded-full bg-[#FBFAF8] text-[#1F1F1F] hover:bg-[#EFEDE9] transition-colors duration-300"
              >
                Notify Me
              </button>
            </form>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 flex flex-wrap justify-center gap-8"
        >
          <a
            href="mailto:redstarhuts9@gmail.com"
            className="text-xs font-body tracking-widest text-[#FBFAF8]/40 hover:text-[#FBFAF8]/70 transition-colors duration-300"
          >
            redstarhuts9@gmail.com
          </a>
          <a
            href="tel:+918894343056"
            className="text-xs font-body tracking-widest text-[#FBFAF8]/40 hover:text-[#FBFAF8]/70 transition-colors duration-300"
          >
            +91 889 434 3056
          </a>
        </motion.div>
      </div>
    </section>
  );
}
