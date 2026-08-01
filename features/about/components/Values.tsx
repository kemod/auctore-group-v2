import { Container, Heading, Section } from "@/components/common";

import ManifestoCard from "@/features/manifesto/components/ManifestoCard";

const values = [
  {
    title: "Kualitas",
    description:
      "Kami percaya bahwa kualitas adalah fondasi utama dalam menciptakan produk yang mampu memberikan kepuasan dan kepercayaan pelanggan.",
  },
  {
    title: "Inovasi",
    description:
      "Kami terus menghadirkan ide dan pendekatan baru agar setiap brand mampu berkembang mengikuti kebutuhan pasar.",
  },
  {
    title: "Timeless",
    description:
      "Kami menciptakan produk yang tetap relevan dan bernilai, melampaui perubahan tren dari waktu ke waktu.",
  },
  {
    title: "Pelanggan Adalah Prioritas",
    description:
      "Setiap keputusan yang kami ambil berorientasi pada pengalaman terbaik dan hubungan jangka panjang dengan pelanggan.",
  },
];

export default function Values() {
  return (
    <Section>
      <Container>
        <Heading
          eyebrow="Nilai-Nilai Kami"
          title={
            <>
              Prinsip Yang
              <br />
              Menjadi Pedoman Kami.
            </>
          }
          description="Nilai-nilai ini menjadi landasan dalam membangun setiap brand dan mengambil setiap keputusan di Auctore Group."
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {values.map((value) => (
            <ManifestoCard
              key={value.title}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}