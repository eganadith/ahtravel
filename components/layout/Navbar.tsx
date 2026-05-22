"use client";

import { Link } from "@/i18n/navigation";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { MegaMenu } from "@/components/layout/MegaMenu";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { SOCIAL } from "@/lib/constants";
import {
  megaMenus,
  megaNavItems,
  simpleNavLinks,
  type MegaMenuId,
} from "@/lib/navigation";
import { cn } from "@/lib/utils";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export function Navbar() {
  const t = useTranslations("nav");
  const tTourism = useTranslations("tourism");
  const tAdmin = useTranslations("admin");
  const tCommon = useTranslations("common");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<MegaMenuId | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<MegaMenuId | null>(null);

  const menuOpen = activeMenu !== null;
  const lightNav = scrolled || menuOpen || mobileOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMenus = () => {
    setActiveMenu(null);
    setMobileOpen(false);
    setMobileExpanded(null);
  };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          lightNav
            ? "border-b border-charcoal/5 bg-white shadow-sm"
            : "bg-transparent"
        )}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 transition-[padding] duration-300 md:px-8",
            lightNav ? "py-3" : "py-5"
          )}
        >
          <Link href="/" className="relative z-50 flex shrink-0 items-center gap-2" onClick={closeMenus}>
            <Logo height={44} priority background={lightNav ? "light" : "dark"} />
            <span
              className={cn(
                "hidden font-lato text-lg font-semibold sm:block",
                lightNav ? "text-navy" : "text-white"
              )}
            >
              A&H Travel
            </span>
          </Link>

          <nav
            className={cn(
              "hidden items-center gap-7 lg:flex",
              lightNav ? "text-navy" : "text-white/90"
            )}
          >
            <Link
              href="/"
              className="text-sm font-medium transition hover:text-gold"
              onMouseEnter={() => setActiveMenu(null)}
            >
              {t("home")}
            </Link>

            {megaNavItems.map((item) => (
              <button
                key={item.id}
                type="button"
                className={cn(
                  "text-sm font-medium transition hover:text-gold",
                  activeMenu === item.id && "text-gold"
                )}
                onMouseEnter={() => setActiveMenu(item.id)}
                onFocus={() => setActiveMenu(item.id)}
              >
                {t(item.key)}
              </button>
            ))}

            {simpleNavLinks
              .filter((l) => l.key !== "home")
              .map((link) => (
                <Link
                  key={link.key}
                  href={link.href}
                  className="text-sm font-medium transition hover:text-gold"
                  onMouseEnter={() => setActiveMenu(null)}
                >
                  {t(link.key)}
                </Link>
              ))}
          </nav>

          <div className="relative z-50 flex items-center gap-2 sm:gap-3">
            <LanguageSwitcher />
            <a
              href={SOCIAL.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:block"
            >
              <Button
                variant={lightNav ? "gold" : "outline-white"}
                className="!px-4 !py-2 text-xs sm:!px-5 sm:text-sm"
              >
                {tCommon("whatsappChat")}
              </Button>
            </a>
            <button
              type="button"
              className={cn("rounded-lg p-2 lg:hidden", lightNav ? "text-navy" : "text-white")}
              onClick={() => {
                setMobileOpen(!mobileOpen);
                setActiveMenu(null);
              }}
              aria-label="Menu"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && activeMenu && (
            <div key={activeMenu} className="hidden lg:block">
              <MegaMenu menuId={activeMenu} />
            </div>
          )}
        </AnimatePresence>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-navy pt-24"
          >
            <nav className="flex flex-1 flex-col px-6 pb-10">
              <Link
                href="/"
                onClick={closeMenus}
                className="border-b border-white/10 py-4 font-lato text-2xl text-white hover:text-gold"
              >
                {t("home")}
              </Link>

              {megaMenus.map((menu) => {
                const expanded = mobileExpanded === menu.id;
                const serviceLinks = Array.from(
                  new Map(
                    menu.columns
                      .flatMap((c) => c.links)
                      .filter((l) => l.namespace !== "navMenu")
                      .map((l) => [l.href, l])
                  ).values()
                );

                return (
                  <div key={menu.id} className="border-b border-white/10">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between py-4 font-lato text-2xl text-white"
                      onClick={() =>
                        setMobileExpanded(expanded ? null : menu.id)
                      }
                    >
                      {t(menu.id)}
                      <ChevronDown
                        className={cn(
                          "h-6 w-6 transition-transform",
                          expanded && "rotate-180"
                        )}
                      />
                    </button>
                    <AnimatePresence>
                      {expanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden pb-4"
                        >
                          <Link
                            href={menu.pageHref}
                            onClick={closeMenus}
                            className="mb-3 block text-lg font-semibold text-gold"
                          >
                            {menu.id === "tourism"
                              ? tTourism("servicesTitle")
                              : tAdmin("servicesTitle")}
                          </Link>
                          <ul className="space-y-2 pl-1">
                            {serviceLinks.map((link) => {
                              const label =
                                link.namespace === "tourism"
                                  ? tTourism(link.labelKey)
                                  : tAdmin(link.labelKey);
                              return (
                                <li key={link.href}>
                                  <Link
                                    href={link.href}
                                    onClick={closeMenus}
                                    className="block py-1.5 text-sm text-white/85 hover:text-gold"
                                  >
                                    {label}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}

              {simpleNavLinks
                .filter((l) => l.key !== "home")
                .map((link) => (
                  <Link
                    key={link.key}
                    href={link.href}
                    onClick={closeMenus}
                    className="border-b border-white/10 py-4 font-lato text-2xl text-white hover:text-gold"
                  >
                    {t(link.key)}
                  </Link>
                ))}

              <a
                href={SOCIAL.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 self-center"
              >
                <Button variant="gold">{tCommon("whatsappChat")}</Button>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
