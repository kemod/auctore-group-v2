import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

import { Hero } from "@/features/hero";
import { Manifesto } from "@/features/manifesto";
import { Brands } from "@/features/brands";
import { CTA } from "@/features/cta";

export default function Home() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          {
            name: "Home",
            url: "https://auctore-group.vercel.app",
          },
          {
            name: "Kontak",
            url: "https://auctore-group.vercel.app/contact",
          },
        ]}
      />
      <Hero />

      <Manifesto />

      <Brands />

      <CTA />
    </>
  );
}