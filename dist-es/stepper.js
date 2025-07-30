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
import { jsx as e, jsxs as b } from "react/jsx-runtime";
import * as p from "react";
import d from "classnames";
import { Text1 as F, Text2 as I } from "./text.js";
import { useTheme as M, useElementDimensions as j } from "./hooks.js";
import { stepperCompletedStep as B, stepperCurrentStep as D } from "./text-tokens.js";
import E from "./icons/icon-success.js";
import { stepper as H, vars as z, listItem as L, step as O, stepIconNumber as S, iconAnimation as V, number as q, currentNumber as G, textContainer as J, bar as K, barFilled as Q, barFilledAnimation as U, barFilledReverseAnimation as W } from "./stepper.css-mistica.js";
import { applyCssVars as X, pxToRem as Y } from "./utils/css.js";
import { vars as l } from "./skins/skin-contract.css-mistica.js";
import { getPrefixedDataAttributes as Z } from "./utils/dom.js";
import _ from "./screen-reader-only.js";
const ee = (param)=>{
    let { steps: c, currentIndex: n, "aria-label": v, "aria-labelledby": y, "aria-description": N, "aria-describedby": x, dataAttributes: C } = param;
    const { texts: h, t: u, textPresets: g } = M(), { height: A, ref: $ } = j(), T = A, [r, P] = p.useState(Math.ceil(n)), [i, R] = p.useState(!1);
    p.useEffect(()=>{
        const s = Math.ceil(n);
        r !== s && (R(s < r), P(s));
    }, [
        n,
        c,
        r
    ]);
    const k = h.stepperCompletedStep || u(B), w = h.stepperCurrentStep || u(D);
    return(// The explicit role="list" is needed for Safari VoiceOver when setting css list-style: none
    // aria-description is not supported by the eslint rule
    // eslint-disable-next-line jsx-a11y/no-redundant-roles, jsx-a11y/role-supports-aria-props
    /* @__PURE__ */ e("ol", _object_spread_props(_object_spread({
        role: "list",
        className: H,
        style: X({
            [z.stepperMinHeight]: Y(40 + T)
        })
    }, Z(C, "Stepper")), {
        "aria-label": v,
        "aria-labelledby": y,
        "aria-description": N,
        "aria-describedby": x,
        children: c.map((s, a)=>{
            const t = a === r, f = a === c.length - 1, o = a < r, m = a === r - 1;
            return /* @__PURE__ */ b("li", {
                className: L,
                style: f ? void 0 : {
                    flex: 1
                },
                "aria-current": t ? "step" : void 0,
                children: [
                    /* @__PURE__ */ b("div", {
                        className: O,
                        children: [
                            o ? /* @__PURE__ */ e("div", {
                                className: d(S, {
                                    [V]: m && !i
                                }),
                                "aria-hidden": "true",
                                children: /* @__PURE__ */ e(E, {
                                    color: l.colors.controlActivated,
                                    size: "100%",
                                    skipAnimation: !m || i
                                })
                            }) : /* @__PURE__ */ e("div", {
                                className: d(S, q, {
                                    [G]: t || t
                                }),
                                children: /* @__PURE__ */ e(F, {
                                    as: "span",
                                    weight: g.indicator.weight,
                                    color: t ? l.colors.textPrimaryInverse : l.colors.textSecondary,
                                    "aria-hidden": "true",
                                    children: a + 1
                                })
                            }),
                            /* @__PURE__ */ e("div", {
                                className: J,
                                "aria-hidden": "true",
                                ref: $,
                                children: /* @__PURE__ */ e(I, {
                                    as: "div",
                                    regular: !0,
                                    color: o || t ? l.colors.textPrimary : l.colors.textSecondary,
                                    children: s
                                })
                            }),
                            /* @__PURE__ */ e(_, {
                                children: /* @__PURE__ */ e("span", {
                                    children: `${o ? `${k}: ` : t ? `${w}: ` : ""}${s}`
                                })
                            })
                        ]
                    }),
                    !f && /* @__PURE__ */ e("div", {
                        className: K,
                        "aria-hidden": "true",
                        children: (o || t) && /* @__PURE__ */ e("div", {
                            className: d({
                                [Q]: i && t || o,
                                [U]: m && !i,
                                [W]: t && i
                            })
                        })
                    })
                ]
            }, a);
        })
    })));
}, de = ee;
export { de as default };
