import type { Metadata } from "next";

import BrandDetail from "@/features/brand-detail";

export const metadata: Metadata = {
  title: "Jenn Aira",
  description:
    "Jenn Aira menghadirkan fashion wanita dengan desain elegan, kualitas premium, dan kenyamanan untuk berbagai momen dalam kehidupan sehari-hari.",
  alternates: {
    canonical: "/brands/jenn-aira",
  },
  openGraph: {
    title: "Jenn Aira | Auctore Group",
    description:
      "Jenn Aira menghadirkan fashion wanita dengan desain elegan, kualitas premium, dan kenyamanan untuk berbagai momen dalam kehidupan sehari-hari.",
    url: "https://auctoregroup.com/brands/jenn-aira",
  },
};

export default function JennAiraPage() {
  return (
    <BrandDetail
      name="Jenn Aira"
      category="Fashion Wanita"
      heroImage="/images/brands/jenn-aira/hero.webp"
      storyImage="/images/brands/jenn-aira/story.webp"
      description="Jenn Aira menghadirkan fashion wanita yang memadukan desain elegan, kualitas premium, dan kenyamanan untuk menemani setiap momen dalam kehidupan sehari-hari."
      collections={[
        {
          title: "Koleksi Harian",
          description:
            "Pilihan fashion yang nyaman dan mudah dipadukan untuk menemani aktivitas sehari-hari.",
        },
        {
          title: "Koleksi Signature",
          description:
            "Desain eksklusif dengan karakter yang kuat untuk memberikan kesan elegan dalam setiap kesempatan.",
        },
        {
          title: "Koleksi Musiman",
          description:
            "Inspirasi terbaru yang tetap mempertahankan identitas Jenn Aira dengan sentuhan yang relevan di setiap musim.",
        },
      ]}
      gallery={[
        "/images/brands/jenn-aira/gallery-1.webp",
        "/images/brands/jenn-aira/gallery-2.webp",
        "/images/brands/jenn-aira/gallery-3.webp",
        "/images/brands/jenn-aira/gallery-4.webp",
      ]}
      galleryTitle={
        <>
          Inspirasi Dalam
          <br />
          Setiap Koleksi.
        </>
      }
      galleryDescription="Menampilkan karakter dan identitas Jenn Aira melalui berbagai koleksi yang dirancang dengan detail dan kualitas terbaik."
    />
  );
}