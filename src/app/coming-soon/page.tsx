"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";

function FloatingParticles() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 10,
  }));

  return (
    <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-background-secondary/10"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function ArchitecturalIllustration() {
  return (
    <motion.svg
      viewBox="0 0 400 300"
      className="w-full max-w-md mx-auto opacity-[0.12]"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 0.12, scale: 1 }}
      transition={{ duration: 2, delay: 1.2, ease: "easeOut" }}
    >
      <motion.line
        x1="50" y1="280" x2="50" y2="80"
        stroke="currentColor" strokeWidth="1"
        className="text-background-secondary"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, delay: 1.4, ease: "easeInOut" }}
      />
      <motion.line
        x1="50" y1="80" x2="200" y2="30"
        stroke="currentColor" strokeWidth="1"
        className="text-background-secondary"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 1.8, ease: "easeInOut" }}
      />
      <motion.line
        x1="200" y1="30" x2="350" y2="80"
        stroke="currentColor" strokeWidth="1"
        className="text-background-secondary"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 2.0, ease: "easeInOut" }}
      />
      <motion.line
        x1="350" y1="80" x2="350" y2="280"
        stroke="currentColor" strokeWidth="1"
        className="text-background-secondary"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, delay: 2.2, ease: "easeInOut" }}
      />
      <motion.line
        x1="50" y1="280" x2="350" y2="280"
        stroke="currentColor" strokeWidth="1"
        className="text-background-secondary"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 2.6, ease: "easeInOut" }}
      />
      <motion.rect
        x="130" y="180" width="60" height="100"
        fill="none" stroke="currentColor" strokeWidth="0.8"
        className="text-background-secondary"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 2.8, ease: "easeInOut" }}
      />
      <motion.rect
        x="220" y="120" width="80" height="60"
        fill="none" stroke="currentColor" strokeWidth="0.8"
        className="text-background-secondary"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 3.0, ease: "easeInOut" }}
      />
      <motion.rect
        x="80" y="130" width="50" height="50"
        fill="none" stroke="currentColor" strokeWidth="0.8"
        className="text-background-secondary"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 3.2, ease: "easeInOut" }}
      />
    </motion.svg>
  );
}

function GlowOrb({ className, delay }: { className: string; delay: number }) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl pointer-events-none ${className}`}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.15, 0.25, 0.15],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

export default function ComingSoonPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const bgX = useTransform(mouseX, [0, 1], [-8, 8]);
  const bgY = useTransform(mouseY, [0, 1], [-8, 8]);
  const fgX = useTransform(mouseX, [0, 1], [-3, 3]);
  const fgY = useTransform(mouseY, [0, 1], [-3, 3]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ leadType: "notify-me", email }),
      });
      if (res.ok) {
        setSubmitted(true);
        setEmail("");
      }
    } catch {
      setSubmitted(true);
      setEmail("");
    } finally {
      setSubmitting(false);
    }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.div className="absolute -inset-4 z-0" style={{ x: bgX, y: bgY }}>
        <Image
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=85"
          alt="Luxury architecture"
          fill
          className="object-cover scale-110"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground/65 to-foreground/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/30 via-transparent to-foreground/30" />
      </motion.div>

      <FloatingParticles />

      <GlowOrb className="w-48 h-48 md:w-96 md:h-96 bg-background-secondary/20 -top-24 -left-24 md:-top-48 md:-left-48" delay={0} />
      <GlowOrb className="w-36 h-36 md:w-72 md:h-72 bg-background-secondary/15 -bottom-18 -right-18 md:-bottom-36 md:-right-36" delay={4} />
      <GlowOrb className="w-24 h-24 md:w-48 md:h-48 bg-background-secondary/10 top-1/3 right-1/4" delay={2} />

      <div className="absolute inset-0 z-[2] pointer-events-none flex items-end justify-center pb-32 opacity-40">
        <ArchitecturalIllustration />
      </div>

      <motion.div
        className="relative z-10 w-full max-w-2xl mx-auto px-5 sm:px-6 text-center"
        style={{ x: fgX, y: fgY }}
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={fadeUp}>
          <Link
            href="/"
            className="inline-flex items-center gap-3 mb-8 sm:mb-14 group"
          >
            <div className="relative">
              <Image
                src="/logo-circle.png"
                alt="RedStar Huts"
                width={44}
                height={44}
                className="rounded-full ring-1 ring-background-secondary/20 group-hover:ring-background-secondary/40 transition-all duration-500"
              />
              <motion.div
                className="absolute -inset-1 rounded-full border border-background-secondary/10"
                animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            <span className="font-heading text-xl sm:text-2xl tracking-wide text-background-secondary group-hover:text-background-secondary/80 transition-colors duration-500">
              RedStar<span className="font-light"> Huts</span>
            </span>
          </Link>
        </motion.div>

        <motion.div variants={fadeUp}>
          <motion.div
            className="flex items-center justify-center gap-4 mb-8"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-background-secondary/30" />
            <p className="text-[10px] font-body font-semibold tracking-[0.3em] uppercase text-background-secondary/40">
              Something Extraordinary Awaits
            </p>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-background-secondary/30" />
          </motion.div>
        </motion.div>

        <motion.div variants={fadeUp}>
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-background-secondary leading-[0.95] tracking-tight">
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              Coming
            </motion.span>
            <br />
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 1.2, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              Soon
            </motion.span>
          </h1>
        </motion.div>

        <motion.div variants={fadeUp}>
          <p className="mt-6 sm:mt-8 text-sm sm:text-base md:text-lg text-background-secondary/60 leading-relaxed max-w-lg mx-auto font-light px-2 sm:px-0">
            We are crafting a new experience that reflects our unwavering
            commitment to excellence in luxury real estate.
          </p>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-8 sm:mt-14">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="bg-background-secondary/5 backdrop-blur-md border border-background-secondary/15 rounded-2xl px-6 sm:px-8 py-5 sm:py-6 max-w-md mx-auto"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.2, type: "spring", stiffness: 200 }}
                  className="w-10 h-10 rounded-full border border-background-secondary/30 flex items-center justify-center mx-auto mb-3"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-background-secondary/80">
                    <motion.path
                      d="M3 8.5L6.5 12L13 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    />
                  </svg>
                </motion.div>
                <p className="text-sm text-background-secondary/80 font-light">
                  Thank you. We will be in touch soon.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto w-full"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <div className="relative flex-1 group">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full bg-background-secondary/5 backdrop-blur-md border border-background-secondary/15 rounded-full px-6 py-4 text-sm text-background-secondary placeholder:text-background-secondary/30 focus:outline-none focus:border-background-secondary/35 focus:bg-background-secondary/8 transition-all duration-500"
                  />
                  <div className="absolute inset-0 rounded-full bg-background-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
                <motion.button
                  type="submit"
                  className="relative text-sm font-body tracking-widest uppercase px-8 py-4 rounded-full bg-background-secondary/90 text-foreground overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="relative z-10">Notify Me</span>
                  <motion.div
                    className="absolute inset-0 bg-background-secondary"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  />
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mt-12 sm:mt-20 flex flex-col items-center gap-4 sm:gap-6"
        >
          <div className="flex items-center gap-6">
            {[
  {
    href: "https://www.instagram.com/",
    label: "Instagram",
    d: "M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 19.4 19.4 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2ZM7.6 4C5.6 4 4 5.6 4 7.6V16.4C4 18.4 5.6 20 7.6 20H16.4C18.4 20 20 18.4 20 16.4V7.6C20 5.6 18.4 4 16.4 4H7.6ZM17.25 5.5C17.9 5.5 18.5 6.1 18.5 6.75C18.5 7.4 17.9 8 17.25 8C16.6 8 16 7.4 16 6.75C16 6.1 16.6 5.5 17.25 5.5ZM12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z"
  },
  {
    href: "https://youtube.com/@redstarhuts?si=hEDmuk9rk61lh4Su",
    label: "YouTube",
    d: "M23.498 6.186A2.978 2.978 0 0021.402 4.076C19.5 3.5 12 3.5 12 3.5S4.5 3.5 2.598 4.076A2.978 2.978 0 00.502 6.186A31.054 31.054 0 000 12A31.054 31.054 0 00.502 17.814A2.978 2.978 0 002.598 19.924C4.5 20.5 12 20.5 12 20.5S19.5 20.5 21.402 19.924A2.978 2.978 0 0023.498 17.814A31.054 31.054 0 0024 12A31.054 31.054 0 0023.498 6.186ZM9.75 15.568V8.432L15.818 12L9.75 15.568Z"
  },
  {
    href: "https://www.facebook.com/",
    label: "Facebook",
    d: "M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
  },
  {
    href: "https://www.linkedin.com/",
    label: "LinkedIn",
    d: "M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8ZM6 9H2V21H6V9ZM4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
  },
  {
    href: "https://twitter.com/",
    label: "X (Twitter)",
    d: "M18.244 2.25H21.552L14.325 10.51L22.827 21.75H16.17L10.956 14.933L4.99 21.75H1.68L9.41 12.915L1.254 2.25H8.08L12.793 8.481L18.244 2.25Z"
  },
  
].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-full border border-background-secondary/10 flex items-center justify-center text-background-secondary/30 hover:text-background-secondary/70 hover:border-background-secondary/30 transition-all duration-500"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d={social.d} />
                </svg>
              </motion.a>
            ))}
          </div>

          <div className="h-px w-24 bg-gradient-to-r from-transparent via-background-secondary/15 to-transparent" />

          <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
            <a
              href="mailto:redstarhuts9@gmail.com"
              className="text-[10px] sm:text-[11px] font-body tracking-[0.15em] sm:tracking-[0.2em] text-background-secondary/30 hover:text-background-secondary/60 transition-colors duration-500"
            >
              redstarhuts9@gmail.com
            </a>
            <a
              href="tel:+918894343056"
              className="text-[10px] sm:text-[11px] font-body tracking-[0.15em] sm:tracking-[0.2em] text-background-secondary/30 hover:text-background-secondary/60 transition-colors duration-500"
            >
              +91 889 434 3056
            </a>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-background-secondary/20 to-transparent mx-auto"
          animate={{ scaleY: [1, 0.5, 1], opacity: [0.3, 0.1, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
