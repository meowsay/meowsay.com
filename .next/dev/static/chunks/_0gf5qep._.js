(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LanguageProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$content$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/content.json.[json].cjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Hero() {
    _s();
    const { language, isReady } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    if (!isReady) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "h-[280px] animate-pulse rounded-3xl bg-white/5"
        }, void 0, false, {
            fileName: "[project]/src/components/Hero.tsx",
            lineNumber: 12,
            columnNumber: 12
        }, this);
    }
    const studioName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pickLocalized"])(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$content$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].studio.name, language) ?? "";
    const headline = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pickLocalized"])(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$content$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].studio.headline, language) ?? "";
    const philosophy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pickLocalized"])(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$content$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].studio.philosophy, language) ?? "";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "fade-in relative overflow-hidden rounded-3xl border border-white/10 bg-[radial-gradient(circle_at_15%_20%,rgba(145,188,255,0.2),transparent_38%),radial-gradient(circle_at_85%_0%,rgba(233,233,233,0.17),transparent_42%),linear-gradient(135deg,#101316,#1b2025_45%,#101316)] p-6 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.85)] sm:p-10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-3xl pt-14 sm:pt-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-5 flex items-center gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative h-14 w-14 overflow-hidden rounded-2xl border border-white/10 bg-white/95 p-2 shadow-[0_10px_30px_-16px_rgba(0,0,0,0.8)] sm:h-16 sm:w-16",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/meowsay.svg",
                                alt: studioName,
                                fill: true,
                                priority: true,
                                className: "object-contain p-2",
                                sizes: "64px"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Hero.tsx",
                                lineNumber: 24,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Hero.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs uppercase tracking-[0.24em] text-neutral-300/80",
                            children: studioName
                        }, void 0, false, {
                            fileName: "[project]/src/components/Hero.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Hero.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-4xl font-semibold leading-tight tracking-tight text-white sm:text-6xl",
                    children: headline
                }, void 0, false, {
                    fileName: "[project]/src/components/Hero.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-6 max-w-2xl text-base leading-relaxed text-neutral-300 sm:text-lg",
                    children: philosophy
                }, void 0, false, {
                    fileName: "[project]/src/components/Hero.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Hero.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Hero.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_s(Hero, "dnFPwYRGNik13IeDCDVNyhKFXJU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/GameCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GameCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LanguageProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function GameCard({ game, eagerImage = false }) {
    _s();
    const { language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const name = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pickLocalized"])(game.name, language) ?? "";
    const tags = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pickLocalized"])(game.tags, language) ?? [];
    const description = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pickLocalized"])(game.description, language) ?? "";
    const banner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pickBanner"])(game.banner, language);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "group stagger-up overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/70 shadow-[0_20px_60px_-42px_rgba(0,0,0,0.9)] transition duration-500 hover:-translate-y-1.5 hover:border-white/30",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative aspect-video overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: banner,
                        alt: name,
                        fill: true,
                        sizes: "(max-width: 768px) 100vw, 50vw",
                        className: "object-cover transition duration-700 group-hover:scale-105",
                        loading: eagerImage ? "eager" : "lazy",
                        fetchPriority: eagerImage ? "high" : undefined
                    }, banner, false, {
                        fileName: "[project]/src/components/GameCard.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/src/components/GameCard.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/GameCard.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4 p-5 sm:p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-2xl font-semibold text-white",
                        children: name
                    }, void 0, false, {
                        fileName: "[project]/src/components/GameCard.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "flex flex-wrap gap-2",
                        children: tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-neutral-300",
                                children: tag
                            }, `${game.id}-${tag}`, false, {
                                fileName: "[project]/src/components/GameCard.tsx",
                                lineNumber: 56,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/GameCard.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm leading-relaxed text-neutral-300",
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/src/components/GameCard.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2 pt-1",
                        children: game.downloads.map((download)=>{
                            const label = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pickLocalized"])(download.label, language) ?? "";
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: download.url,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-medium text-neutral-900 transition hover:bg-neutral-200",
                                children: label
                            }, `${game.id}-${download.url}`, false, {
                                fileName: "[project]/src/components/GameCard.tsx",
                                lineNumber: 71,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/GameCard.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/GameCard.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/GameCard.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_s(GameCard, "d1ORxvPBup+C3Qetit/BVjvgCJk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = GameCard;
var _c;
__turbopack_context__.k.register(_c, "GameCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data/games.json.[json].cjs [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "games": [
        {
            "id": "spiritbone-idle-necromancer",
            "name": {
                "en": "Spiritbone: Idle Necromancer",
                "zh-CN": "异世界废物摆烂崛起之无限启灵",
                "ja": "スピリットボーン：放置ネクロマンサー",
                "ko": "스피릿본: 방치형 네크로맨서"
            },
            "tags": {
                "en": [
                    "Card Game",
                    "Strategy",
                    "Fantasy",
                    "RPG"
                ],
                "zh-CN": [
                    "卡牌",
                    "策略",
                    "奇幻",
                    "RPG"
                ],
                "ja": [
                    "カード",
                    "戦略",
                    "ファンタジー",
                    "RPG"
                ],
                "ko": [
                    "카드",
                    "전략",
                    "판타지",
                    "RPG"
                ]
            },
            "description": {
                "en": "Raise and rule the undead.",
                "zh-CN": "召唤亡灵军团，在放置成长中扩张你的死灵王国。",
                "ja": "アンデッド軍団を育て、放置でネクロマンサーの王国を広げよう。",
                "ko": "언데드 군단을 성장시키며 방치형 전투로 네크로맨서 왕국을 확장하세요."
            },
            "banner": {
                "en": "/images/spiritbone-idle-necromancer/en/banner.jpg",
                "zh-CN": "/images/spiritbone-idle-necromancer/zh-CN/banner.jpg",
                "ja": "/images/spiritbone-idle-necromancer/ja/banner.jpg",
                "ko": "/images/spiritbone-idle-necromancer/ko/banner.jpg",
                "default": "/images/spiritbone-idle-necromancer/en/banner.jpg"
            },
            "downloads": [
                {
                    "label": {
                        "en": "App Store",
                        "zh-CN": "App Store",
                        "ja": "App Store",
                        "ko": "App Store"
                    },
                    "url": "https://apps.apple.com/us/app/spiritbone-idle-necromancer/id6744648050"
                },
                {
                    "label": {
                        "en": "Google Play",
                        "zh-CN": "Google Play",
                        "ja": "Google Play",
                        "ko": "Google Play"
                    },
                    "url": "https://play.google.com/store/apps/details?id=com.meowsay.tkingdomglobalgp"
                }
            ]
        },
        {
            "id": "solitaire-things-game",
            "name": {
                "en": "Solitaire Things Game",
                "zh-CN": "万物接龙",
                "ja": "ソリティア・シングス",
                "ko": "솔리테어 씽즈"
            },
            "tags": {
                "en": [
                    "Puzzle",
                    "Casual",
                    "Card",
                    "Solitaire"
                ],
                "zh-CN": [
                    "益智",
                    "休闲",
                    "卡牌",
                    "纸牌接龙"
                ],
                "ja": [
                    "パズル",
                    "カジュアル",
                    "カード",
                    "ソリティア"
                ],
                "ko": [
                    "퍼즐",
                    "캐주얼",
                    "카드",
                    "솔리테어"
                ]
            },
            "description": {
                "en": "A relaxing theme-based puzzle.",
                "zh-CN": "在轻松的主题关卡中体验纸牌接龙的解谜乐趣。",
                "ja": "テーマごとのステージで、ゆったり楽しめるソリティアパズル。",
                "ko": "테마별 스테이지에서 편안하게 즐기는 솔리테어 퍼즐 게임입니다."
            },
            "banner": {
                "en": "/images/solitaire-things-game/en/banner.jpg",
                "zh-CN": "/images/solitaire-things-game/zh-CN/banner.jpg",
                "ja": "/images/solitaire-things-game/ja/banner.jpg",
                "ko": "/images/solitaire-things-game/ko/banner.jpg",
                "default": "/images/solitaire-things-game/en/banner.jpg"
            },
            "downloads": [
                {
                    "label": {
                        "en": "App Store",
                        "zh-CN": "App Store",
                        "ja": "App Store",
                        "ko": "App Store"
                    },
                    "url": "https://apps.apple.com/app/id6756788266"
                },
                {
                    "label": {
                        "en": "Google Play",
                        "zh-CN": "Google Play",
                        "ja": "Google Play",
                        "ko": "Google Play"
                    },
                    "url": "https://play.google.com/store/apps/details?id=com.meowsay.solitairethingsglobal"
                },
                {
                    "label": {
                        "en": "itch.io",
                        "zh-CN": "itch.io",
                        "ja": "itch.io",
                        "ko": "itch.io"
                    },
                    "url": "https://meowsaygames.itch.io/solitaire-things-game"
                }
            ]
        },
        {
            "id": "alpacadoku",
            "name": {
                "en": "AlpacaDoku: Logic Puzzle",
                "zh-CN": "放置羊驼",
                "ja": "アルパカドク",
                "ko": "알파카도쿠"
            },
            "tags": {
                "en": [
                    "Puzzle",
                    "Casual",
                    "Logic",
                    "Sudoku"
                ],
                "zh-CN": [
                    "益智",
                    "休闲",
                    "逻辑",
                    "数独"
                ],
                "ja": [
                    "パズル",
                    "カジュアル",
                    "ロジック",
                    "数独"
                ],
                "ko": [
                    "퍼즐",
                    "캐주얼",
                    "로직",
                    "스도쿠"
                ]
            },
            "description": {
                "en": "A relaxing logic puzzle game.",
                "zh-CN": "和可爱的羊驼一起挑战轻松上手却耐玩的逻辑谜题。",
                "ja": "かわいいアルパカと一緒に、気軽に遊べるロジックパズルに挑戦。",
                "ko": "귀여운 알파카와 함께 부담 없이 즐기는 로직 퍼즐 게임입니다."
            },
            "banner": {
                "en": "/images/alpacadoku/en/banner.jpg",
                "zh-CN": "/images/alpacadoku/zh-CN/banner.jpg",
                "ja": "/images/alpacadoku/ja/banner.jpg",
                "ko": "/images/alpacadoku/ko/banner.jpg",
                "default": "/images/alpacadoku/en/banner.jpg"
            },
            "downloads": [
                {
                    "label": {
                        "en": "App Store",
                        "zh-CN": "App Store",
                        "ja": "App Store",
                        "ko": "App Store"
                    },
                    "url": "https://apps.apple.com/us/app/alpacadoku-logic-puzzle/id6757661814"
                },
                {
                    "label": {
                        "en": "Google Play",
                        "zh-CN": "Google Play",
                        "ja": "Google Play",
                        "ko": "Google Play"
                    },
                    "url": "https://play.google.com/store/apps/details?id=com.meowsay.alpacadokuglobal"
                }
            ]
        },
        {
            "id": "cute-blast-match-2-puzzle",
            "name": {
                "en": "Cute Blast - Match 2 Puzzle",
                "zh-CN": "萌物爆爆",
                "ja": "キュートブラスト",
                "ko": "큐트 블라스트"
            },
            "tags": {
                "en": [
                    "Puzzle",
                    "Casual",
                    "Cute",
                    "Match-2"
                ],
                "zh-CN": [
                    "益智",
                    "休闲",
                    "可爱",
                    "二消"
                ],
                "ja": [
                    "パズル",
                    "カジュアル",
                    "かわいい",
                    "マッチ2"
                ],
                "ko": [
                    "퍼즐",
                    "캐주얼",
                    "귀여움",
                    "매치2"
                ]
            },
            "description": {
                "en": "Tap and match adorable icons.",
                "zh-CN": "轻点配对可爱图标，享受节奏明快的休闲二消体验。",
                "ja": "かわいいアイコンをタップして揃える、テンポの良いカジュアルパズル。",
                "ko": "사랑스러운 아이콘을 톡톡 맞추며 즐기는 경쾌한 캐주얼 매치 퍼즐입니다."
            },
            "banner": {
                "en": "/images/cute-blast-match-2-puzzle/en/banner.jpg",
                "zh-CN": "/images/cute-blast-match-2-puzzle/zh-CN/banner.jpg",
                "ja": "/images/cute-blast-match-2-puzzle/ja/banner.jpg",
                "ko": "/images/cute-blast-match-2-puzzle/ko/banner.jpg",
                "default": "/images/cute-blast-match-2-puzzle/en/banner.jpg"
            },
            "downloads": [
                {
                    "label": {
                        "en": "App Store",
                        "zh-CN": "App Store",
                        "ja": "App Store",
                        "ko": "App Store"
                    },
                    "url": "https://apps.apple.com/us/app/cute-blast-match-2-puzzle/id6755725803"
                }
            ]
        }
    ],
    "metadata": {
        "lastUpdated": "2024-09-29",
        "version": "4.0.0",
        "totalGames": 4,
        "studioNote": "Meowsay Games is dedicated to creating engaging and memorable gaming experiences for players worldwide."
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Hero.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GameCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/GameCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LanguageProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$games$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/games.json.[json].cjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$content$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/content.json.[json].cjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function Home() {
    _s();
    const { language, isReady } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const defaultLanguage = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$content$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].languageConfig.default;
    const gamesTitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pickLocalized"])(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$content$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].sections.publishedGames, language) ?? "";
    const contactTitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pickLocalized"])(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$content$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].sections.contact, language) ?? "";
    const contactHint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pickLocalized"])(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$content$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].sections.contactHint, language) ?? "";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative mx-auto w-full max-w-6xl px-4 pb-16 pt-8 sm:px-6 sm:pt-10 lg:px-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "space-y-14",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "fade-in space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-semibold tracking-wide text-neutral-100 sm:text-2xl",
                            children: isReady ? gamesTitle : ""
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 gap-6 md:grid-cols-2",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$games$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].games.map((game, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GameCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    game: game,
                                    eagerImage: index === 0
                                }, game.id, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 29,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "fade-in rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-semibold tracking-wide text-neutral-100 sm:text-2xl",
                            children: isReady ? contactTitle : ""
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-3 text-sm text-neutral-300 sm:text-base",
                            children: isReady ? contactHint : ""
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$content$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].contact.email}`,
                            className: "mt-5 inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-medium text-neutral-900 transition hover:bg-neutral-200",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$content$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].contact.email
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                    className: "py-2 text-center text-xs uppercase tracking-[0.24em] text-neutral-500",
                    children: isReady ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pickLocalized"])(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$content$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].studio.name, language) : __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$content$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].studio.name[defaultLanguage]
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_s(Home, "dnFPwYRGNik13IeDCDVNyhKFXJU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0gf5qep._.js.map