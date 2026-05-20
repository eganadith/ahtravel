"use client";

import { Link } from "@/i18n/navigation";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { SOCIAL } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", key: "home" },
  { href: "/tourism", key: "tourism" },
  { href: "/admin-services", key: "admin" },
  { href: "/about", key: "about" },
  { href: "/contact", key: "contact" },
] as const;

export function Navbar() {
  const t = useTranslations("nav");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-charcoal/5 bg-white/80 py-3 shadow-sm backdrop-blur-md"
            : "bg-transparent py-5"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 md:px-8">
          <Link href="/" className="relative z-50 flex shrink-0 items-center gap-2">
            <Logo height={44} priority />
            <span
              className={cn(
                "hidden font-lato text-lg font-semibold sm:block",
                scrolled ? "text-navy" : "text-white"
              )}
            >
              A&H Travel
            </span>
          </Link>

          <nav
            className={cn(
              "hidden items-center gap-8 lg:flex",
              scrolled ? "text-navy" : "text-white/90"
            )}
          >
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className="text-sm font-medium transition hover:text-gold"
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
              <Button variant={scrolled ? "gold" : "outline-white"} className="!px-4 !py-2 text-xs sm:!px-5 sm:text-sm">
                {t("whatsapp")}
              </Button>
            </a>
            <button
              type="button"
              className={cn(
                "rounded-lg p-2 lg:hidden",
                scrolled ? "text-navy" : "text-white"
              )}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex flex-col bg-navy pt-24"
          >
            <nav className="flex flex-1 flex-col items-center justify-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-lato text-3xl text-white hover:text-gold"
                  >
                    {t(link.key)}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                href={SOCIAL.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.08 }}
                className="mt-4"
              >
                <Button variant="gold">{t("whatsapp")}</Button>
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
