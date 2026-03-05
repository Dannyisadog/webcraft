import type { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { SiteShell } from "@/components/SiteShell";
import { ProjectGrid } from "@/components/ProjectGrid";
import { AnimatedSection } from "@/components/AnimatedSection";
import { T } from "@/components/T";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Web Crafting projects across corporate, restaurant, portfolio, event, and landing page industries.",
};

export default function ProjectsPage() {
  return (
    <SiteShell>
      <AnimatedSection className="border-b border-zinc-800/80">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">
            <FontAwesomeIcon icon={faFolderOpen} className="text-zinc-100" />
            <T en="All projects" zh="全部作品" />
          </p>
          <h1 className="mt-3 text-4xl font-semibold text-zinc-100">
            <T en="Project showcase" zh="作品展示" />
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            <T
              en="A collection of websites built for different industries, each focused on performance, usability, and business impact."
              zh="收錄跨產業網站案例，每個專案都聚焦於效能、易用性與商業成果。"
            />
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <ProjectGrid />
        </div>
      </AnimatedSection>
    </SiteShell>
  );
}
