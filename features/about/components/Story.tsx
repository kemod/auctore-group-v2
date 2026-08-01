import Image from "next/image";

import { Container, Section } from "@/components/common";

export default function Story() {
  return (
    <Section>
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-[560px_1fr]">
          {/* Image */}

          <div className="overflow-hidden rounded-[36px] border border-neutral-200 bg-white shadow-lg">
            <Image
              src="/images/about/story.webp"
              alt="Our Story"
              width={900}
              height={1100}
              className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
            />
          </div>

          {/* Content */}

          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-neutral-500">
              Our Story
            </p>

            <h2 className="mt-6 font-playfair text-5xl font-bold leading-tight text-neutral-900">
              Creating Fashion
              <br />
              With Purpose.
            </h2>

            <p className="mt-8 text-lg leading-8 text-neutral-600">
              Auctore Group was founded with a simple vision: create fashion
              brands that stand the test of time.
            </p>

            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Every brand we develop is built on quality craftsmanship,
              thoughtful innovation, and a long-term commitment to delivering
              meaningful value for customers.
            </p>

            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Rather than following short-lived trends, we focus on creating
              brands that continue to evolve while maintaining a clear identity
              and lasting relevance.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}