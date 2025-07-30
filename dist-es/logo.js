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
import { jsx as e, Fragment as u } from "react/jsx-runtime";
import * as s from "react";
import { useTheme as g } from "./hooks.js";
import { useIsInverseOrMediaVariant as f } from "./theme-variant-context.js";
import d from "./touchable.js";
import { getPrefixedDataAttributes as L } from "./utils/dom.js";
import { svg as h, logoContainer as v } from "./logo.css-mistica.js";
import { calcInlineVars as y } from "./logo-common.js";
import { applyCssVars as I } from "./utils/css.js";
const i = 48, N = /*#__PURE__*/ s.lazy(()=>import(/* webpackChunkName: "logo-movistar" */ "./logo-movistar.js")), T = /*#__PURE__*/ s.lazy(()=>import(/* webpackChunkName: "logo-vivo" */ "./logo-vivo.js")), p = /*#__PURE__*/ s.lazy(()=>import(/* webpackChunkName: "logo-o2" */ "./logo-o2.js")), k = /*#__PURE__*/ s.lazy(()=>import(/* webpackChunkName: "logo-o2-new" */ "./logo-o2-new.js")), O = /*#__PURE__*/ s.lazy(()=>import(/* webpackChunkName: "logo-telefonica" */ "./logo-telefonica.js")), V = /*#__PURE__*/ s.lazy(()=>import(/* webpackChunkName: "logo-blau" */ "./logo-blau.js")), b = /*#__PURE__*/ s.lazy(()=>import(/* webpackChunkName: "logo-tu" */ "./logo-tu.js")), w = /*#__PURE__*/ s.lazy(()=>import(/* webpackChunkName: "logo-esimflag" */ "./logo-esimflag.js")), c = (param)=>{
    let { size: o, skinName: n, type: t = "isotype", color: a } = param;
    const r = f(), { isDarkMode: l } = g();
    switch(n){
        case "Movistar":
            return /* @__PURE__ */ e(N, {
                size: o,
                type: t,
                isDarkMode: l,
                isInverse: r,
                color: a
            });
        case "Vivo":
        case "Vivo-new":
            return /* @__PURE__ */ e(T, {
                size: o,
                type: t,
                isDarkMode: l,
                isInverse: r,
                color: a
            });
        case "O2":
            return /* @__PURE__ */ e(p, {
                size: o,
                type: t,
                isDarkMode: l,
                isInverse: r,
                color: a
            });
        case "O2-new":
            return /* @__PURE__ */ e(k, {
                size: o,
                type: t,
                isDarkMode: l,
                isInverse: r,
                color: a
            });
        case "Telefonica":
            return /* @__PURE__ */ e(O, {
                size: o,
                type: t,
                isDarkMode: l,
                isInverse: r,
                color: a
            });
        case "Blau":
            return /* @__PURE__ */ e(V, {
                size: o,
                type: t,
                isDarkMode: l,
                isInverse: r,
                color: a
            });
        case "Tu":
            return /* @__PURE__ */ e(b, {
                size: o,
                type: t,
                isDarkMode: l,
                isInverse: r,
                color: a
            });
        case "Esimflag":
            return /* @__PURE__ */ e(w, {
                size: o,
                type: t,
                isDarkMode: l,
                isInverse: r,
                color: a
            });
        default:
            return /* @__PURE__ */ e(u, {});
    }
}, m = (o)=>{
    const n = L(o.dataAttributes, "Logo");
    return o.to || o.href || o.onPress ? /* @__PURE__ */ e(d, _object_spread({}, o)) : /* @__PURE__ */ e(s.Suspense, {
        fallback: /* @__PURE__ */ e("div", {
            className: h,
            style: _object_spread_props(_object_spread({}, I(y(o.size))), {
                width: 1
            })
        }),
        children: /* @__PURE__ */ e("div", _object_spread_props(_object_spread({
            className: v
        }, n), {
            children: o.children
        }))
    });
}, F = (_param)=>{
    var { size: o = i, type: n = "isotype", color: t } = _param, a = _object_without_properties(_param, [
        "size",
        "type",
        "color"
    ]);
    const { skinName: r } = g();
    return /* @__PURE__ */ e(m, _object_spread_props(_object_spread({
        size: o
    }, a), {
        children: /* @__PURE__ */ e(c, {
            skinName: r,
            type: n,
            size: o,
            color: t
        })
    }));
}, H = (_param)=>{
    var { size: o = i, type: n = "isotype", color: t } = _param, a = _object_without_properties(_param, [
        "size",
        "type",
        "color"
    ]);
    return /* @__PURE__ */ e(m, _object_spread_props(_object_spread({
        size: o
    }, a), {
        children: /* @__PURE__ */ e(c, {
            skinName: "Movistar",
            type: n,
            size: o,
            color: t
        })
    }));
}, _ = (_param)=>{
    var { size: o = i, type: n = "isotype", color: t } = _param, a = _object_without_properties(_param, [
        "size",
        "type",
        "color"
    ]);
    return /* @__PURE__ */ e(m, _object_spread_props(_object_spread({
        size: o
    }, a), {
        children: /* @__PURE__ */ e(c, {
            skinName: "Vivo",
            type: n,
            size: o,
            color: t
        })
    }));
}, j = (_param)=>{
    var { size: o = i, type: n = "isotype", color: t } = _param, a = _object_without_properties(_param, [
        "size",
        "type",
        "color"
    ]);
    return /* @__PURE__ */ e(m, _object_spread_props(_object_spread({
        size: o
    }, a), {
        children: /* @__PURE__ */ e(c, {
            skinName: "O2",
            type: n,
            size: o,
            color: t
        })
    }));
}, G = (_param)=>{
    var { size: o = i, type: n = "isotype", color: t } = _param, a = _object_without_properties(_param, [
        "size",
        "type",
        "color"
    ]);
    return /* @__PURE__ */ e(m, _object_spread_props(_object_spread({
        size: o
    }, a), {
        children: /* @__PURE__ */ e(c, {
            skinName: "O2-new",
            type: n,
            size: o,
            color: t
        })
    }));
}, R = (_param)=>{
    var { size: o = i, type: n = "isotype", color: t } = _param, a = _object_without_properties(_param, [
        "size",
        "type",
        "color"
    ]);
    return /* @__PURE__ */ e(m, _object_spread_props(_object_spread({
        size: o
    }, a), {
        children: /* @__PURE__ */ e(c, {
            skinName: "Telefonica",
            type: n,
            size: o,
            color: t
        })
    }));
}, S = (_param)=>{
    var { size: o = i, type: n = "isotype", color: t } = _param, a = _object_without_properties(_param, [
        "size",
        "type",
        "color"
    ]);
    return /* @__PURE__ */ e(m, _object_spread_props(_object_spread({
        size: o
    }, a), {
        children: /* @__PURE__ */ e(c, {
            skinName: "Blau",
            type: n,
            size: o,
            color: t
        })
    }));
}, U = (_param)=>{
    var { size: o = i, type: n = "isotype", color: t } = _param, a = _object_without_properties(_param, [
        "size",
        "type",
        "color"
    ]);
    return /* @__PURE__ */ e(m, _object_spread_props(_object_spread({
        size: o
    }, a), {
        children: /* @__PURE__ */ e(c, {
            skinName: "Tu",
            type: n,
            size: o,
            color: t
        })
    }));
}, X = (_param)=>{
    var { size: o = i, type: n = "isotype", color: t } = _param, a = _object_without_properties(_param, [
        "size",
        "type",
        "color"
    ]);
    return /* @__PURE__ */ e(m, _object_spread_props(_object_spread({
        size: o
    }, a), {
        children: /* @__PURE__ */ e(c, {
            skinName: "Esimflag",
            type: n,
            size: o,
            color: t
        })
    }));
};
export { S as BlauLogo, X as EsimflagLogo, F as Logo, H as MovistarLogo, j as O2Logo, G as O2NewLogo, R as TelefonicaLogo, U as TuLogo, _ as VivoLogo };
