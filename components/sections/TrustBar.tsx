"use client";

import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = value / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function TrustBar() {
  const t = useTranslations("home.trustBar");

  const stats = [
    { value: 2500, suffix: "+", label: t("clients"), counter: true },
    { value: 50, suffix: "+", label: t("destinations"), counter: true },
    { value: 15, suffix: "+", label: t("adminServices"), counter: true },
    { value: 0, suffix: "", label: t("availability"), counter: false, display: "7" },
  ];

  return (
    <section className="border-y border-charcoal/5 bg-[#f5f5f7] py-12 md:py-14">
      <RevealOnScroll>
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 md:grid-cols-4 md:gap-6 md:px-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-charcoal/5 bg-white px-4 py-6 text-center shadow-sm md:px-6 md:py-8"
            >
              <p className="font-lato text-3xl font-bold text-navy md:text-4xl">
                {stat.counter ? (
                  <Counter value={stat.value} suffix={stat.suffix} />
                ) : (
                  stat.display
                )}
              </p>
              <p className="mt-2 text-sm text-charcoal/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </RevealOnScroll>
    </section>
  );
}
