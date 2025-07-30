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
import { jsx as m } from "react/jsx-runtime";
import * as b from "react";
import w from "classnames";
import { useIsInverseOrMediaVariant as V, ThemeVariant as v } from "./theme-variant-context.js";
import { getPrefixedDataAttributes as D } from "./utils/dom.js";
import { vars as n } from "./skins/skin-contract.css-mistica.js";
import { vars as o, boxed as H, desktopOnly as W, overflowHidden as $, noBorder as j, boxBorder as z } from "./boxed.css-mistica.js";
import { applyCssVars as A } from "./utils/css.js";
const M = (r, e)=>r || e ? j : z, s = (r)=>typeof r == "number" ? `${r}px` : r !== null && r !== void 0 ? r : "initial", t = (r, e)=>{
    if (typeof e == "number" || typeof e == "string" || typeof e > "u") return {
        [o[r]]: s(e)
    };
    const i = {
        [o.mobile[r]]: s(e.mobile),
        [o.desktop[r]]: s(e.desktop)
    };
    return e.tablet && (i[o.tablet[r]] = s(e.tablet)), i;
}, P = /*#__PURE__*/ b.forwardRef((param, R)=>{
    let { children: r, isInverse: e = !1, className: i, role: c, dataAttributes: p, "aria-label": y, "aria-labelledby": u, width: x, maxWidth: g, minWidth: h, height: k, minHeight: B, borderRadius: I = n.borderRadii.container, background: f, desktopOnly: C, variant: a, overflow: O } = param;
    const l = V(), d = e || a === "inverse" || a === "media";
    return /* @__PURE__ */ m("div", _object_spread_props(_object_spread({
        ref: R,
        style: _object_spread_props(_object_spread({}, A(_object_spread_props(_object_spread({}, t("width", x), t("maxWidth", g), t("minWidth", h), t("height", k), t("minHeight", B)), {
            [o.background]: (f !== null && f !== void 0 ? f : d) ? l ? n.colors.backgroundContainerBrandOverInverse : n.colors.backgroundContainerBrand : n.colors.backgroundContainer,
            [o.borderRadius]: I
        }))), {
            background: f
        }),
        className: w(i, H, M(l, d), {
            [W]: C,
            [$]: O !== "visible"
        }),
        role: c,
        "aria-label": y,
        "aria-labelledby": u
    }, D(p)), {
        children: /* @__PURE__ */ m(v, {
            variant: a !== null && a !== void 0 ? a : d ? "inverse" : void 0,
            children: r
        })
    }));
}), K = /*#__PURE__*/ b.forwardRef((r, e)=>/* @__PURE__ */ m(P, _object_spread_props(_object_spread({}, r), {
        ref: e
    })));
export { K as Boxed, P as InternalBoxed };
