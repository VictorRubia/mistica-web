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
    var { color: t, size: o = 24 } = _param, i = _object_without_properties(_param, [
        "color",
        "size"
    ]);
    const e = (0, _themevariantcontext.useIsInverseOrMediaVariant)(), r = t !== null && t !== void 0 ? t : e ? _skincontractcssmistica.vars.colors.inverse : _skincontractcssmistica.vars.colors.neutralHigh;
    return /* @__PURE__ */ (0, _jsxruntime.jsxs)("svg", _object_spread_props(_object_spread({
        width: o,
        height: o,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, i), {
        children: [
            /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
                fill: r,
                d: "M11.475 5.052c-.229 0-.545.062-.821.21a.49.49 0 0 1-.673-.228.54.54 0 0 1 .217-.708A2.8 2.8 0 0 1 11.475 4c1.375 0 2.496 1.213 2.496 2.685 0 1.454-1.058 2.685-2.448 2.685H2.5a.513.513 0 0 1-.5-.526c0-.29.224-.526.5-.526h9.023c.786 0 1.448-.703 1.448-1.633 0-.913-.695-1.633-1.496-1.633"
            }),
            /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
                fill: r,
                d: "M17.551 6.607a2.36 2.36 0 0 1 1.096-.258C19.916 6.35 21 7.485 21 8.912c0 1.426-1.084 2.562-2.353 2.562H2.504c-.276 0-.5.236-.5.526s.224.526.5.526h16.143c1.843 0 3.353-1.63 3.353-3.614 0-1.985-1.51-3.615-3.353-3.615a3.3 3.3 0 0 0-1.525.36.54.54 0 0 0-.237.701.49.49 0 0 0 .666.25M2.508 14.63c-.276 0-.5.236-.5.526s.224.526.5.526h11.327c.8 0 1.495.72 1.495 1.633s-.694 1.633-1.495 1.633c-.195 0-.482-.069-.81-.272a.486.486 0 0 0-.684.187c-.14.25-.06.572.177.72.455.281.915.417 1.317.417 1.375 0 2.494-1.214 2.494-2.685s-1.12-2.685-2.494-2.685z"
            })
        ]
    }));
}, p = l;
