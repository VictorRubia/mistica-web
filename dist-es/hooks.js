import * as n from "react";
import x from "./theme-context.js";
import H from "./screen-size-context.js";
import { listenResize as I } from "./utils/dom.js";
import { isClientSide as l } from "./utils/environment.js";
import { isEqual as T } from "./utils/helpers.js";
const q = ()=>{
    const t = n.useContext(x);
    if (!t) throw Error("To use @telefonica/mistica components you must instantiate <ThemeContextProvider> as their parent.");
    return t;
};
let f = "", S = 0, g = 0;
const A = (t)=>{
    n.useEffect(()=>{
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
}, D = ()=>n.useContext(H), F = function() {
    let { includeMargins: t = !1 } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const [i, e] = n.useState(0), [c, r] = n.useState(0), [s, o] = n.useState(null), d = n.useCallback((h)=>{
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
    ]), u = n.useCallback((h)=>{
        o(h);
    }, []);
    return n.useEffect(()=>{
        if (!s) {
            e(0), r(0);
            return;
        }
        return I(s, d);
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
    const [t, i] = n.useState(l() ? window.innerHeight : 1200), [e, c] = n.useState(l() ? window.innerWidth : 800), [r, s] = n.useState(l() ? window.screen.availHeight : 1200), [o, d] = n.useState(l() ? window.screen.availWidth : 800), [u, h] = n.useState(l() ? ((w = window.visualViewport) == null ? void 0 : w.height) || window.screen.availHeight : 1200);
    return n.useEffect(()=>{
        const m = ()=>{
            var a;
            i(window.innerHeight), c(window.innerWidth), s(window.screen.availHeight), d(window.screen.availWidth), h(((a = window.visualViewport) == null ? void 0 : a.height) || window.screen.availHeight);
        };
        return window.addEventListener("resize", m), ()=>{
            window.removeEventListener("resize", m);
        };
    }, []), n.useMemo(()=>({
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
}, $ = ()=>l() && window.top !== window.self, j = l() ? n.useLayoutEffect : n.useEffect, R = (t, i, e)=>{
    const [c, r] = n.useState(i);
    return n.useEffect(()=>{
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
    const [c, r] = n.useState(), s = R(t, !1);
    return n.useEffect(()=>{
        let o;
        const d = ()=>{
            if (t.current && (s || e)) {
                const u = B(t.current);
                T(c, u) || r(u), i && (o = requestAnimationFrame(d));
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
export { O as useBoundingRect, A as useDisableBodyScroll, F as useElementDimensions, R as useIsInViewport, $ as useIsWithinIFrame, j as useIsomorphicLayoutEffect, D as useScreenSize, q as useTheme, M as useWindowHeight, y as useWindowSize, k as useWindowWidth };
