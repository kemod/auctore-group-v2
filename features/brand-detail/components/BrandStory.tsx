import Image from "next/image";

import { Container, Section } from "@/components/common";

interface BrandStoryProps {
  name: string;
  image: string;
}

export default function BrandStory({
  name,
  image,
}: BrandStoryProps) {
  return (
    <Section>
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-[560px_1fr]">
          {/* Image */}

          <div className="overflow-hidden rounded-[36px] border border-neutral-200 bg-white shadow-lg">
            <Image
              src={image}
              alt={name}
              width={900}
              height={1100}
              className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
            />
          </div>

          {/* Content */}

          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-neutral-500">
              Brand Story
            </p>

            <h2 className="mt-6 font-playfair text-5xl font-bold leading-tight text-neutral-900">
              Designed For
              <br />
              Everyday Confidence.
            </h2>

            <p className="mt-8 text-lg leading-8 text-neutral-600">
              {name} was created with the belief that fashion should be
              timeless, comfortable, and effortlessly elegant.
            </p>

            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Every collection reflects careful craftsmanship, premium
              materials, and a minimalist aesthetic that adapts to modern
              lifestyles.
            </p>

            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Rather than chasing trends, {name} focuses on creating
              essentials that remain relevant season after season.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}