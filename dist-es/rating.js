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
import { jsx as r, jsxs as k } from "react/jsx-runtime";
import * as T from "react";
import U from "./inline.js";
import { vars as c } from "./skins/skin-contract.css-mistica.js";
import { useThemeVariant as P } from "./theme-variant-context.js";
import { vars as W, touchable as J, disabled as K, firstIcon as X, lastIcon as Y, IconWrapper as z, halfIconContainer as x, halfIconInactive as oo, halfIconActive as to } from "./rating.css-mistica.js";
import ro from "classnames";
import { applyCssVars as ao } from "./utils/css.js";
import { isTouchableDevice as eo } from "./utils/environment.js";
import co, { RadioGroup as io } from "./radio-button.js";
import { isEqual as no } from "./utils/helpers.js";
import q from "./generated/mistica-icons/icon-star-filled.js";
import D from "./generated/mistica-icons/icon-star-regular.js";
import lo from "./generated/mistica-icons/icon-face-sad-filled.js";
import so from "./generated/mistica-icons/icon-face-sad-regular.js";
import mo from "./generated/mistica-icons/icon-face-slightly-sad-filled.js";
import Io from "./generated/mistica-icons/icon-face-slightly-sad-regular.js";
import vo from "./generated/mistica-icons/icon-face-neutral-filled.js";
import uo from "./generated/mistica-icons/icon-face-neutral-regular.js";
import po from "./generated/mistica-icons/icon-face-happy-filled.js";
import fo from "./generated/mistica-icons/icon-face-happy-regular.js";
import go from "./generated/mistica-icons/icon-face-super-happy-filled.js";
import bo from "./generated/mistica-icons/icon-face-super-happy-regular.js";
import { useTheme as ho } from "./hooks.js";
import { ratingVeryBadLabel as Ao, ratingBadLabel as Fo, ratingRegularLabel as Ro, ratingGoodLabel as No, ratingVeryGoodLabel as So, ratingQuantitativeLabel as Lo } from "./text-tokens.js";
const To = 32, _o = 16, yo = 5, Eo = {
    ActiveIcon: q,
    InactiveIcon: D,
    color: c.colors.controlActivated
}, Co = {
    ActiveIcon: q,
    InactiveIcon: D,
    color: c.colors.warning
}, V = [
    {
        ActiveIcon: lo,
        InactiveIcon: so,
        color: c.colors.errorHigh
    },
    {
        ActiveIcon: mo,
        InactiveIcon: Io,
        color: c.colors.error
    },
    {
        ActiveIcon: vo,
        InactiveIcon: uo,
        color: c.colors.warning
    },
    {
        ActiveIcon: po,
        InactiveIcon: fo,
        color: c.colors.success
    },
    {
        ActiveIcon: go,
        InactiveIcon: bo,
        color: c.colors.successHigh
    }
], Go = (param)=>{
    let { value: i, defaultValue: e, iconsCount: I, onChangeValue: a } = param;
    const n = i !== void 0, p = T.useCallback((l)=>l === void 0 ? 0 : Math.max(0, Math.min(I, l)), [
        I
    ]), [A, F] = T.useState(p(e)), R = (l)=>{
        n || F(l), a == null || a(l);
    };
    return [
        n ? p(i) : A,
        R
    ];
}, H = (param)=>{
    let { icons: i = V, count: e = yo, icon: I = Eo, size: a = To, type: n = "quantitative", dataAttributes: p, onChangeValue: A, defaultValue: F, value: R, disabled: l, role: N, valueLabels: O, withHalfValue: Q, "aria-label": f, "aria-labelledby": S } = param;
    const { texts: v, t: u } = ho(), $ = [
        v.ratingVeryBadLabel || u(Ao),
        v.ratingBadLabel || u(Fo),
        v.ratingRegularLabel || u(Ro),
        v.ratingGoodLabel || u(No),
        v.ratingVeryGoodLabel || u(So)
    ], B = Array.from({
        length: e
    }, (o, t)=>(v.ratingQuantitativeLabel || u(Lo)).replace("1$s", String(t + 1)).replace("2$s", String(e))), m = n === "qualitative" ? i : Array.from({
        length: e
    }, ()=>I), g = O !== null && O !== void 0 ? O : n === "qualitative" && no(m, V) ? $ : B, b = N === "radiogroup", _ = b ? 16 : a <= 16 ? 2 : a <= 24 ? 4 : 8, y = P(), [L, E] = T.useState(void 0), C = eo(), [s, M] = Go({
        value: R,
        defaultValue: F,
        iconsCount: m.length,
        onChangeValue: A
    }), j = (o)=>L !== void 0 && !l ? n === "qualitative" && o === L || n === "quantitative" && o <= L ? "active" : "inactive" : n === "qualitative" ? o === s ? "active" : "inactive" : b ? o <= s ? "active" : "inactive" : Q ? o - 0.75 <= s && s < o - 0.25 ? "half" : o - 0.25 <= s ? "active" : "inactive" : o - 0.5 < s ? "active" : "inactive", w = (o, t)=>{
        const d = y === "inverse" ? c.colors.inverse : m[t].color, h = y === "inverse" ? c.colors.inverse : b ? c.colors.control : m[0].color;
        switch(j(t + 1)){
            case "active":
                return /* @__PURE__ */ r(o.ActiveIcon, {
                    size: a,
                    color: d
                }, t);
            case "inactive":
                return /* @__PURE__ */ r(o.InactiveIcon, {
                    size: a,
                    color: h
                }, t);
            case "half":
            default:
                return /* @__PURE__ */ k("div", {
                    className: x,
                    children: [
                        /* @__PURE__ */ r("div", {
                            className: oo,
                            children: /* @__PURE__ */ r(o.InactiveIcon, {
                                size: a,
                                color: h
                            })
                        }),
                        /* @__PURE__ */ r("div", {
                            className: to,
                            children: /* @__PURE__ */ r(o.ActiveIcon, {
                                size: a,
                                color: d
                            })
                        })
                    ]
                }, t);
        }
    }, G = (o, t)=>{
        const d = w(o, t);
        return b ? /* @__PURE__ */ r(co, {
            "aria-label": g[t],
            value: g[t],
            render: (param)=>{
                let { labelId: h, disabled: Z } = param;
                return /* @__PURE__ */ r("div", {
                    id: h,
                    onMouseEnter: ()=>{
                        C || E(t + 1);
                    },
                    onMouseLeave: ()=>{
                        C || E(void 0);
                    },
                    style: ao({
                        [W.iconSize]: `${a}px`
                    }),
                    className: ro(J, {
                        [K]: Z,
                        [X]: t === 0,
                        [Y]: t === m.length - 1
                    }),
                    children: /* @__PURE__ */ r("div", {
                        className: z,
                        children: d
                    })
                });
            }
        }, t) : d;
    };
    return N === "img" ? /* @__PURE__ */ r(U, {
        space: _,
        dataAttributes: p,
        role: N,
        "aria-label": f !== null && f !== void 0 ? f : S ? void 0 : `${s} de ${e}`,
        "aria-labelledby": f ? void 0 : S,
        children: m.map(G)
    }) : /* @__PURE__ */ r(io, {
        name: "info-rating",
        "aria-label": f,
        "aria-labelledby": f ? void 0 : S,
        disabled: l,
        onChange: (o)=>{
            M(g.findIndex((t)=>t === o) + 1);
        },
        value: g[s - 1],
        dataAttributes: p,
        children: /* @__PURE__ */ r(U, {
            space: _,
            children: m.map(G)
        })
    });
}, rt = (_param)=>{
    var { dataAttributes: i } = _param, e = _object_without_properties(_param, [
        "dataAttributes"
    ]);
    return /* @__PURE__ */ r(H, _object_spread({
        role: "radiogroup",
        dataAttributes: _object_spread({
            "component-name": "Rating"
        }, i)
    }, e));
}, at = (_param)=>{
    var { dataAttributes: i, icon: e, size: I } = _param, a = _object_without_properties(_param, [
        "dataAttributes",
        "icon",
        "size"
    ]);
    return /* @__PURE__ */ r(H, _object_spread({
        size: I !== null && I !== void 0 ? I : _o,
        icon: e !== null && e !== void 0 ? e : Co,
        role: "img",
        dataAttributes: _object_spread({
            "component-name": "InfoRating"
        }, i)
    }, a));
};
export { at as InfoRating, rt as Rating };
