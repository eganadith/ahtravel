import { ServiceCarousel } from "@/components/sections/ServiceCarousel";
import { TourismPageHero } from "@/components/sections/TourismPageHero";
import { tourismServices } from "@/lib/services/tourism";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.tourism" });
  return {
    title: t("title"),
    description: t("description"),
    openGraph: { title: t("title"), description: t("description"), locale },
  };
}

export default async function TourismPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <TourismPageHero />
      <ServiceCarousel namespace="tourism" services={tourismServices} />
    </>
  );
}
