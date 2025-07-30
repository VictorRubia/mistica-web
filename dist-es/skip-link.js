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
import { jsx as i } from "react/jsx-runtime";
import * as k from "react";
import { ButtonLink as m } from "./button.js";
import { skipLinkContainer as p, skipLinkList as L } from "./skip-link.css-mistica.js";
import { useTheme as c } from "./hooks.js";
import { skipLinkNavLabel as f } from "./text-tokens.js";
import { getPrefixedDataAttributes as n } from "./utils/dom.js";
const h = (param)=>{
    let { targetId: a, children: r, "aria-label": e, dataAttributes: t } = param;
    return /* @__PURE__ */ i("div", _object_spread_props(_object_spread({
        className: p
    }, n(t, "SkipLink")), {
        children: /* @__PURE__ */ i(m, {
            "aria-label": e,
            href: `#${a}`,
            withChevron: !1,
            children: r
        })
    }));
}, x = (param)=>{
    let { children: a, "aria-label": r, dataAttributes: e } = param;
    const { texts: t, t: o } = c(), l = r || t.skipLinkNavLabel || o(f);
    return /* @__PURE__ */ i("nav", _object_spread_props(_object_spread({
        "aria-label": l
    }, n(e, "SkipLinkNav")), {
        children: /* @__PURE__ */ i("ul", {
            className: L,
            children: k.Children.map(a, (s)=>/* @__PURE__ */ i("li", {
                    children: s
                }))
        })
    }));
}, C = h;
export { x as SkipLinkNav, C as default };
