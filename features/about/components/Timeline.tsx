import { Container, Heading, Section } from "@/components/common";
import { FadeUp } from "@/components/motion";

const timeline = [
  {
    year: "2025",
    title: "Auctore Group Didirikan",
    description:
      "Perjalanan kami dimulai dengan visi membangun perusahaan holding fashion yang menghadirkan brand berkualitas dengan nilai jangka panjang.",
  },
  {
    year: "2025",
    title: "Peluncuran Brand Pertama",
    description:
      "Jenn Aira menjadi brand pertama yang menghadirkan fashion wanita dengan desain modern, elegan, dan berkualitas.",
  },
  {
    year: "2026",
    title: "Perluasan Brand",
    description:
      "Auctfits bergabung sebagai bagian dari Auctore Group untuk melengkapi kebutuhan fashion esensial bagi gaya hidup modern.",
  },
  {
    year: "Masa Depan",
    title: "Langkah Selanjutnya",
    description:
      "Kami akan terus mengembangkan portofolio brand serta memperluas jangkauan Auctore Group ke pasar yang lebih luas.",
  },
];

export default function Timeline() {
  return (
    <Section background="stone">
      <Container>
        <FadeUp>
          <Heading
            eyebrow="Perjalanan Kami"
            title={
              <>
                Bertumbuh Selangkah
                <br />
                Demi Selangkah.
              </>
            }
            description="Setiap pencapaian merupakan bagian dari perjalanan kami dalam membangun brand fashion yang berkualitas dan berkelanjutan."
          />
        </FadeUp>

        <div className="relative mx-auto mt-20 max-w-4xl">
          {/* Vertical Line */}
          <div className="absolute left-5 top-0 h-full w-px bg-neutral-200" />

          <div className="space-y-16">
            {timeline.map((item, index) => (
              <FadeUp
                key={`${item.year}-${item.title}-${index}`}
                delay={index * 0.12}
              >
                <div className="group relative flex gap-8">
                  {/* Dot */}
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-neutral-300 bg-white font-semibold transition-all duration-500 group-hover:scale-110 group-hover:border-black group-hover:bg-black group-hover:text-white">
                    •
                  </div>

                  {/* Content */}
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">
                      {item.year}
                    </p>

                    <h3 className="mt-3 font-playfair text-3xl font-semibold text-neutral-900 transition-colors duration-300 group-hover:text-black">
                      {item.title}
                    </h3>

                    <p className="mt-4 max-w-2xl leading-8 text-neutral-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}