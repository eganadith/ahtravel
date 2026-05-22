"use client";

import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { aboutImages, aboutTeamMembers } from "@/lib/about-images";
import { BLUR_DATA_URL } from "@/lib/images";
import { Award, Clock, Heart, Shield } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

const values = [
  { key: "honesty", icon: Heart },
  { key: "community", icon: Shield },
  { key: "excellence", icon: Award },
  { key: "accessible", icon: Clock },
] as const;

export function AboutContent() {
  const t = useTranslations("about");

  return (
    <>
      <section className="relative flex min-h-[55vh] items-center justify-center overflow-hidden pt-20">
        <Image
          src={aboutImages.hero}
          alt="A&H Travel and Tourism storefront in Dubai"
          fill
          priority
          className="object-cover"
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy/70" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white md:px-8">
          <h1 className="font-lato text-4xl font-semibold md:text-5xl lg:text-6xl">
            {t("hero.title")}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/85">{t("hero.subtitle")}</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-7xl space-y-20 px-4 md:px-8">
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
            <RevealOnScroll>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                <Image
                  src={aboutImages.mission}
                  alt="A&H Travel office interior"
                  fill
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL={BLUR_DATA_URL}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <div>
                <h2 className="font-lato text-3xl font-semibold text-navy md:text-4xl">
                  {t("mission.title")}
                </h2>
                <p className="mt-4 leading-relaxed text-charcoal/80">{t("mission.text")}</p>
              </div>
            </RevealOnScroll>
          </div>

          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
            <RevealOnScroll className="md:order-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                <Image
                  src={aboutImages.vision}
                  alt="World tours at A&H Travel"
                  fill
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL={BLUR_DATA_URL}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1} className="md:order-1">
              <div>
                <h2 className="font-lato text-3xl font-semibold text-navy md:text-4xl">
                  {t("vision.title")}
                </h2>
                <p className="mt-4 leading-relaxed text-charcoal/80">{t("vision.text")}</p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <section className="section-padding bg-charcoal/[0.03]">
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          <RevealOnScroll>
            <h2 className="font-lato text-3xl font-semibold text-navy">{t("story.title")}</h2>
            <p className="mt-6 leading-relaxed text-charcoal/80">{t("story.p1")}</p>
            <p className="mt-4 leading-relaxed text-charcoal/80">{t("story.p2")}</p>
            <p className="mt-4 leading-relaxed text-charcoal/80">{t("story.p3")}</p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-padding">
        <RevealOnScroll>
          <h2 className="mb-4 text-center font-lato text-4xl font-semibold text-navy">
            {t("team.title")}
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-charcoal/70">{t("team.subtitle")}</p>
        </RevealOnScroll>
        <div className="mx-auto grid max-w-5xl gap-8 px-4 sm:grid-cols-2 lg:grid-cols-3 md:px-8">
          {aboutTeamMembers.map((member, idx) => (
            <RevealOnScroll key={member.key} delay={idx * 0.08}>
              <article className="overflow-hidden rounded-2xl bg-white shadow-sm">
                <div className="relative aspect-[3/4]">
                  <Image
                    src={member.image}
                    alt={t(`team.members.${member.key}.name`)}
                    fill
                    className="object-cover object-top"
                    placeholder="blur"
                    blurDataURL={BLUR_DATA_URL}
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
                <div className="border-t border-charcoal/5 px-5 py-5 text-center">
                  <h3 className="font-lato text-lg font-semibold text-navy">
                    {t(`team.members.${member.key}.name`)}
                  </h3>
                  <p className="mt-1 text-sm text-gold">{t(`team.members.${member.key}.role`)}</p>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <section className="section-padding bg-charcoal/[0.03]">
        <RevealOnScroll>
          <h2 className="mb-12 text-center font-lato text-4xl font-semibold text-navy">
            {t("values.title")}
          </h2>
        </RevealOnScroll>
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:grid-cols-2 lg:grid-cols-4 md:px-8">
          {values.map((value, idx) => (
            <RevealOnScroll key={value.key} delay={idx * 0.08}>
              <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
                <value.icon className="mx-auto h-10 w-10 text-gold" />
                <h3 className="mt-4 font-lato text-xl font-semibold text-navy">
                  {t(`values.${value.key}.title`)}
                </h3>
                <p className="mt-2 text-sm text-charcoal/70">{t(`values.${value.key}.desc`)}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <section className="section-padding">
        <RevealOnScroll>
          <h2 className="mb-4 text-center font-lato text-4xl font-semibold text-navy">
            {t("gallery.title")}
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-charcoal/70">
            {t("gallery.subtitle")}
          </p>
        </RevealOnScroll>
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-4 md:grid-cols-3 md:gap-4 md:px-8">
          {aboutImages.gallery.map((src, idx) => (
            <RevealOnScroll key={src} delay={(idx % 3) * 0.05}>
              <div
                className={`relative overflow-hidden rounded-2xl ${
                  idx === 0 ? "col-span-2 row-span-2 aspect-[4/3] md:aspect-auto md:min-h-[320px]" : "aspect-square"
                }`}
              >
                <Image
                  src={src}
                  alt={t("gallery.imageAlt", { n: idx + 1 })}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  placeholder="blur"
                  blurDataURL={BLUR_DATA_URL}
                  sizes={idx === 0 ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 50vw, 33vw"}
                />
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <section className="section-padding bg-charcoal/[0.03]">
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
