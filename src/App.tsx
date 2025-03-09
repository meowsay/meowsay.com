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
  tags: string;
  image: string;
  androidUrl: string;
  iosUrl: string;
  androidTxt: string;
  iosTxt: string
}

const games: Game[] = [
  {
    id: 'yiluoyuye',
    title: '遗落雨夜',
    description: `蓝星崩塌，暴雨肆虐，异变丛生——超能觉醒或沦为丧尸，文明尽毁，生存至上！在这末世放置挂机游戏中，探索未知废土，建造庇护堡垒，种田自给自足，揭开灾变之谜。剧情扣人心弦，玩法丰富多样，你能否重塑秩序，书写传奇？现在加入，开启你的末世生存冒险！`,
    tags: '#末世 #放置 #探索 #建造 #丧尸',
    image: 'images/yiluoyuye.jpg',
    androidUrl: '#',
    iosUrl: '#',
    androidTxt: '敬请期待',
    iosTxt: '敬请期待'
  },
  {
    id: 'efotuo2',
    title: '善恶启示录2',
    description: `在地狱里培养灵魂，获得功德或罪恶。向伟大，未知的存在启示，祈祷祂的赠予。掀开世界的角落，这里藏着你需要的秘密。踏上征程，面向所有的答案。命运的馈赠全部标明代价。`,
    tags: '#放置 #魂魄 #恶魔',
    image: 'images/efotuo2.jpg',
    androidUrl: 'https://www.taptap.cn/app/730757',
    iosUrl: '#',
    androidTxt: 'Android 预约',
    iosTxt: '敬请期待'
  },
  {
    id: 'tkingdom',
    title: '异世界废物摆烂崛起之无限启灵',
    description:
      '你因为过度熬夜，在有一天晚上终于如愿以偿猝死了。当时你正在准备下载一个叫《异世界废物摆烂崛起之无限启灵》的游戏，所以你因此被一股神奇的力量拉进了这个游戏的世界，并意外觉醒了启灵骷髅的能力。',
    tags: '#放置 #异世界 #种田 #摆烂 #建造',
    image: 'images/tkingdom.jpg',
    androidUrl: 'https://www.taptap.cn/app/619248',
    iosUrl: 'https://apps.apple.com/app/id6553994545',
    androidTxt: 'Android',
    iosTxt: 'iOS'
  },
  {
    id: 'diaohai2',
    title: '钓海2',
    description:
      '垂钓，钓竿，鱼饵，渔网，渔业市场，垂钓协会，召唤，眷者，对战，阴暗背景，克苏鲁，大航海，种田，国王，池塘。新时代下隐秘的角落，潜藏的命运在诞生时已经注定。',
    tags: '#垂钓 #航海 #放置',
    image: 'images/diaohai2.png',
    androidUrl: 'https://www.taptap.cn/app/378988',
    iosUrl: 'https://apps.apple.com/app/id6475666748',
    androidTxt: 'Android',
    iosTxt: 'iOS'
  },
  {
    id: 'yijingqishilu',
    title: '异境启示录',
    description:
      '在末世废墟中觉醒，求生与超能共舞。地球，原本是一个繁荣与和平并存的美丽星球。然而，一场突如其来的灾难打破了这一切——一颗巨大的陨石撞击地球，释放出致命的病毒和辐射，迅速蔓延全球。人类文明在这场灾难中几乎毁灭殆尽，世界陷入了无尽的混乱与黑暗。',
    tags: '#末世 #探索 #放置',
    image: 'images/yjqsl.png',
    androidUrl: 'https://l.taptap.cn/jTuAtltD?channel=rep-rep_ofz0wkufo0t',
    iosUrl: '#',
    androidTxt: 'Android',
    iosTxt: '敬请期待'
  },
  {
    id: 'efotuo',
    title: '善恶启示录',
    description:
      '开局一只小破鬼，获取资源全靠等。在这里，你目之所及的对手是，神圣西天大雷音帮帮主，如林-加特来，阿弥陀佛，施主，该上路了。宇宙超级英雄-咏春叶问，我要打十个！只因门门主-坤太美，你干嘛！哎呦！超级双料特工-鸡汤甲 鸡汤来喽！沙城一霸-龙叔，爆率真的高，布灵布灵的！地摊瓜太保-刘强哥，你这游戏保熟吗?',
    tags: '#冥界 #魂魄 #建造',
    image: 'images/efotuo.png',
    androidUrl: 'https://tap.cn/WkO9SXvM?channel=rep-rep_ayx7lus55zu',
    iosUrl: 'https://apps.apple.com/us/app/%E5%96%84%E6%81%B6%E5%90%AF%E7%A4%BA%E5%BD%95/id1661607620?platform=iphone',
    androidTxt: 'Android',
    iosTxt: 'iOS'
  },
  {
    id: 'diaohai',
    title: '无量：钓海',
    description:
      '这是一款休闲回合战斗类游戏。虽然画风稀碎，但在这一个不公平的世界里面，只要你有功德，无限道具叠加属性，什么小怪，最终boss，统统滚开！',
    tags: '#垂钓 #航海 #剧情 #放置',
    image: 'images/fishing.png',
    androidUrl: 'https://tap.cn/ajmHSTsE?channel=rep-rep_aii3ed3ta85',
    iosUrl: '#',
    androidTxt: 'Android',
    iosTxt: '敬请期待'
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
                leading Game Studio in Shanghai. <br></br>Embark on epic journeys through
                our meticulously crafted gaming universes.
              </p>

              {/* <p className="text-xl text-indigo-200 leading-relaxed">
              让自己沉浸在游戏世界中，与上海领先的游戏工作室 Meowsay Games 一起。通过我们精心打造的游戏宇宙，踏上史诗般的旅程。
              </p> */}

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
        </div>

        <div className="grid md:grid-cols-3 gap-12">
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
                <div className="absolute inset-0 bg-gradient-to-t from-[#080B14] via-[#080B14]/20 to-transparent"></div>
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

                <p className="text-indigo-200 text-md leading-relaxed mb-8">
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
