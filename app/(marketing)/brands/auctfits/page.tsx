import BrandDetail from "@/features/brand-detail";

export default function AuctfitsPage() {
  return (
    <BrandDetail
      name="Auctfits"
      category="Everyday Essentials"
      heroImage="/images/brands/auctfits/hero.webp"
      storyImage="/images/brands/auctfits/story.webp"
      gallery={[
        "/images/brands/auctfits/gallery-1.webp",
        "/images/brands/auctfits/gallery-2.webp",
        "/images/brands/auctfits/gallery-3.webp",
        "/images/brands/auctfits/gallery-4.webp",
      ]}
      collections={[
        {
          title: "Urban Essentials",
          description:
            "Minimal everyday apparel designed for versatility and comfort.",
        },
        {
          title: "Premium Basics",
          description:
            "High-quality essentials crafted for daily wear with lasting durability.",
        },
        {
          title: "Lifestyle Collection",
          description:
            "Modern essentials that balance comfort, function, and timeless aesthetics.",
        },
      ]}
    />
  );
}