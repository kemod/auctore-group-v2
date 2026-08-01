import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container, Section } from "@/components/common";
import {
  AnimatedImage,
  FadeUp,
  Parallax,
} from "@/components/motion";

export default function AboutHero() {
  return (
    <Section className="overflow-hidden pt-44 pb-36">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-stone-50 via-white to-white" />

      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-[1fr_560px]">
          {/* Left */}

          <FadeUp>
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
                Auctore Group adalah perusahaan holding fashion yang
                berkomitmen membangun berbagai brand berkualitas melalui
                inovasi, craftsmanship, dan visi jangka panjang.
              </p>

              <div className="mt-12 flex flex-wrap gap-4">
                <Link
                  href="/brands"
                  className="group inline-flex h-14 items-center gap-2 rounded-full bg-black px-8 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-neutral-800 hover:shadow-xl"
                >
                  Lihat Brand

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex h-14 items-center rounded-full border border-neutral-300 bg-white px-8 text-sm font-medium text-neutral-900 transition-all duration-300 hover:-translate-y-1 hover:border-black hover:bg-neutral-50 hover:shadow-lg"
                >
                  Hubungi Kami
                </Link>
              </div>
            </div>
          </FadeUp>

          {/* Right */}

          <Parallax
            offset={30}
            className="justify-self-end"
          >
            <AnimatedImage>
              <div className="relative">
                {/* Background Glow */}

                <div className="absolute -top-12 -right-12 -z-10 h-72 w-72 rounded-full bg-stone-100 blur-3xl" />

                <div className="absolute -bottom-12 -left-12 -z-10 h-56 w-56 rounded-full bg-neutral-100 blur-3xl" />

                {/* Image */}

                <div className="overflow-hidden rounded-[36px] border border-neutral-200 bg-white shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
                  <Image
                    src="/images/about/about-hero.png"
                    alt="Tentang Auctore Group"
                    width={900}
                    height={1125}
                    priority
                    sizes="(max-width:768px)100vw,(max-width:1024px)80vw,560px"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                </div>
              </div>
            </AnimatedImage>
          </Parallax>
        </div>
      </Container>
    </Section>
  );
}