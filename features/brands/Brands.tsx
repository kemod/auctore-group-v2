import { Container, Heading, Section } from "@/components/common";
import { FadeUp } from "@/components/motion";

import BrandCard from "./components/BrandCard";

const brands = [
  {
    name: "Jenn Aira",
    description:
      "Menghadirkan fashion wanita dengan desain yang elegan, berkualitas, dan tetap relevan di setiap waktu.",
    image: "/images/brand/jenn-aira-logo.png",
    href: "/brands/jenn-aira",
  },
  {
    name: "Auctfits",
    description:
      "Menyediakan fashion esensial yang menggabungkan kenyamanan, kualitas, dan gaya modern untuk aktivitas sehari-hari.",
    image: "/images/brand/auctore-logo-o.png",
    href: "/brands/auctfits",
  },
];

export default function Brands() {
  return (
    <Section background="stone">
      <Container>
        <FadeUp>
          <Heading
            eyebrow="Brand Kami"
            title={
              <>
                Portofolio Brand
                <br />
                Untuk Masa Depan.
              </>
            }
            description="Setiap brand di bawah Auctore Group memiliki identitas yang berbeda, namun disatukan oleh komitmen yang sama terhadap kualitas, inovasi, dan pertumbuhan jangka panjang."
          />
        </FadeUp>

        <div className="mt-20 grid gap-10 lg:grid-cols-2">
          {brands.map((brand, index) => (
            <FadeUp
              key={brand.name}
              delay={index * 0.15}
            >
              <BrandCard {...brand} />
            </FadeUp>
          ))}
        </div>
      </Container>
    </Section>
  );
}