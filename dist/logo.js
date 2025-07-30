"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    BlauLogo: function() {
        return S;
    },
    EsimflagLogo: function() {
        return X;
    },
    Logo: function() {
        return F;
    },
    MovistarLogo: function() {
        return H;
    },
    O2Logo: function() {
        return j;
    },
    O2NewLogo: function() {
        return G;
    },
    TelefonicaLogo: function() {
        return R;
    },
    TuLogo: function() {
        return U;
    },
    VivoLogo: function() {
        return _;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _hooks = require("./hooks.js");
const _themevariantcontext = require("./theme-variant-context.js");
const _touchable = /*#__PURE__*/ _interop_require_default(require("./touchable.js"));
const _dom = require("./utils/dom.js");
const _logocssmistica = require("./logo.css-mistica.js");
const _logocommon = require("./logo-common.js");
const _css = require("./utils/css.js");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
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
const i = 48, N = /*#__PURE__*/ _react.lazy(()=>Promise.resolve().then(()=>/*#__PURE__*/ _interop_require_wildcard(require(/* webpackChunkName: "logo-movistar" */ "./logo-movistar.js")))), T = /*#__PURE__*/ _react.lazy(()=>Promise.resolve().then(()=>/*#__PURE__*/ _interop_require_wildcard(require(/* webpackChunkName: "logo-vivo" */ "./logo-vivo.js")))), p = /*#__PURE__*/ _react.lazy(()=>Promise.resolve().then(()=>/*#__PURE__*/ _interop_require_wildcard(require(/* webpackChunkName: "logo-o2" */ "./logo-o2.js")))), k = /*#__PURE__*/ _react.lazy(()=>Promise.resolve().then(()=>/*#__PURE__*/ _interop_require_wildcard(require(/* webpackChunkName: "logo-o2-new" */ "./logo-o2-new.js")))), O = /*#__PURE__*/ _react.lazy(()=>Promise.resolve().then(()=>/*#__PURE__*/ _interop_require_wildcard(require(/* webpackChunkName: "logo-telefonica" */ "./logo-telefonica.js")))), V = /*#__PURE__*/ _react.lazy(()=>Promise.resolve().then(()=>/*#__PURE__*/ _interop_require_wildcard(require(/* webpackChunkName: "logo-blau" */ "./logo-blau.js")))), b = /*#__PURE__*/ _react.lazy(()=>Promise.resolve().then(()=>/*#__PURE__*/ _interop_require_wildcard(require(/* webpackChunkName: "logo-tu" */ "./logo-tu.js")))), w = /*#__PURE__*/ _react.lazy(()=>Promise.resolve().then(()=>/*#__PURE__*/ _interop_require_wildcard(require(/* webpackChunkName: "logo-esimflag" */ "./logo-esimflag.js")))), c = (param)=>{
    let { size: o, skinName: n, type: t = "isotype", color: a } = param;
    const r = (0, _themevariantcontext.useIsInverseOrMediaVariant)(), { isDarkMode: l } = (0, _hooks.useTheme)();
    switch(n){
        case "Movistar":
            return /* @__PURE__ */ (0, _jsxruntime.jsx)(N, {
                size: o,
                type: t,
                isDarkMode: l,
                isInverse: r,
                color: a
            });
        case "Vivo":
        case "Vivo-new":
            return /* @__PURE__ */ (0, _jsxruntime.jsx)(T, {
                size: o,
                type: t,
                isDarkMode: l,
                isInverse: r,
                color: a
            });
        case "O2":
            return /* @__PURE__ */ (0, _jsxruntime.jsx)(p, {
                size: o,
                type: t,
                isDarkMode: l,
                isInverse: r,
                color: a
            });
        case "O2-new":
            return /* @__PURE__ */ (0, _jsxruntime.jsx)(k, {
                size: o,
                type: t,
                isDarkMode: l,
                isInverse: r,
                color: a
            });
        case "Telefonica":
            return /* @__PURE__ */ (0, _jsxruntime.jsx)(O, {
                size: o,
                type: t,
                isDarkMode: l,
                isInverse: r,
                color: a
            });
        case "Blau":
            return /* @__PURE__ */ (0, _jsxruntime.jsx)(V, {
                size: o,
                type: t,
                isDarkMode: l,
                isInverse: r,
                color: a
            });
        case "Tu":
            return /* @__PURE__ */ (0, _jsxruntime.jsx)(b, {
                size: o,
                type: t,
                isDarkMode: l,
                isInverse: r,
                color: a
            });
        case "Esimflag":
            return /* @__PURE__ */ (0, _jsxruntime.jsx)(w, {
                size: o,
                type: t,
                isDarkMode: l,
                isInverse: r,
                color: a
            });
        default:
            return /* @__PURE__ */ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {});
    }
}, m = (o)=>{
    const n = (0, _dom.getPrefixedDataAttributes)(o.dataAttributes, "Logo");
    return o.to || o.href || o.onPress ? /* @__PURE__ */ (0, _jsxruntime.jsx)(_touchable.default, _object_spread({}, o)) : /* @__PURE__ */ (0, _jsxruntime.jsx)(_react.Suspense, {
        fallback: /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
            className: _logocssmistica.svg,
            style: _object_spread_props(_object_spread({}, (0, _css.applyCssVars)((0, _logocommon.calcInlineVars)(o.size))), {
                width: 1
            })
        }),
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)("div", _object_spread_props(_object_spread({
            className: _logocssmistica.logoContainer
        }, n), {
            children: o.children
        }))
    });
}, F = (_param)=>{
    var { size: o = i, type: n = "isotype", color: t } = _param, a = _object_without_properties(_param, [
        "size",
        "type",
        "color"
    ]);
    const { skinName: r } = (0, _hooks.useTheme)();
    return /* @__PURE__ */ (0, _jsxruntime.jsx)(m, _object_spread_props(_object_spread({
        size: o
    }, a), {
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)(c, {
            skinName: r,
            type: n,
            size: o,
            color: t
        })
    }));
}, H = (_param)=>{
    var { size: o = i, type: n = "isotype", color: t } = _param, a = _object_without_properties(_param, [
        "size",
        "type",
        "color"
    ]);
    return /* @__PURE__ */ (0, _jsxruntime.jsx)(m, _object_spread_props(_object_spread({
        size: o
    }, a), {
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)(c, {
            skinName: "Movistar",
            type: n,
            size: o,
            color: t
        })
    }));
}, _ = (_param)=>{
    var { size: o = i, type: n = "isotype", color: t } = _param, a = _object_without_properties(_param, [
        "size",
        "type",
        "color"
    ]);
    return /* @__PURE__ */ (0, _jsxruntime.jsx)(m, _object_spread_props(_object_spread({
        size: o
    }, a), {
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)(c, {
            skinName: "Vivo",
            type: n,
            size: o,
            color: t
        })
    }));
}, j = (_param)=>{
    var { size: o = i, type: n = "isotype", color: t } = _param, a = _object_without_properties(_param, [
        "size",
        "type",
        "color"
    ]);
    return /* @__PURE__ */ (0, _jsxruntime.jsx)(m, _object_spread_props(_object_spread({
        size: o
    }, a), {
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)(c, {
            skinName: "O2",
            type: n,
            size: o,
            color: t
        })
    }));
}, G = (_param)=>{
    var { size: o = i, type: n = "isotype", color: t } = _param, a = _object_without_properties(_param, [
        "size",
        "type",
        "color"
    ]);
    return /* @__PURE__ */ (0, _jsxruntime.jsx)(m, _object_spread_props(_object_spread({
        size: o
    }, a), {
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)(c, {
            skinName: "O2-new",
            type: n,
            size: o,
            color: t
        })
    }));
}, R = (_param)=>{
    var { size: o = i, type: n = "isotype", color: t } = _param, a = _object_without_properties(_param, [
        "size",
        "type",
        "color"
    ]);
    return /* @__PURE__ */ (0, _jsxruntime.jsx)(m, _object_spread_props(_object_spread({
        size: o
    }, a), {
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)(c, {
            skinName: "Telefonica",
            type: n,
            size: o,
            color: t
        })
    }));
}, S = (_param)=>{
    var { size: o = i, type: n = "isotype", color: t } = _param, a = _object_without_properties(_param, [
        "size",
        "type",
        "color"
    ]);
    return /* @__PURE__ */ (0, _jsxruntime.jsx)(m, _object_spread_props(_object_spread({
        size: o
    }, a), {
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)(c, {
            skinName: "Blau",
            type: n,
            size: o,
            color: t
        })
    }));
}, U = (_param)=>{
    var { size: o = i, type: n = "isotype", color: t } = _param, a = _object_without_properties(_param, [
        "size",
        "type",
        "color"
    ]);
    return /* @__PURE__ */ (0, _jsxruntime.jsx)(m, _object_spread_props(_object_spread({
        size: o
    }, a), {
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)(c, {
            skinName: "Tu",
            type: n,
            size: o,
            color: t
        })
    }));
}, X = (_param)=>{
    var { size: o = i, type: n = "isotype", color: t } = _param, a = _object_without_properties(_param, [
        "size",
        "type",
        "color"
    ]);
    return /* @__PURE__ */ (0, _jsxruntime.jsx)(m, _object_spread_props(_object_spread({
        size: o
    }, a), {
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)(c, {
            skinName: "Esimflag",
            type: n,
            size: o,
            color: t
        })
    }));
};
