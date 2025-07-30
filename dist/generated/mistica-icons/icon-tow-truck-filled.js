"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return d;
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
    var { color: l, size: c = 24 } = _param, e = _object_without_properties(_param, [
        "color",
        "size"
    ]);
    const s = (0, _themevariantcontext.useIsInverseOrMediaVariant)(), t = l !== null && l !== void 0 ? l : s ? _skincontractcssmistica.vars.colors.inverse : _skincontractcssmistica.vars.colors.neutralHigh;
    return /* @__PURE__ */ (0, _jsxruntime.jsx)("svg", _object_spread_props(_object_spread({
        width: c,
        height: c,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, e), {
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
            fill: t,
            d: "M17.717 6.241c.437.605 2.997 3.992 3.333 4.426.28.361.804 1.04.796 1.829v3.342c0 .571-.252 1.154-.695 1.594-.44.44-1.025.692-1.6.692h-.223c-.454 1.05-1.446 1.669-2.821 1.669s-2.367-.616-2.82-1.67h-3.86c-.455 1.05-1.446 1.67-2.822 1.67-1.392 0-2.394-.63-2.84-1.709a2.34 2.34 0 0 1-1.308-.652c-.443-.44-.695-1.02-.695-1.594v-4.4a.6.6 0 0 1 .603-.6h4.154L5.154 7.286 5.15 8.975c.006.028.04.69-.4 1.165-.182.2-.521.44-1.076.443h-.014c-.583 0-.927-.247-1.115-.457-.45-.501-.384-1.201-.375-1.28a.604.604 0 0 1 1.199.14c-.009.093.01.27.075.34.027.028.068.032.117.037.032.004.067.007.105.018q.148 0 .198-.053c.076-.081.087-.269.084-.311l.009-4.196c0-.238.143-.437.342-.535l.01-.008q.065-.024.132-.034l.05-.016a.3.3 0 0 1 .107-.023h.006l1.443.01a.6.6 0 0 1 .492.261l4.2 6.079v-4.76a.6.6 0 0 1 .602-.599h4.302c.801 0 1.616.41 2.073 1.045M7.011 18.59c1.258 0 1.896-.636 1.896-1.891s-.638-1.891-1.896-1.891-1.896.636-1.896 1.89c0 1.256.638 1.892 1.896 1.892m9.504 0c1.258 0 1.897-.636 1.897-1.891s-.639-1.891-1.897-1.891c-1.257 0-1.896.636-1.896 1.89 0 1.256.639 1.892 1.896 1.892"
        })
    }));
}, d = a;
