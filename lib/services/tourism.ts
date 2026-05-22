import type { ImageKey } from "@/lib/images";

export type TourismService = {
  id: string;
  titleKey: string;
  shortCopyKey: string;
  descriptionKey: string;
  includesKey: string;
  priceKey: string;
  ctaKey: string;
  whatsappMessageKey: string;
  imageKey: ImageKey;
  hasDestinations?: boolean;
};

const s = (key: string, extra?: Partial<TourismService>) => ({
  titleKey: `services.${key}.title`,
  shortCopyKey: `services.${key}.shortCopy`,
  descriptionKey: `services.${key}.description`,
  includesKey: `services.${key}.includes`,
  priceKey: `services.${key}.price`,
  ctaKey: `services.${key}.cta`,
  whatsappMessageKey: `services.${key}.whatsappMessage`,
  ...extra,
});

export const tourismServices: TourismService[] = [
  { id: "air-ticketing", imageKey: "airTicketing", ...s("airTicketing") },
  { id: "visit-work-visa", imageKey: "visitVisa", ...s("visitWorkVisa") },
  { id: "hotel-booking", imageKey: "hotelBooking", ...s("hotelBooking") },
  {
    id: "holiday-packages",
    imageKey: "tourPackages",
    ...s("holidayPackages", { hasDestinations: true }),
  },
  { id: "cruise-tours", imageKey: "cruise", ...s("cruiseTours") },
  { id: "umrah-packages", imageKey: "umrah", ...s("umrahPackages") },
  { id: "desert-safari", imageKey: "desertSafari", ...s("desertSafari") },
  { id: "horse-riding", imageKey: "horseRiding", ...s("horseRiding") },
  { id: "travel-insurance", imageKey: "travelInsurance", ...s("travelInsurance") },
  { id: "airport-pickup", imageKey: "airportPickup", ...s("airportPickup") },
];

export const holidayDestinations = [
  "thailand",
  "malaysia",
  "singapore",
  "azerbaijan",
  "vietnam",
  "myanmar",
  "europe",
] as const;
