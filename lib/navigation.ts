import { adminServices } from "@/lib/services/admin";
import { holidayDestinations, tourismServices } from "@/lib/services/tourism";
import { adminServicePath, tourismServicePath } from "@/lib/services/utils";

export type MegaMenuId = "tourism" | "admin";

export type MegaMenuLink = {
  href: string;
  labelKey: string;
  namespace: "tourism" | "admin" | "navMenu";
  large?: boolean;
};

export type MegaMenuColumn = {
  headingKey: string;
  links: MegaMenuLink[];
};

export type MegaMenuConfig = {
  id: MegaMenuId;
  pageHref: string;
  exploreAllKey: string;
  columns: MegaMenuColumn[];
};

const tourismFeatured = ["airTicketing", "umrahPackages", "desertSafari", "holidayPackages"];

const adminFeatured = ["employmentVisa", "familyVisa", "touristVisa", "businessSetup"];

function tourismServiceLink(id: string, serviceKey: string, large = false): MegaMenuLink {
  return {
    href: tourismServicePath(id),
    labelKey: `services.${serviceKey}.title`,
    namespace: "tourism",
    large,
  };
}

function adminServiceLink(id: string, serviceKey: string, large = false): MegaMenuLink {
  return {
    href: adminServicePath(id),
    labelKey: `services.${serviceKey}.title`,
    namespace: "admin",
    large,
  };
}

const tourismServiceKeyById = Object.fromEntries(
  tourismServices.map((s) => [s.id, s.titleKey.replace("services.", "").replace(".title", "")])
) as Record<string, string>;

const adminServiceKeyById = Object.fromEntries(
  adminServices.map((s) => [s.id, s.titleKey.replace("services.", "").replace(".title", "")])
) as Record<string, string>;

export const megaMenus: MegaMenuConfig[] = [
  {
    id: "tourism",
    pageHref: "/tourism",
    exploreAllKey: "exploreAllTourism",
    columns: [
      {
        headingKey: "exploreTourism",
        links: [
          { href: "/tourism", labelKey: "exploreAllTourism", namespace: "navMenu", large: true },
          ...tourismFeatured.map((key) => {
            const id = tourismServices.find((s) => s.titleKey.includes(key))!.id;
            return tourismServiceLink(id, key, true);
          }),
        ],
      },
      {
        headingKey: "allTourism",
        links: tourismServices.map((s) => {
          const key = tourismServiceKeyById[s.id];
          return tourismServiceLink(s.id, key);
        }),
      },
      {
        headingKey: "destinations",
        links: holidayDestinations.map((dest) => ({
          href: tourismServicePath("holiday-packages"),
          labelKey: `services.holidayPackages.destinations.${dest}.title`,
          namespace: "tourism",
        })),
      },
    ],
  },
  {
    id: "admin",
    pageHref: "/admin-services",
    exploreAllKey: "exploreAllAdmin",
    columns: [
      {
        headingKey: "exploreAdmin",
        links: [
          { href: "/admin-services", labelKey: "exploreAllAdmin", namespace: "navMenu", large: true },
          ...adminFeatured.map((key) => {
            const s = adminServices.find((x) => x.titleKey.includes(key))!;
            return adminServiceLink(s.id, key, true);
          }),
        ],
      },
      {
        headingKey: "allAdmin",
        links: adminServices.map((s) => {
          const key = adminServiceKeyById[s.id];
          return adminServiceLink(s.id, key);
        }),
      },
    ],
  },
];

export const simpleNavLinks = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/contact", key: "contact" },
] as const;

export const megaNavItems = [
  { id: "tourism" as const, key: "tourism" },
  { id: "admin" as const, key: "admin" },
] as const;
