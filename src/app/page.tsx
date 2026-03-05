import type { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowTrendUp,
  faBuilding,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";
import { Hero } from "@/components/Hero";
import { ProjectGrid } from "@/components/ProjectGrid";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { CTASection } from "@/components/CTASection";
import { SiteShell } from "@/components/SiteShell";
import { AnimatedSection } from "@/components/AnimatedSection";
import { T } from "@/components/T";
import { services, testimonials } from "@/lib/studio-data";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Web Crafting creates modern business websites with strong UX and frontend performance.",
};

export default function HomePage() {
  return (
    <SiteShell>
      <Hero />

      <AnimatedSection className="border-b border-zinc-800/80">
        <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="inline-flex items-center gap-2 rounded-sm bg-zinc-950/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">
              <FontAwesomeIcon icon={faBuilding} className="text-zinc-100" />
              <T en="Studio introduction" zh="工作室介紹" />
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-zinc-100 sm:text-4xl">
              <T
                en="Web Crafting builds custom websites for ambitious businesses."
                zh="Web Crafting 為成長型品牌打造客製化網站。"
              />
            </h2>
          </div>
          <div className="space-y-4 text-sm leading-relaxed text-zinc-400 sm:text-base">
            <p>
              <T
                en="Founded by Danny, Web Crafting specializes in clean, scalable frontend experiences that blend design clarity with business outcomes."
                zh="由 Danny 創立的 Web Crafting，專注於兼具設計清晰度與商業成效的可擴充前端體驗。"
              />
            </p>
            <p>
              <T
                en="We partner with service brands, restaurants, event teams, and creators to design and develop websites that are fast, modern, and conversion-minded."
                zh="我們與服務品牌、餐飲業、活動團隊與創作者合作，打造快速、現代且重視轉換的網站。"
              />
            </p>
            <p className="inline-flex items-center gap-2 rounded-sm border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-zinc-200">
              <FontAwesomeIcon icon={faArrowTrendUp} className="text-xs" />
              <T
                en="Goal: attract the right clients through measurable digital performance."
                zh="目標：透過可衡量的數位成效，吸引更精準的客戶。"
              />
            </p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="projects" className="border-b border-zinc-800/80">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-2xl">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">
              <FontAwesomeIcon icon={faLaptopCode} className="text-zinc-100" />
              <T en="Featured projects" zh="精選作品" />
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-zinc-100">
              <T
                en="Selected websites across industries"
                zh="跨產業網站案例精選"
              />
            </h2>
          </div>
          <ProjectGrid featuredOnly />
        </div>
      </AnimatedSection>

      <AnimatedSection className="border-b border-zinc-800/80">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">
              <T en="Services overview" zh="服務總覽" />
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-zinc-100">
              <T en="End-to-end website services" zh="端到端網站服務" />
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title.en} service={service} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="border-b border-zinc-800/80">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">
              <T en="Client testimonials" zh="客戶見證" />
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-zinc-100">
              <T en="Trusted by growing brands" zh="成長品牌共同信任" />
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.name}
                testimonial={testimonial}
              />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <CTASection />
    </SiteShell>
  );
}
