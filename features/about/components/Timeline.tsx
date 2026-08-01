import { Container, Heading, Section } from "@/components/common";

const timeline = [
  {
    year: "2024",
    title: "Auctore Was Founded",
    description:
      "Auctore Group was established with the ambition to build modern fashion brands with timeless value.",
  },
  {
    year: "2025",
    title: "First Brand Launch",
    description:
      "Jenn Aira became the first brand under Auctore Group, introducing a refined approach to everyday fashion.",
  },
  {
    year: "2026",
    title: "Portfolio Expansion",
    description:
      "Auctfits joined the portfolio, strengthening our commitment to creating accessible premium essentials.",
  },
  {
    year: "Future",
    title: "Global Growth",
    description:
      "Continuing to expand our portfolio while bringing Indonesian fashion brands to a broader international audience.",
  },
];

export default function Timeline() {
  return (
    <Section background="stone">
      <Container>
        <Heading
          eyebrow="Our Journey"
          title={
            <>
              Growing One
              <br />
              Step At A Time.
            </>
          }
          description="Every milestone reflects our commitment to building brands with purpose and long-term vision."
        />

        <div className="relative mx-auto mt-20 max-w-4xl">
          {/* Vertical Line */}
          <div className="absolute left-5 top-0 h-full w-px bg-neutral-200" />

          <div className="space-y-16">
            {timeline.map((item) => (
              <div key={item.year} className="relative flex gap-8">
                {/* Dot */}
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-neutral-300 bg-white font-semibold">
                  •
                </div>

                {/* Content */}
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">
                    {item.year}
                  </p>

                  <h3 className="mt-3 font-playfair text-3xl font-semibold text-neutral-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-2xl leading-8 text-neutral-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}