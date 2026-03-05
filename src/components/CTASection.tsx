"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { itemVariants, motionTiming, sectionVariants } from "@/lib/motion";
import { useLanguage } from "@/components/LanguageProvider";

export function CTASection() {
  const reduceMotion = useReducedMotion();
  const { t } = useLanguage();

  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-sm border border-zinc-800 bg-zinc-950 p-8 text-white sm:p-12">
          <div className="absolute right-0 top-0 h-44 w-44 -translate-y-1/3 translate-x-1/4 rounded-sm bg-zinc-300/20 blur-2xl" />
          <motion.p
            variants={itemVariants}
            className="inline-flex items-center gap-2 rounded-sm border border-zinc-600 px-3 py-1 text-xs font-medium uppercase tracking-[0.15em] text-zinc-300"
          >
            <FontAwesomeIcon icon={faEnvelope} className="text-xs" />
            {t({ en: "Build with Web Crafting", zh: "與 Web Crafting 合作" })}
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="mt-4 max-w-2xl text-3xl font-semibold leading-tight text-white sm:text-4xl"
          >
            {t({
              en: "Ready to launch a website that actually moves your business forward?",
              zh: "準備好上線一個真正推動業績成長的網站了嗎？",
            })}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-300"
          >
            {t({
              en: "Let's shape your next digital experience with a strategy-driven process and production-ready frontend engineering.",
              zh: "讓我們用策略導向流程與可正式上線的前端工程，打造你的下一個數位體驗。",
            })}
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap gap-4"
          >
            <motion.div
              whileHover={reduceMotion ? undefined : { scale: 1.05 }}
              whileTap={reduceMotion ? undefined : { scale: 0.95 }}
              transition={motionTiming}
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-sm border border-zinc-500/80 bg-zinc-900/70 px-5 py-3 text-sm font-semibold text-zinc-100 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] transition-all hover:border-zinc-200 hover:bg-zinc-100 hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
              >
                {t({ en: "Start a Project", zh: "開始專案" })}
                <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
              </Link>
            </motion.div>
            <motion.div
              whileHover={reduceMotion ? undefined : { scale: 1.05 }}
              whileTap={reduceMotion ? undefined : { scale: 0.95 }}
              transition={motionTiming}
            >
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-sm border border-zinc-600 px-5 py-3 text-sm font-semibold text-zinc-100 transition-colors hover:border-zinc-300 hover:text-zinc-200"
              >
                {t({ en: "View My Work", zh: "查看作品" })}
                <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
