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
const t = (_param)=>{
    var { color: e, size: c = 24 } = _param, h = _object_without_properties(_param, [
        "color",
        "size"
    ]);
    const v = (0, _themevariantcontext.useIsInverseOrMediaVariant)(), l = e !== null && e !== void 0 ? e : v ? _skincontractcssmistica.vars.colors.inverse : _skincontractcssmistica.vars.colors.neutralHigh;
    return /* @__PURE__ */ (0, _jsxruntime.jsxs)("svg", _object_spread_props(_object_spread({
        width: c,
        height: c,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, h), {
        children: [
            /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
                fill: l,
                d: "m20.113 7.803.003.003v-.003zM6.004 11.422H4.732v3.703h.84v-1.277h.597c.487 0 .824-.115 1.04-.359q.276-.306.277-.899c0-.395-.096-.68-.297-.866-.238-.22-.605-.302-1.185-.302m.482 1.653c-.11.1-.222.14-.493.14v.002h-.418v-1.182h.395c.26 0 .418.037.521.13.098.092.14.24.14.439q.001.324-.145.47M8.088 11.422H9.23c.703 0 1.17.11 1.479.417.297.292.45.754.45 1.42 0 .673-.145 1.138-.45 1.451-.278.283-.703.418-1.365.418H8.088zm1.997 2.759c.146-.216.196-.465.196-.922 0-.532-.081-.781-.26-.974-.169-.18-.418-.244-.83-.244h-.26v2.47h.358c.379 0 .65-.114.796-.33M11.805 11.422h2.442l-.064.61h-1.532v.9h1.213v.633H12.65v1.56h-.846z"
            }),
            /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
                fill: l,
                d: "M21.794 7.912a.6.6 0 0 1 .047.238v12.306c0 .75-.644 1.383-1.409 1.383H8.25c-.75 0-1.409-.647-1.409-1.383l.034-2.77h-2.3a2.427 2.427 0 0 1-2.42-2.427v-4.095a2.427 2.427 0 0 1 2.42-2.426h2.266V3.534c0-.726.673-1.384 1.41-1.384h7.414c.23 0 .445.087.61.244l5.3 5.132c.11.106.174.243.219.386m-1.681-.11L16 3.82v1.764c0 .659.216 1.213.622 1.608.414.4.997.61 1.692.61zM4.575 16.47h9.846a1.21 1.21 0 0 0 1.207-1.21v-4.096c0-.666-.54-1.21-1.207-1.21H4.575a1.21 1.21 0 0 0-1.207 1.21v4.095c0 .667.54 1.21 1.207 1.21"
            })
        ]
    }));
}, m = t;
