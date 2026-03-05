"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import { itemVariants, motionTiming, sectionVariants } from "@/lib/motion";
import { useLanguage } from "@/components/LanguageProvider";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const { t } = useLanguage();

  return (
    <motion.section
      className="relative overflow-hidden border-b border-zinc-800/80 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero-background.svg')" }}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="absolute inset-0 bg-zinc-950/78" />
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-sm bg-zinc-300/10 blur-3xl" />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-18 sm:px-6 lg:px-8">
        <motion.div className="max-w-3xl space-y-6" variants={itemVariants}>
          <motion.p
            variants={itemVariants}
            className="inline-flex items-center gap-2 rounded-sm border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-100"
          >
            <FontAwesomeIcon icon={faPaperPlane} className="text-xs" />
            Web Crafting
          </motion.p>
          <motion.h1
            variants={itemVariants}
            className="text-3xl font-semibold leading-tight text-zinc-100 sm:text-4xl lg:text-5xl"
          >
            {t({
              en: "Modern Websites Built for Real Businesses",
              zh: "為真實商業需求打造現代網站",
            })}
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="max-w-2xl text-lg leading-relaxed text-zinc-400"
          >
            {t({
              en: "Helping companies create fast, beautiful, and scalable websites that turn first impressions into measurable growth.",
              zh: "協助企業打造快速、精緻且可擴充的網站，將第一印象轉化為可衡量的成長。",
            })}
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <motion.div
              whileHover={reduceMotion ? undefined : { scale: 1.05 }}
              whileTap={reduceMotion ? undefined : { scale: 0.95 }}
              transition={motionTiming}
            >
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-sm bg-black px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-black"
              >
                {t({ en: "View My Work", zh: "查看作品" })}
                <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
              </Link>
            </motion.div>
            <motion.div
              whileHover={reduceMotion ? undefined : { scale: 1.05 }}
              whileTap={reduceMotion ? undefined : { scale: 0.95 }}
              transition={motionTiming}
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-sm border border-zinc-500/80 bg-zinc-900/70 px-5 py-3 text-sm font-semibold text-zinc-100 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] transition-all hover:-translate-y-0.5 hover:border-zinc-200 hover:bg-zinc-100 hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
              >
                {t({ en: "Start a Project", zh: "開始專案" })}
                <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
