import type { Variants } from "framer-motion";

export const motionTokens = {
  fast: 0.4,
  normal: 0.5,
  slow: 0.6,
} as const;

export const transitions = {
  fast: { duration: motionTokens.fast, ease: "easeOut" as const },
  normal: { duration: motionTokens.normal, ease: "easeOut" as const },
  slow: { duration: motionTokens.slow, ease: "easeOut" as const },
};

export const motionTiming = {
  duration: motionTokens.normal,
  ease: "easeOut" as const,
};

export const pageVariants: Variants = {
  initial: { opacity: 0, y: 18 },
  animate: {
    opacity: 1,
    y: 0,
    transition: transitions.normal,
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: transitions.fast,
  },
};

export const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ...motionTiming,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: motionTiming,
  },
};
