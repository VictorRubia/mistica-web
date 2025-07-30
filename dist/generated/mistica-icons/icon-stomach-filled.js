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
const s = (_param)=>{
    var { color: e, size: o = 24 } = _param, t = _object_without_properties(_param, [
        "color",
        "size"
    ]);
    const l = (0, _themevariantcontext.useIsInverseOrMediaVariant)(), a = e !== null && e !== void 0 ? e : l ? _skincontractcssmistica.vars.colors.inverse : _skincontractcssmistica.vars.colors.neutralHigh;
    return /* @__PURE__ */ (0, _jsxruntime.jsx)("svg", _object_spread_props(_object_spread({
        width: o,
        height: o,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, t), {
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
            fill: a,
            d: "M11.623 21.836c-.894 0-1.74-.162-2.508-.498-.588-.26-1.022-.762-1.294-1.493-.224-.608-.285-1.308-.176-2.084.092-.65.005-1.009-.252-1.073-.146-.037-.26.022-.465.132l-.123.067c-.662.339-1.09.955-1.544 1.605q-.15.218-.308.437c-.731 1.008-1.527.846-2.064.532-.869-.504-.79-1.33-.625-1.695a6.34 6.34 0 0 1 3.302-3.577 6.24 6.24 0 0 1 2.958-.566c.664-.03 1.726.124 2.423.28.19.051.356.099.507.146.92.031 1.2-.143 1.294-.246.152-.168.099-.538.043-.933-.048-.342-.104-.725-.04-1.095a3.7 3.7 0 0 1 .05-.605c.158-1.18.564-2.115 1.205-2.785a7 7 0 0 1-.255-.423 6.42 6.42 0 0 1-.518-4.888c.188-.54.846-1.176 1.93-.806.538.185.773.498.874.73.182.415.062.808.017.93a3.47 3.47 0 0 0 .283 2.606c.134.244.294.47.473.666a5 5 0 0 1 .869.034c.131.02.26.042.37.05 2.103.348 4.17 1.877 3.742 5.143-.04.297-.099.594-.174.874l-.009.031c-.392 2.384-1.747 4.577-3.82 6.182-1.992 1.516-4.185 2.322-6.165 2.322"
        })
    }));
}, d = s;
