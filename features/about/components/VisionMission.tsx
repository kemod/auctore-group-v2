import { Container, Section } from "@/components/common";
import { FadeUp } from "@/components/motion";

const data = [
  {
    title: "Visi",
    description:
      "Menjadi perusahaan holding fashion yang menghadirkan berbagai brand berkualitas, inovatif, dan memiliki nilai jangka panjang di Indonesia maupun pasar internasional.",
  },
  {
    title: "Misi",
    description:
      "Mengembangkan setiap brand melalui desain yang relevan, kualitas terbaik, inovasi berkelanjutan, serta pelayanan yang memberikan pengalaman positif bagi pelanggan.",
  },
];

export default function VisionMission() {
  return (
    <Section background="stone">
      <Container>
        <div className="grid gap-8 lg:grid-cols-2">
          {data.map((item, index) => (
            <FadeUp
              key={item.title}
              delay={index * 0.15}
            >
              <article className="group rounded-[36px] border border-neutral-200 bg-white p-10 transition-all duration-500 hover:-translate-y-2 hover:border-neutral-300 hover:shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
                  {item.title}
                </span>

                <h2 className="mt-6 font-playfair text-4xl font-bold leading-tight text-neutral-900">
                  {item.title === "Visi"
                    ? "Membangun Brand Yang Bernilai"
                    : "Bertumbuh Bersama Pelanggan."}
                </h2>

                <p className="mt-8 leading-8 text-neutral-600">
                  {item.description}
                </p>
              </article>
            </FadeUp>
          ))}
        </div>
      </Container>
    </Section>
  );
}