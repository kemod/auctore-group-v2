import { Container, Heading, Section } from "@/components/common";

import JourneyItem from "./components/JourneyItem";

const timeline = [
  {
    year: "2024",
    title: "The Beginning",
    description:
      "Auctore Group was established with the ambition to build timeless fashion brands.",
  },
  {
    year: "2025",
    title: "First Brand Launch",
    description:
      "Jenn Aira was introduced as our first lifestyle fashion brand.",
  },
  {
    year: "2026",
    title: "Brand Expansion",
    description:
      "Auctfits joined the portfolio to strengthen our everyday essentials category.",
  },
  {
    year: "Future",
    title: "Global Vision",
    description:
      "Expanding internationally while continuing to create brands with lasting value.",
  },
];

export default function Journey() {
  return (
    <Section>
      <Container>
        <Heading
          eyebrow="Our Journey"
          title={
            <>
              Growing With
              <br />
              Long-Term Vision.
            </>
          }
          description="Every milestone reflects our commitment to building sustainable fashion businesses that continue to evolve."
        />

        <div className="relative mt-24">
          <div className="absolute left-5 top-0 h-full w-px bg-neutral-200" />

          <div className="space-y-16">
            {timeline.map((item) => (
              <JourneyItem key={item.year} {...item} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}