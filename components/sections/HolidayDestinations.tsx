"use client";

import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { holidayDestinations } from "@/lib/services/tourism";
import { whatsappUrlWithMessage } from "@/lib/whatsapp";
import { Check, MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";

export function HolidayDestinations() {
  const t = useTranslations("tourism");
  const tDest = useTranslations("tourism.services.holidayPackages.destinations");

  return (
    <div className="mt-20 border-t border-charcoal/10 pt-16">
      <RevealOnScroll>
        <SectionHeading align="left" title={t("destinationsTitle")} className="max-w-2xl" />
      </RevealOnScroll>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {holidayDestinations.map((key, idx) => {
          const whatsappMsg = tDest(`${key}.whatsappMessage`);
          return (
            <RevealOnScroll key={key} delay={idx * 0.05}>
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-charcoal/5 bg-white shadow-sm transition hover:shadow-md">
                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <h3 className="font-lato text-xl font-semibold text-navy md:text-2xl">
                    {tDest(`${key}.title`)}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal/75 md:text-base">
                    {tDest(`${key}.copy`)}
                  </p>
                  <p className="mt-4 flex items-start gap-2 text-sm text-charcoal/65">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={3} />
                    {tDest(`${key}.highlights`)}
                  </p>
                </div>
                <div className="border-t border-charcoal/5 bg-navy px-6 py-5 text-warm-white">
                  <p className="font-lato text-lg font-semibold text-gold">{tDest(`${key}.from`)}</p>
                  <a
                    href={whatsappUrlWithMessage(whatsappMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block"
                  >
                    <Button variant="gold" className="gap-2 !py-2.5 !text-sm">
                      <MessageCircle className="h-4 w-4" />
                      {tDest(`${key}.cta`)}
                    </Button>
                  </a>
                </div>
              </article>
            </RevealOnScroll>
          );
        })}
      </div>
    </div>
  );
}
