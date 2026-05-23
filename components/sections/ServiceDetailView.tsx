"use client";

import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { EnquiryCard } from "@/components/ui/EnquiryCard";
import { BLUR_DATA_URL, imagePaths, type ImageKey } from "@/lib/images";
import { whatsappUrlWithMessage } from "@/lib/whatsapp";
import { Check } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

type ServiceItem = {
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

type Props = {
  namespace: "tourism" | "admin";
  service: ServiceItem;
};

export function ServiceDetailView({ namespace, service }: Props) {
  const t = useTranslations(namespace);
  const tCommon = useTranslations("common");
  const tCarousel = useTranslations("servicesCarousel");

  const title = t(service.titleKey);
  const includes = t.raw(service.includesKey) as string[];
  const whatsappMsg = t(service.whatsappMessageKey);
  const eyebrow =
    namespace === "tourism" ? tCarousel("tourismEyebrow") : tCarousel("adminEyebrow");

  return (
    <article className="grid gap-10 lg:grid-cols-12 lg:gap-14">
      <RevealOnScroll className="lg:col-span-5">
        <div className="relative overflow-hidden rounded-3xl shadow-xl shadow-navy/10 ring-1 ring-charcoal/10 lg:sticky lg:top-28">
          <div className="relative aspect-[4/3] lg:aspect-[3/4]">
            <Image
              src={imagePaths[service.imageKey]}
              alt={title}
              fill
              className="object-cover"
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent lg:hidden" />
          </div>
        </div>
      </RevealOnScroll>

      <div className="flex flex-col lg:col-span-7">
        <RevealOnScroll delay={0.05}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{eyebrow}</p>
          <h1 className="mt-3 font-lato text-3xl font-semibold leading-tight text-navy md:text-4xl lg:text-[2.75rem]">
            {title}
          </h1>
          <p className="mt-4 text-lg font-medium leading-relaxed text-charcoal/75 md:text-xl">
            {t(service.shortCopyKey)}
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <p className="mt-6 leading-relaxed text-charcoal/80 md:text-lg">
            {t(service.descriptionKey)}
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.15}>
          <div className="mt-8 rounded-2xl border border-charcoal/5 bg-white p-6 shadow-sm md:p-8">
            <h2 className="font-lato text-lg font-semibold text-navy">{tCommon("whatsIncluded")}</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {includes.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl bg-warm-white px-4 py-3 text-sm text-charcoal/80 md:text-base"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/15">
                    <Check className="h-3.5 w-3.5 text-gold" strokeWidth={3} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <div className="mt-8">
            <EnquiryCard
              label={tCommon("enquireNow")}
              price={t(service.priceKey)}
              note={tCommon("replyTime")}
              ctaLabel={t(service.ctaKey)}
              ctaHref={whatsappUrlWithMessage(whatsappMsg)}
              phone={tCommon("phone")}
            />
          </div>
        </RevealOnScroll>
      </div>
    </article>
  );
}
