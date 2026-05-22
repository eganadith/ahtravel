import { AdminPageHero } from "@/components/sections/AdminPageHero";
import { ServiceCarousel } from "@/components/sections/ServiceCarousel";
import { adminServices } from "@/lib/services/admin";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.admin" });
  return {
    title: t("title"),
    description: t("description"),
    openGraph: { title: t("title"), description: t("description"), locale },
  };
}

export default async function AdminServicesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <AdminPageHero />
      <ServiceCarousel namespace="admin" services={adminServices} />
    </>
  );
}
