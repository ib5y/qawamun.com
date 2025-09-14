// components/ArmoryProducts.jsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ArmoryProducts({ products }) {
  const [filter, setFilter] = useState("all");

  // Filtrera produkter baserat på valt filter
  const filteredProducts =
    filter === "all"
      ? products
      : products.filter((p) => {
          if (filter === "tshirts") return p.tag.toLowerCase() === "tee";
          if (filter === "hoodies") return p.tag.toLowerCase() === "hoodie";
          if (filter === "accessories") return p.tag.toLowerCase() === "accessory";
          return true;
        });

  return (
    <section className="mx-auto max-w-6xl px-4 md:px-6 pb-20">
      {/* Filterknappar */}
      <div className="mb-6 flex flex-wrap items-center justify-center gap-2 text-[11px] uppercase tracking-[0.14em] w-full">
        <button
          onClick={() => setFilter("tshirts")}
          className={`rounded-md border px-2 py-1 transition-colors ${
            filter === "tshirts"
              ? "border-white/20 bg-white/[0.08] text-white"
              : "border-white/10 bg-white/[0.03] text-white/50 hover:bg-white/[0.06]"
          }`}
        >
          T-Shirts
        </button>
        <button
          onClick={() => setFilter("hoodies")}
          className={`rounded-md border px-2 py-1 transition-colors ${
            filter === "hoodies"
              ? "border-white/20 bg-white/[0.08] text-white"
              : "border-white/10 bg-white/[0.03] text-white/50 hover:bg-white/[0.06]"
          }`}
        >
          Hoodies
        </button>
        <button
          onClick={() => setFilter("accessories")}
          className={`rounded-md border px-2 py-1 transition-colors ${
            filter === "accessories"
              ? "border-white/20 bg-white/[0.08] text-white"
              : "border-white/10 bg-white/[0.03] text-white/50 hover:bg-white/[0.06]"
          }`}
        >
          Accessories
        </button>
        <button
          onClick={() => setFilter("all")}
          className={`rounded-md border px-2 py-1 transition-colors ${
            filter === "all"
              ? "border-white/20 bg-white/[0.08] text-white"
              : "border-white/10 bg-white/[0.03] text-white/50 hover:bg-white/[0.06]"
          }`}
        >
          Show All
        </button>
      </div>

      {/* Produktgrid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <div
            key={product.slug}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-[0_0_1px_#ffffff20]"
          >
            {/* Produktbild */}
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={
                  product.image
                    ? product.image
                    : "/images/products/placeholder.png"
                }
                alt={product.name}
                fill
                sizes="(min-width:1024px) 25vw, (min-width:768px) 33vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                priority={product.priority}
              />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_0%,transparent_0%,transparent_60%,rgba(0,0,0,0.35)_100%)]" />
            </div>

            {/* Produktinfo */}
            <div className="p-4 md:p-5">
              <div className="flex items-baseline justify-between gap-3">
                <h4 className="font-display uppercase tracking-[0.12em] text-white/90 text-sm">
                  {product.name}
                </h4>
                {product.price && (
                  <span className="text-sm text-white/70">{product.price}</span>
                )}
              </div>
              {product.subtitle && (
                <p className="mt-1 text-xs text-white/50">{product.subtitle}</p>
              )}
              {product.tag && (
                <span className="mt-3 inline-block rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 text-[11px] uppercase tracking-[0.14em] text-white/60">
                  {product.tag}
                </span>
              )}

              {/* CTA */}
              <div className="mt-4 flex items-center gap-2">
                <Link
                  href={`/armory/${product.slug}`}
                  className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.14em] text-neutral-100 hover:bg-white/10 transition-colors"
                >
                  View
                </Link>
                <button
                  type="button"
                  disabled
                  className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.14em] text-neutral-300 opacity-60 cursor-not-allowed"
                  title="Checkout not connected yet"
                >
                  Add to Bag
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
