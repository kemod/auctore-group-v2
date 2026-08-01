import { Container, Heading, Section } from "@/components/common";

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
    year: "Future",
    title: "Langkah Selanjutnya",
    description:
      "Kami akan terus mengembangkan portofolio brand serta memperluas jangkauan Auctore Group ke pasar yang lebih luas.",
  },
];

export default function Timeline() {
  return (
    <Section background="stone">
      <Container>
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

        <div className="relative mx-auto mt-20 max-w-4xl">
          {/* Vertical Line */}
          <div className="absolute left-5 top-0 h-full w-px bg-neutral-200" />

          <div className="space-y-16">
            {timeline.map((item) => (
              <div key={item.year} className="relative flex gap-8">
                {/* Dot */}
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-neutral-300 bg-white font-semibold">
                  •
                </div>

                {/* Content */}
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">
                    {item.year}
                  </p>

                  <h3 className="mt-3 font-playfair text-3xl font-semibold text-neutral-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-2xl leading-8 text-neutral-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}