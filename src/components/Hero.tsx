"use client";

import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";
import { pickLocalized } from "@/lib/i18n";
import contentData from "../../data/content.json";

export default function Hero() {
  const { language, isReady } = useLanguage();

  if (!isReady) {
    return <section className="h-[280px] animate-pulse rounded-3xl bg-white/5" />;
  }

  const studioName = pickLocalized(contentData.studio.name, language) ?? "";
  const headline = pickLocalized(contentData.studio.headline, language) ?? "";
  const philosophy = pickLocalized(contentData.studio.philosophy, language) ?? "";

  return (
    <section className="fade-in relative overflow-hidden rounded-3xl border border-white/10 bg-[radial-gradient(circle_at_15%_20%,rgba(145,188,255,0.2),transparent_38%),radial-gradient(circle_at_85%_0%,rgba(233,233,233,0.17),transparent_42%),linear-gradient(135deg,#101316,#1b2025_45%,#101316)] p-6 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.85)] sm:p-10">
      <div className="max-w-3xl pt-14 sm:pt-2">
        <div className="mb-5 flex items-center gap-4">
          <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-white/10 bg-white/95 p-2 shadow-[0_10px_30px_-16px_rgba(0,0,0,0.8)] sm:h-16 sm:w-16">
            <Image
              src="/meowsay.svg"
              alt={studioName}
              fill
              priority
              className="object-contain p-2"
              sizes="64px"
            />
          </div>
          <p className="text-xs uppercase tracking-[0.24em] text-neutral-300/80">
            {studioName}
          </p>
        </div>
        <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-6xl">
          {headline}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-300 sm:text-lg">
          {philosophy}
        </p>
      </div>
    </section>
  );
}
