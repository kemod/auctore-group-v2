import { Container, Heading, Section } from "@/components/common";

import ManifestoCard from "./components/ManifestoCard";

const values = [
  {
    title: "Kualitas",
    description:
      "Setiap produk dibuat dengan perhatian terhadap detail, menggunakan material terbaik, dan standar kualitas yang tinggi.",
  },
  {
    title: "Inovasi",
    description:
      "Kami terus mengembangkan setiap brand melalui ide-ide baru, strategi modern, dan proses yang berkelanjutan.",
  },
  {
    title: "Timeless",
    description:
      "Kami menciptakan produk yang tetap relevan, melampaui tren sesaat dan dapat digunakan dalam berbagai waktu.",
  },
  {
    title: "Pelanggan Adalah Prioritas",
    description:
      "Kepercayaan pelanggan menjadi dasar dalam setiap keputusan yang kami ambil untuk membangun hubungan jangka panjang.",
  },
];

export default function Manifesto() {
  return (
    <Section>
      <Container>
        <Heading
          eyebrow="Manifesto Kami"
          title={
            <>
              Kami Membangun
              <br />
              Brand Dengan Tujuan.
            </>
          }
          description="Setiap keputusan yang kami ambil berlandaskan kualitas, inovasi, desain yang timeless, serta komitmen untuk menciptakan nilai jangka panjang bagi pelanggan."
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {values.map((item) => (
            <ManifestoCard
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}