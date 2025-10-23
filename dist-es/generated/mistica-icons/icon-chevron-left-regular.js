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
import { useTheme as h } from "../../hooks.js";
import { useIsInverseOrMediaVariant as c } from "../../theme-variant-context.js";
import { vars as i } from "../../skins/skin-contract.css-mistica.js";
const s = (_param)=>{
    var { color: n, size: e = 24 } = _param, t = _object_without_properties(_param, [
        "color",
        "size"
    ]);
    const a = c(), o = n !== null && n !== void 0 ? n : a ? i.colors.inverse : i.colors.neutralHigh, { skinName: l } = h();
    return l.match(/^blau/i) ? /* @__PURE__ */ r("svg", _object_spread_props(_object_spread({
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, t), {
        children: /* @__PURE__ */ r("path", {
            fill: o,
            d: "m6.058 12.001 7.2-7.68a1 1 0 0 1 1.42-.05c.4.38.43 1.02.05 1.42l-5.91 6.31 5.91 6.31a1 1 0 0 1-.05 1.42 1 1 0 0 1-1.42-.05z"
        })
    })) : l.match(/^o2-new/i) ? /* @__PURE__ */ r("svg", _object_spread_props(_object_spread({
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, t), {
        children: /* @__PURE__ */ r("path", {
            fill: o,
            d: "M6.428 12.001c0-.25.09-.49.27-.69l6.56-6.99a1 1 0 0 1 1.42-.05c.4.38.43 1.02.05 1.42l-5.91 6.31 5.91 6.31a1 1 0 0 1-.05 1.42 1 1 0 0 1-1.42-.05l-6.56-6.99c-.18-.19-.27-.44-.27-.69"
        })
    })) : l.match(/^o2/i) ? /* @__PURE__ */ r("svg", _object_spread_props(_object_spread({
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, t), {
        children: /* @__PURE__ */ r("path", {
            fill: o,
            d: "M14.8 5.266a.79.79 0 0 0 0-1.049.64.64 0 0 0-.962 0L7.2 11.455A.78.78 0 0 0 7 12a.78.78 0 0 0 .2.545l6.638 7.238c.266.29.697.29.963 0a.79.79 0 0 0 0-1.05L8.624 12z"
        })
    })) : /* @__PURE__ */ r("svg", _object_spread_props(_object_spread({
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, t), {
        children: /* @__PURE__ */ r("path", {
            fill: o,
            d: "M5.545 12c0-.281.11-.541.32-.732l7.437-6.996c.4-.38 1.041-.36 1.421.04s.36 1.041-.04 1.422l-6.656 6.265 6.656 6.266a1 1 0 0 1 .04 1.42c-.38.401-1.02.421-1.42.041L5.865 12.73c-.2-.19-.32-.46-.32-.73"
        })
    }));
}, p = s;
export { p as default };
