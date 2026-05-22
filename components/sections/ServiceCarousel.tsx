"use client";

import { Link } from "@/i18n/navigation";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { BLUR_DATA_URL, imagePaths, type ImageKey } from "@/lib/images";
import { servicePath, type ServiceNamespace } from "@/lib/services/utils";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useCallback, useEffect, useRef, useState } from "react";

type ServiceItem = {
  id: string;
  titleKey: string;
  shortCopyKey: string;
  imageKey: ImageKey;
};

type Props = {
  namespace: ServiceNamespace;
  services: ServiceItem[];
};

export function ServiceCarousel({ namespace, services }: Props) {
  const t = useTranslations(namespace);
  const tCarousel = useTranslations("servicesCarousel");
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  }, []);

  useEffect(() => {
    updateScrollState();
    window.addEventListener("resize", updateScrollState);
    return () => window.removeEventListener("resize", updateScrollState);
  }, [updateScrollState, services.length]);

  const scrollBy = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = Math.min(el.clientWidth * 0.85, 420);
    el.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
    setTimeout(updateScrollState, 350);
  };

  const eyebrow =
    namespace === "tourism" ? tCarousel("tourismEyebrow") : tCarousel("adminEyebrow");

  return (
    <section className="section-padding bg-[#f5f5f7]">
      <div className="mx-auto max-w-7xl">
        <RevealOnScroll>
          <div className="mb-10 max-w-3xl md:mb-12">
            <h2 className="font-lato text-3xl font-semibold tracking-tight text-navy md:text-4xl lg:text-5xl">
              {t("servicesTitle")}
            </h2>
            <p className="mt-4 text-lg text-charcoal/60 md:text-xl">
              {tCarousel("subtitle")}
            </p>
          </div>
        </RevealOnScroll>

        <div className="relative">
          <div
            ref={scrollRef}
            onScroll={updateScrollState}
            className={cn(
              "flex gap-4 overflow-x-auto pb-4 md:gap-5",
              "snap-x snap-mandatory scroll-smooth",
              "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            )}
          >
            {services.map((service, idx) => {
              const title = t(service.titleKey);
              const shortCopy = t(service.shortCopyKey);
              const href = servicePath(namespace, service.id);

              return (
                <RevealOnScroll
                  key={service.id}
                  delay={idx * 0.04}
                  className="w-[min(85vw,340px)] shrink-0 snap-start md:w-[380px]"
                >
                  <Link href={href} className="group block h-full">
                    <motion.article
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.25 }}
                      className="flex h-[min(72vh,520px)] flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-sm ring-1 ring-charcoal/5 transition-shadow group-hover:shadow-lg"
                    >
                      <div className="flex flex-1 flex-col p-7 md:p-8">
                        <p className="text-[11px] font-medium uppercase tracking-widest text-charcoal/45">
                          {eyebrow}
                        </p>
                        <h3 className="mt-4 font-lato text-2xl font-semibold leading-snug text-navy md:text-[1.65rem]">
                          {title}
                        </h3>
                        <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-charcoal/55 md:text-[15px]">
                          {shortCopy}
                        </p>
                        <span className="mt-5 text-sm font-medium text-gold transition group-hover:underline">
                          {tCarousel("learnMore")} →
                        </span>
                      </div>
                      <div className="relative h-44 shrink-0 md:h-52">
                        <Image
                          src={imagePaths[service.imageKey]}
                          alt={title}
                          fill
                          className="object-cover transition duration-500 group-hover:scale-[1.03]"
                          placeholder="blur"
                          blurDataURL={BLUR_DATA_URL}
                          sizes="380px"
                        />
                      </div>
                    </motion.article>
                  </Link>
                </RevealOnScroll>
              );
            })}
          </div>

          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-24 bg-gradient-to-l from-[#f5f5f7] to-transparent md:block" />

          <div className="mt-6 flex justify-end gap-2 md:absolute md:-right-2 md:top-1/2 md:mt-0 md:-translate-y-1/2">
            <button
              type="button"
              onClick={() => scrollBy("left")}
              disabled={!canScrollLeft}
              aria-label={tCarousel("scrollPrev")}
              className={cn(
                "flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/10 bg-white shadow-md transition",
                canScrollLeft
                  ? "text-navy hover:border-charcoal/20 hover:shadow-lg"
                  : "cursor-not-allowed text-charcoal/25 opacity-50"
              )}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollBy("right")}
              disabled={!canScrollRight}
              aria-label={tCarousel("scrollNext")}
              className={cn(
                "flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/10 bg-white shadow-md transition",
                canScrollRight
                  ? "text-navy hover:border-charcoal/20 hover:shadow-lg"
                  : "cursor-not-allowed text-charcoal/25 opacity-50"
              )}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
