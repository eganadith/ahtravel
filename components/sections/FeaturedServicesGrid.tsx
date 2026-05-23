"use client";

import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whatsappUrl } from "@/lib/whatsapp";
import {
  Building2,
  FileText,
  Hotel,
  Moon,
  Palmtree,
  Plane,
} from "lucide-react";
import { useTranslations } from "next-intl";

const services = [
  { key: "airTicketing", icon: Plane, large: true },
  { key: "employmentVisa", icon: Building2, large: true },
  { key: "umrah", icon: Moon, large: false },
  { key: "desertSafari", icon: Palmtree, large: false },
  { key: "hotelBooking", icon: Hotel, large: false },
  { key: "documentTyping", icon: FileText, large: false },
] as const;

export function FeaturedServicesGrid() {
  const t = useTranslations("home.featured");
  const tCommon = useTranslations("common");

  return (
    <section className="section-padding bg-warm-white">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <RevealOnScroll>
          <SectionHeading title={t("title")} subtitle={t("subtitle")} />
        </RevealOnScroll>
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, idx) => {
            const name = t(`${service.key}.name`);
            const desc = t(`${service.key}.desc`);
            return (
              <RevealOnScroll
                key={service.key}
                delay={idx * 0.05}
                className={service.large ? "sm:col-span-1 lg:col-span-2" : ""}
              >
                <a
                  href={whatsappUrl(name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col rounded-2xl border border-charcoal/5 bg-white p-6 shadow-sm transition hover:shadow-lg hover:ring-1 hover:ring-gold/20"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/15">
                    <service.icon className="h-6 w-6 text-gold" />
                  </span>
                  <h3 className="mt-5 font-lato text-xl font-semibold text-navy">{name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal/70">{desc}</p>
                  <span className="mt-5 text-sm font-medium text-gold transition group-hover:underline">
                    {tCommon("enquireNow")} →
                  </span>
                </a>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
