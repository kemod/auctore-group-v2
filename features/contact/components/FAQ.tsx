import { Container, Heading, Section } from "@/components/common";

const faqs = [
  {
    question: "Bagaimana cara bekerja sama dengan Auctore Group?",
    answer:
      "Silakan hubungi kami melalui formulir kontak atau email yang tersedia. Tim kami akan meninjau setiap peluang kerja sama dan menghubungi Anda kembali.",
  },
  {
    question: "Apakah Auctore Group membuka peluang kemitraan?",
    answer:
      "Ya. Kami terbuka terhadap berbagai bentuk kolaborasi yang sejalan dengan visi dan nilai perusahaan.",
  },
  {
    question: "Di mana lokasi Auctore Group?",
    answer:
      "Auctore Group berbasis di Kota Cimahi, Jawa Barat, Indonesia dan terus berkembang untuk menjangkau pasar yang lebih luas.",
  },
];

export default function FAQ() {
  return (
    <Section>
      <Container>
        <Heading
          eyebrow="Pertanyaan Yang Sering Diajukan."
          title={
            <>
              Everything You
              <br />
              Need To Know.
            </>
          }
          description="Temukan jawaban atas beberapa pertanyaan yang paling sering diajukan mengenai Auctore Group, mulai dari kerja sama hingga informasi perusahaan."
        />

        <div className="mx-auto mt-20 max-w-4xl space-y-6">
          {faqs.map((faq) => (
            <article
              key={faq.question}
              className="rounded-[28px] border border-neutral-200 bg-white p-8 transition hover:shadow-lg"
            >
              <h3 className="font-playfair text-2xl font-semibold text-neutral-900">
                {faq.question}
              </h3>

              <p className="mt-4 leading-8 text-neutral-600">
                {faq.answer}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}