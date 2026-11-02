"use client";

import { motion } from "motion/react";
import Image from "next/image";

export function Reveal({ children, className = "", delay = 0, ...props }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }} {...props}>{children}</motion.div>;
}

export function HeroMotion({ children, className = "", delay = 0 }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

export function ImageReveal({ src, alt, className = "", priority = false }) {
  return <motion.div className={`image-reveal ${className}`} initial={{ opacity: 0, scale: 1.035 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.85, ease: "easeOut" }}><Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 55vw" priority={priority} unoptimized /></motion.div>;
}
