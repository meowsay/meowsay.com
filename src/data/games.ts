export interface Game {
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
  
export const games: Game[] = [
  {
      id: 'fishinggod',
      title: '钓鱼佬垂钓万界',
      description: `一个钓鱼游戏，如何变成跨越万界的奇幻旅程？ 一根钓竿，怎么能钓出命运、真理，甚至未来的自己？你能否将所有位面碎片拼回原初的宇宙？欢迎登船，开启你的垂钓万界之旅。`,
      tags: '#垂钓 #放置 #探索 #建造',
      image: '../images/fishinggod.jpg',
      androidUrl: '#',
      iosUrl: '#',
      androidTxt: '敬请期待',
      iosTxt: '敬请期待'
    },
    {
      id: 'yiluoyuye',
      title: '遗落雨夜',
      description: `蓝星崩塌，暴雨肆虐，异变丛生——超能觉醒或沦为丧尸，文明尽毁，生存至上！在这末世放置挂机游戏中，探索未知废土，建造庇护堡垒，种田自给自足，揭开灾变之谜。剧情扣人心弦，玩法丰富多样，你能否重塑秩序，书写传奇？现在加入，开启你的末世生存冒险！`,
      tags: '#末世 #放置 #探索 #建造 #丧尸',
      image: '../images/yiluoyuye.jpg',
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
      image: '../images/efotuo2.jpg',
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
      image: '../images/tkingdom.jpg',
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
      image: '../images/diaohai2.png',
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
      image: '../images/yjqsl.png',
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
      image: '../images/efotuo.png',
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
      image: '../images/fishing.png',
      androidUrl: 'https://tap.cn/ajmHSTsE?channel=rep-rep_aii3ed3ta85',
      iosUrl: '#',
      androidTxt: 'Android',
      iosTxt: '敬请期待'
    },
  ];