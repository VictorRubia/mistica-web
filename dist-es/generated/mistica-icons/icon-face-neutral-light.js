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
import { jsx as t, jsxs as o } from "react/jsx-runtime";
import { useTheme as c } from "../../hooks.js";
import { useIsInverseOrMediaVariant as s } from "../../theme-variant-context.js";
import { vars as h } from "../../skins/skin-contract.css-mistica.js";
const m = (_param)=>{
    var { color: l, size: e = 24 } = _param, i = _object_without_properties(_param, [
        "color",
        "size"
    ]);
    const n = s(), a = l !== null && l !== void 0 ? l : n ? h.colors.inverse : h.colors.neutralHigh, { skinName: r } = c();
    return r.match(/^vivo-new/i) ? /* @__PURE__ */ t("svg", _object_spread_props(_object_spread({
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, i), {
        children: /* @__PURE__ */ t("path", {
            fill: a,
            d: "M21.15 12a9.15 9.15 0 1 0-18.3 0 9.15 9.15 0 0 0 18.3 0m.85 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10M8 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2m8 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m1 2.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1 0-1h9a.5.5 0 0 1 .5.5"
        })
    })) : r.match(/^o2-new/i) ? /* @__PURE__ */ o("svg", _object_spread_props(_object_spread({
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, i), {
        children: [
            /* @__PURE__ */ t("path", {
                fill: a,
                d: "M12 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10m0-18.75c-4.825 0-8.75 3.925-8.75 8.75s3.925 8.75 8.75 8.75 8.75-3.925 8.75-8.75S16.825 3.25 12 3.25M8.607 8.5a.982.982 0 1 0-.001 1.963.982.982 0 0 0 .001-1.963m6.697 0a.982.982 0 1 0-.002 1.963.982.982 0 0 0 .002-1.963"
            }),
            /* @__PURE__ */ t("path", {
                fill: a,
                d: "M7.375 13.875c0-.345.28-.625.625-.625h8a.625.625 0 1 1 0 1.25H8a.625.625 0 0 1-.625-.625"
            })
        ]
    })) : r.match(/^o2/i) ? /* @__PURE__ */ o("svg", _object_spread_props(_object_spread({
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, i), {
        children: [
            /* @__PURE__ */ t("path", {
                fill: a,
                d: "M12 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10m0-18.75c-4.825 0-8.75 3.925-8.75 8.75s3.925 8.75 8.75 8.75 8.75-3.925 8.75-8.75S16.825 3.25 12 3.25M8.607 8.5a.982.982 0 1 0-.001 1.963.982.982 0 0 0 .001-1.963m6.697 0a.982.982 0 1 0-.002 1.963.982.982 0 0 0 .002-1.963"
            }),
            /* @__PURE__ */ t("path", {
                fill: a,
                d: "M7.375 13.875c0-.345.28-.625.625-.625h8a.625.625 0 1 1 0 1.25H8a.625.625 0 0 1-.625-.625"
            })
        ]
    })) : /* @__PURE__ */ o("svg", _object_spread_props(_object_spread({
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, i), {
        children: [
            /* @__PURE__ */ t("path", {
                fill: a,
                d: "M21.838 11.997c0-6.706-3.628-9.846-9.846-9.846-6.219 0-9.84 3.14-9.84 9.846s3.621 9.84 9.84 9.84 9.845-3.134 9.845-9.84m-9.846 9.02c-5.986 0-9.02-3.034-9.02-9.02 0-5.989 3.034-9.025 9.02-9.025 5.988 0 9.025 3.036 9.025 9.025 0 5.986-3.037 9.02-9.025 9.02M9.008 10.44c-.327 0-.599-.101-.787-.292-.185-.187-.277-.448-.277-.775 0-.667.398-1.068 1.064-1.068.667 0 1.065.4 1.065 1.068q0 .49-.277.775c-.188.19-.46.292-.788.292m5.185-.292c.188.19.46.292.787.292.328 0 .6-.101.787-.292q.278-.285.278-.775c0-.667-.398-1.068-1.065-1.068s-1.064.4-1.064 1.068q0 .492.277.775"
            }),
            /* @__PURE__ */ t("path", {
                fill: a,
                d: "M7.1 13.5c0-.22.18-.4.4-.4h9.105a.4.4 0 0 1 0 .8H7.5a.4.4 0 0 1-.4-.4"
            })
        ]
    }));
}, M = m;
export { M as default };
