"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export type MediaItem = {
  type: "image" | "video";
  src: string;
  alt: string;
  thumbnail?: string;
};

interface MediaCarouselProps {
  items: MediaItem[];
  autoScrollInterval?: number;
  aspectRatio?: string;
  className?: string;
}

export default function MediaCarousel({
  items,
  autoScrollInterval = 4000,
  aspectRatio = "aspect-[16/10]",
  className = "",
}: MediaCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<Map<number, HTMLVideoElement>>(new Map());
  const autoScrollRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const currentItem = items[currentIndex];

  const goTo = useCallback(
    (index: number) => {
      setCurrentIndex((index + items.length) % items.length);
    },
    [items.length]
  );

  const goNext = useCallback(() => goTo(currentIndex + 1), [currentIndex, goTo]);
  const goPrev = useCallback(() => goTo(currentIndex - 1), [currentIndex, goTo]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (autoScrollRef.current) clearInterval(autoScrollRef.current);

    if (currentItem.type === "video" || !isInView) return;

    autoScrollRef.current = setInterval(goNext, autoScrollInterval);
    return () => {
      if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    };
  }, [currentIndex, currentItem.type, isInView, autoScrollInterval, goNext]);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (index === currentIndex && isInView && currentItem.type === "video") {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [currentIndex, isInView, currentItem.type]);

  useEffect(() => {
    videoRefs.current.forEach((video) => {
      video.muted = isMuted;
    });
  }, [isMuted]);

  const setVideoRef = useCallback((index: number, el: HTMLVideoElement | null) => {
    if (el) {
      videoRefs.current.set(index, el);
    } else {
      videoRefs.current.delete(index);
    }
  }, []);

  return (
    <div ref={containerRef} className={`relative group overflow-hidden ${className}`}>
      <div className={`relative ${aspectRatio} bg-background-depth`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {currentItem.type === "image" ? (
              <Image
                src={currentItem.src}
                alt={currentItem.alt}
                fill
                className="object-cover"
              />
            ) : (
              <div className="relative w-full h-full">
                <video
                  ref={(el) => setVideoRef(currentIndex, el)}
                  src={currentItem.src}
                  poster={currentItem.thumbnail}
                  muted={isMuted}
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                  onEnded={goNext}
                />
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="absolute bottom-4 right-4 z-20 w-10 h-10 rounded-full bg-foreground/60 backdrop-blur-sm flex items-center justify-center text-background-secondary hover:bg-foreground/80 transition-all duration-300"
                  aria-label={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
                    </svg>
                  )}
                </button>
                {currentItem.type === "video" && (
                  <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-foreground/60 backdrop-blur-sm">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-xs font-body text-background-secondary tracking-wider uppercase">Video</span>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {items.length > 1 && (
        <>
          <button
            onClick={goPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-background-secondary/80 backdrop-blur-sm flex items-center justify-center text-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-background-secondary"
            aria-label="Previous"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            onClick={goNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-background-secondary/80 backdrop-blur-sm flex items-center justify-center text-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-background-secondary"
            aria-label="Next"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
            {items.map((item, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`rounded-full transition-all duration-500 ${
                  i === currentIndex
                    ? "w-8 h-2 bg-background-secondary"
                    : item.type === "video"
                    ? "w-2 h-2 bg-red-400/70 hover:bg-red-400"
                    : "w-2 h-2 bg-background-secondary/50 hover:bg-background-secondary/70"
                }`}
                aria-label={`Go to ${item.type} ${i + 1}`}
              />
            ))}
          </div>

          <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-foreground/40 backdrop-blur-sm">
            <span className="text-xs font-body text-background-secondary">
              {currentIndex + 1} / {items.length}
            </span>
          </div>
        </>
      )}
    </div>
  );
}
