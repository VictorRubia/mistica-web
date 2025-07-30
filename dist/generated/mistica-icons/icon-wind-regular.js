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
    var { color: e, size: r = 24 } = _param, t = _object_without_properties(_param, [
        "color",
        "size"
    ]);
    const i = (0, _themevariantcontext.useIsInverseOrMediaVariant)(), o = e !== null && e !== void 0 ? e : i ? _skincontractcssmistica.vars.colors.inverse : _skincontractcssmistica.vars.colors.neutralHigh;
    return /* @__PURE__ */ (0, _jsxruntime.jsxs)("svg", _object_spread_props(_object_spread({
        width: r,
        height: r,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, t), {
        children: [
            /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
                fill: o,
                d: "M11.473 5.528c-.193 0-.376.041-.538.114a.745.745 0 0 1-.989-.391.77.77 0 0 1 .385-1.007c.35-.157.737-.244 1.142-.244 1.518 0 2.744 1.295 2.744 2.854 0 1.535-1.156 2.854-2.697 2.854H2.75A.757.757 0 0 1 2 8.944c0-.422.336-.764.75-.764h8.77c.634 0 1.197-.552 1.197-1.326 0-.75-.587-1.326-1.244-1.326"
            }),
            /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
                fill: o,
                d: "M17.574 6.944c.254-.103.53-.16.822-.16 1.126 0 2.104.98 2.104 2.226 0 1.247-.978 2.226-2.104 2.226H2.75A.757.757 0 0 0 2 12c0 .422.336.764.75.764h15.647c1.986 0 3.603-1.698 3.603-3.754s-1.617-3.754-3.604-3.754c-.486 0-.95.095-1.376.268a.77.77 0 0 0-.42.992c.153.392.59.584.974.428M2.75 14.292a.757.757 0 0 0-.75.764c0 .422.336.764.75.764h11.082c.657 0 1.245.576 1.245 1.326 0 .749-.589 1.326-1.246 1.326-.193 0-.374-.041-.537-.114a.745.745 0 0 0-.988.391.77.77 0 0 0 .384 1.007c.35.157.736.244 1.14.244 1.519 0 2.747-1.294 2.747-2.854s-1.227-2.854-2.745-2.854z"
            })
        ]
    }));
}, p = l;
