import type { ImageKey } from "@/lib/images";

export type AdminService = {
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

export const adminServices: AdminService[] = [
  { id: "employment-visa", imageKey: "employmentVisa", ...s("employmentVisa") },
  { id: "family-visa", imageKey: "familyVisa", ...s("familyVisa") },
  { id: "tourist-visa", imageKey: "touristVisa", ...s("touristVisa") },
  { id: "schengen-visa", imageKey: "schengen", ...s("schengenVisa") },
  { id: "tasheel", imageKey: "tasheel", ...s("tasheel") },
  { id: "amer", imageKey: "amer", ...s("amer") },
  { id: "emirates-id", imageKey: "emiratesId", ...s("emiratesId") },
  { id: "ded", imageKey: "ded", ...s("ded") },
  { id: "document-typing", imageKey: "documentTyping", ...s("documentTyping") },
  { id: "translation", imageKey: "translation", ...s("translation") },
  { id: "pro-services", imageKey: "pro", ...s("proServices") },
  { id: "business-setup", imageKey: "businessSetup", ...s("businessSetup") },
  { id: "ejari", imageKey: "ejari", ...s("ejari") },
  { id: "driving-license", imageKey: "drivingLicense", ...s("drivingLicense") },
  { id: "medical-insurance", imageKey: "medicalInsurance", ...s("medicalInsurance") },
];
