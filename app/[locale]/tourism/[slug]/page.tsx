import { HolidayDestinations } from "@/components/sections/HolidayDestinations";
import { ServiceBackLink } from "@/components/sections/ServiceBackLink";
import { ServiceDetailView } from "@/components/sections/ServiceDetailView";
import { routing } from "@/i18n/routing";
import { getTourismService } from "@/lib/services/utils";
import { tourismServices } from "@/lib/services/tourism";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    tourismServices.map((service) => ({ locale, slug: service.id }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const service = getTourismService(slug);
  if (!service) return {};

  const t = await getTranslations({ locale, namespace: "tourism" });
  return {
    title: t(service.titleKey),
    description: t(service.shortCopyKey),
    openGraph: {
      title: t(service.titleKey),
      description: t(service.shortCopyKey),
      locale,
    },
  };
}

export default async function TourismServicePage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const service = getTourismService(slug);
  if (!service) notFound();

  return (
    <>
      <section className="border-b border-charcoal/5 bg-[#f5f5f7] pt-24 pb-10 md:pt-28 md:pb-12">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <ServiceBackLink namespace="tourism" />
        </div>
      </section>
      <section className="section-padding bg-warm-white">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <ServiceDetailView namespace="tourism" service={service} />
          {service.hasDestinations && (
            <div className="mt-20 border-t border-charcoal/10 pt-16">
              <HolidayDestinations />
            </div>
          )}
        </div>
      </section>
    </>
  );
}
