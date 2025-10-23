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
import { jsxs as h, jsx as r } from "react/jsx-runtime";
import { useIsInverseOrMediaVariant as n } from "../../theme-variant-context.js";
import { vars as i } from "../../skins/skin-contract.css-mistica.js";
const l = (_param)=>{
    var { color: s, size: c = 24 } = _param, t = _object_without_properties(_param, [
        "color",
        "size"
    ]);
    const e = n(), o = s !== null && s !== void 0 ? s : e ? i.colors.inverse : i.colors.neutralHigh;
    return /* @__PURE__ */ h("svg", _object_spread_props(_object_spread({
        width: c,
        height: c,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, t), {
        children: [
            /* @__PURE__ */ r("path", {
                fill: o,
                d: "M8.177 12.365v1.21c0 1.703 1.43 3.083 3.196 3.083h1.256c1.765 0 3.196-1.38 3.196-3.082v-1.211c0-1.702-1.431-3.082-3.196-3.082h-1.256c-1.765 0-3.196 1.38-3.196 3.082m3.196-2.107h1.256c1.206 0 2.184.944 2.184 2.107v1.21c0 1.164-.978 2.108-2.184 2.108h-1.256c-1.206 0-2.184-.944-2.184-2.107v-1.211c0-1.163.978-2.107 2.184-2.107"
            }),
            /* @__PURE__ */ r("path", {
                fill: o,
                d: "M16.372 3H7.644C5.68 3 4.016 4.42 4.016 6.257L4 16.283c0 1.78 1.564 3.169 3.448 3.252v.977c0 .27.226.488.506.488.279 0 .505-.218.505-.488v-.973h7.082v.973c0 .27.226.488.506.488.279 0 .506-.218.506-.488v-.978c1.875-.09 3.43-1.476 3.43-3.25L20 6.256C20 4.42 18.335 3 16.372 3m-.016 15.564H7.628c-1.486 0-2.616-1.06-2.616-2.28l.014-8.708h13.96l-.014 8.708c0 1.221-1.13 2.28-2.616 2.28M5.027 6.6v-.343c0-1.222 1.131-2.28 2.617-2.28l8.728-.001c1.486 0 2.616 1.058 2.616 2.28V6.6z"
            })
        ]
    }));
}, f = l;
export { f as default };
