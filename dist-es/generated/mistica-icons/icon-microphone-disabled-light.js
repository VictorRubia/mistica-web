"use client";
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
import { jsxs as l, jsx as r } from "react/jsx-runtime";
import { useIsInverseOrMediaVariant as s } from "../../theme-variant-context.js";
import { vars as c } from "../../skins/skin-contract.css-mistica.js";
const t = (_param)=>{
    var { color: e, size: a = 24 } = _param, h = _object_without_properties(_param, [
        "color",
        "size"
    ]);
    const i = s(), o = e !== null && e !== void 0 ? e : i ? c.colors.inverse : c.colors.neutralHigh;
    return /* @__PURE__ */ l("svg", _object_spread_props(_object_spread({
        width: a,
        height: a,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, h), {
        children: [
            /* @__PURE__ */ r("path", {
                fill: o,
                d: "M7.867 13.33V6.37c0-.944.378-1.829 1.06-2.496a3.65 3.65 0 0 1 2.566-1.032h.966c.97 0 1.88.367 2.566 1.032.462.45.785 1.002.945 1.602l.468-.509C15.85 3.382 14.29 2.25 12.46 2.25h-.966c-2.336 0-4.23 1.843-4.23 4.116v6.961c0 .465.078.912.226 1.33l.475-.515a3.5 3.5 0 0 1-.097-.815zM16.085 13.33c0 .944-.378 1.829-1.06 2.496a3.65 3.65 0 0 1-2.566 1.032h-.967c-.97 0-1.879-.367-2.565-1.032l-.042-.041-.405.438a4.28 4.28 0 0 0 3.01 1.226h.966c2.335 0 4.23-1.843 4.23-4.116V7.34l-.604.655v5.34zM6.185 15.62a.29.29 0 0 0-.16.385l.072.162.432-.468a.3.3 0 0 0-.344-.076z"
            }),
            /* @__PURE__ */ r("path", {
                fill: o,
                d: "M8.735 18.842c.822.409 1.71.615 2.637.615h.303v1.705h-1.173a.3.3 0 0 0-.302.294.3.3 0 0 0 .302.294h2.946a.3.3 0 0 0 .302-.294.3.3 0 0 0-.302-.294h-1.172v-1.705h.35c1.81 0 3.487-.8 4.596-2.196.308-.386.562-.809.755-1.259a.29.29 0 0 0-.16-.385.3.3 0 0 0-.396.156c-.175.4-.402.78-.677 1.126a5.22 5.22 0 0 1-4.115 1.967h-1.257a5.24 5.24 0 0 1-3.825-1.638l-.404.438c.459.474 1 .874 1.595 1.168zM4.794 19.413a.296.296 0 0 1-.22-.491L19.002 2.871a.296.296 0 0 1 .415-.024c.12.109.13.294.023.415L5.015 19.316a.3.3 0 0 1-.218.097z"
            })
        ]
    }));
}, d = t;
export { d as default };
