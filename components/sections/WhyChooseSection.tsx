"use client";

import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Award, Clock, Shield, Wallet } from "lucide-react";
import { useTranslations } from "next-intl";

const pillars = [
  { key: "reliable", icon: Shield },
  { key: "fast", icon: Clock },
  { key: "affordable", icon: Wallet },
  { key: "professional", icon: Award },
] as const;

export function WhyChooseSection() {
  const t = useTranslations("home.pillars");

  return (
    <section className="section-padding bg-[#f5f5f7]">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <RevealOnScroll>
          <SectionHeading title={t("title")} />
        </RevealOnScroll>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, idx) => (
            <RevealOnScroll key={pillar.key} delay={idx * 0.08}>
              <div className="h-full rounded-2xl border border-charcoal/5 bg-white p-8 text-center shadow-sm">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold/15">
                  <pillar.icon className="h-7 w-7 text-gold" />
                </span>
                <h3 className="mt-5 font-lato text-xl font-semibold text-navy">
                  {t(`${pillar.key}.title`)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/70">
                  {t(`${pillar.key}.desc`)}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
