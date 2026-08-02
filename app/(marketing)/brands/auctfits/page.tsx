import type { Metadata } from "next";

import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import BrandDetail from "@/features/brand-detail";

export const metadata: Metadata = {
  title: "Auctfits",

  description:
    "Auctfits menghadirkan fashion esensial dengan desain modern, material berkualitas, dan kenyamanan untuk aktivitas sehari-hari.",

  alternates: {
    canonical: "/brands/auctfits",
  },

  openGraph: {
    title: "Auctfits | Auctore Group",

    description:
      "Auctfits menghadirkan fashion esensial dengan desain modern, material berkualitas, dan kenyamanan untuk aktivitas sehari-hari.",

    url: "https://auctore-group.vercel.app/brands/auctfits",

    images: [
      {
        url: "/images/brands/auctfits/hero.png",
        width: 1200,
        height: 630,
        alt: "Auctfits",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Auctfits | Auctore Group",

    description:
      "Auctfits menghadirkan fashion esensial dengan desain modern, material berkualitas, dan kenyamanan untuk aktivitas sehari-hari.",

    images: ["/images/brands/auctfits/hero.png"],
  },
};

export default function AuctfitsPage() {
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
            name: "Auctfits",
            url: "https://auctore-group.vercel.app/brands/auctfits",
          },
        ]}
      />

      <BrandDetail
        name="Auctfits"
        category="Fashion Esensial"
        heroImage="/images/brands/auctfits/hero.png"
        storyImage="/images/brands/auctfits/storyy.png"
        description="Auctfits menghadirkan fashion esensial yang mengutamakan kenyamanan, kualitas, dan desain modern untuk mendukung gaya hidup aktif setiap hari."
        collections={[
          {
            title: "Daily Essentials",
            description:
              "Produk esensial yang nyaman digunakan untuk menemani aktivitas sehari-hari.",
          },
          {
            title: "Premium Basics",
            description:
              "Pilihan fashion berkualitas tinggi dengan desain minimalis dan material yang nyaman.",
          },
          {
            title: "Lifestyle Collection",
            description:
              "Koleksi yang dirancang untuk menunjang gaya hidup modern dengan tampilan yang sederhana namun tetap berkelas.",
          },
        ]}
        gallery={[
          "/images/brands/auctfits/gallery-1.png",
          "/images/brands/auctfits/gallery-2.png",
          "/images/brands/auctfits/gallery-3.png",
          "/images/brands/auctfits/gallery-4.png",
        ]}
        galleryTitle={
          <>
            Kenyamanan
            <br />
            Dalam Setiap Detail.
          </>
        }
        galleryDescription="Melihat lebih dekat kualitas material, desain, dan karakter Auctfits melalui setiap koleksi yang kami hadirkan."
      />
    </>
  );
}