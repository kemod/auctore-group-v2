export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",

  name: "Auctore Group",

  url: "https://auctoregroup.com",

  logo: "https://auctoregroup.com/images/brand/auctore-logo.png",

  description:
    "Auctore Group merupakan perusahaan holding fashion yang membangun berbagai brand berkualitas melalui inovasi, craftsmanship, dan visi jangka panjang.",

  sameAs: [],

  brand: [
    {
      "@type": "Brand",
      name: "Jenn Aira",
    },
    {
      "@type": "Brand",
      name: "Auctfits",
    },
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",

  "@type": "WebSite",

  name: "Auctore Group",

  url: "https://auctoregroup.com",
};