import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container, Section } from "@/components/common";

export default function AboutHero() {
  return (
    <Section className="overflow-hidden pt-44 pb-36">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-stone-50 via-white to-white" />

      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-[1fr_560px]">
          {/* Left */}

          <div className="max-w-xl">
            <span className="inline-flex items-center rounded-full border border-stone-200 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-neutral-600 shadow-sm">
              Tentang Kami
            </span>

            <h1 className="mt-8 font-playfair text-5xl font-bold leading-[1.02] tracking-[-0.04em] text-neutral-900 md:text-6xl xl:text-7xl">
              Membangun
              <br />
              Brand Yang
              <br />
              Bertahan Lama.
            </h1>

            <p className="mt-8 text-lg leading-8 text-neutral-600">
              Auctore Group adalah perusahaan holding fashion yang berkomitmen membangun berbagai brand berkualitas melalui inovasi, craftsmanship, dan visi jangka panjang.
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
                href="/contact"
                className="inline-flex h-14 items-center rounded-full border border-neutral-300 bg-white px-8 text-sm font-medium text-neutral-900 transition-all duration-300 hover:border-black hover:bg-neutral-50"
              >
                Hubungi Kami
              </Link>
            </div>
          </div>

          {/* Right */}

          <div className="relative">
            <div className="absolute -top-12 -right-12 -z-10 h-72 w-72 rounded-full bg-stone-100 blur-3xl" />

            <div className="overflow-hidden rounded-[36px] border border-neutral-200 bg-white shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
              <img
                src="/images/about/about-hero.webp"
                alt="About Auctore"
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}