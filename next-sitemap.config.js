/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://ahtraveltourism.com",
  generateRobotsTxt: true,
  alternateRefs: [
    { href: "https://ahtraveltourism.com/en", hreflang: "en" },
    { href: "https://ahtraveltourism.com/ar", hreflang: "ar" },
    { href: "https://ahtraveltourism.com/bn", hreflang: "bn" },
    { href: "https://ahtraveltourism.com/tl", hreflang: "tl" },
  ],
  additionalPaths: async (config) => {
    const locales = ["en", "ar", "bn", "tl"];
    const routes = ["", "/tourism", "/admin-services", "/about", "/contact"];
    const paths = [];
    for (const locale of locales) {
      for (const route of routes) {
        paths.push(await config.transform(config, `/${locale}${route}`));
      }
    }
    return paths;
  },
};
