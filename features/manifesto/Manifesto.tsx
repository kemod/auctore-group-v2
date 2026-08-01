import { Container, Heading, Section } from "@/components/common";

import ManifestoCard from "./components/ManifestoCard";

const values = [
  {
    title: "Quality",
    description:
      "Every product is crafted with premium materials, attention to detail, and uncompromising standards.",
  },
  {
    title: "Innovation",
    description:
      "We continuously evolve through thoughtful ideas, modern technology, and customer insight.",
  },
  {
    title: "Timeless",
    description:
      "We create brands designed to stay relevant beyond trends and changing seasons.",
  },
  {
    title: "Customer First",
    description:
      "Building trust and long-term relationships with customers is at the heart of every decision.",
  },
];

export default function Manifesto() {
  return (
    <Section>
      <Container>
        <Heading
          eyebrow="Our Manifesto"
          title={
            <>
              We Build Brands
              <br />
              With Purpose.
            </>
          }
          description="Every decision we make is guided by quality, innovation, timeless design, and a commitment to creating lasting value."
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {values.map((item) => (
            <ManifestoCard
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}