"use client";

import { PageHero } from "@/components/ui/PageHero";
import { imagePaths } from "@/lib/images";
import { useTranslations } from "next-intl";

export function TourismPageHero() {
  const t = useTranslations("tourism.hero");

  return (
    <PageHero
      image={imagePaths.tourismHero}
      imageAlt="Happy traveler in Dubai"
      title={t("title")}
      subtitle={t("subtitle")}
      minHeight="tall"
    />
  );
}
