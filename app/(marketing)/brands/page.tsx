import type { Metadata } from "next";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import { Brands } from "@/features/brands";

export const metadata: Metadata = {
  title: "Brand Kami",
  description:
    "Jelajahi berbagai brand di bawah Auctore Group yang dikembangkan dengan kualitas, inovasi, dan identitas yang kuat.",
  alternates: {
    canonical: "/brands",
  },
  openGraph: {
    title: "Brand Kami | Auctore Group",
    description:
      "Jelajahi berbagai brand di bawah Auctore Group yang dikembangkan dengan kualitas, inovasi, dan identitas yang kuat.",
    url: "https://auctoregroup.com/brands",
  },
};

export default function BrandsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          {
            name: "Home",
            url: "https://auctore-group.vercel.app",
          },
          {
            name: "Brand",
            url: "https://auctore-group.vercel.app/brands",
          },
        ]}
      />

      <Brands />
    </>
  );
}