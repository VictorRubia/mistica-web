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
import { jsx as o } from "react/jsx-runtime";
import { useTheme as s } from "../../hooks.js";
import { useIsInverseOrMediaVariant as h } from "../../theme-variant-context.js";
import { vars as l } from "../../skins/skin-contract.css-mistica.js";
const c = (_param)=>{
    var { color: n, size: e = 24 } = _param, r = _object_without_properties(_param, [
        "color",
        "size"
    ]);
    const a = h(), t = n !== null && n !== void 0 ? n : a ? l.colors.inverse : l.colors.neutralHigh, { skinName: i } = s();
    return i.match(/^o2-new/i) ? /* @__PURE__ */ o("svg", _object_spread_props(_object_spread({
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, r), {
        children: /* @__PURE__ */ o("path", {
            fill: t,
            d: "M11.999 7.6c-.21 0-.42.08-.58.23l-7.15 6.7c-.34.32-.36.86-.04 1.2s.86.36 1.2.04l6.57-6.16 6.57 6.16c.34.32.88.3 1.2-.04s.3-.88-.04-1.2l-7.15-6.7a.85.85 0 0 0-.58-.23"
        })
    })) : i.match(/^o2/i) ? /* @__PURE__ */ o("svg", _object_spread_props(_object_spread({
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, r), {
        children: /* @__PURE__ */ o("path", {
            fill: t,
            d: "M4.117 15.889a.37.37 0 0 1 0-.538l7.585-7.24a.41.41 0 0 1 .46-.071.4.4 0 0 1 .14.088l6.296 6.008c.159.152.159.398 0 .55a.42.42 0 0 1-.577 0l-6.04-5.765-7.3 6.968a.41.41 0 0 1-.564 0m15.293-1.023a.577.577 0 0 0-.59.563c0 .312.264.564.59.564s.59-.252.59-.564a.577.577 0 0 0-.59-.563"
        })
    })) : /* @__PURE__ */ o("svg", _object_spread_props(_object_spread({
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, r), {
        children: /* @__PURE__ */ o("path", {
            fill: t,
            d: "M12 7.257c-.23 0-.46.1-.62.27l-7.15 7.6c-.32.34-.3.88.04 1.2s.88.31 1.2-.04L12 9.347l6.53 6.94c.32.34.86.36 1.2.04s.36-.86.04-1.2l-7.15-7.6a.85.85 0 0 0-.62-.27"
        })
    }));
}, f = c;
export { f as default };
