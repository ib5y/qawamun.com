// components/ArmoryHero.jsx
"use client";

import { useEffect, useRef } from "react";

export default function ArmoryHero() {
  const videoRef = useRef(null);
  const stopTimerRef = useRef(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    // Säkerställ rätt initialtillstånd (pause tills scroll sker)
    v.muted = true; // krävs för att .play() ska tillåtas utan user gesture
    const onLoaded = () => {
      try {
        v.pause();
      } catch {}
    };
    v.addEventListener("loadedmetadata", onLoaded, { once: true });

    // Spela vid scroll, pausa strax efter att scroll slutat
    const PAUSE_DELAY = 2500; // ms efter sista scroll-event
    const onScroll = () => {
      // Starta/fortsätt uppspelning
      if (v.paused) {
        v.play().catch(() => {
          // Ignorera autoplay-restriktioner i edge-cases
        });
      }
      // Debounce: pausa efter en liten stund utan scroll
      if (stopTimerRef.current) clearTimeout(stopTimerRef.current);
      stopTimerRef.current = setTimeout(() => {
        try {
          v.pause();
        } catch {}
      }, PAUSE_DELAY);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    // Pausa om fliken tappas (spara resurser)
    const onVisibility = () => {
      if (document.hidden) {
        try {
          v.pause();
        } catch {}
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", onVisibility);
      if (stopTimerRef.current) clearTimeout(stopTimerRef.current);
      v.removeEventListener("loadedmetadata", onLoaded);
    };
  }, []);

  return (
    <section className="relative h-[80vh] md:h-[86vh] overflow-hidden border-b border-white/10">
      {/* Video background */}
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        // Viktigt: ingen autoplay; vi styr play/pause via scroll
        autoPlay={false}
        loop
        muted
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src="/videos/vfaceless1.webm" type="video/webm" />
        <source src="/videos/vfaceless1.mp4" type="video/mp4" />
      </video>

      {/* Top gradient — more dramatic */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-black/95 via-black/80 to-transparent" />

      {/* Bottom gradient — more dramatic */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black/95 via-black/80 to-transparent" />

      <span className="sr-only">QW̄N — The Armory hero video</span>
    </section>
  );
}
