"use client";

import { Link } from "@/i18n/navigation";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { BLUR_DATA_URL, imagePaths } from "@/lib/images";
import { ArrowRight, FileText, Plane } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";

export function ServiceOverviewCards() {
  const t = useTranslations("home.servicesOverview");

  const cards = [
    {
      href: "/tourism" as const,
      image: imagePaths.tourismCard,
      icon: Plane,
      headline: t("tourism.headline"),
      body: t("tourism.body"),
      cta: t("tourism.cta"),
    },
    {
      href: "/admin-services" as const,
      image: imagePaths.adminCard,
      icon: FileText,
      headline: t("admin.headline"),
      body: t("admin.body"),
      cta: t("admin.cta"),
    },
  ];

  return (
    <section className="section-padding bg-warm-white">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
        {cards.map((card, idx) => (
          <RevealOnScroll key={card.href} delay={idx * 0.1}>
            <Link href={card.href} className="group block">
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="relative h-[420px] overflow-hidden rounded-3xl"
              >
                <Image
                  src={card.image}
                  alt={card.headline}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  placeholder="blur"
                  blurDataURL={BLUR_DATA_URL}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-navy/70 transition duration-500 group-hover:bg-navy/55" />
                <div className="relative flex h-full flex-col justify-end p-8 text-white">
                  <card.icon className="mb-4 h-10 w-10 text-gold" />
                  <h3 className="font-lato text-2xl font-semibold md:text-3xl">{card.headline}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/85">{card.body}</p>
                  <span className="mt-6 inline-flex items-center gap-2 font-semibold text-gold">
                    {card.cta}
                    <ArrowRight className="h-5 w-5 transition group-hover:translate-x-2 rtl:rotate-180 rtl:group-hover:-translate-x-2" />
                  </span>
                </div>
              </motion.article>
            </Link>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
