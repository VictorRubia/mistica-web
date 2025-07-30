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
const a = (_param)=>{
    var { color: r, size: o = 24 } = _param, s = _object_without_properties(_param, [
        "color",
        "size"
    ]);
    const i = (0, _themevariantcontext.useIsInverseOrMediaVariant)(), l = r !== null && r !== void 0 ? r : i ? _skincontractcssmistica.vars.colors.inverse : _skincontractcssmistica.vars.colors.neutralHigh;
    return /* @__PURE__ */ (0, _jsxruntime.jsx)("svg", _object_spread_props(_object_spread({
        width: o,
        height: o,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, s), {
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
            fill: l,
            d: "M20.889 3.11c.641.639.955 1.535.955 2.737v12.305c0 1.216-.314 2.115-.964 2.754-.644.63-1.549.938-2.764.938h-6.21c-1.219 0-2.121-.308-2.762-.938-.577-.566-.888-1.34-.953-2.359v-.549q-.026 0-.054.002H8.08c-3.742 0-5.924-1.87-5.924-5.867 0-4 2.182-5.872 5.924-5.872a1 1 0 0 1 .101.003v-.417c0-1.185.314-2.076.955-2.72.653-.653 1.558-.972 2.77-.972h6.21c1.222.003 2.13.314 2.774.955M8.082 16.796c3.213 0 4.709-1.481 4.709-4.663s-1.496-4.667-4.709-4.667c-3.21 0-4.706 1.482-4.706 4.667 0 3.182 1.496 4.663 4.706 4.663m5.877 1.208c0 .319.092.577.274.759.185.188.454.285.779.285s.594-.097.779-.285q.274-.279.274-.76c0-.655-.392-1.047-1.053-1.047-.658 0-1.053.392-1.053 1.048M6.26 9.3c.336 0 .608.269.608.602v4.711a.607.607 0 0 1-.608.605.605.605 0 0 1-.608-.605V9.906c0-.334.275-.605.608-.605m4.06.588a.606.606 0 0 0-.609-.602.604.604 0 0 0-.608.602V14.6c0 .337.272.605.608.605a.607.607 0 0 0 .608-.605z"
        })
    }));
}, m = a;
