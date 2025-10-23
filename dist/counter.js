"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Mr;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _dom = require("./utils/dom.js");
const _countercssmistica = require("./counter.css-mistica.js");
const _themevariantcontext = require("./theme-variant-context.js");
const _skincontractcssmistica = require("./skins/skin-contract.css-mistica.js");
const _inline = /*#__PURE__*/ _interop_require_default(require("./inline.js"));
const _text = require("./text.js");
const _touchable = require("./touchable.js");
const _iconsubtractregular = /*#__PURE__*/ _interop_require_default(require("./generated/mistica-icons/icon-subtract-regular.js"));
const _iconaddmoreregular = /*#__PURE__*/ _interop_require_default(require("./generated/mistica-icons/icon-add-more-regular.js"));
const _icontrashcanregular = /*#__PURE__*/ _interop_require_default(require("./generated/mistica-icons/icon-trash-can-regular.js"));
const _hooks = require("./hooks.js");
const _classnames = /*#__PURE__*/ _interop_require_default(require("classnames"));
const _screenreaderonly = /*#__PURE__*/ _interop_require_default(require("./screen-reader-only.js"));
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
const M = 20, cr = (param)=>{
    let { value: p, defaultValue: b, min: h, max: c, onChangeValue: a } = param;
    const s = p !== void 0, f = _react.useCallback((i)=>i === void 0 ? h : Math.max(h, Math.min(c, i)), [
        h,
        c
    ]), [t, I] = _react.useState(f(b)), N = (i)=>{
        s || I(i), a == null || a(i);
    };
    return [
        s ? f(p) : t,
        N
    ];
}, sr = (param)=>{
    let { value: p, defaultValue: b, onChangeValue: h, onRemove: c, min: a, max: s, dataAttributes: f, disabled: t, removeLabel: I, increaseLabel: N, decreaseLabel: i, valueLabel: k } = param;
    const C = (0, _themevariantcontext.useThemeVariant)(), g = _react.useId(), { texts: u, t: d, isDarkMode: A } = (0, _hooks.useTheme)(), l = a === void 0 ? 0 : a, m = Math.max(l, s === void 0 ? 999 : s), [e, B] = cr({
        value: p,
        defaultValue: b,
        min: l,
        max: m,
        onChangeValue: h
    }), o = !!c && e === l, R = ()=>I !== null && I !== void 0 ? I : u.counterRemoveLabel || d(_texttokens.counterRemoveLabel), $ = ()=>N !== null && N !== void 0 ? N : u.counterIncreaseLabel || d(_texttokens.counterIncreaseLabel), z = ()=>i !== null && i !== void 0 ? i : u.counterDecreaseLabel || d(_texttokens.counterDecreaseLabel), j = ()=>`${e}, ${k !== null && k !== void 0 ? k : u.counterQuantity || d(_texttokens.counterQuantity)}${a !== void 0 ? `, ${u.counterMinValue || d(_texttokens.counterMinValue)} ${a}` : ""}${s !== void 0 ? `, ${u.counterMaxValue || d(_texttokens.counterMaxValue)} ${s}` : ""}`;
    return /* @__PURE__ */ (0, _jsxruntime.jsx)("div", _object_spread_props(_object_spread({
        className: (0, _classnames.default)(_countercssmistica.counter, {
            [_countercssmistica.disabled]: t
        })
    }, (0, _dom.getPrefixedDataAttributes)(f, "Counter")), {
        style: {
            border: `1px solid ${(C === "inverse" || C === "media") && !A ? _skincontractcssmistica.vars.colors.backgroundContainer : _skincontractcssmistica.vars.colors.inputBorder}`
        },
        children: /* @__PURE__ */ (0, _jsxruntime.jsxs)(_inline.default, {
            space: 8,
            alignItems: "center",
            children: [
                /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                    className: (0, _classnames.default)(_countercssmistica.buttonContainer, {
                        [_countercssmistica.hasTrashIcon]: o,
                        [_countercssmistica.isButtonDisabled]: t || !o && e === l,
                        [_countercssmistica.disabled]: !t && !o && e === l
                    }),
                    children: /* @__PURE__ */ (0, _jsxruntime.jsxs)(_touchable.BaseTouchable, {
                        className: _countercssmistica.button,
                        disabled: !o && e === l || t,
                        onPress: ()=>o ? c == null ? void 0 : c() : B(e - 1),
                        "aria-label": o ? R() : z(),
                        "aria-controls": g,
                        children: [
                            /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                className: _countercssmistica.buttonBackground
                            }),
                            /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                className: _countercssmistica.decreaseButtonIcon,
                                "aria-hidden": o,
                                children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_iconsubtractregular.default, {
                                    size: M,
                                    color: e === l && !o || t ? _skincontractcssmistica.vars.colors.control : _skincontractcssmistica.vars.colors.controlActivated
                                })
                            }),
                            /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                className: _countercssmistica.trashButtonIcon,
                                "aria-hidden": !o,
                                children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_icontrashcanregular.default, {
                                    size: M,
                                    color: _skincontractcssmistica.vars.colors.controlError
                                })
                            })
                        ]
                    })
                }),
                /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                    className: _countercssmistica.valueContainer,
                    style: {
                        width: `${Math.max(3, String(m).length) * 1.25}ch`
                    },
                    id: g,
                    "aria-live": "polite",
                    children: /* @__PURE__ */ (0, _jsxruntime.jsxs)(_themevariantcontext.ThemeVariant, {
                        variant: "default",
                        children: [
                            /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                "aria-hidden": !0,
                                children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text3, {
                                    regular: !0,
                                    color: _skincontractcssmistica.vars.colors.textPrimary,
                                    children: e
                                })
                            }),
                            /* @__PURE__ */ (0, _jsxruntime.jsx)(_screenreaderonly.default, {
                                children: /* @__PURE__ */ (0, _jsxruntime.jsx)("span", {
                                    children: j()
                                })
                            })
                        ]
                    })
                }),
                /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                    className: (0, _classnames.default)(_countercssmistica.buttonContainer, {
                        [_countercssmistica.isButtonDisabled]: t || e === m,
                        [_countercssmistica.disabled]: !t && e === m
                    }),
                    children: /* @__PURE__ */ (0, _jsxruntime.jsxs)(_touchable.BaseTouchable, {
                        className: _countercssmistica.button,
                        disabled: e === m || t,
                        onPress: ()=>B(e + 1),
                        "aria-label": $(),
                        "aria-controls": g,
                        children: [
                            /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                className: _countercssmistica.buttonBackground
                            }),
                            /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                className: _countercssmistica.defaultButtonIcon,
                                children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_iconaddmoreregular.default, {
                                    size: M,
                                    color: e === m || t ? _skincontractcssmistica.vars.colors.control : _skincontractcssmistica.vars.colors.controlActivated
                                })
                            })
                        ]
                    })
                })
            ]
        })
    }));
}, Mr = sr;
