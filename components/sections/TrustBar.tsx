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
    { value: 500, suffix: "+", label: t("clients") },
    { value: 10, suffix: "+", label: t("countries") },
    { value: 5, suffix: "", label: t("rating"), display: "5★" },
    { value: 2020, suffix: "", label: t("established"), display: "2020" },
  ];

  return (
    <section className="border-y border-charcoal/5 bg-charcoal/[0.03] py-12">
      <RevealOnScroll>
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 md:grid-cols-4 md:px-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-lato text-3xl font-bold text-navy md:text-4xl">
                {"display" in stat && stat.display ? (
                  stat.display
                ) : (
                  <Counter value={stat.value} suffix={stat.suffix} />
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
