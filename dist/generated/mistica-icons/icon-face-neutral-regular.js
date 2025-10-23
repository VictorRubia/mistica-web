"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return u;
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
    var { color: o, size: e = 24 } = _param, t = _object_without_properties(_param, [
        "color",
        "size"
    ]);
    const n = (0, _themevariantcontext.useIsInverseOrMediaVariant)(), r = o !== null && o !== void 0 ? o : n ? _skincontractcssmistica.vars.colors.inverse : _skincontractcssmistica.vars.colors.neutralHigh, { skinName: i } = (0, _hooks.useTheme)();
    return i.match(/^vivo-new/i) ? /* @__PURE__ */ (0, _jsxruntime.jsx)("svg", _object_spread_props(_object_spread({
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, t), {
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
            fill: r,
            d: "M12 2c5.52 0 10.002 4.48 10.002 10 0 5.518-4.482 10-10.001 10C6.48 22 2 17.517 2 12 2 6.48 6.481 2 12 2m0 1.332c-4.784 0-8.667 3.884-8.667 8.668s3.883 8.666 8.668 8.666c4.783 0 8.667-3.883 8.667-8.666s-3.884-8.668-8.667-8.668M8.005 14.404a.665.665 0 0 1-.67-.663.67.67 0 0 1 .664-.67l7.999-.039a.666.666 0 1 1 .006 1.333zm7.999-5.742a1.334 1.334 0 1 1-.001 2.668 1.334 1.334 0 0 1 .001-2.668m-8.004 0a1.335 1.335 0 1 1-.003 2.67A1.335 1.335 0 0 1 8 8.661"
        })
    })) : i.match(/^blau/i) ? /* @__PURE__ */ (0, _jsxruntime.jsx)("svg", _object_spread_props(_object_spread({
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, t), {
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
            fill: r,
            d: "M12 2c5.52 0 10.002 4.481 10.002 10.001C22.002 17.52 17.52 22 12 22 6.48 22 2 17.519 2 12.001 2 6.481 6.481 2 12 2m0 1.333c-4.784 0-8.667 3.883-8.667 8.668 0 4.783 3.883 8.666 8.668 8.666 4.783 0 8.667-3.883 8.667-8.666 0-4.785-3.884-8.668-8.667-8.668M8.005 14.405a.665.665 0 0 1-.67-.663.67.67 0 0 1 .664-.67l7.999-.04a.666.666 0 1 1 .006 1.334zm7.999-5.742a1.334 1.334 0 1 1-.001 2.668 1.334 1.334 0 0 1 .001-2.668m-8.004 0a1.335 1.335 0 1 1-.003 2.669A1.335 1.335 0 0 1 8 8.662"
        })
    })) : i.match(/^o2-new/i) ? /* @__PURE__ */ (0, _jsxruntime.jsxs)("svg", _object_spread_props(_object_spread({
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, t), {
        children: [
            /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
                fill: r,
                d: "M12 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10m0-18.75c-4.825 0-8.75 3.925-8.75 8.75s3.925 8.75 8.75 8.75 8.75-3.925 8.75-8.75S16.825 3.25 12 3.25M8.607 8.5a.982.982 0 1 0-.001 1.963.982.982 0 0 0 .001-1.963m6.697 0a.982.982 0 1 0-.002 1.963.982.982 0 0 0 .002-1.963"
            }),
            /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
                fill: r,
                d: "M7.375 13.875c0-.345.28-.625.625-.625h8a.625.625 0 1 1 0 1.25H8a.625.625 0 0 1-.625-.625"
            })
        ]
    })) : /* @__PURE__ */ (0, _jsxruntime.jsx)("svg", _object_spread_props(_object_spread({
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, t), {
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
            fill: r,
            d: "M22 12.003C22 18.815 18.313 22 11.996 22S2 18.815 2 12.003C2 5.19 5.68 2 11.997 2s10.002 3.19 10.002 10.003M11.996 20.75c5.888 0 8.753-2.862 8.753-8.747 0-5.888-2.862-8.753-8.753-8.753-5.885 0-8.747 2.862-8.747 8.753 0 5.885 2.862 8.747 8.747 8.747m2.163-10.552c-.208-.213-.31-.503-.31-.86 0-.733.455-1.188 1.184-1.188.73 0 1.183.455 1.183 1.189 0 .359-.105.65-.313.86-.207.213-.51.327-.87.327-.362 0-.664-.114-.874-.328m-5.194.328c-.36 0-.663-.114-.874-.328-.207-.21-.31-.5-.31-.86 0-.733.456-1.188 1.184-1.188.732 0 1.184.455 1.184 1.189 0 .359-.106.65-.31.86-.21.213-.512.327-.874.327M7.6 14.206a.572.572 0 0 1 0-1.143l9.047-.007a.572.572 0 1 1 0 1.143z"
        })
    }));
}, u = m;
