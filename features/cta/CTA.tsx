import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container, Section } from "@/components/common";
import { FadeUp } from "@/components/motion";

export default function CTA() {
  return (
    <Section background="black" className="overflow-hidden">
      <Container>
        <FadeUp>
          <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-neutral-950 px-10 py-20 md:px-16">
            {/* Background Glow */}

            <div className="absolute -top-28 -right-28 h-80 w-80 rounded-full bg-white/5 blur-3xl" />

            <div className="absolute -bottom-28 -left-28 h-80 w-80 rounded-full bg-white/5 blur-3xl" />

            <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.03] blur-[120px]" />

            <div className="relative mx-auto max-w-4xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-neutral-400">
                Mari Bertumbuh Bersama
              </p>

              <h2 className="mt-8 font-playfair text-5xl font-bold leading-tight text-white md:text-6xl">
                Membangun Brand Fashion
                <br />
                Yang Bertahan Lama.
              </h2>

              <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-neutral-400">
                Baik Anda ingin mengenal brand kami lebih jauh maupun menjalin
                kolaborasi, kami siap berdiskusi untuk menciptakan peluang baru
                bersama.
              </p>

              <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
                <Link
                  href="/brands"
                  className="group inline-flex h-14 items-center gap-2 rounded-full bg-white px-8 text-sm font-medium text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(255,255,255,0.15)]"
                >
                  Lihat Brand

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex h-14 items-center rounded-full border border-white/20 px-8 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white/10"
                >
                  Hubungi Kami
                </Link>
              </div>
            </div>
          </div>
        </FadeUp>
      </Container>
    </Section>
  );
}