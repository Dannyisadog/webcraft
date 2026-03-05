"use client";

import { useLanguage } from "@/components/LanguageProvider";
import type { LocalizedText } from "@/lib/i18n";

export function T({ en, zh }: LocalizedText) {
  const { language } = useLanguage();
  return <>{language === "zh" ? zh : en}</>;
}
