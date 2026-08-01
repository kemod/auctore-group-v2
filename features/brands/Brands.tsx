import { Container, Heading, Section } from "@/components/common";

import BrandCard from "./components/BrandCard";

const brands = [
  {
    name: "Jenn Aira",
    description:
      "Modern women's fashion focused on elegance, versatility, and timeless everyday style.",
    image: "/images/brand/jenn-aira-logo.jpg",
    href: "/brands/jenn-aira",
  },
  {
    name: "Auctfits",
    description:
      "Essential fashion designed for comfort, quality, and contemporary living.",
    image: "/images/brand/auctore-logo.png",
    href: "/brands/auctfits",
  },
];

export default function Brands() {
  return (
    <Section background="stone">
      <Container>
        <Heading
          eyebrow="Our Brands"
          title={
            <>
              A Portfolio
              <br />
              Built For The Future.
            </>
          }
          description="Each brand under Auctore Group is built with a unique identity while sharing the same commitment to quality, innovation, and long-term growth."
        />

        <div className="mt-20 grid gap-10 lg:grid-cols-2">
          {brands.map((brand) => (
            <BrandCard key={brand.name} {...brand} />
          ))}
        </div>
      </Container>
    </Section>
  );
}