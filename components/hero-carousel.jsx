"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { image } from "@/lib/site";

const slides = [
  { src: image("photo-1600585154340-be6161a56a0c", 2000) },
  { src: image("photo-1600566753086-00f18fb6b3ea", 2000) },
  { src: image("photo-1600607687939-ce8a6c25118c", 2000) },
];

export default function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (paused || reduceMotion) return undefined;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % slides.length), 6500);
    return () => window.clearInterval(timer);
  }, [paused, reduceMotion]);

  return <div
    className="hero-image-carousel"
    aria-hidden="true"
    onMouseEnter={() => setPaused(true)}
    onMouseLeave={() => setPaused(false)}
  >
    <AnimatePresence initial={false}>
      <motion.div
        key={slides[active].src}
        className="hero-carousel-slide"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: reduceMotion ? 0 : 1.1, ease: "easeInOut" }}
      >
        <Image src={slides[active].src} alt="" fill sizes="100vw" priority={active === 0} unoptimized />
      </motion.div>
    </AnimatePresence>
    <div className="hero-index"><span>{String(active + 1).padStart(2, "0")}</span><i /> {String(slides.length).padStart(2, "0")}</div>
  </div>;
}
