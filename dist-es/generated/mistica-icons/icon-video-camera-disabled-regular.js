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
import { jsx as a, jsxs as n } from "react/jsx-runtime";
import { useTheme as h } from "../../hooks.js";
import { useIsInverseOrMediaVariant as c } from "../../theme-variant-context.js";
import { vars as o } from "../../skins/skin-contract.css-mistica.js";
const v = (_param)=>{
    var { color: i, size: e = 24 } = _param, r = _object_without_properties(_param, [
        "color",
        "size"
    ]);
    const t = c(), l = i !== null && i !== void 0 ? i : t ? o.colors.inverse : o.colors.neutralHigh, { skinName: s } = h();
    return s.match(/^o2-new/i) ? /* @__PURE__ */ a("svg", _object_spread_props(_object_spread({
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, r), {
        children: /* @__PURE__ */ a("path", {
            fill: l,
            d: "M21.554 6.592a.74.74 0 0 0-.806.15l-4.67 4.584V7.664c0-.623-.499-1.13-1.11-1.13H7.495l-4.23-4.313a.73.73 0 0 0-1.048 0 .765.765 0 0 0 0 1.067l12.376 12.607v.444H3.483V8.041h.74c.408 0 .74-.338.74-.753a.75.75 0 0 0-.74-.754h-1.11c-.612 0-1.11.507-1.11 1.13v9.057c0 .623.498 1.13 1.11 1.13h11.855c.417 0 .777-.241.967-.59l4.434 4.517a.72.72 0 0 0 1.043 0 .765.765 0 0 0 0-1.068l-5.335-5.438v-2.217l4.671 4.584a.73.73 0 0 0 .801.154.75.75 0 0 0 .45-.695V7.283a.74.74 0 0 0-.445-.69M8.98 8.042h5.619v5.723zm8.355 4.148 3.191-3.13v6.26z"
        })
    })) : /* @__PURE__ */ n("svg", _object_spread_props(_object_spread({
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, r), {
        children: [
            /* @__PURE__ */ a("path", {
                fill: l,
                d: "M17.922 3.104a.59.59 0 1 1 .877.791l-15.254 17a.62.62 0 0 1-.439.196.592.592 0 0 1-.438-.987zM3.243 16.95c0 .212.06.408.165.576l-.846.943A2.32 2.32 0 0 1 2 16.95v-9.9a2.334 2.334 0 0 1 2.33-2.335h10.571l-1.115 1.245H4.33c-.6 0-1.088.489-1.088 1.09zM20.825 6.922a.8.8 0 0 1 .786.012h-.003A.8.8 0 0 1 22 7.62v8.759a.796.796 0 0 1-.793.794.8.8 0 0 1-.4-.11l-3.624-2.033v1.918a2.334 2.334 0 0 1-2.332 2.335H6.593l1.116-1.245h7.142c.6 0 1.088-.489 1.088-1.09V8.865l1.244-1.386v1.485zm-3.636 6.685 3.57 2.005V8.385l-3.57 2.005z"
            }),
            /* @__PURE__ */ a("path", {
                fill: l,
                d: "M6.354 9.826a.74.74 0 0 0 .731-.731.71.71 0 0 0-.703-.731.74.74 0 0 0-.731.73.71.71 0 0 0 .703.732"
            })
        ]
    }));
}, u = v;
export { u as default };
