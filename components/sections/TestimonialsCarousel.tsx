"use client";

import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { AnimatePresence, motion } from "framer-motion";
import { Star } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const flags: Record<string, string> = {
  Egypt: "🇪🇬",
  Bangladesh: "🇧🇩",
  Philippines: "🇵🇭",
  مصر: "🇪🇬",
  بنغلاديش: "🇧🇩",
  الفلبين: "🇵🇭",
};

export function TestimonialsCarousel() {
  const t = useTranslations("home.testimonials");
  const items = t.raw("items") as { name: string; country: string; quote: string }[];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % items.length), 4000);
    return () => clearInterval(timer);
  }, [items.length]);

  const current = items[index];

  return (
    <section className="section-padding bg-navy text-warm-white">
      <RevealOnScroll>
        <h2 className="mb-12 text-center font-lato text-4xl font-semibold md:text-5xl">
          {t("title")}
        </h2>
      </RevealOnScroll>
      <div className="relative mx-auto max-w-3xl overflow-hidden px-4">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={index}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="mb-4 flex justify-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-gold text-gold" />
              ))}
            </div>
            <p className="text-lg leading-relaxed text-warm-white/90 md:text-xl">
              &ldquo;{current.quote}&rdquo;
            </p>
            <footer className="mt-8">
              <p className="font-semibold">{current.name}</p>
              <p className="mt-1 text-sm text-gold">
                {flags[current.country] ?? "🌍"} {current.country}
              </p>
            </footer>
          </motion.blockquote>
        </AnimatePresence>
        <div className="mt-8 flex justify-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-8 bg-gold" : "w-2 bg-white/30"
              }`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
