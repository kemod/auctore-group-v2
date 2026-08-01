import Image from "next/image";

import { Container, Section } from "@/components/common";

export default function Introduction() {
  return (
    <Section>
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-[560px_1fr]">
          <div className="overflow-hidden rounded-[36px] border border-neutral-200 shadow-lg">
            <Image
              src="/images/brands/introduction.webp"
              alt="Brand Portfolio"
              width={900}
              height={1100}
              className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
            />
          </div>

          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-neutral-500">
              Brand Portfolio
            </p>

            <h2 className="mt-6 font-playfair text-5xl font-bold leading-tight text-neutral-900">
              Every Brand
              <br />
              Has Its Own Story.
            </h2>

            <p className="mt-8 text-lg leading-8 text-neutral-600">
              We believe each brand should possess a unique identity while
              reflecting the same values of quality, craftsmanship, and
              long-term growth.
            </p>

            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Together, these brands represent Auctore Group's vision to
              create meaningful fashion experiences for modern lifestyles.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}