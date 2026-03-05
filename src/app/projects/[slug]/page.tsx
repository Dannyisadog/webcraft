import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowUpRightFromSquare,
  faCircleCheck,
  faCode,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
import { SiteShell } from "@/components/SiteShell";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ProjectDetailParallax } from "@/components/ProjectDetailParallax";
import { T } from "@/components/T";
import { projects } from "@/lib/studio-data";

type ProjectDetailProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: project.name.en,
    description: project.description.en,
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <SiteShell>
      <AnimatedSection className="border-b border-zinc-800/80">
        <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-100"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="text-xs" />
            <T en="Back to projects" zh="返回作品列表" />
          </Link>
          <h1 className="mt-4 text-4xl font-semibold text-zinc-100">
            <T en={project.name.en} zh={project.name.zh} />
          </h1>
          <p className="mt-2 text-sm font-medium text-zinc-100">
            <T en={project.industry.en} zh={project.industry.zh} />
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            <T en={project.description.en} zh={project.description.zh} />
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection className="border-b border-zinc-800/80">
        <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
          <ProjectDetailParallax
            title={project.name.en}
            image={project.image}
            screenshots={project.screenshots}
          />

          <aside className="space-y-6 rounded-sm border border-zinc-800 bg-zinc-950/60 p-6 shadow-sm">
            <div>
              <h2 className="inline-flex items-center gap-2 text-lg font-semibold text-zinc-100">
                <FontAwesomeIcon icon={faLightbulb} className="text-zinc-100" />
                <T en="Project overview" zh="專案概述" />
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                <T
                  en={project.problemSolved.en}
                  zh={project.problemSolved.zh}
                />
              </p>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">
                <T en="Key features" zh="重點功能" />
              </h3>
              <ul className="mt-3 space-y-2">
                {project.keyFeatures.map((feature) => (
                  <li
                    key={feature.en}
                    className="inline-flex w-full items-start gap-2 text-sm text-zinc-300"
                  >
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="mt-0.5 text-xs text-zinc-100"
                    />
                    <T en={feature.en} zh={feature.zh} />
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">
                <T en="Technology stack" zh="技術堆疊" />
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
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
            </div>

            <a
              href={project.liveDemo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-sm bg-black px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-black"
            >
              <T en="Live demo" zh="線上展示" />
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="text-xs"
              />
            </a>
          </aside>
        </div>
      </AnimatedSection>
    </SiteShell>
  );
}
