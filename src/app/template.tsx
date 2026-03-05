"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { pageVariants } from "@/lib/motion";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  return (
    <AnimatePresence initial={false} mode="wait">
      <motion.div
        key={pathname}
        variants={pageVariants}
        initial={reduceMotion ? false : "initial"}
        animate="animate"
        exit={reduceMotion ? undefined : "exit"}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
