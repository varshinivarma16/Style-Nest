(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/components/header/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const Header = ()=>{
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const getNewArrivalsLink = ()=>{
        if (pathname?.startsWith('/womens')) {
            return '/collections/womens-new-arrivals';
        }
        return '/collections/mens-new-arrivals';
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "border-b border-gray-200",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center px-6 py-2 text-sm font-medium uppercase",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex space-x-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "hover:underline",
                                children: "Men"
                            }, void 0, false, {
                                fileName: "[project]/app/components/header/page.tsx",
                                lineNumber: 21,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/womens",
                                className: "hover:underline",
                                children: "Women"
                            }, void 0, false, {
                                fileName: "[project]/app/components/header/page.tsx",
                                lineNumber: 22,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/header/page.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-lg font-semibold",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            children: "Minimalistic Clothing"
                        }, void 0, false, {
                            fileName: "[project]/app/components/header/page.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/header/page.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex space-x-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/search",
                                className: "hover:underline",
                                children: "Search"
                            }, void 0, false, {
                                fileName: "[project]/app/components/header/page.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/account",
                                className: "hover:underline",
                                children: "Account"
                            }, void 0, false, {
                                fileName: "[project]/app/components/header/page.tsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/bag",
                                className: "hover:underline",
                                children: "Bag"
                            }, void 0, false, {
                                fileName: "[project]/app/components/header/page.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/header/page.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/header/page.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center space-x-6 px-6 py-2 text-sm font-medium uppercase border-t border-gray-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: getNewArrivalsLink(),
                        className: "hover:underline",
                        children: "New Arrivals"
                    }, void 0, false, {
                        fileName: "[project]/app/components/header/page.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/best-sellers",
                        className: "hover:underline",
                        children: "Best Sellers"
                    }, void 0, false, {
                        fileName: "[project]/app/components/header/page.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/clothing",
                        className: "hover:underline",
                        children: "Clothing"
                    }, void 0, false, {
                        fileName: "[project]/app/components/header/page.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/pants",
                        className: "hover:underline",
                        children: "Pants"
                    }, void 0, false, {
                        fileName: "[project]/app/components/header/page.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/shirts",
                        className: "hover:underline",
                        children: "Shirts"
                    }, void 0, false, {
                        fileName: "[project]/app/components/header/page.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/denim",
                        className: "hover:underline",
                        children: "Denim"
                    }, void 0, false, {
                        fileName: "[project]/app/components/header/page.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/tees",
                        className: "hover:underline",
                        children: "Tees"
                    }, void 0, false, {
                        fileName: "[project]/app/components/header/page.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/bags-accessories",
                        className: "hover:underline",
                        children: "Bags & Accessories"
                    }, void 0, false, {
                        fileName: "[project]/app/components/header/page.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/sale",
                        className: "text-red-600 hover:underline",
                        children: "Sale"
                    }, void 0, false, {
                        fileName: "[project]/app/components/header/page.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/header/page.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/header/page.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
};
_s(Header, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Header;
const __TURBOPACK__default__export__ = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/footer/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
const Footer = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "bg-white border-t border-gray-200 py-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 md:grid-cols-5 gap-8 mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-sm font-semibold uppercase text-gray-800 mb-4",
                                    children: "Account"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/footer/page.tsx",
                                    lineNumber: 11,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "text-sm text-gray-600 hover:underline",
                                                children: "Log In"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/footer/page.tsx",
                                                lineNumber: 13,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/footer/page.tsx",
                                            lineNumber: 13,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "text-sm text-gray-600 hover:underline",
                                                children: "Sign Up"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/footer/page.tsx",
                                                lineNumber: 14,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/footer/page.tsx",
                                            lineNumber: 14,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "text-sm text-gray-600 hover:underline",
                                                children: "Redeem a Gift Card"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/footer/page.tsx",
                                                lineNumber: 15,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/footer/page.tsx",
                                            lineNumber: 15,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/footer/page.tsx",
                                    lineNumber: 12,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/footer/page.tsx",
                            lineNumber: 10,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-sm font-semibold uppercase text-gray-800 mb-4",
                                    children: "Company"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/footer/page.tsx",
                                    lineNumber: 21,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "text-sm text-gray-600 hover:underline",
                                                children: "About"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/footer/page.tsx",
                                                lineNumber: 23,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/footer/page.tsx",
                                            lineNumber: 23,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "text-sm text-gray-600 hover:underline",
                                                children: "Environmental Initiatives"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/footer/page.tsx",
                                                lineNumber: 24,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/footer/page.tsx",
                                            lineNumber: 24,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "text-sm text-gray-600 hover:underline",
                                                children: "Factories"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/footer/page.tsx",
                                                lineNumber: 25,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/footer/page.tsx",
                                            lineNumber: 25,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "text-sm text-gray-600 hover:underline",
                                                children: "DEI"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/footer/page.tsx",
                                                lineNumber: 26,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/footer/page.tsx",
                                            lineNumber: 26,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "text-sm text-gray-600 hover:underline",
                                                children: "Careers"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/footer/page.tsx",
                                                lineNumber: 27,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/footer/page.tsx",
                                            lineNumber: 27,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "text-sm text-gray-600 hover:underline",
                                                children: "International"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/footer/page.tsx",
                                                lineNumber: 28,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/footer/page.tsx",
                                            lineNumber: 28,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "text-sm text-gray-600 hover:underline",
                                                children: "Accessibility"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/footer/page.tsx",
                                                lineNumber: 29,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/footer/page.tsx",
                                            lineNumber: 29,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/footer/page.tsx",
                                    lineNumber: 22,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/footer/page.tsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-sm font-semibold uppercase text-gray-800 mb-4",
                                    children: "Get Help"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/footer/page.tsx",
                                    lineNumber: 35,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "text-sm text-gray-600 hover:underline",
                                                children: "Help Center"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/footer/page.tsx",
                                                lineNumber: 37,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/footer/page.tsx",
                                            lineNumber: 37,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "text-sm text-gray-600 hover:underline",
                                                children: "Live Chat"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/footer/page.tsx",
                                                lineNumber: 38,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/footer/page.tsx",
                                            lineNumber: 38,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "text-sm text-gray-600 hover:underline",
                                                children: "Return Policy"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/footer/page.tsx",
                                                lineNumber: 39,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/footer/page.tsx",
                                            lineNumber: 39,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "text-sm text-gray-600 hover:underline",
                                                children: "Shipping Info"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/footer/page.tsx",
                                                lineNumber: 40,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/footer/page.tsx",
                                            lineNumber: 40,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "text-sm text-gray-600 hover:underline",
                                                children: "Bulk Orders"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/footer/page.tsx",
                                                lineNumber: 41,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/footer/page.tsx",
                                            lineNumber: 41,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "text-sm text-gray-600 hover:underline",
                                                children: "Our Stores"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/footer/page.tsx",
                                                lineNumber: 42,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/footer/page.tsx",
                                            lineNumber: 42,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/footer/page.tsx",
                                    lineNumber: 36,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/footer/page.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-sm font-semibold uppercase text-gray-800 mb-4",
                                    children: "Connect"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/footer/page.tsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "text-sm text-gray-600 hover:underline",
                                                children: "Instagram"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/footer/page.tsx",
                                                lineNumber: 50,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/footer/page.tsx",
                                            lineNumber: 50,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "text-sm text-gray-600 hover:underline",
                                                children: "TikTok"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/footer/page.tsx",
                                                lineNumber: 51,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/footer/page.tsx",
                                            lineNumber: 51,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "text-sm text-gray-600 hover:underline",
                                                children: "YouTube"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/footer/page.tsx",
                                                lineNumber: 52,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/footer/page.tsx",
                                            lineNumber: 52,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "text-sm text-gray-600 hover:underline",
                                                children: "Pinterest"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/footer/page.tsx",
                                                lineNumber: 53,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/footer/page.tsx",
                                            lineNumber: 53,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "text-sm text-gray-600 hover:underline",
                                                children: "Affiliates"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/footer/page.tsx",
                                                lineNumber: 54,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/footer/page.tsx",
                                            lineNumber: 54,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/footer/page.tsx",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/footer/page.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-sm font-semibold uppercase text-gray-800 mb-4",
                                    children: "Sign up to receive 20% off your first order."
                                }, void 0, false, {
                                    fileName: "[project]/app/components/footer/page.tsx",
                                    lineNumber: 60,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "email",
                                            placeholder: "Email Address",
                                            className: "w-full p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/footer/page.tsx",
                                            lineNumber: 62,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "p-2 bg-black text-white",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-6 h-6",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: "2",
                                                    d: "M9 5l7 7-7 7"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/footer/page.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/footer/page.tsx",
                                                lineNumber: 68,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/footer/page.tsx",
                                            lineNumber: 67,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/footer/page.tsx",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-gray-600",
                                    children: [
                                        "By providing your email, you agree to receive marketing emails and accept our ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            className: "underline",
                                            children: "Privacy Policy"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/footer/page.tsx",
                                            lineNumber: 74,
                                            columnNumber: 93
                                        }, this),
                                        " and ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            className: "underline",
                                            children: "Terms"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/footer/page.tsx",
                                            lineNumber: 74,
                                            columnNumber: 150
                                        }, this),
                                        "."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/footer/page.tsx",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/footer/page.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/footer/page.tsx",
                    lineNumber: 8,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap justify-between items-center text-xs text-gray-600 border-t border-gray-200 pt-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap space-x-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: "hover:underline",
                                    children: "Privacy Policy"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/footer/page.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: "hover:underline",
                                    children: "Terms of Service"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/footer/page.tsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: "hover:underline",
                                    children: "Do Not Sell or Share My Personal Information"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/footer/page.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: "hover:underline",
                                    children: "CA Supply Chain Transparency"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/footer/page.tsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: "hover:underline",
                                    children: "Vendor Code of Conduct"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/footer/page.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: "hover:underline",
                                    children: "Sitemap Pages"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/footer/page.tsx",
                                    lineNumber: 87,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: "hover:underline",
                                    children: "Sitemap Products"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/footer/page.tsx",
                                    lineNumber: 88,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/footer/page.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "© 2025 All Rights Reserved"
                        }, void 0, false, {
                            fileName: "[project]/app/components/footer/page.tsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/footer/page.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/footer/page.tsx",
            lineNumber: 6,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/footer/page.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
};
_c = Footer;
const __TURBOPACK__default__export__ = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/collections/mens-new-arrivals/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$header$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/header/page.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$footer$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/footer/page.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const MensNewArrivalsPage = ()=>{
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MensNewArrivalsPage.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "MensNewArrivalsPage.useEffect.ctx": ()=>{
                    const container = containerRef.current;
                    const section = sectionRef.current;
                    // Calculate scroll length based on the container's scroll width minus viewport width
                    const scrollLength = container.scrollWidth - window.innerWidth;
                    // Set the container's width and let the section height adjust naturally
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(container, {
                        width: container.scrollWidth
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(section, {
                        height: 'auto'
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(container, {
                        x: {
                            "MensNewArrivalsPage.useEffect.ctx": ()=>-scrollLength
                        }["MensNewArrivalsPage.useEffect.ctx"],
                        ease: 'none',
                        scrollTrigger: {
                            trigger: section,
                            start: 'top top',
                            end: {
                                "MensNewArrivalsPage.useEffect.ctx": ()=>`+=${scrollLength}`
                            }["MensNewArrivalsPage.useEffect.ctx"],
                            scrub: true,
                            pin: container,
                            anticipatePin: 1,
                            invalidateOnRefresh: true
                        }
                    });
                }
            }["MensNewArrivalsPage.useEffect.ctx"], sectionRef);
            return ({
                "MensNewArrivalsPage.useEffect": ()=>ctx.revert()
            })["MensNewArrivalsPage.useEffect"];
        }
    }["MensNewArrivalsPage.useEffect"], []);
    const featuredSections = [
        {
            image: 'https://www.madewell.com/brand_creative/mw-jpg/2025/m-2025-jun-live06-10-hp-img1.jpg?wid=1500',
            text: 'New Arrival 1',
            link: 'https://www.everlane.com/collections/mens-vacation-shop'
        },
        {
            image: 'https://www.madewell.com/brand_creative/mw-jpg/2025/m-2025-jun-live06-10-hp-img2.jpg?wid=1500',
            text: 'New Arrival 2',
            link: 'https://www.everlane.com/collections/mens-vacation-shop'
        }
    ];
    const categoryCards = [
        {
            title: 'Shirting',
            image: 'https://media.everlane.com/images/c_fill,w_828,ar_4:5,q_auto:best:sensitive,dpr_2.0,f_auto/i/0aa29bb5_594e/mens-resort-shirt-butterlite-dark-mahogany',
            bgColor: '#f0f0f0',
            link: '/shirting'
        },
        {
            title: 'Knit Tops',
            image: 'https://media.everlane.com/images/c_fill,w_828,ar_4:5,q_auto:best:sensitive,dpr_2.0,f_auto/i/94a9fe20_87ec/mens-prem-wt-rlxd-crew-glacier-gray',
            bgColor: '#f0f0f0',
            link: '/knit-tops'
        },
        {
            title: 'Sweaters',
            image: 'https://media.everlane.com/images/c_fill,w_828,ar_4:5,q_auto:best:sensitive,dpr_2.0,f_auto/i/505ff14f_2716/mens-cotton-linen-pullover-eucalyptus',
            bgColor: '#f0f0f0',
            link: '/sweaters'
        },
        {
            title: 'Bottoms',
            image: 'https://media.everlane.com/images/c_fill,w_828,ar_4:5,q_auto:best:sensitive,dpr_2.0,f_auto/i/a6a8be1a_6af2/mens-linen-easy-short2-navy',
            bgColor: '#f0f0f0',
            link: '/bottoms'
        },
        {
            title: 'Bags',
            image: 'https://media.everlane.com/images/c_fill,w_828,ar_4:5,q_auto:best:sensitive,dpr_2.0,f_auto/i/815cbd53_f5dc/mens-renew-backpack-dark-forest',
            bgColor: '#f0f0f0',
            link: '/bags'
        },
        {
            title: 'Denim',
            image: 'https://media.everlane.com/images/c_fill,w_828,ar_4:5,q_auto:best:sensitive,dpr_2.0,f_auto/i/c02bbdba_ce84/mens-90s-loose-straight-jean-mdm-blue',
            bgColor: '#f0f0f0',
            link: '/denim'
        },
        {
            title: 'Jackets',
            image: 'https://www.madewell.com/images/NV071_GR7316_ld?wid=1200&hei=1525&fmt=jpeg&fit=crop&qlt=75',
            bgColor: '#f0f0f0',
            link: '/jackets'
        },
        {
            title: 'Shoes',
            image: 'https://www.madewell.com/images/NR616_EE7426_ld?wid=1200&hei=1525&fmt=jpeg&fit=crop&qlt=75',
            bgColor: '#f0f0f0',
            link: '/shoes'
        }
    ];
    const sizes = [
        'XS',
        'S',
        'M',
        'L',
        'XL',
        'XXL',
        'XXXL'
    ];
    const colors = [
        {
            name: 'White',
            count: 5
        },
        {
            name: 'Black',
            count: 8
        },
        {
            name: 'Denim',
            count: 3
        },
        {
            name: 'Blue',
            count: 11
        },
        {
            name: 'Grey',
            count: 1
        },
        {
            name: 'Pink',
            count: 2
        },
        {
            name: 'Purple',
            count: 2
        },
        {
            name: 'Brown',
            count: 9
        },
        {
            name: 'Green',
            count: 10
        },
        {
            name: 'Multi',
            count: 2
        },
        {
            name: 'Natural',
            count: 11
        },
        {
            name: 'Gold',
            count: 1
        }
    ];
    const newArrivals = [
        {
            image: 'https://media.everlane.com/images/c_fill,w_828,ar_4:5,q_auto:best:sensitive,dpr_2.0,f_auto/i/0aa29bb5_594e/mens-resort-shirt-butterlite-dark-mahogany',
            text: 'The Resort Shirt in Butterlite',
            price: '₹8800',
            colors: [
                '#4A2C2A',
                '#8B4513',
                '#2F4F4F'
            ],
            tags: [
                'Responsible Forestry'
            ]
        },
        {
            image: 'https://media.everlane.com/images/c_fill,w_828,ar_4:5,q_auto:best:sensitive,dpr_2.0,f_auto/i/94a9fe20_87ec/mens-prem-wt-rlxd-crew-glacier-gray',
            text: 'The Rec Performance Tank',
            price: '₹3410',
            colors: [
                '#F5F5F5',
                '#A9A9A9',
                '#D3D3D3',
                '#FFFFFF'
            ],
            tags: [
                'Organic Cotton',
                'Cleaner Chemistry',
                'Ever-Better Factory'
            ]
        },
        {
            image: 'https://media.everlane.com/images/c_fill,w_828,ar_4:5,q_auto:best:sensitive,dpr_2.0,f_auto/i/c02bbdba_ce84/mens-90s-loose-straight-jean-mdm-blue',
            text: 'The Pique Polo',
            price: '₹8800',
            colors: [
                '#000000',
                '#333333',
                '#666666',
                '#999999',
                '#CCCCCC',
                '#FFFFFF',
                '#8A2BE2',
                '#DAA520'
            ],
            tags: [
                'Cleaner Cotton',
                'Ever-Better Factory'
            ]
        },
        {
            image: 'https://media.everlane.com/images/c_fill,w_828,ar_4:5,q_auto:best:sensitive,dpr_2.0,f_auto/i/505ff14f_2716/mens-cotton-linen-pullover-eucalyptus',
            text: 'The Linen Jacket',
            price: '₹9500',
            colors: [
                '#228B22',
                '#6B8E23',
                '#9ACD32'
            ],
            tags: [
                'Organic Linen',
                'Sustainable Practices'
            ]
        },
        {
            image: 'https://media.everlane.com/images/c_fill,w_828,ar_4:5,q_auto:best:sensitive,dpr_2.0,f_auto/i/a6a8be1a_6af2/mens-linen-easy-short2-navy',
            text: 'The Slim Fit Jeans',
            price: '₹6200',
            colors: [
                '#000080',
                '#1E90FF',
                '#4682B4'
            ],
            tags: [
                'Eco-Friendly',
                'Responsible Sourcing'
            ]
        },
        {
            image: 'https://media.everlane.com/images/c_fill,w_828,ar_4:5,q_auto:best:sensitive,dpr_2.0,f_auto/i/0aa29bb5_594e/mens-resort-shirt-butterlite-dark-mahogany',
            text: 'The Resort Shirt in Butterlite',
            price: '₹8800',
            colors: [
                '#4A2C2A',
                '#8B4513',
                '#2F4F4F'
            ],
            tags: [
                'Responsible Forestry'
            ]
        },
        {
            image: 'https://media.everlane.com/images/c_fill,w_828,ar_4:5,q_auto:best:sensitive,dpr_2.0,f_auto/i/94a9fe20_87ec/mens-prem-wt-rlxd-crew-glacier-gray',
            text: 'The Rec Performance Tank',
            price: '₹3410',
            colors: [
                '#F5F5F5',
                '#A9A9A9',
                '#D3D3D3',
                '#FFFFFF'
            ],
            tags: [
                'Organic Cotton',
                'Cleaner Chemistry',
                'Ever-Better Factory'
            ]
        },
        {
            image: 'https://media.everlane.com/images/c_fill,w_828,ar_4:5,q_auto:best:sensitive,dpr_2.0,f_auto/i/c02bbdba_ce84/mens-90s-loose-straight-jean-mdm-blue',
            text: 'The Pique Polo',
            price: '₹8800',
            colors: [
                '#000000',
                '#333333',
                '#666666',
                '#999999',
                '#CCCCCC',
                '#FFFFFF',
                '#8A2BE2',
                '#DAA520'
            ],
            tags: [
                'Cleaner Cotton',
                'Ever-Better Factory'
            ]
        },
        {
            image: 'https://media.everlane.com/images/c_fill,w_828,ar_4:5,q_auto:best:sensitive,dpr_2.0,f_auto/i/505ff14f_2716/mens-cotton-linen-pullover-eucalyptus',
            text: 'The Linen Jacket',
            price: '₹9500',
            colors: [
                '#228B22',
                '#6B8E23',
                '#9ACD32'
            ],
            tags: [
                'Organic Linen',
                'Sustainable Practices'
            ]
        },
        {
            image: 'https://media.everlane.com/images/c_fill,w_828,ar_4:5,q_auto:best:sensitive,dpr_2.0,f_auto/i/a6a8be1a_6af2/mens-linen-easy-short2-navy',
            text: 'The Slim Fit Jeans',
            price: '₹6200',
            colors: [
                '#000080',
                '#1E90FF',
                '#4682B4'
            ],
            tags: [
                'Eco-Friendly',
                'Responsible Sourcing'
            ]
        },
        {
            image: 'https://media.everlane.com/images/c_fill,w_828,ar_4:5,q_auto:best:sensitive,dpr_2.0,f_auto/i/0aa29bb5_594e/mens-resort-shirt-butterlite-dark-mahogany',
            text: 'The Resort Shirt in Butterlite',
            price: '₹8800',
            colors: [
                '#4A2C2A',
                '#8B4513',
                '#2F4F4F'
            ],
            tags: [
                'Responsible Forestry'
            ]
        },
        {
            image: 'https://media.everlane.com/images/c_fill,w_828,ar_4:5,q_auto:best:sensitive,dpr_2.0,f_auto/i/94a9fe20_87ec/mens-prem-wt-rlxd-crew-glacier-gray',
            text: 'The Rec Performance Tank',
            price: '₹3410',
            colors: [
                '#F5F5F5',
                '#A9A9A9',
                '#D3D3D3',
                '#FFFFFF'
            ],
            tags: [
                'Organic Cotton',
                'Cleaner Chemistry',
                'Ever-Better Factory'
            ]
        },
        {
            image: 'https://media.everlane.com/images/c_fill,w_828,ar_4:5,q_auto:best:sensitive,dpr_2.0,f_auto/i/c02bbdba_ce84/mens-90s-loose-straight-jean-mdm-blue',
            text: 'The Pique Polo',
            price: '₹8800',
            colors: [
                '#000000',
                '#333333',
                '#666666',
                '#999999',
                '#CCCCCC',
                '#FFFFFF',
                '#8A2BE2',
                '#DAA520'
            ],
            tags: [
                'Cleaner Cotton',
                'Ever-Better Factory'
            ]
        },
        {
            image: 'https://media.everlane.com/images/c_fill,w_828,ar_4:5,q_auto:best:sensitive,dpr_2.0,f_auto/i/505ff14f_2716/mens-cotton-linen-pullover-eucalyptus',
            text: 'The Linen Jacket',
            price: '₹9500',
            colors: [
                '#228B22',
                '#6B8E23',
                '#9ACD32'
            ],
            tags: [
                'Organic Linen',
                'Sustainable Practices'
            ]
        },
        {
            image: 'https://media.everlane.com/images/c_fill,w_828,ar_4:5,q_auto:best:sensitive,dpr_2.0,f_auto/i/a6a8be1a_6af2/mens-linen-easy-short2-navy',
            text: 'The Slim Fit Jeans',
            price: '₹6200',
            colors: [
                '#000080',
                '#1E90FF',
                '#4682B4'
            ],
            tags: [
                'Eco-Friendly',
                'Responsible Sourcing'
            ]
        },
        {
            image: 'https://media.everlane.com/images/c_fill,w_828,ar_4:5,q_auto:best:sensitive,dpr_2.0,f_auto/i/0aa29bb5_594e/mens-resort-shirt-butterlite-dark-mahogany',
            text: 'The Resort Shirt in Butterlite',
            price: '₹8800',
            colors: [
                '#4A2C2A',
                '#8B4513',
                '#2F4F4F'
            ],
            tags: [
                'Responsible Forestry'
            ]
        },
        {
            image: 'https://media.everlane.com/images/c_fill,w_828,ar_4:5,q_auto:best:sensitive,dpr_2.0,f_auto/i/94a9fe20_87ec/mens-prem-wt-rlxd-crew-glacier-gray',
            text: 'The Rec Performance Tank',
            price: '₹3410',
            colors: [
                '#F5F5F5',
                '#A9A9A9',
                '#D3D3D3',
                '#FFFFFF'
            ],
            tags: [
                'Organic Cotton',
                'Cleaner Chemistry',
                'Ever-Better Factory'
            ]
        },
        {
            image: 'https://media.everlane.com/images/c_fill,w_828,ar_4:5,q_auto:best:sensitive,dpr_2.0,f_auto/i/c02bbdba_ce84/mens-90s-loose-straight-jean-mdm-blue',
            text: 'The Pique Polo',
            price: '₹8800',
            colors: [
                '#000000',
                '#333333',
                '#666666',
                '#999999',
                '#CCCCCC',
                '#FFFFFF',
                '#8A2BE2',
                '#DAA520'
            ],
            tags: [
                'Cleaner Cotton',
                'Ever-Better Factory'
            ]
        },
        {
            image: 'https://media.everlane.com/images/c_fill,w_828,ar_4:5,q_auto:best:sensitive,dpr_2.0,f_auto/i/505ff14f_2716/mens-cotton-linen-pullover-eucalyptus',
            text: 'The Linen Jacket',
            price: '₹9500',
            colors: [
                '#228B22',
                '#6B8E23',
                '#9ACD32'
            ],
            tags: [
                'Organic Linen',
                'Sustainable Practices'
            ]
        },
        {
            image: 'https://media.everlane.com/images/c_fill,w_828,ar_4:5,q_auto:best:sensitive,dpr_2.0,f_auto/i/a6a8be1a_6af2/mens-linen-easy-short2-navy',
            text: 'The Slim Fit Jeans',
            price: '₹6200',
            colors: [
                '#000080',
                '#1E90FF',
                '#4682B4'
            ],
            tags: [
                'Eco-Friendly',
                'Responsible Sourcing'
            ]
        },
        {
            image: 'https://media.everlane.com/images/c_fill,w_828,ar_4:5,q_auto:best:sensitive,dpr_2.0,f_auto/i/0aa29bb5_594e/mens-resort-shirt-butterlite-dark-mahogany',
            text: 'The Resort Shirt in Butterlite',
            price: '₹8800',
            colors: [
                '#4A2C2A',
                '#8B4513',
                '#2F4F4F'
            ],
            tags: [
                'Responsible Forestry'
            ]
        },
        {
            image: 'https://media.everlane.com/images/c_fill,w_828,ar_4:5,q_auto:best:sensitive,dpr_2.0,f_auto/i/94a9fe20_87ec/mens-prem-wt-rlxd-crew-glacier-gray',
            text: 'The Rec Performance Tank',
            price: '₹3410',
            colors: [
                '#F5F5F5',
                '#A9A9A9',
                '#D3D3D3',
                '#FFFFFF'
            ],
            tags: [
                'Organic Cotton',
                'Cleaner Chemistry',
                'Ever-Better Factory'
            ]
        },
        {
            image: 'https://media.everlane.com/images/c_fill,w_828,ar_4:5,q_auto:best:sensitive,dpr_2.0,f_auto/i/c02bbdba_ce84/mens-90s-loose-straight-jean-mdm-blue',
            text: 'The Pique Polo',
            price: '₹8800',
            colors: [
                '#000000',
                '#333333',
                '#666666',
                '#999999',
                '#CCCCCC',
                '#FFFFFF',
                '#8A2BE2',
                '#DAA520'
            ],
            tags: [
                'Cleaner Cotton',
                'Ever-Better Factory'
            ]
        },
        {
            image: 'https://media.everlane.com/images/c_fill,w_828,ar_4:5,q_auto:best:sensitive,dpr_2.0,f_auto/i/505ff14f_2716/mens-cotton-linen-pullover-eucalyptus',
            text: 'The Linen Jacket',
            price: '₹9500',
            colors: [
                '#228B22',
                '#6B8E23',
                '#9ACD32'
            ],
            tags: [
                'Organic Linen',
                'Sustainable Practices'
            ]
        },
        {
            image: 'https://media.everlane.com/images/c_fill,w_828,ar_4:5,q_auto:best:sensitive,dpr_2.0,f_auto/i/a6a8be1a_6af2/mens-linen-easy-short2-navy',
            text: 'The Slim Fit Jeans',
            price: '₹6200',
            colors: [
                '#000080',
                '#1E90FF',
                '#4682B4'
            ],
            tags: [
                'Eco-Friendly',
                'Responsible Sourcing'
            ]
        },
        {
            image: 'https://media.everlane.com/images/c_fill,w_828,ar_4:5,q_auto:best:sensitive,dpr_2.0,f_auto/i/0aa29bb5_594e/mens-resort-shirt-butterlite-dark-mahogany',
            text: 'The Resort Shirt in Butterlite',
            price: '₹8800',
            colors: [
                '#4A2C2A',
                '#8B4513',
                '#2F4F4F'
            ],
            tags: [
                'Responsible Forestry'
            ]
        },
        {
            image: 'https://media.everlane.com/images/c_fill,w_828,ar_4:5,q_auto:best:sensitive,dpr_2.0,f_auto/i/94a9fe20_87ec/mens-prem-wt-rlxd-crew-glacier-gray',
            text: 'The Rec Performance Tank',
            price: '₹3410',
            colors: [
                '#F5F5F5',
                '#A9A9A9',
                '#D3D3D3',
                '#FFFFFF'
            ],
            tags: [
                'Organic Cotton',
                'Cleaner Chemistry',
                'Ever-Better Factory'
            ]
        },
        {
            image: 'https://media.everlane.com/images/c_fill,w_828,ar_4:5,q_auto:best:sensitive,dpr_2.0,f_auto/i/c02bbdba_ce84/mens-90s-loose-straight-jean-mdm-blue',
            text: 'The Pique Polo',
            price: '₹8800',
            colors: [
                '#000000',
                '#333333',
                '#666666',
                '#999999',
                '#CCCCCC',
                '#FFFFFF',
                '#8A2BE2',
                '#DAA520'
            ],
            tags: [
                'Cleaner Cotton',
                'Ever-Better Factory'
            ]
        },
        {
            image: 'https://media.everlane.com/images/c_fill,w_828,ar_4:5,q_auto:best:sensitive,dpr_2.0,f_auto/i/505ff14f_2716/mens-cotton-linen-pullover-eucalyptus',
            text: 'The Linen Jacket',
            price: '₹9500',
            colors: [
                '#228B22',
                '#6B8E23',
                '#9ACD32'
            ],
            tags: [
                'Organic Linen',
                'Sustainable Practices'
            ]
        },
        {
            image: 'https://media.everlane.com/images/c_fill,w_828,ar_4:5,q_auto:best:sensitive,dpr_2.0,f_auto/i/a6a8be1a_6af2/mens-linen-easy-short2-navy',
            text: 'The Slim Fit Jeans',
            price: '₹6200',
            colors: [
                '#000080',
                '#1E90FF',
                '#4682B4'
            ],
            tags: [
                'Eco-Friendly',
                'Responsible Sourcing'
            ]
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-stone-50 text-stone-900 font-serif",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$header$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/collections/mens-new-arrivals/page.tsx",
                lineNumber: 340,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "relative w-full h-[95vh] overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex w-full h-full",
                                children: featuredSections.map((section, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-1/2 h-full relative overflow-hidden",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: section.image,
                                            alt: section.text,
                                            className: "w-full h-full object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/app/collections/mens-new-arrivals/page.tsx",
                                            lineNumber: 347,
                                            columnNumber: 17
                                        }, this)
                                    }, index, false, {
                                        fileName: "[project]/app/collections/mens-new-arrivals/page.tsx",
                                        lineNumber: 346,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/collections/mens-new-arrivals/page.tsx",
                                lineNumber: 344,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10 w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-6xl font-bold",
                                        children: "NEW ARRIVALS"
                                    }, void 0, false, {
                                        fileName: "[project]/app/collections/mens-new-arrivals/page.tsx",
                                        lineNumber: 352,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-2xl mt-2.5",
                                        children: "Our thoughtful images to the latest collection."
                                    }, void 0, false, {
                                        fileName: "[project]/app/collections/mens-new-arrivals/page.tsx",
                                        lineNumber: 353,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: featuredSections[0].link,
                                        className: "text-xl underline mt-2.5 inline-block",
                                        children: "Shop new arrivals"
                                    }, void 0, false, {
                                        fileName: "[project]/app/collections/mens-new-arrivals/page.tsx",
                                        lineNumber: 354,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/collections/mens-new-arrivals/page.tsx",
                                lineNumber: 351,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/collections/mens-new-arrivals/page.tsx",
                        lineNumber: 343,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        ref: sectionRef,
                        className: "relative overflow-hidden bg-[#f4f7f8]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl font-bold text-center mb-12",
                                children: "Explore Categories"
                            }, void 0, false, {
                                fileName: "[project]/app/collections/mens-new-arrivals/page.tsx",
                                lineNumber: 362,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: containerRef,
                                className: "flex gap-6 px-10",
                                children: categoryCards.map((card, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: card.link,
                                        className: "w-[calc(100vw/3.05)] h-full rounded-2xl flex-shrink-0 p-6 transition-transform shadow-md",
                                        style: {
                                            backgroundColor: card.bgColor
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-2xl font-semibold mb-4",
                                                children: card.title
                                            }, void 0, false, {
                                                fileName: "[project]/app/collections/mens-new-arrivals/page.tsx",
                                                lineNumber: 371,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full h-[80%] rounded-xl overflow-hidden",
                                                style: {
                                                    backgroundColor: card.bgColor
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: card.image,
                                                    alt: card.title,
                                                    className: "w-full h-full object-contain"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/collections/mens-new-arrivals/page.tsx",
                                                    lineNumber: 376,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/collections/mens-new-arrivals/page.tsx",
                                                lineNumber: 372,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/app/collections/mens-new-arrivals/page.tsx",
                                        lineNumber: 365,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/collections/mens-new-arrivals/page.tsx",
                                lineNumber: 363,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full py-6 px-4 bg-white",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center space-x-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    className: "appearance-none bg-transparent border-none text-stone-900 text-lg font-medium pr-8 focus:outline-none",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            children: "Sort by: Relevance"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/collections/mens-new-arrivals/page.tsx",
                                                            lineNumber: 390,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            children: "Best Sellers"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/collections/mens-new-arrivals/page.tsx",
                                                            lineNumber: 391,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            children: "Price: High - Low"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/collections/mens-new-arrivals/page.tsx",
                                                            lineNumber: 392,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            children: "Price: Low - High"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/collections/mens-new-arrivals/page.tsx",
                                                            lineNumber: 393,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            children: "New"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/collections/mens-new-arrivals/page.tsx",
                                                            lineNumber: 394,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            children: "Top Rated"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/collections/mens-new-arrivals/page.tsx",
                                                            lineNumber: 395,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/collections/mens-new-arrivals/page.tsx",
                                                    lineNumber: 389,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none",
                                                    children: "↑↓"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/collections/mens-new-arrivals/page.tsx",
                                                    lineNumber: 397,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/collections/mens-new-arrivals/page.tsx",
                                            lineNumber: 388,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    className: "appearance-none bg-transparent border-none text-stone-900 text-lg font-medium pr-8 focus:outline-none",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            children: "Size"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/collections/mens-new-arrivals/page.tsx",
                                                            lineNumber: 401,
                                                            columnNumber: 19
                                                        }, this),
                                                        sizes.map((size)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                children: size
                                                            }, size, false, {
                                                                fileName: "[project]/app/collections/mens-new-arrivals/page.tsx",
                                                                lineNumber: 403,
                                                                columnNumber: 21
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/collections/mens-new-arrivals/page.tsx",
                                                    lineNumber: 400,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none",
                                                    children: "▼"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/collections/mens-new-arrivals/page.tsx",
                                                    lineNumber: 406,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/collections/mens-new-arrivals/page.tsx",
                                            lineNumber: 399,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    className: "appearance-none bg-transparent border-none text-stone-900 text-lg font-medium pr-8 focus:outline-none",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            children: "Color"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/collections/mens-new-arrivals/page.tsx",
                                                            lineNumber: 410,
                                                            columnNumber: 19
                                                        }, this),
                                                        colors.map((color)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                children: color.name
                                                            }, color.name, false, {
                                                                fileName: "[project]/app/collections/mens-new-arrivals/page.tsx",
                                                                lineNumber: 412,
                                                                columnNumber: 21
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/collections/mens-new-arrivals/page.tsx",
                                                    lineNumber: 409,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none",
                                                    children: "▼"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/collections/mens-new-arrivals/page.tsx",
                                                    lineNumber: 415,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/collections/mens-new-arrivals/page.tsx",
                                            lineNumber: 408,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    className: "appearance-none bg-transparent border-none text-stone-900 text-lg font-medium pr-8 focus:outline-none",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            children: "Category"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/collections/mens-new-arrivals/page.tsx",
                                                            lineNumber: 419,
                                                            columnNumber: 19
                                                        }, this),
                                                        categoryCards.map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                children: card.title
                                                            }, card.title, false, {
                                                                fileName: "[project]/app/collections/mens-new-arrivals/page.tsx",
                                                                lineNumber: 421,
                                                                columnNumber: 21
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/collections/mens-new-arrivals/page.tsx",
                                                    lineNumber: 418,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none",
                                                    children: "▼"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/collections/mens-new-arrivals/page.tsx",
                                                    lineNumber: 424,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/collections/mens-new-arrivals/page.tsx",
                                            lineNumber: 417,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/collections/mens-new-arrivals/page.tsx",
                                    lineNumber: 387,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/collections/mens-new-arrivals/page.tsx",
                                lineNumber: 386,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/collections/mens-new-arrivals/page.tsx",
                        lineNumber: 361,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-10 px-4 bg-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl font-bold text-center mb-8",
                                children: "New Arrivals"
                            }, void 0, false, {
                                fileName: "[project]/app/collections/mens-new-arrivals/page.tsx",
                                lineNumber: 432,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-3 gap-6",
                                children: newArrivals.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border rounded-lg p-4 shadow-md",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: item.image,
                                                        alt: item.text,
                                                        className: "w-full h-80 object-cover"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/collections/mens-new-arrivals/page.tsx",
                                                        lineNumber: 437,
                                                        columnNumber: 19
                                                    }, this),
                                                    (index === 0 || index === 1) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "absolute top-2 left-2 bg-white text-black px-2 py-1 text-sm font-semibold",
                                                        children: "NEW"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/collections/mens-new-arrivals/page.tsx",
                                                        lineNumber: 439,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/collections/mens-new-arrivals/page.tsx",
                                                lineNumber: 436,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-lg font-semibold mt-4",
                                                children: item.text
                                            }, void 0, false, {
                                                fileName: "[project]/app/collections/mens-new-arrivals/page.tsx",
                                                lineNumber: 444,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-600 mt-2",
                                                children: item.price
                                            }, void 0, false, {
                                                fileName: "[project]/app/collections/mens-new-arrivals/page.tsx",
                                                lineNumber: 445,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex space-x-2 mt-2",
                                                children: item.colors.map((color, colorIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-4 h-4 rounded-full border",
                                                        style: {
                                                            backgroundColor: color
                                                        }
                                                    }, colorIndex, false, {
                                                        fileName: "[project]/app/collections/mens-new-arrivals/page.tsx",
                                                        lineNumber: 448,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/collections/mens-new-arrivals/page.tsx",
                                                lineNumber: 446,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-500 text-sm mt-2",
                                                children: item.tags.join(', ')
                                            }, void 0, false, {
                                                fileName: "[project]/app/collections/mens-new-arrivals/page.tsx",
                                                lineNumber: 455,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/app/collections/mens-new-arrivals/page.tsx",
                                        lineNumber: 435,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/collections/mens-new-arrivals/page.tsx",
                                lineNumber: 433,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/collections/mens-new-arrivals/page.tsx",
                        lineNumber: 431,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/collections/mens-new-arrivals/page.tsx",
                lineNumber: 341,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$footer$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/collections/mens-new-arrivals/page.tsx",
                lineNumber: 461,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/collections/mens-new-arrivals/page.tsx",
        lineNumber: 339,
        columnNumber: 5
    }, this);
};
_s(MensNewArrivalsPage, "SEI3IXIHu1CSLConuHGsgsp1TNQ=");
_c = MensNewArrivalsPage;
const __TURBOPACK__default__export__ = MensNewArrivalsPage;
var _c;
__turbopack_context__.k.register(_c, "MensNewArrivalsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_6eb21435._.js.map