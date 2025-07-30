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
    ErrorFeedbackScreen: function() {
        return We;
    },
    FeedbackScreen: function() {
        return I;
    },
    InfoFeedbackScreen: function() {
        return _e;
    },
    SuccessFeedback: function() {
        return qe;
    },
    SuccessFeedbackScreen: function() {
        return Ee;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _hooks = require("./hooks.js");
const _buttonfixedfooterlayout = /*#__PURE__*/ _interop_require_default(require("./button-fixed-footer-layout.js"));
const _constants = require("./skins/constants.js");
const _overscrollcolorcontext = require("./overscroll-color-context.js");
const _iconsuccess = /*#__PURE__*/ _interop_require_default(require("./icons/icon-success.js"));
const _iconsuccessvivo = /*#__PURE__*/ _interop_require_default(require("./icons/icon-success-vivo.js"));
const _iconerror = /*#__PURE__*/ _interop_require_default(require("./icons/icon-error.js"));
const _iconinfo = /*#__PURE__*/ _interop_require_default(require("./icons/icon-info.js"));
const _webviewbridge = require("@tef-novum/webview-bridge");
const _platform = require("./utils/platform.js");
const _text = require("./text.js");
const _box = /*#__PURE__*/ _interop_require_default(require("./box.js"));
const _boxed = require("./boxed.js");
const _responsivelayout = /*#__PURE__*/ _interop_require_wildcard(require("./responsive-layout.js"));
const _stack = /*#__PURE__*/ _interop_require_default(require("./stack.js"));
const _classnames = /*#__PURE__*/ _interop_require_default(require("classnames"));
const _buttongroup = /*#__PURE__*/ _interop_require_default(require("./button-group.js"));
const _skincontractcssmistica = require("./skins/skin-contract.css-mistica.js");
const _feedbackcssmistica = require("./feedback.css-mistica.js");
const _iconsuccessvivonew = /*#__PURE__*/ _interop_require_default(require("./icons/icon-success-vivo-new.js"));
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
const D = (r)=>!(0, _platform.isRunningAcceptanceTest)(r), E = (param)=>{
    let { primaryButton: r, secondaryButton: t } = param;
    return !!r || !!t;
}, V = (r)=>{
    (0, _webviewbridge.isWebViewBridgeAvailable)() && (0, _webviewbridge.requestVibration)(r).catch(()=>{});
}, W = (r)=>{
    _react.useEffect(()=>{
        let t;
        return r === "success" && (t = setTimeout(()=>V("success"), 700)), r === "error" && (t = setTimeout(()=>V("error"), 1e3)), ()=>{
            clearTimeout(t);
        };
    }, [
        r
    ]);
}, _ = (param, c)=>{
    let { asset: r, title: t, description: o, extra: s } = param;
    const a = o && Array.isArray(o) ? /* @__PURE__ */ (0, _jsxruntime.jsx)(_stack.default, {
        space: 16,
        children: o.map((d, l)=>/* @__PURE__ */ (0, _jsxruntime.jsx)("p", {
                children: d
            }, l))
    }) : o;
    return /* @__PURE__ */ (0, _jsxruntime.jsxs)(_stack.default, {
        space: 24,
        children: [
            /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                className: _feedbackcssmistica.assetContainer,
                "data-testid": "icon",
                children: r
            }),
            /* @__PURE__ */ (0, _jsxruntime.jsxs)(_stack.default, {
                space: 16,
                className: (0, _classnames.default)(_feedbackcssmistica.feedbackData),
                children: [
                    /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                        className: (0, _classnames.default)(c && _feedbackcssmistica.feedbackTextAppearFast),
                        "data-testid": "title",
                        children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text6, {
                            as: "h1",
                            children: t
                        })
                    }),
                    a && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                        className: (0, _classnames.default)(c && _feedbackcssmistica.feedbackTextAppearMedium),
                        "data-testid": "description",
                        children: a && /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text3, {
                            regular: !0,
                            color: _skincontractcssmistica.vars.colors.textSecondary,
                            children: a
                        })
                    }),
                    s && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                        className: (0, _classnames.default)(c && (a ? _feedbackcssmistica.feedbackTextAppearSlow : _feedbackcssmistica.feedbackTextAppearMedium)),
                        "data-testid": "slot",
                        children: s
                    })
                ]
            })
        ]
    });
}, q = (r, t)=>{
    const o = E(t);
    return /* @__PURE__ */ (0, _jsxruntime.jsxs)(_stack.default, {
        space: {
            desktop: 40,
            mobile: 24
        },
        children: [
            r,
            o && /* @__PURE__ */ (0, _jsxruntime.jsx)(_buttongroup.default, _object_spread({}, t))
        ]
    });
}, w = (param)=>{
    let { isInverse: r, body: t, imageFit: o, imageUrl: s, dataAttributes: c } = param;
    return /* @__PURE__ */ (0, _jsxruntime.jsx)(_boxed.InternalBoxed, {
        borderRadius: _skincontractcssmistica.vars.borderRadii.legacyDisplay,
        desktopOnly: !0,
        variant: r ? "inverse" : "default",
        dataAttributes: c,
        children: /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", {
            className: _feedbackcssmistica.desktopContainer,
            children: [
                /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                    className: _feedbackcssmistica.desktopContent,
                    children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_box.default, {
                        padding: {
                            desktop: 64,
                            mobile: 0
                        },
                        paddingTop: 0,
                        children: t
                    })
                }),
                s && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                    className: _feedbackcssmistica.desktopImage,
                    "data-testid": "image",
                    style: {
                        backgroundImage: `url(${s})`,
                        backgroundPosition: o === "fit" ? "bottom right" : "center right",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: o === "fit" ? "contain" : "cover",
                        flex: 1,
                        maxWidth: 600
                    }
                })
            ]
        })
    });
}, pe = ()=>((0, _overscrollcolorcontext.useSetOverscrollColor)({
        topColor: _skincontractcssmistica.vars.colors.backgroundBrandTop,
        bottomColor: "transparent"
    }), null), I = (param)=>{
    let { title: r, description: t, extra: o, primaryButton: s, secondaryButton: c, link: a, hapticFeedback: d, asset: l, animateText: f = !1, isInverse: i = !1, unstable_inlineInDesktop: h, imageUrl: S, imageFit: N, dataAttributes: g } = param;
    W(d);
    const { platformOverrides: v, isDarkMode: b } = (0, _hooks.useTheme)(), { isTabletOrSmaller: L } = (0, _hooks.useScreenSize)(), j = E({
        primaryButton: s,
        secondaryButton: c,
        link: a
    }), T = _({
        asset: l,
        title: r,
        description: t,
        extra: o
    }, f && D(v));
    return !L && h ? q(T, {
        primaryButton: s,
        secondaryButton: c,
        link: a
    }) : /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
        style: {
            position: "relative"
        },
        children: /* @__PURE__ */ (0, _jsxruntime.jsxs)(_responsivelayout.default, {
            children: [
                i && /* @__PURE__ */ (0, _jsxruntime.jsx)(pe, {}),
                /* @__PURE__ */ (0, _jsxruntime.jsx)(_box.default, {
                    paddingTop: {
                        desktop: 64,
                        mobile: 0
                    },
                    children: w({
                        isInverse: i,
                        body: // doesn't expand when nested in mobile. This can cause double margin when footer is not fixed
                        /* @__PURE__ */ (0, _jsxruntime.jsx)(_responsivelayout.ResetResponsiveLayout, {
                            skipDesktop: !0,
                            children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_buttonfixedfooterlayout.default, {
                                isFooterVisible: j,
                                button: s,
                                secondaryButton: c,
                                link: a,
                                footerBgColor: i && !b ? _skincontractcssmistica.vars.colors.backgroundBrandBottom : void 0,
                                containerBgColor: i ? _skincontractcssmistica.vars.colors.backgroundBrand : _skincontractcssmistica.vars.colors.background,
                                children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_responsivelayout.default, {
                                    children: /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                        className: _feedbackcssmistica.container,
                                        children: /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                            className: (0, _classnames.default)(_feedbackcssmistica.innerContainer, {
                                                [_feedbackcssmistica.innerContainerWithButtons]: s || c || a
                                            }),
                                            children: T
                                        })
                                    })
                                })
                            })
                        }),
                        imageFit: N,
                        imageUrl: S,
                        dataAttributes: g
                    })
                })
            ]
        })
    });
}, Ee = (_param)=>{
    var { dataAttributes: r } = _param, t = _object_without_properties(_param, [
        "dataAttributes"
    ]);
    const { isTabletOrSmaller: o } = (0, _hooks.useScreenSize)(), { skinName: s, themeVariants: c } = (0, _hooks.useTheme)();
    return /* @__PURE__ */ (0, _jsxruntime.jsx)(I, _object_spread_props(_object_spread({}, t), {
        isInverse: c.successFeedback === "inverse" && (!t.unstable_inlineInDesktop || o),
        hapticFeedback: "success",
        asset: s === _constants.VIVO_SKIN ? /* @__PURE__ */ (0, _jsxruntime.jsx)(_iconsuccessvivo.default, {
            size: "100%"
        }) : s === _constants.VIVO_NEW_SKIN ? /* @__PURE__ */ (0, _jsxruntime.jsx)(_iconsuccessvivonew.default, {
            size: "100%"
        }) : /* @__PURE__ */ (0, _jsxruntime.jsx)(_iconsuccess.default, {
            size: "100%"
        }),
        animateText: !0,
        imageUrl: t.imageUrl,
        imageFit: t.imageFit,
        dataAttributes: _object_spread({
            "component-name": "SuccessFeedbackScreen",
            testid: "SuccessFeedbackScreen"
        }, r)
    }));
}, We = (_param)=>{
    var { errorReference: r, dataAttributes: t } = _param, o = _object_without_properties(_param, [
        "errorReference",
        "dataAttributes"
    ]);
    return /* @__PURE__ */ (0, _jsxruntime.jsx)(I, _object_spread_props(_object_spread({}, o), {
        hapticFeedback: "error",
        asset: /* @__PURE__ */ (0, _jsxruntime.jsx)(_iconerror.default, {
            size: "100%"
        }),
        animateText: !0,
        dataAttributes: _object_spread({
            "component-name": "ErrorFeedbackScreen",
            testid: "ErrorFeedbackScreen"
        }, t),
        extra: /* @__PURE__ */ (0, _jsxruntime.jsx)(_stack.default, {
            space: 16,
            children: r && /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text2, {
                color: _skincontractcssmistica.vars.colors.textSecondary,
                regular: !0,
                children: r
            })
        })
    }));
}, _e = (_param)=>{
    var { dataAttributes: r, Icon: t = _iconinfo.default } = _param, o = _object_without_properties(_param, [
        "dataAttributes",
        "Icon"
    ]);
    return /* @__PURE__ */ (0, _jsxruntime.jsx)(I, _object_spread({
        dataAttributes: _object_spread({
            "component-name": "InfoFeedbackScreen",
            testid: "InfoFeedbackScreen"
        }, r),
        asset: /* @__PURE__ */ (0, _jsxruntime.jsx)(t, {
            size: "100%"
        })
    }, o));
}, qe = (param)=>{
    let { title: r, description: t, extra: o, primaryButton: s, secondaryButton: c, link: a, imageUrl: d, imageFit: l, dataAttributes: f } = param;
    W("success");
    const { skinName: i, platformOverrides: h, themeVariants: S } = (0, _hooks.useTheme)(), g = _({
        asset: i === _constants.VIVO_SKIN ? /* @__PURE__ */ (0, _jsxruntime.jsx)(_iconsuccessvivo.default, {
            size: "100%"
        }) : i === _constants.VIVO_NEW_SKIN ? /* @__PURE__ */ (0, _jsxruntime.jsx)(_iconsuccessvivonew.default, {
            size: "100%"
        }) : /* @__PURE__ */ (0, _jsxruntime.jsx)(_iconsuccess.default, {
            size: "100%"
        }),
        title: r,
        description: t,
        extra: o
    }, D(h)), v = q(g, {
        primaryButton: s,
        secondaryButton: c,
        link: a
    }), b = S.successFeedback === "inverse";
    return w({
        isInverse: b,
        body: /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
            className: b ? _feedbackcssmistica.backgroundBrand : void 0,
            children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_box.default, {
                paddingX: {
                    mobile: 16,
                    tablet: 24,
                    desktop: 0
                },
                children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_box.default, {
                    paddingBottom: {
                        desktop: 0,
                        mobile: 48
                    },
                    paddingTop: 64,
                    children: v
                })
            })
        }),
        imageFit: l,
        imageUrl: d,
        dataAttributes: _object_spread({
            "component-name": "SuccessFeedback",
            testid: "SuccessFeedback"
        }, f)
    });
};
