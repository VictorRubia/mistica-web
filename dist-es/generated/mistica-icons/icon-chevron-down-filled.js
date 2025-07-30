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
import { useTheme as h } from "../../hooks.js";
import { useIsInverseOrMediaVariant as s } from "../../theme-variant-context.js";
import { vars as i } from "../../skins/skin-contract.css-mistica.js";
const a = (_param)=>{
    var { color: n, size: e = 24 } = _param, r = _object_without_properties(_param, [
        "color",
        "size"
    ]);
    const c = s(), l = n !== null && n !== void 0 ? n : c ? i.colors.inverse : i.colors.neutralHigh, { skinName: t } = h();
    return t.match(/^blau/i) ? /* @__PURE__ */ o("svg", _object_spread_props(_object_spread({
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, r), {
        children: /* @__PURE__ */ o("path", {
            fill: l,
            d: "m12 16.322-7.6-7.13c-.51-.48-.53-1.28-.06-1.79.48-.51 1.28-.53 1.79-.06l5.87 5.51 5.87-5.51a1.265 1.265 0 1 1 1.73 1.85z"
        })
    })) : t.match(/^o2-new/i) ? /* @__PURE__ */ o("svg", _object_spread_props(_object_spread({
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, r), {
        children: /* @__PURE__ */ o("path", {
            fill: l,
            d: "M12 16.84c-.31 0-.62-.11-.86-.34L4.4 10.18c-.51-.48-.53-1.28-.06-1.79.48-.51 1.28-.53 1.79-.06L12 13.84l5.87-5.51a1.265 1.265 0 1 1 1.73 1.85l-6.74 6.32c-.24.23-.55.34-.86.34"
        })
    })) : /* @__PURE__ */ o("svg", _object_spread_props(_object_spread({
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, r), {
        children: /* @__PURE__ */ o("path", {
            fill: l,
            d: "M12 16.82c-.39 0-.76-.16-1.02-.44l-6.6-7.01c-.53-.56-.5-1.45.06-1.98s1.45-.5 1.98.06L12 13.38l5.58-5.93c.53-.56 1.42-.59 1.98-.06s.59 1.42.06 1.98l-6.6 7.01c-.26.28-.63.44-1.02.44"
        })
    }));
}, p = a;
export { p as default };
