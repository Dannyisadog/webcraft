"use client";

import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faCalendarDays,
  faFilter,
  faLayerGroup,
  faPaintbrush,
  faUtensils,
  faWindowMaximize,
} from "@fortawesome/free-solid-svg-icons";
import {
  projectCategories,
  projectCategoryLabels,
  projects,
} from "@/lib/studio-data";
import type { ProjectCategory } from "@/lib/studio-data";
import { ProjectCard } from "@/components/ProjectCard";
import { itemVariants, motionTiming, sectionVariants } from "@/lib/motion";
import { useLanguage } from "@/components/LanguageProvider";

type ProjectGridProps = {
  featuredOnly?: boolean;
};

const categoryIcons: Record<ProjectCategory, typeof faBuilding> = {
  Corporate: faBuilding,
  Restaurant: faUtensils,
  Portfolio: faPaintbrush,
  Event: faCalendarDays,
  "Landing Page": faWindowMaximize,
};

export function ProjectGrid({ featuredOnly = false }: ProjectGridProps) {
  const reduceMotion = useReducedMotion();
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "All">(
    "All",
  );

  const filteredProjects = useMemo(() => {
    const source = featuredOnly
      ? projects.filter((project) => project.featured)
      : projects;

    if (activeCategory === "All") {
      return source;
    }

    return source.filter((project) => project.category === activeCategory);
  }, [activeCategory, featuredOnly]);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-2">
        <motion.button
          type="button"
          onClick={() => setActiveCategory("All")}
          className={`inline-flex items-center gap-2 rounded-sm border px-3 py-2 text-xs font-semibold transition-colors ${
            activeCategory === "All"
              ? "border-zinc-100 bg-zinc-900 text-zinc-100"
              : "border-zinc-800 bg-zinc-950/60 text-zinc-400 hover:border-zinc-400 hover:text-zinc-100"
          }`}
          whileHover={reduceMotion ? undefined : { scale: 1.03 }}
          whileTap={reduceMotion ? undefined : { scale: 0.96 }}
          transition={motionTiming}
        >
          <FontAwesomeIcon icon={faLayerGroup} className="text-xs" />
          {t({ en: "All", zh: "全部" })}
        </motion.button>

        {projectCategories.map((category) => (
          <motion.button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`inline-flex items-center gap-2 rounded-sm border px-3 py-2 text-xs font-semibold transition-colors ${
              activeCategory === category
                ? "border-zinc-100 bg-zinc-900 text-zinc-100"
                : "border-zinc-800 bg-zinc-950/60 text-zinc-400 hover:border-zinc-400 hover:text-zinc-100"
            }`}
            whileHover={reduceMotion ? undefined : { scale: 1.03 }}
            whileTap={reduceMotion ? undefined : { scale: 0.96 }}
            transition={motionTiming}
          >
            <FontAwesomeIcon
              icon={categoryIcons[category]}
              className="text-xs"
            />
            {t(projectCategoryLabels[category])}
          </motion.button>
        ))}
      </div>

      <p className="inline-flex items-center gap-2 text-sm text-zinc-500">
        <FontAwesomeIcon icon={faFilter} className="text-xs" />
        {t({ en: "Showing", zh: "目前顯示" })} {filteredProjects.length}{" "}
        {t({
          en: filteredProjects.length === 1 ? "project" : "projects",
          zh: "個專案",
        })}
      </p>

      <motion.div
        className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.slug}
            variants={itemVariants}
            transition={{ ...motionTiming, delay: index * 0.06 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
