"use client";

import contentData from "../../data/content.json";
import { useLanguage } from "@/components/LanguageProvider";

const nativeNames = contentData.nativeLanguageNames;

export default function LanguageSwitcher() {
  const { language, supportedLanguages, setLanguage } = useLanguage();

  return (
    <div
      className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-black/25 p-1 backdrop-blur"
      suppressHydrationWarning
    >
      {supportedLanguages.map((lang) => {
        const active = lang === language;
        return (
          <button
            key={lang}
            type="button"
            onClick={() => setLanguage(lang)}
            suppressHydrationWarning
            className={`rounded-full px-3 py-1.5 text-xs font-medium tracking-wide transition ${
              active
                ? "bg-white text-neutral-900"
                : "text-neutral-300 hover:bg-white/10 hover:text-white"
            }`}
          >
            {nativeNames[lang]}
          </button>
        );
      })}
    </div>
  );
}
