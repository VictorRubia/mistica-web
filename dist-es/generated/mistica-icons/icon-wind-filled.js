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
import { jsxs as l, jsx as s } from "react/jsx-runtime";
import { useIsInverseOrMediaVariant as n } from "../../theme-variant-context.js";
import { vars as c } from "../../skins/skin-contract.css-mistica.js";
const a = (_param)=>{
    var { color: e, size: o = 24 } = _param, i = _object_without_properties(_param, [
        "color",
        "size"
    ]);
    const t = n(), r = e !== null && e !== void 0 ? e : t ? c.colors.inverse : c.colors.neutralHigh;
    return /* @__PURE__ */ l("svg", _object_spread_props(_object_spread({
        width: o,
        height: o,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, i), {
        children: [
            /* @__PURE__ */ s("path", {
                fill: r,
                d: "M11.47 5.974q-.168.001-.316.047a1 1 0 0 1-1.249-.656.985.985 0 0 1 .665-1.233c.285-.086.588-.132.9-.132 1.662 0 2.996 1.37 2.996 3.013 0 1.61-1.255 3.013-2.947 3.013h-8.52c-.551 0-.999-.442-.999-.987a.994.994 0 0 1 1-.988h8.519c.483 0 .947-.411.947-1.038 0-.595-.481-1.039-.996-1.039"
            }),
            /* @__PURE__ */ s("path", {
                fill: r,
                d: "M17.584 7.272q.266-.079.563-.08c.981 0 1.853.833 1.853 1.91s-.872 1.91-1.853 1.91H3c-.552 0-1 .443-1 .988s.448.987 1 .987h15.147c2.13 0 3.853-1.761 3.853-3.885s-1.723-3.885-3.853-3.885c-.393 0-.772.057-1.132.162a.985.985 0 0 0-.674 1.227c.157.523.713.82 1.243.666M3 13.974c-.552 0-1 .442-1 .987 0 .546.448.988 1 .988H13.83c.514 0 .995.443.995 1.038 0 .596-.481 1.039-.995 1.039a1.1 1.1 0 0 1-.327-.05 1.003 1.003 0 0 0-1.253.647.985.985 0 0 0 .654 1.237c.293.091.605.14.926.14 1.662 0 2.995-1.37 2.995-3.013s-1.333-3.013-2.995-3.013z"
            })
        ]
    }));
}, p = a;
export { p as default };
