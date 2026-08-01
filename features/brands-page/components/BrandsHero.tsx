import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

import { Container, Section } from "@/components/common";

export default function BrandsHero() {
  return (
    <Section className="overflow-hidden pt-44 pb-36">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-stone-50 via-white to-white" />

      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-[1fr_560px]">
          {/* Left */}

          <div className="max-w-xl">
            <span className="inline-flex items-center rounded-full border border-stone-200 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-neutral-600 shadow-sm">
              Brand Kami
            </span>

            <h1 className="mt-8 font-playfair text-5xl font-bold leading-[1.02] tracking-[-0.04em] text-neutral-900 md:text-6xl xl:text-7xl">
              Membangun
              <br />
              Brand Dengan
              <br />
              Tujuan.
            </h1>

            <p className="mt-8 text-lg leading-8 text-neutral-600">
             Setiap brand di bawah Auctore Group dibangun dengan identitas yang berbeda, namun memiliki komitmen yang sama terhadap kualitas, inovasi, dan pertumbuhan jangka panjang.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex h-14 items-center gap-2 rounded-full bg-black px-8 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-neutral-800"
              >
                Hubungi Kami

                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Right */}

          <div className="relative">
            <div className="absolute -top-12 -right-12 -z-10 h-72 w-72 rounded-full bg-stone-100 blur-3xl" />

            <div className="overflow-hidden rounded-[36px] border border-neutral-200 bg-white shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
              <Image
                src="/images/brands/brands-hero.webp"
                alt="Our Brands"
                width={900}
                height={1125}
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}