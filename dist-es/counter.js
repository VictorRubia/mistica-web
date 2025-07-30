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
import { jsx as r, jsxs as v } from "react/jsx-runtime";
import * as V from "react";
import { getPrefixedDataAttributes as E } from "./utils/dom.js";
import { counter as O, disabled as x, buttonContainer as T, hasTrashIcon as Q, isButtonDisabled as y, button as D, buttonBackground as S, decreaseButtonIcon as Z, trashButtonIcon as _, valueContainer as q, defaultButtonIcon as w } from "./counter.css-mistica.js";
import { useThemeVariant as F, ThemeVariant as G } from "./theme-variant-context.js";
import { vars as n } from "./skins/skin-contract.css-mistica.js";
import H from "./inline.js";
import { Text3 as J } from "./text.js";
import { BaseTouchable as P } from "./touchable.js";
import K from "./generated/mistica-icons/icon-subtract-regular.js";
import U from "./generated/mistica-icons/icon-add-more-regular.js";
import W from "./generated/mistica-icons/icon-trash-can-regular.js";
import { useTheme as X } from "./hooks.js";
import L from "classnames";
import Y from "./screen-reader-only.js";
import { counterRemoveLabel as rr, counterIncreaseLabel as er, counterDecreaseLabel as tr, counterQuantity as or, counterMinValue as ar, counterMaxValue as nr } from "./text-tokens.js";
const M = 20, cr = (param)=>{
    let { value: p, defaultValue: b, min: h, max: c, onChangeValue: a } = param;
    const s = p !== void 0, f = V.useCallback((i)=>i === void 0 ? h : Math.max(h, Math.min(c, i)), [
        h,
        c
    ]), [t, I] = V.useState(f(b)), N = (i)=>{
        s || I(i), a == null || a(i);
    };
    return [
        s ? f(p) : t,
        N
    ];
}, sr = (param)=>{
    let { value: p, defaultValue: b, onChangeValue: h, onRemove: c, min: a, max: s, dataAttributes: f, disabled: t, removeLabel: I, increaseLabel: N, decreaseLabel: i, valueLabel: k } = param;
    const C = F(), g = V.useId(), { texts: u, t: d, isDarkMode: A } = X(), l = a === void 0 ? 0 : a, m = Math.max(l, s === void 0 ? 999 : s), [e, B] = cr({
        value: p,
        defaultValue: b,
        min: l,
        max: m,
        onChangeValue: h
    }), o = !!c && e === l, R = ()=>I !== null && I !== void 0 ? I : u.counterRemoveLabel || d(rr), $ = ()=>N !== null && N !== void 0 ? N : u.counterIncreaseLabel || d(er), z = ()=>i !== null && i !== void 0 ? i : u.counterDecreaseLabel || d(tr), j = ()=>`${e}, ${k !== null && k !== void 0 ? k : u.counterQuantity || d(or)}${a !== void 0 ? `, ${u.counterMinValue || d(ar)} ${a}` : ""}${s !== void 0 ? `, ${u.counterMaxValue || d(nr)} ${s}` : ""}`;
    return /* @__PURE__ */ r("div", _object_spread_props(_object_spread({
        className: L(O, {
            [x]: t
        })
    }, E(f, "Counter")), {
        style: {
            border: `1px solid ${(C === "inverse" || C === "media") && !A ? n.colors.backgroundContainer : n.colors.inputBorder}`
        },
        children: /* @__PURE__ */ v(H, {
            space: 8,
            alignItems: "center",
            children: [
                /* @__PURE__ */ r("div", {
                    className: L(T, {
                        [Q]: o,
                        [y]: t || !o && e === l,
                        [x]: !t && !o && e === l
                    }),
                    children: /* @__PURE__ */ v(P, {
                        className: D,
                        disabled: !o && e === l || t,
                        onPress: ()=>o ? c == null ? void 0 : c() : B(e - 1),
                        "aria-label": o ? R() : z(),
                        "aria-controls": g,
                        children: [
                            /* @__PURE__ */ r("div", {
                                className: S
                            }),
                            /* @__PURE__ */ r("div", {
                                className: Z,
                                "aria-hidden": o,
                                children: /* @__PURE__ */ r(K, {
                                    size: M,
                                    color: e === l && !o || t ? n.colors.control : n.colors.controlActivated
                                })
                            }),
                            /* @__PURE__ */ r("div", {
                                className: _,
                                "aria-hidden": !o,
                                children: /* @__PURE__ */ r(W, {
                                    size: M,
                                    color: n.colors.controlError
                                })
                            })
                        ]
                    })
                }),
                /* @__PURE__ */ r("div", {
                    className: q,
                    style: {
                        width: `${Math.max(3, String(m).length) * 1.25}ch`
                    },
                    id: g,
                    "aria-live": "polite",
                    children: /* @__PURE__ */ v(G, {
                        variant: "default",
                        children: [
                            /* @__PURE__ */ r("div", {
                                "aria-hidden": !0,
                                children: /* @__PURE__ */ r(J, {
                                    regular: !0,
                                    color: n.colors.textPrimary,
                                    children: e
                                })
                            }),
                            /* @__PURE__ */ r(Y, {
                                children: /* @__PURE__ */ r("span", {
                                    children: j()
                                })
                            })
                        ]
                    })
                }),
                /* @__PURE__ */ r("div", {
                    className: L(T, {
                        [y]: t || e === m,
                        [x]: !t && e === m
                    }),
                    children: /* @__PURE__ */ v(P, {
                        className: D,
                        disabled: e === m || t,
                        onPress: ()=>B(e + 1),
                        "aria-label": $(),
                        "aria-controls": g,
                        children: [
                            /* @__PURE__ */ r("div", {
                                className: S
                            }),
                            /* @__PURE__ */ r("div", {
                                className: w,
                                children: /* @__PURE__ */ r(U, {
                                    size: M,
                                    color: e === m || t ? n.colors.control : n.colors.controlActivated
                                })
                            })
                        ]
                    })
                })
            ]
        })
    }));
}, Mr = sr;
export { Mr as default };
