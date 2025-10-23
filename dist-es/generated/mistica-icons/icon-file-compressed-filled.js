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
import { jsx as e } from "react/jsx-runtime";
import { useIsInverseOrMediaVariant as l } from "../../theme-variant-context.js";
import { vars as o } from "../../skins/skin-contract.css-mistica.js";
const v = (_param)=>{
    var { color: r, size: h = 24 } = _param, a = _object_without_properties(_param, [
        "color",
        "size"
    ]);
    const s = l(), i = r !== null && r !== void 0 ? r : s ? o.colors.inverse : o.colors.neutralHigh;
    return /* @__PURE__ */ e("svg", _object_spread_props(_object_spread({
        width: h,
        height: h,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, a), {
        children: /* @__PURE__ */ e("path", {
            fill: i,
            d: "M19.125 7.53c.165.163.26.39.26.622v12.311a1.4 1.4 0 0 1-1.384 1.381h-12c-.736 0-1.383-.644-1.383-1.38V3.535c0-.723.658-1.381 1.383-1.381h2.255v3.19h-.935a.6.6 0 0 0-.594.606.6.6 0 0 0 .594.605h.935v1.523h-.935a.6.6 0 0 0-.594.605.6.6 0 0 0 .594.605h.935v1.524h-.935a.6.6 0 0 0-.594.605.6.6 0 0 0 .594.605h.935v1.858H7.33a.6.6 0 0 0-.594.605v2.266a.6.6 0 0 0 .594.605h3a.6.6 0 0 0 .594-.605v-2.266a.6.6 0 0 0-.594-.606h-.885v-.493h.908a.6.6 0 0 0 .593-.604.6.6 0 0 0-.593-.606h-.908v-1.523h.908a.6.6 0 0 0 .593-.605.6.6 0 0 0-.593-.605h-.908V7.92h.908a.6.6 0 0 0 .593-.605.6.6 0 0 0-.593-.605h-.908V5.186h.908a.6.6 0 0 0 .593-.605.6.6 0 0 0-.593-.605h-.908V2.155h3.863a.86.86 0 0 1 .6.244zm-3.21.28h1.784l-4.067-4v1.776c0 .659.213 1.216.613 1.611.41.4.986.613 1.67.613m-7.99 7.522v.815h1.81v-.815z"
        })
    }));
}, m = v;
export { m as default };
