"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return f;
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
const s = (_param)=>{
    var { color: t, size: e = 24 } = _param, o = _object_without_properties(_param, [
        "color",
        "size"
    ]);
    const h = (0, _themevariantcontext.useIsInverseOrMediaVariant)(), i = t !== null && t !== void 0 ? t : h ? _skincontractcssmistica.vars.colors.inverse : _skincontractcssmistica.vars.colors.neutralHigh, { skinName: c } = (0, _hooks.useTheme)();
    return c.match(/^o2-new/i) ? /* @__PURE__ */ (0, _jsxruntime.jsx)("svg", _object_spread_props(_object_spread({
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, o), {
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
            fill: i,
            d: "M19.5 9.638V22h-1.398l-.014-.023-2.834-2.89A1.804 1.804 0 0 0 17 17.27v-.465a1.07 1.07 0 0 1-.713.284 1.08 1.08 0 0 1-1.07-1.09c0-.6.48-1.089 1.07-1.089.274 0 .526.107.713.284V13.46H7v1.736c.192-.172.439-.284.713-.284.59 0 1.07.489 1.07 1.09 0 .6-.48 1.089-1.07 1.089-.274 0-.526-.107-.713-.284v.465c0 .987.782 1.792 1.746 1.815l-2.843 2.89L5.89 22H4.5V9.638C4.5 5.426 7.864 2 12 2s7.5 3.426 7.5 7.638m-5.759 9.453L16.593 22H7.398l2.86-2.909zM17 8.911c0-1-.8-1.82-1.787-1.82H8.787C7.804 7.092 7 7.907 7 8.912v3.454h10z"
        })
    })) : c.match(/^o2/i) ? /* @__PURE__ */ (0, _jsxruntime.jsx)("svg", _object_spread_props(_object_spread({
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, o), {
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
            fill: i,
            d: "M19.5 9.638V22h-1.398l-.014-.023-2.834-2.89A1.804 1.804 0 0 0 17 17.27v-.465a1.07 1.07 0 0 1-.713.284 1.08 1.08 0 0 1-1.07-1.09c0-.6.48-1.089 1.07-1.089.274 0 .526.107.713.284V13.46H7v1.736c.192-.172.439-.284.713-.284.59 0 1.07.489 1.07 1.09 0 .6-.48 1.089-1.07 1.089-.274 0-.526-.107-.713-.284v.465c0 .987.782 1.792 1.746 1.815l-2.843 2.89L5.89 22H4.5V9.638C4.5 5.426 7.864 2 12 2s7.5 3.426 7.5 7.638m-5.759 9.453L16.593 22H7.398l2.86-2.909zM17 8.911c0-1-.8-1.82-1.787-1.82H8.787C7.804 7.092 7 7.907 7 8.912v3.454h10z"
        })
    })) : /* @__PURE__ */ (0, _jsxruntime.jsx)("svg", _object_spread_props(_object_spread({
        width: e,
        height: e,
        viewBox: "0 0 24 24",
        role: "presentation"
    }, o), {
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
            fill: i,
            d: "M2.332 16.98a.76.76 0 0 1-.177-.492V5.273c0-.384.269-.697.602-.697h10.337c.117-.004 3.392-.094 7.204 4.311 1.135 1.312 1.65 2.668 1.53 4.027-.171 1.936-1.583 3.276-2.407 3.903-.34.257-.731.393-1.132.393h-.017c-1.009-.01-4.54-.028-15.515-.028a.57.57 0 0 1-.425-.203m17.708-6.306a6.3 6.3 0 0 0-.591-.801c-2.205-2.544-4.167-3.431-5.301-3.742v4.543zm-1.28 4.98c.224-.17.577-.471.919-.864H3.359v1.001c10.508 0 13.933.019 14.922.028h.008a.76.76 0 0 0 .47-.164M5.363 10.599V7.376H3.36v3.222zm1.39 0h2.155V7.376H6.753zm5.573 0V7.376H10.17v3.222zm9.519 8.13c0-.387-.27-.697-.603-.697H2.757c-.333 0-.602.31-.602.697s.269.697.602.697h18.485c.334 0 .603-.31.603-.697"
        })
    }));
}, f = s;
