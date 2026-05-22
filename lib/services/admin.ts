import type { ImageKey } from "@/lib/images";

export type AdminService = {
  id: string;
  titleKey: string;
  shortCopyKey: string;
  descriptionKey: string;
  includesKey: string;
  priceKey: string;
  ctaKey: string;
  whatsappMessageKey: string;
  imageKey: ImageKey;
};

const s = (key: string) => ({
  titleKey: `services.${key}.title`,
  shortCopyKey: `services.${key}.shortCopy`,
  descriptionKey: `services.${key}.description`,
  includesKey: `services.${key}.includes`,
  priceKey: `services.${key}.price`,
  ctaKey: `services.${key}.cta`,
  whatsappMessageKey: `services.${key}.whatsappMessage`,
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
  { id: "business-setup", imageKey: "businessSetup", ...s("businessSetup") },
  { id: "pro-services", imageKey: "pro", ...s("proServices") },
  { id: "document-typing", imageKey: "documentTyping", ...s("documentTyping") },
  { id: "translation", imageKey: "translation", ...s("translation") },
  { id: "ejari", imageKey: "ejari", ...s("ejari") },
  { id: "medical-insurance", imageKey: "medicalInsurance", ...s("medicalInsurance") },
];
