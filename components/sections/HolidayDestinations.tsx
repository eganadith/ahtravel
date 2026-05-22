"use client";

import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { Button } from "@/components/ui/Button";
import { holidayDestinations } from "@/lib/services/tourism";
import { whatsappUrlWithMessage } from "@/lib/whatsapp";
import { useTranslations } from "next-intl";

export function HolidayDestinations() {
  const t = useTranslations("tourism");
  const tDest = useTranslations("tourism.services.holidayPackages.destinations");

  return (
    <div className="mt-12 border-t border-charcoal/10 pt-12">
      <h4 className="mb-8 font-lato text-2xl font-semibold text-navy">
        {t("destinationsTitle")}
      </h4>
      <div className="grid gap-6 sm:grid-cols-2">
        {holidayDestinations.map((key, idx) => {
          const whatsappMsg = tDest(`${key}.whatsappMessage`);
          return (
            <RevealOnScroll key={key} delay={idx * 0.05}>
              <div className="rounded-xl border border-charcoal/10 bg-warm-white p-6">
                <h5 className="font-lato text-xl font-semibold text-navy">
                  {tDest(`${key}.title`)}
                </h5>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/75">
                  {tDest(`${key}.copy`)}
                </p>
                <p className="mt-3 text-xs text-charcoal/60">{tDest(`${key}.highlights`)}</p>
                <p className="mt-4 text-sm font-semibold text-gold">{tDest(`${key}.from`)}</p>
                <a
                  href={whatsappUrlWithMessage(whatsappMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block"
                >
                  <Button variant="gold" className="!py-2 !text-sm">
                    {tDest(`${key}.cta`)}
                  </Button>
                </a>
              </div>
            </RevealOnScroll>
          );
        })}
      </div>
    </div>
  );
}
