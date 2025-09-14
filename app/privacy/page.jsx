// app/privacy/page.jsx
import Image from "next/image";

export const metadata = {
  title: "QW̄N | Privacy Policy.",
  description:
    "How QW̄N collects, uses, and protects your data. Transparent, minimal, lawful.",
};

export default function PrivacyPage() {
  return (
    <main className="relative">
      {/* Övre guldlina */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-qwn-gold/40 to-transparent z-10" />

      {/* Hero – same system as MissionHero (height kept consistent) */}
      <section className="relative isolate overflow-hidden border-b border-white/10 h-[80vh]">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/heroes/privacy-hero.png"
            alt="QW̄N — Privacy Policy"
            fill
            priority
            className="object-cover opacity-60"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-5xl px-4 md:px-6 h-full flex flex-col items-center justify-center text-center">
          <h1 className="mt-3 font-display uppercase tracking-[0.20em] leading-[1.1] text-[28px] md:text-[44px] lg:text-[52px] text-white/95 [text-wrap:balance]">
            Privacy Policy<span className="text-qwn-gold">.</span>
          </h1>

          <span className="mt-4 inline-block h-px w-24 bg-gradient-to-r from-transparent via-qwn-gold to-transparent opacity-80" />

          <p className="mt-6 mx-auto max-w-3xl text-[15px] md:text-[16px] leading-relaxed text-white/80 [text-wrap:pretty]">
            We collect only what is required. We protect what we collect. No noise, no games.
          </p>
          <p className="mt-3 text-[13px] text-white/60">
            Effective date: 1 September 2025
          </p>

          {/* CTAs */}
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href="/returns"
              className="inline-flex items-center justify-center rounded-lg border border-qwn-gold/20 bg-qwn-gold/90 px-6 py-3 text-[13px] font-display uppercase tracking-[0.16em] text-black hover:bg-qwn-carbon transition-all shadow-[0_0_0_1px_rgba(255,255,255,0.06)]"
            >
              Return & Refund Policy
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-[13px] font-display uppercase tracking-[0.16em] text-neutral-100 hover:bg-white/10 transition-all"
            >
              Contact Us.
            </a>
          </div>
        </div>
      </section>

      {/* Policy body */}
      <section className="mx-auto max-w-5xl px-4 md:px-6 py-16 md:py-20">
        <h2 className="font-display text-xl uppercase tracking-[0.16em] text-white/90">Overview</h2>
        <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <p className="mt-5 text-neutral-300">
          This Privacy Policy explains how QW̄N (“we”, “us”, “our”) collects, uses, and safeguards your
          information when you visit our website, purchase products, or interact with our services.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-12">
          <section id="data-we-collect">
            <h3 className="font-display uppercase tracking-[0.16em] text-white/90">Data We Collect</h3>
            <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <ul className="mt-5 list-disc pl-5 text-neutral-300 space-y-2">
              <li>Account & order data: name, email, shipping address, billing details.</li>
              <li>Transactional data: items purchased, order value, fulfillment status.</li>
              <li>Technical data: device, browser, IP, general geolocation, cookies.</li>
              <li>Communications: messages you send to us (support, partnerships, press).</li>
            </ul>
          </section>

          <section id="how-we-use">
            <h3 className="font-display uppercase tracking-[0.16em] text-white/90">How We Use Your Data</h3>
            <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <ul className="mt-5 list-disc pl-5 text-neutral-300 space-y-2">
              <li>To process orders, payments, shipping, and returns.</li>
              <li>To maintain account security and detect fraud or abuse.</li>
              <li>To improve site performance, UX, and product decisions.</li>
              <li>To communicate order updates, support replies, and essential notices.</li>
            </ul>
          </section>

          <section id="cookies">
            <h3 className="font-display uppercase tracking-[0.16em] text-white/90">Cookies & Analytics</h3>
            <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <p className="mt-5 text-neutral-300">
              We use essential cookies for site functionality and limited analytics to understand aggregate behavior.
              You can control cookies in your browser. Blocking some cookies may impact site performance.
            </p>
          </section>

          <section id="sharing">
            <h3 className="font-display uppercase tracking-[0.16em] text-white/90">Sharing & Processors</h3>
            <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <p className="mt-5 text-neutral-300">
              We may share data with payment gateways, fulfilment partners, and analytics providers strictly to deliver our services.
              We do not sell personal data. All partners are bound by contracts and only process data on our instructions.
            </p>
          </section>

          <section id="retention">
            <h3 className="font-display uppercase tracking-[0.16em] text-white/90">Retention</h3>
            <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <p className="mt-5 text-neutral-300">
              We retain data only as long as needed for legal, accounting, or operational purposes. We then delete or anonymize it.
            </p>
          </section>

          <section id="rights">
            <h3 className="font-display uppercase tracking-[0.16em] text-white/90">Your Rights (EU/EEA)</h3>
            <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <ul className="mt-5 list-disc pl-5 text-neutral-300 space-y-2">
              <li>Access, rectify, or erase your data.</li>
              <li>Restrict or object to processing; data portability.</li>
              <li>Withdraw consent where relied upon.</li>
              <li>Lodge a complaint with your supervisory authority.</li>
            </ul>
          </section>

          <section id="transfers">
            <h3 className="font-display uppercase tracking-[0.16em] text-white/90">International Transfers</h3>
            <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <p className="mt-5 text-neutral-300">
              If data is transferred outside the EU/EEA, we use lawful transfer mechanisms (e.g., SCCs) to protect your information.
            </p>
          </section>

          <section id="contact">
            <h3 className="font-display uppercase tracking-[0.16em] text-white/90">Contact</h3>
            <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <p className="mt-5 text-neutral-300">
              For privacy requests, email{" "}
              <a
                className="underline underline-offset-4 decoration-white/20 hover:decoration-white/60"
                href="mailto:contact@qawamun.com"
              >
                contact@qawamun.com
              </a>.
              We aim to respond within 30 days.
            </p>
          </section>
        </div>

        {/* Bottom CTAs */}
        <div className="mt-14 flex flex-wrap items-center gap-3">
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-[12px] font-display uppercase tracking-[0.16em] text-neutral-100 hover:bg-white/10 transition-all"
          >
            Back to The Keep
          </a>
          <a
            href="/armory"
            className="inline-flex items-center justify-center rounded-lg border border-qwn-gold/20 bg-qwn-gold/90 px-6 py-3 text-[12px] font-display uppercase tracking-[0.16em] text-black hover:bg-qwn-carbon transition-all"
          >
            Enter The Armory
          </a>
        </div>
      </section>
    </main>
  );
}
