import { BLUR_DATA_URL } from "@/lib/images";
import Image from "next/image";

type PageHeroProps = {
  image: string;
  imageAlt: string;
  title: string;
  subtitle?: string;
  minHeight?: "default" | "tall";
};

export function PageHero({
  image,
  imageAlt,
  title,
  subtitle,
  minHeight = "default",
}: PageHeroProps) {
  return (
    <section
      className={`relative flex items-center justify-center overflow-hidden pt-20 ${
        minHeight === "tall" ? "min-h-[55vh]" : "min-h-[50vh]"
      }`}
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        className="object-cover"
        placeholder="blur"
        blurDataURL={BLUR_DATA_URL}
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-navy/70" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 py-16 text-center text-white md:px-8 md:py-20">
        <h1 className="font-lato text-4xl font-semibold md:text-5xl lg:text-6xl">{title}</h1>
        {subtitle ? (
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/85">{subtitle}</p>
        ) : null}
      </div>
    </section>
  );
}
