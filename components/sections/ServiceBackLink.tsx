"use client";

import { Link } from "@/i18n/navigation";
import { ArrowLeft } from "lucide-react";
import { useTranslations } from "next-intl";

type Props = {
  namespace: "tourism" | "admin";
};

export function ServiceBackLink({ namespace }: Props) {
  const t = useTranslations("servicesCarousel");
  const href = namespace === "tourism" ? "/tourism" : "/admin-services";
  const label = namespace === "tourism" ? t("backToTourism") : t("backToAdmin");

  return (
    <Link
      href={href}
      className="mb-8 inline-flex items-center gap-2 rounded-full border border-charcoal/10 bg-white px-4 py-2 text-sm font-medium text-charcoal/80 shadow-sm transition hover:border-gold/40 hover:text-gold"
    >
      <ArrowLeft className="h-4 w-4" />
      {label}
    </Link>
  );
}
