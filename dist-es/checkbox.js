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
import { jsx as a, jsxs as D } from "react/jsx-runtime";
import * as b from "react";
import { SPACE as L } from "./utils/keys.js";
import { useControlProps as P } from "./form-context.js";
import V from "./inline.js";
import { Text3 as k } from "./text.js";
import { useTheme as A } from "./hooks.js";
import m from "classnames";
import { getPrefixedDataAttributes as K } from "./utils/dom.js";
import { checkboxContainerDisabled as R, checkboxContainer as S, disabled as g, check as x, checkChecked as C, inverseBoxVariant as B, boxVariant as E } from "./checkbox.css-mistica.js";
import { vars as d } from "./skins/skin-contract.css-mistica.js";
import { combineRefs as j } from "./utils/common.js";
import { useIsInverseVariant as z } from "./theme-variant-context.js";
const M = (param)=>{
    let { isChecked: e, disabled: s } = param;
    const { isIos: c } = A(), i = z(), t = e ? "checked" : c ? "ios" : "rest", h = c ? /* @__PURE__ */ a("svg", {
        viewBox: "0 0 10 8",
        width: "10",
        height: "8",
        className: m(x, {
            [C]: e
        }),
        children: /* @__PURE__ */ a("path", {
            d: "M2.659 7.724c.33.366.92.368 1.254.005L9.79 1.336A.782.782 0 009.719.202a.858.858 0 00-1.178.069l-5.236 5.72-1.841-2.038a.857.857 0 00-1.177-.078.782.782 0 00-.082 1.133l2.454 2.716z",
            fill: i ? d.colors.controlKnobInverse : d.colors.inverse
        })
    }) : /* @__PURE__ */ a("svg", {
        viewBox: "0 0 14 10",
        width: "14",
        height: "10",
        className: m(x, {
            [C]: e
        }),
        children: /* @__PURE__ */ a("path", {
            d: "M5 10L0 5.192l1.4-1.346L5 7.308 12.6 0 14 1.346z",
            fill: i ? d.colors.controlKnobInverse : d.colors.inverse
        })
    });
    return /* @__PURE__ */ a("div", {
        className: m(i ? B[t] : E[t], {
            [g]: s
        }),
        children: h
    });
}, T = /*#__PURE__*/ b.forwardRef((e, s)=>{
    const c = b.useId(), i = e["aria-labelledby"] || c, t = e["aria-label"], h = t || e["aria-labelledby"], { defaultValue: I, value: r, onChange: f, focusableRef: w, disabled: o } = P({
        name: e.name,
        value: e.checked,
        defaultValue: e.defaultChecked,
        onChange: e.onChange,
        disabled: e.disabled
    }), [l, y] = b.useState(!!I), v = ()=>{
        r === void 0 ? (y(!l), f(!l)) : f(!r);
    }, N = (n)=>{
        n.key === L && (n.preventDefault(), n.stopPropagation(), v());
    }, u = /* @__PURE__ */ a(M, {
        disabled: o,
        isChecked: r !== null && r !== void 0 ? r : l
    });
    return(// When the checkbox is disabled, it shouldn't be focusable
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    /* @__PURE__ */ a("div", _object_spread_props(_object_spread({
        id: e.id,
        role: e.role || "checkbox",
        "aria-checked": r !== null && r !== void 0 ? r : l,
        onKeyDown: o ? void 0 : N,
        onClick: (n)=>{
            n.stopPropagation(), o || v();
        },
        tabIndex: o ? void 0 : 0,
        ref: j(s, w),
        className: o ? R : S,
        "aria-label": t,
        "aria-labelledby": t ? void 0 : i,
        "aria-disabled": o
    }, K(e.dataAttributes, "Checkbox")), {
        children: e.render ? e.render({
            controlElement: u,
            labelId: i,
            checked: r !== null && r !== void 0 ? r : l,
            disabled: !!o
        }) : /* @__PURE__ */ D(V, {
            space: 16,
            children: [
                /* @__PURE__ */ a(k, {
                    regular: !0,
                    as: "div",
                    children: /* @__PURE__ */ a("div", {
                        style: {
                            position: "relative",
                            top: -2
                        },
                        children: u
                    })
                }),
                e.children && /* @__PURE__ */ a(k, {
                    regular: !0,
                    as: "div",
                    id: i,
                    role: h ? "presentation" : void 0,
                    children: /* @__PURE__ */ a("span", {
                        className: o ? g : "",
                        children: e.children
                    })
                })
            ]
        })
    })));
}), Z = T;
export { Z as default };
