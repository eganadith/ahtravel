"use client";

import { ContactForm } from "@/components/contact/ContactForm";
import { COMPANY, MAPS_EMBED_URL } from "@/lib/constants";
import { Mail, MapPin, Phone } from "lucide-react";
import { useTranslations } from "next-intl";

export function ContactContent() {
  const t = useTranslations("contact");
  const tCommon = useTranslations("common");

  return (
    <>
      <section className="bg-navy pt-28 pb-12 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center md:px-8">
          <h1 className="font-lato text-4xl font-semibold md:text-5xl">{t("hero.title")}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/85">{t("hero.subtitle")}</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2 md:px-8">
          <div>
            <ContactForm />
            <div className="mt-8 space-y-3 text-sm text-charcoal/80">
              <a
                href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 hover:text-gold"
              >
                <Phone className="h-4 w-4" />
                {tCommon("phone")}
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-2 hover:text-gold"
              >
                <Mail className="h-4 w-4" />
                {tCommon("email")}
              </a>
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                {tCommon("address")}
              </p>
              <p className="pt-2 text-base text-navy" dir="rtl">
                {t("info.addressAr")}
              </p>
            </div>
          </div>

          <div>
            <h2 className="mb-4 font-lato text-2xl font-semibold text-navy">{t("info.title")}</h2>
            <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
              <iframe
                src={MAPS_EMBED_URL}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 400 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="A&H Travel location"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
