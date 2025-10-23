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
import { jsx as a } from "react/jsx-runtime";
import * as f from "react";
import { useTheme as I } from "./hooks.js";
import { vars as v } from "./skins/skin-contract.css-mistica.js";
import { barBackground as T, bar as y, inverse as A, normal as C, progressBarSteppedContainer as F } from "./progress-bar.css-mistica.js";
import { getPrefixedDataAttributes as P } from "./utils/dom.js";
import N from "classnames";
import $ from "./inline.js";
import { loading as M, progressBarCompletedLabel as w, progressBarStepLabel as W } from "./text-tokens.js";
import { useIsInverseVariant as V } from "./theme-variant-context.js";
const K = (param)=>{
    let { progressPercent: r, color: t, "aria-label": g, "aria-labelledby": c, "aria-hidden": o, dataAttributes: m, reverse: s = !1 } = param;
    const { texts: d, t: p } = I(), l = V(), e = Math.max(0, Math.min(100, r)), i = o && o !== "false" ? {
        "aria-hidden": o
    } : {
        role: "progressbar",
        "aria-valuenow": e,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuetext": (()=>{
            const b = d.progressBarCompletedLabel || p(w);
            return `${e.toFixed(1)}% ${b}`;
        })(),
        "aria-label": c ? void 0 : g || d.loading || p(M),
        "aria-labelledby": c
    };
    return /* @__PURE__ */ a("div", _object_spread_props(_object_spread(_object_spread_props(_object_spread({}, P(m, "ProgressBar")), {
        className: T[l ? "inverse" : "default"]
    }), i), {
        children: /* @__PURE__ */ a("div", {
            className: N(y, s ? A : C),
            style: {
                maxWidth: `${e}%`,
                backgroundColor: t !== null && t !== void 0 ? t : l ? v.colors.controlActivatedInverse : v.colors.controlActivated
            }
        })
    }));
}, O = (param)=>{
    let { steps: r, currentStep: t = 0, color: g, dataAttributes: c, "aria-label": o, "aria-labelledby": m, "aria-hidden": s } = param;
    const { texts: d, t: p } = I(), l = V(), [e, h] = f.useState(Math.ceil(t)), [i, b] = f.useState(!1);
    f.useEffect(()=>{
        const n = Math.ceil(t);
        e !== n && (b(n < e), h(n));
    }, [
        t,
        r,
        e
    ]);
    const k = s && s !== "false" ? {
        "aria-hidden": s
    } : {
        role: "progressbar",
        "aria-valuenow": e,
        "aria-valuemin": 0,
        "aria-valuemax": r,
        "aria-valuetext": (()=>(d.progressBarStepLabel || p(W)).replace("1$s", String(e)).replace("2$s", String(r)))(),
        "aria-label": m ? void 0 : o,
        "aria-labelledby": m
    };
    return /* @__PURE__ */ a("div", _object_spread_props(_object_spread(_object_spread_props(_object_spread({}, P(c, "ProgressBarStepped")), {
        role: "progressbar"
    }), k), {
        className: F,
        children: /* @__PURE__ */ a($, {
            space: 8,
            fullWidth: !0,
            children: Array.from({
                length: r
            }, (n, u)=>{
                const x = u === e, B = u < e, S = u === e - 1;
                return /* @__PURE__ */ a("div", {
                    className: T[l ? "inverse" : "default"],
                    "aria-hidden": "true",
                    children: (B || x) && /* @__PURE__ */ a("div", {
                        className: N(y, {
                            [C]: S && !i,
                            [A]: x && i
                        }),
                        style: {
                            backgroundColor: g !== null && g !== void 0 ? g : l ? v.colors.controlActivatedInverse : v.colors.controlActivated,
                            maxWidth: B || S && !i ? "100%" : "0"
                        }
                    })
                }, u);
            })
        })
    }));
};
export { K as ProgressBar, O as ProgressBarStepped };
