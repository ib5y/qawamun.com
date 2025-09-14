// components/CodexHero.jsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function CodexHero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-white/10">
      {/* Background (keep previous image sizing via 16:9 wrapper) */}
      <div className="relative mx-auto aspect-[16/9] w-full -z-10">
        <Image
          src="/images/heroes/codex-hero.png"
          alt="QW̄N — The Codex"
          fill
          priority={false}
          sizes="100vw"
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />
      </div>

      {/* Content */}
      <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
        <div className="pointer-events-auto mx-auto max-w-5xl px-4 md:px-6 text-center">
          <h1 className="mt-3 font-[var(--font-league)] uppercase tracking-[0.20em] leading-[1.1] text-[28px] md:text-[44px] lg:text-[52px] text-white/95 [text-wrap:balance] animate-soft-fade-up">
            The Code You Can Carry<span className="text-qwn-gold">.</span>
          </h1>

          <span className="mt-4 inline-block h-px w-24 bg-gradient-to-r from-transparent via-qwn-gold to-transparent opacity-80 animate-soft-fade-up" />

          <p className="mt-6 mx-auto max-w-3xl font-[var(--font-inter)] text-[15px] md:text-[16px] leading-relaxed text-white/80 [text-wrap:pretty] animate-soft-fade-up">
            Principles that anchor. Practices that harden. Patterns that govern decisive action.
          </p>

          <p className="mt-3 font-[var(--font-inter)] text-[13px] text-white/60 animate-soft-fade-up">
            Quiet strength. Visible standards.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3 animate-soft-fade-up">
            <Link
              href="/oath"
              className="inline-flex items-center justify-center rounded-lg border border-qwn-gold/20 bg-qwn-gold/90 px-6 py-3 text-[13px] font-[var(--font-league)] uppercase tracking-[0.16em] text-black hover:bg-qwn-carbon transition-all shadow-[0_0_0_1px_rgba(255,255,255,0.06)]"
            >
              Commit to the Oath
            </Link>
            <a
              href="/codex#principles"
              className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-[13px] font-[var(--font-league)] uppercase tracking-[0.16em] text-neutral-100 hover:bg-white/10 transition-all"
            >
              Read the Principles
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
