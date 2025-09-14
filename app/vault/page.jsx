// app/vault/page.jsx
import Link from "next/link";
import Image from "next/image";
import VaultHero from "@/components/VaultHero";

export const dynamic = "force-static";

export default function VaultPage() {
  // Define wallpaper entries once so you can just drop files later
  const wallpapers = [
    {
      title: "QW̄N Emblem — Gold on Carbon",
      slug: "emblem-gold-carbon",
      preview: "/images/wallpapers/emblem-gold-carbon/preview.jpg",
      alt: "QW̄N emblem in gold over carbon texture",
    },
    {
      title: "QW̄N Monogram — Onyx Field",
      slug: "monogram-onyx-field",
      preview: "/images/wallpapers/monogram-onyx-field/preview.jpg",
      alt: "Minimal QW̄N monogram over onyx background",
    },
    {
      title: "The Sentinel — Night Watch",
      slug: "sentinel-night-watch",
      preview: "/images/wallpapers/sentinel-night-watch/preview.jpg",
      alt: "Warrior silhouette standing vigilant at night",
    },
    {
      title: "The Sentinel — Sandstorm",
      slug: "sentinel-sandstorm",
      preview: "/images/wallpapers/sentinel-sandstorm/preview.jpg",
      alt: "Warrior figure advancing through dust and sand",
    },
    {
      title: "Banner of Resolve — Minimal Black",
      slug: "banner-resolve-minimal-black",
      preview: "/images/wallpapers/banner-resolve-minimal-black/preview.jpg",
      alt: "Minimal black banner with subtle QW̄N detailing",
    },
    {
      title: "Standard Bearers — March",
      slug: "standard-bearers-march",
      preview: "/images/wallpapers/standard-bearers-march/preview.jpg",
      alt: "Warriors moving in formation carrying standards",
    },
  ];

  return (
    <main className="relative">
      <VaultHero />

      <section className="mx-auto max-w-6xl px-4 md:px-6 py-20">
        <div className="text-center">
          <p className="font-[var(--font-inter)] text-sm uppercase tracking-[0.16em] text-white/60">
            Our Mission
          </p>
          <h1 className="mt-2 font-[var(--font-league)] text-4xl md:text-5xl uppercase tracking-[0.16em]">
            The Vault
          </h1>
          <p className="mt-4 font-[var(--font-inter)] text-white/70">
            Archives and studies to sharpen judgment. Tools to deepen resolve.
          </p>
          <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>

        {/* Studies */}
        <div className="mt-16">
          <h2 className="font-[var(--font-league)] text-2xl md:text-3xl uppercase tracking-[0.16em]">
            Studies
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <article
                key={n}
                className="group rounded-2xl border border-white/10 bg-qwn-onyx/50 p-6 hover:border-white/20 transition-colors"
              >
                <div className="aspect-[4/5] w-full rounded-xl border border-white/10 bg-black/40" />
                <h3 className="mt-4 font-[var(--font-league)] uppercase tracking-[0.14em]">
                  Placeholder Study {n}
                </h3>
                <p className="mt-2 font-[var(--font-inter)] text-white/70">
                  A concise abstract that frames the question, method, and what
                  to do with the insight.
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Resources */}
        <div className="mt-16">
          <h2 className="font-[var(--font-league)] text-2xl md:text-3xl uppercase tracking-[0.16em]">
            Resources
          </h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Field Checklists (PDF) — Draft",
              "Reading Stack — Curated Essentials",
              "Drills & Protocols — Weekly Cycle",
            ].map((r, i) => (
              <li
                key={i}
                className="flex items-center justify-between rounded-xl border border-white/10 bg-qwn-onyx/50 p-4"
              >
                <span className="font-[var(--font-inter)] text-white/80">
                  {r}
                </span>
                <span className="rounded-full border border-white/20 px-4 py-1 font-[var(--font-league)] text-xs uppercase tracking-[0.12em] text-white/70">
                  Coming Soon
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Wallpapers */}
        <div className="mt-16">
            <h2 className="font-[var(--font-league)] text-2xl md:text-3xl uppercase tracking-[0.16em]">
              Banners of Resolve
            </h2>
            <p className="mt-3 font-[var(--font-inter)] text-white/70">
              Wallpapers for Desktop, Phone, and Tablet.
            </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {wallpapers.map((wp) => (
              <article
                key={wp.slug}
                className="group rounded-2xl border border-white/10 bg-qwn-onyx/50 p-6 hover:border-white/20 transition-colors"
              >
                {/* Preview (uses wp.preview) */}
                <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-white/10 bg-black/40">
                  <Image
                    src={wp.preview}
                    alt={wp.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                {/* Title & Downloads */}
                <h3 className="mt-4 font-[var(--font-league)] uppercase tracking-[0.14em]">
                  {wp.title}
                </h3>
                <p className="mt-1 text-sm text-white/60 font-[var(--font-inter)]">
                  {wp.alt}
                </p>

                <div className="mt-4 grid grid-cols-3 gap-2">
                  <a
                    href={`/wallpapers/${wp.slug}/${wp.slug}-desktop-3840x2160.jpg`}
                    download
                    className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 px-3 py-2 text-[11px] font-[var(--font-league)] uppercase tracking-[0.14em] text-neutral-100 hover:bg-white/10 transition-colors"
                  >
                    Desktop
                  </a>
                  <a
                    href={`/wallpapers/${wp.slug}/${wp.slug}-tablet-2732x2048.jpg`}
                    download
                    className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 px-3 py-2 text-[11px] font-[var(--font-league)] uppercase tracking-[0.14em] text-neutral-100 hover:bg-white/10 transition-colors"
                  >
                    Tablet
                  </a>
                  <a
                    href={`/wallpapers/${wp.slug}/${wp.slug}-phone-1290x2796.jpg`}
                    download
                    className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 px-3 py-2 text-[11px] font-[var(--font-league)] uppercase tracking-[0.14em] text-neutral-100 hover:bg-white/10 transition-colors"
                  >
                    Phone
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Notes on sizes */}
          <p className="italic mt-6 text-[12px] text-white/50 text-center font-[var(--font-inter)]">
            Suggested sizes: Desktop&nbsp;3840×2160, Tablet&nbsp;2732×2048, Phone&nbsp;1290×2796.
            Name your exports exactly as the download links above for automatic delivery.
          </p>
        </div>

        {/* CTAs */}
        <div className="mt-20 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/codex"
            className="rounded-full border border-white/20 bg-white/5 px-6 py-3 font-[var(--font-league)] uppercase tracking-[0.14em] hover:bg-white/10"
          >
            Read the Codex
          </Link>
          <Link
            href="/oath"
            className="rounded-full border border-white/20 bg-white/5 px-6 py-3 font-[var(--font-league)] uppercase tracking-[0.14em] hover:bg-white/10"
          >
            Commit to the Oath
          </Link>
        </div>
      </section>
    </main>
  );
}
