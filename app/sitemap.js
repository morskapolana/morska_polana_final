// --- SITEMAP DLA MORSKA POLANA ---
export default function sitemap() {
  const baseUrl = "https://morskapolana.pl";

  return [
    // --- STRONA GŁÓWNA ---
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changefreq: "weekly",
      priority: 1.0,
    },

    // --- PODSTRONY GŁÓWNE ---
    {
      url: `${baseUrl}/galeria`,
      lastModified: new Date(),
      changefreq: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/okazje`,
      lastModified: new Date(),
      changefreq: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/kontakt`,
      lastModified: new Date(),
      changefreq: "yearly",
      priority: 0.6,
    },

    // --- DOMKI / OFERTA ---
    {
      url: `${baseUrl}/willa`,
      lastModified: new Date(),
      changefreq: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/bastion`,
      lastModified: new Date(),
      changefreq: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/letnie`,
      lastModified: new Date(),
      changefreq: "monthly",
      priority: 0.9,
    },

    // --- PUPILE ---
    {
      url: `${baseUrl}/zwierzeta`,
      lastModified: new Date(),
      changefreq: "monthly",
      priority: 0.8,
    },
  ];
}
