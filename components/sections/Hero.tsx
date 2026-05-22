"use client";

import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/Button";
import { HERO_VIDEO, SOCIAL } from "@/lib/constants";
import { BLUR_DATA_URL, imagePaths } from "@/lib/images";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

const heroVideoSrc = process.env.NEXT_PUBLIC_HERO_VIDEO ?? HERO_VIDEO;

export function Hero() {
  const t = useTranslations("home.hero");
  const words = t("headline1").split(" ");

  return (
    <section className="relative flex min-h-screen items-end overflow-hidden">
      <Image
        src={imagePaths.hero}
        alt=""
        fill
        priority
        className="object-cover"
        placeholder="blur"
        blurDataURL={BLUR_DATA_URL}
        sizes="100vw"
        aria-hidden
      />
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 z-[1] h-full w-full object-cover"
        poster={imagePaths.hero}
      >
        <source src={heroVideoSrc} type="video/quicktime" />
        <source src={heroVideoSrc} />
      </video>
      <div className="absolute inset-0 z-[2] bg-gradient-to-t from-navy via-navy/60 to-navy/20" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-24 pt-32 md:px-8 md:pb-32">
        <h1 className="max-w-4xl font-lato text-4xl font-semibold leading-tight text-white md:text-6xl lg:text-7xl">
          {words.map((word, i) => (
            <motion.span
              key={`${word}-${i}`}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="me-[0.25em] inline-block"
            >
              {word}
            </motion.span>
          ))}
          <br />
          <motion.span
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: words.length * 0.08 + 0.1, duration: 0.5 }}
            className="inline-block"
          >
            {t("headline2")}
          </motion.span>
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-6 max-w-2xl text-lg text-white/85 md:text-xl"
        >
          {t("subheadline")}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link href="/tourism">
            <Button variant="gold">{t("exploreServices")}</Button>
          </Link>
          <a href={SOCIAL.whatsapp} target="_blank" rel="noopener noreferrer">
            <Button variant="outline-white">{t("whatsappUs")}</Button>
          </a>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 start-1/2 z-10 -translate-x-1/2 rtl:translate-x-1/2"
      >
        <ChevronDown className="h-8 w-8 animate-bounce-slow text-white/70" />
      </motion.div>
    </section>
  );
}
