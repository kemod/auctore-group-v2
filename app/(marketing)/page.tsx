import { Hero } from "@/features/hero";
import { Manifesto } from "@/features/manifesto";
import { Brands } from "@/features/brands";

export default function HomePage() {
  return (
    <>
      <Hero />

      <Manifesto />

      <Brands />
    </>
  );
}