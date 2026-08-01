import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Auctore Group",
    short_name: "Auctore",

    description:
      "Perusahaan holding fashion yang membangun berbagai brand berkualitas melalui inovasi, craftsmanship, dan visi jangka panjang.",

    start_url: "/",

    display: "standalone",

    background_color: "#ffffff",

    theme_color: "#ffffff",

    orientation: "portrait",

    lang: "id",

    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}