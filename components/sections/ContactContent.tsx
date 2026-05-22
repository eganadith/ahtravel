"use client";

import { ContactForm } from "@/components/contact/ContactForm";
import { Button } from "@/components/ui/Button";
import { COMPANY, MAPS_EMBED_URL, SOCIAL } from "@/lib/constants";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
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
            <h2 className="font-lato text-2xl font-semibold text-navy">{t("formIntro.title")}</h2>
            <p className="mt-3 text-charcoal/70">{t("formIntro.body")}</p>
            <div className="mt-8">
              <ContactForm />
            </div>
            <div className="mt-10 rounded-2xl border border-gold/30 bg-gold/5 p-6">
              <p className="font-semibold text-navy">{tCommon("preferChat")}</p>
              <a
                href={SOCIAL.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block"
              >
                <Button variant="gold">{tCommon("openWhatsApp")}</Button>
              </a>
              <p className="mt-3 text-sm text-charcoal/60">{tCommon("replyTime")}</p>
            </div>
          </div>

          <div>
            <h2 className="mb-4 font-lato text-2xl font-semibold text-navy">{t("info.title")}</h2>
            <ul className="space-y-4 text-charcoal/80">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <span>{tCommon("address")}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-gold" />
                <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} className="hover:text-gold">
                  {tCommon("phone")}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-gold" />
                <a href={`mailto:${COMPANY.email}`} className="hover:text-gold">
                  {tCommon("email")}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <span>{t("hours")}</span>
              </li>
            </ul>
            <p className="mt-6 text-base text-navy" dir="rtl">
              {t("info.addressAr")}
            </p>
            <div className="mt-8 aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
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
