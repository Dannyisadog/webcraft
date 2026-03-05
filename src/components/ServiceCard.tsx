"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import type { Service } from "@/lib/studio-data";
import { motionTiming } from "@/lib/motion";
import { useLanguage } from "@/components/LanguageProvider";

export function ServiceCard({ service }: { service: Service }) {
  const reduceMotion = useReducedMotion();
  const { t } = useLanguage();

  return (
    <motion.article
      className="rounded-sm border border-zinc-800 bg-zinc-950/60 p-6 shadow-sm"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={motionTiming}
      whileHover={
        reduceMotion
          ? undefined
          : {
              scale: 1.03,
              y: -6,
              boxShadow: "0 14px 28px rgba(15, 23, 42, 0.12)",
            }
      }
    >
      <h3 className="mb-3 inline-flex items-center gap-2 text-xl font-semibold text-zinc-100">
        <FontAwesomeIcon icon={service.icon} className="text-zinc-100" />
        {t(service.title)}
      </h3>
      <p className="mb-4 text-sm leading-relaxed text-zinc-400">
        {t(service.description)}
      </p>
      <div className="mb-4 rounded-sm border border-zinc-800 bg-zinc-900 p-3">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">
          {t({ en: "Process", zh: "流程" })}
        </p>
        <p className="mt-2 text-sm text-zinc-400">{t(service.process)}</p>
      </div>
      <div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">
          {t({ en: "Deliverables", zh: "交付內容" })}
        </p>
        <ul className="space-y-2">
          {service.deliverables.map((deliverable) => (
            <li
              key={deliverable.en}
              className="inline-flex w-full items-start gap-2 text-sm text-zinc-300"
            >
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="mt-0.5 text-xs text-zinc-100"
              />
              {t(deliverable)}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}
