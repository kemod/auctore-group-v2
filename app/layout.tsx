import type { Metadata } from "next";
import "./globals.css";

import { inter, playfair } from "@/config";

export const metadata: Metadata = {
  metadataBase: new URL("https://auctoregroup.com"),

  title: {
    default: "Auctore Group",
    template: "%s | Auctore Group",
  },

  description:
    "Auctore Group merupakan perusahaan holding fashion yang membangun berbagai brand berkualitas melalui inovasi, craftsmanship, dan visi jangka panjang.",

  keywords: [
    "Auctore Group",
    "Holding Fashion",
    "Fashion Indonesia",
    "Brand Fashion",
    "Jenn Aira",
    "Auctfits",
  ],

  authors: [
    {
      name: "Auctore Group",
    },
  ],

  creator: "Auctore Group",

  publisher: "Auctore Group",

  applicationName: "Auctore Group",

  category: "Fashion",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://auctoregroup.com",
    siteName: "Auctore Group",

    title: "Auctore Group",

    description:
      "Membangun berbagai brand fashion berkualitas melalui inovasi, craftsmanship, dan visi jangka panjang.",

    images: [
      {
        url: "/images/seo/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Auctore Group",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Auctore Group",

    description:
      "Membangun berbagai brand fashion berkualitas melalui inovasi, craftsmanship, dan visi jangka panjang.",

    images: ["/images/seo/og-image.jpg"],
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
      {
        url: "/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
    ],

    shortcut: "/favicon.ico",

    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: Readonly<RootLayoutProps>) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-background font-sans text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}