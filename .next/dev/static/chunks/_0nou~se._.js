(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/data/content.json.[json].cjs [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "languageConfig": {
        "languages": [
            "en",
            "zh-CN",
            "ja",
            "ko"
        ],
        "default": "en"
    },
    "studio": {
        "name": {
            "en": "Meowsay Co., Ltd",
            "zh-CN": "Meowsay Co., Ltd",
            "ja": "Meowsay Co., Ltd",
            "ko": "Meowsay Co., Ltd"
        },
        "headline": {
            "en": "Crafting elegant incremental worlds.",
            "zh-CN": "打造优雅而耐玩的增量世界。",
            "ja": "洗練されたインクリメンタルの世界をつくる。",
            "ko": "세련된 인크리멘털 세계를 만듭니다."
        },
        "philosophy": {
            "en": "Pushing the boundaries of idle incremental games — crafting truly deep and fun experiences.",
            "zh-CN": "探索放置增量游戏的边界，创造真正好玩的深度体验。",
            "ja": "放置系インクリメンタルゲームの限界を切り拓き、本当に奥深くて楽しい体験を創り出す。",
            "ko": "방치형 인크리멘탈 게임의 한계를 확장하고, 깊이 있으면서도 진짜 재미있는 경험을 만듭니다."
        }
    },
    "nativeLanguageNames": {
        "en": "EN",
        "zh-CN": "中文",
        "ja": "日本語",
        "ko": "한국어"
    },
    "sections": {
        "publishedGames": {
            "en": "Our Games",
            "zh-CN": "我们的游戏",
            "ja": "作品一覧",
            "ko": "게임 목록"
        },
        "viewDetails": {
            "en": "View Details",
            "zh-CN": "查看详情",
            "ja": "詳細を見る",
            "ko": "상세 보기"
        },
        "contact": {
            "en": "Contact",
            "zh-CN": "联系",
            "ja": "お問い合わせ",
            "ko": "문의"
        },
        "contactHint": {
            "en": "For publishing, business, or collaboration inquiries.",
            "zh-CN": "欢迎发行、商务与合作咨询。",
            "ja": "パブリッシング、ビジネス、コラボのご相談はこちら。",
            "ko": "퍼블리싱, 비즈니스, 협업 문의를 환영합니다."
        },
        "backToHome": {
            "en": "Back to Home",
            "zh-CN": "返回首页",
            "ja": "ホームへ戻る",
            "ko": "홈으로"
        },
        "gameNotFound": {
            "en": "Game not found.",
            "zh-CN": "未找到该游戏。",
            "ja": "ゲームが見つかりません。",
            "ko": "게임을 찾을 수 없습니다."
        }
    },
    "contact": {
        "email": "meowsaygames@outlook.com"
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/i18n.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_LANGUAGE",
    ()=>DEFAULT_LANGUAGE,
    "SUPPORTED_LANGUAGES",
    ()=>SUPPORTED_LANGUAGES,
    "isSupportedLanguage",
    ()=>isSupportedLanguage,
    "pickBanner",
    ()=>pickBanner,
    "pickLocalized",
    ()=>pickLocalized,
    "resolveBrowserLanguage",
    ()=>resolveBrowserLanguage,
    "resolveLanguage",
    ()=>resolveLanguage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$content$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/content.json.[json].cjs [app-client] (ecmascript)");
;
const languageConfig = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$content$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].languageConfig;
const SUPPORTED_LANGUAGES = languageConfig.languages;
const DEFAULT_LANGUAGE = languageConfig.default;
const baseLanguageMap = {
    en: "en",
    zh: "zh-CN",
    ja: "ja",
    ko: "ko"
};
function isSupportedLanguage(language) {
    return SUPPORTED_LANGUAGES.includes(language);
}
function resolveBrowserLanguage(browserLanguage) {
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
function resolveLanguage(options) {
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
function pickLocalized(content, userLanguage) {
    if (!content) {
        return undefined;
    }
    return content[userLanguage] ?? content[DEFAULT_LANGUAGE];
}
function pickBanner(banner, userLanguage) {
    if (!banner) {
        return "";
    }
    return banner[userLanguage] ?? banner.default ?? banner[DEFAULT_LANGUAGE] ?? "";
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/LanguageProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageProvider",
    ()=>LanguageProvider,
    "useLanguage",
    ()=>useLanguage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function LanguageProvider({ children }) {
    _s();
    const [manualLanguage, setManualLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [savedLanguage, setSavedLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_LANGUAGE"]);
    const [isReady, setIsReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LanguageProvider.useEffect": ()=>{
            const cached = window.localStorage.getItem("lang");
            const resolved = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveLanguage"])({
                savedLanguage: cached,
                browserLanguage: window.navigator.language
            });
            queueMicrotask({
                "LanguageProvider.useEffect": ()=>{
                    setSavedLanguage(resolved);
                    setIsReady(true);
                }
            }["LanguageProvider.useEffect"]);
        }
    }["LanguageProvider.useEffect"], []);
    const language = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveLanguage"])({
        manualLanguage,
        savedLanguage
    });
    const setLanguage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LanguageProvider.useCallback[setLanguage]": (nextLanguage)=>{
            const resolved = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveLanguage"])({
                manualLanguage: nextLanguage,
                savedLanguage
            });
            setManualLanguage(resolved);
            setSavedLanguage(resolved);
            window.localStorage.setItem("lang", resolved);
        }
    }["LanguageProvider.useCallback[setLanguage]"], [
        savedLanguage
    ]);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LanguageProvider.useMemo[value]": ()=>({
                language,
                isReady,
                supportedLanguages: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SUPPORTED_LANGUAGES"],
                defaultLanguage: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_LANGUAGE"],
                setLanguage
            })
    }["LanguageProvider.useMemo[value]"], [
        isReady,
        language,
        setLanguage
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/LanguageProvider.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
_s(LanguageProvider, "nXa/aT+23IfVtFeDaoUQID6yYCo=");
_c = LanguageProvider;
function useLanguage() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within LanguageProvider");
    }
    return context;
}
_s1(useLanguage, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "LanguageProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/LanguageSwitcher.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LanguageSwitcher
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$content$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/content.json.[json].cjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LanguageProvider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const nativeNames = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$content$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nativeLanguageNames;
function LanguageSwitcher() {
    _s();
    const { language, supportedLanguages, setLanguage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "inline-flex items-center gap-1 rounded-full border border-white/15 bg-black/25 p-1 backdrop-blur",
        suppressHydrationWarning: true,
        children: supportedLanguages.map((lang)=>{
            const active = lang === language;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>setLanguage(lang),
                suppressHydrationWarning: true,
                className: `rounded-full px-3 py-1.5 text-xs font-medium tracking-wide transition ${active ? "bg-white text-neutral-900" : "text-neutral-300 hover:bg-white/10 hover:text-white"}`,
                children: nativeNames[lang]
            }, lang, false, {
                fileName: "[project]/src/components/LanguageSwitcher.tsx",
                lineNumber: 19,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/components/LanguageSwitcher.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_s(LanguageSwitcher, "9dZrDhLZzbHKtR9gBGxHqxXonDo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = LanguageSwitcher;
var _c;
__turbopack_context__.k.register(_c, "LanguageSwitcher");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0nou~se._.js.map