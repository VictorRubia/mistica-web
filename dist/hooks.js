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
    useBoundingRect: function() {
        return O;
    },
    useDisableBodyScroll: function() {
        return A;
    },
    useElementDimensions: function() {
        return F;
    },
    useIsInViewport: function() {
        return R;
    },
    useIsWithinIFrame: function() {
        return $;
    },
    useIsomorphicLayoutEffect: function() {
        return j;
    },
    useScreenSize: function() {
        return D;
    },
    useTheme: function() {
        return q;
    },
    useWindowHeight: function() {
        return M;
    },
    useWindowSize: function() {
        return y;
    },
    useWindowWidth: function() {
        return k;
    }
});
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _themecontext = /*#__PURE__*/ _interop_require_default(require("./theme-context.js"));
const _screensizecontext = /*#__PURE__*/ _interop_require_default(require("./screen-size-context.js"));
const _dom = require("./utils/dom.js");
const _environment = require("./utils/environment.js");
const _helpers = require("./utils/helpers.js");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
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
const q = ()=>{
    const t = _react.useContext(_themecontext.default);
    if (!t) throw Error("To use @telefonica/mistica components you must instantiate <ThemeContextProvider> as their parent.");
    return t;
};
let f = "", S = 0, g = 0;
const A = (t)=>{
    _react.useEffect(()=>{
        if (t) {
            const i = document.scrollingElement || document.documentElement, e = ()=>{
                var r;
                var _ref, _ref1;
                if (g++, !(g > 1) && (S = (_ref = i == null ? void 0 : i.scrollTop) !== null && _ref !== void 0 ? _ref : 0, f = (_ref1 = (r = document.body) == null ? void 0 : r.style.cssText) !== null && _ref1 !== void 0 ? _ref1 : "", document.body)) {
                    var _ref2;
                    const o = window.innerWidth > ((_ref2 = i == null ? void 0 : i.clientWidth) !== null && _ref2 !== void 0 ? _ref2 : window.innerWidth) ? "scroll" : "hidden";
                    document.body.style.cssText = f + (f.endsWith(";") ? "" : ";") + [
                        "overflow: hidden;",
                        `overflow-y: ${o};`,
                        "position: fixed;",
                        `top: ${-S}px;`,
                        "left: 0px;",
                        "right: 0px;",
                        "overscroll-behavior-y: contain;"
                    ].join("");
                }
            }, c = ()=>{
                g--, !(g > 0) && (document.body && (document.body.style.cssText = f), i && (i.scrollTop = S));
            };
            return e(), c;
        }
        return ()=>{};
    }, [
        t
    ]);
}, D = ()=>_react.useContext(_screensizecontext.default), F = function() {
    let { includeMargins: t = !1 } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const [i, e] = _react.useState(0), [c, r] = _react.useState(0), [s, o] = _react.useState(null), d = _react.useCallback((h)=>{
        if (!h) {
            e(0), r(0);
            return;
        }
        const { width: w, height: m } = h[0].contentRect;
        if (t) {
            const a = window.getComputedStyle(h[0].target), v = parseInt(a.marginTop, 10), b = parseInt(a.marginBottom, 10), W = parseInt(a.marginLeft, 10), E = parseInt(a.marginRight, 10);
            e(w + W + E), r(m + v + b);
        } else e(w), r(m);
    }, [
        t
    ]), u = _react.useCallback((h)=>{
        o(h);
    }, []);
    return _react.useEffect(()=>{
        if (!s) {
            e(0), r(0);
            return;
        }
        return (0, _dom.listenResize)(s, d);
    }, [
        s,
        d
    ]), {
        width: i,
        height: c,
        ref: u
    };
}, y = ()=>{
    var w;
    const [t, i] = _react.useState((0, _environment.isClientSide)() ? window.innerHeight : 1200), [e, c] = _react.useState((0, _environment.isClientSide)() ? window.innerWidth : 800), [r, s] = _react.useState((0, _environment.isClientSide)() ? window.screen.availHeight : 1200), [o, d] = _react.useState((0, _environment.isClientSide)() ? window.screen.availWidth : 800), [u, h] = _react.useState((0, _environment.isClientSide)() ? ((w = window.visualViewport) == null ? void 0 : w.height) || window.screen.availHeight : 1200);
    return _react.useEffect(()=>{
        const m = ()=>{
            var a;
            i(window.innerHeight), c(window.innerWidth), s(window.screen.availHeight), d(window.screen.availWidth), h(((a = window.visualViewport) == null ? void 0 : a.height) || window.screen.availHeight);
        };
        return window.addEventListener("resize", m), ()=>{
            window.removeEventListener("resize", m);
        };
    }, []), _react.useMemo(()=>({
            height: t,
            width: e,
            screenHeight: r,
            screenWidth: o,
            visualHeight: u
        }), [
        t,
        e,
        r,
        o,
        u
    ]);
}, M = ()=>{
    const { height: t } = y();
    return t;
}, k = ()=>{
    const { width: t } = y();
    return t;
}, $ = ()=>(0, _environment.isClientSide)() && window.top !== window.self, j = (0, _environment.isClientSide)() ? _react.useLayoutEffect : _react.useEffect, R = (t, i, e)=>{
    const [c, r] = _react.useState(i);
    return _react.useEffect(()=>{
        if (!t.current) return;
        if (typeof window.IntersectionObserver > "u") return ()=>{};
        const s = new IntersectionObserver((o)=>{
            r(o[0].isIntersecting);
        }, {
            root: e == null ? void 0 : e.root,
            rootMargin: e == null ? void 0 : e.rootMargin,
            threshold: e == null ? void 0 : e.threshold
        });
        return s.observe(t.current), ()=>{
            s.disconnect();
        };
    }, [
        t,
        e == null ? void 0 : e.root,
        e == null ? void 0 : e.rootMargin,
        e == null ? void 0 : e.threshold
    ]), c;
}, B = (t)=>{
    const { top: i, right: e, bottom: c, left: r, width: s, height: o, x: d, y: u } = t.getBoundingClientRect();
    return {
        top: i,
        right: e,
        bottom: c,
        left: r,
        width: s,
        height: o,
        x: d,
        y: u
    };
}, O = function(t) {
    let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
    const [c, r] = _react.useState(), s = R(t, !1);
    return _react.useEffect(()=>{
        let o;
        const d = ()=>{
            if (t.current && (s || e)) {
                const u = B(t.current);
                (0, _helpers.isEqual)(c, u) || r(u), i && (o = requestAnimationFrame(d));
            } else r(void 0);
        };
        return o = requestAnimationFrame(d), ()=>{
            cancelAnimationFrame(o);
        };
    }, [
        t,
        c,
        s,
        i,
        e
    ]), c;
};
