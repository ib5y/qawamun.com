// components/MissionHero.jsx
"use client";

import Image from "next/image";

export default function MissionHero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-white/10">
      {/* Background (16:9 ratio, samma som andra heroes) */}
      <div className="relative mx-auto aspect-[16/9] w-full -z-10">
        <Image
          src="/images/heroes/mission-hero.png"
          alt="QW̄N — Our Mission"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />
      </div>

      {/* Content */}
      <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
        <div className="pointer-events-auto mx-auto max-w-5xl px-4 md:px-6 text-center">
          {/* Headline */}
          <h1 className="mt-3 font-display uppercase tracking-[0.20em] leading-[1.1] text-[28px] md:text-[44px] lg:text-[52px] text-white/95 [text-wrap:balance] animate-soft-fade-up">
            A Movement<span className="text-qwn-gold">.</span> Not Merchandise<span className="text-qwn-gold">.</span>
          </h1>

          {/* Underline accent */}
          <span className="mt-4 inline-block h-px w-24 bg-gradient-to-r from-transparent via-qwn-gold to-transparent opacity-80 animate-soft-fade-up" />

<p className="mt-6 mx-auto max-w-3xl text-[15px] md:text-[16px] leading-relaxed text-white/80 [text-wrap:pretty] animate-soft-fade-up">
  QW̄N is a standard you live by. <span className="text-white/90">Forged by Faith</span>,{" "}
  <span className="text-white/90">Driven by Duty</span>, <span className="text-white/90">Hardened by Honor</span>.
  We build men who carry weight, create order, and serve something greater than themselves.
</p>


          {/* Micro copy */}
          <p className="mt-3 text-[13px] text-white/60 animate-soft-fade-up">
            Quiet strength. Visible standards.
          </p>

          {/* CTAs */}
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3 animate-soft-fade-up">
            <a
              href="/oath"
              className="inline-flex items-center justify-center rounded-lg border border-qwn-gold/20 bg-qwn-gold/90 px-6 py-3 text-[13px] font-display uppercase tracking-[0.16em] text-black hover:bg-qwn-carbon transition-all shadow-[0_0_0_1px_rgba(255,255,255,0.06)]"
            >
              Take the Oath
            </a>
            <a
              href="#mandate"
              className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-[13px] font-display uppercase tracking-[0.16em] text-neutral-100 hover:bg-white/10 transition-all"
            >
              Read the Mandate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
