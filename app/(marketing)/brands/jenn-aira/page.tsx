import type { Metadata } from "next";

import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
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

    url: "https://auctore-group.vercel.app/brands/jenn-aira",

    images: [
      {
        url: "/images/brands/jenn-aira/hero.png",
        width: 1200,
        height: 630,
        alt: "Jenn Aira",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Jenn Aira | Auctore Group",

    description:
      "Jenn Aira menghadirkan fashion wanita dengan desain elegan, kualitas premium, dan kenyamanan untuk berbagai momen dalam kehidupan sehari-hari.",

    images: ["/images/brands/jenn-aira/hero.png"],
  },
};

export default function JennAiraPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          {
            name: "Home",
            url: "https://auctore-group.vercel.app",
          },
          {
            name: "Brands",
            url: "https://auctore-group.vercel.app/brands",
          },
          {
            name: "Jenn Aira",
            url: "https://auctore-group.vercel.app/brands/jenn-aira",
          },
        ]}
      />

      <BrandDetail
        name="Jenn Aira"
        category="Fashion Wanita"
        heroImage="/images/brands/jenn-aira/jenn-aira-hero.png"
        storyImage="/images/brands/jenn-aira/story.png"
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
          "/images/brands/jenn-aira/gallery-1.png",
          "/images/brands/jenn-aira/gallery-2.png",
          "/images/brands/jenn-aira/gallery-3.png",
          "/images/brands/jenn-aira/gallery-4.png",
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
    </>
  );
}