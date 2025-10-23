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
import { jsx as n, Fragment as V, jsxs as I } from "react/jsx-runtime";
import * as P from "react";
import q from "classnames";
import { useIsInverseOrMediaVariant as G } from "./theme-variant-context.js";
import { applyCssVars as A, pxToRem as p } from "./utils/css.js";
import { getPrefixedDataAttributes as J } from "./utils/dom.js";
import { useTheme as s } from "./hooks.js";
import { vars as x } from "./skins/skin-contract.css-mistica.js";
import { text as Q, withWordBreak as U, withoutWordBreak as X, truncate as Y, truncateToOneLine as Z, vars as u } from "./text.css-mistica.js";
import { VIVO_NEW_SKIN as $ } from "./skins/constants.js";
import tt from "./screen-reader-only.js";
import { text10 as et, text9 as rt, text8 as it, text7 as nt, text6 as st, text5 as ot, text4 as at, text3 as xt, text2 as mt, text1 as ct } from "./text-props.js";
const lt = {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700
}, ut = (t)=>t === !0 ? 1 : t || "initial", h = "Ħ", ht = /* @__PURE__ */ I(V, {
    children: [
        /* @__PURE__ */ n("span", {
            "aria-hidden": !0,
            children: h
        }),
        /* @__PURE__ */ n(tt, {
            children: /* @__PURE__ */ n("span", {
                children: "Vivo"
            })
        })
    ]
}), dt = (param)=>{
    let { children: t, ariaLabel: i, as: r } = param;
    return typeof r == "string" && [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6"
    ].includes(r) && typeof t == "string" && t.includes(h) ? {
        ariaLabel: t.replace(new RegExp(h, "g"), "Vivo"),
        children: /* @__PURE__ */ n("span", {
            "aria-hidden": !0,
            children: t
        })
    } : {
        children: P.Children.map(t, (e)=>typeof e != "string" || !e.includes(h) ? e : /* @__PURE__ */ n(V, {
                children: e.split(h).map((c, m)=>/* @__PURE__ */ I(P.Fragment, {
                        children: [
                            m > 0 && ht,
                            c
                        ]
                    }, m))
            })),
        ariaLabel: i
    };
}, o = (param)=>{
    let { weight: t, color: i = x.colors.textPrimary, decoration: r, truncate: e, transform: c, wordBreak: m = !0, hyphens: d = "auto", as: T = "span", children: l, size: v, mobileSize: w = v, desktopSize: b = v, lineHeight: S, mobileLineHeight: k = S, desktopLineHeight: y = S, letterSpacing: H, textAlign: z, textShadow: C, id: R, role: W, "aria-level": L, "aria-label": f, "aria-hidden": N, "aria-live": E, dataAttributes: O } = param;
    const { skinName: F } = s(), _ = G(), j = ut(e), D = {
        [x.colors.textPrimary]: x.colors.textPrimaryInverse,
        [x.colors.textSecondary]: x.colors.textSecondaryInverse,
        [x.colors.textLink]: x.colors.textLinkInverse,
        [x.colors.textError]: x.colors.textErrorInverse
    };
    if (!l && l !== 0) return null;
    const M = q(Q, m ? U : X, {
        [Y]: e,
        [Z]: e === 1 || e === !0
    }), B = A({
        [u.mobileSize]: w ? p(w) : "inherit",
        [u.mobileLineHeight]: k ? p(k) : "inherit",
        [u.desktopSize]: b ? p(b) : "inherit",
        [u.desktopLineHeight]: y ? p(y) : "inherit"
    }), K = e ? A({
        [u.lineClamp]: String(j)
    }) : {};
    var _D_i;
    return F === $ && ({ ariaLabel: f, children: l } = dt({
        children: l,
        ariaLabel: f,
        as: T
    })), /*#__PURE__*/ P.createElement(T, _object_spread_props(_object_spread({
        className: M,
        id: R,
        role: W,
        "aria-level": L,
        "aria-label": f,
        "aria-hidden": N,
        "aria-live": E
    }, J(O, "Text")), {
        style: _object_spread_props(_object_spread({}, B, K), {
            hyphens: d,
            WebkitHyphens: d,
            letterSpacing: H,
            fontWeight: t ? lt[t] : "inherit",
            textTransform: c || "inherit",
            textDecoration: r !== null && r !== void 0 ? r : "inherit",
            overflowWrap: m ? "anywhere" : "inherit",
            color: _ ? (_D_i = D[i]) !== null && _D_i !== void 0 ? _D_i : i : i,
            textAlign: z,
            textShadow: C,
            // When rendering as <pre/>, spaces are preserved and we don't want to remove them
            whiteSpace: T === "pre" ? void 0 : "pre-line"
        })
    }), l);
}, g = (t)=>{
    if (t.light) return "light";
    if (t.regular) return "regular";
    if (t.medium) return "medium";
    if (t.weight) return t.weight;
}, a = (param)=>{
    let { forceMobileSizes: t, textPreset: i, textProps: r } = param;
    const e = i.size.mobile || r.mobileSize, c = i.lineHeight.mobile || r.mobileLineHeight, m = i.size.desktop || r.desktopSize, d = i.lineHeight.desktop || r.desktopLineHeight;
    return t ? {
        size: e,
        lineHeight: c
    } : {
        mobileSize: e,
        mobileLineHeight: c,
        desktopSize: m,
        desktopLineHeight: d
    };
}, At = (_param)=>{
    var { dataAttributes: t, forceMobileSizes: i } = _param, r = _object_without_properties(_param, [
        "dataAttributes",
        "forceMobileSizes"
    ]);
    const { textPresets: e } = s();
    return /* @__PURE__ */ n(o, _object_spread(_object_spread_props(_object_spread({}, a({
        forceMobileSizes: i,
        textPreset: e.text10,
        textProps: et
    })), {
        weight: e.text10.weight,
        dataAttributes: _object_spread({
            "component-name": "Text10",
            testid: "Text10"
        }, t)
    }), r));
}, Vt = (_param)=>{
    var { dataAttributes: t, forceMobileSizes: i } = _param, r = _object_without_properties(_param, [
        "dataAttributes",
        "forceMobileSizes"
    ]);
    const { textPresets: e } = s();
    return /* @__PURE__ */ n(o, _object_spread(_object_spread_props(_object_spread({}, a({
        forceMobileSizes: i,
        textPreset: e.text9,
        textProps: rt
    })), {
        weight: e.text9.weight,
        dataAttributes: _object_spread({
            "component-name": "Text9",
            testid: "Text9"
        }, t)
    }), r));
}, It = (_param)=>{
    var { dataAttributes: t, forceMobileSizes: i } = _param, r = _object_without_properties(_param, [
        "dataAttributes",
        "forceMobileSizes"
    ]);
    const { textPresets: e } = s();
    return /* @__PURE__ */ n(o, _object_spread(_object_spread_props(_object_spread({}, a({
        forceMobileSizes: i,
        textPreset: e.text8,
        textProps: it
    })), {
        weight: e.text8.weight,
        dataAttributes: _object_spread({
            "component-name": "Text8",
            testid: "Text8"
        }, t)
    }), r));
}, Ht = (_param)=>{
    var { dataAttributes: t, forceMobileSizes: i } = _param, r = _object_without_properties(_param, [
        "dataAttributes",
        "forceMobileSizes"
    ]);
    const { textPresets: e } = s();
    return /* @__PURE__ */ n(o, _object_spread(_object_spread_props(_object_spread({}, a({
        forceMobileSizes: i,
        textPreset: e.text7,
        textProps: nt
    })), {
        weight: e.text7.weight,
        dataAttributes: _object_spread({
            "component-name": "Text7",
            testid: "Text7"
        }, t)
    }), r));
}, zt = (_param)=>{
    var { dataAttributes: t, forceMobileSizes: i } = _param, r = _object_without_properties(_param, [
        "dataAttributes",
        "forceMobileSizes"
    ]);
    const { textPresets: e } = s();
    return /* @__PURE__ */ n(o, _object_spread(_object_spread_props(_object_spread({}, a({
        forceMobileSizes: i,
        textPreset: e.text6,
        textProps: st
    })), {
        weight: e.text6.weight,
        dataAttributes: _object_spread({
            "component-name": "Text6",
            testid: "Text6"
        }, t)
    }), r));
}, Ct = (_param)=>{
    var { dataAttributes: t, forceMobileSizes: i } = _param, r = _object_without_properties(_param, [
        "dataAttributes",
        "forceMobileSizes"
    ]);
    const { textPresets: e } = s();
    return /* @__PURE__ */ n(o, _object_spread(_object_spread_props(_object_spread({}, a({
        forceMobileSizes: i,
        textPreset: e.text5,
        textProps: ot
    })), {
        weight: e.text5.weight,
        dataAttributes: _object_spread({
            "component-name": "Text5",
            testid: "Text5"
        }, t)
    }), r));
}, Rt = (_param)=>{
    var { dataAttributes: t, forceMobileSizes: i } = _param, r = _object_without_properties(_param, [
        "dataAttributes",
        "forceMobileSizes"
    ]);
    const { textPresets: e } = s();
    return /* @__PURE__ */ n(o, _object_spread(_object_spread_props(_object_spread({}, a({
        forceMobileSizes: i,
        textPreset: e.text4,
        textProps: at
    })), {
        weight: g(r),
        dataAttributes: _object_spread({
            "component-name": "Text4",
            testid: "Text4"
        }, t)
    }), r));
}, Wt = (_param)=>{
    var { dataAttributes: t, forceMobileSizes: i } = _param, r = _object_without_properties(_param, [
        "dataAttributes",
        "forceMobileSizes"
    ]);
    const { textPresets: e } = s();
    return /* @__PURE__ */ n(o, _object_spread(_object_spread_props(_object_spread({}, a({
        forceMobileSizes: i,
        textPreset: e.text3,
        textProps: xt
    })), {
        weight: g(r),
        dataAttributes: _object_spread({
            "component-name": "Text3",
            testid: "Text3"
        }, t)
    }), r));
}, Lt = (_param)=>{
    var { dataAttributes: t, forceMobileSizes: i } = _param, r = _object_without_properties(_param, [
        "dataAttributes",
        "forceMobileSizes"
    ]);
    const { textPresets: e } = s();
    return /* @__PURE__ */ n(o, _object_spread(_object_spread_props(_object_spread({}, a({
        forceMobileSizes: i,
        textPreset: e.text2,
        textProps: mt
    })), {
        weight: g(r),
        dataAttributes: _object_spread({
            "component-name": "Text2",
            testid: "Text2"
        }, t)
    }), r));
}, Nt = (_param)=>{
    var { dataAttributes: t, forceMobileSizes: i } = _param, r = _object_without_properties(_param, [
        "dataAttributes",
        "forceMobileSizes"
    ]);
    const { textPresets: e } = s();
    return /* @__PURE__ */ n(o, _object_spread(_object_spread_props(_object_spread({}, a({
        forceMobileSizes: i,
        textPreset: e.text1,
        textProps: ct
    })), {
        weight: g(r),
        dataAttributes: _object_spread({
            "component-name": "Text1",
            testid: "Text1"
        }, t)
    }), r));
}, Et = o;
export { o as Text, Nt as Text1, At as Text10, Lt as Text2, Wt as Text3, Rt as Text4, Ct as Text5, zt as Text6, Ht as Text7, It as Text8, Vt as Text9, Et as default, lt as mapToWeight };
