// app/mission/page.jsx

import MissionHero from "@/components/MissionHero";

export const metadata = {
  title: "QW̄N | Our Mission.",
  description:
    "QW̄N is a movement for men forged by Faith, driven by Duty, and hardened by Honor. This is our mandate, our code, and the culture we build.",
};

export default function MissionPage() {
  return (

    
    <main className="relative">
      <MissionHero />

      {/* Mandate */}
      <section id="mandate" className="mx-auto max-w-5xl px-4 md:px-6 py-16 md:py-20">
        <h2 className="font-display text-xl uppercase tracking-[0.16em] text-white/90">The Mandate</h2>
        <p className="mt-5 text-neutral-300">
          We reject the culture of drift. A man is accountable to his Lord, responsible for his family,
          and useful to his community. Strength is not postured — it’s proven daily in restraint,
          discipline, service, and sacrifice. We build quietly, move precisely, and speak only when
          words are required by duty.
        </p>
        <p className="mt-4 text-neutral-300">
          Our mission is to form a brotherhood of principled men — men who choose the narrow path,
          master the inner war, and carry burdens with dignity. The world doesn’t need louder men. It needs steadier ones.
        </p>
      </section>

      {/* Pillars */}
      <section className="mx-auto max-w-5xl px-4 md:px-6 py-12 md:py-16 border-t border-white/10">
        <h3 className="font-display text-lg uppercase tracking-[0.16em] text-white/90">Pillars</h3>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-black/40 p-6">
            <h4 className="font-display uppercase tracking-[0.14em] text-qwn-gold">Faith</h4>
            <p className="mt-3 text-sm text-neutral-300">
              Alignment with Revelation. Worship first. Private obedience before public strength. Your creed shapes your code — and your code shapes your life.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-black/40 p-6">
            <h4 className="font-display uppercase tracking-[0.14em] text-qwn-gold">Duty</h4>
            <p className="mt-3 text-sm text-neutral-300">
              Responsibility before preference. Protect, provide, lead, and serve. Make hard choices early. Carry weight without complaint.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-black/40 p-6">
            <h4 className="font-display uppercase tracking-[0.14em] text-qwn-gold">Honor</h4>
            <p className="mt-3 text-sm text-neutral-300">
              A life that can be audited. Keep your word. Guard your gaze. Restrain your tongue. Do the right thing — especially when it costs you.
            </p>
          </div>
        </div>
      </section>

      {/* Movement > Merchandise */}
      <section className="mx-auto max-w-5xl px-4 md:px-6 py-12 md:py-16 border-t border-white/10">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-black/30 to-black/60 p-6 md:p-10">
          <h3 className="font-display text-lg uppercase tracking-[0.16em] text-white/90">A Movement — Not Merchandise</h3>
          <p className="mt-4 text-neutral-300">
            QW̄N products are symbols — not substitutes — for the work. The brand reminds you of the code you live by.
            You don’t “wear” QW̄N; you uphold it. The culture comes first; the commerce serves the culture.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/armory" className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.14em] text-neutral-100 hover:bg-white/10 transition-colors">
              Explore The Armory
            </a>
            <a href="/oath" className="inline-flex items-center justify-center rounded-md border border-white/15 bg-qwn-gold/90 px-4 py-2 text-xs uppercase tracking-[0.14em] text-black hover:bg-qwn-carbon transition-colors">
              Read The Oath
            </a>
          </div>
        </div>
      </section>

      {/* Operating System: The Keep / Codex / Vault / Oath */}
      <section className="mx-auto max-w-5xl px-4 md:px-6 py-12 md:py-16 border-t border-white/10">
        <h3 className="font-display text-lg uppercase tracking-[0.16em] text-white/90">How We Operate</h3>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-black/40 p-6">
            <h4 className="font-display uppercase tracking-[0.14em] text-white">The Keep</h4>
            <p className="mt-2 text-sm text-neutral-300">
              Home base. Culture, updates, and direction. What we’re building and why it matters — without noise.
            </p>
            <a href="/" className="mt-4 inline-block text-xs uppercase tracking-[0.14em] text-qwn-gold hover:underline underline-offset-4">
              Enter The Keep →
            </a>
          </div>

          <div className="rounded-xl border border-white/10 bg-black/40 p-6">
            <h4 className="font-display uppercase tracking-[0.14em] text-white">The Codex</h4>
            <p className="mt-2 text-sm text-neutral-300">
              Principles, practices, and patterns. Field-tested rules for the inner war and the outer life.
            </p>
            <a href="/codex" className="mt-4 inline-block text-xs uppercase tracking-[0.14em] text-qwn-gold hover:underline underline-offset-4">
              Read The Codex →
            </a>
          </div>

          <div className="rounded-xl border border-white/10 bg-black/40 p-6">
            <h4 className="font-display uppercase tracking-[0.14em] text-white">The Vault</h4>
            <p className="mt-2 text-sm text-neutral-300">
              Archives, studies, and resources. Knowledge that sharpens judgment and deepens resolve.
            </p>
            <a href="/vault" className="mt-4 inline-block text-xs uppercase tracking-[0.14em] text-qwn-gold hover:underline underline-offset-4">
              Open The Vault →
            </a>
          </div>

          <div className="rounded-xl border border-white/10 bg-black/40 p-6">
            <h4 className="font-display uppercase tracking-[0.14em] text-white">The Oath</h4>
            <p className="mt-2 text-sm text-neutral-300">
              Commitment to the code. Not a slogan — a standard. You don’t join QW̄N; you become QW̄N.
            </p>
            <a href="/oath" className="mt-4 inline-block text-xs uppercase tracking-[0.14em] text-qwn-gold hover:underline underline-offset-4">
              Take The Oath →
            </a>
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="mx-auto max-w-5xl px-4 md:px-6 py-12 md:py-20 border-t border-white/10">
        <div className="rounded-2xl border border-white/10 bg-black/40 p-6 md:p-10">
          <h3 className="font-display text-lg uppercase tracking-[0.16em] text-white/90">Manifesto</h3>
          <div className="mt-5 space-y-4 text-neutral-300">
            <p>We build in silence. We move with purpose. We submit to truth and subdue the self. Our aim is not popularity — it is purity of action.</p>
            <p>We sharpen the mind with knowledge, the body with discipline, and the soul with worship. We are not impressed by noise, nor swayed by trends.</p>
            <p>We lead our homes. We protect our people. We honor our word. And when we fail, we repent quickly and get back to work.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-4 md:px-6 py-14 md:py-20 border-t border-white/10">
        <div className="flex flex-col items-center text-center">
          <h4 className="font-display uppercase tracking-[0.16em] text-white/90">Stand With Us</h4>
          <p className="mt-3 max-w-2xl text-neutral-300">
            If this resonates, don’t just follow — build. Start with the Codex, commit to the Oath, and live the standard daily.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a href="/codex" className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.14em] text-neutral-100 hover:bg-white/10 transition-colors">
              Start with The Codex
            </a>
            <a href="/oath" className="inline-flex items-center justify-center rounded-md border border-white/15 bg-qwn-gold/90 px-4 py-2 text-xs uppercase tracking-[0.14em] text-black hover:bg-qwn-carbon transition-colors">
              Commit to The Oath
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
