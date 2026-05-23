"use client";

import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { SOCIAL } from "@/lib/constants";
import { BLUR_DATA_URL, imagePaths } from "@/lib/images";
import { MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export function CTABanner() {
  const t = useTranslations("home.cta");

  return (
    <section className="relative flex min-h-[420px] items-center overflow-hidden">
      <Image
        src={imagePaths.ctaBanner}
        alt="Dubai aerial"
        fill
        className="object-cover"
        placeholder="blur"
        blurDataURL={BLUR_DATA_URL}
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-navy/75" />
      <RevealOnScroll className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 text-center md:px-8">
        <h2 className="font-lato text-3xl font-semibold text-white md:text-5xl lg:text-6xl">
          {t("title")}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
          {t("subtitle")}
        </p>
        <a
          href={SOCIAL.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-block"
        >
          <Button variant="gold" className="gap-2 !px-10 !py-3.5 text-base">
            <MessageCircle className="h-5 w-5" />
            {t("button")}
          </Button>
        </a>
      </RevealOnScroll>
    </section>
  );
}
