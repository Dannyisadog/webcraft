"use client";

import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full glass-card flex items-center justify-center"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <i className="fas fa-moon text-indigo-400 text-sm sm:text-base"></i>
      ) : (
        <i className="fas fa-sun text-amber-500 text-sm sm:text-base"></i>
      )}
    </motion.button>
  );
}