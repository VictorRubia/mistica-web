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
import { jsx as a } from "react/jsx-runtime";
import { useIsInverseOrMediaVariant as o } from "../../theme-variant-context.js";
import { vars as i } from "../../skins/skin-contract.css-mistica.js";
const n = (_param)=>{
    var { color: r, size: l = 24 } = _param, c = _object_without_properties(_param, [
        "color",
        "size"
    ]);
    const e = o(), t = r !== null && r !== void 0 ? r : e ? i.colors.inverse : i.colors.neutralHigh;
    return /* @__PURE__ */ a("svg", _object_spread_props(_object_spread({
        width: l,
        height: l,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, c), {
        children: /* @__PURE__ */ a("path", {
            fill: t,
            d: "m3.541 6.225.79 1.75c.18.39.74.39.92 0l.79-1.76 1.75-.79a.5.5 0 0 0 0-.91l-1.76-.79-.79-1.75a.5.5 0 0 0-.91 0l-.79 1.76-1.75.79a.5.5 0 0 0 0 .91zm.658-.658-.83-.374a.237.237 0 0 1 0-.432l.83-.374.374-.834a.237.237 0 0 1 .432 0l.374.83.834.374a.237.237 0 0 1 0 .431l-.83.374-.373.835a.24.24 0 0 1-.437 0zM15.006 6l-1.59 3.5-3.5 1.59c-.78.35-.78 1.46 0 1.82l3.5 1.59 1.59 3.5c.35.78 1.46.78 1.82 0l1.59-3.5 3.5-1.59c.78-.35.78-1.46 0-1.82l-3.5-1.59-1.59-3.5c-.35-.78-1.47-.78-1.82 0m-.721 7.631-3.46-1.475c-.258-.18 0-.29 0-.29l3.46-1.484 1.39-3.26c.131-.275.372-.38.521 0l1.338 3.247 3.34 1.427c.183.081.164.264.045.32l-3.371 1.502-1.46 3.165c-.098.197-.285.34-.434 0zM6.539 22.014l-.79-1.75-1.75-.79a.5.5 0 0 1 0-.91l1.75-.79.79-1.76a.5.5 0 0 1 .91 0l.79 1.75 1.76.79a.5.5 0 0 1 0 .91l-1.75.79-.79 1.76c-.18.39-.74.39-.92 0m.242-1.578a.24.24 0 0 0 .436 0l.374-.835.83-.374a.237.237 0 0 0 0-.431l-.835-.375-.374-.83a.237.237 0 0 0-.431 0l-.375.835-.83.374a.237.237 0 0 0 0 .432l.83.374z"
        })
    }));
}, h = n;
export { h as default };
