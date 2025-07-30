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
const l = (_param)=>{
    var { color: a, size: c = 24 } = _param, e = _object_without_properties(_param, [
        "color",
        "size"
    ]);
    const i = (0, _themevariantcontext.useIsInverseOrMediaVariant)(), o = a !== null && a !== void 0 ? a : i ? _skincontractcssmistica.vars.colors.inverse : _skincontractcssmistica.vars.colors.neutralHigh, { skinName: r } = (0, _hooks.useTheme)();
    return r.match(/^o2-new/i) ? /* @__PURE__ */ (0, _jsxruntime.jsx)("svg", _object_spread_props(_object_spread({
        width: c,
        height: c,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, e), {
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
            fill: o,
            d: "M8.52 14.039v-8.52C8.52 3.545 10.05 2 12.005 2s3.485 1.546 3.485 3.518v8.52c0 1.973-1.531 3.52-3.485 3.52S8.52 16.01 8.52 14.037m8.257 7.221c0 .408-.33.74-.733.74H7.97a.737.737 0 0 1-.733-.74c0-.408.33-.74.733-.74h3.302v-.796c-2.687-.365-4.772-2.688-4.772-5.5 0-.408.329-.74.733-.74s.732.332.732.74c0 2.247 1.813 4.073 4.035 4.073s4.035-1.83 4.035-4.073c0-.408.328-.74.732-.74s.733.332.733.74c0 2.812-2.08 5.135-4.772 5.5v.797h3.302a.74.74 0 0 1 .747.74m-4.772-5.182c1.15 0 2.02-.877 2.02-2.04v-8.52c0-1.161-.87-2.039-2.02-2.039-1.151 0-2.02.878-2.02 2.04v8.52c0 1.162.869 2.039 2.02 2.039"
        })
    })) : r.match(/^o2/i) ? /* @__PURE__ */ (0, _jsxruntime.jsx)("svg", _object_spread_props(_object_spread({
        width: c,
        height: c,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, e), {
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
            fill: o,
            d: "M12 17.927c1.773 0 3.213-1.494 3.213-3.333v-.74c0-.204-.16-.37-.356-.37a.364.364 0 0 0-.357.37v.74c0 1.432-1.12 2.593-2.5 2.593s-2.5-1.161-2.5-2.593v-9.26C9.5 3.9 10.62 2.74 12 2.74s2.5 1.161 2.5 2.593v4.073c0 .204.16.37.357.37a.364.364 0 0 0 .356-.37V5.333C15.213 3.493 13.773 2 12 2S8.787 3.494 8.787 5.333v9.26c0 1.84 1.44 3.334 3.213 3.334m4.643 3.703c0 .204-.16.37-.356.37H7.713a.364.364 0 0 1-.357-.37c0-.204.16-.37.357-.37h3.926v-1.48l.002-.009.002-.009C9.054 19.572 7 17.329 7 14.594c0-.204.16-.37.356-.37.197 0 .357.166.357.37 0 2.451 1.924 4.447 4.287 4.447s4.287-1.996 4.287-4.447c0-.204.16-.37.357-.37s.356.166.356.37c0 2.736-2.052 4.978-4.643 5.168q0 .003.002.01l.002.009v1.48h3.926c.197 0 .357.165.357.37m-1.787-9.26a.73.73 0 0 1-.713-.74c0-.408.32-.74.713-.74s.713.332.713.74-.32.74-.713.74"
        })
    })) : /* @__PURE__ */ (0, _jsxruntime.jsxs)("svg", _object_spread_props(_object_spread({
        width: c,
        height: c,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, e), {
        children: [
            /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
                fill: o,
                d: "M11.492 17.443h.967c2.336 0 4.23-1.843 4.23-4.116V6.366c0-2.273-1.894-4.116-4.23-4.116h-.967c-2.335 0-4.23 1.843-4.23 4.116v6.961c0 2.273 1.895 4.116 4.23 4.116M7.867 6.366c0-.944.378-1.829 1.06-2.496a3.65 3.65 0 0 1 2.565-1.032h.967c.97 0 1.88.367 2.565 1.032a3.45 3.45 0 0 1 1.06 2.496v6.961c0 .944-.377 1.829-1.06 2.496a3.65 3.65 0 0 1-2.565 1.032h-.967c-.97 0-1.879-.367-2.565-1.032a3.46 3.46 0 0 1-1.06-2.496z"
            }),
            /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
                fill: o,
                d: "M17.817 15.617a.303.303 0 0 0-.396.156c-.176.4-.402.78-.677 1.126a5.22 5.22 0 0 1-4.115 1.967h-1.257a5.24 5.24 0 0 1-4.16-2.026 5 5 0 0 1-.631-1.067.303.303 0 0 0-.396-.156.29.29 0 0 0-.16.385 5.7 5.7 0 0 0 2.71 2.84c.822.409 1.71.615 2.637.615h.302v1.705h-1.172a.3.3 0 0 0-.302.294c0 .162.136.294.302.294h2.946a.3.3 0 0 0 .302-.294.3.3 0 0 0-.302-.294h-1.173v-1.705h.351c1.81 0 3.487-.8 4.595-2.196.308-.386.562-.809.756-1.259a.29.29 0 0 0-.16-.385"
            })
        ]
    }));
}, g = l;
