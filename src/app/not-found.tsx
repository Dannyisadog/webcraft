import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import { T } from "@/components/T";

export default function NotFound() {
  return (
    <SiteShell>
      <section className="mx-auto w-full max-w-6xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl font-semibold text-zinc-100">
          <T en="Page not found" zh="找不到頁面" />
        </h1>
        <p className="mt-3 text-sm text-zinc-400">
          <T
            en="The page you are looking for does not exist."
            zh="你要找的頁面不存在。"
          />
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex rounded-sm bg-black px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-black"
        >
          <T en="Return home" zh="返回首頁" />
        </Link>
      </section>
    </SiteShell>
  );
}
