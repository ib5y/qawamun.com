// components/Footer.jsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black">
      {/* Subtil guldglöd ovanför */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-qwn-gold/30 to-transparent" />

      <div className="mx-auto max-w-5xl px-4 py-12 md:py-14">
<div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-start gap-10">
          {/* Left column: Reach Us */}
          <div>
            <h3 className="text-sm tracking-widest text-neutral-400 font-display mb-3">
              REACH US
            </h3>
            <div className="text-sm leading-relaxed text-neutral-300 space-y-1">
<p>
  <a
    href="mailto:contact@qawamun.com"
    className="group inline-flex items-center gap-2 hover:text-qwn-gold transition-colors"
  >
    {/* Email icon */}
<svg
  width="18"
  height="18"
  viewBox="0 0 24 24"
  fill="none"
  aria-hidden="true"
  className="opacity-80 group-hover:opacity-100"
>
  <rect
    x="3"
    y="5"
    width="18"
    height="14"
    rx="2"
    stroke="currentColor"
    strokeWidth="1.5"
  />
  <path
    d="M3 7l9 6 9-6"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>

    <span>contact@qawamun.com</span>
  </a>
</p>


              {/* Policies links */}
              <p className="pt-2 text-neutral-400">
                <Link
                  href="/privacy"
                  className="hover:text-qwn-gold transition-colors underline-offset-4 hover:underline"
                >
                  Privacy Policy
                </Link>
                <span className="px-2 text-neutral-600">|</span>
                <Link
                  href="/returns"
                  className="hover:text-qwn-gold transition-colors underline-offset-4 hover:underline"
                >
                  Return &amp; Refund Policy
                </Link>
              </p>
            </div>
          </div>
{/* Center logo between Reach Us and Follow Us (above the rule) */}
<div className="flex justify-center md:justify-center self-center md:self-start -mt-8 md:-mt-8">
  <Image
    src="/images/qwnlogo_black_transp.png"
    alt="QW̄N Logo"
    width={160}
    height={48}
    className="opacity-90"
  />
</div>


          {/* Right column: Follow Us */}
          <div className="flex flex-col items-start md:items-end gap-4">
            <h3 className="text-sm tracking-widest text-neutral-400 font-display">
              FOLLOW US
            </h3>
            <div className="flex items-center gap-5">
              {/* Instagram */}
              <Link
                href="https://www.instagram.com/qwnummah"
                aria-label="Instagram"
                className="hover:opacity-80 transition-opacity"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" className="fill-neutral-300">
                  <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.2 2.3.4.6.2 1 .5 1.5 1 .5.5.8.9 1 1.5.2.4.3 1.1.4 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.9-.4 2.3-.2.6-.5 1-1 1.5-.5.5-.9.8-1.5 1-.4.2-1.1.3-2.3.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.2-2.3-.4-.6-.2-1-.5-1.5-1-.5-.5-.8-.9-1-1.5-.2-.4-.3-1.1-.4-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.9.4-2.3.2-.6.5-1 1-1.5.5-.5.9-.8 1.5-1 .4-.2 1.1-.3 2.3-.4C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.1 0-3.5 0-4.7.1-1 .1-1.6.2-1.9.3-.5.2-.8.4-1.1.7-.3.3-.5.6-.7 1.1-.1.3-.2.9-.3 1.9-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c.1 1 .2 1.6.3 1.9.2.5.4.8.7 1.1.3.3.6.5 1.1.7.3.1.9.2 1.9.3 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1-.1 1.6-.2 1.9-.3.5-.2.8-.4 1.1-.7.3-.3.5-.6.7-1.1.1-.3.2-.9.3-1.9.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1-.2-1.6-.3-1.9-.2-.5-.4-.8-.7-1.1-.3-.3-.6-.5-1.1-.7-.3-.1-.9-.2-1.9-.3-1.2-.1-1.6-.1-4.7-.1Zm0 3.4a6.6 6.6 0 1 1 0 13.2 6.6 6.6 0 0 1 0-13.2Zm0 2a4.6 4.6 0 1 0 0 9.2 4.6 4.6 0 0 0 0-9.2Zm5.4-2.3a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                </svg>
              </Link>
              {/* TikTok */}
              <Link
                href="https://www.tiktok.com/@qwnummah"
                aria-label="TikTok"
                className="hover:opacity-80 transition-opacity"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" className="fill-neutral-300">
                  <path d="M21 8.1a7.6 7.6 0 0 1-5-2v9.1a6.2 6.2 0 1 1-6.2-6.2c.3 0 .7 0 1 .1v3.1a3.2 3.2 0 1 0 2.2 3V2.5h3.2a4.5 4.5 0 0 0 4.8 4.4V8.1Z" />
                  <path d="M232,88.7V120a104,104,0,1,1-120-102.7,8,8,0,0,1,9.4,7.9V152a24,24,0,1,0,24-24,8,8,0,0,1-8-8V40a8,8,0,0,1,13.3-6.2A88.3,88.3,0,0,0,232,88.7Z" />
                </svg>
              </Link>
              {/* YouTube */}
              <Link
                href="https://www.youtube.com/@qwnummah"
                aria-label="YouTube"
                className="hover:opacity-80 transition-opacity"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" className="fill-neutral-300">
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.5 12 3.5 12 3.5s-7.6 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.8.6 9.4.6 9.4.6s7.6 0 9.4-.6a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-5.8 31 31 0 0 0-.5-5.8ZM9.6 15.5V8.5l6.2 3.5-6.2 3.5Z" />
                </svg>
              </Link>
              {/* X */}
              <Link
                href="https://www.x.com/qwnummah"
                aria-label="X"
                className="hover:opacity-80 transition-opacity"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" className="fill-neutral-300">
                  <path d="M18.2 2h3.3l-7.2 8.2L23 22h-6.5l-5.1-6.6L5.5 22H2.2l7.7-8.8L1 2h6.6l4.6 6.1L18.2 2Zm-1.1 18h1.8L7 4H5.1l12 16Z" />
                </svg>
              </Link>
            </div>

            {/* CTA: Join the Brotherhood (under Follow Us) */}
{/* CTA: Join the Brotherhood (under Follow Us) */}
<Link
  href="/oath"
  className="inline-flex items-center rounded-md border border-qwn-gold/40
             px-2.5 py-1 text-[10px] leading-none uppercase tracking-[0.12em]
             text-qwn-gold hover:bg-qwn-gold/10 transition-colors"
>
  Join the Brotherhood
</Link>

          </div>
        </div>

        {/* Bottom row */}
        <div className="border-t border-white/10 pt-6 text-center md:text-left text-xs text-neutral-500 flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© 2025 QW̄N | Qaw̄amūn. All rights belong to Allāh.</p>

          <p className="italic text-neutral-400">
            Forged by Faith. Driven by Duty. Hardened by Honor.
          </p>
        </div>
      </div>
    </footer>
  );
} 


