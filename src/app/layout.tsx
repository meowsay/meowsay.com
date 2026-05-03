import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LanguageProvider } from "@/components/LanguageProvider";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import "./globals.css";
import contentData from "../../data/content.json";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const defaultLanguage =
  contentData.languageConfig.default as keyof typeof contentData.studio.name;

export const metadata: Metadata = {
  title: contentData.studio.name[defaultLanguage],
  description: contentData.studio.philosophy[defaultLanguage],
  icons: {
    icon: "/meowsay.svg",
    shortcut: "/meowsay.svg",
    apple: "/meowsay.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={defaultLanguage}
      className={`${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full bg-neutral-950 text-neutral-100"
        suppressHydrationWarning
      >
        <LanguageProvider>
          <div className="pointer-events-none fixed right-4 top-4 z-50 sm:right-8 sm:top-8">
            <div className="pointer-events-auto">
              <LanguageSwitcher />
            </div>
          </div>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
