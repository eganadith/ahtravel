"use client";

import { PARTNER_LOGOS } from "@/lib/partner-logos";
import { useTranslations } from "next-intl";
import Image from "next/image";

export function LogoStrap() {
  const t = useTranslations("home.logoStrap");
  const track = [...PARTNER_LOGOS, ...PARTNER_LOGOS];

  return (
    <section
      className="border-y border-charcoal/5 bg-warm-white py-10 md:py-14"
      aria-label={t("ariaLabel")}
    >
      <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.2em] text-charcoal/40">
        {t("title")}
      </p>
      <div className="relative overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-12 px-4 motion-reduce:mx-auto motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-8 motion-reduce:animate-none md:gap-20">
          {track.map((logo, i) => (
            <div
              key={`${logo.src}-${i}`}
              className="flex h-11 w-28 shrink-0 items-center justify-center motion-reduce:[&:nth-child(n+7)]:hidden md:h-14 md:w-36"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={144}
                height={56}
                className="max-h-full max-w-full object-contain opacity-90 transition-opacity duration-300 hover:opacity-100"
              />
            </div>
          ))}
        </div>
        <div
          className="pointer-events-none absolute inset-y-0 start-0 w-12 bg-gradient-to-r from-warm-white to-transparent motion-reduce:hidden md:w-24"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 end-0 w-12 bg-gradient-to-l from-warm-white to-transparent motion-reduce:hidden md:w-24"
          aria-hidden
        />
      </div>
    </section>
  );
}
