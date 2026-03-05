"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { useLanguage } from "@/components/LanguageProvider";

const year = new Date().getFullYear();

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-zinc-800 bg-zinc-950/75 py-8 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="font-(--font-poppins) text-lg font-semibold text-zinc-100">
            Web Crafting
          </p>
          <p className="text-sm text-zinc-500">
            {t({
              en: "Custom website development for businesses.",
              zh: "為企業打造客製化網站。",
            })}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-400">
          <a
            href="mailto:dannyisadog10@gmail.com"
            className="inline-flex items-center gap-2 transition-colors hover:text-zinc-100"
          >
            <FontAwesomeIcon icon={faEnvelope} className="text-sm" />
            dannyisadog10@gmail.com
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 transition-colors hover:text-zinc-100"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} className="text-sm" />
            {t({ en: "LinkedIn", zh: "LinkedIn" })}
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 transition-colors hover:text-zinc-100"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} className="text-sm" />
            {t({ en: "GitHub", zh: "GitHub" })}
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 transition-colors hover:text-zinc-100"
            aria-label="X"
          >
            <FontAwesomeIcon icon={faXTwitter} className="text-sm" />X
          </a>
        </div>
      </div>
      <div className="mx-auto mt-6 w-full max-w-6xl px-4 text-xs text-zinc-500 sm:px-6 lg:px-8">
        <p>
          © {year} Web Crafting.{" "}
          {t({ en: "Built by Danny.", zh: "由 Danny 製作。" })}
        </p>
        <p className="mt-1">
          <Link
            href="/contact"
            className="transition-colors hover:text-zinc-100"
          >
            {t({ en: "Start your project inquiry", zh: "開始你的專案詢問" })}
          </Link>
        </p>
      </div>
    </footer>
  );
}
