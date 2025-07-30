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
import { jsxs as v, jsx as m } from "react/jsx-runtime";
import F from "classnames";
import * as f from "react";
import { useTheme as k, useIsomorphicLayoutEffect as ee } from "./hooks.js";
import te from "./inline.js";
import q from "./screen-reader-only.js";
import { Text2 as ne, Text6 as re } from "./text.js";
import { useThemeVariant as se, ThemeVariant as ae } from "./theme-variant-context.js";
import { inlineText as j, timerWrapper as oe, shortLabelText as ie, boxedTimerValueContainer as le, timerDisplayValue as ue, boxedTimerDisplayValue as ce, unitContainer as T } from "./timer.css-mistica.js";
import { getPrefixedDataAttributes as z } from "./utils/dom.js";
import { isEqual as de } from "./utils/helpers.js";
import { isRunningAcceptanceTest as B } from "./utils/platform.js";
import { timerDaysShortLabel as me, timerHoursShortLabel as he, timerMinutesShortLabel as Le, timerSecondsShortLabel as be, timerDayLongLabel as R, timerHourLongLabel as _, timerMinuteLongLabel as G, timerSecondLongLabel as J, timerDaysLongLabel as O, timerHoursLongLabel as E, timerMinutesLongLabel as K, timerSecondsLongLabel as Q, timerAnd as A, timerDisplayMinutesLabel as x, timerDisplaySecondsLabel as w } from "./text-tokens.js";
const $ = 24, V = 60, X = 60, C = 1e3, Z = X * C, P = V * Z, ge = $ * P, H = (s, a, o, i)=>{
    a = i === "none" && a === "days" ? "hours" : a, o = i === "none" && o === "days" ? "hours" : o;
    const c = [
        "seconds",
        "minutes",
        "hours",
        "days"
    ], L = c.indexOf(a), b = Math.max(c.indexOf(o), L), e = c.indexOf(s);
    return L <= e && e <= b;
}, W = (s, a, o, i)=>[
        {
            unit: "days",
            value: s.days
        },
        {
            unit: "hours",
            value: s.hours
        },
        {
            unit: "minutes",
            value: s.minutes
        },
        {
            unit: "seconds",
            value: s.seconds
        }
    ].filter((c)=>H(c.unit, a, o, i)), Y = (s)=>B() ? 0 : Math.max(0, (typeof s == "object" ? s : new Date(s)).valueOf() - Date.now()), U = (param)=>{
    let { endTimestamp: s, labelType: a, minTimeUnit: o, maxTimeUnit: i, onProgress: c } = param;
    const [L, b] = f.useState(Y(s));
    ee(()=>{
        let u;
        const N = ()=>{
            const I = Y(s);
            b(I), I || clearInterval(u);
        };
        if (!B()) return N(), u = setInterval(N, C), ()=>clearInterval(u);
    }, [
        s
    ]);
    const e = H("days", o, i, a), t = H("hours", o, i, a), p = H("minutes", o, i, a), l = e ? "days" : t ? "hours" : p ? "minutes" : "seconds", g = Math.floor(L / P) % 24, M = Math.floor(L / Z) % 60, D = Math.floor(L / C) % 60, h = Math.floor(L / ge), S = l === "hours" ? g + h * $ : g, y = l === "minutes" ? M + V * (h * $ + S) : M, n = l === "seconds" ? D + X * (h * $ * V + S * V + y) : D, [r, d] = f.useState(W({
        days: h,
        hours: S,
        minutes: y,
        seconds: n
    }, o, i, a));
    return f.useEffect(()=>{
        const u = W({
            days: h,
            hours: S,
            minutes: y,
            seconds: n
        }, o, i, a);
        if (!de(u, r)) {
            d(u);
            const N = {};
            u.forEach((I)=>N[I.unit] = I.value), c == null || c(N);
        }
    }, [
        h,
        S,
        y,
        n,
        a,
        o,
        i,
        r,
        c
    ]), r;
}, Re = (param)=>{
    let { endTimestamp: s, labelType: a = "none", minTimeUnit: o, maxTimeUnit: i, onProgress: c, dataAttributes: L, "aria-label": b } = param;
    const { texts: e, t } = k(), p = f.useId(), l = U({
        endTimestamp: s,
        labelType: a,
        minTimeUnit: o,
        maxTimeUnit: i,
        onProgress: c
    }), g = {
        days: e.timerDaysShortLabel || t(me),
        hours: e.timerHoursShortLabel || t(he),
        minutes: e.timerMinutesShortLabel || t(Le),
        seconds: e.timerSecondsShortLabel || t(be)
    }, M = {
        days: e.timerDayLongLabel || t(R),
        hours: e.timerHourLongLabel || t(_),
        minutes: e.timerMinuteLongLabel || t(G),
        seconds: e.timerSecondLongLabel || t(J)
    }, D = {
        days: e.timerDaysLongLabel || t(O),
        hours: e.timerHoursLongLabel || t(E),
        minutes: e.timerMinutesLongLabel || t(K),
        seconds: e.timerSecondsLongLabel || t(Q)
    }, h = (n)=>{
        const r = Math.max(String(n).length, a === "long" ? 1 : 2);
        return /* @__PURE__ */ m("span", {
            className: T,
            style: {
                minWidth: `${r}ch`
            },
            children: String(n).padStart(r, "0")
        });
    }, S = ()=>{
        switch(a){
            case "none":
                return l.map((n, r)=>/* @__PURE__ */ v(f.Fragment, {
                        children: [
                            r > 0 && ":",
                            h(n.value)
                        ]
                    }, r));
            case "short":
                return l.map((n, r)=>/* @__PURE__ */ v(f.Fragment, {
                        children: [
                            r > 0 && " ",
                            /* @__PURE__ */ v("span", {
                                className: ie,
                                children: [
                                    h(n.value),
                                    ` ${g[n.unit]}`
                                ]
                            })
                        ]
                    }, r));
            case "long":
            default:
                return l.map((n, r)=>/* @__PURE__ */ v(f.Fragment, {
                        children: [
                            r > 0 && " ",
                            h(n.value),
                            ` ${n.value === 1 ? M[n.unit] : D[n.unit]}`,
                            r === l.length - 2 && ` ${e.timerAnd || t(A)}`,
                            r < l.length - 2 && ","
                        ]
                    }, r));
        }
    }, y = l.map((n, r)=>`${n.value} ${n.value === 1 ? M[n.unit] : D[n.unit]}${r === l.length - 1 ? "" : r === l.length - 2 ? ` ${e.timerAnd || t(A)} ` : ", "}`).join("");
    return /* @__PURE__ */ v("span", _object_spread_props(_object_spread({
        role: "timer",
        "aria-labelledby": p,
        className: j,
        style: {
            // try to keep the timer in the same line without wrapping only when label is not long
            display: a !== "long" ? "inline-block" : void 0
        }
    }, z(L, "TextTimer")), {
        children: [
            /* @__PURE__ */ m(q, {
                children: /* @__PURE__ */ m("span", {
                    id: p,
                    children: b ? `${b}. ${y}` : y
                })
            }),
            /* @__PURE__ */ m("span", {
                "aria-hidden": !0,
                className: j,
                children: S()
            })
        ]
    }));
}, _e = (param)=>{
    let { boxed: s, endTimestamp: a, minTimeUnit: o, maxTimeUnit: i, onProgress: c, dataAttributes: L, "aria-label": b } = param;
    const { texts: e, t } = k(), p = f.useId(), l = se(), g = U({
        endTimestamp: a,
        minTimeUnit: o,
        maxTimeUnit: i,
        onProgress: c
    }), M = {
        days: e.timerDayLongLabel || t(R),
        hours: e.timerHourLongLabel || t(_),
        minutes: e.timerDisplayMinutesLabel || t(x),
        seconds: e.timerDisplaySecondsLabel || t(w)
    }, D = {
        days: e.timerDaysLongLabel || t(O),
        hours: e.timerHoursLongLabel || t(E),
        minutes: e.timerDisplayMinutesLabel || t(x),
        seconds: e.timerDisplaySecondsLabel || t(w)
    }, h = {
        days: e.timerDayLongLabel || t(R),
        hours: e.timerHourLongLabel || t(_),
        minutes: e.timerMinuteLongLabel || t(G),
        seconds: e.timerSecondLongLabel || t(J)
    }, S = {
        days: e.timerDaysLongLabel || t(O),
        hours: e.timerHoursLongLabel || t(E),
        minutes: e.timerMinutesLongLabel || t(K),
        seconds: e.timerSecondsLongLabel || t(Q)
    }, y = (d)=>{
        const u = Math.max(String(d).length, 2);
        return /* @__PURE__ */ m(re, {
            children: /* @__PURE__ */ m("div", {
                className: T,
                style: {
                    minWidth: `${u}ch`
                },
                children: String(d).padStart(u, "0")
            })
        });
    }, n = g.map((d, u)=>`${d.value} ${d.value === 1 ? h[d.unit] : S[d.unit]}${u === g.length - 1 ? "" : u === g.length - 2 ? ` ${e.timerAnd || t(A)} ` : ", "}`).join(""), r = ()=>g.map((d, u)=>/* @__PURE__ */ m("div", {
                className: F({
                    [le[l]]: s
                }),
                children: /* @__PURE__ */ m(ae, {
                    variant: s ? "default" : l,
                    children: /* @__PURE__ */ v("div", {
                        className: F(ue, {
                            [ce]: s
                        }),
                        children: [
                            y(d.value),
                            /* @__PURE__ */ m(ne, {
                                regular: !0,
                                children: d.value === 1 ? M[d.unit] : D[d.unit]
                            })
                        ]
                    })
                })
            }, u));
    return /* @__PURE__ */ v("div", _object_spread_props(_object_spread({
        role: "timer",
        "aria-labelledby": p,
        className: oe
    }, z(L, "Timer")), {
        children: [
            /* @__PURE__ */ m(q, {
                children: /* @__PURE__ */ m("span", {
                    id: p,
                    children: b ? `${b}. ${n}` : n
                })
            }),
            /* @__PURE__ */ m("div", {
                "aria-hidden": !0,
                children: /* @__PURE__ */ m(te, {
                    space: s ? 8 : 16,
                    wrap: !0,
                    children: r()
                })
            })
        ]
    }));
};
export { Re as TextTimer, _e as Timer };
