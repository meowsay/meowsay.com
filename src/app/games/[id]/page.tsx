import GameDetailView from "@/components/GameDetailView";
import gamesData from "../../../../data/games.json";
import contentData from "../../../../data/content.json";

type GameRouteParams = {
  params: {
    id: string;
  };
};

export const dynamicParams = false;

export function generateStaticParams() {
  return gamesData.games.map((game) => ({
    id: game.id,
  }));
}

export default function GameDetailPage({ params }: GameRouteParams) {
  const game = gamesData.games.find((item) => item.id === params.id);
  const defaultLanguage =
    contentData.languageConfig.default as keyof typeof contentData.sections.gameNotFound;

  if (!game) {
    return (
      <div className="mx-auto w-full max-w-6xl px-4 pb-16 pt-24 sm:px-6 lg:px-8">
        <p className="text-base text-neutral-300">
          {contentData.sections.gameNotFound[defaultLanguage]}
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-6xl px-4 pb-16 pt-24 sm:px-6 lg:px-8">
      <GameDetailView game={game} />
    </div>
  );
}
