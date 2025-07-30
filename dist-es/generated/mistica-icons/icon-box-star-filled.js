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
import { jsxs as s, jsx as a } from "react/jsx-runtime";
import { useIsInverseOrMediaVariant as c } from "../../theme-variant-context.js";
import { vars as r } from "../../skins/skin-contract.css-mistica.js";
const n = (_param)=>{
    var { color: t, size: o = 24 } = _param, e = _object_without_properties(_param, [
        "color",
        "size"
    ]);
    const i = c(), l = t !== null && t !== void 0 ? t : i ? r.colors.inverse : r.colors.neutralHigh;
    return /* @__PURE__ */ s("svg", _object_spread_props(_object_spread({
        width: o,
        height: o,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, e), {
        children: [
            /* @__PURE__ */ a("path", {
                fill: l,
                d: "M13.524 10.094a.84.84 0 0 0 .901-.052.9.9 0 0 0 .366-.892l-.265-1.64c-.02-.153-.016-.164.11-.29l1.104-1.112a.91.91 0 0 0 .212-.932.88.88 0 0 0-.698-.597l-1.568-.239c-.125-.018-.143-.042-.2-.149l-.704-1.487a.859.859 0 0 0-1.564 0l-.7 1.48c-.061.122-.09.136-.187.154l-1.584.24a.88.88 0 0 0-.698.598.91.91 0 0 0 .212.932l1.144 1.163c.078.08.1.112.073.24l-.27 1.64a.9.9 0 0 0 .366.89c.265.19.615.21.9.053l1.443-.791c.056-.036.103-.03.159-.003z"
            }),
            /* @__PURE__ */ a("path", {
                fill: l,
                d: "M8.26 7.403a.5.5 0 0 1-.263.657L5.474 9.14a.1.1 0 0 0 .001.185l6.439 2.689a.3.3 0 0 0 .231 0l6.434-2.687a.1.1 0 0 0 .001-.184L16.053 8.06a.5.5 0 1 1 .394-.92l3.5 1.5q.063.027.114.068l.02-.008.042.067a.5.5 0 0 1 .084.13l1.092 1.694a1 1 0 0 1-.433 1.455l-6.036 2.698a1 1 0 0 1-1.209-.313l-1.512-2.018a.1.1 0 0 0-.16 0l-1.511 2.018a1 1 0 0 1-1.209.313l-6.037-2.698a1 1 0 0 1-.432-1.455l1.07-1.66a.5.5 0 0 1 .123-.19l.026-.041.013.006a.5.5 0 0 1 .111-.066l3.5-1.5a.5.5 0 0 1 .657.263"
            }),
            /* @__PURE__ */ a("path", {
                fill: l,
                d: "m10.795 15.558.567-.96c.052-.088.187-.052.187.05v6.397a.5.5 0 0 1-.684.464L4.09 18.83a1 1 0 0 1-.632-.93v-4.422a.1.1 0 0 1 .14-.092l2.73 1.184 3.206 1.397a1 1 0 0 0 1.26-.409M13.264 15.558l-.568-.96c-.051-.088-.186-.052-.186.05v6.397a.5.5 0 0 0 .684.464l6.774-2.679a1 1 0 0 0 .632-.93v-4.422a.1.1 0 0 0-.14-.092l-2.73 1.184-3.206 1.397a1 1 0 0 1-1.26-.409"
            })
        ]
    }));
}, h = n;
export { h as default };
