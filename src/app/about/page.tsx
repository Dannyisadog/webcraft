import type { Metadata } from "next";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAstronaut } from "@fortawesome/free-solid-svg-icons";
import { SiteShell } from "@/components/SiteShell";
import { AnimatedSection } from "@/components/AnimatedSection";
import { T } from "@/components/T";
import { aboutHighlights, technologyStack } from "@/lib/studio-data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Danny, founder of Web Crafting, and learn the philosophy behind modern business-focused website development.",
};

export default function AboutPage() {
  return (
    <SiteShell>
      <AnimatedSection className="border-b border-zinc-800/80">
        <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">
              <FontAwesomeIcon
                icon={faUserAstronaut}
                className="text-zinc-100"
              />
              <T en="Founder introduction" zh="創辦人介紹" />
            </p>
            <h1 className="mt-3 text-4xl font-semibold text-zinc-100">
              <T en="Hi, I'm Danny." zh="你好，我是 Danny。" />
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-zinc-400 sm:text-base">
              <T
                en="I founded Web Crafting to help businesses ship digital experiences that look modern and perform reliably. Every project is intentionally crafted around real goals, not just visual polish."
                zh="我創立 Web Crafting，是為了幫助企業打造現代、穩定且能落地的數位體驗。每個專案都以實際商業目標為核心，而不只是好看。"
              />
            </p>
          </div>
          <div className="rounded-sm border border-zinc-800 bg-zinc-950/60 p-6 shadow-sm">
            <div className="relative mb-5 h-64 overflow-hidden rounded-sm border border-zinc-800 bg-zinc-900/70 sm:h-72">
              <Image
                src="/images/founder.jpg"
                alt="Founder Danny"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
            </div>
            <h2 className="text-2xl font-semibold text-zinc-100">
              <T en="Studio story" zh="工作室故事" />
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400">
              <T
                en="Web Crafting started as a freelance frontend practice and evolved into a focused web development studio serving ambitious businesses across multiple industries."
                zh="Web Crafting 起初是自由接案的前端工作，逐步發展為專注服務成長型企業的網站開發工作室。"
              />
            </p>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400">
              <T
                en="We combine strategic discovery, purposeful UI decisions, and production-grade implementation to create websites that are fast, scalable, and conversion-ready."
                zh="我們結合策略探索、清楚的 UI 決策與可上線的工程實作，打造快速、可擴充且可轉換的網站。"
              />
            </p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="border-b border-zinc-800/80">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-zinc-100">
            <T en="Development philosophy" zh="開發理念" />
          </h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {aboutHighlights.map((item) => (
              <article
                key={item.title.en}
                className="rounded-sm border border-zinc-800 bg-zinc-950/60 p-5 shadow-sm"
              >
                <h3 className="inline-flex items-center gap-2 text-lg font-semibold text-zinc-100">
                  <FontAwesomeIcon icon={item.icon} className="text-zinc-100" />
                  <T en={item.title.en} zh={item.title.zh} />
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  <T en={item.description.en} zh={item.description.zh} />
                </p>
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-zinc-100">
            <T en="Technology stack" zh="技術堆疊" />
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {technologyStack.map((technology) => (
              <li
                key={technology.name.en}
                className="inline-flex items-center gap-2 rounded-sm border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-sm font-medium text-zinc-300 shadow-sm"
              >
                <FontAwesomeIcon
                  icon={technology.icon}
                  className="text-zinc-100"
                />
                <T en={technology.name.en} zh={technology.name.zh} />
              </li>
            ))}
          </ul>
        </div>
      </AnimatedSection>
    </SiteShell>
  );
}
