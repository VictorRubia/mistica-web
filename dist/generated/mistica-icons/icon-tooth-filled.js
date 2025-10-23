"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return f;
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
const s = (_param)=>{
    var { color: e, size: o = 24 } = _param, t = _object_without_properties(_param, [
        "color",
        "size"
    ]);
    const a = (0, _themevariantcontext.useIsInverseOrMediaVariant)(), c = e !== null && e !== void 0 ? e : a ? _skincontractcssmistica.vars.colors.inverse : _skincontractcssmistica.vars.colors.neutralHigh;
    return /* @__PURE__ */ (0, _jsxruntime.jsx)("svg", _object_spread_props(_object_spread({
        width: o,
        height: o,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, t), {
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
            fill: c,
            d: "M15.586 21.85h-.114c-.157 0-.275-.04-.348-.065a1.76 1.76 0 0 1-.756-.572 6 6 0 0 1-.485-.748l-.075-.165a17 17 0 0 1-.317-.804c-.263-.694-1.022-2.692-1.496-3.213-.473.521-1.23 2.521-1.493 3.213-.145.387-.24.633-.314.796l-.008.039-.073.134a5.7 5.7 0 0 1-.49.754 1.7 1.7 0 0 1-.717.552 1.1 1.1 0 0 1-.37.075h-.112c-.157 0-.274-.039-.347-.064a1.74 1.74 0 0 1-.754-.572 5.5 5.5 0 0 1-.423-.644l-.044-.075a20 20 0 0 1-1.407-3.07 21 21 0 0 1-.714-2.289c-.042-.16-.092-.367-.148-.59l-.028-.116c-1.025-1.784-1.751-3.554-2.16-5.26-.583-2.44-.078-4.488 1.42-5.76.857-.736 2.023-1.176 3.28-1.24 1.294-.07 2.639.252 3.874.938.334.188.67.378 1.031.591a83 83 0 0 1 1.03-.588c1.236-.686 2.583-1.011 3.88-.941 1.255.064 2.42.504 3.28 1.243 1.496 1.272 2 3.317 1.418 5.757-.41 1.706-1.137 3.473-2.16 5.26l-.025.098c-.056.233-.106.446-.154.617a21 21 0 0 1-.714 2.282 20 20 0 0 1-1.39 3.04l-.058.1a6 6 0 0 1-.43.65 1.7 1.7 0 0 1-.716.552.9.9 0 0 1-.373.084"
        })
    }));
}, f = s;
