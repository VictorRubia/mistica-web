"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return m;
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
    var { color: e, size: o = 24 } = _param, l = _object_without_properties(_param, [
        "color",
        "size"
    ]);
    const t = (0, _themevariantcontext.useIsInverseOrMediaVariant)(), a = e !== null && e !== void 0 ? e : t ? _skincontractcssmistica.vars.colors.inverse : _skincontractcssmistica.vars.colors.neutralHigh;
    return /* @__PURE__ */ (0, _jsxruntime.jsx)("svg", _object_spread_props(_object_spread({
        width: o,
        height: o,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, l), {
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
            fill: a,
            d: "M2.001 19.468V4.53C1.983 3.085 3.244 2.058 4.63 2h14.742c1.385.058 2.646 1.085 2.628 2.53v14.938c.018 1.445-1.243 2.472-2.628 2.53H4.629c-1.385-.058-2.646-1.085-2.628-2.53M7.967 5.475a.75.75 0 0 0-1.06.008l-1.43 1.452a.75.75 0 1 0 1.068 1.053l1.43-1.452a.75.75 0 0 0-.008-1.06m3.18 2.325a.75.75 0 0 0-1.074-1.048L7.19 9.705a.75.75 0 0 0 1.073 1.048z"
        })
    }));
}, m = n;
