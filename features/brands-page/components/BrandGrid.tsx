import { Container, Heading, Section } from "@/components/common";

import BrandCard from "./BrandCard";

const brands = [
  {
    name: "Jenn Aira",
    category: "Fashion Wanita",
    description:
      "Menghadirkan fashion wanita dengan desain yang elegan, berkualitas, dan tetap relevan untuk berbagai momen dalam kehidupan sehari-hari.",
    image: "/images/brands/jenn-aira.webp",
    href: "/brands/jenn-aira",
  },
  {
    name: "Auctfits",
    category: "Everyday Essentials",
    description:
      "Menyediakan fashion esensial yang menggabungkan kenyamanan, kualitas, dan desain modern untuk menunjang aktivitas sehari-hari.",
    image: "/images/brands/auctfits.webp",
    href: "/brands/auctfits",
  },
];

export default function BrandGrid() {
  return (
    <Section background="stone">
      <Container>
        <Heading
          eyebrow="Portofolio Brand"
          title={
            <>
              Kenali Seluruh
              <br />
              Brand Kami.
            </>
          }
          description="Setiap brand dirancang untuk menjawab kebutuhan yang berbeda, namun tetap membawa nilai dan standar kualitas yang menjadi ciri khas Auctore Group."
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