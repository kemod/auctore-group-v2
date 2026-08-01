import { Container, Heading, Section } from "@/components/common";

import BrandCard from "./BrandCard";

const brands = [
  {
    name: "Jenn Aira",
    category: "Women's Fashion",
    description:
      "Timeless women's fashion inspired by elegance, confidence, and modern everyday living.",
    image: "/images/brands/jenn-aira.webp",
    href: "/brands/jenn-aira",
  },
  {
    name: "Auctfits",
    category: "Everyday Essentials",
    description:
      "Modern essentials designed for comfort, quality, and effortless everyday style.",
    image: "/images/brands/auctfits.webp",
    href: "/brands/auctfits",
  },
];

export default function BrandGrid() {
  return (
    <Section background="stone">
      <Container>
        <Heading
          eyebrow="Brand Portfolio"
          title={
            <>
              Discover Our
              <br />
              Collection of Brands.
            </>
          }
          description="Each brand under Auctore Group has its own unique identity while sharing the same commitment to craftsmanship, innovation, and timeless value."
        />

        <div className="mt-20 grid gap-10 lg:grid-cols-2">
          {brands.map((brand) => (
            <BrandCard
              key={brand.name}
              {...brand}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}