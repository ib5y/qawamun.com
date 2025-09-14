// components/Hero.jsx
"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const heroRef = useRef(null);

  // Scrollprogress: start när hero når toppen, slutar när hero lämnar viewport
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Parallax på bakgrunden
  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "45%"]);

  // Text/CTA parallax
  const scaleText = useTransform(scrollYProgress, [0, 1], [1, 0.78]);
  const opacityText = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[92svh] flex items-center justify-center bg-black overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* Parallax wrapper */}
      <motion.div
        style={{ y: yBackground }}
        className="absolute inset-0 will-change-transform"
        aria-hidden
      >
        <div className="absolute inset-0 animate-cinema-pan">
          <Image
            src="/images/hero.jpg"
            alt=""
            fill
            priority
            className="object-cover opacity-90"
            sizes="100vw"
          />
        </div>
      </motion.div>

      {/* Veil (mjuk filmisk in-fade) */}
      <div className="absolute inset-0 bg-qwn-gradient animate-veil-in" aria-hidden />

      {/* Subtil radial toning */}
      <div className="absolute inset-0 bg-qwn-radial pointer-events-none" aria-hidden />

      {/* Light sweep (engångs glare) */}
      <div
        className="light-sweep animate-light-sweep absolute -left-[25%] top-0 h-full w-[60%] rotate-[8deg]"
        aria-hidden
      />

      {/* Top gradient */}
      <div
        className="pointer-events-none absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-black/80 via-black/60 to-transparent"
        aria-hidden
      />

      {/* Content */}
      <motion.div
        style={{ scale: scaleText, opacity: opacityText }}
        className="relative z-10 mx-auto max-w-4xl px-4 md:px-6 text-center will-change-transform"
      >
        <h1
          id="hero-title"
          className="font-display tracking-[0.16em] uppercase text-neutral-100 text-3xl md:text-4xl lg:text-5xl leading-tight animate-softline"
        >
          Forged by <span className="text-qwn-gold">FAITH.</span>
          <br />
          Driven by <span className="text-qwn-gold">DUTY.</span>
          <br />
          Hardened by <span className="text-qwn-gold">HONOR.</span>
        </h1>

        <p className="mt-4 text-neutral-300 text-sm md:text-base max-w-2xl mx-auto animate-softfade">
          QW̄N — Qaw̄amūn. Stand firm. By Allāh and the Qur̄’ān.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <a
            href="/armory"
            className="btn-ghost uppercase tracking-[0.14em] text-sm"
          >
            Enter The Armory
          </a>
          <a
            href="/mission"
            className="btn-primary uppercase tracking-[0.14em] text-sm"
          >
            Our Mission
          </a>
        </div>
      </motion.div>
    </section>
  );
}
