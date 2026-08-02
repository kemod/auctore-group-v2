import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { MarketplaceCard } from "@/components/ui";

export default function HeroContent() {
  return (
    <div className="max-w-xl">
      <span className="inline-flex items-center rounded-full border border-stone-200 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-neutral-600 shadow-sm">
        Fashion Holding Company
      </span>

      <h1 className="mt-8 font-playfair text-5xl font-bold leading-[1.02] tracking-[-0.04em] text-neutral-900 md:text-6xl xl:text-7xl">
        Membangun
        <br />
        Masa Depan
        <br />
        Brand Fashion.
      </h1>

      <p className="mt-8 text-lg leading-8 text-neutral-600">
        Auctore Group mengembangkan berbagai brand fashion yang mengutamakan
        kualitas, inovasi, dan craftsmanship untuk menghadirkan produk yang
        relevan bagi gaya hidup modern.
      </p>

      <div className="mt-12">
        <Link
          href="/brands"
          className="group inline-flex h-14 items-center gap-2 rounded-full bg-black px-8 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-neutral-800 hover:shadow-xl"
        >
          Explore Brands

          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="mt-12">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-neutral-500">
          Official Store
        </p>

        <div className="mt-5 space-y-4">
          <MarketplaceCard
            logo="/images/brand/jenn-aira-logo.png"
            brand="Jenn Aira"
            marketplace="Official Shopee Store"
            marketplaceIcon="/icons/shopee.svg"
            marketplaceHref="https://id.shp.ee/fJ4RSuH"
            instagramHref="https://www.instagram.com/jenn_aira2025?igsh=MWMzcDd1bWRpbGp4bA=="
            hoverColor="hover:border-[#EE4D2D]"
          />

          <MarketplaceCard
            logo="/images/brand/auctore-logo.png"
            brand="Auctfits"
            marketplace="Official TikTok Shop"
            marketplaceIcon="/icons/tiktok.svg"
            marketplaceHref=" https://vt.tiktok.com/ZS9hBKYUuLsdV-T4slC/"
            instagramHref="https://www.instagram.com/auctstore?igsh=Y2R2czBxdGJydHFr"
            hoverColor="hover:border-black"
          />
        </div>
      </div>
    </div>
  );
}