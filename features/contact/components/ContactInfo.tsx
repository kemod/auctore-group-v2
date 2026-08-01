import { Mail, Phone, MapPin } from "lucide-react";

import { Container, Heading, Section } from "@/components/common";

const contacts = [
  {
    icon: Mail,
    title: "Email",
    value: "hello@auctoregroup.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+62 812 3456 7890",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Jakarta, Indonesia",
  },
];

export default function ContactInfo() {
  return (
    <Section>
      <Container>
        <Heading
          eyebrow="Contact Information"
          title={
            <>
              Let's Connect.
            </>
          }
          description="Reach us through the following channels."
        />

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {contacts.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-[32px] border border-neutral-200 bg-white p-10 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-stone-100">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mt-8 font-playfair text-3xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-4 text-neutral-600">
                  {item.value}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}