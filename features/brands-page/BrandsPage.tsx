import { CTA } from "@/features/cta";

import BrandsHero from "./components/BrandsHero";
import Introduction from "./components/Introduction";
import BrandGrid from "./components/BrandGrid";

export default function BrandsPage() {
  return (
    <>
      <BrandsHero />

      <Introduction />

      <BrandGrid />

      <CTA />
    </>
  );
}