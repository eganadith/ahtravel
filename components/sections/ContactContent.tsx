"use client";

import { ContactForm } from "@/components/contact/ContactForm";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { COMPANY, MAPS_EMBED_URL, SOCIAL } from "@/lib/constants";
import { imagePaths } from "@/lib/images";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useTranslations } from "next-intl";

export function ContactContent() {
  const t = useTranslations("contact");
  const tCommon = useTranslations("common");

  return (
    <>
      <PageHero
        image={imagePaths.contactHero}
        imageAlt="A&H Travel office"
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
      />

      <section className="section-padding bg-warm-white">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <RevealOnScroll>
            <SectionHeading
              align="left"
              eyebrow={tCommon("getInTouch")}
              title={t("formIntro.title")}
              subtitle={t("formIntro.body")}
              className="max-w-2xl"
            />
          </RevealOnScroll>

          <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-14">
            <RevealOnScroll className="lg:col-span-7">
              <div className="rounded-2xl border border-charcoal/5 bg-white p-6 shadow-sm md:p-8">
                <ContactForm />
              </div>
              <div className="mt-8 overflow-hidden rounded-2xl bg-navy p-6 text-warm-white shadow-lg shadow-navy/20 md:p-8">
                <p className="font-semibold text-gold">{tCommon("preferChat")}</p>
                <p className="mt-2 text-sm text-warm-white/75">{tCommon("replyTime")}</p>
                <a
                  href={SOCIAL.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-block"
                >
                  <Button variant="gold" className="gap-2 !px-8 !py-3.5">
                    <MessageCircle className="h-5 w-5" />
                    {tCommon("openWhatsApp")}
                  </Button>
                </a>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1} className="lg:col-span-5">
              <div className="rounded-2xl border border-charcoal/5 bg-white p-6 shadow-sm md:p-8 lg:sticky lg:top-28">
                <h2 className="font-lato text-xl font-semibold text-navy">{t("info.title")}</h2>
                <ul className="mt-6 space-y-5">
                  <li className="flex items-start gap-4 rounded-xl bg-warm-white p-4">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                    <span className="text-charcoal/80">{tCommon("address")}</span>
                  </li>
                  <li className="flex items-center gap-4 rounded-xl bg-warm-white p-4">
                    <Phone className="h-5 w-5 shrink-0 text-gold" />
                    <a
                      href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                      className="font-medium text-navy hover:text-gold"
                    >
                      {tCommon("phone")}
                    </a>
                  </li>
                  <li className="flex items-center gap-4 rounded-xl bg-warm-white p-4">
                    <Mail className="h-5 w-5 shrink-0 text-gold" />
                    <a
                      href={`mailto:${COMPANY.email}`}
                      className="font-medium text-navy hover:text-gold"
                    >
                      {tCommon("email")}
                    </a>
                  </li>
                  <li className="flex items-start gap-4 rounded-xl bg-warm-white p-4">
                    <Clock className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                    <span className="text-charcoal/80">{t("hours")}</span>
                  </li>
                </ul>
                <p className="mt-6 rounded-xl bg-gold/5 px-4 py-3 text-base text-navy" dir="rtl">
                  {t("info.addressAr")}
                </p>
              </div>

              <div className="mt-6 overflow-hidden rounded-2xl shadow-lg ring-1 ring-charcoal/10">
                <iframe
                  src={MAPS_EMBED_URL}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: 320 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="A&H Travel location"
                />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
