// app/armory/page.jsx
import ArmoryHero from "@/components/ArmoryHero";
import ArmoryProducts from "@/components/ArmoryProducts";
import { PRODUCTS } from "@/lib/products";

export const metadata = {
  title: "QW̄N | The Armory.",
  description:
    "Tools for the work. Symbols of the standard. The Armory equips men to live the code — not just wear it.",
};

export default function ArmoryPage() {
  return (
    
    <main className="relative">
      {/* Full-bleed video hero (no text/overlay; handled inside ArmoryHero) */}
      <ArmoryHero />

   {/* Armory intro — ultra clean, all black */}
<section className="relative mx-auto max-w-5xl px-4 md:px-6 py-16 md:py-24">
  {/* Overline */}
  <p className="text-[11px] uppercase tracking-[0.14em] text-white/50 text-center">
    Equipment for the Code
  </p>

  {/* Headline */}
  <h1 className="mt-3 font-display uppercase tracking-[0.18em] text-center text-3xl md:text-5xl text-white/95">
    The Armory
  </h1>

  {/* Divider */}
  <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

  {/* Lead — en tydlig, säljorienterad mening */}
  <p className="mx-auto mt-6 max-w-3xl text-center text-[15px] leading-relaxed text-white/80">
    Tools for the work. Symbols of the standard. QW̄N isn’t fashion — it’s a code of conduct.
  </p>

  {/* Body — två korta rader, stillsamt och fokuserat */}
  <div className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-white/65">
    <p>
      Built to endure. Black on black. No noise, no gimmicks. If it doesn’t serve the mission, it doesn’t make the cut.
    </p>
    <p className="mt-3">
      Quiet strength over loud signals. Let your actions speak — the kit simply follows.
    </p>
  </div>
</section>


      {/* Products with interactive filters (inside ArmoryProducts) */}
      <ArmoryProducts products={PRODUCTS} />
    </main>
  );
}
