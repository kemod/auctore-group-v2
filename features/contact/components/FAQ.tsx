import { Container, Heading, Section } from "@/components/common";

const faqs = [
  {
    question: "How can I collaborate with Auctore Group?",
    answer:
      "You can reach us through our contact form or email. We'll review your inquiry and get back to you as soon as possible.",
  },
  {
    question: "Do you accept business partnerships?",
    answer:
      "Yes. We welcome partnership opportunities that align with our long-term vision and brand values.",
  },
  {
    question: "Where is Auctore Group located?",
    answer:
      "Our company is based in Indonesia while serving customers and partners across different markets.",
  },
];

export default function FAQ() {
  return (
    <Section>
      <Container>
        <Heading
          eyebrow="Frequently Asked Questions"
          title={
            <>
              Everything You
              <br />
              Need To Know.
            </>
          }
          description="Here are some of the most common questions about Auctore Group."
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