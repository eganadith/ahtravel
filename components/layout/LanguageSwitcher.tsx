"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useLocale } from "next-intl";
import { useState, useRef, useEffect } from "react";
import type { Locale } from "@/i18n/routing";

const locales: { code: Locale; flag: string; label: string }[] = [
  { code: "en", flag: "🇬🇧", label: "EN" },
  { code: "ar", flag: "🇦🇪", label: "AR" },
  { code: "bn", flag: "🇧🇩", label: "BN" },
  { code: "tl", flag: "🇵🇭", label: "TL" },
];

export function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = locales.find((l) => l.code === locale) ?? locales[0];

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 rounded-full border border-charcoal/10 bg-white/80 px-3 py-2 text-sm font-medium text-navy backdrop-blur-sm transition hover:border-gold/40"
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        <span>{current.flag}</span>
        <span>{current.label}</span>
        <ChevronDown className={cn("h-4 w-4 transition", open && "rotate-180")} />
      </button>
      {open && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <ul
            role="listbox"
            className="absolute end-0 top-full z-50 mt-2 min-w-[120px] overflow-hidden rounded-xl border border-charcoal/10 bg-white py-1 shadow-xl"
          >
            {locales.map((l) => (
              <li key={l.code} role="option" aria-selected={l.code === locale}>
                <button
                  type="button"
                  className={cn(
                    "flex w-full items-center gap-2 px-4 py-2.5 text-sm transition hover:bg-warm-white",
                    l.code === locale && "bg-gold/10 font-semibold text-navy"
                  )}
                  onClick={() => {
                    router.replace(pathname, { locale: l.code });
                    setOpen(false);
                  }}
                >
                  <span>{l.flag}</span>
                  <span>{l.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
