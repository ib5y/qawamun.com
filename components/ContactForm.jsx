// components/ContactForm.jsx
"use client";

import { useState } from "react";

const SUBJECTS = [
  { value: "general", label: "General inquiry" },
  { value: "press", label: "Press / Media" },
  { value: "partnerships", label: "Partnerships / Collab" },
  { value: "orders", label: "Orders / Support" },
];

export default function ContactForm() {
  const [state, setState] = useState({ loading: false, ok: false, error: "" });

  async function onSubmit(e) {
    e.preventDefault();
    setState({ loading: true, ok: false, error: "" });

    const form = new FormData(e.currentTarget);
    // Honeypot
    if (form.get("company")) {
      setState({ loading: false, ok: true, error: "" });
      e.currentTarget.reset();
      return;
    }

    // Client-validering (minimal, servern validerar också)
    const name = (form.get("name") || "").toString().trim();
    const email = (form.get("email") || "").toString().trim();
    const message = (form.get("message") || "").toString().trim();

    if (!name || !email || !message) {
      setState({ loading: false, ok: false, error: "Name, Email och Message är obligatoriska." });
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: form,
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Something went wrong.");
      setState({ loading: false, ok: true, error: "" });
      e.currentTarget.reset();
    } catch (err) {
      setState({ loading: false, ok: false, error: err.message || "Failed to send." });
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {/* Honeypot (dolt för människor) */}
      <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label className="block text-xs uppercase tracking-[0.16em] text-neutral-400 mb-2">Name *</label>
          <input
            name="name"
            required
            placeholder="Your name"
            className="w-full rounded-md border border-white/15 bg-white/5 px-4 py-3 text-sm text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-white/20"
          />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-[0.16em] text-neutral-400 mb-2">Email *</label>
          <input
            type="email"
            name="email"
            required
            placeholder="you@example.com"
            className="w-full rounded-md border border-white/15 bg-white/5 px-4 py-3 text-sm text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-white/20"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label className="block text-xs uppercase tracking-[0.16em] text-neutral-400 mb-2">Subject</label>
          <select
            name="subject"
            defaultValue="general"
            className="w-full rounded-md border border-white/15 bg-white/5 px-4 py-3 text-sm text-neutral-100 focus:outline-none focus:ring-2 focus:ring-white/20"
          >
            {SUBJECTS.map((s) => (
              <option key={s.value} value={s.value}>{s.label}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs uppercase tracking-[0.16em] text-neutral-400 mb-2">Phone (optional)</label>
          <input
            type="tel"
            name="phone"
            placeholder="+46 ..."
            className="w-full rounded-md border border-white/15 bg-white/5 px-4 py-3 text-sm text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-white/20"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs uppercase tracking-[0.16em] text-neutral-400 mb-2">Message *</label>
        <textarea
          name="message"
          required
          rows={6}
          placeholder="Tell us what you need. The more specific, the better."
          className="w-full rounded-md border border-white/15 bg-white/5 px-4 py-3 text-sm text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-white/20"
        />
      </div>

      <div className="flex items-center gap-3">
        <input id="policy" type="checkbox" required className="h-4 w-4 rounded border-white/20 bg-white/5" />
        <label htmlFor="policy" className="text-xs text-neutral-400">
          I agree to the <a href="/privacy-policy" className="underline underline-offset-4 hover:text-neutral-200">Privacy Policy</a>.
        </label>
      </div>

      {state.error && (
        <p className="text-sm text-red-400/90">{state.error}</p>
      )}
      {state.ok && (
        <p className="text-sm text-qwn-gold">Thank you — your message has been received.</p>
      )}

      <button
        type="submit"
        disabled={state.loading}
        className="inline-flex items-center justify-center rounded-md border border-white/15 bg-qwn-gold/90 px-5 py-3 text-sm uppercase tracking-[0.14em] text-black hover:bg-qwn-gold transition-colors disabled:opacity-60"
      >
        {state.loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
