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
const n = (_param)=>{
    var { color: e, size: o = 24 } = _param, i = _object_without_properties(_param, [
        "color",
        "size"
    ]);
    const l = (0, _themevariantcontext.useIsInverseOrMediaVariant)(), s = e !== null && e !== void 0 ? e : l ? _skincontractcssmistica.vars.colors.inverse : _skincontractcssmistica.vars.colors.neutralHigh;
    return /* @__PURE__ */ (0, _jsxruntime.jsx)("svg", _object_spread_props(_object_spread({
        width: o,
        height: o,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, i), {
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
            fill: s,
            d: "M6.968 6.582c0-2.792 1.552-4.332 4.372-4.332 1.86 0 3.169.672 3.843 1.929l-8.215 8.956zM5.112 14.156a.82.82 0 0 0-.824-.816.817.817 0 1 0 0 1.635.82.82 0 0 0 .824-.819M18.39 13.34a.817.817 0 1 0 0 1.635.82.82 0 0 0 .825-.819.82.82 0 0 0-.825-.816M14.726 18.877a.96.96 0 0 0-.965.958c0 .527.43.955.965.957.533 0 .966-.43.966-.957a.963.963 0 0 0-.966-.958M16.459 17.556c0-.527.43-.957.966-.957.532 0 .965.43.965.957a.963.963 0 0 1-.965.958.965.965 0 0 1-.966-.958M7.953 18.877a.96.96 0 0 0-.966.958c0 .527.43.955.966.957.532 0 .965-.43.965-.957a.963.963 0 0 0-.965-.958M10.396 20.793c0-.53.433-.958.966-.958s.965.43.965.958a.963.963 0 0 1-.965.957.965.965 0 0 1-.966-.957M11.336 17.645c2.823 0 4.372-1.54 4.372-4.333V8.34l-7.56 8.243c.739.699 1.812 1.065 3.185 1.065zM18.21 2.456a.545.545 0 0 1 .758-.04.52.52 0 0 1 .04.745L5.113 18.314a.57.57 0 0 1-.4.175.54.54 0 0 1-.359-.136.52.52 0 0 1-.04-.744z"
        })
    }));
}, h = n;
