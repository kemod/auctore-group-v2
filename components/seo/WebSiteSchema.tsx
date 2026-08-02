export default function WebSiteSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",

    name: "Auctore Group",

    url: "https://auctore-group.vercel.app",
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