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
  const label =
    namespace === "tourism" ? t("backToTourism") : t("backToAdmin");

  return (
    <Link
      href={href}
      className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-charcoal/70 transition hover:text-gold"
    >
      <ArrowLeft className="h-4 w-4" />
      {label}
    </Link>
  );
}
