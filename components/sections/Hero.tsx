"use client";

import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/Button";
import { HERO_VIDEO, SOCIAL } from "@/lib/constants";
import { BLUR_DATA_URL, imagePaths } from "@/lib/images";
import { motion } from "framer-motion";
import { ChevronDown, Volume2, VolumeX } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useCallback, useRef, useState } from "react";

const heroVideo = HERO_VIDEO;

export function Hero() {
  const t = useTranslations("home.hero");
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const words = t("headline1").split(" ");

  const toggleSound = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    const nextMuted = !video.muted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);

    if (!nextMuted) {
      void video.play().catch(() => {
        video.muted = true;
        setIsMuted(true);
      });
    }
  }, []);

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
        ref={videoRef}
        autoPlay
        muted={isMuted}
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 z-[1] h-full w-full object-cover"
        poster={imagePaths.hero}
      >
        <source src={heroVideo.webm} type="video/webm" />
        <source src={heroVideo.mp4} type="video/mp4" />
      </video>
      <div className="absolute inset-0 z-[2] bg-gradient-to-t from-navy/75 via-navy/30 to-transparent" />
      <button
        type="button"
        onClick={toggleSound}
        aria-pressed={!isMuted}
        aria-label={isMuted ? t("enableSound") : t("muteSound")}
        className="absolute end-4 top-24 z-20 flex items-center gap-2 rounded-full border border-white/25 bg-navy/50 px-4 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-navy/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold md:end-8 md:top-28"
      >
        {isMuted ? (
          <>
            <VolumeX className="h-4 w-4 shrink-0" aria-hidden />
            <span>{t("enableSound")}</span>
          </>
        ) : (
          <>
            <Volume2 className="h-4 w-4 shrink-0" aria-hidden />
            <span>{t("muteSound")}</span>
          </>
        )}
      </button>
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-24 pt-32 md:px-8 md:pb-32">
        <h1 className="max-w-3xl font-lato text-3xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
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
          className="mt-4 max-w-xl text-base text-white/85 md:text-lg"
        >
          {t("subheadline")}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-7 flex flex-wrap gap-3"
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
