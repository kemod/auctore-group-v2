import { Container, Heading, Section } from "@/components/common";
import { FadeUp } from "@/components/motion";

import JourneyItem from "./components/JourneyItem";

const timeline = [
  {
    year: "2025",
    title: "Awal Perjalanan",
    description:
      "Auctore Group didirikan dengan visi membangun brand fashion Indonesia yang memiliki kualitas dan nilai jangka panjang.",
  },
  {
    year: "2025",
    title: "Brand Pertama Diluncurkan",
    description:
      "Jenn Aira hadir sebagai langkah awal dalam menghadirkan fashion modern dengan kualitas terbaik.",
  },
  {
    year: "2026",
    title: "Ekspansi Brand",
    description:
      "Auctfits bergabung untuk melengkapi Auctore Group dengan fokus pada kebutuhan fashion sehari-hari.",
  },
  {
    year: "Visi Masa Depan",
    title: "Visi Global",
    description:
      "Terus menghadirkan brand-brand baru dan memperluas jangkauan Auctore Group ke pasar yang lebih luas.",
  },
];

export default function Journey() {
  return (
    <Section>
      <Container>
        <FadeUp>
          <Heading
            eyebrow="Perjalanan Kami"
            title={
              <>
                Bertumbuh Dengan
                <br />
                Visi Jangka Panjang.
              </>
            }
            description="Setiap langkah yang kami ambil merupakan bagian dari komitmen untuk membangun brand fashion yang terus berkembang dan memberikan nilai yang berkelanjutan."
          />
        </FadeUp>

        <div className="relative mt-24">
          <div className="absolute left-5 top-0 h-full w-px bg-neutral-200" />

          <div className="space-y-16">
            {timeline.map((item, index) => (
              <FadeUp
                key={`${item.year}-${item.title}-${index}`}
                delay={index * 0.12}
              >
                <JourneyItem {...item} />
              </FadeUp>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}