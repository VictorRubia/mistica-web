"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return g;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _hooks = require("../../hooks.js");
const _themevariantcontext = require("../../theme-variant-context.js");
const _skincontractcssmistica = require("../../skins/skin-contract.css-mistica.js");
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
const m = (_param)=>{
    var { color: r, size: a = 24 } = _param, c = _object_without_properties(_param, [
        "color",
        "size"
    ]);
    const s = (0, _themevariantcontext.useIsInverseOrMediaVariant)(), t = r !== null && r !== void 0 ? r : s ? _skincontractcssmistica.vars.colors.inverse : _skincontractcssmistica.vars.colors.neutralHigh, { skinName: i } = (0, _hooks.useTheme)();
    return i.match(/^vivo-new/i) ? /* @__PURE__ */ (0, _jsxruntime.jsxs)("svg", _object_spread_props(_object_spread({
        width: a,
        height: a,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, c), {
        children: [
            /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
                fill: t,
                d: "M12 21.15a9.15 9.15 0 1 0 0-18.3 9.15 9.15 0 0 0 0 18.3m0 .85C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10"
            }),
            /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
                fill: t,
                d: "M9 9.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0M17 9.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0M7.964 15.686a.5.5 0 0 1-.65.278.51.51 0 0 1-.276-.656 3.763 3.763 0 0 1 .385-.667c.164-.23.386-.495.678-.761.773-.703 2.016-1.38 3.899-1.38s3.126.677 3.899 1.38c.434.395.837.884 1.064 1.432v.001l.001.001a.5.5 0 0 1-.278.65c-.267.107-.544-.035-.655-.288a3.5 3.5 0 0 0-.805-1.056c-.602-.547-1.609-1.12-3.226-1.12s-2.624.573-3.226 1.12c-.326.296-.632.66-.81 1.068z"
            })
        ]
    })) : i.match(/^o2-new/i) ? /* @__PURE__ */ (0, _jsxruntime.jsxs)("svg", _object_spread_props(_object_spread({
        width: a,
        height: a,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, c), {
        children: [
            /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
                fill: t,
                d: "M12 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10m0-18.75c-4.825 0-8.75 3.925-8.75 8.75s3.925 8.75 8.75 8.75 8.75-3.925 8.75-8.75S16.825 3.25 12 3.25m-3.393 5a.982.982 0 1 0-.001 1.963.982.982 0 0 0 .001-1.963m6.697 0a.982.982 0 1 0-.002 1.963.982.982 0 0 0 .002-1.963"
            }),
            /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
                fill: t,
                d: "M7.268 16.08a.625.625 0 0 0 .81-.344c.033-.073.264-.555.78-1.024.58-.527 1.558-1.087 3.142-1.087s2.562.56 3.142 1.088c.31.282.608.631.778 1.02l.001.003a.625.625 0 0 0 1.16-.468l-.002-.004a3.3 3.3 0 0 0-.262-.489 4.9 4.9 0 0 0-.834-.988c-.795-.722-2.067-1.412-3.983-1.412s-3.188.69-3.983 1.412a4.9 4.9 0 0 0-.834.988 3 3 0 0 0-.262.49.635.635 0 0 0 .347.815m9.79-.861.02.046zm-1.137.517v-.002l-.001-.001z"
            })
        ]
    })) : i.match(/^o2/i) ? /* @__PURE__ */ (0, _jsxruntime.jsxs)("svg", _object_spread_props(_object_spread({
        width: a,
        height: a,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, c), {
        children: [
            /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
                fill: t,
                d: "M12 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10m0-18.75c-4.825 0-8.75 3.925-8.75 8.75s3.925 8.75 8.75 8.75 8.75-3.925 8.75-8.75S16.825 3.25 12 3.25m-3.393 5a.982.982 0 1 0-.001 1.963.982.982 0 0 0 .001-1.963m6.697 0a.982.982 0 1 0-.002 1.963.982.982 0 0 0 .002-1.963"
            }),
            /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
                fill: t,
                d: "M7.268 16.08a.625.625 0 0 0 .81-.344c.033-.073.264-.555.78-1.024.58-.527 1.558-1.087 3.142-1.087s2.562.56 3.142 1.088c.31.282.608.631.778 1.02l.001.003a.625.625 0 0 0 1.16-.468l-.002-.004a3.3 3.3 0 0 0-.262-.489 4.9 4.9 0 0 0-.834-.988c-.795-.722-2.067-1.412-3.983-1.412s-3.188.69-3.983 1.412a4.9 4.9 0 0 0-.834.988 3 3 0 0 0-.262.49.635.635 0 0 0 .347.815m9.79-.861.02.046zm-1.137.517v-.002l-.001-.001z"
            })
        ]
    })) : /* @__PURE__ */ (0, _jsxruntime.jsx)("svg", _object_spread_props(_object_spread({
        width: a,
        height: a,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, c), {
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
            fill: t,
            d: "M21.838 11.997c0-6.706-3.628-9.846-9.846-9.846-6.219 0-9.84 3.14-9.84 9.846s3.621 9.84 9.84 9.84 9.845-3.134 9.845-9.84m-9.846 9.02c-5.986 0-9.02-3.034-9.02-9.02 0-5.989 3.034-9.025 9.02-9.025 5.988 0 9.025 3.036 9.025 9.025 0 5.986-3.037 9.02-9.025 9.02m.08-7.25c3.634.04 5.752 2.35 5.841 2.449a.41.41 0 0 1-.61.549l-.003-.003c-.084-.088-2.033-2.138-5.25-2.174h-.017c-.264-.002-3.408-.028-5.344 2.138a.412.412 0 0 1-.613-.547c2.184-2.443 5.577-2.415 5.965-2.412zM9.009 10.44c-.327 0-.599-.101-.787-.292-.185-.187-.277-.448-.277-.775 0-.67.398-1.068 1.064-1.068.667 0 1.065.4 1.065 1.068q0 .492-.277.775c-.188.19-.46.292-.788.292m5.185-.292c.188.19.46.292.787.292.328 0 .6-.101.787-.292.185-.187.278-.448.278-.775 0-.667-.398-1.068-1.065-1.068s-1.064.398-1.064 1.068q0 .492.277.775"
        })
    }));
}, g = m;
