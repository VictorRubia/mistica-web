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
import * as r from "react";
import { useTheme as g } from "./hooks.js";
import { useIsInverseOrMediaVariant as f } from "./theme-variant-context.js";
import L from "./touchable.js";
import { getPrefixedDataAttributes as d } from "./utils/dom.js";
import { svg as h, logoContainer as p } from "./logo.css-mistica.js";
import { calcInlineVars as T } from "./logo-common.js";
import { applyCssVars as y } from "./utils/css.js";
const i = 48, v = /*#__PURE__*/ r.lazy(()=>import(/* webpackChunkName: "logo-movistar" */ "./logo-movistar.js")), I = /*#__PURE__*/ r.lazy(()=>import(/* webpackChunkName: "logo-vivo" */ "./logo-vivo.js")), N = /*#__PURE__*/ r.lazy(()=>import(/* webpackChunkName: "logo-o2" */ "./logo-o2.js")), k = /*#__PURE__*/ r.lazy(()=>import(/* webpackChunkName: "logo-o2-new" */ "./logo-o2-new.js")), O = /*#__PURE__*/ r.lazy(()=>import(/* webpackChunkName: "logo-telefonica" */ "./logo-telefonica.js")), E = /*#__PURE__*/ r.lazy(()=>import(/* webpackChunkName: "logo-telefonica-empresas" */ "./logo-telefonica-empresas.js")), V = /*#__PURE__*/ r.lazy(()=>import(/* webpackChunkName: "logo-blau" */ "./logo-blau.js")), b = /*#__PURE__*/ r.lazy(()=>import(/* webpackChunkName: "logo-tu" */ "./logo-tu.js")), w = /*#__PURE__*/ r.lazy(()=>import(/* webpackChunkName: "logo-esimflag" */ "./logo-esimflag.js")), c = (param)=>{
    let { size: o, skinName: n, type: a = "isotype", color: t } = param;
    const s = f(), { isDarkMode: l } = g();
    switch(n){
        case "Movistar":
            return /* @__PURE__ */ e(v, {
                size: o,
                type: a,
                isDarkMode: l,
                isInverse: s,
                color: t
            });
        case "Vivo":
        case "Vivo-new":
            return /* @__PURE__ */ e(I, {
                size: o,
                type: a,
                isDarkMode: l,
                isInverse: s,
                color: t
            });
        case "O2":
            return /* @__PURE__ */ e(N, {
                size: o,
                type: a,
                isDarkMode: l,
                isInverse: s,
                color: t
            });
        case "O2-new":
            return /* @__PURE__ */ e(k, {
                size: o,
                type: a,
                isDarkMode: l,
                isInverse: s,
                color: t
            });
        case "Telefonica":
            return /* @__PURE__ */ e(O, {
                size: o,
                type: a,
                isDarkMode: l,
                isInverse: s,
                color: t
            });
        case "Telefonica-empresas":
            return /* @__PURE__ */ e(E, {
                size: o,
                type: a,
                isDarkMode: l,
                isInverse: s,
                color: t
            });
        case "Blau":
            return /* @__PURE__ */ e(V, {
                size: o,
                type: a,
                isDarkMode: l,
                isInverse: s,
                color: t
            });
        case "Tu":
            return /* @__PURE__ */ e(b, {
                size: o,
                type: a,
                isDarkMode: l,
                isInverse: s,
                color: t
            });
        case "Esimflag":
            return /* @__PURE__ */ e(w, {
                size: o,
                type: a,
                isDarkMode: l,
                isInverse: s,
                color: t
            });
        default:
            return /* @__PURE__ */ e(u, {});
    }
}, m = (o)=>{
    const n = d(o.dataAttributes, "Logo");
    return o.to || o.href || o.onPress ? /* @__PURE__ */ e(L, _object_spread({}, o)) : /* @__PURE__ */ e(r.Suspense, {
        fallback: /* @__PURE__ */ e("div", {
            className: h,
            style: _object_spread_props(_object_spread({}, y(T(o.size))), {
                width: 1
            })
        }),
        children: /* @__PURE__ */ e("div", _object_spread_props(_object_spread({
            className: p
        }, n), {
            children: o.children
        }))
    });
}, H = (_param)=>{
    var { size: o = i, type: n = "isotype", color: a } = _param, t = _object_without_properties(_param, [
        "size",
        "type",
        "color"
    ]);
    const { skinName: s } = g();
    return /* @__PURE__ */ e(m, _object_spread_props(_object_spread({
        size: o
    }, t), {
        children: /* @__PURE__ */ e(c, {
            skinName: s,
            type: n,
            size: o,
            color: a
        })
    }));
}, _ = (_param)=>{
    var { size: o = i, type: n = "isotype", color: a } = _param, t = _object_without_properties(_param, [
        "size",
        "type",
        "color"
    ]);
    return /* @__PURE__ */ e(m, _object_spread_props(_object_spread({
        size: o
    }, t), {
        children: /* @__PURE__ */ e(c, {
            skinName: "Movistar",
            type: n,
            size: o,
            color: a
        })
    }));
}, j = (_param)=>{
    var { size: o = i, type: n = "isotype", color: a } = _param, t = _object_without_properties(_param, [
        "size",
        "type",
        "color"
    ]);
    return /* @__PURE__ */ e(m, _object_spread_props(_object_spread({
        size: o
    }, t), {
        children: /* @__PURE__ */ e(c, {
            skinName: "Vivo",
            type: n,
            size: o,
            color: a
        })
    }));
}, G = (_param)=>{
    var { size: o = i, type: n = "isotype", color: a } = _param, t = _object_without_properties(_param, [
        "size",
        "type",
        "color"
    ]);
    return /* @__PURE__ */ e(m, _object_spread_props(_object_spread({
        size: o
    }, t), {
        children: /* @__PURE__ */ e(c, {
            skinName: "O2",
            type: n,
            size: o,
            color: a
        })
    }));
}, R = (_param)=>{
    var { size: o = i, type: n = "isotype", color: a } = _param, t = _object_without_properties(_param, [
        "size",
        "type",
        "color"
    ]);
    return /* @__PURE__ */ e(m, _object_spread_props(_object_spread({
        size: o
    }, t), {
        children: /* @__PURE__ */ e(c, {
            skinName: "O2-new",
            type: n,
            size: o,
            color: a
        })
    }));
}, S = (_param)=>{
    var { size: o = i, type: n = "isotype", color: a } = _param, t = _object_without_properties(_param, [
        "size",
        "type",
        "color"
    ]);
    return /* @__PURE__ */ e(m, _object_spread_props(_object_spread({
        size: o
    }, t), {
        children: /* @__PURE__ */ e(c, {
            skinName: "Telefonica",
            type: n,
            size: o,
            color: a
        })
    }));
}, U = (_param)=>{
    var { size: o = i, type: n = "isotype", color: a } = _param, t = _object_without_properties(_param, [
        "size",
        "type",
        "color"
    ]);
    return /* @__PURE__ */ e(m, _object_spread_props(_object_spread({
        size: o
    }, t), {
        children: /* @__PURE__ */ e(c, {
            skinName: "Telefonica-empresas",
            type: n,
            size: o,
            color: a
        })
    }));
}, X = (_param)=>{
    var { size: o = i, type: n = "isotype", color: a } = _param, t = _object_without_properties(_param, [
        "size",
        "type",
        "color"
    ]);
    return /* @__PURE__ */ e(m, _object_spread_props(_object_spread({
        size: o
    }, t), {
        children: /* @__PURE__ */ e(c, {
            skinName: "Blau",
            type: n,
            size: o,
            color: a
        })
    }));
}, q = (_param)=>{
    var { size: o = i, type: n = "isotype", color: a } = _param, t = _object_without_properties(_param, [
        "size",
        "type",
        "color"
    ]);
    return /* @__PURE__ */ e(m, _object_spread_props(_object_spread({
        size: o
    }, t), {
        children: /* @__PURE__ */ e(c, {
            skinName: "Tu",
            type: n,
            size: o,
            color: a
        })
    }));
}, J = (_param)=>{
    var { size: o = i, type: n = "isotype", color: a } = _param, t = _object_without_properties(_param, [
        "size",
        "type",
        "color"
    ]);
    return /* @__PURE__ */ e(m, _object_spread_props(_object_spread({
        size: o
    }, t), {
        children: /* @__PURE__ */ e(c, {
            skinName: "Esimflag",
            type: n,
            size: o,
            color: a
        })
    }));
};
export { X as BlauLogo, J as EsimflagLogo, H as Logo, _ as MovistarLogo, G as O2Logo, R as O2NewLogo, U as TelefonicaEmpresasLogo, S as TelefonicaLogo, q as TuLogo, j as VivoLogo };
