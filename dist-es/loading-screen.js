"use client";
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = _object_without_properties_loose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
import { jsxs as S, jsx as n } from "react/jsx-runtime";
import * as o from "react";
import { useSetOverscrollColor as x } from "./overscroll-color-context.js";
import { ThemeVariant as B } from "./theme-variant-context.js";
import { vars as h } from "./skins/skin-contract.css-mistica.js";
import E from "./responsive-layout.js";
import { Text4 as I, Text2 as O } from "./text.js";
import w from "./stack.js";
import { inOutAnimationMs as k, loadingScreen as V, screenBackground as j, screenBackgroundFadeOut as z, screenBackgroundAnimated as D, loadingScreenChildren as P, loadingScreenText as _, loadingScreenTextAnimatedOut as F, loadingScreenTextAnimated as N, logo as K, pulseLogo as L } from "./loading-screen.css-mistica.js";
import M from "./spinner.js";
import T from "classnames";
import { Logo as W } from "./logo.js";
import $ from "./screen-reader-only.js";
import { useTheme as v } from "./hooks.js";
import { VIVO_NEW_SKIN as q } from "./skins/constants.js";
import { getPrefixedDataAttributes as G } from "./utils/dom.js";
import { loading as H } from "./text-tokens.js";
const J = (param)=>{
    let { isInverse: e } = param;
    const r = `body {background:${e ? h.colors.backgroundBrand : h.colors.background}}`;
    return /* @__PURE__ */ n("style", {
        children: r
    });
}, Q = (param)=>{
    let { animateText: e, isLoading: r, onClose: t, texts: i } = param;
    const [c, s] = o.useState(0), [a, u] = o.useState(!1), l = o.useCallback(()=>{
        s((c + 1) % i.length), u(!1);
    }, [
        c,
        i.length
    ]);
    o.useEffect(()=>{
        if (!r || i.length === 1) return;
        var _i_c_duration;
        const p = setTimeout(()=>{
            e ? u(!0) : l();
        }, (_i_c_duration = i[c].duration) !== null && _i_c_duration !== void 0 ? _i_c_duration : 5e3);
        return ()=>{
            clearTimeout(p);
        };
    }, [
        e,
        c,
        a,
        r,
        l,
        i
    ]);
    const m = ()=>{
        if (!r) {
            t == null || t();
            return;
        }
        a && l();
    }, { title: f, description: d } = i[c % i.length];
    return /* @__PURE__ */ n(E, {
        children: /* @__PURE__ */ n("div", {
            className: T(_, {
                [F]: e && (!r || a)
            }),
            onTransitionEnd: m,
            children: /* @__PURE__ */ S(w, {
                space: 8,
                children: [
                    f && /* @__PURE__ */ n("div", {
                        className: e ? N : void 0,
                        children: /* @__PURE__ */ n(I, {
                            textAlign: "center",
                            regular: !0,
                            as: "h1",
                            children: f
                        })
                    }),
                    d && /* @__PURE__ */ n("div", {
                        className: e ? N : void 0,
                        style: {
                            animationDelay: "200ms"
                        },
                        children: /* @__PURE__ */ n(O, {
                            textAlign: "center",
                            regular: !0,
                            as: "p",
                            color: h.colors.textSecondary,
                            children: d
                        })
                    })
                ]
            })
        }, c)
    });
}, R = /*#__PURE__*/ o.forwardRef((param, f)=>{
    let { isInverse: e, children: r, isLoading: t = !0, animateText: i, animateBackground: c, onClose: s, dataAttributes: a, title: u, description: l, texts: m = [
        {
            title: u,
            description: l
        }
    ] } = param;
    const [d, p] = o.useState(!1);
    o.useEffect(()=>{
        if (!t) return;
        const A = setTimeout(()=>{
            p(!0);
        }, k);
        return ()=>{
            clearTimeout(A);
        };
    }, [
        t
    ]);
    const b = o.useRef(!1), g = o.useCallback(()=>{
        !t && !b.current && (b.current = !0, s == null || s());
    }, [
        t,
        s
    ]);
    o.useEffect(()=>{
        if (t) return;
        if (!i && !c) {
            s == null || s();
            return;
        }
        const A = setTimeout(()=>{
            g();
        }, k);
        return ()=>{
            clearTimeout(A);
        };
    }, [
        c,
        i,
        g,
        t,
        s
    ]);
    const y = !r;
    return x(e ? {
        topColor: h.colors.backgroundBrandTop
    } : {}), /* @__PURE__ */ S(B, {
        isInverse: e,
        children: [
            /* @__PURE__ */ S("div", _object_spread_props(_object_spread({
                ref: f
            }, G(a)), {
                className: T(V, j[e ? "inverse" : "default"], {
                    [z]: !t && c,
                    [D]: c
                }),
                style: {
                    justifyContent: y ? "center" : "space-between"
                },
                onAnimationEnd: ()=>{
                    p(!0);
                },
                onTransitionEnd: g,
                children: [
                    r ? /* @__PURE__ */ n("div", {
                        className: P,
                        children: r
                    }) : /* @__PURE__ */ n(M, {
                        delay: "0s",
                        size: 32,
                        color: e ? h.colors.inverse : void 0
                    }),
                    /* @__PURE__ */ n(Q, {
                        animateText: i,
                        isLoading: t,
                        texts: m,
                        onClose: g
                    }),
                    !y && /* @__PURE__ */ n("div", {
                        style: {
                            height: 104
                        }
                    })
                ]
            })),
            t && d && /* @__PURE__ */ n(J, {
                isInverse: !!e
            })
        ]
    });
}), he = /*#__PURE__*/ o.forwardRef((e, r)=>/* @__PURE__ */ n(R, _object_spread_props(_object_spread({
        ref: r
    }, e), {
        dataAttributes: _object_spread({
            "component-name": "LoadingScreen"
        }, e.dataAttributes),
        animateBackground: !0
    }))), U = (param)=>{
    let { isLoading: e, onCloseStart: r, onCloseEnd: t } = param;
    const { texts: i, t: c } = v(), [s, a] = o.useState(!0), u = ()=>{
        e || (r == null || r(), a(!1), t == null || t());
    };
    return /* @__PURE__ */ S("div", {
        className: T(K, {
            [L]: s
        }),
        onAnimationIteration: u,
        children: [
            /* @__PURE__ */ n($, {
                children: /* @__PURE__ */ n("div", {
                    children: i.loading || c(H)
                })
            }),
            /* @__PURE__ */ n(W, {
                size: 128
            })
        ]
    });
}, X = /*#__PURE__*/ o.lazy(()=>import("./vivinho-loading-animation/index.js")), Y = (param)=>{
    let { isLoading: e, onCloseStart: r, onCloseEnd: t } = param;
    const { skinName: i } = v();
    return i === q ? /* @__PURE__ */ n(o.Suspense, {
        fallback: null,
        children: /* @__PURE__ */ n(X, {
            isLoading: e,
            onCloseStart: r,
            onCloseEnd: t
        })
    }) : /* @__PURE__ */ n(U, {
        isLoading: e,
        onCloseStart: r,
        onCloseEnd: t
    });
}, pe = /*#__PURE__*/ o.forwardRef((_param, c)=>{
    var { isLoading: e = !0, onClose: r, dataAttributes: t } = _param, i = _object_without_properties(_param, [
        "isLoading",
        "onClose",
        "dataAttributes"
    ]);
    const { themeVariants: s } = v(), [a, u] = o.useState(!1), l = o.useRef(!1), m = o.useRef(!1), f = ()=>{
        u(!0);
    }, d = ()=>{
        l.current && m.current && (r == null || r());
    };
    return /* @__PURE__ */ n(R, _object_spread_props(_object_spread({
        ref: c,
        isInverse: s.brandLoadingScreen === "inverse"
    }, i), {
        isLoading: e || !a,
        onClose: ()=>{
            m.current = !0, d();
        },
        animateText: !0,
        dataAttributes: _object_spread({
            "component-name": "BrandLoadingScreen"
        }, t),
        children: /* @__PURE__ */ n(Y, {
            isLoading: e,
            onCloseStart: f,
            onCloseEnd: ()=>{
                l.current = !0, d();
            }
        })
    }));
});
export { pe as BrandLoadingScreen, he as LoadingScreen };
