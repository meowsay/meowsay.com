"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { pickBanner, pickLocalized } from "@/lib/i18n";
import contentData from "../../data/content.json";

type DownloadItem = {
  label: Record<string, string>;
  url: string;
};

type Game = {
  id: string;
  name: Record<string, string>;
  tags: Record<string, string[]>;
  description: Record<string, string>;
  banner: Record<string, string>;
  downloads: DownloadItem[];
};

export default function GameDetailView({ game }: { game: Game }) {
  const { language, isReady } = useLanguage();

  if (!isReady) {
    return <section className="h-[460px] animate-pulse rounded-2xl bg-white/5" />;
  }

  const name = pickLocalized(game.name, language) ?? "";
  const tags = pickLocalized(game.tags, language) ?? [];
  const description = pickLocalized(game.description, language) ?? "";
  const banner = pickBanner(game.banner, language);
  const backToHome = pickLocalized(contentData.sections.backToHome, language) ?? "";

  return (
    <section className="fade-in space-y-8">
      <Link
        href="/"
        className="inline-flex items-center rounded-full border border-white/20 px-4 py-2 text-sm text-neutral-100 transition hover:border-white/45 hover:bg-white/10"
      >
        {backToHome}
      </Link>

      <article className="overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/75">
        <div className="relative aspect-video">
          <Image
            key={banner}
            src={banner}
            alt={name}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
        </div>

        <div className="space-y-5 p-6 sm:p-8">
          <h1 className="text-3xl font-semibold text-white sm:text-4xl">{name}</h1>

          <ul className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <li
                key={`${game.id}-${tag}`}
                className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-neutral-300"
              >
                {tag}
              </li>
            ))}
          </ul>

          <p className="max-w-3xl text-base leading-relaxed text-neutral-300">
            {description}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {game.downloads.map((download) => {
              const label = pickLocalized(download.label, language) ?? "";
              return (
                <a
                  key={`${game.id}-${download.url}`}
                  href={download.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-medium text-neutral-900 transition hover:bg-neutral-200"
                >
                  {label}
                </a>
              );
            })}
          </div>
        </div>
      </article>
    </section>
  );
}
