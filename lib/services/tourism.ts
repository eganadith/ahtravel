import type { ImageKey } from "@/lib/images";

export type TourismService = {
  id: string;
  titleKey: string;
  descriptionKey: string;
  priceKey: string;
  imageKey: ImageKey;
};

const s = (key: string) => ({
  titleKey: `services.${key}.title`,
  descriptionKey: `services.${key}.description`,
  priceKey: `services.${key}.price`,
});

export const tourismServices: TourismService[] = [
  { id: "air-ticketing", imageKey: "airTicketing", ...s("airTicketing") },
  { id: "visit-work-visa", imageKey: "visitVisa", ...s("visitWorkVisa") },
  { id: "hotel-booking", imageKey: "hotelBooking", ...s("hotelBooking") },
  { id: "holiday-packages", imageKey: "tourPackages", ...s("holidayPackages") },
  { id: "cruise-tours", imageKey: "cruise", ...s("cruiseTours") },
  { id: "umrah-packages", imageKey: "umrah", ...s("umrahPackages") },
  { id: "desert-safari", imageKey: "desertSafari", ...s("desertSafari") },
  { id: "horse-riding", imageKey: "horseRiding", ...s("horseRiding") },
  { id: "travel-insurance", imageKey: "travelInsurance", ...s("travelInsurance") },
  { id: "airport-pickup", imageKey: "airportPickup", ...s("airportPickup") },
];
