export default function OrganizationSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",

    name: "Auctore Group",

    url: "https://auctore-group.vercel.app",

    logo: "https://auctore-group.vercel.app/images/brand/auctore-logo.png",

    description:
      "Auctore Group adalah perusahaan holding fashion yang membangun berbagai brand berkualitas melalui inovasi, craftsmanship, dan visi jangka panjang.",

    sameAs: [
      "https://www.instagram.com/jenn_aira2025?igsh=MWMzcDd1bWRpbGp4bA==",
      "https://www.instagram.com/auctstore?igsh=Y2R2czBxdGJydHFr",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}