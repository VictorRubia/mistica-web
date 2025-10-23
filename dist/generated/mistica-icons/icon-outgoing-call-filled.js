"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return h;
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
    var { color: a, size: l = 24 } = _param, c = _object_without_properties(_param, [
        "color",
        "size"
    ]);
    const e = (0, _themevariantcontext.useIsInverseOrMediaVariant)(), t = a !== null && a !== void 0 ? a : e ? _skincontractcssmistica.vars.colors.inverse : _skincontractcssmistica.vars.colors.neutralHigh;
    return /* @__PURE__ */ (0, _jsxruntime.jsx)("svg", _object_spread_props(_object_spread({
        width: l,
        height: l,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, c), {
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
            fill: t,
            d: "M21.84 17.894c-.013-.848-.43-1.686-1.234-2.49a4.8 4.8 0 0 0-1.003-.787c-.544-.336-1.101-.507-1.661-.507q-.235-.002-.474.04c-.717.12-1.423.523-2.095 1.195a6 6 0 0 0-.442.496.2.2 0 0 1-.118.025c-.188 0-.543-.112-1.135-.518-.882-.605-1.924-1.613-2.63-2.32l-.084-.083c-.706-.709-1.714-1.748-2.32-2.63-.52-.762-.56-1.135-.495-1.252.205-.166.322-.27.496-.443.672-.672 1.073-1.375 1.196-2.095s-.034-1.44-.465-2.135a5 5 0 0 0-.787-1c-.804-.804-1.642-1.218-2.49-1.235h-.054c-.86 0-1.728.415-2.582 1.23-.306.294-.6.697-.695.832q-.005.013-.011.016l-.02.026c-.795 1.154-.776 2.94.06 5.033.87 2.188 2.568 4.58 4.907 6.919l.002.001.003.002.079.078c2.339 2.34 4.73 4.037 6.919 4.908 1.072.428 2.064.641 2.93.641.826 0 1.54-.193 2.103-.582a.2.2 0 0 1 .03-.023l.012-.008q.009-.008.02-.014c.15-.11.533-.389.812-.68.83-.872 1.244-1.76 1.227-2.64m-8.246-8.683.95 1.056a.76.76 0 0 0 .614.31c.196 0 .38-.075.518-.206l2.532-2.177.557.62a.6.6 0 0 0 .451.212.6.6 0 0 0 .143-.02.59.59 0 0 0 .417-.464l.813-3.79a.633.633 0 0 0-.625-.779q-.027 0-.053.003l-3.846.3a.58.58 0 0 0-.515.355.58.58 0 0 0 .128.614l.552.613-2.52 2.219a.771.771 0 0 0-.115 1.134"
        })
    }));
}, h = n;
