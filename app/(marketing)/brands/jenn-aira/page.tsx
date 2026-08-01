import BrandDetail from "@/features/brand-detail";

export default function JennAiraPage() {
  return (
    <BrandDetail
      name="Jenn Aira"
      category="Women's Fashion"
      heroImage="/images/brands/jenn-aira/hero.webp"
      storyImage="/images/brands/jenn-aira/story.webp"
      gallery={[
        "/images/brands/jenn-aira/gallery-1.webp",
        "/images/brands/jenn-aira/gallery-2.webp",
        "/images/brands/jenn-aira/gallery-3.webp",
        "/images/brands/jenn-aira/gallery-4.webp",
      ]}
      collections={[
        {
          title: "Daily Essentials",
          description:
            "Comfortable wardrobe staples designed for everyday elegance.",
        },
        {
          title: "Modern Classics",
          description:
            "Timeless silhouettes with refined tailoring and premium finishes.",
        },
        {
          title: "Seasonal Collection",
          description:
            "Contemporary pieces inspired by seasonal trends while maintaining timeless appeal.",
        },
      ]}
    />
  );
}