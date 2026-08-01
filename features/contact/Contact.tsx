import { CTA } from "@/features/cta";

import ContactHero from "./components/ContactHero";
import ContactInfo from "./components/ContactInfo";
import ContactForm from "./components/ContactForm";
import FAQ from "./components/FAQ";

export default function Contact() {
  return (
    <>
      <ContactHero />

      <ContactInfo />

      <ContactForm />

      <FAQ />

      <CTA />
    </>
  );
}