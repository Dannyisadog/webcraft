"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.div 
      className="flex items-center gap-1 px-1 py-0.5 sm:px-1 sm:py-1 rounded-full glass-card"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <button
        onClick={() => setLanguage("zh")}
        className={`px-1.5 py-0.5 sm:px-3 sm:py-1.5 text-xs sm:text-sm font-medium rounded-full transition-all ${
          language === "zh" 
            ? "bg-gradient-to-r from-indigo-500 to-cyan-500 text-white" 
            : "text-foreground/70 hover:text-foreground"
        }`}
      >
        中
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={`px-1.5 py-0.5 sm:px-3 sm:py-1.5 text-xs sm:text-sm font-medium rounded-full transition-all ${
          language === "en" 
            ? "bg-gradient-to-r from-indigo-500 to-cyan-500 text-white" 
            : "text-foreground/70 hover:text-foreground"
        }`}
      >
        EN
      </button>
    </motion.div>
  );
}