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
    InfoRating: function() {
        return at;
    },
    Rating: function() {
        return rt;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _inline = /*#__PURE__*/ _interop_require_default(require("./inline.js"));
const _skincontractcssmistica = require("./skins/skin-contract.css-mistica.js");
const _themevariantcontext = require("./theme-variant-context.js");
const _ratingcssmistica = require("./rating.css-mistica.js");
const _classnames = /*#__PURE__*/ _interop_require_default(require("classnames"));
const _css = require("./utils/css.js");
const _environment = require("./utils/environment.js");
const _radiobutton = /*#__PURE__*/ _interop_require_wildcard(require("./radio-button.js"));
const _helpers = require("./utils/helpers.js");
const _iconstarfilled = /*#__PURE__*/ _interop_require_default(require("./generated/mistica-icons/icon-star-filled.js"));
const _iconstarregular = /*#__PURE__*/ _interop_require_default(require("./generated/mistica-icons/icon-star-regular.js"));
const _iconfacesadfilled = /*#__PURE__*/ _interop_require_default(require("./generated/mistica-icons/icon-face-sad-filled.js"));
const _iconfacesadregular = /*#__PURE__*/ _interop_require_default(require("./generated/mistica-icons/icon-face-sad-regular.js"));
const _iconfaceslightlysadfilled = /*#__PURE__*/ _interop_require_default(require("./generated/mistica-icons/icon-face-slightly-sad-filled.js"));
const _iconfaceslightlysadregular = /*#__PURE__*/ _interop_require_default(require("./generated/mistica-icons/icon-face-slightly-sad-regular.js"));
const _iconfaceneutralfilled = /*#__PURE__*/ _interop_require_default(require("./generated/mistica-icons/icon-face-neutral-filled.js"));
const _iconfaceneutralregular = /*#__PURE__*/ _interop_require_default(require("./generated/mistica-icons/icon-face-neutral-regular.js"));
const _iconfacehappyfilled = /*#__PURE__*/ _interop_require_default(require("./generated/mistica-icons/icon-face-happy-filled.js"));
const _iconfacehappyregular = /*#__PURE__*/ _interop_require_default(require("./generated/mistica-icons/icon-face-happy-regular.js"));
const _iconfacesuperhappyfilled = /*#__PURE__*/ _interop_require_default(require("./generated/mistica-icons/icon-face-super-happy-filled.js"));
const _iconfacesuperhappyregular = /*#__PURE__*/ _interop_require_default(require("./generated/mistica-icons/icon-face-super-happy-regular.js"));
const _hooks = require("./hooks.js");
const _texttokens = require("./text-tokens.js");
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
const To = 32, _o = 16, yo = 5, Eo = {
    ActiveIcon: _iconstarfilled.default,
    InactiveIcon: _iconstarregular.default,
    color: _skincontractcssmistica.vars.colors.controlActivated
}, Co = {
    ActiveIcon: _iconstarfilled.default,
    InactiveIcon: _iconstarregular.default,
    color: _skincontractcssmistica.vars.colors.warning
}, V = [
    {
        ActiveIcon: _iconfacesadfilled.default,
        InactiveIcon: _iconfacesadregular.default,
        color: _skincontractcssmistica.vars.colors.errorHigh
    },
    {
        ActiveIcon: _iconfaceslightlysadfilled.default,
        InactiveIcon: _iconfaceslightlysadregular.default,
        color: _skincontractcssmistica.vars.colors.error
    },
    {
        ActiveIcon: _iconfaceneutralfilled.default,
        InactiveIcon: _iconfaceneutralregular.default,
        color: _skincontractcssmistica.vars.colors.warning
    },
    {
        ActiveIcon: _iconfacehappyfilled.default,
        InactiveIcon: _iconfacehappyregular.default,
        color: _skincontractcssmistica.vars.colors.success
    },
    {
        ActiveIcon: _iconfacesuperhappyfilled.default,
        InactiveIcon: _iconfacesuperhappyregular.default,
        color: _skincontractcssmistica.vars.colors.successHigh
    }
], Go = (param)=>{
    let { value: i, defaultValue: e, iconsCount: I, onChangeValue: a } = param;
    const n = i !== void 0, p = _react.useCallback((l)=>l === void 0 ? 0 : Math.max(0, Math.min(I, l)), [
        I
    ]), [A, F] = _react.useState(p(e)), R = (l)=>{
        n || F(l), a == null || a(l);
    };
    return [
        n ? p(i) : A,
        R
    ];
}, H = (param)=>{
    let { icons: i = V, count: e = yo, icon: I = Eo, size: a = To, type: n = "quantitative", dataAttributes: p, onChangeValue: A, defaultValue: F, value: R, disabled: l, role: N, valueLabels: O, withHalfValue: Q, "aria-label": f, "aria-labelledby": S } = param;
    const { texts: v, t: u } = (0, _hooks.useTheme)(), $ = [
        v.ratingVeryBadLabel || u(_texttokens.ratingVeryBadLabel),
        v.ratingBadLabel || u(_texttokens.ratingBadLabel),
        v.ratingRegularLabel || u(_texttokens.ratingRegularLabel),
        v.ratingGoodLabel || u(_texttokens.ratingGoodLabel),
        v.ratingVeryGoodLabel || u(_texttokens.ratingVeryGoodLabel)
    ], B = Array.from({
        length: e
    }, (o, t)=>(v.ratingQuantitativeLabel || u(_texttokens.ratingQuantitativeLabel)).replace("1$s", String(t + 1)).replace("2$s", String(e))), m = n === "qualitative" ? i : Array.from({
        length: e
    }, ()=>I), g = O !== null && O !== void 0 ? O : n === "qualitative" && (0, _helpers.isEqual)(m, V) ? $ : B, b = N === "radiogroup", _ = b ? 16 : a <= 16 ? 2 : a <= 24 ? 4 : 8, y = (0, _themevariantcontext.useThemeVariant)(), [L, E] = _react.useState(void 0), C = (0, _environment.isTouchableDevice)(), [s, M] = Go({
        value: R,
        defaultValue: F,
        iconsCount: m.length,
        onChangeValue: A
    }), j = (o)=>L !== void 0 && !l ? n === "qualitative" && o === L || n === "quantitative" && o <= L ? "active" : "inactive" : n === "qualitative" ? o === s ? "active" : "inactive" : b ? o <= s ? "active" : "inactive" : Q ? o - 0.75 <= s && s < o - 0.25 ? "half" : o - 0.25 <= s ? "active" : "inactive" : o - 0.5 < s ? "active" : "inactive", w = (o, t)=>{
        const d = y === "inverse" ? _skincontractcssmistica.vars.colors.inverse : m[t].color, h = y === "inverse" ? _skincontractcssmistica.vars.colors.inverse : b ? _skincontractcssmistica.vars.colors.control : m[0].color;
        switch(j(t + 1)){
            case "active":
                return /* @__PURE__ */ (0, _jsxruntime.jsx)(o.ActiveIcon, {
                    size: a,
                    color: d
                }, t);
            case "inactive":
                return /* @__PURE__ */ (0, _jsxruntime.jsx)(o.InactiveIcon, {
                    size: a,
                    color: h
                }, t);
            case "half":
            default:
                return /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", {
                    className: _ratingcssmistica.halfIconContainer,
                    children: [
                        /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                            className: _ratingcssmistica.halfIconInactive,
                            children: /* @__PURE__ */ (0, _jsxruntime.jsx)(o.InactiveIcon, {
                                size: a,
                                color: h
                            })
                        }),
                        /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                            className: _ratingcssmistica.halfIconActive,
                            children: /* @__PURE__ */ (0, _jsxruntime.jsx)(o.ActiveIcon, {
                                size: a,
                                color: d
                            })
                        })
                    ]
                }, t);
        }
    }, G = (o, t)=>{
        const d = w(o, t);
        return b ? /* @__PURE__ */ (0, _jsxruntime.jsx)(_radiobutton.default, {
            "aria-label": g[t],
            value: g[t],
            render: (param)=>{
                let { labelId: h, disabled: Z } = param;
                return /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                    id: h,
                    onMouseEnter: ()=>{
                        C || E(t + 1);
                    },
                    onMouseLeave: ()=>{
                        C || E(void 0);
                    },
                    style: (0, _css.applyCssVars)({
                        [_ratingcssmistica.vars.iconSize]: `${a}px`
                    }),
                    className: (0, _classnames.default)(_ratingcssmistica.touchable, {
                        [_ratingcssmistica.disabled]: Z,
                        [_ratingcssmistica.firstIcon]: t === 0,
                        [_ratingcssmistica.lastIcon]: t === m.length - 1
                    }),
                    children: /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                        className: _ratingcssmistica.IconWrapper,
                        children: d
                    })
                });
            }
        }, t) : d;
    };
    return N === "img" ? /* @__PURE__ */ (0, _jsxruntime.jsx)(_inline.default, {
        space: _,
        dataAttributes: p,
        role: N,
        "aria-label": f !== null && f !== void 0 ? f : S ? void 0 : `${s} de ${e}`,
        "aria-labelledby": f ? void 0 : S,
        children: m.map(G)
    }) : /* @__PURE__ */ (0, _jsxruntime.jsx)(_radiobutton.RadioGroup, {
        name: "info-rating",
        "aria-label": f,
        "aria-labelledby": f ? void 0 : S,
        disabled: l,
        onChange: (o)=>{
            M(g.findIndex((t)=>t === o) + 1);
        },
        value: g[s - 1],
        dataAttributes: p,
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_inline.default, {
            space: _,
            children: m.map(G)
        })
    });
}, rt = (_param)=>{
    var { dataAttributes: i } = _param, e = _object_without_properties(_param, [
        "dataAttributes"
    ]);
    return /* @__PURE__ */ (0, _jsxruntime.jsx)(H, _object_spread({
        role: "radiogroup",
        dataAttributes: _object_spread({
            "component-name": "Rating"
        }, i)
    }, e));
}, at = (_param)=>{
    var { dataAttributes: i, icon: e, size: I } = _param, a = _object_without_properties(_param, [
        "dataAttributes",
        "icon",
        "size"
    ]);
    return /* @__PURE__ */ (0, _jsxruntime.jsx)(H, _object_spread({
        size: I !== null && I !== void 0 ? I : _o,
        icon: e !== null && e !== void 0 ? e : Co,
        role: "img",
        dataAttributes: _object_spread({
            "component-name": "InfoRating"
        }, i)
    }, a));
};
