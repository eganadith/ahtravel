"use client";

import { PageHero } from "@/components/ui/PageHero";
import { imagePaths } from "@/lib/images";
import { useTranslations } from "next-intl";

export function AdminPageHero() {
  const t = useTranslations("admin.hero");

  return (
    <PageHero
      image={imagePaths.adminHero}
      imageAlt="UAE government and business services"
      title={t("title")}
      subtitle={t("subtitle")}
      minHeight="tall"
    />
  );
}
