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
import { jsx as f, jsxs as e, Fragment as n } from "react/jsx-runtime";
import * as h from "react";
import d from "classnames";
import { getPrefixedDataAttributes as N } from "./utils/dom.js";
import { smallLinkInNewLine as w, linkInNewLine as x, link as b, container as g, alignVariant as C, containerWithTwoButtons as I } from "./button-layout.css-mistica.js";
import { smallLink as R } from "./button.css-mistica.js";
import { useIsomorphicLayoutEffect as S } from "./hooks.js";
const j = (param)=>{
    let { primaryButton: i, secondaryButton: r, align: t = "full-width", link: o, dataAttributes: L } = param;
    const l = h.useRef(null), [k, p] = h.useState(!1);
    S(()=>{
        var c, u;
        (u = (c = l.current) == null ? void 0 : c.getElementsByClassName(R)) != null && u.length && p(!0);
    }, []);
    const s = (i ? 1 : 0) + (r ? 1 : 0), a = t === "right" ? /* @__PURE__ */ e(n, {
        children: [
            r,
            i
        ]
    }) : /* @__PURE__ */ e(n, {
        children: [
            i,
            r
        ]
    }), m = o ? /* @__PURE__ */ f("div", {
        ref: l,
        className: d(s !== 1 ? k ? w[t] : x[t] : b),
        "data-link": "true",
        children: o
    }) : null;
    return /* @__PURE__ */ f("div", _object_spread_props(_object_spread({
        className: d(g, C[t], {
            [I]: s > 1
        })
    }, N(L, "ButtonLayout")), {
        children: t !== "right" || s > 1 ? /* @__PURE__ */ e(n, {
            children: [
                a,
                m
            ]
        }) : /* @__PURE__ */ e(n, {
            children: [
                m,
                a
            ]
        })
    }));
}, F = j;
export { F as default };
