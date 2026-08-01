import Image from "next/image";

import { Container, Section } from "@/components/common";

export default function Introduction() {
  return (
    <Section>
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-[560px_1fr]">
          <div className="overflow-hidden rounded-[36px] border border-neutral-200 shadow-lg">
            <Image
              src="/images/brands/introduction.webp"
              alt="Brand Portfolio"
              width={900}
              height={1100}
              className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
            />
          </div>

          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-neutral-500">
              Portofolio Brand
            </p>

            <h2 className="mt-6 font-playfair text-5xl font-bold leading-tight text-neutral-900">
              Setiap Brand
              <br />
              Memiliki Ceritanya Sendiri.
            </h2>

            <p className="mt-8 text-lg leading-8 text-neutral-600">
              Kami percaya bahwa setiap brand memiliki karakter, tujuan, dan identitas yang unik. Karena itu, setiap brand dikembangkan dengan pendekatan yang berbeda sesuai dengan target dan kebutuhan pelanggannya.
            </p>

            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Meskipun memiliki identitas masing-masing, seluruh brand di bawah Auctore Group tetap mengedepankan kualitas, inovasi, serta komitmen untuk memberikan pengalaman terbaik kepada pelanggan.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}