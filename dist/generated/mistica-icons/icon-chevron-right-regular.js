"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return g;
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
const s = (_param)=>{
    var { color: n, size: e = 24 } = _param, t = _object_without_properties(_param, [
        "color",
        "size"
    ]);
    const a = (0, _themevariantcontext.useIsInverseOrMediaVariant)(), l = n !== null && n !== void 0 ? n : a ? _skincontractcssmistica.vars.colors.inverse : _skincontractcssmistica.vars.colors.neutralHigh, { skinName: o } = (0, _hooks.useTheme)();
    return o.match(/^blau/i) ? /* @__PURE__ */ (0, _jsxruntime.jsx)("svg", _object_spread_props(_object_spread({
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, t), {
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
            fill: l,
            d: "m18 12.001-7.2-7.68a1 1 0 0 0-1.42-.05c-.4.38-.43 1.02-.05 1.42l5.91 6.31-5.91 6.31a1 1 0 0 0 .05 1.42 1 1 0 0 0 1.42-.05z"
        })
    })) : o.match(/^o2-new/i) ? /* @__PURE__ */ (0, _jsxruntime.jsx)("svg", _object_spread_props(_object_spread({
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, t), {
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
            fill: l,
            d: "M17.572 12.001c0-.25-.09-.49-.27-.69l-6.56-6.99a1 1 0 0 0-1.42-.05c-.4.38-.43 1.02-.05 1.42l5.91 6.31-5.91 6.31a1 1 0 0 0 .05 1.42 1 1 0 0 0 1.42-.05l6.56-6.99c.18-.19.27-.44.27-.69"
        })
    })) : o.match(/^o2/i) ? /* @__PURE__ */ (0, _jsxruntime.jsx)("svg", _object_spread_props(_object_spread({
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, t), {
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
            fill: l,
            d: "M9.2 18.734a.79.79 0 0 0 0 1.049c.265.29.696.29.962 0l6.639-7.238A.78.78 0 0 0 17 12a.78.78 0 0 0-.2-.545l-6.638-7.238a.64.64 0 0 0-.963 0 .79.79 0 0 0 0 1.05L15.376 12z"
        })
    })) : /* @__PURE__ */ (0, _jsxruntime.jsx)("svg", _object_spread_props(_object_spread({
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, t), {
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
            fill: l,
            d: "M18.455 12c0 .28-.11.54-.32.73l-7.437 6.996c-.4.38-1.04.36-1.421-.04-.38-.4-.36-1.041.04-1.421l6.656-6.266-6.656-6.265a1 1 0 0 1-.04-1.422c.38-.4 1.02-.42 1.421-.04l7.437 6.996c.2.19.32.46.32.731"
        })
    }));
}, g = s;
