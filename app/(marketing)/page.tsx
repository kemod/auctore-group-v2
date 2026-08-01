import { Hero } from "@/features/hero";
import { Manifesto } from "@/features/manifesto";
import { Brands } from "@/features/brands";
import { Journey } from "@/features/journey";
import { CTA } from "@/features/cta";

export default function HomePage() {
  return (
    <>
      <Hero />

      <Manifesto />

      <Brands />

      <Journey />

      <CTA />
    </>
  );
}