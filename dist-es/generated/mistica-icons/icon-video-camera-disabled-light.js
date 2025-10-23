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
import { jsx as a, jsxs as c } from "react/jsx-runtime";
import { useTheme as s } from "../../hooks.js";
import { useIsInverseOrMediaVariant as n } from "../../theme-variant-context.js";
import { vars as i } from "../../skins/skin-contract.css-mistica.js";
const v = (_param)=>{
    var { color: r, size: e = 24 } = _param, o = _object_without_properties(_param, [
        "color",
        "size"
    ]);
    const t = n(), l = r !== null && r !== void 0 ? r : t ? i.colors.inverse : i.colors.neutralHigh, { skinName: h } = s();
    return h.match(/^o2-new/i) ? /* @__PURE__ */ a("svg", _object_spread_props(_object_spread({
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, o), {
        children: /* @__PURE__ */ a("path", {
            fill: l,
            d: "M21.554 6.592a.74.74 0 0 0-.806.15l-4.67 4.584V7.664c0-.623-.499-1.13-1.11-1.13H7.495l-4.23-4.313a.73.73 0 0 0-1.048 0 .765.765 0 0 0 0 1.067l12.376 12.607v.444H3.483V8.041h.74c.408 0 .74-.338.74-.753a.75.75 0 0 0-.74-.754h-1.11c-.612 0-1.11.507-1.11 1.13v9.057c0 .623.498 1.13 1.11 1.13h11.855c.417 0 .777-.241.967-.59l4.434 4.517a.72.72 0 0 0 1.043 0 .765.765 0 0 0 0-1.068l-5.335-5.438v-2.217l4.671 4.584a.73.73 0 0 0 .801.154.75.75 0 0 0 .45-.695V7.283a.74.74 0 0 0-.445-.69M8.98 8.042h5.619v5.723zm8.355 4.148 3.191-3.13v6.26z"
        })
    })) : /* @__PURE__ */ c("svg", _object_spread_props(_object_spread({
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, o), {
        children: [
            /* @__PURE__ */ a("path", {
                fill: l,
                d: "M18.747 3.842a.297.297 0 0 1 .427-.025h-.003a.303.303 0 0 1 .024.43L4.347 20.912a.3.3 0 0 1-.224.1.3.3 0 0 1-.203-.079.303.303 0 0 1-.024-.43zM21.304 7.686a.47.47 0 0 1 .465.006h.003a.46.46 0 0 1 .228.397v8.332a.46.46 0 0 1-.24.403.4.4 0 0 1-.225.059.46.46 0 0 1-.24-.065l-3.952-2.186v2.044c0 1.389-1.144 2.517-2.551 2.517H6.545l.54-.592h7.704c1.074 0 1.95-.865 1.95-1.925V7.994l.565-.619q.036.204.036.418v2.085zm-3.952 6.274 4.048 2.239V8.314l-4.048 2.24zM4.643 18.619H4.64l.003-.003z"
            }),
            /* @__PURE__ */ a("path", {
                fill: l,
                d: "M4.64 18.619h-.037c-1.096 0-1.99-.907-1.99-2.018V7.287c0-1.112.894-2.018 1.99-2.018h10.369c.42 0 .81.284 1.132.52l.031.022.41-.454c-.437-.339-.983-.71-1.577-.71H4.604C3.167 4.648 2 5.832 2 7.288v9.31c0 1.292.922 2.37 2.131 2.596z"
            }),
            /* @__PURE__ */ a("path", {
                fill: l,
                d: "M7.086 9.015a.74.74 0 0 1-.732.731.71.71 0 0 1-.703-.73.74.74 0 0 1 .731-.732c.396 0 .711.327.704.731"
            })
        ]
    }));
}, V = v;
export { V as default };
