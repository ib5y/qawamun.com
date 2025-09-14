// app/codex/page.jsx
import Link from "next/link";
import CodexHero from "@/components/CodexHero";

export const dynamic = "force-static";

export default function CodexPage() {
  return (
  <main className="relative">
      <CodexHero />

      <section className="mx-auto max-w-6xl px-4 md:px-6 py-20">
        <div className="text-center">
          <p className="font-[var(--font-inter)] text-sm uppercase tracking-[0.16em] text-white/60">Our Mission</p>
          <h1 className="mt-2 font-[var(--font-league)] text-4xl md:text-5xl uppercase tracking-[0.16em]">The Codex</h1>
          <p className="mt-4 font-[var(--font-inter)] text-white/70">
            Principles to anchor the mind. Practices to harden the body. Patterns to govern action.
          </p>
          <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>

        {/* Principles */}
        <div className="mt-16">
          <h2 className="font-[var(--font-league)] text-2xl md:text-3xl uppercase tracking-[0.16em]">Principles</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              "Stand firm when comfort calls.",
              "Guard your tongue; sharpen your mind.",
              "Discipline over desire—every day.",
              "Honor is paid in action, not words.",
              "Choose the hard road when in doubt.",
              "Silence the ego, serve the mission.",
              "Brotherhood multiplies strength.",
              "Move quiet, strike precise.",
              "Accountability precedes victory."
            ].map((p, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-qwn-onyx/50 p-6">
                <p className="font-[var(--font-inter)] text-white/80">{p}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Practices */}
        <div className="mt-16">
          <h2 className="font-[var(--font-league)] text-2xl md:text-3xl uppercase tracking-[0.16em]">Practices</h2>
          <ul className="mt-6 grid gap-3 md:grid-cols-2">
            {[
              "Daily prayer & written reflection—clarify intent before action.",
              "Training block: lift, condition, and stretch—no zero days.",
              "Digital discipline: scheduled windows; no aimless scrolling.",
              "Night routine: plan tomorrow, set clothes, remove friction.",
              "Weekly Brotherhood check-in: goals, proof, correction.",
              "Monthly audit: standards kept, standards broken, corrections set."
            ].map((item, i) => (
              <li key={i} className="font-[var(--font-inter)] text-white/75">
                • {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Patterns */}
        <div className="mt-16">
          <h2 className="font-[var(--font-league)] text-2xl md:text-3xl uppercase tracking-[0.16em]">Patterns</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              { t: "Two-Path Check", d: "If easy vs. hard—pick the path that grows you." },
              { t: "First Principles", d: "Strip the problem to truth. Rebuild your answer from it." },
              { t: "Battle Rhythm", d: "Protect mornings for deep work. Push admin to later." }
            ].map((c, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-qwn-onyx/50 p-6">
                <p className="font-[var(--font-league)] uppercase tracking-[0.14em] text-white/90">{c.t}</p>
                <p className="mt-2 font-[var(--font-inter)] text-white/70">{c.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="mt-20 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/oath"
            className="rounded-full border border-white/20 bg-white/5 px-6 py-3 font-[var(--font-league)] uppercase tracking-[0.14em] hover:bg-white/10"
          >
            Commit to the Oath
          </Link>
          <Link
            href="/armory"
            className="rounded-full border border-white/20 bg-white/5 px-6 py-3 font-[var(--font-league)] uppercase tracking-[0.14em] hover:bg-white/10"
          >
            Equip for the Work
          </Link>
        </div>
      </section>
    </main>
  );
}
