import { Container, Section } from "@/components/common";

const data = [
  {
    title: "Our Vision",
    description:
      "To become a leading fashion holding company that builds timeless brands recognized for quality, innovation, and long-term value.",
  },
  {
    title: "Our Mission",
    description:
      "We develop brands through thoughtful design, premium craftsmanship, sustainable growth, and an unwavering commitment to our customers.",
  },
];

export default function VisionMission() {
  return (
    <Section background="stone">
      <Container>
        <div className="grid gap-8 lg:grid-cols-2">
          {data.map((item) => (
            <article
              key={item.title}
              className="group rounded-[36px] border border-neutral-200 bg-white p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
                {item.title}
              </span>

              <h2 className="mt-6 font-playfair text-4xl font-bold text-neutral-900">
                {item.title === "Our Vision"
                  ? "Creating Enduring Fashion Brands."
                  : "Growing Through Purpose & Innovation."}
              </h2>

              <p className="mt-8 leading-8 text-neutral-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}