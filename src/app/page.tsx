"use client";

import Hero from "@/components/Hero";
import GameCard from "@/components/GameCard";
import { useLanguage } from "@/components/LanguageProvider";
import { pickLocalized } from "@/lib/i18n";
import gamesData from "../../data/games.json";
import contentData from "../../data/content.json";

export default function Home() {
  const { language, isReady } = useLanguage();
  const defaultLanguage =
    contentData.languageConfig.default as keyof typeof contentData.studio.name;
  const gamesTitle = pickLocalized(contentData.sections.publishedGames, language) ?? "";
  const contactTitle = pickLocalized(contentData.sections.contact, language) ?? "";
  const contactHint = pickLocalized(contentData.sections.contactHint, language) ?? "";

  return (
    <div className="relative mx-auto w-full max-w-6xl px-4 pb-16 pt-8 sm:px-6 sm:pt-10 lg:px-8">
      <main className="space-y-14">
        <Hero />

        <section className="fade-in space-y-6">
          <h2 className="text-xl font-semibold tracking-wide text-neutral-100 sm:text-2xl">
            {isReady ? gamesTitle : ""}
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {gamesData.games.map((game, index) => (
              <GameCard key={game.id} game={game} eagerImage={index === 0} />
            ))}
          </div>
        </section>

        <section className="fade-in rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
          <h2 className="text-xl font-semibold tracking-wide text-neutral-100 sm:text-2xl">
            {isReady ? contactTitle : ""}
          </h2>
          <p className="mt-3 text-sm text-neutral-300 sm:text-base">
            {isReady ? contactHint : ""}
          </p>
          <a
            href={`mailto:${contentData.contact.email}`}
            className="mt-5 inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-medium text-neutral-900 transition hover:bg-neutral-200"
          >
            {contentData.contact.email}
          </a>
        </section>

        <footer className="py-2 text-center text-xs uppercase tracking-[0.24em] text-neutral-500">
          {isReady
            ? pickLocalized(contentData.studio.name, language)
            : contentData.studio.name[defaultLanguage]}
        </footer>
      </main>
    </div>
  );
}
