module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/data/content.json.[json].cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

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
}),
"[project]/src/lib/i18n.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$content$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/content.json.[json].cjs [app-ssr] (ecmascript)");
;
const languageConfig = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$content$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].languageConfig;
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
}),
"[project]/src/components/LanguageProvider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageProvider",
    ()=>LanguageProvider,
    "useLanguage",
    ()=>useLanguage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
function LanguageProvider({ children }) {
    const [manualLanguage, setManualLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [savedLanguage, setSavedLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_LANGUAGE"]);
    const [isReady, setIsReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const cached = window.localStorage.getItem("lang");
        const resolved = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveLanguage"])({
            savedLanguage: cached,
            browserLanguage: window.navigator.language
        });
        queueMicrotask(()=>{
            setSavedLanguage(resolved);
            setIsReady(true);
        });
    }, []);
    const language = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveLanguage"])({
        manualLanguage,
        savedLanguage
    });
    const setLanguage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((nextLanguage)=>{
        const resolved = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveLanguage"])({
            manualLanguage: nextLanguage,
            savedLanguage
        });
        setManualLanguage(resolved);
        setSavedLanguage(resolved);
        window.localStorage.setItem("lang", resolved);
    }, [
        savedLanguage
    ]);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            language,
            isReady,
            supportedLanguages: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SUPPORTED_LANGUAGES"],
            defaultLanguage: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_LANGUAGE"],
            setLanguage
        }), [
        isReady,
        language,
        setLanguage
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/LanguageProvider.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
function useLanguage() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within LanguageProvider");
    }
    return context;
}
}),
"[project]/src/components/LanguageSwitcher.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LanguageSwitcher
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$content$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/content.json.[json].cjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LanguageProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LanguageProvider.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
const nativeNames = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$content$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].nativeLanguageNames;
function LanguageSwitcher() {
    const { language, supportedLanguages, setLanguage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LanguageProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "inline-flex items-center gap-1 rounded-full border border-white/15 bg-black/25 p-1 backdrop-blur",
        suppressHydrationWarning: true,
        children: supportedLanguages.map((lang)=>{
            const active = lang === language;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/dynamic-access-async-storage.external.js", () => require("next/dist/server/app-render/dynamic-access-async-storage.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0zyvfcz._.js.map