"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { motionTiming } from "@/lib/motion";
import { useLanguage } from "@/components/LanguageProvider";

const projectTypes = [
  { en: "Corporate website", zh: "企業網站" },
  { en: "Restaurant website", zh: "餐飲網站" },
  { en: "Portfolio website", zh: "作品集網站" },
  { en: "Event website", zh: "活動網站" },
  { en: "Landing page", zh: "著陸頁" },
  { en: "Other", zh: "其他" },
];

const budgets = [
  { en: "$2k - $5k", zh: "$2k - $5k" },
  { en: "$5k - $10k", zh: "$5k - $10k" },
  { en: "$10k - $20k", zh: "$10k - $20k" },
  { en: "$20k+", zh: "$20k+" },
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const reduceMotion = useReducedMotion();
  const { t } = useLanguage();

  return (
    <form
      className="space-y-5 rounded-sm border border-zinc-800 bg-zinc-950/60 p-6 shadow-sm"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
      aria-label={t({ en: "Project inquiry form", zh: "專案詢問表單" })}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-zinc-300">
          {t({ en: "Name", zh: "姓名" })}
          <input
            required
            name="name"
            type="text"
            className="w-full rounded-sm border border-zinc-700 px-3 py-2 text-sm text-zinc-100 outline-none transition-colors focus:border-zinc-300"
            placeholder={t({ en: "Your name", zh: "你的姓名" })}
          />
        </label>

        <label className="space-y-2 text-sm font-medium text-zinc-300">
          {t({ en: "Email", zh: "電子信箱" })}
          <input
            required
            name="email"
            type="email"
            className="w-full rounded-sm border border-zinc-700 px-3 py-2 text-sm text-zinc-100 outline-none transition-colors focus:border-zinc-300"
            placeholder={t({ en: "you@company.com", zh: "you@company.com" })}
          />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-zinc-300">
          {t({ en: "Project type", zh: "專案類型" })}
          <select
            required
            name="projectType"
            className="w-full rounded-sm border border-zinc-700 px-3 py-2 text-sm text-zinc-100 outline-none transition-colors focus:border-zinc-300"
            defaultValue=""
          >
            <option value="" disabled>
              {t({ en: "Select a project type", zh: "請選擇專案類型" })}
            </option>
            {projectTypes.map((type) => (
              <option key={type.en} value={type.en}>
                {t(type)}
              </option>
            ))}
          </select>
        </label>

        <label className="space-y-2 text-sm font-medium text-zinc-300">
          {t({ en: "Budget range", zh: "預算範圍" })}
          <select
            required
            name="budget"
            className="w-full rounded-sm border border-zinc-700 px-3 py-2 text-sm text-zinc-100 outline-none transition-colors focus:border-zinc-300"
            defaultValue=""
          >
            <option value="" disabled>
              {t({ en: "Select a budget range", zh: "請選擇預算範圍" })}
            </option>
            {budgets.map((budget) => (
              <option key={budget.en} value={budget.en}>
                {t(budget)}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="space-y-2 text-sm font-medium text-zinc-300">
        {t({ en: "Message", zh: "需求內容" })}
        <textarea
          required
          name="message"
          rows={6}
          className="w-full rounded-sm border border-zinc-700 px-3 py-2 text-sm text-zinc-100 outline-none transition-colors focus:border-zinc-300"
          placeholder={t({
            en: "Tell us about your project goals, timeline, and key pages.",
            zh: "請告訴我們你的專案目標、時程與核心頁面需求。",
          })}
        />
      </label>

      <motion.button
        type="submit"
        className="inline-flex items-center gap-2 rounded-sm bg-black px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-black"
        whileHover={reduceMotion ? undefined : { scale: 1.05 }}
        whileTap={reduceMotion ? undefined : { scale: 0.95 }}
        transition={motionTiming}
      >
        <FontAwesomeIcon icon={faPaperPlane} className="text-xs" />
        {t({ en: "Send inquiry", zh: "送出詢問" })}
      </motion.button>

      {submitted && (
        <p
          className="inline-flex items-center gap-2 rounded-sm border border-emerald-700/40 bg-emerald-900/20 px-3 py-2 text-sm text-emerald-300"
          role="status"
        >
          <FontAwesomeIcon icon={faCircleCheck} className="text-xs" />
          {t({
            en: "Thanks for your message. We will respond within 1 business day.",
            zh: "感謝你的來訊，我們將在 1 個工作天內回覆。",
          })}
        </p>
      )}
    </form>
  );
}
