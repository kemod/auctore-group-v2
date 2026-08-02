import type { Metadata } from "next";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import About from "@/features/about";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "Kenali perjalanan, visi, misi, dan nilai-nilai Auctore Group dalam membangun berbagai brand fashion berkualitas.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "Tentang Kami | Auctore Group",
    description:
      "Kenali perjalanan, visi, misi, dan nilai-nilai Auctore Group dalam membangun berbagai brand fashion berkualitas.",
    url: "https://auctoregroup.com/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          {
            name: "Home",
            url: "https://auctore-group.vercel.app",
          },
          {
            name: "Tentang Kami",
            url: "https://auctore-group.vercel.app/about",
          },
        ]}
      />

      <About />
    </>
  );
}
