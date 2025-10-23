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
import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { useIsInverseOrMediaVariant as l } from "../../theme-variant-context.js";
import { vars as e } from "../../skins/skin-contract.css-mistica.js";
const t = (_param)=>{
    var { color: s, size: c = 24 } = _param, a = _object_without_properties(_param, [
        "color",
        "size"
    ]);
    const i = l(), r = s !== null && s !== void 0 ? s : i ? e.colors.inverse : e.colors.neutralHigh;
    return /* @__PURE__ */ n("svg", _object_spread_props(_object_spread({
        width: c,
        height: c,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, a), {
        children: [
            /* @__PURE__ */ o("path", {
                fill: r,
                d: "M8.193 12.433c0-1.725 1.446-3.123 3.23-3.123h1.155c1.783 0 3.23 1.398 3.23 3.123v1.117c0 1.724-1.447 3.123-3.23 3.123h-1.155c-1.784 0-3.23-1.399-3.23-3.123zm3.23-1.664c-.95 0-1.72.745-1.72 1.664v1.117c0 .918.77 1.663 1.72 1.663h1.155c.95 0 1.72-.745 1.72-1.663v-1.117c0-.92-.77-1.664-1.72-1.664z"
            }),
            /* @__PURE__ */ o("path", {
                fill: r,
                d: "M16.227 3H7.788C5.766 3 4.016 4.473 4.016 6.415l-.001.568a.7.7 0 0 0 0 .287L4 16.135c0 1.763 1.442 3.138 3.22 3.377v.758c0 .403.339.73.755.73a.74.74 0 0 0 .755-.73v-.72h6.54v.72c0 .403.337.73.754.73a.74.74 0 0 0 .755-.73v-.76c1.771-.244 3.205-1.616 3.205-3.373L20 7.152v-.049l.001-.69C20 4.474 18.25 3 16.227 3m2.264 3.397H5.525c.01-1.016.96-1.937 2.264-1.937h8.438c1.304 0 2.253.92 2.264 1.937M5.523 7.857h12.965l-.013 8.278c0 1.023-.952 1.955-2.264 1.955H7.773c-1.311 0-2.264-.931-2.264-1.954z"
            })
        ]
    }));
}, f = t;
export { f as default };
