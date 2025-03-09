import { games } from '../data/games'
import React from 'react'
import {
  LucideLogIn as AndroidLogo,
  Apple as AppleLogo,
  Cat,
  Star,
  Gamepad2,
  Trophy,
  ArrowLeft,
} from 'lucide-react'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react';

export function GamePage () {
    const { id } = useParams();
    // const navigate = useNavigate();
    const game = games.find(g => g.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <div className="min-h-screen bg-[#080B14] text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 cyber-grid opacity-30"></div>

      {/* Main Content */}
      <main className="relative container mx-auto px-4 py-8">
        {/* ---- */}
        <div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            

            <img
              src={game.image}
              alt={game.title}
              className="w-full h-96 object-cover rounded-xl shadow-lg mb-12"
            />

            {/* <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {game.title}
            </h1> */}

            <h1 className="text-4xl font-bold text-shadow mb-8">
                {game.title}
            </h1>

            <p className="text-indigo-200 text-lg leading-relaxed mb-6">{game.description}</p>

            <p className="text-indigo-200 text-md leading-relaxed mb-10">
                    {game.tags}
                  </p>

            <div className="flex gap-4">
                    <a
                      href={game.androidUrl}
                      className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 to-violet-500 py-4 px-6 rounded-xl font-medium hover:from-indigo-600 hover:to-violet-600 transition-all duration-300 shadow-lg shadow-indigo-500/20 hover:shadow-xl hover:shadow-indigo-500/30"
                    >
                      <AndroidLogo className="h-5 w-5" />
                      <span>{game.androidTxt}</span>
                    </a>
                    <a
                      href={game.iosUrl}
                      className="flex-1 flex items-center justify-center gap-2 bg-[#1F2937] py-4 px-6 rounded-xl font-medium hover:bg-[#1a232d] transition-all duration-300 shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30 border border-indigo-500/20"
                    >
                      <AppleLogo className="h-5 w-5" />
                      <span>{game.iosTxt}</span>
                    </a>
                  </div>

            {/* <div className="flex space-x-6">
              <a
                href={game.androidUrl}
                className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg text-center text-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Download for Android
              </a>
              <a
                href={game.iosUrl}
                className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg text-center text-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Download for iOS
              </a>
            </div> */}
          </div>
        </div>

        {/* ---- */}
      </main>

      {/* Footer */}
      <footer className="relative mt-16 border-t border-indigo-500/20">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <div className="flex items-center gap-3 bg-[#111827]/80 px-6 py-3 rounded-full backdrop-blur-sm border border-indigo-500/20 shadow-lg shadow-indigo-500/10">
              <Cat className="h-6 w-6 text-indigo-400" />
              <span className="text-xl font-medium">
                Meowsay Games © {new Date().getFullYear()}
              </span>
            </div>
            <p className="text-lg text-indigo-200">猫语星球游研社 | meowsaygames@outlook.com</p>
            {/* <p className="text-lg text-indigo-200">meowsaygames@outlook.com</p>  */}
          </div>
        </div>
      </footer>
    </div>
  )
}
