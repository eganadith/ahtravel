export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "A&H Travel and Tourism LLC",
    description:
      "Premium travel, tourism, visa and admin services in Dubai, UAE.",
    url: "https://ahtraveltourism.com",
    telephone: "+971-52-961-5154",
    email: "contact@ahtraveltourism.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "England Cluster, International City",
      addressLocality: "Dubai",
      addressCountry: "AE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 25.1682,
      longitude: 55.4083,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "19:00",
    },
    priceRange: "$$",
    areaServed: "AE",
  };
}
