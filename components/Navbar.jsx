// components/Navbar.jsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isKeep = pathname === "/";

  // 1) Initiera enligt route: på icke-hem ska menyn vara synlig direkt
  const [scrolled, setScrolled] = useState(() => (isKeep ? false : true));

  // 2) Reagera på route-byten: tvinga rätt state
  useEffect(() => {
    if (isKeep) {
      // Hem: styrs av scroll
      setScrolled((window.scrollY || 0) > 24);
    } else {
      // Övriga sidor: alltid "scrolled"-läge
      setScrolled(true);
    }
  }, [isKeep]);

  // 3) Bara lyssna på scroll på The Keep
  useEffect(() => {
    if (!isKeep) return;
    const onScroll = () => setScrolled((window.scrollY || 0) > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isKeep]);

  // 4) Härled meny-synlighet: på icke-hem = alltid true
  const showMenu = isKeep ? scrolled : true;

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50",
        "transition-[background-color,backdrop-filter] duration-400 ease-out will-change-[background-color,backdrop-filter]",
        scrolled ? "backdrop-blur-md bg-qwn-carbon/55" : "bg-transparent",
      ].join(" ")}
      aria-label="Primary"
    >
      <nav className="mx-auto max-w-4xl px-4 md:px-6">
        <div className="relative flex items-center justify-between h-20 md:h-20">
          {/* Vänster meny */}
          <ul
            className={[
              "hidden md:flex items-center gap-8 uppercase tracking-[0.14em] absolute left-0",
              "transition-opacity duration-400 ease-out",
              showMenu ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
            ].join(" ")}
          >
            <li>
              <Link
                href="/"
                className="font-display text-[14px] text-neutral-200 hover:text-qwn-gold transition-colors"
              >
                THE KEEP
              </Link>
            </li>

            {/* OUR MISSION + submenu */}
            <li className="relative group">
              <Link
                href="/mission"
                className="font-display text-[14px] text-neutral-200 hover:text-qwn-gold transition-colors inline-flex items-center gap-2"
                aria-haspopup="true"
                aria-expanded="false"
              >
                OUR MISSION
                <svg
                  className="h-3 w-3 translate-y-[1px] opacity-70 group-hover:opacity-100 transition-opacity"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M7 10l5 5 5-5H7z" />
                </svg>
              </Link>

              {/* Submenu: visas när menyn är synlig */}
              {showMenu && (
                <div
                  className={[
                    "absolute left-1/2 -translate-x-1/2 top-full z-[60] w-32 mt-2",
                    "before:content-[''] before:absolute before:-top-2 before:left-0 before:right-0 before:h-3",
                    "opacity-0 translate-y-1 pointer-events-none",
                    "group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto",
                    "focus-within:opacity-100 focus-within:translate-y-0 focus-within:pointer-events-auto",
                    "rounded-md border border-white/10 bg-qwn-carbon/90 backdrop-blur-md ring-1 ring-white/10 shadow-xl",
                    "transition-all duration-150",
                  ].join(" ")}
                  role="menu"
                  aria-label="Our Mission submenu"
                >
                  <ul className="py-2 text-center">
                    <li>
                      <Link
                        href="/codex"
                        className="block px-3 py-2 text-[13px] tracking-wide text-neutral-200 hover:text-black transition-colors"
                        role="menuitem"
                      >
                        The Codex
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/oath"
                        className="block px-3 py-2 text-[13px] tracking-wide text-neutral-200 hover:text-black transition-colors"
                        role="menuitem"
                      >
                        The Oath
                      </Link>
                    </li>
                         <li>
                      <Link
                        href="/vault"
                        className="block px-3 py-2 text-[13px] tracking-wide text-neutral-200 hover:text-black transition-colors"
                        role="menuitem"
                      >
                        The Vault
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
          </ul>

{/* Logga – liten klickyta, stor visuell logga (overflow), behåller skal-animation */}
<div className="mx-auto relative z-[70]">
  <Link
    href="/"
    aria-label="QW̄N — Qaw̄amūn Home"
    className="inline-flex items-center relative h-full w-[80px] sm:w-[100px] md:w-[120px] lg:w-[140px]"
  >
    {/* ÄNDRA HÄR: pointer-events-none -> pointer-events-auto (eller ta bort helt) */}
    <div
      className={[
        "pointer-events-auto absolute left-1/2 top-1/2 -translate-x-1/2",
        scrolled ? "-translate-y-[53%]" : "-translate-y-1/2",
        "will-change-transform transition-transform duration-500 [transition-timing-function:cubic-bezier(0.2,0.7,0.2,1)]",
        scrolled ? "scale-[0.80] drop-shadow-none" : "scale-100 drop-shadow-[0_0_20px_rgba(0,0,0,0.7)]",
      ].join(" ")}
    >
      <div className="relative w-[500px] h-[150px]">
        <Image
          src="/images/qwn-logo.png"
          alt="QW̄N — Qaw̄amūn Logo"
          fill
          priority
          className="object-contain"
          sizes="420px"
        />
      </div>
    </div>
  </Link>
</div>
          {/* Höger meny */}
          <ul
            className={[
              "hidden md:flex items-center gap-8 uppercase tracking-[0.14em] absolute right-0",
              "transition-opacity duration-400 ease-out",
              showMenu ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
            ].join(" ")}
          >
            <li>
              <Link
                href="/armory"
                className="font-display text-[14px] text-neutral-200 hover:text-qwn-gold transition-colors"
              >
                THE ARMORY
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="font-display text-[14px] text-neutral-200 hover:text-qwn-gold transition-colors"
              >
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
