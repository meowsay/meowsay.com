"use client";

import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";
import { pickBanner, pickLocalized } from "@/lib/i18n";

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

export default function GameCard({
  game,
  eagerImage = false,
}: {
  game: Game;
  eagerImage?: boolean;
}) {
  const { language } = useLanguage();

  const name = pickLocalized(game.name, language) ?? "";
  const tags = pickLocalized(game.tags, language) ?? [];
  const description = pickLocalized(game.description, language) ?? "";
  const banner = pickBanner(game.banner, language);

  return (
    <article className="group stagger-up overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/70 shadow-[0_20px_60px_-42px_rgba(0,0,0,0.9)] transition duration-500 hover:-translate-y-1.5 hover:border-white/30">
      <div className="relative aspect-video overflow-hidden">
        <Image
          key={banner}
          src={banner}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition duration-700 group-hover:scale-105"
          loading={eagerImage ? "eager" : "lazy"}
          fetchPriority={eagerImage ? "high" : undefined}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
      </div>

      <div className="space-y-4 p-5 sm:p-6">
        <h3 className="text-2xl font-semibold text-white">{name}</h3>

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

        <p className="text-sm leading-relaxed text-neutral-300">{description}</p>

        <div className="flex flex-wrap gap-2 pt-1">
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
  );
}
