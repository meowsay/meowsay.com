import contentData from "../../data/content.json";

export type LanguageCode = "en" | "zh-CN" | "ja" | "ko";

const languageConfig = contentData.languageConfig;

export const SUPPORTED_LANGUAGES =
  languageConfig.languages as unknown as LanguageCode[];
export const DEFAULT_LANGUAGE = languageConfig.default as LanguageCode;

const baseLanguageMap: Record<string, string> = {
  en: "en",
  zh: "zh-CN",
  ja: "ja",
  ko: "ko",
};

export function isSupportedLanguage(language: string): language is LanguageCode {
  return SUPPORTED_LANGUAGES.includes(language as LanguageCode);
}

export function resolveBrowserLanguage(browserLanguage: string): LanguageCode | null {
  if (!browserLanguage) {
    return null;
  }

  if (isSupportedLanguage(browserLanguage)) {
    return browserLanguage;
  }

  const baseLanguage = browserLanguage.split("-")[0];
  const normalized = baseLanguageMap[baseLanguage];

  if (normalized && isSupportedLanguage(normalized)) {
    return normalized;
  }

  return null;
}

export function resolveLanguage(options: {
  manualLanguage?: string | null;
  savedLanguage?: string | null;
  browserLanguage?: string | null;
}): LanguageCode {
  const { manualLanguage, savedLanguage, browserLanguage } = options;

  if (manualLanguage && isSupportedLanguage(manualLanguage)) {
    return manualLanguage;
  }

  if (savedLanguage && isSupportedLanguage(savedLanguage)) {
    return savedLanguage;
  }

  if (browserLanguage) {
    const detectedLanguage = resolveBrowserLanguage(browserLanguage);
    if (detectedLanguage) {
      return detectedLanguage;
    }
  }

  return DEFAULT_LANGUAGE;
}

export function pickLocalized<T>(
  content: Partial<Record<string, T>> | undefined,
  userLanguage: string,
): T | undefined {
  if (!content) {
    return undefined;
  }

  return content[userLanguage] ?? content[DEFAULT_LANGUAGE];
}

export function pickBanner(
  banner: Partial<Record<string, string>> | undefined,
  userLanguage: string,
): string {
  if (!banner) {
    return "";
  }

  return banner[userLanguage] ?? banner.default ?? banner[DEFAULT_LANGUAGE] ?? "";
}
