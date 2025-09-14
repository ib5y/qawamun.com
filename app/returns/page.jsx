// app/returns/page.jsx
import Image from "next/image";

export const metadata = {
  title: "QW̄N | Return & Refund Policy.",
  description:
    "How returns, exchanges, and refunds work at QW̄N. Clear rules. No friction.",
};

export default function ReturnsPage() {
  return (
    <main className="relative">
      {/* Övre guldlina */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-qwn-gold/40 to-transparent z-10" />

      {/* Hero – same system as MissionHero (height kept consistent) */}
      <section className="relative isolate overflow-hidden border-b border-white/10 h-[80vh]">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/heroes/returns-hero.png"
            alt="QW̄N — Return & Refund Policy"
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
            Return & Refund Policy<span className="text-qwn-gold">.</span>
          </h1>

          <span className="mt-4 inline-block h-px w-24 bg-gradient-to-r from-transparent via-qwn-gold to-transparent opacity-80" />

          <p className="mt-6 mx-auto max-w-3xl text-[15px] md:text-[16px] leading-relaxed text-white/80 [text-wrap:pretty]">
            Clear standards. No confusion. If we made a mistake, we make it right.
          </p>
          <p className="mt-3 text-[13px] text-white/60">
            Applies to QW̄N online orders only
          </p>

          {/* CTAs */}
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href="/privacy"
              className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-[13px] font-display uppercase tracking-[0.16em] text-neutral-100 hover:bg-white/10 transition-all"
            >
              Privacy Policy
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-qwn-gold/20 bg-qwn-gold/90 px-6 py-3 text-[13px] font-display uppercase tracking-[0.16em] text-black hover:bg-qwn-carbon transition-all"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Policy body */}
      <section className="mx-auto max-w-5xl px-4 md:px-6 py-16 md:py-20">
        <h2 className="font-display text-xl uppercase tracking-[0.16em] text-white/90">Overview</h2>
        <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <p className="mt-5 text-neutral-300">
          This policy covers how returns, exchanges, and refunds are handled for QW̄N orders placed online.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-12">
          <section id="window">
            <h3 className="font-display uppercase tracking-[0.16em] text-white/90">Return Window</h3>
            <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <p className="mt-5 text-neutral-300">
              You may request a return within <span className="text-white/90">14 days</span> of delivery (EU consumer standard).
              Items must be unused, unwashed, and in original packaging with tags attached.
            </p>
          </section>

          <section id="eligibility">
            <h3 className="font-display uppercase tracking-[0.16em] text-white/90">Eligibility</h3>
            <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <ul className="mt-5 list-disc pl-5 text-neutral-300 space-y-2">
              <li>Apparel and accessories in resellable condition are eligible.</li>
              <li>Non-returnable: gift cards, final-sale items, worn or damaged goods.</li>
              <li>For hygiene: keep original condition; we may refuse worn/altered returns.</li>
            </ul>
          </section>

          <section id="process">
            <h3 className="font-display uppercase tracking-[0.16em] text-white/90">How to Start a Return</h3>
            <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <ol className="mt-5 list-decimal pl-5 text-neutral-300 space-y-2">
              <li>Email <a className="underline underline-offset-4 decoration-white/20 hover:decoration-white/60" href="mailto:contact@qawamun.com">contact@qawamun.com</a> with order number and item(s).</li>
              <li>We’ll confirm eligibility and provide instructions/return label if applicable.</li>
              <li>Ship the item back securely within 7 days of approval.</li>
            </ol>
          </section>

          <section id="refunds">
            <h3 className="font-display uppercase tracking-[0.16em] text-white/90">Refunds</h3>
            <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <p className="mt-5 text-neutral-300">
              Approved refunds are issued to the original payment method. Processing times vary by bank (typically 5–10 business days after inspection).
            </p>
          </section>

          <section id="exchanges">
            <h3 className="font-display uppercase tracking-[0.16em] text-white/90">Exchanges</h3>
            <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <p className="mt-5 text-neutral-300">
              For faster handling, return the item per the process above and place a new order for the replacement size/color.
            </p>
          </section>

          <section id="shipping">
            <h3 className="font-display uppercase tracking-[0.16em] text-white/90">Return Shipping Costs</h3>
            <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <p className="mt-5 text-neutral-300">
              If the return is due to our error (wrong/defective item), we cover the label. Otherwise, return shipping may be deducted from your refund.
            </p>
          </section>

          <section id="damaged">
            <h3 className="font-display uppercase tracking-[0.16em] text-white/90">Damaged or Wrong Item</h3>
            <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <p className="mt-5 text-neutral-300">
              Email us within 48 hours of delivery with photos and order number. We’ll prioritize a replacement or refund.
            </p>
          </section>

          <section id="consumer-rights">
            <h3 className="font-display uppercase tracking-[0.16em] text-white/90">EU/EEA Consumer Rights</h3>
            <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <p className="mt-5 text-neutral-300">
              Your statutory rights under EU/EEA law remain unaffected by this policy, including the 14-day right of withdrawal for online purchases.
            </p>
          </section>

          <section id="contact">
            <h3 className="font-display uppercase tracking-[0.16em] text-white/90">Need Help?</h3>
            <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <p className="mt-5 text-neutral-300">
              Contact{" "}
              <a
                className="underline underline-offset-4 decoration-white/20 hover:decoration-white/60"
                href="mailto:contact@qawamun.com"
              >
                contact@qawamun.com
              </a>{" "}
              with your order number. We’ll respond within 1–2 business days.
            </p>
          </section>
        </div>

        {/* Bottom CTAs */}
        <div className="mt-14 flex flex-wrap items-center gap-3">
          <a
            href="/armory"
            className="inline-flex items-center justify-center rounded-lg border border-qwn-gold/20 bg-qwn-gold/90 px-6 py-3 text-[12px] font-display uppercase tracking-[0.16em] text-black hover:bg-qwn-carbon transition-all"
          >
            Symbols of the Standard
          </a>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-[12px] font-display uppercase tracking-[0.16em] text-neutral-100 hover:bg-white/10 transition-all"
          >
            Back to The Keep
          </a>
        </div>
      </section>
    </main>
  );
}
