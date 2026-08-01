import { Container, Heading, Section } from "@/components/common";

const collections = [
  {
    title: "Daily Essentials",
    description:
      "Comfortable wardrobe staples designed for everyday wear.",
  },
  {
    title: "Modern Classics",
    description:
      "Timeless silhouettes with contemporary details and premium finishes.",
  },
  {
    title: "Seasonal Collection",
    description:
      "Curated pieces inspired by the latest seasonal direction while maintaining a timeless identity.",
  },
];

export default function Collections() {
  return (
    <Section background="stone">
      <Container>
        <Heading
          eyebrow="Collections"
          title={
            <>
              Crafted For
              <br />
              Every Occasion.
            </>
          }
          description="Every collection is thoughtfully designed to deliver versatility, comfort, and timeless appeal."
        />

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {collections.map((collection) => (
            <article
              key={collection.title}
              className="group rounded-[32px] border border-neutral-200 bg-white p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-stone-100 text-xl font-bold">
                {collection.title.charAt(0)}
              </div>

              <h3 className="mt-8 font-playfair text-3xl font-semibold text-neutral-900">
                {collection.title}
              </h3>

              <p className="mt-6 leading-8 text-neutral-600">
                {collection.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}