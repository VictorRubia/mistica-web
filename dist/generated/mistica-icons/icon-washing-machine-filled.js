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
const a = (_param)=>{
    var { color: i, size: c = 24 } = _param, s = _object_without_properties(_param, [
        "color",
        "size"
    ]);
    const n = (0, _themevariantcontext.useIsInverseOrMediaVariant)(), o = i !== null && i !== void 0 ? i : n ? _skincontractcssmistica.vars.colors.inverse : _skincontractcssmistica.vars.colors.neutralHigh;
    return /* @__PURE__ */ (0, _jsxruntime.jsxs)("svg", _object_spread_props(_object_spread({
        width: c,
        height: c,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, s), {
        children: [
            /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
                fill: o,
                d: "M16.229 3c1.915 0 3.585 1.319 3.758 3.107H4.031C4.204 4.319 5.874 3 7.789 3zM9.665 12.433c0-.92.77-1.664 1.72-1.664h1.156c.95 0 1.72.745 1.72 1.664v1.117c0 .918-.77 1.663-1.72 1.663h-1.156c-.95 0-1.72-.745-1.72-1.663z"
            }),
            /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
                fill: o,
                d: "M20 7.566H4.014L4 16.136c0 1.75 1.422 3.118 3.183 3.371v.763c0 .403.338.73.755.73a.74.74 0 0 0 .754-.73v-.72h6.54v.72c0 .403.339.73.755.73a.743.743 0 0 0 .755-.73v-.755c1.79-.23 3.244-1.609 3.244-3.378zM8.156 12.433c0-1.725 1.446-3.124 3.23-3.124h1.155c1.783 0 3.23 1.399 3.23 3.124v1.117c0 1.724-1.447 3.123-3.23 3.123h-1.156c-1.783 0-3.23-1.399-3.23-3.123z"
            })
        ]
    }));
}, f = a;
