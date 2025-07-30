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
import { useTheme as c } from "../../hooks.js";
import { useIsInverseOrMediaVariant as s } from "../../theme-variant-context.js";
import { vars as i } from "../../skins/skin-contract.css-mistica.js";
const a = (_param)=>{
    var { color: n, size: e = 24 } = _param, r = _object_without_properties(_param, [
        "color",
        "size"
    ]);
    const h = s(), l = n !== null && n !== void 0 ? n : h ? i.colors.inverse : i.colors.neutralHigh, { skinName: t } = c();
    return t.match(/^blau/i) ? /* @__PURE__ */ o("svg", _object_spread_props(_object_spread({
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, r), {
        children: /* @__PURE__ */ o("path", {
            fill: l,
            d: "m18.322 11.998-7.13-7.6c-.48-.51-1.28-.53-1.79-.06-.51.48-.53 1.28-.06 1.79l5.51 5.87-5.51 5.87a1.265 1.265 0 1 0 1.85 1.73z"
        })
    })) : t.match(/^o2-new/i) ? /* @__PURE__ */ o("svg", _object_spread_props(_object_spread({
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, r), {
        children: /* @__PURE__ */ o("path", {
            fill: l,
            d: "M17.852 11.998c0-.31-.11-.62-.34-.86l-6.32-6.74c-.48-.51-1.28-.53-1.79-.06-.51.48-.53 1.28-.06 1.79l5.51 5.87-5.51 5.87a1.265 1.265 0 1 0 1.85 1.73l6.32-6.74c.23-.24.34-.55.34-.86"
        })
    })) : /* @__PURE__ */ o("svg", _object_spread_props(_object_spread({
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, r), {
        children: /* @__PURE__ */ o("path", {
            fill: l,
            d: "M18.81 12c0-.39-.16-.76-.44-1.02l-7.01-6.6c-.56-.53-1.45-.5-1.98.06s-.5 1.45.06 1.98L15.37 12l-5.93 5.58c-.56.53-.59 1.42-.06 1.98s1.42.59 1.98.06l7.01-6.6c.28-.26.44-.63.44-1.02"
        })
    }));
}, p = a;
export { p as default };
