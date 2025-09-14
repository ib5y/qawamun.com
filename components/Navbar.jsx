// components/Navbar.jsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isKeep = pathname === "/";

  const [scrolled, setScrolled] = useState(() => (isKeep ? false : true));

  useEffect(() => {
    if (isKeep) {
      setScrolled((window.scrollY || 0) > 24);
    } else {
      setScrolled(true);
    }
  }, [isKeep]);

  useEffect(() => {
    if (!isKeep) return;
    const onScroll = () => setScrolled((window.scrollY || 0) > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isKeep]);

  const showMenu = isKeep ? scrolled : true;

  // mobil toggles
  const [mobileOpen, setMobileOpen] = useState(false);
  const [missionOpen, setMissionOpen] = useState(false);

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
          {/* Vänster meny (desktop) */}
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

            <li className="relative group">
              <Link
                href="/mission"
                className="font-display text-[14px] text-neutral-200 hover:text-qwn-gold transition-colors inline-flex items-center gap-2"
              >
                OUR MISSION
                <svg
                  className="h-3 w-3 translate-y-[1px] opacity-70 group-hover:opacity-100 transition-opacity"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M7 10l5 5 5-5H7z" />
                </svg>
              </Link>

              {showMenu && (
                <div
                  className={[
                    "absolute left-1/2 -translate-x-1/2 top-full z-[60] w-32 mt-2",
                    "rounded-md border border-white/10 bg-qwn-carbon/90 backdrop-blur-md shadow-xl transition-all",
                    "opacity-0 translate-y-1 pointer-events-none",
                    "group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto",
                  ].join(" ")}
                >
                  <ul className="py-2 text-center">
                    <li>
                      <Link href="/codex" className="block px-3 py-2 text-[13px] hover:text-black">
                        The Codex
                      </Link>
                    </li>
                    <li>
                      <Link href="/oath" className="block px-3 py-2 text-[13px] hover:text-black">
                        The Oath
                      </Link>
                    </li>
                    <li>
                      <Link href="/vault" className="block px-3 py-2 text-[13px] hover:text-black">
                        The Vault
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
          </ul>

          {/* Logga */}
          <div className="mx-auto relative z-[70]">
            <Link
              href="/"
              aria-label="QW̄N — Qaw̄amūn Home"
              className="inline-flex items-center relative h-full w-[80px] sm:w-[100px] md:w-[120px] lg:w-[140px]"
            >
              <div
                className={[
                  "pointer-events-auto absolute left-1/2 top-1/2 -translate-x-1/2",
                  scrolled ? "-translate-y-[53%]" : "-translate-y-1/2",
                  "transition-transform duration-500",
                  scrolled ? "scale-[0.80]" : "scale-100 drop-shadow-[0_0_20px_rgba(0,0,0,0.7)]",
                ].join(" ")}
              >
                <div className="relative w-[500px] h-[150px]">
                  <Image
                    src="/images/qwn-logo.png"
                    alt="QW̄N — Qaw̄amūn Logo"
                    fill
                    priority
                    className="object-contain"
                  />
                </div>
              </div>
            </Link>
          </div>

          {/* Höger meny (desktop) */}
          <ul
            className={[
              "hidden md:flex items-center gap-8 uppercase tracking-[0.14em] absolute right-0",
              "transition-opacity duration-400 ease-out",
              showMenu ? "opacity-100" : "opacity-0 pointer-events-none",
            ].join(" ")}
          >
            <li>
              <Link href="/armory" className="font-display text-[14px] hover:text-qwn-gold">
                THE ARMORY
              </Link>
            </li>
            <li>
              <Link href="/contact" className="font-display text-[14px] hover:text-qwn-gold">
                CONTACT US
              </Link>
            </li>
          </ul>

          {/* Burger (mobil) */}
          <button
            className="md:hidden absolute right-4 z-[80] inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/20 bg-black/40"
            onClick={() => setMobileOpen((o) => !o)}
          >
            <span className="sr-only">Open menu</span>
            <div className="space-y-1">
              <span className="block h-0.5 w-5 bg-white" />
              <span className="block h-0.5 w-5 bg-white" />
              <span className="block h-0.5 w-5 bg-white" />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobilmeny drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-qwn-carbon/95 backdrop-blur-md border-t border-white/10">
          <ul className="flex flex-col gap-2 px-4 py-6 uppercase tracking-[0.14em]">

            {/* OUR MISSION */}
            <li className="flex flex-col items-center">
              <button
                onClick={() => setMissionOpen((m) => !m)}
                className="flex items-center gap-2 py-3 font-display text-neutral-200 hover:text-qwn-gold"
              >
                OUR MISSION
                <svg
                  className={`h-3 w-3 transition-transform ${missionOpen ? "rotate-180" : ""}`}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M7 10l5 5 5-5H7z" />
                </svg>
              </button>
              {missionOpen && (
                <ul className="flex flex-col gap-1 pb-2 text-center w-full">
                  <li>
                    <Link
                      href="/mission"
                      className="block py-2 text-sm text-neutral-300 hover:text-qwn-gold"
                      onClick={() => setMobileOpen(false)}
                    >
                      The Call
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/codex"
                      className="block py-2 text-sm text-neutral-300 hover:text-qwn-gold"
                      onClick={() => setMobileOpen(false)}
                    >
                      The Codex
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/oath"
                      className="block py-2 text-sm text-neutral-300 hover:text-qwn-gold"
                      onClick={() => setMobileOpen(false)}
                    >
                      The Oath
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/vault"
                      className="block py-2 text-sm text-neutral-300 hover:text-qwn-gold"
                      onClick={() => setMobileOpen(false)}
                    >
                      The Vault
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* THE ARMORY */}
            <li className="flex justify-center">
              <Link
                href="/armory"
                className="py-3 text-neutral-200 hover:text-qwn-gold"
                onClick={() => setMobileOpen(false)}
              >
                THE ARMORY
              </Link>
            </li>

            {/* CONTACT */}
            <li className="flex justify-center">
              <Link
                href="/contact"
                className="py-3 text-neutral-200 hover:text-qwn-gold"
                onClick={() => setMobileOpen(false)}
              >
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
