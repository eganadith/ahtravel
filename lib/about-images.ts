export const aboutImages = {
  hero: "/images/about/about-hero.webp",
  mission: "/images/about/about-mission.webp",
  vision: "/images/about/about-vision.webp",
  team: {
    saiful: "/images/about/team-saiful-islam.webp",
    cherry: "/images/about/team-cherry-win.webp",
    angelika: "/images/about/team-angelika-fernandez.webp",
  },
  gallery: [
    "/images/about/gallery-01.webp",
    "/images/about/gallery-02.webp",
    "/images/about/gallery-03.webp",
    "/images/about/gallery-04.webp",
    "/images/about/gallery-05.webp",
    "/images/about/gallery-06.webp",
    "/images/about/gallery-07.webp",
    "/images/about/gallery-08.webp",
    "/images/about/gallery-09.webp",
  ],
} as const;

export const aboutTeamMembers = [
  { key: "saiful", image: aboutImages.team.saiful },
  { key: "cherry", image: aboutImages.team.cherry },
  { key: "angelika", image: aboutImages.team.angelika },
] as const;
