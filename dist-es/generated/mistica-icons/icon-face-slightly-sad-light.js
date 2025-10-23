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
import { jsxs as l, jsx as e } from "react/jsx-runtime";
import { useTheme as n } from "../../hooks.js";
import { useIsInverseOrMediaVariant as s } from "../../theme-variant-context.js";
import { vars as r } from "../../skins/skin-contract.css-mistica.js";
const m = (_param)=>{
    var { color: h, size: t = 24 } = _param, i = _object_without_properties(_param, [
        "color",
        "size"
    ]);
    const c = s(), a = h !== null && h !== void 0 ? h : c ? r.colors.inverse : r.colors.neutralHigh, { skinName: o } = n();
    return o.match(/^vivo-new/i) ? /* @__PURE__ */ l("svg", _object_spread_props(_object_spread({
        width: t,
        height: t,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, i), {
        children: [
            /* @__PURE__ */ e("path", {
                fill: a,
                d: "M12 21.15a9.15 9.15 0 1 1 0-18.3 9.15 9.15 0 0 1 0 18.3m0 .85c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
            }),
            /* @__PURE__ */ e("path", {
                fill: a,
                d: "M12 13.5c-1.673 0-2.694.613-3.29 1.178a.5.5 0 1 1-.688-.725C8.788 13.227 10.05 12.5 12 12.5s3.212.726 3.978 1.454a.5.5 0 0 1-.689.724C14.694 14.113 13.673 13.5 12 13.5M9 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0M17 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
            })
        ]
    })) : o.match(/^o2-new/i) ? /* @__PURE__ */ l("svg", _object_spread_props(_object_spread({
        width: t,
        height: t,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, i), {
        children: [
            /* @__PURE__ */ e("path", {
                fill: a,
                d: "M12 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10m0-18.75c-4.825 0-8.75 3.925-8.75 8.75s3.925 8.75 8.75 8.75 8.75-3.925 8.75-8.75S16.825 3.25 12 3.25m-3.393 5a.982.982 0 1 0-.001 1.963.982.982 0 0 0 .001-1.963m6.697 0a.982.982 0 1 0-.002 1.963.982.982 0 0 0 .002-1.963"
            }),
            /* @__PURE__ */ e("path", {
                fill: a,
                d: "M7.957 15.264a.624.624 0 0 1-.09-.878c.98-1.204 2.472-1.893 4.097-1.886 1.622 0 3.115.686 4.093 1.882a.624.624 0 1 1-.968.79c-.728-.893-1.896-1.426-3.125-1.426-1.228 0-2.4.533-3.128 1.429a.624.624 0 0 1-.879.09"
            })
        ]
    })) : o.match(/^o2/i) ? /* @__PURE__ */ l("svg", _object_spread_props(_object_spread({
        width: t,
        height: t,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, i), {
        children: [
            /* @__PURE__ */ e("path", {
                fill: a,
                d: "M12 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10m0-18.75c-4.825 0-8.75 3.925-8.75 8.75s3.925 8.75 8.75 8.75 8.75-3.925 8.75-8.75S16.825 3.25 12 3.25m-3.393 5a.982.982 0 1 0-.001 1.963.982.982 0 0 0 .001-1.963m6.697 0a.982.982 0 1 0-.002 1.963.982.982 0 0 0 .002-1.963"
            }),
            /* @__PURE__ */ e("path", {
                fill: a,
                d: "M7.957 15.264a.624.624 0 0 1-.09-.878c.98-1.204 2.472-1.893 4.097-1.886 1.622 0 3.115.686 4.093 1.882a.624.624 0 1 1-.968.79c-.728-.893-1.896-1.426-3.125-1.426-1.228 0-2.4.533-3.128 1.429a.624.624 0 0 1-.879.09"
            })
        ]
    })) : /* @__PURE__ */ l("svg", _object_spread_props(_object_spread({
        width: t,
        height: t,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, i), {
        children: [
            /* @__PURE__ */ e("path", {
                fill: a,
                d: "M21.838 11.997c0-6.706-3.628-9.846-9.846-9.846-6.219 0-9.84 3.14-9.84 9.846s3.621 9.84 9.84 9.84 9.845-3.134 9.845-9.84m-9.846 9.02c-5.986 0-9.02-3.034-9.02-9.02 0-5.989 3.034-9.025 9.02-9.025 5.988 0 9.025 3.036 9.025 9.025 0 5.986-3.037 9.02-9.025 9.02M9.008 10.44c-.327 0-.599-.101-.787-.292-.185-.187-.277-.448-.277-.775 0-.67.398-1.068 1.064-1.068.667 0 1.065.4 1.065 1.068q0 .492-.277.775c-.188.19-.46.292-.788.292m5.185-.292c.188.19.46.292.787.292.328 0 .6-.101.787-.292.185-.187.278-.448.278-.775 0-.667-.398-1.068-1.065-1.068s-1.064.398-1.064 1.068q0 .492.277.775"
            }),
            /* @__PURE__ */ e("path", {
                fill: a,
                d: "M12 13c-1.922 0-3.326.661-4.277 1.137a.4.4 0 1 1-.358-.716C8.415 12.897 9.94 12.2 12 12.2s3.674.697 4.723 1.221a.4.4 0 0 1-.358.716C15.415 13.66 13.922 13 12 13"
            })
        ]
    }));
}, g = m;
export { g as default };
