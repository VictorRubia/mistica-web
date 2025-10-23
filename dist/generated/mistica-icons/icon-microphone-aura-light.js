"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return p;
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
const n = (_param)=>{
    var { color: t, size: o = 24 } = _param, a = _object_without_properties(_param, [
        "color",
        "size"
    ]);
    const i = (0, _themevariantcontext.useIsInverseOrMediaVariant)(), s = t !== null && t !== void 0 ? t : i ? _skincontractcssmistica.vars.colors.inverse : _skincontractcssmistica.vars.colors.neutralHigh;
    return /* @__PURE__ */ (0, _jsxruntime.jsx)("svg", _object_spread_props(_object_spread({
        width: o,
        height: o,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, a), {
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
            fill: s,
            d: "M11.998 2.155c2.79 0 4.325 1.555 4.325 4.375v6.79c0 2.821-1.535 4.376-4.328 4.376-2.79 0-4.325-1.555-4.325-4.376V6.53c0-2.82 1.538-4.375 4.328-4.375m3.51 11.162V6.53c0-2.355-1.183-3.549-3.51-3.549s-3.51 1.194-3.51 3.55v6.79c0 2.352 1.182 3.548 3.51 3.548s3.51-1.196 3.51-3.552m-2.533 7.558a.96.96 0 0 0-.955-.966.96.96 0 0 0-.955.966.96.96 0 0 0 .955.966.96.96 0 0 0 .955-.966m2.373-1.933a.96.96 0 0 1 .955.966.96.96 0 0 1-.955.967.96.96 0 0 1-.955-.966.96.96 0 0 1 .955-.967m3.627-1.336a.96.96 0 0 0-.955-.966.96.96 0 0 0-.955.966.96.96 0 0 0 .955.966.96.96 0 0 0 .955-.966m0-4.255a.82.82 0 0 1 .815.824.82.82 0 0 1-.815.826.82.82 0 0 1-.815-.826.82.82 0 0 1 .815-.824M9.6 19.908a.96.96 0 0 0-.955-.966.96.96 0 0 0-.955.966.96.96 0 0 0 .955.967.96.96 0 0 0 .955-.966M5.975 16.64a.96.96 0 0 1 .955.966.96.96 0 0 1-.955.966.96.96 0 0 1-.955-.966c0-.532.429-.966.955-.966M5.02 15a.82.82 0 0 0 .815-.825.82.82 0 0 0-.815-.824.82.82 0 0 0-.815.824.82.82 0 0 0 .815.826"
        })
    }));
}, p = n;
