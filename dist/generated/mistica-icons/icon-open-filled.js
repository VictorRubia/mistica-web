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
const n = (_param)=>{
    var { color: o, size: a = 24 } = _param, r = _object_without_properties(_param, [
        "color",
        "size"
    ]);
    const e = (0, _themevariantcontext.useIsInverseOrMediaVariant)(), h = o !== null && o !== void 0 ? o : e ? _skincontractcssmistica.vars.colors.inverse : _skincontractcssmistica.vars.colors.neutralHigh;
    return /* @__PURE__ */ (0, _jsxruntime.jsx)("svg", _object_spread_props(_object_spread({
        width: a,
        height: a,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, r), {
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
            fill: h,
            d: "m21.841 19.458-.02-5.812c.04-.717-.168-1.339-.593-1.796a2.26 2.26 0 0 0-1.23-.655L13.7 4.915c.129-.258.207-.543.207-.852a1.913 1.913 0 0 0-1.91-1.913c-1.053 0-1.91.857-1.91 1.913 0 .309.08.594.21.852l-6.289 6.294a2.36 2.36 0 0 0-1.854 2.317l.02 5.812c-.04.717.167 1.336.593 1.793.423.45 1.045.703 1.754.708l14.946-.002a2.37 2.37 0 0 0 1.678-.698 2.36 2.36 0 0 0 .695-1.68M11.998 3.355a.71.71 0 1 1-.002 1.419.71.71 0 0 1 .002-1.42m-6.227 7.79 5.375-5.381c.258.128.544.21.852.21s.597-.082.854-.21l5.392 5.378zm11.955 6.678c0 .22-.18.4-.395.397h-.1a.4.4 0 0 1-.334-.179l-1.064-1.614v1.393a.4.4 0 0 1-.4.4h-.124a.4.4 0 0 1-.4-.4v-2.986a.4.4 0 0 1 .4-.4h.095c.135 0 .258.07.333.178l1.068 1.617v-1.392a.4.4 0 0 1 .4-.401h.12c.222 0 .401.176.401.4zm-3.339-.118v.118c0 .22-.179.4-.4.403h-1.47a.4.4 0 0 1-.401-.4v-2.987a.4.4 0 0 1 .4-.4h1.426c.123 0 .238.056.314.148a.41.41 0 0 1 .078.34l-.025.117a.404.404 0 0 1-.392.313h-.871v.49h.66a.4.4 0 0 1 .401.401v.118a.4.4 0 0 1-.4.4h-.662v.538h.942a.4.4 0 0 1 .4.4m-3.07-1.028c-.204.235-.504.358-.885.358h-.39v.788a.4.4 0 0 1-.4.4h-.131a.4.4 0 0 1-.401-.4v-2.987a.4.4 0 0 1 .4-.4h.83c.428 0 .74.11.952.336q.328.345.328.964c0 .406-.101.711-.303.94m-2.75-.342c0 1.698-.922 1.95-1.471 1.95-.552 0-1.473-.255-1.473-1.95 0-1.7.921-1.955 1.473-1.955.549 0 1.47.252 1.47 1.955M7.096 15.31c.185 0 .53 0 .53 1.022 0 1.014-.331 1.014-.53 1.014s-.532 0-.532-1.014c0-1.022.333-1.022.532-1.022m3.504.092s-.053-.047-.277-.047h-.283v.762h.336c.191 0 .215-.028.235-.05.03-.034.065-.093.065-.323 0-.188-.04-.3-.076-.342"
        })
    }));
}, m = n;
