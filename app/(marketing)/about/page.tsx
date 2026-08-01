import type { Metadata } from "next";

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
  return <About />;
}