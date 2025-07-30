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
import { jsx as r } from "react/jsx-runtime";
import { useIsInverseOrMediaVariant as i } from "../../theme-variant-context.js";
import { vars as e } from "../../skins/skin-contract.css-mistica.js";
const s = (_param)=>{
    var { color: o, size: l = 24 } = _param, a = _object_without_properties(_param, [
        "color",
        "size"
    ]);
    const t = i(), c = o !== null && o !== void 0 ? o : t ? e.colors.inverse : e.colors.neutralHigh;
    return /* @__PURE__ */ r("svg", _object_spread_props(_object_spread({
        width: l,
        height: l,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, a), {
        children: /* @__PURE__ */ r("path", {
            fill: c,
            d: "M5.292 2.982h13.412c1.73 0 3.137 1.355 3.14 3.022v8.96c0 1.67-1.41 3.026-3.137 3.026h-9.91l-1.99 2.462c-.296.378-.686.574-1.156.574-.757 0-1.398-.602-1.398-1.319v-1.863a2.98 2.98 0 0 1-2.098-2.88v-8.96c0-1.667 1.409-3.022 3.137-3.022m9.168 9.003c.55-.824.924-1.642 1.118-2.429.21-.857.039-1.569-.482-2.008-.305-.255-.723-.407-1.17-.429q-.061-.004-.121-.003l-.027.003-.027.003a2.6 2.6 0 0 0-.582.078l-.032.01-.033.01a3 3 0 0 0-.6.238l-.175.098q-.15.082-.314.176a.1.1 0 0 1-.056.014.1.1 0 0 1-.056-.014l-.144-.08-.347-.191a3 3 0 0 0-.627-.247l-.036-.011a2.6 2.6 0 0 0-.583-.078l-.027-.003-.026-.003q-.062 0-.12.003c-.449.022-.863.173-1.169.428-.526.437-.7 1.149-.49 2.006.196.787.571 1.605 1.118 2.429a9.8 9.8 0 0 0 1.383 1.675l.022.02c.078.075.256.247.41.355a1.3 1.3 0 0 0 .633.232h.005q.023.004.045.003h.014l.025-.001.02-.002h.006a1.347 1.347 0 0 0 .63-.232c.153-.106.325-.273.404-.35l.027-.025.014-.014a9.8 9.8 0 0 0 1.37-1.662"
        })
    }));
}, d = s;
export { d as default };
