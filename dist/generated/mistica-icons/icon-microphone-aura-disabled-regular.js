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
    var { color: e, size: a = 24 } = _param, c = _object_without_properties(_param, [
        "color",
        "size"
    ]);
    const s = (0, _themevariantcontext.useIsInverseOrMediaVariant)(), i = e !== null && e !== void 0 ? e : s ? _skincontractcssmistica.vars.colors.inverse : _skincontractcssmistica.vars.colors.neutralHigh;
    return /* @__PURE__ */ (0, _jsxruntime.jsx)("svg", _object_spread_props(_object_spread({
        width: a,
        height: a,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, c), {
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
            fill: i,
            d: "M20.072 2.403a.544.544 0 0 0-.758.039L5.43 17.604a.52.52 0 0 0 .04.744.54.54 0 0 0 .36.137.57.57 0 0 0 .398-.175L20.112 3.146a.52.52 0 0 0-.04-.744M18.437 16.649a.957.957 0 0 0-.964.947c0 .522.433.947.964.947a.955.955 0 0 0 .965-.947.955.955 0 0 0-.965-.947M9.023 12.1V6.74c0-2.207 1.092-3.28 3.338-3.28s2.611.542 3.061 1.65l.891-.974c-.721-1.23-2.065-1.886-3.954-1.886-2.948 0-4.569 1.594-4.569 4.488v6.702999999999999l1.23-1.344zM12.385 19.853a.96.96 0 0 0-.965.95c0 .525.433.947.964.947a.957.957 0 0 0 .965-.947.96.96 0 0 0-.965-.95M8.98 18.906a.955.955 0 0 0-.964.947c0 .525.432.95.964.95a.96.96 0 0 0 .965-.95.955.955 0 0 0-.965-.947M6.146 14.236a.813.813 0 0 0-.823-.809.815.815 0 0 0-.823.809c0 .447.368.808.823.808a.815.815 0 0 0 .823-.808M15.744 18.906a.957.957 0 0 0-.965.947c0 .522.433.95.964.95a.96.96 0 0 0 .965-.95.955.955 0 0 0-.964-.947M19.399 13.425a.816.816 0 0 0-.823.808c0 .444.367.808.823.808a.815.815 0 0 0 .823-.808.815.815 0 0 0-.823-.808M15.7 13.394c0 2.205-1.093 3.28-3.339 3.28-1.583 0-1.958-.274-2.475-.778l-.832.908c.772.708 1.884 1.08 3.307 1.08 2.948 0 4.569-1.593 4.569-4.487V8.204L15.696 9.55V13.4z"
        })
    }));
}, p = n;
