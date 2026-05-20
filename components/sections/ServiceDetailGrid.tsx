"use client";

import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { Button } from "@/components/ui/Button";
import { BLUR_DATA_URL, imagePaths, type ImageKey } from "@/lib/images";
import { whatsappUrl } from "@/lib/whatsapp";
import Image from "next/image";
import { useTranslations } from "next-intl";

type ServiceItem = {
  id: string;
  titleKey: string;
  descriptionKey: string;
  priceKey: string;
  imageKey: ImageKey;
};

type Props = {
  namespace: "tourism" | "admin";
  services: ServiceItem[];
};

export function ServiceDetailGrid({ namespace, services }: Props) {
  const t = useTranslations(namespace);
  const tCommon = useTranslations("common");

  return (
    <section className="section-padding bg-warm-white">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <RevealOnScroll>
          <h2 className="mb-12 text-center font-lato text-4xl font-semibold text-navy">
            {t("servicesTitle")}
          </h2>
        </RevealOnScroll>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => {
            const title = t(service.titleKey);
            const description = t(service.descriptionKey);
            const price = t(service.priceKey);
            return (
              <RevealOnScroll key={service.id} delay={idx * 0.05}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-lg shadow-navy/5 transition hover:shadow-xl">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={imagePaths[service.imageKey]}
                      alt={title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      placeholder="blur"
                      blurDataURL={BLUR_DATA_URL}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-lato text-xl font-semibold text-navy">{title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal/70">
                      {description}
                    </p>
                    <p className="mt-4 text-sm font-semibold text-gold">{price}</p>
                    <a
                      href={whatsappUrl(title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4"
                    >
                      <Button variant="gold" className="w-full !py-2.5 text-sm">
                        {tCommon("enquireNow")}
                      </Button>
                    </a>
                  </div>
                </article>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
