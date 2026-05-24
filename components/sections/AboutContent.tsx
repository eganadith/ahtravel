"use client";

import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
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
      <PageHero
        image={aboutImages.hero}
        imageAlt="A&H Travel and Tourism storefront in Dubai"
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        minHeight="tall"
      />

      <section className="section-padding bg-warm-white">
        <div className="mx-auto max-w-7xl space-y-20 px-4 md:px-8">
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
            <RevealOnScroll>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl shadow-navy/10 ring-1 ring-charcoal/10">
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
              <SectionHeading
                align="left"
                title={t("mission.title")}
                subtitle={t("mission.text")}
                className="max-w-none"
              />
            </RevealOnScroll>
          </div>

          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
            <RevealOnScroll className="md:order-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl shadow-navy/10 ring-1 ring-charcoal/10">
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
              <SectionHeading
                align="left"
                title={t("vision.title")}
                subtitle={t("vision.text")}
                className="max-w-none"
              />
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#f5f5f7]">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <RevealOnScroll>
            <div className="rounded-2xl border border-charcoal/5 bg-white p-8 shadow-sm md:p-12">
              <SectionHeading align="left" title={t("story.title")} className="max-w-none" />
              <div className="mt-8 space-y-4 text-charcoal/80">
                <p className="leading-relaxed md:text-lg">{t("story.p1")}</p>
                <p className="leading-relaxed md:text-lg">{t("story.p2")}</p>
                <p className="leading-relaxed md:text-lg">{t("story.p3")}</p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-padding bg-warm-white">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <RevealOnScroll>
            <SectionHeading title={t("team.title")} subtitle={t("team.subtitle")} />
          </RevealOnScroll>
          <div className="mx-auto mt-12 grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {aboutTeamMembers.map((member, idx) => (
              <RevealOnScroll key={member.key} delay={idx * 0.08}>
                <article className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-charcoal/5 transition hover:shadow-lg">
                  <div className="relative aspect-[3/4] bg-charcoal/5">
                    <Image
                      key={member.image}
                      src={member.image}
                      alt={t(`team.members.${member.key}.name`)}
                      fill
                      className="object-cover object-center"
                      placeholder="blur"
                      blurDataURL={BLUR_DATA_URL}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="border-t border-charcoal/5 px-5 py-5 text-center">
                    <h3 className="font-lato text-lg font-semibold text-navy">
                      {t(`team.members.${member.key}.name`)}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-gold">
                      {t(`team.members.${member.key}.role`)}
                    </p>
                  </div>
                </article>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#f5f5f7]">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <RevealOnScroll>
            <SectionHeading title={t("values.title")} />
          </RevealOnScroll>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, idx) => (
              <RevealOnScroll key={value.key} delay={idx * 0.08}>
                <div className="h-full rounded-2xl border border-charcoal/5 bg-white p-8 text-center shadow-sm">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold/15">
                    <value.icon className="h-7 w-7 text-gold" />
                  </span>
                  <h3 className="mt-5 font-lato text-xl font-semibold text-navy">
                    {t(`values.${value.key}.title`)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/70">
                    {t(`values.${value.key}.desc`)}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-warm-white">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <RevealOnScroll>
            <SectionHeading title={t("gallery.title")} subtitle={t("gallery.subtitle")} />
          </RevealOnScroll>
          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
            {aboutImages.gallery.map((src, idx) => (
              <RevealOnScroll key={src} delay={(idx % 3) * 0.05}>
                <div
                  className={`relative overflow-hidden rounded-2xl ring-1 ring-charcoal/10 ${
                    idx === 0
                      ? "col-span-2 row-span-2 aspect-[4/3] md:aspect-auto md:min-h-[320px]"
                      : "aspect-square"
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
        </div>
      </section>
    </>
  );
}
