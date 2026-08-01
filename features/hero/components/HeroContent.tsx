import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroContent() {
  return (
    <div className="max-w-xl">
      <span className="inline-flex items-center rounded-full border border-stone-200 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-neutral-600 shadow-sm">
        Fashion Holding Company
      </span>

      <h1 className="mt-8 font-playfair text-5xl font-bold leading-[1.02] tracking-[-0.04em] text-neutral-900 md:text-6xl xl:text-7xl">
        Building
        <br />
        The Future of
        <br />
        Fashion Brands.
      </h1>

      <p className="mt-8 text-lg leading-8 text-neutral-600">
        Auctore Group develops timeless fashion brands through exceptional
        craftsmanship, thoughtful innovation, and a long-term vision that
        shapes modern lifestyle businesses.
      </p>

      <div className="mt-12 flex flex-wrap gap-4">
        <Link
          href="/brands"
          className="inline-flex h-14 items-center gap-2 rounded-full bg-black px-8 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-neutral-800"
        >
          Explore Brands

          <ArrowRight className="h-4 w-4" />
        </Link>

        <Link
          href="/about"
          className="inline-flex h-14 items-center rounded-full border border-neutral-300 px-8 text-sm font-medium transition hover:border-black hover:bg-neutral-50"
        >
          Our Story
        </Link>
      </div>
    </div>
  );
}