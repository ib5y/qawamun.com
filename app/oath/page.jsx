// app/oath/page.jsx
import Link from "next/link";
import OathHero from "@/components/OathHero";

export const dynamic = "force-static";

export default function OathPage() {
  return (
      <main className="relative">
      <OathHero />

      <section className="mx-auto max-w-5xl px-4 md:px-6 py-20">
        <div className="text-center">
          <p className="font-[var(--font-inter)] text-sm uppercase tracking-[0.16em] text-white/60">Our Mission</p>
          <h1 className="mt-2 font-[var(--font-league)] text-4xl md:text-5xl uppercase tracking-[0.16em]">The Oath</h1>
          <p className="mt-4 font-[var(--font-inter)] text-white/70">
            Not a slogan. A standard. A line you cross—and never step back from.
          </p>
          <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>

        {/* The Oath (manifesto) */}
        <div className="mt-14 rounded-2xl border border-white/10 bg-qwn-onyx/50 p-8">
          <p className="font-[var(--font-inter)] text-white/80">
            I will set a standard and live it in private. I will speak truth softly and act loudly.
            I will choose duty over comfort, discipline over drift, courage over noise. I will stand
            with brothers who hold the line—and I will be the brother who does the same. By faith,
            by resolve, by relentless action—I will not break.
          </p>
        </div>

        {/* Standards */}
        <div className="mt-16">
          <h2 className="font-[var(--font-league)] text-2xl md:text-3xl uppercase tracking-[0.16em]">Standards</h2>
          <ul className="mt-6 space-y-3">
            {[
              "Pray on time; organize the day around what matters, not what shouts.",
              "Train body and mind; no zero days.",
              "Guard inputs; protect attention like a scarce resource.",
              "Serve family, keep promises, pay debts.",
              "Tell the truth; accept correction; make amends fast."
            ].map((s, i) => (
              <li key={i} className="font-[var(--font-inter)] text-white/75">
                • {s}
              </li>
            ))}
          </ul>
        </div>

        {/* Make it real */}
        <div className="mt-16">
          <h2 className="font-[var(--font-league)] text-2xl md:text-3xl uppercase tracking-[0.16em]">Make it Real</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              { t: "Print & Post", d: "Print the oath. Place it where you must see it daily." },
              { t: "Brother Check", d: "Share standards with an accountability partner." },
              { t: "Proof Log", d: "Track proofs kept and broken. Adjust—don’t excuse." }
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
            href="/armory"
            className="rounded-full border border-white/20 bg-white/5 px-6 py-3 font-[var(--font-league)] uppercase tracking-[0.14em] hover:bg-white/10"
          >
            Symbols of the Standard
          </Link>
          <Link
            href="/codex"
            className="rounded-full border border-white/20 bg-white/5 px-6 py-3 font-[var(--font-league)] uppercase tracking-[0.14em] hover:bg-white/10"
          >
            Read the Codex
          </Link>
        </div>
      </section>
    </main>
  );
}
