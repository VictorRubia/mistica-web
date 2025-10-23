"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return X;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _themevariantcontext = require("./theme-variant-context.js");
const _stack = /*#__PURE__*/ _interop_require_default(require("./stack.js"));
const _touchable = require("./touchable.js");
const _text = require("./text.js");
const _textprops = require("./text-props.js");
const _boxed = require("./boxed.js");
const _maybedismissable = /*#__PURE__*/ _interop_require_wildcard(require("./maybe-dismissable.js"));
const _highlightedcardcssmistica = require("./highlighted-card.css-mistica.js");
const _skincontractcssmistica = require("./skins/skin-contract.css-mistica.js");
const _hooks = require("./hooks.js");
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
const B = /*#__PURE__*/ _react.forwardRef((s, e)=>{
    var _s_isInverse;
    const { title: o, description: r, imageUrl: a, imageFit: n, imageAlt: c, titleAs: b = "h3", width: m, dataAttributes: f, titleLinesMax: v, descriptionLinesMax: x } = s, t = _object_without_properties(s, [
        "title",
        "description",
        "imageUrl",
        "imageFit",
        "imageAlt",
        "titleAs",
        "width",
        "dataAttributes",
        "titleLinesMax",
        "descriptionLinesMax"
    ]), p = (0, _themevariantcontext.useIsInverseOrMediaVariant)(), I = (_s_isInverse = s.isInverse) !== null && _s_isInverse !== void 0 ? _s_isInverse : p, h = (0, _maybedismissable.useIsDismissable)(), { textPresets: w } = (0, _hooks.useTheme)(), d = /* @__PURE__ */ (0, _jsxruntime.jsxs)(_boxed.Boxed, {
        ref: e,
        variant: I ? "inverse" : "default",
        className: _highlightedcardcssmistica.container,
        dataAttributes: _object_spread({
            "component-name": "HighlightedCard",
            testid: "HighlightedCard"
        }, f),
        width: m ? `${m}px` : "100%",
        minHeight: "100%",
        children: [
            /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", {
                role: h ? void 0 : "region",
                className: _highlightedcardcssmistica.textContainerVariant[a ? "withImage" : "withoutImage"],
                "aria-label": h ? void 0 : t["aria-label"],
                children: [
                    /* @__PURE__ */ (0, _jsxruntime.jsxs)(_stack.default, {
                        space: 8,
                        children: [
                            !!o && /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text, _object_spread_props(_object_spread({}, _textprops.text4), {
                                truncate: v,
                                weight: w.cardTitle.weight,
                                as: b,
                                hyphens: "auto",
                                dataAttributes: {
                                    testid: "title"
                                },
                                children: o
                            })),
                            !!r && /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text2, {
                                regular: !0,
                                color: _skincontractcssmistica.vars.colors.textSecondary,
                                truncate: x,
                                as: "p",
                                hyphens: "auto",
                                dataAttributes: {
                                    testid: "description"
                                },
                                children: r
                            })
                        ]
                    }),
                    t.button && /* @__PURE__ */ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
                        children: [
                            /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                style: {
                                    minHeight: 16,
                                    flexGrow: 1
                                }
                            }),
                            t.button
                        ]
                    })
                ]
            }),
            a && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", _object_spread_props(_object_spread({
                "data-testid": "image"
            }, c ? {
                role: "img",
                "aria-label": c
            } : {}), {
                className: _highlightedcardcssmistica.imageContent,
                style: {
                    backgroundImage: `url(${a})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: n === "fit" ? "contain" : "cover",
                    backgroundPosition: n === "fit" ? "bottom right" : `center ${n === "fill-center" ? "center" : "right"}`
                }
            }))
        ]
    });
    return t.button ? d : t.onPress || t.to || t.href ? /* @__PURE__ */ (0, _jsxruntime.jsx)(_touchable.BaseTouchable, _object_spread_props(_object_spread({}, t), {
        className: _highlightedcardcssmistica.touchableContainer,
        children: d
    })) : d;
}), F = /*#__PURE__*/ _react.forwardRef((_param, o)=>{
    var { "aria-label": s } = _param, e = _object_without_properties(_param, [
        "aria-label"
    ]);
    var _e_isInverse;
    const r = s || e.title || e.description, a = (0, _themevariantcontext.useIsInverseOrMediaVariant)(), n = (_e_isInverse = e.isInverse) !== null && _e_isInverse !== void 0 ? _e_isInverse : a;
    return /* @__PURE__ */ (0, _jsxruntime.jsx)(_maybedismissable.default, {
        onClose: e.onClose,
        "aria-label": r,
        width: e.width,
        variant: e.imageUrl ? "media" : n ? "inverse" : void 0,
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)(B, _object_spread_props(_object_spread({}, e), {
            "aria-label": r,
            ref: o
        }))
    });
}), X = F;
