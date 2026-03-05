"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { transitions } from "@/lib/motion";

type ProjectDetailParallaxProps = {
  title: string;
  image: string;
  screenshots: string[];
};

export function ProjectDetailParallax({
  title,
  image,
  screenshots,
}: ProjectDetailParallaxProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const mainY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [-20, 20],
  );
  const shotY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [-12, 14],
  );

  return (
    <div ref={containerRef} className="space-y-4">
      <div className="relative h-80 overflow-hidden rounded-sm border border-zinc-800 bg-zinc-950/60">
        <motion.div
          style={{ y: mainY }}
          className="relative h-[112%] w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={transitions.normal}
        >
          <Image
            src={image}
            alt={`${title} hero preview`}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 70vw"
            priority
          />
        </motion.div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {screenshots.map((screenshot, index) => (
          <div
            key={screenshot}
            className="relative h-48 overflow-hidden rounded-sm border border-zinc-800 bg-zinc-950/60"
          >
            <motion.div
              style={{ y: shotY }}
              className="relative h-[112%] w-full"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ ...transitions.normal, delay: index * 0.06 }}
            >
              <Image
                src={screenshot}
                alt={`${title} screenshot ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
