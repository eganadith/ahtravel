"use client";

import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { BLUR_DATA_URL, imagePaths } from "@/lib/images";
import { Award, Clock, Shield, Wallet } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

const pillars = [
  { key: "trusted", icon: Shield },
  { key: "fast", icon: Clock },
  { key: "affordable", icon: Wallet },
  { key: "professional", icon: Award },
] as const;

export function AboutContent() {
  const t = useTranslations("about");

  return (
    <>
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden bg-navy pt-20 text-white">
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center md:px-8">
          <h1 className="font-lato text-4xl font-semibold md:text-5xl">{t("hero.title")}</h1>
          <p className="mt-6 text-lg text-white/85">{t("hero.subtitle")}</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2 md:px-8">
          <RevealOnScroll>
            <div>
              <h2 className="font-lato text-3xl font-semibold text-navy">{t("story.title")}</h2>
              <p className="mt-6 leading-relaxed text-charcoal/80">{t("story.p1")}</p>
              <p className="mt-4 leading-relaxed text-charcoal/80">{t("story.p2")}</p>
              <h3 className="mt-10 font-lato text-2xl font-semibold text-navy">
                {t("mission.title")}
              </h3>
              <p className="mt-4 leading-relaxed text-charcoal/80">{t("mission.text")}</p>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src={imagePaths.aboutTeam}
                alt="A&H Travel team"
                fill
                className="object-cover"
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-padding bg-charcoal/[0.03]">
        <RevealOnScroll>
          <h2 className="mb-12 text-center font-lato text-4xl font-semibold text-navy">
            {t("pillars.title")}
          </h2>
        </RevealOnScroll>
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:grid-cols-2 lg:grid-cols-4 md:px-8">
          {pillars.map((pillar, idx) => (
            <RevealOnScroll key={pillar.key} delay={idx * 0.08}>
              <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
                <pillar.icon className="mx-auto h-10 w-10 text-gold" />
                <h3 className="mt-4 font-lato text-xl font-semibold text-navy">
                  {t(`pillars.${pillar.key}.title`)}
                </h3>
                <p className="mt-2 text-sm text-charcoal/70">
                  {t(`pillars.${pillar.key}.desc`)}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <section className="section-padding">
        <RevealOnScroll>
          <h2 className="mb-10 text-center font-lato text-3xl font-semibold text-navy">
            {t("partners.title")}
          </h2>
        </RevealOnScroll>
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-8 px-4 opacity-60 grayscale md:px-8">
          {[1, 2, 3, 4].map((n) => (
            <Image
              key={n}
              src={`/images/partners/partner-${n}.svg`}
              alt={`Partner ${n}`}
              width={120}
              height={48}
            />
          ))}
        </div>
      </section>
    </>
  );
}
