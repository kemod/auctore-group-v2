import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://auctoregroup.com";

  return [
    {
      url: baseUrl,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/brands`,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/brands/jenn-aira`,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/brands/auctfits`,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      priority: 0.8,
    },
  ];
}