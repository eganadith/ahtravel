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
      title: t("tourism.title"),
      points: t.raw("tourism.points") as string[],
      cta: t("tourism.cta"),
    },
    {
      href: "/admin-services" as const,
      image: imagePaths.adminCard,
      icon: FileText,
      title: t("admin.title"),
      points: t.raw("admin.points") as string[],
      cta: t("admin.cta"),
    },
  ];

  return (
    <section className="section-padding bg-warm-white">
      <RevealOnScroll>
        <h2 className="mb-12 text-center font-lato text-4xl font-semibold text-navy md:text-5xl">
          {t("title")}
        </h2>
      </RevealOnScroll>
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
                  alt={card.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  placeholder="blur"
                  blurDataURL={BLUR_DATA_URL}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-navy/70 transition duration-500 group-hover:bg-navy/55" />
                <div className="relative flex h-full flex-col justify-end p-8 text-white">
                  <card.icon className="mb-4 h-10 w-10 text-gold" />
                  <h3 className="font-lato text-2xl font-semibold md:text-3xl">{card.title}</h3>
                  <ul className="mt-4 space-y-2 text-sm text-white/85">
                    {card.points.map((point) => (
                      <li key={point} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                        {point}
                      </li>
                    ))}
                  </ul>
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
