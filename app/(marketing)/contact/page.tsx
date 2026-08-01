import type { Metadata } from "next";

import Contact from "@/features/contact";

export const metadata: Metadata = {
  title: "Kontak",
  description:
    "Hubungi Auctore Group untuk pertanyaan, kerja sama, maupun peluang bisnis lainnya.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Kontak | Auctore Group",
    description:
      "Hubungi Auctore Group untuk pertanyaan, kerja sama, maupun peluang bisnis lainnya.",
    url: "https://auctoregroup.com/contact",
  },
};

export default function ContactPage() {
  return <Contact />;
}