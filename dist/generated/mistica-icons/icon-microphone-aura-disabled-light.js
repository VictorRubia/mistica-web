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
const l = (_param)=>{
    var { color: e, size: a = 24 } = _param, i = _object_without_properties(_param, [
        "color",
        "size"
    ]);
    const t = (0, _themevariantcontext.useIsInverseOrMediaVariant)(), s = e !== null && e !== void 0 ? e : t ? _skincontractcssmistica.vars.colors.inverse : _skincontractcssmistica.vars.colors.neutralHigh;
    return /* @__PURE__ */ (0, _jsxruntime.jsx)("svg", _object_spread_props(_object_spread({
        width: a,
        height: a,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, i), {
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
            fill: s,
            d: "M18.52 13.34a.819.819 0 0 0 0 1.635.817.817 0 0 0 0-1.635M14.896 18.877a.957.957 0 1 0 0 1.913.957.957 0 0 0 0-1.913M17.568 16.597a.957.957 0 1 0 0 1.913.957.957 0 0 0 0-1.913M11.566 19.834a.957.957 0 1 0 .001 1.914.957.957 0 0 0 0-1.914M5.382 14.157a.816.816 0 1 0-1.632 0 .816.816 0 0 0 1.632 0M8.19 18.877a.957.957 0 1 0 0 1.913.957.957 0 0 0 0-1.913M19.406 2.322a.28.28 0 0 0-.396.022L4.774 18.024a.273.273 0 0 0 .023.392c.053.047.12.072.188.072a.3.3 0 0 0 .207-.092L19.428 2.713a.273.273 0 0 0-.022-.391M15.357 13.513a3.3 3.3 0 0 1-.99 2.368c-.64.633-1.487.98-2.392.98h-.867a3.38 3.38 0 0 1-2.64-1.252l-.378.416a3.95 3.95 0 0 0 3.018 1.391h.867c2.176 0 3.943-1.746 3.943-3.903V7.408l-.561.619v5.489zM7.752 13.91a3 3 0 0 1-.022-.398V6.161c0-.894.35-1.736.99-2.369a3.37 3.37 0 0 1 2.392-.98h.867a3.38 3.38 0 0 1 3.334 2.774l.458-.505a3.94 3.94 0 0 0-3.79-2.827h-.866c-2.176 0-3.943 1.747-3.943 3.904v7.354c0 .317.04.625.11.92l.473-.523z"
        })
    }));
}, p = l;
