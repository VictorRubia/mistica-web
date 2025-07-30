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
const i = (_param)=>{
    var { color: e, size: r = 24 } = _param, l = _object_without_properties(_param, [
        "color",
        "size"
    ]);
    const t = (0, _themevariantcontext.useIsInverseOrMediaVariant)(), a = e !== null && e !== void 0 ? e : t ? _skincontractcssmistica.vars.colors.inverse : _skincontractcssmistica.vars.colors.neutralHigh;
    return /* @__PURE__ */ (0, _jsxruntime.jsx)("svg", _object_spread_props(_object_spread({
        width: r,
        height: r,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, l), {
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
            fill: a,
            d: "M21.06 5.855c-.564-.644-1.404-.972-2.505-.972H5.446c-1.098 0-1.941.328-2.504.972-.521.6-.787 1.468-.787 2.583v4.938c0 1.115.266 1.984.787 2.583.563.644 1.403.972 2.504.972h13.11c1.097 0 1.94-.328 2.503-.97.524-.599.788-1.467.788-2.582V8.438c0-1.115-.267-1.983-.788-2.583m.753 12.698c0 .308-.252.56-.56.56H2.749a.56.56 0 0 1-.56-.56c0-.308.252-.56.56-.56h18.504c.308 0 .56.252.56.56M11.16 10.645q.03.248 0 .496l1.978.989q.034-.037.073-.076.362-.342.994-.344.632 0 .995.344c.254.241.383.591.383 1.04 0 .428-.12.77-.355 1.008-.236.238-.591.372-1.023.372s-.784-.128-1.022-.372-.353-.58-.353-1.008q0-.093.008-.177l-2.02-1.011c-.237.24-.588.367-1.016.367s-.784-.13-1.023-.373q-.356-.366-.355-1.008c0-.448.129-.798.383-1.04.241-.226.575-.344.995-.344q.631 0 .994.345l.025.025 2.017-1.009a2 2 0 0 1-.008-.179c0-.448.129-.798.384-1.04.24-.226.574-.344.994-.344q.631 0 .994.345c.255.24.384.59.384 1.04 0 .428-.12.77-.356 1.008-.235.238-.59.372-1.022.372-.431 0-.784-.129-1.022-.372a.2.2 0 0 1-.032-.03l-.013-.015z"
        })
    }));
}, m = i;
