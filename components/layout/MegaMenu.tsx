"use client";

import { Link } from "@/i18n/navigation";
import { megaMenus, type MegaMenuId, type MegaMenuLink } from "@/lib/navigation";
import { SOCIAL } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

type Props = {
  menuId: MegaMenuId;
};

function MenuLink({
  link,
  onNavigate,
}: {
  link: MegaMenuLink;
  onNavigate?: () => void;
}) {
  const tNavMenu = useTranslations("navMenu");
  const tTourism = useTranslations("tourism");
  const tAdmin = useTranslations("admin");

  const label =
    link.namespace === "navMenu"
      ? tNavMenu(link.labelKey)
      : link.namespace === "tourism"
        ? tTourism(link.labelKey)
        : tAdmin(link.labelKey);

  return (
    <Link
      href={link.href}
      onClick={onNavigate}
      className={cn(
        "block text-navy transition-colors hover:text-gold",
        link.large
          ? "text-lg font-semibold leading-snug tracking-tight md:text-xl"
          : "text-sm font-medium leading-snug md:text-[14px]"
      )}
    >
      {label}
    </Link>
  );
}

export function MegaMenu({ menuId }: Props) {
  const menu = megaMenus.find((m) => m.id === menuId)!;
  const tNavMenu = useTranslations("navMenu");

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
      className="border-t border-charcoal/8 bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-6 md:px-8 md:py-7">
        <div
          className={cn(
            "grid gap-6 md:gap-8",
            menu.columns.length === 3
              ? "md:grid-cols-3"
              : menu.columns.length === 4
                ? "md:grid-cols-4"
                : "md:grid-cols-2"
          )}
        >
          {menu.columns.map((column) => (
            <div key={column.headingKey} className="min-w-0">
              <p className="mb-2 text-[11px] font-medium uppercase tracking-wide text-charcoal/50">
                {tNavMenu(column.headingKey)}
              </p>
              <ul className="space-y-1.5 md:space-y-2">
                {column.links.map((link, i) => (
                  <li key={`${link.href}-${i}`}>
                    <MenuLink link={link} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-5 border-t border-charcoal/8 pt-5 md:mt-7">
          <a
            href={SOCIAL.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-navy transition hover:text-gold"
          >
            {tNavMenu("whatsapp")}
          </a>
          <Link
            href="/contact"
            className="text-sm font-medium text-navy transition hover:text-gold"
          >
            {tNavMenu("contact")}
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
