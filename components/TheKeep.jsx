// components/TheKeep.jsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Shield, Users, Target } from "lucide-react";

/* ---------- Utilities ---------- */
function Section({ children, className = "" }) {
  // Mer vertikal luft som standard
  return <section className={`max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28 ${className}`}>{children}</section>;
}

const fadeIn = {
  hidden: { opacity: 0, y: 22 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay, ease: [0.2, 0.7, 0.2, 1] },
  }),
};

/* =========================================
   THE KEEP (clean, premium, airy)
========================================= */
export default function TheKeep() {
  const rootRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: rootRef });

  // Diskret parallax för bildblock
  const ySoft = useTransform(scrollYProgress, [0, 1], ["0%", "-6%"]);

  // Parallax för Brotherhood-CTA
  const ctaRef = useRef(null);
  const { scrollYProgress: ctaProg } = useScroll({
    target: ctaRef,
    offset: ["start end", "end start"],
  });
  const ctaY = useTransform(ctaProg, [0, 1], ["-12%", "12%"]);
  const ctaScale = useTransform(ctaProg, [0, 1], [1.1, 1]);

  return (
    <div ref={rootRef} className="relative bg-black text-neutral-100 overflow-hidden">
      {/* Övre guldlina */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-qwn-gold/40 to-transparent z-10" />

      {/* INTRO */}
      <Section className="text-center">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="font-display text-3xl md:text-5xl uppercase tracking-[0.18em] gold-shimmer-once mb-10"
        >
          The Blueprint
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-3xl mx-auto text-neutral-300 leading-loose md:leading-looser text-[15px] md:text-base space-y-6"
        >
          <p>
            <span className="text-qwn-gold">QW̄N</span> is not a brand. It is a blueprint — a system built
            on faith, discipline, and honor, forged in a world that has abandoned all three. It is a quiet
            rebellion against comfort, against weakness, against the lie that manhood can be outsourced.
          </p>

          <p>
            This is where clarity is carved through chaos. Where purpose is tempered by restraint, and where
            every decision, every habit, every action is guided by a code older than time itself.
          </p>

          <p>
            Every product, every design, every word we release carries weight — not decoration, but
            declaration. A reminder that strength is built, not given. That conviction without discipline is
            noise, and discipline without faith is hollow.
          </p>

          <p>
            QW̄N exists to sharpen you — to steady your hands when the storm rages, to harden your resolve
            when the world tells you to bend, to remind you that the man who governs himself governs his
            destiny.
          </p>

          <p>
            This is not for everyone. It is for the few who choose to rise, who refuse to bow to fear, and
            who understand that honor is a burden worth carrying.
          </p>
        </motion.div>
      </Section>

      {/* NARRATIVE #1 */}
      <Section className="pb-36 grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="order-2 lg:order-1"
        >
          <h3 className="font-display text-2xl md:text-4xl uppercase tracking-[0.18em] gold-shimmer-once mb-8">
            Discipline
          </h3>
          <p className="text-neutral-300 leading-loose md:leading-looser mb-5">
            Discipline is architecture. It frames your day, directs your focus, and cuts away excuses.
          </p>
          <p className="text-neutral-400 leading-loose md:leading-looser">
            We train rhythm, not hype — consistent action under pressure. The man who governs himself
            needs no permission to lead.
          </p>
        </motion.div>

        <motion.div
          style={{ y: ySoft }}
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative w-full h-[380px] md:h-[450px] rounded-xl overflow-hidden shadow-lg order-1 lg:order-2"
        >
          {/* Bild */}
          <Image
            src="/images/faceless1.png"
            alt="Discipline — self-governed action"
            fill
            className="object-contain bg-black"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />

          {/* Gradients: top/bottom */}
          <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-black/100 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

          {/* Gradients: left/right */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black/80 to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black/80 to-transparent pointer-events-none" />
        </motion.div>
      </Section>

{/* FAITH. DUTY. HONOR. */}
<Section className="pb-36 flex flex-col items-center">
  <motion.h3
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeIn}
    className="font-display text-center text-3xl md:text-4xl uppercase tracking-[0.18em] gold-shimmer-once mb-14"
  >
    Forged, driven and hardened by
  </motion.h3>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 w-full max-w-5xl text-center">
    {[
      {
        icon: Shield,
        title: "Faith",
        text: "Conviction anchored in Qur’ān and Sunnah — guidance before impulse, truth before trend.",
      },
      {
        icon: Target,
        title: "Duty",
        text: "Protect. Provide. Lead. The weight you carry is the man you become.",
      },
      {
        icon: Users,
        title: "Honor",
        text: "Keep the code when no one is watching — restraint, discipline, accountability.",
      },
    ].map((item, i) => (
      <motion.div
        key={i}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="flex flex-col items-center text-center px-2"
      >
        <item.icon className="w-12 h-12 text-qwn-gold mb-6" />
        <h4 className="font-display text-base md:text-lg uppercase mb-3">
          {item.title}
        </h4>
        <p className="text-neutral-400 text-sm md:text-[15px] leading-loose md:leading-looser max-w-[28rem]">
          {item.text}
        </p>

        {/* subtil divider för hierarki (ingen ram) */}
        <span className="mt-8 inline-block h-px w-16 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </motion.div>
    ))}
  </div>
</Section>

      {/* NARRATIVE #2 */}
      <Section className="pb-36 grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 items-center">
        <motion.div
          style={{ y: ySoft }}
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative w-full h-[380px] md:h-[450px] rounded-xl overflow-hidden shadow-lg order-1 lg:order-2"
        >
          {/* Bild */}
          <Image
            src="/images/faceless2.png"
            alt="Discipline — self-governed action"
            fill
            className="object-contain bg-black"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />

          {/* Gradients: top/bottom */}
          <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-black/100 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

          {/* Gradients: left/right */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black/80 to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black/80 to-transparent pointer-events-none" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="order-2 lg:order-2"
        >
          <h3 className="font-display text-2xl md:text-4xl uppercase tracking-[0.18em] gold-shimmer-once mb-8">
            Formation
          </h3>
          <p className="text-neutral-300 leading-loose md:leading-looser mb-5">
            Strength is built quietly — through repetition, restraint, and refusal to fold.
          </p>
          <p className="text-neutral-400 leading-loose md:leading-looser">
            We build frameworks that survive fatigue and famine. Habits that persist when motivation
            doesn’t. Formation is the work beneath the surface.
          </p>
        </motion.div>
      </Section>

      {/* JOIN THE BROTHERHOOD CTA */}
      <Section className="pb-44">
        <div
          ref={ctaRef}
          className="relative w-full h-[600px] md:h-[750px] overflow-hidden rounded-2xl"
        >
          <motion.div
            style={{ y: ctaY, scale: ctaScale }}
            className="absolute inset-0 flex items-center justify-center bg-black"
            aria-hidden
          >
            <Image
              src="/images/faceless5.png"
              alt="Join the Brotherhood"
              fill
              priority
              className="object-contain object-center transition-transform duration-700"
              sizes="100vw"
            />
          </motion.div>

          {/* Gradients: top/bottom + left/right */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/70 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black/70 to-transparent" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black/70 to-transparent" />
          </div>

          <div className="relative z-10 px-6 md:px-10 pt-44 md:pt-64 flex flex-col items-center text-center">
            <motion.h3
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="font-display text-2xl md:text-4xl uppercase tracking-[0.18em] gold-shimmer-once mb-6"
            >
              Join the Brotherhood
            </motion.h3>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="max-w-2xl text-neutral-300 text-sm md:text-base leading-loose md:leading-looser mb-10"
            >
              Not a club. A quiet alliance. Men who stand firm, protect, provide, and lead —
              rooted in faith, forged by discipline, bound by honor. If you won’t bend, step in.
            </motion.p>

            <motion.nav
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              aria-label="QW̄N Socials"
              className="flex items-center gap-10 md:gap-12"
            >
              {/* Instagram */}
              <Link
                href="https://instagram.com/qwnummah"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram @qwnummah"
                className="group"
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  className="fill-qwn-gold group-hover:fill-white transition-colors"
                >
                  <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.2 2.3.4.6.2 1 .5 1.5 1 .5.5.8.9 1 1.5.2.4.3 1.1.4 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.9-.4 2.3-.2.6-.5 1-1 1.5-.5.5-.9.8-1.5 1-.4.2-1.1.3-2.3.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.2-2.3-.4-.6-.2-1-.5-1.5-1-.5-.5-.8-.9-1-1.5-.2-.4-.3-1.1-.4-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.9.4-2.3.2-.6.5-1 1-1.5.5-.5.9-.8 1.5-1 .4-.2 1.1-.3 2.3-.4C8.4 2.2 8.8 2.2 12 2.2Zm0 5.2a4.6 4.6 0 1 0 0 9.2 4.6 4.6 0 0 0 0-9.2Z"/>
                </svg>
              </Link>

              {/* TikTok */}
              <Link
                href="https://tiktok.com/@qwnummah"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok @qwnummah"
                className="group"
              >
                  <svg width="28" height="28" viewBox="0 0 24 24"             className="fill-qwn-gold group-hover:fill-white transition-colors"><path d="M21 8.1a7.6 7.6 0 0 1-5-2v9.1a6.2 6.2 0 1 1-6.2-6.2c.3 0 .7 0 1 .1v3.1a3.2 3.2 0 1 0 2.2 3V2.5h3.2a4.5 4.5 0 0 0 4.8 4.4V8.1Z" />

                  <path d="M232,88.7V120a104,104,0,1,1-120-102.7,8,8,0,0,1,9.4,7.9V152a24,24,0,1,0,24-24,8,8,0,0,1-8-8V40a8,8,0,0,1,13.3-6.2A88.3,88.3,0,0,0,232,88.7Z"/>
                </svg>
              </Link>

              {/* YouTube */}
              <Link
                href="https://youtube.com/@qwnummah"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube @qwnummah"
                className="group"
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  className="fill-qwn-gold group-hover:fill-white transition-colors"
                >
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.5 12 3.5 12 3.5s-7.6 0-9.4.5A3 3 0 0 0 .5 6.2C0 7.9 0 12 0 12s0 4.1.5 5.8a3 3 0 0 0 2.1 2.1c1.7.5 9.4.5 9.4.5s7.6 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.7.5-5.8.5-5.8s0-4.1-.5-5.8ZM9.6 15.5V8.5L15.8 12l-6.2 3.5Z"/>
                </svg>
              </Link>

              {/* X */}
              <Link
                href="https://x.com/qwnummah"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X @qwnummah"
                className="group"
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  className="fill-qwn-gold group-hover:fill-white transition-colors"
                >
                  <path d="M18.2 2h3.3l-7.2 8.2L23 22h-6.5l-5.1-6.6L5.5 22H2.2l7.7-8.8L1 2h6.6l4.6 6.1L18.2 2Zm-1.1 18h1.8L7 4H5.1l12 16Z"/>
                </svg>
              </Link>
            </motion.nav>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="mt-4 text-neutral-300/80 text-sm tracking-wide"
            >
              @qwnummah
            </motion.div>
          </div>
        </div>
      </Section>

      {/* VIGILANCE */}
      <Section className="pb-36 grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="order-2 lg:order-1"
        >
          <h3 className="font-display text-2xl md:text-4xl uppercase tracking-[0.18em] gold-shimmer-once mb-8">
            Vigilance
          </h3>
          <p className="text-neutral-300 leading-loose md:leading-looser mb-5">
            Resolve is quiet, watchful, and ready. It doesn’t posture — it prepares.
          </p>
          <p className="text-neutral-400 leading-loose md:leading-looser">
            We practice restraint over reaction and principles over pressure. When the noise rises,
            vigilance keeps the mission clear.
          </p>
        </motion.div>

        <motion.div
          style={{ y: ySoft }}
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative w-full h-[380px] md:h-[450px] rounded-xl overflow-hidden shadow-lg order-1 lg:order-2"
        >
          {/* Bild */}
          <Image
            src="/images/faceless4.png"
            alt="Discipline — self-governed action"
            fill
            className="object-contain bg-black"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />

          {/* Gradients: top/bottom */}
          <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-black/100 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

          {/* Gradients: left/right */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black/80 to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black/80 to-transparent pointer-events-none" />
        </motion.div>
      </Section>

      {/* ARMORY CTA */}
      <Section className="pb-36 md:pb-44">
        <div className="relative rounded-2xl border border-white/10 bg-black overflow-hidden text-center px-6 md:px-10 py-14 md:py-20 shadow-lg">
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="font-display text-lg md:text-2xl uppercase tracking-[0.18em] gold-shimmer-once mb-6"
          >
            Equip Yourself. Arm the Mission.
          </motion.h3>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-neutral-400 max-w-2xl mx-auto mb-10 text-sm md:text-[15px] leading-loose md:leading-looser"
          >
            The Armory is our vault — engineered essentials for men who won’t bend.
            Purpose-built. Field-ready. Uncompromising.
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <Link
              href="/armory"
              className="inline-flex h-11 items-center justify-center rounded-md border border-qwn-gold/40 bg-transparent px-8 md:px-10 text-[11px] uppercase tracking-[0.14em] text-qwn-gold hover:bg-black hover:text-black transition-colors"
            >
              Enter The Armory
            </Link>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}
