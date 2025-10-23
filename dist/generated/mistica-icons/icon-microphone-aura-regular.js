"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return h;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _themevariantcontext = require("../../theme-variant-context.js");
const _skincontractcssmistica = require("../../skins/skin-contract.css-mistica.js");
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
const i = (_param)=>{
    var { color: a, size: r = 24 } = _param, n = _object_without_properties(_param, [
        "color",
        "size"
    ]);
    const s = (0, _themevariantcontext.useIsInverseOrMediaVariant)(), t = a !== null && a !== void 0 ? a : s ? _skincontractcssmistica.vars.colors.inverse : _skincontractcssmistica.vars.colors.neutralHigh;
    return /* @__PURE__ */ (0, _jsxruntime.jsx)("svg", _object_spread_props(_object_spread({
        width: r,
        height: r,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, n), {
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
            fill: t,
            d: "M11.998 2.155c2.921 0 4.529 1.61 4.529 4.532v6.72c0 2.922-1.608 4.532-4.53 4.532-2.921 0-4.529-1.61-4.529-4.532v-6.72c0-2.921 1.608-4.532 4.53-4.532m3.308 11.252v-6.72c0-2.227-1.082-3.31-3.308-3.31s-3.309 1.08-3.309 3.31v6.72c0 2.227 1.082 3.311 3.309 3.311 2.226 0 3.308-1.084 3.308-3.31m-2.33 7.48a.957.957 0 0 0-.956-.959.957.957 0 0 0 0 1.913.956.956 0 0 0 .955-.955m2.372-1.914a.956.956 0 1 1-.003 1.913.956.956 0 0 1 .003-1.913m3.627-1.325a.956.956 0 0 0-1.91 0 .956.956 0 0 0 1.91 0m0-4.21a.814.814 0 1 1 0 1.63.814.814 0 1 1 0-1.63m-9.372 6.49a.956.956 0 1 0-1.913.002.956.956 0 0 0 1.913-.002m-3.628-3.235a.956.956 0 0 1 0 1.91.956.956 0 0 1 0-1.91M5.02 15.07a.814.814 0 0 0 .815-.815.814.814 0 1 0-.815.815"
        })
    }));
}, h = i;
