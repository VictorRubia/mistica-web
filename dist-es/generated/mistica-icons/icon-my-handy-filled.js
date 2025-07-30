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
import { vars as l } from "../../skins/skin-contract.css-mistica.js";
const s = (_param)=>{
    var { color: a, size: o = 24 } = _param, e = _object_without_properties(_param, [
        "color",
        "size"
    ]);
    const n = i(), t = a !== null && a !== void 0 ? a : n ? l.colors.inverse : l.colors.neutralHigh;
    return /* @__PURE__ */ r("svg", _object_spread_props(_object_spread({
        width: o,
        height: o,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, e), {
        children: /* @__PURE__ */ r("path", {
            fill: t,
            d: "M15.079 2c1.823 0 3.318 1.504 3.41 3.388H5.507C5.6 3.504 7.094 2 8.918 2zM18.5 6.46h-13v11.08h13zM8.349 10.276q.048-.054.144-.054h.384l.02.507q.045-.082.1-.153a1 1 0 0 1 .372-.3q.216-.108.468-.108.306 0 .528.144.222.138.336.39.02.04.035.082.058-.113.133-.208a1 1 0 0 1 .372-.3q.216-.108.468-.108.306 0 .528.144.222.138.336.39.12.246.12.564v1.86h-.456q-.096 0-.144-.048a.2.2 0 0 1-.048-.144V11.35q0-.198-.054-.348a.46.46 0 0 0-.18-.24.54.54 0 0 0-.324-.09.65.65 0 0 0-.372.102.65.65 0 0 0-.222.294 1.3 1.3 0 0 0-.072.462v1.596h-.648V11.35q0-.198-.054-.348a.46.46 0 0 0-.18-.24.54.54 0 0 0-.324-.09.65.65 0 0 0-.372.102.65.65 0 0 0-.222.294 1.2 1.2 0 0 0-.078.462v1.596H8.3v-2.712q0-.09.048-.138m4.94 4.242a.7.7 0 0 1-.138-.024q-.102-.018-.144-.066-.042-.042-.042-.12v-.318l.198.024q.108.012.192.012.21 0 .354-.066a.6.6 0 0 0 .264-.216q.114-.156.228-.444l.09-.216-1.17-2.628q-.048-.102-.012-.168.042-.066.156-.066h.444l.882 2.13.816-2.13h.654l-1.26 3.078q-.18.438-.36.696a1.2 1.2 0 0 1-.42.396q-.24.132-.582.132-.072 0-.15-.006M5.508 18.612C5.596 20.496 7.09 22 8.918 22h6.157c1.827 0 3.322-1.504 3.41-3.388z"
        })
    }));
}, c = s;
export { c as default };
