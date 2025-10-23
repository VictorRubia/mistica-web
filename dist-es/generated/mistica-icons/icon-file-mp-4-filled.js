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
import { jsxs as s, jsx as c } from "react/jsx-runtime";
import { useIsInverseOrMediaVariant as t } from "../../theme-variant-context.js";
import { vars as o } from "../../skins/skin-contract.css-mistica.js";
const v = (_param)=>{
    var { color: r, size: h = 24 } = _param, e = _object_without_properties(_param, [
        "color",
        "size"
    ]);
    const i = t(), l = r !== null && r !== void 0 ? r : i ? o.colors.inverse : o.colors.neutralHigh;
    return /* @__PURE__ */ s("svg", _object_spread_props(_object_spread({
        width: h,
        height: h,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, e), {
        children: [
            /* @__PURE__ */ c("path", {
                fill: l,
                d: "M13.598 14.217h-1.62a.8.8 0 0 1-.022-.188c0-.151.028-.322.112-.56l.765-2.09h.742l-.829 2.26h.852v-.876h.77v.877h.431v.577h-.431v.846h-.77zM4.337 11.382h.661l1.163 2.056 1.201-2.056h.647v3.68h-.77v-2.12l-.765 1.28h-.647L5.04 12.92v2.143h-.703zM8.81 11.382h1.264c.577 0 .941.081 1.179.302q.298.273.297.86-.001.589-.275.894c-.215.24-.549.356-1.033.356H9.65v1.269h-.84zm1.74 1.641q.147-.146.146-.467c0-.2-.042-.345-.14-.437-.101-.093-.258-.13-.516-.13h-.392v1.174h.412c.269 0 .38-.036.49-.14"
            }),
            /* @__PURE__ */ c("path", {
                fill: l,
                d: "M21.794 7.914a.6.6 0 0 1 .047.238v12.306c0 .75-.644 1.383-1.409 1.383H8.25c-.75 0-1.409-.647-1.409-1.384l.034-2.773H4.578a2.427 2.427 0 0 1-2.423-2.423V11.17a2.426 2.426 0 0 1 2.42-2.426h2.266V3.54c0-.726.673-1.384 1.41-1.384h7.414c.232 0 .448.087.613.247l5.297 5.126a.85.85 0 0 1 .219.386M16 3.824V5.59c0 .658.216 1.213.625 1.608.414.4.997.61 1.689.61h1.8zM4.575 16.471h9.846a1.21 1.21 0 0 0 1.207-1.21v-4.095c0-.667-.54-1.21-1.207-1.21H4.575c-.666 0-1.207.54-1.207 1.21v4.095c0 .667.54 1.21 1.207 1.21"
            })
        ]
    }));
}, M = v;
export { M as default };
