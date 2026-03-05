import type { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { SiteShell } from "@/components/SiteShell";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ContactForm } from "@/components/ContactForm";
import { T } from "@/components/T";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start your project inquiry with Web Crafting. Send your website requirements, goals, and timeline.",
};

export default function ContactPage() {
  return (
    <SiteShell>
      <AnimatedSection className="border-b border-zinc-800/80">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-semibold text-zinc-100">
            <T en="Let's build your next website" zh="一起打造你的下一個網站" />
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            <T
              en="Share your project goals and we'll help shape the right scope, timeline, and implementation plan."
              zh="告訴我們你的目標，我們會協助釐清範圍、時程與實作方案。"
            />
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <ContactForm />

          <aside className="space-y-4 rounded-sm border border-zinc-800 bg-zinc-950/60 p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-zinc-100">
              <T en="Project inquiry info" zh="專案詢問資訊" />
            </h2>
            <p className="text-sm leading-relaxed text-zinc-400">
              <T
                en="We typically reply within one business day with next steps and a suggested call schedule."
                zh="我們通常會在 1 個工作天內回覆，並提供下一步與會議建議。"
              />
            </p>

            <p className="inline-flex items-center gap-2 text-sm text-zinc-300">
              <FontAwesomeIcon icon={faEnvelope} className="text-zinc-100" />
              dannyisadog10@gmail.com
            </p>
            <p className="inline-flex items-center gap-2 text-sm text-zinc-300">
              <FontAwesomeIcon icon={faLocationDot} className="text-zinc-100" />
              <T
                en="Remote Studio, Global Collaboration"
                zh="遠端工作室，全球合作"
              />
            </p>

            <div className="pt-3">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">
                <T en="Social media" zh="社群媒體" />
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-zinc-300">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-zinc-100"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="text-sm" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-zinc-100"
                >
                  <FontAwesomeIcon icon={faGithub} className="text-sm" />
                  GitHub
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-zinc-100"
                >
                  <FontAwesomeIcon icon={faXTwitter} className="text-sm" />X
                </a>
              </div>
            </div>
          </aside>
        </div>
      </AnimatedSection>
    </SiteShell>
  );
}
