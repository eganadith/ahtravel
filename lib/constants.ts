export const COMPANY = {
  name: "A&H Travel and Tourism LLC",
  tagline: "Refined Travel. Exceptional Experiences.",
  phone: "+971 52 961 5154",
  email: "contact@ahtraveltourism.com",
  address: "England Cluster, International City, Dubai, UAE",
  addressAr: "إنجلترا كلاستر، المدينة العالمية، دبي، الإمارات العربية المتحدة",
  arabicLegalName: "ايه اند اتش للسياحة ش.ذ.م.م",
} as const;

export const MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.178!2d55.4083!3d25.1682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDEwJzA1LjUiTiA1NcKwMjQnMjkuOSJF!5e0!3m2!1sen!2sae!4v1";

export const HERO_VIDEO = {
  webm: "/videos/intro.webm",
  mp4: "/videos/intro.mp4",
} as const;

/** logo.png — for dark backgrounds (white wordmark). logo2.png — for light backgrounds. */
export const LOGO = {
  onDark: {
    src: "/images/Logo/logo.png",
    width: 1285,
    height: 1281,
  },
  onLight: {
    src: "/images/Logo/logo2.png",
    width: 1285,
    height: 1281,
  },
} as const;

export const SOCIAL = {
  whatsapp: "https://wa.me/971529615154",
  facebook:
    "https://www.facebook.com/share/1EAL4E9gBi/?mibextid=wwXIfr",
  instagram: "https://www.instagram.com/a_h.traveltourism/",
  tiktok: "https://www.tiktok.com/@a_h.traveltourism",
} as const;
