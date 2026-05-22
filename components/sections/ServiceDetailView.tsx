"use client";

import { Button } from "@/components/ui/Button";
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

  const title = t(service.titleKey);
  const includes = t.raw(service.includesKey) as string[];
  const whatsappMsg = t(service.whatsappMessageKey);

  return (
    <article className="grid gap-10 md:grid-cols-2 md:items-start md:gap-12">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl md:sticky md:top-28">
        <Image
          src={imagePaths[service.imageKey]}
          alt={title}
          fill
          className="object-cover"
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>
      <div>
        <h1 className="font-lato text-3xl font-semibold text-navy md:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="mt-3 text-lg font-medium text-gold">{t(service.shortCopyKey)}</p>
        <p className="mt-6 leading-relaxed text-charcoal/80 md:text-lg">
          {t(service.descriptionKey)}
        </p>
        <p className="mt-8 font-semibold text-navy">{tCommon("whatsIncluded")}</p>
        <ul className="mt-4 space-y-3">
          {includes.map((item) => (
            <li key={item} className="flex items-start gap-3 text-charcoal/75">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-8 text-lg font-semibold text-gold">{t(service.priceKey)}</p>
        <a
          href={whatsappUrlWithMessage(whatsappMsg)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block"
        >
          <Button variant="gold" className="!px-8 !py-3">
            {t(service.ctaKey)}
          </Button>
        </a>
      </div>
    </article>
  );
}
