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
  description,
  collections,
  gallery,
  galleryTitle,
  galleryDescription,
}: BrandDetailProps) {
  return (
    <>
      <BrandHero
        name={name}
        category={category}
        image={heroImage}
        description={description}
      />

      <BrandStory
        name={name}
        image={storyImage}
      />

      <Collections collections={collections} />

      <Gallery
        images={gallery}
        title={galleryTitle}
        description={galleryDescription}
      />

      <CTA />
    </>
  );
}