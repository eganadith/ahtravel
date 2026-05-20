"use client";

import { BLUR_DATA_URL, imagePaths } from "@/lib/images";
import { useTranslations } from "next-intl";
import Image from "next/image";

export function TourismPageHero() {
  const t = useTranslations("tourism.hero");

  return (
    <section className="relative pt-20">
      <div className="grid min-h-[60vh] grid-cols-1 lg:grid-cols-2">
        <div className="relative min-h-[35vh]">
          <Image
            src={imagePaths.tourismHeroLeft}
            alt="Burj Khalifa"
            fill
            priority
            className="object-cover"
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
            sizes="50vw"
          />
        </div>
        <div className="relative min-h-[35vh]">
          <Image
            src={imagePaths.tourismHeroRight}
            alt="Desert safari"
            fill
            className="object-cover"
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
            sizes="50vw"
          />
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-8 z-10 flex justify-center px-4 md:bottom-12">
        <div className="max-w-3xl rounded-2xl bg-navy/90 px-8 py-8 text-center text-white backdrop-blur-sm md:py-10">
          <h1 className="font-lato text-3xl font-semibold md:text-5xl">{t("title")}</h1>
          <p className="mt-4 text-white/85 md:text-lg">{t("subtitle")}</p>
        </div>
      </div>
    </section>
  );
}
