export type Language = "en" | "zh";

export type LocalizedText = {
  en: string;
  zh: string;
};

export const LANGUAGE_STORAGE_KEY = "webcraft-language";

export function localize(text: LocalizedText, language: Language) {
  return text[language];
}
