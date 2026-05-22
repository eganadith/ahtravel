"use client";

import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { SOCIAL } from "@/lib/constants";
import { BLUR_DATA_URL, imagePaths } from "@/lib/images";
import { useTranslations } from "next-intl";
import Image from "next/image";

export function CTABanner() {
  const t = useTranslations("home.cta");

  return (
    <section className="relative flex min-h-[400px] items-center overflow-hidden">
      <Image
        src={imagePaths.ctaBanner}
        alt="Dubai aerial"
        fill
        className="object-cover"
        placeholder="blur"
        blurDataURL={BLUR_DATA_URL}
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-navy/70" />
      <RevealOnScroll className="relative z-10 mx-auto max-w-4xl px-4 text-center md:px-8">
        <h2 className="font-lato text-3xl font-semibold text-white md:text-5xl">{t("title")}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/85">{t("subtitle")}</p>
        <a
          href={SOCIAL.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block"
        >
          <Button variant="gold" className="text-base">
            {t("button")}
          </Button>
        </a>
      </RevealOnScroll>
    </section>
  );
}
