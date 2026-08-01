import { CTA } from "@/features/cta";

import type { BrandDetailProps } from "./types";

import BrandHero from "./components/BrandHero";
import BrandStory from "./components/BrandStory";
import Collections from "./components/Collections";
import Gallery from "./components/Gallery";

export default function BrandDetail({
  name,
  category,
  heroImage,
  storyImage,
  gallery,
  collections,
}: BrandDetailProps) {
  return (
    <>
      <BrandHero
        name={name}
        category={category}
        image={heroImage}
      />

      <BrandStory
        name={name}
        image={storyImage}
      />

      <Collections collections={collections} />

      <Gallery images={gallery} />

      <CTA />
    </>
  );
}