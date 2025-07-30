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
const t = (_param)=>{
    var { color: r, size: l = 24 } = _param, e = _object_without_properties(_param, [
        "color",
        "size"
    ]);
    const c = (0, _themevariantcontext.useIsInverseOrMediaVariant)(), s = r !== null && r !== void 0 ? r : c ? _skincontractcssmistica.vars.colors.inverse : _skincontractcssmistica.vars.colors.neutralHigh;
    return /* @__PURE__ */ (0, _jsxruntime.jsx)("svg", _object_spread_props(_object_spread({
        width: l,
        height: l,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, e), {
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
            fill: s,
            d: "m13.429 4.63-.015.034-.03.066-.004.01a11.5 11.5 0 0 1-1.846 2.881 11.6 11.6 0 0 1-3.95 2.931 12.7 12.7 0 0 0-2.031-2.457 8.4 8.4 0 0 0 2.19-1.11 8.6 8.6 0 0 0 2.83-3.4l.03-.068.004-.013q.03-.079.07-.153a1.52 1.52 0 0 1 2.694.029l.027.062.02.045.014.03.008.018c.133.353.13.744-.011 1.095M8.207 16.026a12.7 12.7 0 0 0-2.95 1.346 8.6 8.6 0 0 0-.327-2.294 8.5 8.5 0 0 0-2.386-3.885l-.005-.005-.075-.067-.005-.006A1.516 1.516 0 0 1 3.49 8.511h.023a1.5 1.5 0 0 1 1.073.445 1 1 0 0 0 .064.055c.835.78 1.547 1.68 2.116 2.671l.003.006a11.6 11.6 0 0 1 1.437 4.338M18.866 18.78a8.575 8.575 0 0 1 1.247-5.97 12.7 12.7 0 0 1-3.118-.657 11.58 11.58 0 0 0-.869 8.3c.108.29.302.542.555.721h.002l.013.009.04.027a1.521 1.521 0 0 0 2.304-1.61l-.03-.114a8 8 0 0 1-.144-.707M12.036 19.77c.923.005 1.84.16 2.714.457a12.8 12.8 0 0 1-.302-3.226 11.6 11.6 0 0 0-5.386.115c-1.17.308-2.283.8-3.299 1.455l-.011.008q-.125.079-.26.173a1.5 1.5 0 0 0-.477.692l-.054.21a1.52 1.52 0 0 0 2.402 1.495l.01-.007q.296-.193.61-.36a8.5 8.5 0 0 1 4.016-1.011zM14.556 15.713c.19-1.407.611-2.774 1.245-4.044a12.9 12.9 0 0 1-3.785-2.679 12.9 12.9 0 0 1-3.797 2.687 13 13 0 0 1 1.242 4.031 12.9 12.9 0 0 1 5.095.005M21.558 11.099c.284-.285.444-.67.444-1.073a1.523 1.523 0 0 0-1.395-1.512l-.073-.005h-.015a8.461 8.461 0 0 1-5.991-3.188 12.8 12.8 0 0 1-1.658 2.705 11.6 11.6 0 0 0 4.064 2.734c1.097.435 2.253.698 3.43.78h.017l.025.001q.04.002.08.002c.402 0 .787-.16 1.072-.444"
        })
    }));
}, m = t;
