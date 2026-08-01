import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container, Section } from "@/components/common";

export default function ContactHero() {
  return (
    <Section className="overflow-hidden pt-44 pb-36">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-stone-50 via-white to-white" />

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-stone-200 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-neutral-600 shadow-sm">
            Contact
          </span>

          <h1 className="mt-8 font-playfair text-5xl font-bold leading-tight text-neutral-900 md:text-6xl xl:text-7xl">
            Let's Start
            <br />
            A Conversation.
          </h1>

          <p className="mt-8 text-lg leading-8 text-neutral-600">
            We'd love to hear from you. Whether it's a partnership,
            business inquiry, or simply getting to know Auctore Group.
          </p>

          <div className="mt-12">
            <Link
              href="#contact-form"
              className="inline-flex h-14 items-center gap-2 rounded-full bg-black px-8 text-sm font-medium text-white transition hover:bg-neutral-800"
            >
              Get In Touch

              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}