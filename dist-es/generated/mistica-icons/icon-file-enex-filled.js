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
import { jsxs as s, jsx as e } from "react/jsx-runtime";
import { useIsInverseOrMediaVariant as t } from "../../theme-variant-context.js";
import { vars as v } from "../../skins/skin-contract.css-mistica.js";
const c = (_param)=>{
    var { color: o, size: h = 24 } = _param, r = _object_without_properties(_param, [
        "color",
        "size"
    ]);
    const i = t(), l = o !== null && o !== void 0 ? o : i ? v.colors.inverse : v.colors.neutralHigh;
    return /* @__PURE__ */ s("svg", _object_spread_props(_object_spread({
        width: h,
        height: h,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, r), {
        children: [
            /* @__PURE__ */ e("path", {
                fill: l,
                d: "m20.115 7.803.003.003v-.003zM3.978 11.61h2.2l-.057.537h-1.4v.79h1.12v.558h-1.12v.832h1.481v.537H3.978zM7.3 11.61l1.544 2.086V11.61h.653v3.257H8.9L7.404 12.89v1.977h-.653V11.61zM12.404 11.61h-2.199v3.255h2.224v-.538h-1.482v-.832h1.12v-.558h-1.12v-.79h1.401zM13.777 13.243l-.995-1.633h.776l.647 1.075.591-1.075h.79l-1.067 1.593 1.04 1.662h-.824l-.647-1.104-.586 1.104h-.804z"
            }),
            /* @__PURE__ */ e("path", {
                fill: l,
                d: "M21.793 7.912q.047.11.048.238v12.306c0 .75-.644 1.383-1.409 1.383H8.25c-.75 0-1.409-.647-1.409-1.383l.034-2.77h-2.3a2.427 2.427 0 0 1-2.42-2.427v-4.095a2.427 2.427 0 0 1 2.42-2.426h2.266V3.534c0-.726.672-1.384 1.409-1.384h7.415c.23 0 .445.087.61.244l5.3 5.132c.112.109.176.243.218.386m-1.678-.11L16.004 3.82v1.764c0 .659.215 1.213.621 1.608.415.4.997.61 1.692.61zM4.575 16.47h10.18a1.21 1.21 0 0 0 1.206-1.21v-4.096c0-.666-.54-1.21-1.207-1.21H4.575a1.21 1.21 0 0 0-1.207 1.21v4.095c0 .667.54 1.21 1.207 1.21"
            })
        ]
    }));
}, m = c;
export { m as default };
