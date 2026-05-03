# Meowsay Co., Ltd Official Website

Production-ready Next.js (App Router) website for an indie game studio with a fully JSON-driven content system and multilingual support.

## Stack

- Next.js 16 (App Router)
- React
- Tailwind CSS
- Static Generation (SSG)

## Project Structure

```text
.
├── data
│   ├── content.json
│   └── games.json
├── public
│   └── images
│       ├── clockwork-paws
│       │   ├── en/banner.svg
│       │   ├── ja/banner.svg
│       │   ├── ko/banner.svg
│       │   └── zh-CN/banner.svg
│       └── nebula-kitten
│           ├── en/banner.svg
│           ├── ja/banner.svg
│           ├── ko/banner.svg
│           └── zh-CN/banner.svg
└── src
		├── app
		│   ├── games/[id]/page.tsx
		│   ├── globals.css
		│   ├── layout.tsx
		│   └── page.tsx
		├── components
		│   ├── GameCard.tsx
		│   ├── GameDetailView.tsx
		│   ├── Hero.tsx
		│   ├── LanguageProvider.tsx
		│   └── LanguageSwitcher.tsx
		└── lib
				└── i18n.ts
```

## Language Priority Logic

Order of resolution:

1. Manual selection from UI
2. Saved language from `localStorage` (`lang`)
3. Browser language from `navigator.language`
4. Fallback to default (`en`) when unsupported

Supported languages are configured in `data/content.json`.

## Content Rules

- All display copy is sourced from JSON files.
- Text fallback for localized fields:
	- `content[userLang] || content[defaultLang]`
- Banner fallback for games:
	- `banner[userLang] || banner.default || banner[defaultLang]`

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run start
```

## Deploy to Vercel

1. Push the repository to GitHub.
2. Import the repository in Vercel.
3. Keep default framework detection (`Next.js`).
4. Build command: `npm run build`.
5. Output setting: default Next.js output.
6. Deploy.

This project is fully static for the landing page and uses SSG for game detail routes with `generateStaticParams`.
