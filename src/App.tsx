import React from 'react';
import {
  LucideLogIn as AndroidLogo,
  Apple as AppleLogo,
  Cat,
  Star,
  Gamepad2,
  Trophy,
} from 'lucide-react';

interface Game {
  id: string;
  title: string;
  description: string;
  image: string;
  androidUrl: string;
  iosUrl: string;
}

const games: Game[] = [
  {
    id: 'idle-cat-empire',
    title: 'Idle Cat Empire',
    description:
      'Build your feline empire from a single kitten to a vast network of purring productivity. Manage resources, unlock new cat breeds, and become the ultimate cat entrepreneur!',
    image:
      'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80',
    androidUrl: '#',
    iosUrl: '#',
  },
  {
    id: 'pixel-pet-tycoon',
    title: 'Pixel Pet Tycoon',
    description:
      'Create and manage your virtual pet shop in this charming pixel-art idle game. Breed rare pets, customize your shop, and make your customers happy!',
    image:
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=800&q=80',
    androidUrl: '#',
    iosUrl: '#',
  },
  {
    id: 'pixel-pet-tycoon',
    title: 'Pixel Pet Tycoon',
    description:
      'Create and manage your virtual pet shop in this charming pixel-art idle game. Breed rare pets, customize your shop, and make your customers happy!',
    image:
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=800&q=80',
    androidUrl: '#',
    iosUrl: '#',
  },
];

function App() {
  return (
    <div className="min-h-screen bg-[#080B14] text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 cyber-grid opacity-30"></div>

      <header className="relative">
        <div className="container mx-auto px-4 pt-16 pb-24">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="animate-float">
              <div className="flex items-center gap-4 bg-[#111827]/80 p-6 rounded-2xl backdrop-blur-lg border border-indigo-500/20 shadow-xl shadow-indigo-500/10">
                <Cat className="h-16 w-16 text-indigo-400" />
                <div>
                  <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
                    Meowsay Games
                  </h1>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-[#111827]/80 px-8 py-4 rounded-full backdrop-blur-sm border border-indigo-500/20 shadow-lg shadow-indigo-500/10">
              <Gamepad2 className="h-6 w-6 text-indigo-400" />
              <span className="text-xl font-medium text-shadow">
                “猫语星球游研社”，探索文字放置游戏的边界！
              </span>
              <Trophy className="h-6 w-6 text-amber-400" />
            </div>

            <div className="max-w-3xl mx-auto space-y-4 mt-8">
              <p className="text-xl text-indigo-200 leading-relaxed">
                Immerse yourself in the world of gaming with Meowsay Games, the
                leading Game Studio in Shanghai.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative container mx-auto px-4 py-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
            Featured Games
          </h2>
          <p className="text-xl text-indigo-200 max-w-2xl mx-auto">
            Embark on epic journeys through our meticulously crafted gaming
            universes
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {games.map((game) => (
            <div
              key={game.id}
              className="game-card rounded-3xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]"
            >
              <div className="relative">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-72 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080B14] via-[#080B14]/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-3xl font-bold text-shadow">
                    {game.title}
                  </h3>
                </div>
              </div>
              <div className="p-8 bg-[#111827]/80 backdrop-blur-sm border-t border-indigo-500/20">
                <p className="text-indigo-200 text-lg leading-relaxed mb-8">
                  {game.description}
                </p>

                <div className="flex gap-4">
                  <a
                    href={game.androidUrl}
                    className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 to-violet-500 py-4 px-6 rounded-xl font-medium hover:from-indigo-600 hover:to-violet-600 transition-all duration-300 shadow-lg shadow-indigo-500/20 hover:shadow-xl hover:shadow-indigo-500/30"
                  >
                    <AndroidLogo className="h-5 w-5" />
                    <span>Play on Android</span>
                  </a>
                  <a
                    href={game.iosUrl}
                    className="flex-1 flex items-center justify-center gap-2 bg-[#1F2937] py-4 px-6 rounded-xl font-medium hover:bg-[#1a232d] transition-all duration-300 shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30 border border-indigo-500/20"
                  >
                    <AppleLogo className="h-5 w-5" />
                    <span>Play on iOS</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative mt-24 border-t border-indigo-500/20">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <div className="flex items-center gap-3 bg-[#111827]/80 px-6 py-3 rounded-full backdrop-blur-sm border border-indigo-500/20 shadow-lg shadow-indigo-500/10">
              <Cat className="h-6 w-6 text-indigo-400" />
              <span className="text-xl font-medium">
                Meowsay Games © {new Date().getFullYear()}
              </span>
            </div>
            <p className="text-lg text-indigo-200">猫语星球游研社</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
