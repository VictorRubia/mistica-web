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
const n = (_param)=>{
    var { color: e, size: l = 24 } = _param, s = _object_without_properties(_param, [
        "color",
        "size"
    ]);
    const i = (0, _themevariantcontext.useIsInverseOrMediaVariant)(), c = e !== null && e !== void 0 ? e : i ? _skincontractcssmistica.vars.colors.inverse : _skincontractcssmistica.vars.colors.neutralHigh;
    return /* @__PURE__ */ (0, _jsxruntime.jsx)("svg", _object_spread_props(_object_spread({
        width: l,
        height: l,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, s), {
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
            fill: c,
            d: "M18.89 4.006c2.263 2.268 2.439 4.756.526 7.058 1.639.91 2.426 2.636 2.428 5.017 0 3.636-1.832 5.762-5.748 5.762-2.492 0-4.137-.863-5.005-2.426-1.059.908-2.163 1.367-3.272 1.367-1.294 0-2.59-.616-3.82-1.851-1.247-1.25-1.866-2.558-1.844-3.888.023-1.28.639-2.54 1.838-3.74l.137-.14c.112-.117.224-.235.342-.336l6.358-6.378c.07-.086.184-.195.3-.306l.003-.002.143-.137c2.454-2.463 5.16-2.46 7.613 0m-6.935 1.072a4 4 0 0 0-.214.219l-2.513 2.52q-.004.012-.003.022 0 .01-.002.02c-.34 1.093.254 2.418 1.767 3.934.13.13.258.245.386.36l.062.057c.93-1.224 2.468-1.888 4.658-1.888.78 0 1.471.087 2.087.25 1.79-1.911 1.74-3.774-.17-5.687-1.97-1.975-3.886-1.977-5.858 0zm-.326 11.628c.19 2.639 1.613 3.893 4.465 3.893s4.274-1.252 4.467-3.893zm8.933-1.244c-.194-2.641-1.617-3.893-4.468-3.893-2.849 0-4.272 1.254-4.465 3.893z"
        })
    }));
}, f = n;
