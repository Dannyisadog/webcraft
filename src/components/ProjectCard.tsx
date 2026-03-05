"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faCode,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import type { Project } from "@/lib/studio-data";
import { motionTiming } from "@/lib/motion";
import { useLanguage } from "@/components/LanguageProvider";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const reduceMotion = useReducedMotion();
  const { t } = useLanguage();

  return (
    <motion.article
      whileHover={
        reduceMotion
          ? undefined
          : {
              scale: 1.03,
              y: -6,
              boxShadow: "0 18px 40px rgba(15, 23, 42, 0.18)",
            }
      }
      transition={motionTiming}
      className="group relative overflow-hidden rounded-sm border border-zinc-800 bg-zinc-950/60 shadow-sm"
    >
      <a
        href={project.liveDemo}
        target="_blank"
        rel="noreferrer"
        aria-label={t({
          en: `Open ${project.name.en} live demo`,
          zh: `開啟 ${project.name.zh} 線上展示`,
        })}
        className="absolute inset-0 z-10 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
      />
      <motion.div
        className="relative h-52 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={motionTiming}
      >
        <motion.div
          whileHover={reduceMotion ? undefined : { scale: 1.06 }}
          transition={motionTiming}
          className="h-full w-full"
        >
          <Image
            src={project.image}
            alt={`${t(project.name)} preview`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>
      </motion.div>
      <div className="space-y-4 p-5">
        <div className="space-y-2">
          <span className="inline-flex items-center gap-2 rounded-sm bg-zinc-900 px-3 py-1 text-xs font-medium text-zinc-400">
            <FontAwesomeIcon icon={faLink} className="text-xs" />
            {t(
              project.category === "Corporate"
                ? { en: "Corporate", zh: "企業網站" }
                : project.category === "Restaurant"
                  ? { en: "Restaurant", zh: "餐飲網站" }
                  : project.category === "Portfolio"
                    ? { en: "Portfolio", zh: "作品集網站" }
                    : project.category === "Event"
                      ? { en: "Event", zh: "活動網站" }
                      : { en: "Landing Page", zh: "著陸頁" },
            )}
          </span>
          <h3 className="text-xl font-semibold text-zinc-100">
            {t(project.name)}
          </h3>
          <p className="text-sm font-medium text-zinc-100">
            {t(project.industry)}
          </p>
          <p className="text-sm leading-relaxed text-zinc-400">
            {t(project.description)}
          </p>
        </div>

        <ul className="flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <li
              key={technology}
              className="inline-flex items-center gap-2 rounded-sm border border-zinc-800 px-2 py-1 text-xs text-zinc-400"
            >
              <FontAwesomeIcon
                icon={faCode}
                className="text-xs text-zinc-100"
              />
              {technology}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-3 text-sm font-semibold">
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noreferrer"
            className="relative z-20 inline-flex items-center gap-2 text-zinc-500 transition-colors hover:text-zinc-100"
          >
            {t({ en: "Live demo", zh: "線上展示" })}
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="text-xs"
            />
          </a>
        </div>
      </div>
    </motion.article>
  );
}
