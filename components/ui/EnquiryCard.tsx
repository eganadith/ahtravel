"use client";

import { Button } from "@/components/ui/Button";
import { MessageCircle, Phone } from "lucide-react";
import type { ReactNode } from "react";

type EnquiryCardProps = {
  label: string;
  price: string;
  note: string;
  ctaLabel: string;
  ctaHref: string;
  phone: string;
  extra?: ReactNode;
};

export function EnquiryCard({
  label,
  price,
  note,
  ctaLabel,
  ctaHref,
  phone,
  extra,
}: EnquiryCardProps) {
  return (
    <div className="overflow-hidden rounded-2xl bg-navy text-warm-white shadow-lg shadow-navy/20">
      <div className="border-b border-white/10 px-6 py-5 md:px-8">
        <p className="text-sm font-medium uppercase tracking-wider text-gold/90">{label}</p>
        <p className="mt-2 font-lato text-2xl font-semibold text-gold md:text-3xl">{price}</p>
      </div>
      <div className="space-y-4 px-6 py-6 md:px-8">
        <p className="text-sm leading-relaxed text-warm-white/75">{note}</p>
        {extra}
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 sm:flex-initial"
          >
            <Button variant="gold" className="w-full gap-2 !px-8 !py-3.5 sm:w-auto">
              <MessageCircle className="h-5 w-5" />
              {ctaLabel}
            </Button>
          </a>
          <a href={`tel:${phone.replace(/\s/g, "")}`} className="inline-flex flex-1 sm:flex-initial">
            <Button
              variant="outline-white"
              className="w-full gap-2 !border-white/25 !px-8 !py-3.5 sm:w-auto"
            >
              <Phone className="h-4 w-4" />
              {phone}
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
