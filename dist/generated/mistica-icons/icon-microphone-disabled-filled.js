"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return v;
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
    var { color: l, size: o = 24 } = _param, i = _object_without_properties(_param, [
        "color",
        "size"
    ]);
    const s = (0, _themevariantcontext.useIsInverseOrMediaVariant)(), r = l !== null && l !== void 0 ? l : s ? _skincontractcssmistica.vars.colors.inverse : _skincontractcssmistica.vars.colors.neutralHigh;
    return /* @__PURE__ */ (0, _jsxruntime.jsxs)("svg", _object_spread_props(_object_spread({
        width: o,
        height: o,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, i), {
        children: [
            /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
                fill: r,
                d: "M11.273 17.25h.923c2.23 0 4.038-1.854 4.038-4.141V9.722L9.866 16.99c.438.168.911.26 1.407.26M12.196 2.253h-.923c-2.23 0-4.038 1.855-4.038 4.141v6.714a4.2 4.2 0 0 0 .28 1.518l8.47-9.667c-.567-1.582-2.05-2.709-3.79-2.709z"
            }),
            /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
                fill: r,
                d: "M8.498 18.817c.823.43 1.711.647 2.643.647v1.118h-.828a.584.584 0 0 0-.575.589c0 .324.259.588.575.588h2.805a.584.584 0 0 0 .575-.588.584.584 0 0 0-.575-.589h-.829v-1.118h.046c.915 0 1.792-.212 2.606-.63a5.9 5.9 0 0 0 2.753-3.007.594.594 0 0 0-.305-.771.57.57 0 0 0-.753.312q-.235.572-.607 1.062a4.6 4.6 0 0 1-3.691 1.854h-1.197c-.73 0-1.426-.168-2.074-.497l-.79.9q.109.066.224.124zM6.09 15.056a.59.59 0 0 0-.305.771q.095.228.207.447l.834-.947a.573.573 0 0 0-.733-.27zM5.048 20.419a.54.54 0 0 1-.367-.144.564.564 0 0 1-.04-.788L18.815 3.443a.54.54 0 0 1 .774-.041.564.564 0 0 1 .04.787L5.455 20.234a.54.54 0 0 1-.407.185"
            })
        ]
    }));
}, v = n;
