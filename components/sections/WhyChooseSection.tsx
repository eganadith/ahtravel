"use client";

import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
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
    <section className="section-padding bg-charcoal/[0.03]">
      <RevealOnScroll>
        <h2 className="mb-12 text-center font-lato text-4xl font-semibold text-navy md:text-5xl">
          {t("title")}
        </h2>
      </RevealOnScroll>
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:grid-cols-2 lg:grid-cols-4 md:px-8">
        {pillars.map((pillar, idx) => (
          <RevealOnScroll key={pillar.key} delay={idx * 0.08}>
            <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
              <pillar.icon className="mx-auto h-10 w-10 text-gold" />
              <h3 className="mt-4 font-lato text-xl font-semibold text-navy">
                {t(`${pillar.key}.title`)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/70">
                {t(`${pillar.key}.desc`)}
              </p>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
