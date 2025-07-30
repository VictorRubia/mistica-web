"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    OverscrollColorProvider: function() {
        return A;
    },
    useOverScrollColor: function() {
        return V;
    },
    useSetOverscrollColor: function() {
        return T;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _hooks = require("./hooks.js");
const _nestablecontext = require("./nestable-context.js");
const _platform = require("./utils/platform.js");
const _dom = require("./utils/dom.js");
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
const { Provider: h, useSetValue: g, useValue: c } = (0, _nestablecontext.createNestableContext)({}), V = c, v = (o)=>(0, _platform.getPlatform)(o) === "ios", b = ()=>{
    const { topColor: o } = c(), { isDarkMode: r } = (0, _hooks.useTheme)();
    return _react.useEffect(()=>{
        if (!o) return;
        const t = document.head.querySelectorAll("meta[name=theme-color]");
        t.forEach((n)=>{
            n.remove();
        });
        const e = document.createElement("meta");
        return e.name = "theme-color", e.media = r ? "(prefers-color-scheme: dark)" : "(prefers-color-scheme: light)", e.content = (0, _dom.isCssVar)(o) ? (0, _dom.getCssVarValue)(o) : o, document.head.appendChild(e), ()=>{
            e.remove(), t.forEach((n)=>{
                document.head.appendChild(n);
            });
        };
    }, [
        r,
        o
    ]), null;
}, k = ()=>{
    const [o, r] = _react.useState("transparent");
    return _react.useEffect(()=>{
        const t = window.matchMedia("(prefers-color-scheme: dark)");
        let e;
        const n = ()=>{
            e = requestAnimationFrame(()=>{
                const m = getComputedStyle(document.body).backgroundColor;
                r(m);
            });
        };
        return t.addListener(n), n(), ()=>{
            t.removeListener(n), cancelAnimationFrame(e);
        };
    }, []), o;
}, y = ()=>{
    const { topColor: o, bottomColor: r } = c(), t = k();
    if (!r && !o) return null;
    const e = r !== null && r !== void 0 ? r : t;
    return e === o || e === "transparent" ? null : /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
        style: {
            position: "fixed",
            zIndex: -1,
            background: e,
            width: "100%",
            height: 300,
            left: 0,
            right: 0,
            bottom: 0
        }
    });
}, A = (param)=>{
    let { children: o } = param;
    const { platformOverrides: r } = (0, _hooks.useTheme)();
    return v(r) ? /* @__PURE__ */ (0, _jsxruntime.jsxs)(h, {
        children: [
            /* @__PURE__ */ (0, _jsxruntime.jsx)(b, {}),
            o,
            /* @__PURE__ */ (0, _jsxruntime.jsx)(y, {})
        ]
    }) : /* @__PURE__ */ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: o
    });
}, T = (o)=>{
    g(o);
};
