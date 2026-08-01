import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container, Section } from "@/components/common";

export default function CTA() {
  return (
    <Section background="black" className="overflow-hidden">
      <Container>
        <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-neutral-950 px-10 py-20 md:px-16">
          {/* Background Glow */}
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

          <div className="relative mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-neutral-400">
              Let's Build Together
            </p>

            <h2 className="mt-8 font-playfair text-5xl font-bold leading-tight text-white md:text-6xl">
              Building Fashion Brands
              <br />
              That Last.
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-neutral-400">
              Whether you're exploring our portfolio or looking for future
              collaborations, we'd love to hear from you.
            </p>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
              <Link
                href="/brands"
                className="inline-flex h-14 items-center gap-2 rounded-full bg-white px-8 text-sm font-medium text-black transition-all duration-300 hover:-translate-y-0.5"
              >
                Explore Brands

                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex h-14 items-center rounded-full border border-white/20 px-8 text-sm font-medium text-white transition hover:border-white hover:bg-white/5"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}