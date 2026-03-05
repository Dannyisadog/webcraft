import type { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { SiteShell } from "@/components/SiteShell";
import { ServiceCard } from "@/components/ServiceCard";
import { CTASection } from "@/components/CTASection";
import { AnimatedSection } from "@/components/AnimatedSection";
import { T } from "@/components/T";
import { services } from "@/lib/studio-data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Website design, frontend development, UI/UX implementation, landing pages, and optimization services by Web Crafting.",
};

export default function ServicesPage() {
  return (
    <SiteShell>
      <AnimatedSection className="border-b border-zinc-800/80">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">
            <FontAwesomeIcon icon={faLayerGroup} className="text-zinc-100" />
            <T en="Services" zh="服務" />
          </p>
          <h1 className="mt-3 text-4xl font-semibold text-zinc-100">
            <T en="What we build" zh="我們提供的服務" />
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            <T
              en="Flexible service blocks for businesses that need modern websites, launch pages, and scalable frontend systems."
              zh="為需要現代網站、活動頁與可擴充前端系統的企業，提供彈性服務模組。"
            />
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection className="border-b border-zinc-800/80">
        <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 py-12 sm:px-6 md:grid-cols-2 xl:grid-cols-3 lg:px-8">
          {services.map((service) => (
            <ServiceCard key={service.title.en} service={service} />
          ))}
        </div>
      </AnimatedSection>

      <CTASection />
    </SiteShell>
  );
}
