"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import type { Testimonial } from "@/lib/studio-data";
import { motionTiming } from "@/lib/motion";
import { useLanguage } from "@/components/LanguageProvider";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const reduceMotion = useReducedMotion();
  const { t } = useLanguage();

  return (
    <motion.article
      className="rounded-sm border border-zinc-800 bg-zinc-950/60 p-6 shadow-sm"
      initial={{ opacity: 0, y: 14 }}
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
      <p className="mb-4 inline-flex items-center gap-2 text-sm text-zinc-100">
        <FontAwesomeIcon icon={faQuoteLeft} className="text-sm" />
        {t({ en: "Client feedback", zh: "客戶回饋" })}
      </p>
      <blockquote className="mb-5 text-sm leading-relaxed text-zinc-300">
        {t(testimonial.quote)}
      </blockquote>
      <p className="font-(--font-poppins) text-base font-semibold text-zinc-100">
        {testimonial.name}
      </p>
      <p className="text-sm text-zinc-500">
        {t(testimonial.role)}, {testimonial.company}
      </p>
    </motion.article>
  );
}
