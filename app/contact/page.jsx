// app/contact/page.jsx
import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "QW̄N | Contact Us.",
  description: "Reach the QW̄N team for press, partnerships, orders, and general inquiries.",
};

export default function ContactPage() {
  return (
    <main className="relative">
      {/* Övre guldlina */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-qwn-gold/40 to-transparent z-10" />

      {/* Hero – behåll samma höjd (py-24/md:py-28), men uppdatera textlayouten */}
      <section className="relative border-b border-white/10">
        {/* Bakgrund */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/hero.jpg"
            alt="Contact QW̄N"
            fill
            className="object-cover opacity-60"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />
        </div>

        {/* Innehåll (centrerat som på övriga heroes) */}
        <div className="mx-auto max-w-5xl px-4 md:px-6 py-24 md:py-28 text-center">
          <h1 className="mt-3 font-display uppercase tracking-[0.20em] leading-[1.1] text-[28px] md:text-[44px] lg:text-[52px] text-white/95 [text-wrap:balance] animate-soft-fade-up">
            Contact Us<span className="text-qwn-gold">.</span>
          </h1>

          {/* Divider (guld) */}
          <span className="mt-4 inline-block h-px w-24 bg-gradient-to-r from-transparent via-qwn-gold to-transparent opacity-80 animate-soft-fade-up" />

          {/* Lead */}
          <p className="mt-6 mx-auto max-w-3xl text-[15px] md:text-[16px] leading-relaxed text-white/80 [text-wrap:pretty] animate-soft-fade-up">
            For media, partnerships, orders, or general inquiries — we aim to respond within 1–2 business days.
          </p>

          {/* Microcopy */}
          <p className="mt-3 text-[13px] text-white/60 animate-soft-fade-up">
            We read every message.
          </p>

          {/* CTAs */}
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3 animate-soft-fade-up">
            <a
              href="#message"
              className="inline-flex items-center justify-center rounded-lg border border-qwn-gold/20 bg-qwn-gold/90 px-6 py-3 text-[13px] font-display uppercase tracking-[0.16em] text-black hover:bg-qwn-carbon transition-all shadow-[0_0_0_1px_rgba(255,255,255,0.06)]"
            >
              Send a Message
            </a>
            <Link
              href="mailto:contact@qawamun.com"
              className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-[13px] font-display uppercase tracking-[0.16em] text-neutral-100 hover:bg-white/10 transition-all"
            >
              Email Us
            </Link>
          </div>
        </div>
      </section>

      {/* Innehåll: Info + Form */}
      <section className="mx-auto max-w-5xl px-4 md:px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-5">
          {/* Kontaktinfo */}
          <aside className="md:col-span-2 space-y-6">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">Reach Us</p>
              <div className="mt-3 text-sm text-neutral-300">
                <p>
                  Email:{" "}
                  <a
                    href="mailto:contact@qawamun.com"
                    className="underline underline-offset-4 decoration-white/20 hover:decoration-white/60"
                  >
                    contact@qawamun.com
                  </a>
                </p>
              </div>
            </div>

            <div className="pt-4">
              <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">Follow</p>
              <div className="mt-3 flex items-center gap-5">
                <Link href="https://instagram.com/qwnummah" aria-label="Instagram @qwnummah" className="opacity-80 hover:opacity-100 transition" target="_blank">
                  <svg width="22" height="22" viewBox="0 0 24 24" className="fill-qwn-gold"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.2 2.3.4.6.2 1 .5 1.5 1 .5.5.8.9 1 1.5.2.4.3 1.1.4 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.9-.4 2.3-.2.6-.5 1-1 1.5-.5.5-.9.8-1.5 1-.4.2-1.1.3-2.3.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.2-2.3-.4-.6-.2-1-.5-1.5-1-.5-.5-.8-.9-1-1.5-.2-.4-.3-1.1-.4-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.9.4-2.3.2-.6.5-1 1-1.5.5-.5.9-.8 1.5-1 .4-.2 1.1-.3 2.3-.4C8.4 2.2 8.8 2.2 12 2.2Zm0 5.2a4.6 4.6 0 1 0 0 9.2 4.6 4.6 0 0 0 0-9.2Z"/></svg>
                </Link>
                <Link href="https://tiktok.com/@qwnummah" aria-label="TikTok @qwnummah" className="opacity-80 hover:opacity-100 transition" target="_blank">
                  <svg width="22" height="22" viewBox="0 0 24 24" className="fill-qwn-gold"><path d="M21 8.1a7.6 7.6 0 0 1-5-2v9.1a6.2 6.2 0 1 1-6.2-6.2c.3 0 .7 0 1 .1v3.1a3.2 3.2 0 1 0 2.2 3V2.5h3.2a4.5 4.5 0 0 0 4.8 4.4V8.1Z"/></svg>
                </Link>
                <Link href="https://youtube.com/@qwnummah" aria-label="YouTube @qwnummah" className="opacity-80 hover:opacity-100 transition" target="_blank">
                  <svg width="24" height="24" viewBox="0 0 24 24" className="fill-qwn-gold"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.5 12 3.5 12 3.5s-7.6 0-9.4.5A3 3 0 0 0 .5 6.2C0 7.9 0 12 0 12s0 4.1.5 5.8a3 3 0 0 0 2.1 2.1c1.7.5 9.4.5 9.4.5s7.6 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.7.5-5.8.5-5.8s0-4.1-.5-5.8ZM9.6 15.5V8.5L15.8 12l-6.2 3.5Z"/></svg>
                </Link>
                <Link href="https://x.com/qwnummah" aria-label="X @qwnummah" className="opacity-80 hover:opacity-100 transition" target="_blank">
                  <svg width="22" height="22" viewBox="0 0 24 24" className="fill-qwn-gold"><path d="M18.2 2h3.3l-7.2 8.2L23 22h-6.5l-5.1-6.6L5.5 22H2.2l7.7-8.8L1 2h6.6l4.6 6.1L18.2 2Zm-1.1 18h1.8L7 4H5.1l12 16Z"/></svg>
                </Link>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10">
              <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">Response Time</p>
              <p className="mt-2 text-sm text-neutral-300">Typically within 1–2 business days.</p>
            </div>
          </aside>

          {/* Formulär */}
          <div className="md:col-span-3" id="message">
            <div className="rounded-xl border border-white/10 bg-white/[0.05] p-6 md:p-8">
              <h2 className="font-display text-center text-lg uppercase tracking-[0.14em] text-neutral-100">
                Send a Message
              </h2>
              <div className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <p className="mt-3 text-sm text-neutral-400 text-center italic">We read every message.</p>
              <div className="mt-10">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
