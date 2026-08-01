import Image from "next/image";

import { Container, Section } from "@/components/common";

export default function Story() {
  return (
    <Section>
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-[560px_1fr]">
          {/* Image */}

          <div className="overflow-hidden rounded-[36px] border border-neutral-200 bg-white shadow-lg">
            <Image
              src="/images/about/story.png"
              alt="Our Story"
              width={900}
              height={1100}
              className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
            />
          </div>

          {/* Content */}

          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-neutral-500">
              Cerita Kami
            </p>

            <h2 className="mt-6 font-playfair text-5xl font-bold leading-tight text-neutral-900">
              Menghadirkan Fashion
              <br />
              Dengan Tujuan.
            </h2>

            <p className="mt-8 text-lg leading-8 text-neutral-600">
              Auctore Group didirikan dengan keyakinan bahwa sebuah brand bukan hanya tentang produk, tetapi juga tentang membangun identitas, kepercayaan, dan nilai yang bertahan lama.
            </p>

            <p className="mt-6 text-lg leading-8 text-neutral-600">
             Setiap brand yang kami kembangkan lahir melalui proses yang matang, mulai dari desain, pemilihan material, hingga pengalaman yang dirasakan oleh pelanggan.
            </p>

            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Kami percaya bahwa pertumbuhan yang berkelanjutan berasal dari konsistensi dalam menjaga kualitas serta keberanian untuk terus berinovasi.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}