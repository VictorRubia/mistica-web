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
import { jsx as s, Fragment as D, jsxs as k } from "react/jsx-runtime";
import * as o from "react";
import { debounce as S } from "./utils/helpers.js";
import { SPACE as y } from "./utils/keys.js";
import { useControlProps as g } from "./form-context.js";
import { Text3 as E } from "./text.js";
import P from "./inline.js";
import { useTheme as A } from "./hooks.js";
import { getPrefixedDataAttributes as j } from "./utils/dom.js";
import { containerDisabled as B, container as K, interactiveArea as M, disabled as R, checkboxVariants as T, switchCheckboxContainerVariants as $, switchCheckboxLabel as F, inverseBarVariants as L, barVariants as O, inverseBallVariants as _, ballVariants as q } from "./switch-component.css-mistica.js";
import { useIsInverseVariant as z } from "./theme-variant-context.js";
const G = (e)=>{
    const { isIos: c, isDarkMode: v } = A(), m = z(), I = o.useId(), n = e["aria-labelledby"] || I, { defaultValue: V, value: l, onChange: a, focusableRef: N, disabled: i } = g({
        name: e.name,
        label: e["aria-label"],
        value: e.checked,
        defaultValue: e.defaultChecked,
        onChange: e.onChange,
        disabled: e.disabled
    }), [r, w] = o.useState(!!V), d = l !== null && l !== void 0 ? l : r, x = o.useMemo(()=>process.env.NODE_ENV === "test" ? (t)=>a == null ? void 0 : a(t) : S((t)=>{
            a == null || a(t);
        }, 300), [
        a
    ]), b = ()=>{
        l !== void 0 ? a == null || a(!l) : (w(!r), x(!r));
    }, C = (t)=>{
        t.key === y && (t.preventDefault(), t.stopPropagation(), b());
    }, h = c ? d ? "checkedIos" : v ? "iosDark" : "ios" : d ? "checked" : "default", f = c ? d ? "checkedIos" : "ios" : d ? "checked" : "default", u = /* @__PURE__ */ s("div", {
        className: T[c ? i ? "disabledIos" : "ios" : i ? "disabled" : "default"],
        children: /* @__PURE__ */ s("div", {
            className: $[c ? "ios" : "default"],
            children: /* @__PURE__ */ k("div", {
                className: F,
                children: [
                    /* @__PURE__ */ s("span", {
                        className: m ? L[h] : O[h]
                    }),
                    /* @__PURE__ */ s("span", {
                        className: m ? _[f] : q[f]
                    })
                ]
            })
        })
    });
    return(// When the switch is disabled, it shouldn't be focusable
    // eslint-disable-next-line jsx-a11y/interactive-supports-focus
    /* @__PURE__ */ s("span", _object_spread_props(_object_spread({
        role: "switch",
        "aria-checked": l !== null && l !== void 0 ? l : r,
        onClick: (t)=>{
            t.stopPropagation(), i || b();
        },
        onKeyDown: i ? void 0 : C,
        tabIndex: i ? void 0 : 0,
        ref: N,
        className: i ? B : K,
        "aria-disabled": i,
        "aria-label": e["aria-label"],
        "aria-labelledby": e["aria-label"] ? void 0 : n
    }, j(e.dataAttributes, "Switch")), {
        children: e.render ? /* @__PURE__ */ s(D, {
            children: e.render({
                controlElement: u,
                labelId: n,
                disabled: !!i,
                checked: l !== null && l !== void 0 ? l : r
            })
        }) : /* @__PURE__ */ k(P, {
            space: 16,
            alignItems: "center",
            className: M,
            children: [
                u,
                e.children && /* @__PURE__ */ s(E, {
                    regular: !0,
                    as: "div",
                    id: n,
                    children: /* @__PURE__ */ s("span", {
                        className: i ? R : "",
                        children: e.children
                    })
                })
            ]
        })
    })));
}, ae = G;
export { ae as default };
