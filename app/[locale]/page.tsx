import { CTABanner } from "@/components/sections/CTABanner";
import { FeaturedServicesGrid } from "@/components/sections/FeaturedServicesGrid";
import { Hero } from "@/components/sections/Hero";
import { ServiceOverviewCards } from "@/components/sections/ServiceOverviewCards";
import { TestimonialsCarousel } from "@/components/sections/TestimonialsCarousel";
import { TrustBar } from "@/components/sections/TrustBar";
import { getLocalBusinessSchema } from "@/lib/structured-data";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.home" });
  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      locale,
      type: "website",
    },
  };
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const schema = getLocalBusinessSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Hero />
      <ServiceOverviewCards />
      <TrustBar />
      <FeaturedServicesGrid />
      <TestimonialsCarousel />
      <CTABanner />
    </>
  );
}
