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
    Text: function() {
        return o;
    },
    Text1: function() {
        return Nt;
    },
    Text10: function() {
        return At;
    },
    Text2: function() {
        return Lt;
    },
    Text3: function() {
        return Wt;
    },
    Text4: function() {
        return Rt;
    },
    Text5: function() {
        return Ct;
    },
    Text6: function() {
        return zt;
    },
    Text7: function() {
        return Ht;
    },
    Text8: function() {
        return It;
    },
    Text9: function() {
        return Vt;
    },
    default: function() {
        return Et;
    },
    mapToWeight: function() {
        return lt;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _classnames = /*#__PURE__*/ _interop_require_default(require("classnames"));
const _themevariantcontext = require("./theme-variant-context.js");
const _css = require("./utils/css.js");
const _dom = require("./utils/dom.js");
const _hooks = require("./hooks.js");
const _skincontractcssmistica = require("./skins/skin-contract.css-mistica.js");
const _textcssmistica = require("./text.css-mistica.js");
const _constants = require("./skins/constants.js");
const _screenreaderonly = /*#__PURE__*/ _interop_require_default(require("./screen-reader-only.js"));
const _textprops = require("./text-props.js");
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
const lt = {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700
}, ut = (t)=>t === !0 ? 1 : t || "initial", h = "Ħ", ht = /* @__PURE__ */ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
    children: [
        /* @__PURE__ */ (0, _jsxruntime.jsx)("span", {
            "aria-hidden": !0,
            children: h
        }),
        /* @__PURE__ */ (0, _jsxruntime.jsx)(_screenreaderonly.default, {
            children: /* @__PURE__ */ (0, _jsxruntime.jsx)("span", {
                children: "Vivo"
            })
        })
    ]
}), dt = (param)=>{
    let { children: t, ariaLabel: i, as: r } = param;
    return typeof r == "string" && [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6"
    ].includes(r) && typeof t == "string" && t.includes(h) ? {
        ariaLabel: t.replace(new RegExp(h, "g"), "Vivo"),
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)("span", {
            "aria-hidden": !0,
            children: t
        })
    } : {
        children: _react.Children.map(t, (e)=>typeof e != "string" || !e.includes(h) ? e : /* @__PURE__ */ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
                children: e.split(h).map((c, m)=>/* @__PURE__ */ (0, _jsxruntime.jsxs)(_react.Fragment, {
                        children: [
                            m > 0 && ht,
                            c
                        ]
                    }, m))
            })),
        ariaLabel: i
    };
}, o = (param)=>{
    let { weight: t, color: i = _skincontractcssmistica.vars.colors.textPrimary, decoration: r, truncate: e, transform: c, wordBreak: m = !0, hyphens: d = "auto", as: T = "span", children: l, size: v, mobileSize: w = v, desktopSize: b = v, lineHeight: S, mobileLineHeight: k = S, desktopLineHeight: y = S, letterSpacing: H, textAlign: z, textShadow: C, id: R, role: W, "aria-level": L, "aria-label": f, "aria-hidden": N, "aria-live": E, dataAttributes: O } = param;
    const { skinName: F } = (0, _hooks.useTheme)(), _ = (0, _themevariantcontext.useIsInverseOrMediaVariant)(), j = ut(e), D = {
        [_skincontractcssmistica.vars.colors.textPrimary]: _skincontractcssmistica.vars.colors.textPrimaryInverse,
        [_skincontractcssmistica.vars.colors.textSecondary]: _skincontractcssmistica.vars.colors.textSecondaryInverse,
        [_skincontractcssmistica.vars.colors.textLink]: _skincontractcssmistica.vars.colors.textLinkInverse,
        [_skincontractcssmistica.vars.colors.textError]: _skincontractcssmistica.vars.colors.textErrorInverse
    };
    if (!l && l !== 0) return null;
    const M = (0, _classnames.default)(_textcssmistica.text, m ? _textcssmistica.withWordBreak : _textcssmistica.withoutWordBreak, {
        [_textcssmistica.truncate]: e,
        [_textcssmistica.truncateToOneLine]: e === 1 || e === !0
    }), B = (0, _css.applyCssVars)({
        [_textcssmistica.vars.mobileSize]: w ? (0, _css.pxToRem)(w) : "inherit",
        [_textcssmistica.vars.mobileLineHeight]: k ? (0, _css.pxToRem)(k) : "inherit",
        [_textcssmistica.vars.desktopSize]: b ? (0, _css.pxToRem)(b) : "inherit",
        [_textcssmistica.vars.desktopLineHeight]: y ? (0, _css.pxToRem)(y) : "inherit"
    }), K = e ? (0, _css.applyCssVars)({
        [_textcssmistica.vars.lineClamp]: String(j)
    }) : {};
    var _D_i;
    return F === _constants.VIVO_NEW_SKIN && ({ ariaLabel: f, children: l } = dt({
        children: l,
        ariaLabel: f,
        as: T
    })), /*#__PURE__*/ _react.createElement(T, _object_spread_props(_object_spread({
        className: M,
        id: R,
        role: W,
        "aria-level": L,
        "aria-label": f,
        "aria-hidden": N,
        "aria-live": E
    }, (0, _dom.getPrefixedDataAttributes)(O, "Text")), {
        style: _object_spread_props(_object_spread({}, B, K), {
            hyphens: d,
            WebkitHyphens: d,
            letterSpacing: H,
            fontWeight: t ? lt[t] : "inherit",
            textTransform: c || "inherit",
            textDecoration: r !== null && r !== void 0 ? r : "inherit",
            overflowWrap: m ? "anywhere" : "inherit",
            color: _ ? (_D_i = D[i]) !== null && _D_i !== void 0 ? _D_i : i : i,
            textAlign: z,
            textShadow: C,
            // When rendering as <pre/>, spaces are preserved and we don't want to remove them
            whiteSpace: T === "pre" ? void 0 : "pre-line"
        })
    }), l);
}, g = (t)=>{
    if (t.light) return "light";
    if (t.regular) return "regular";
    if (t.medium) return "medium";
    if (t.weight) return t.weight;
}, a = (param)=>{
    let { forceMobileSizes: t, textPreset: i, textProps: r } = param;
    const e = i.size.mobile || r.mobileSize, c = i.lineHeight.mobile || r.mobileLineHeight, m = i.size.desktop || r.desktopSize, d = i.lineHeight.desktop || r.desktopLineHeight;
    return t ? {
        size: e,
        lineHeight: c
    } : {
        mobileSize: e,
        mobileLineHeight: c,
        desktopSize: m,
        desktopLineHeight: d
    };
}, At = (_param)=>{
    var { dataAttributes: t, forceMobileSizes: i } = _param, r = _object_without_properties(_param, [
        "dataAttributes",
        "forceMobileSizes"
    ]);
    const { textPresets: e } = (0, _hooks.useTheme)();
    return /* @__PURE__ */ (0, _jsxruntime.jsx)(o, _object_spread(_object_spread_props(_object_spread({}, a({
        forceMobileSizes: i,
        textPreset: e.text10,
        textProps: _textprops.text10
    })), {
        weight: e.text10.weight,
        dataAttributes: _object_spread({
            "component-name": "Text10",
            testid: "Text10"
        }, t)
    }), r));
}, Vt = (_param)=>{
    var { dataAttributes: t, forceMobileSizes: i } = _param, r = _object_without_properties(_param, [
        "dataAttributes",
        "forceMobileSizes"
    ]);
    const { textPresets: e } = (0, _hooks.useTheme)();
    return /* @__PURE__ */ (0, _jsxruntime.jsx)(o, _object_spread(_object_spread_props(_object_spread({}, a({
        forceMobileSizes: i,
        textPreset: e.text9,
        textProps: _textprops.text9
    })), {
        weight: e.text9.weight,
        dataAttributes: _object_spread({
            "component-name": "Text9",
            testid: "Text9"
        }, t)
    }), r));
}, It = (_param)=>{
    var { dataAttributes: t, forceMobileSizes: i } = _param, r = _object_without_properties(_param, [
        "dataAttributes",
        "forceMobileSizes"
    ]);
    const { textPresets: e } = (0, _hooks.useTheme)();
    return /* @__PURE__ */ (0, _jsxruntime.jsx)(o, _object_spread(_object_spread_props(_object_spread({}, a({
        forceMobileSizes: i,
        textPreset: e.text8,
        textProps: _textprops.text8
    })), {
        weight: e.text8.weight,
        dataAttributes: _object_spread({
            "component-name": "Text8",
            testid: "Text8"
        }, t)
    }), r));
}, Ht = (_param)=>{
    var { dataAttributes: t, forceMobileSizes: i } = _param, r = _object_without_properties(_param, [
        "dataAttributes",
        "forceMobileSizes"
    ]);
    const { textPresets: e } = (0, _hooks.useTheme)();
    return /* @__PURE__ */ (0, _jsxruntime.jsx)(o, _object_spread(_object_spread_props(_object_spread({}, a({
        forceMobileSizes: i,
        textPreset: e.text7,
        textProps: _textprops.text7
    })), {
        weight: e.text7.weight,
        dataAttributes: _object_spread({
            "component-name": "Text7",
            testid: "Text7"
        }, t)
    }), r));
}, zt = (_param)=>{
    var { dataAttributes: t, forceMobileSizes: i } = _param, r = _object_without_properties(_param, [
        "dataAttributes",
        "forceMobileSizes"
    ]);
    const { textPresets: e } = (0, _hooks.useTheme)();
    return /* @__PURE__ */ (0, _jsxruntime.jsx)(o, _object_spread(_object_spread_props(_object_spread({}, a({
        forceMobileSizes: i,
        textPreset: e.text6,
        textProps: _textprops.text6
    })), {
        weight: e.text6.weight,
        dataAttributes: _object_spread({
            "component-name": "Text6",
            testid: "Text6"
        }, t)
    }), r));
}, Ct = (_param)=>{
    var { dataAttributes: t, forceMobileSizes: i } = _param, r = _object_without_properties(_param, [
        "dataAttributes",
        "forceMobileSizes"
    ]);
    const { textPresets: e } = (0, _hooks.useTheme)();
    return /* @__PURE__ */ (0, _jsxruntime.jsx)(o, _object_spread(_object_spread_props(_object_spread({}, a({
        forceMobileSizes: i,
        textPreset: e.text5,
        textProps: _textprops.text5
    })), {
        weight: e.text5.weight,
        dataAttributes: _object_spread({
            "component-name": "Text5",
            testid: "Text5"
        }, t)
    }), r));
}, Rt = (_param)=>{
    var { dataAttributes: t, forceMobileSizes: i } = _param, r = _object_without_properties(_param, [
        "dataAttributes",
        "forceMobileSizes"
    ]);
    const { textPresets: e } = (0, _hooks.useTheme)();
    return /* @__PURE__ */ (0, _jsxruntime.jsx)(o, _object_spread(_object_spread_props(_object_spread({}, a({
        forceMobileSizes: i,
        textPreset: e.text4,
        textProps: _textprops.text4
    })), {
        weight: g(r),
        dataAttributes: _object_spread({
            "component-name": "Text4",
            testid: "Text4"
        }, t)
    }), r));
}, Wt = (_param)=>{
    var { dataAttributes: t, forceMobileSizes: i } = _param, r = _object_without_properties(_param, [
        "dataAttributes",
        "forceMobileSizes"
    ]);
    const { textPresets: e } = (0, _hooks.useTheme)();
    return /* @__PURE__ */ (0, _jsxruntime.jsx)(o, _object_spread(_object_spread_props(_object_spread({}, a({
        forceMobileSizes: i,
        textPreset: e.text3,
        textProps: _textprops.text3
    })), {
        weight: g(r),
        dataAttributes: _object_spread({
            "component-name": "Text3",
            testid: "Text3"
        }, t)
    }), r));
}, Lt = (_param)=>{
    var { dataAttributes: t, forceMobileSizes: i } = _param, r = _object_without_properties(_param, [
        "dataAttributes",
        "forceMobileSizes"
    ]);
    const { textPresets: e } = (0, _hooks.useTheme)();
    return /* @__PURE__ */ (0, _jsxruntime.jsx)(o, _object_spread(_object_spread_props(_object_spread({}, a({
        forceMobileSizes: i,
        textPreset: e.text2,
        textProps: _textprops.text2
    })), {
        weight: g(r),
        dataAttributes: _object_spread({
            "component-name": "Text2",
            testid: "Text2"
        }, t)
    }), r));
}, Nt = (_param)=>{
    var { dataAttributes: t, forceMobileSizes: i } = _param, r = _object_without_properties(_param, [
        "dataAttributes",
        "forceMobileSizes"
    ]);
    const { textPresets: e } = (0, _hooks.useTheme)();
    return /* @__PURE__ */ (0, _jsxruntime.jsx)(o, _object_spread(_object_spread_props(_object_spread({}, a({
        forceMobileSizes: i,
        textPreset: e.text1,
        textProps: _textprops.text1
    })), {
        weight: g(r),
        dataAttributes: _object_spread({
            "component-name": "Text1",
            testid: "Text1"
        }, t)
    }), r));
}, Et = o;
