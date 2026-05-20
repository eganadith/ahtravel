"use client";

import { BLUR_DATA_URL, imagePaths } from "@/lib/images";
import { useTranslations } from "next-intl";
import Image from "next/image";

export function AdminPageHero() {
  const t = useTranslations("admin.hero");

  return (
    <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden pt-20">
      <Image
        src={imagePaths.adminHero}
        alt="Dubai office"
        fill
        priority
        className="object-cover"
        placeholder="blur"
        blurDataURL={BLUR_DATA_URL}
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-navy/65" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white md:px-8">
        <h1 className="font-lato text-4xl font-semibold md:text-5xl lg:text-6xl">
          {t("title")}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/85">{t("subtitle")}</p>
      </div>
    </section>
  );
}
