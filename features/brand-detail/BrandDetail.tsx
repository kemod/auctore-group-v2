import { CTA } from "@/features/cta";

import BrandHero from "./components/BrandHero";
import BrandStory from "./components/BrandStory";
import Collections from "./components/Collections";
import Gallery from "./components/Gallery";

interface BrandDetailProps {
  name: string;
  category: string;
  heroImage: string;
  storyImage: string;
}

export default function BrandDetail({
  name,
  category,
  heroImage,
  storyImage,
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

      <Collections />

      <Gallery />

      <CTA />
    </>
  );
}