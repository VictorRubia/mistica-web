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
const _hooks = require("../../hooks.js");
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
const v = (_param)=>{
    var { color: l, size: e = 24 } = _param, o = _object_without_properties(_param, [
        "color",
        "size"
    ]);
    const t = (0, _themevariantcontext.useIsInverseOrMediaVariant)(), r = l !== null && l !== void 0 ? l : t ? _skincontractcssmistica.vars.colors.inverse : _skincontractcssmistica.vars.colors.neutralHigh, { skinName: n } = (0, _hooks.useTheme)();
    return n.match(/^o2-new/i) ? /* @__PURE__ */ (0, _jsxruntime.jsx)("svg", _object_spread_props(_object_spread({
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, o), {
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
            fill: r,
            d: "M21.375 6.734a.37.37 0 0 1 .4-.076c.136.062.22.194.225.341v10.369a.37.37 0 0 1-.371.37.37.37 0 0 1-.254-.104l-5.26-5.126v2.954l5.538 5.59a.56.56 0 0 1 0 .787.55.55 0 0 1-.39.161.55.55 0 0 1-.39-.161L2.162 2.95a.56.56 0 0 1 0-.787.546.546 0 0 1 .78 0l4.433 4.475h8.383c.198 0 .357.161.357.36v4.86zm-6.04 11L4.352 6.643v-.005h-1.8a.36.36 0 0 0-.356.36v10.374c0 .199.16.36.357.36z"
        })
    })) : /* @__PURE__ */ (0, _jsxruntime.jsx)("svg", _object_spread_props(_object_spread({
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, o), {
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
            fill: r,
            d: "M18.512 3.069a.62.62 0 0 0-.877.046L2.382 20.057a.618.618 0 0 0 .463 1.034c.15 0 .339-.069.463-.205l15.25-16.94a.62.62 0 0 0-.046-.874zM14.625 4.74H4.33a2.33 2.33 0 0 0-2.33 2.328v9.868c0 .502.161.968.431 1.35zm-8.38 3.634a.604.604 0 1 1 0 1.21.604.604 0 1 1 0-1.21M20.826 6.941a.8.8 0 0 1 .786.013h-.003a.8.8 0 0 1 .391.682v8.732a.793.793 0 0 1-1.193.683l-3.624-2.026v1.911a2.33 2.33 0 0 1-2.33 2.327H6.314L17.183 7.19v1.787z"
        })
    }));
}, p = v;
