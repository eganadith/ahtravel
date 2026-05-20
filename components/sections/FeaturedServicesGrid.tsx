"use client";

import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
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

  return (
    <section className="section-padding bg-warm-white">
      <RevealOnScroll>
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="font-lato text-4xl font-semibold text-navy md:text-5xl">
            {t("title")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-charcoal/70">{t("subtitle")}</p>
        </div>
      </RevealOnScroll>
      <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-4 px-4 sm:grid-cols-2 lg:grid-cols-4 md:px-8">
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
                className="group flex h-full flex-col rounded-2xl border border-charcoal/5 bg-white p-6 shadow-sm transition hover:shadow-lg"
              >
                <service.icon className="h-8 w-8 text-gold" />
                <h3 className="mt-4 font-lato text-xl font-semibold text-navy">{name}</h3>
                <p className="mt-2 flex-1 text-sm text-charcoal/70">{desc}</p>
                <span className="mt-4 h-0.5 w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            </RevealOnScroll>
          );
        })}
      </div>
    </section>
  );
}
