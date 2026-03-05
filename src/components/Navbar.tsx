"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCode, faXmark } from "@fortawesome/free-solid-svg-icons";
import { navLinks } from "@/lib/studio-data";
import { motionTiming } from "@/lib/motion";
import { useLanguage } from "@/components/LanguageProvider";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/70 bg-zinc-950/85 backdrop-blur-lg">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-semibold tracking-wide text-zinc-100 transition-colors hover:text-zinc-100"
        >
          <FontAwesomeIcon icon={faCode} className="text-base" />
          <span className="font-(--font-poppins) text-base">Web Crafting</span>
        </Link>

        <ul className="hidden items-center gap-6 text-sm font-medium text-zinc-300 md:flex">
          {navLinks.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`inline-flex items-center gap-2 transition-colors hover:text-zinc-100 ${
                    active ? "text-zinc-100" : ""
                  }`}
                >
                  {t(item.label)}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <button
            type="button"
            onClick={() => setLanguage("en")}
            className={`rounded-sm border px-2 py-1 text-xs font-semibold transition-colors ${
              language === "en"
                ? "border-zinc-100 bg-zinc-900 text-zinc-100"
                : "border-zinc-700 text-zinc-400 hover:border-zinc-400 hover:text-zinc-100"
            }`}
          >
            EN
          </button>
          <button
            type="button"
            onClick={() => setLanguage("zh")}
            className={`rounded-sm border px-2 py-1 text-xs font-semibold transition-colors ${
              language === "zh"
                ? "border-zinc-100 bg-zinc-900 text-zinc-100"
                : "border-zinc-700 text-zinc-400 hover:border-zinc-400 hover:text-zinc-100"
            }`}
          >
            中文
          </button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
          aria-expanded={open}
          className="inline-flex items-center justify-center rounded-sm border border-zinc-700 p-2 text-zinc-300 transition-colors hover:border-white hover:text-zinc-100 md:hidden"
        >
          <motion.span
            animate={
              reduceMotion
                ? undefined
                : { rotate: open ? 90 : 0, scale: open ? 1.08 : 1 }
            }
            transition={motionTiming}
            className="inline-flex"
          >
            <FontAwesomeIcon
              icon={open ? faXmark : faBars}
              className="text-base"
            />
          </motion.span>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="overlay"
              className="fixed inset-0 z-40 bg-black/35 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={motionTiming}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              key="panel"
              className="fixed inset-y-0 right-0 z-50 w-72 border-l border-zinc-800 bg-zinc-950/60 p-6 shadow-xl md:hidden"
              initial={reduceMotion ? { opacity: 0 } : { x: 72, opacity: 0 }}
              animate={reduceMotion ? { opacity: 1 } : { x: 0, opacity: 1 }}
              exit={reduceMotion ? { opacity: 0 } : { x: 72, opacity: 0 }}
              transition={motionTiming}
            >
              <div className="mb-6 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setLanguage("en")}
                  className={`rounded-sm border px-2 py-1 text-xs font-semibold transition-colors ${
                    language === "en"
                      ? "border-zinc-100 bg-zinc-900 text-zinc-100"
                      : "border-zinc-700 text-zinc-400 hover:border-zinc-400 hover:text-zinc-100"
                  }`}
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage("zh")}
                  className={`rounded-sm border px-2 py-1 text-xs font-semibold transition-colors ${
                    language === "zh"
                      ? "border-zinc-100 bg-zinc-900 text-zinc-100"
                      : "border-zinc-700 text-zinc-400 hover:border-zinc-400 hover:text-zinc-100"
                  }`}
                >
                  中文
                </button>
              </div>

              <ul className="mt-12 space-y-4 text-sm font-medium text-zinc-300">
                {navLinks.map((item, index) => {
                  const active = pathname === item.href;
                  return (
                    <motion.li
                      key={item.href}
                      initial={reduceMotion ? undefined : { opacity: 0, x: 12 }}
                      animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                      transition={{ ...motionTiming, delay: index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        className={`block rounded-sm px-2 py-2 transition-colors hover:text-zinc-100 ${
                          active ? "text-zinc-100" : ""
                        }`}
                        onClick={() => setOpen(false)}
                      >
                        {t(item.label)}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
