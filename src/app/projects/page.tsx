"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/studio-data";
import { useLanguage } from "@/context/LanguageContext";

const projectImages: Record<string, string> = {
  "aurelia-fine-dining": "/images/aurelia.png",
  "iron-forge-gym": "/images/ironforge.png",
  "velocity-athletics": "/images/velocity.png",
  "soundwave-studio": "/images/soundwave.png",
  "northbridge-corporate-site": "/images/site1.png",
  "olive-and-oak-restaurant": "/images/site2.png",
  "atelier-nova-designer-portfolio": "/images/site3.png",
  "city-tech-summit-registration": "/images/site4.png",
  "la-tavola-italiana": "/images/tavola.png",
  "green-garden-vege-restaurant": "/images/greenroots.png",
};

export default function ProjectsPage() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container-portfolio">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="font-display text-4xl font-bold mb-2">
            {language === "zh" ? "精選作品" : "Featured Work"}
          </h1>
          <p className="text-foreground/60 mb-12">
            {language === "zh"
              ? "以下是過去完成的專案作品"
              : "Here are some of the projects I've completed"}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.a
                key={project.slug}
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-0 overflow-hidden group cursor-pointer block"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="aspect-video overflow-hidden bg-muted">
                  <img
                    src={projectImages[project.slug] || "/images/site1.png"}
                    alt={project.name[language]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-indigo-500 transition-colors">
                    {project.name[language]}
                  </h3>
                  <p className="text-sm text-foreground/60 mb-3 line-clamp-2">
                    {project.description[language]}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-full bg-indigo-500/10 text-indigo-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
