import Image from "next/image";

import { Container, Heading, Section } from "@/components/common";

interface GalleryProps {
  images: string[];
}

export default function Gallery({
  images,
}: GalleryProps) {
  return (
    <Section>
      <Container>
        <Heading
          eyebrow="Gallery"
          title={
            <>
              Editorial
              <br />
              Moments.
            </>
          }
          description="A glimpse into the visual identity and timeless aesthetic of our brand."
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {images.map((image) => (
            <div
              key={image}
              className="group overflow-hidden rounded-[32px] border border-neutral-200"
            >
              <Image
                src={image}
                alt="Gallery"
                width={900}
                height={1100}
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}