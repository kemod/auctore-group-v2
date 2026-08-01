import { Container, Heading, Section } from "@/components/common";

import ManifestoCard from "@/features/manifesto/components/ManifestoCard";

const values = [
  {
    title: "Quality",
    description:
      "We believe every detail matters, from design to craftsmanship and customer experience.",
  },
  {
    title: "Innovation",
    description:
      "We embrace continuous improvement to create brands that remain relevant in a changing world.",
  },
  {
    title: "Timeless",
    description:
      "Our brands are built to outlast trends and deliver lasting value across generations.",
  },
  {
    title: "Customer First",
    description:
      "Every decision starts with understanding and creating value for our customers.",
  },
];

export default function Values() {
  return (
    <Section>
      <Container>
        <Heading
          eyebrow="Core Values"
          title={
            <>
              The Principles
              <br />
              That Guide Us.
            </>
          }
          description="Our values shape every brand we build and every decision we make."
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {values.map((value) => (
            <ManifestoCard
              key={value.title}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}