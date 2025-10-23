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
    CardActionIconButton: function() {
        return Ta;
    },
    CardActionSpinner: function() {
        return Ba;
    },
    CardActionsGroup: function() {
        return oe;
    },
    DataCard: function() {
        return sd;
    },
    DisplayDataCard: function() {
        return hd;
    },
    DisplayMediaCard: function() {
        return cd;
    },
    MediaCard: function() {
        return td;
    },
    NakedCard: function() {
        return nd;
    },
    PosterCard: function() {
        return vd;
    },
    SmallNakedCard: function() {
        return od;
    },
    SnapCard: function() {
        return ld;
    },
    useInnerText: function() {
        return H;
    },
    useVideoWithControls: function() {
        return $e;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _tag = /*#__PURE__*/ _interop_require_default(require("./tag.js"));
const _stack = /*#__PURE__*/ _interop_require_default(require("./stack.js"));
const _box = /*#__PURE__*/ _interop_require_default(require("./box.js"));
const _text = require("./text.js");
const _textprops = require("./text-props.js");
const _boxed = require("./boxed.js");
const _buttongroup = /*#__PURE__*/ _interop_require_default(require("./button-group.js"));
const _image = /*#__PURE__*/ _interop_require_default(require("./image.js"));
const _touchable = require("./touchable.js");
const _skincontractcssmistica = require("./skins/skin-contract.css-mistica.js");
const _cardcssmistica = require("./card.css-mistica.js");
const _imagecssmistica = require("./image.css-mistica.js");
const _hooks = require("./hooks.js");
const _iconbutton = require("./icon-button.js");
const _iconcloseregular = /*#__PURE__*/ _interop_require_default(require("./generated/mistica-icons/icon-close-regular.js"));
const _iconpausefilled = /*#__PURE__*/ _interop_require_default(require("./generated/mistica-icons/icon-pause-filled.js"));
const _iconplayfilled = /*#__PURE__*/ _interop_require_default(require("./generated/mistica-icons/icon-play-filled.js"));
const _common = require("./utils/common.js");
const _spinner = /*#__PURE__*/ _interop_require_default(require("./spinner.js"));
const _video = /*#__PURE__*/ _interop_require_default(require("./video.js"));
const _themevariantcontext = require("./theme-variant-context.js");
const _classnames = /*#__PURE__*/ _interop_require_default(require("classnames"));
const _inline = /*#__PURE__*/ _interop_require_default(require("./inline.js"));
const _dom = require("./utils/dom.js");
const _platform = require("./utils/platform.js");
const _css = require("./utils/css.js");
const _texttokens = require("./text-tokens.js");
const _headings = require("./utils/headings.js");
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
const H = ()=>{
    const [a, d] = _react.useState(""), r = _react.useCallback((n)=>{
        n && d((process.env.NODE_ENV === "test" ? n.textContent : n.innerText) || "");
    }, []);
    return {
        text: a,
        ref: r
    };
}, Xe = (a, d, r)=>{
    const { texts: n, t: v } = (0, _hooks.useTheme)(), t = a ? [
        ...a
    ] : [];
    return d && t.push({
        label: r || n.closeButtonLabel || v(_texttokens.closeButtonLabel),
        onPress: d,
        Icon: _iconcloseregular.default
    }), t;
}, Ta = (a)=>{
    const d = (0, _themevariantcontext.useThemeVariant)();
    return a.Icon ? /* @__PURE__ */ (0, _jsxruntime.jsx)(_iconbutton.IconButton, _object_spread_props(_object_spread({}, a), {
        "aria-label": a.label,
        small: !0,
        type: "neutral",
        backgroundType: "transparent"
    })) : /* @__PURE__ */ (0, _jsxruntime.jsx)(_iconbutton.ToggleIconButton, _object_spread_props(_object_spread({}, a), {
        checkedProps: _object_spread_props(_object_spread({}, a.checkedProps), {
            "aria-label": a.checkedProps.label,
            type: d === "media" ? "neutral" : "brand",
            backgroundType: "solid"
        }),
        uncheckedProps: _object_spread_props(_object_spread({}, a.uncheckedProps), {
            "aria-label": a.uncheckedProps.label,
            type: "neutral",
            backgroundType: "transparent"
        }),
        small: !0
    }));
}, oe = (param)=>{
    let { actions: a, padding: d = 16, onClose: r, variant: n = "default", closeButtonLabel: v } = param;
    const t = Xe(a, r, v);
    return t.length > 0 ? /* @__PURE__ */ (0, _jsxruntime.jsx)(_themevariantcontext.ThemeVariant, {
        variant: n,
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
            style: {
                position: "absolute",
                right: d,
                top: d,
                zIndex: 3
            },
            children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_inline.default, {
                space: 16,
                dataAttributes: {
                    testid: "topActions"
                },
                children: t.map((l, o)=>"Icon" in l || "checkedProps" in l ? /* @__PURE__ */ (0, _jsxruntime.jsx)(Ta, _object_spread({}, l), o) : l)
            })
        })
    }) : /* @__PURE__ */ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {});
}, Ra = (a)=>a ? typeof a == "number" ? a : ({
        "1:1": 1,
        "16:9": 16 / 9,
        "7:10": 7 / 10,
        "9:10": 9 / 10,
        auto: 0
    })[a] : 0, L = /*#__PURE__*/ _react.forwardRef((param, m)=>{
    let { children: a, width: d, height: r, aspectRatio: n, dataAttributes: v, className: t, "aria-label": i, "aria-labelledby": l, "aria-description": o, "aria-describedby": b } = param;
    const c = d && r ? void 0 : Ra(n);
    return(// eslint-disable-next-line jsx-a11y/role-supports-aria-props
    /* @__PURE__ */ (0, _jsxruntime.jsx)("section", _object_spread_props(_object_spread({}, (0, _dom.getPrefixedDataAttributes)(v)), {
        ref: m,
        "aria-label": i,
        "aria-labelledby": l,
        "aria-description": o,
        "aria-describedby": b,
        className: (0, _classnames.default)(t, _cardcssmistica.cardContainer),
        style: _object_spread({
            width: d || "100%",
            height: r || "100%"
        }, c ? (0, _css.applyCssVars)({
            [_cardcssmistica.vars.aspectRatio]: String(c)
        }) : {}),
        children: a
    })));
}), _e = (a)=>{
    const d = typeof a == "string" ? a : a == null ? void 0 : a.src, r = typeof a == "string" || a == null ? void 0 : a.srcSet;
    return /* @__PURE__ */ (0, _jsxruntime.jsx)(_image.default, {
        width: "100%",
        height: "100%",
        src: d || "",
        srcSet: r
    });
}, wa = {
    loading: {
        showSpinner: "loadingTimeout",
        play: "playing",
        pause: "paused",
        fail: "error"
    },
    loadingTimeout: {
        play: "playing",
        pause: "paused",
        fail: "error",
        reset: "loading"
    },
    playing: {
        pause: "paused",
        reset: "loading",
        fail: "error"
    },
    paused: {
        play: "playing",
        reset: "loading",
        fail: "error"
    },
    error: {
        reset: "loading"
    }
}, Sa = (a, d)=>wa[a][d] || a, Ba = (param)=>{
    let { color: a } = param;
    return /* @__PURE__ */ (0, _jsxruntime.jsx)(_spinner.default, {
        color: a,
        size: 16,
        delay: "0"
    });
}, ka = (param)=>{
    let { color: a } = param;
    return /* @__PURE__ */ (0, _jsxruntime.jsx)(_iconpausefilled.default, {
        color: a,
        size: 12
    });
}, Ia = (param)=>{
    let { color: a } = param;
    return /* @__PURE__ */ (0, _jsxruntime.jsx)(_iconplayfilled.default, {
        color: a,
        size: 12
    });
}, $e = (a, d, r)=>{
    const { texts: n, t: v } = (0, _hooks.useTheme)(), t = _react.useRef(null), [i, l] = _react.useReducer(Sa, "loading");
    _react.useEffect(()=>{
        var f;
        const c = setTimeout(()=>l("showSpinner"), 2e3);
        return (f = t.current) == null || f.load(), ()=>{
            clearTimeout(c), l("reset");
        };
    }, [
        a
    ]);
    const o = _react.useMemo(()=>a !== void 0 ? /* @__PURE__ */ (0, _jsxruntime.jsx)(_video.default, {
            ref: (0, _common.combineRefs)(t, r),
            src: a,
            width: "100%",
            height: "100%",
            poster: d,
            onError: ()=>l("fail"),
            onPause: ()=>l("pause"),
            onPlay: ()=>l("play")
        }) : void 0, [
        r,
        a,
        d
    ]), b = ()=>{
        const c = t.current;
        c && (i === "loading" ? l("showSpinner") : i === "paused" ? c.play() : i === "playing" && c.pause());
    };
    if (i === "error") return {
        video: o
    };
    const m = o ? {
        uncheckedProps: {
            Icon: i === "loadingTimeout" && !(0, _platform.isRunningAcceptanceTest)() ? Ba : ka,
            label: i === "loadingTimeout" ? "" : n.pauseIconButtonLabel || v(_texttokens.pauseIconButtonLabel)
        },
        checkedProps: {
            Icon: Ia,
            label: n.playIconButtonLabel || v(_texttokens.playIconButtonLabel)
        },
        onChange: b,
        disabled: i === "loadingTimeout",
        checked: i === "paused"
    } : void 0;
    return {
        video: o,
        videoAction: m
    };
}, Re = (param)=>{
    let { headline: a, headlineRef: d, pretitle: r, pretitleAs: n, pretitleLinesMax: v, title: t, titleAs: i = "h3", titleLinesMax: l, subtitle: o, subtitleLinesMax: b, description: m, descriptionLinesMax: c, extra: f, extraRef: g, button: T, buttonLink: x, slotAlignment: C } = param;
    const { textPresets: h } = (0, _hooks.useTheme)();
    return /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", {
        className: _cardcssmistica.cardContentContainer,
        children: [
            /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", {
                className: _cardcssmistica.flexColumn,
                style: C ? {
                    height: "100%"
                } : void 0,
                children: [
                    (0, _headings.isBiggerHeading)(i, n) ? /* @__PURE__ */ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
                        children: [
                            t && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                style: {
                                    paddingBottom: o || m ? 4 : 0
                                },
                                "data-testid": "title",
                                children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text, _object_spread_props(_object_spread({}, _textprops.text4), {
                                    truncate: l,
                                    weight: h.cardTitle.weight,
                                    as: i,
                                    hyphens: "auto",
                                    children: t
                                }))
                            }),
                            a && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                ref: d,
                                style: {
                                    order: -2,
                                    paddingBottom: r || t || o || m ? 8 : 0
                                },
                                "data-testid": "headline",
                                children: typeof a == "string" ? /* @__PURE__ */ (0, _jsxruntime.jsx)(_tag.default, {
                                    type: "promo",
                                    children: a
                                }) : a
                            }),
                            r && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                style: {
                                    order: -1,
                                    paddingBottom: 4
                                },
                                "data-testid": "pretitle",
                                children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text2, {
                                    truncate: v,
                                    as: n,
                                    regular: !0,
                                    hyphens: "auto",
                                    children: r
                                })
                            })
                        ]
                    }) : /* @__PURE__ */ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
                        children: /* @__PURE__ */ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
                            children: [
                                r && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                    style: {
                                        paddingBottom: 4
                                    },
                                    "data-testid": "pretitle",
                                    children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text2, {
                                        truncate: v,
                                        as: n,
                                        regular: !0,
                                        hyphens: "auto",
                                        children: r
                                    })
                                }),
                                a && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                    ref: d,
                                    style: {
                                        order: -1,
                                        paddingBottom: r || t || o || m ? 8 : 0
                                    },
                                    "data-testid": "headline",
                                    children: typeof a == "string" ? /* @__PURE__ */ (0, _jsxruntime.jsx)(_tag.default, {
                                        type: "promo",
                                        children: a
                                    }) : a
                                }),
                                t && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                    style: {
                                        paddingBottom: o || m ? 4 : 0
                                    },
                                    "data-testid": "title",
                                    children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text, _object_spread_props(_object_spread({}, _textprops.text4), {
                                        truncate: l,
                                        weight: h.cardTitle.weight,
                                        as: i,
                                        hyphens: "auto",
                                        children: t
                                    }))
                                })
                            ]
                        })
                    }),
                    o && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                        style: {
                            paddingBottom: m ? 4 : 0
                        },
                        "data-testid": "subtitle",
                        children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text2, {
                            truncate: b,
                            as: "div",
                            regular: !0,
                            hyphens: "auto",
                            children: o
                        })
                    }),
                    m && // this is tricky, when headline exists, the 8px padding is added by it.
                    // Otherwise, only 4px are added by title|pretitle|subtitle, so we need to add 4px more
                    /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                        style: {
                            paddingTop: r || t || o ? 4 : 0
                        },
                        "data-testid": "description",
                        children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text2, {
                            truncate: c,
                            as: "p",
                            regular: !0,
                            color: _skincontractcssmistica.vars.colors.textSecondary,
                            hyphens: "auto",
                            children: m
                        })
                    }),
                    f && /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", {
                        ref: g,
                        style: C ? {
                            display: "flex",
                            flexDirection: "column",
                            height: "100%"
                        } : void 0,
                        "data-testid": "slot",
                        children: [
                            C === "bottom" && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                style: {
                                    flexGrow: 1
                                }
                            }),
                            f,
                            C === "content" && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                style: {
                                    flexGrow: 1
                                }
                            })
                        ]
                    })
                ]
            }),
            (T || x) && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                className: _cardcssmistica.actions,
                children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_buttongroup.default, {
                    primaryButton: T,
                    link: x
                })
            })
        ]
    });
}, td = /*#__PURE__*/ _react.forwardRef((_param, X)=>{
    var { media: a, asset: d, headline: r, pretitle: n, pretitleAs: v, pretitleLinesMax: t, subtitle: i, subtitleLinesMax: l, title: o, titleAs: b = "h3", titleLinesMax: m, description: c, descriptionLinesMax: f, extra: g, actions: T, button: x, buttonLink: C, dataAttributes: h, "aria-label": w, "aria-labelledby": k, "aria-description": u, "aria-describedby": B, onClose: V, closeButtonLabel: G, slotAlignment: z } = _param, R = _object_without_properties(_param, [
        "media",
        "asset",
        "headline",
        "pretitle",
        "pretitleAs",
        "pretitleLinesMax",
        "subtitle",
        "subtitleLinesMax",
        "title",
        "titleAs",
        "titleLinesMax",
        "description",
        "descriptionLinesMax",
        "extra",
        "actions",
        "button",
        "buttonLink",
        "dataAttributes",
        "aria-label",
        "aria-labelledby",
        "aria-description",
        "aria-describedby",
        "onClose",
        "closeButtonLabel",
        "slotAlignment"
    ]);
    const y = !!(R.href || R.to || R.onPress), { text: S, ref: E } = H(), { text: O, ref: A } = H(), j = w || (k ? void 0 : ((0, _headings.isBiggerHeading)(b, v) ? [
        o,
        S,
        n,
        i,
        c,
        O
    ] : [
        n,
        S,
        o,
        i,
        c,
        O
    ]).filter(Boolean).join(" "));
    return /* @__PURE__ */ (0, _jsxruntime.jsxs)(L, {
        dataAttributes: _object_spread({
            "component-name": "MediaCard",
            testid: "MediaCard"
        }, h),
        ref: X,
        "aria-label": y ? void 0 : w,
        "aria-labelledby": y ? void 0 : k,
        "aria-description": y ? void 0 : u,
        "aria-describedby": y ? void 0 : B,
        className: _cardcssmistica.touchableContainer,
        children: [
            /* @__PURE__ */ (0, _jsxruntime.jsx)(_touchable.BaseTouchable, _object_spread_props(_object_spread({
                maybe: !0
            }, R), {
                className: _cardcssmistica.touchable,
                "aria-label": y ? j : void 0,
                "aria-labelledby": y ? k : void 0,
                "aria-description": y ? u : void 0,
                "aria-describedby": y ? B : void 0,
                children: /* @__PURE__ */ (0, _jsxruntime.jsxs)(_boxed.Boxed, {
                    className: _cardcssmistica.boxed,
                    width: "100%",
                    height: "100%",
                    children: [
                        y && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                            className: _cardcssmistica.touchableMediaCardOverlay
                        }),
                        /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", {
                            className: _cardcssmistica.mediaCard,
                            "aria-hidden": y,
                            children: [
                                /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                    style: (0, _css.applyCssVars)({
                                        [_imagecssmistica.vars.mediaBorderRadius]: "0px"
                                    }),
                                    children: a
                                }),
                                /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                    className: _cardcssmistica.mediaCardContent,
                                    children: /* @__PURE__ */ (0, _jsxruntime.jsx)(Re, {
                                        headline: r,
                                        headlineRef: E,
                                        pretitle: n,
                                        pretitleAs: v,
                                        pretitleLinesMax: t,
                                        title: o,
                                        titleAs: b,
                                        titleLinesMax: m,
                                        subtitle: i,
                                        subtitleLinesMax: l,
                                        description: c,
                                        descriptionLinesMax: f,
                                        extra: g,
                                        extraRef: A,
                                        button: x,
                                        buttonLink: C,
                                        slotAlignment: z
                                    })
                                }),
                                d && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                    className: _cardcssmistica.mediaCardAsset,
                                    style: (0, _css.applyCssVars)({
                                        [_imagecssmistica.vars.mediaBorderRadius]: _skincontractcssmistica.vars.borderRadii.mediaSmall
                                    }),
                                    "data-testid": "asset",
                                    children: d
                                })
                            ]
                        })
                    ]
                })
            })),
            /* @__PURE__ */ (0, _jsxruntime.jsx)(oe, {
                onClose: V,
                closeButtonLabel: G,
                actions: T,
                variant: "media"
            })
        ]
    });
}), nd = /*#__PURE__*/ _react.forwardRef((_param, X)=>{
    var { media: a, asset: d, headline: r, pretitle: n, pretitleAs: v, pretitleLinesMax: t, subtitle: i, subtitleLinesMax: l, title: o, titleAs: b = "h3", titleLinesMax: m, description: c, descriptionLinesMax: f, extra: g, actions: T, button: x, buttonLink: C, dataAttributes: h, "aria-label": w, "aria-labelledby": k, "aria-description": u, "aria-describedby": B, onClose: V, closeButtonLabel: G, slotAlignment: z } = _param, R = _object_without_properties(_param, [
        "media",
        "asset",
        "headline",
        "pretitle",
        "pretitleAs",
        "pretitleLinesMax",
        "subtitle",
        "subtitleLinesMax",
        "title",
        "titleAs",
        "titleLinesMax",
        "description",
        "descriptionLinesMax",
        "extra",
        "actions",
        "button",
        "buttonLink",
        "dataAttributes",
        "aria-label",
        "aria-labelledby",
        "aria-description",
        "aria-describedby",
        "onClose",
        "closeButtonLabel",
        "slotAlignment"
    ]);
    const y = !!(R.href || R.to || R.onPress), S = a && a.type === _image.default && a.props.circular, { text: E, ref: O } = H(), { text: A, ref: j } = H(), N = w || (k ? void 0 : ((0, _headings.isBiggerHeading)(b, v) ? [
        o,
        E,
        n,
        i,
        c,
        A
    ] : [
        n,
        E,
        o,
        i,
        c,
        A
    ]).filter(Boolean).join(" "));
    return /* @__PURE__ */ (0, _jsxruntime.jsxs)(L, {
        ref: X,
        dataAttributes: _object_spread({
            "component-name": "NakedCard",
            testid: "NakedCard"
        }, h),
        "aria-label": y ? void 0 : w,
        "aria-labelledby": y ? void 0 : k,
        "aria-description": y ? void 0 : u,
        "aria-describedby": y ? void 0 : B,
        className: y ? _cardcssmistica.touchableContainer : void 0,
        children: [
            /* @__PURE__ */ (0, _jsxruntime.jsx)(_touchable.BaseTouchable, _object_spread_props(_object_spread({
                maybe: !0
            }, R), {
                className: _cardcssmistica.touchable,
                "aria-label": y ? N : void 0,
                "aria-labelledby": y ? k : void 0,
                "aria-description": y ? u : void 0,
                "aria-describedby": y ? B : void 0,
                children: /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", {
                    className: _cardcssmistica.mediaCard,
                    "aria-hidden": y,
                    children: [
                        /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", {
                            style: {
                                position: "relative"
                            },
                            children: [
                                y && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                    className: (0, _classnames.default)(_cardcssmistica.touchableNakedMediaOverlay, {
                                        [_cardcssmistica.circularMediaOverlay]: S
                                    })
                                }),
                                a
                            ]
                        }),
                        /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                            className: _cardcssmistica.nakedCardContent,
                            style: {
                                paddingTop: a ? 16 : 0
                            },
                            children: /* @__PURE__ */ (0, _jsxruntime.jsx)(Re, {
                                headline: r,
                                headlineRef: O,
                                pretitle: n,
                                pretitleAs: v,
                                pretitleLinesMax: t,
                                title: o,
                                titleAs: b,
                                titleLinesMax: m,
                                subtitle: i,
                                subtitleLinesMax: l,
                                description: c,
                                descriptionLinesMax: f,
                                extra: g,
                                extraRef: j,
                                button: x,
                                buttonLink: C,
                                slotAlignment: z
                            })
                        }),
                        d && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                            className: _cardcssmistica.mediaCardAsset,
                            style: (0, _css.applyCssVars)({
                                [_imagecssmistica.vars.mediaBorderRadius]: _skincontractcssmistica.vars.borderRadii.mediaSmall
                            }),
                            "data-testid": "asset",
                            children: d
                        })
                    ]
                })
            })),
            /* @__PURE__ */ (0, _jsxruntime.jsx)(oe, {
                onClose: V,
                closeButtonLabel: G,
                actions: T,
                variant: "media"
            })
        ]
    });
}), od = /*#__PURE__*/ _react.forwardRef((_param, C)=>{
    var { media: a, title: d, titleAs: r = "h3", titleLinesMax: n, subtitle: v, subtitleLinesMax: t, description: i, descriptionLinesMax: l, extra: o, dataAttributes: b, "aria-label": m, "aria-labelledby": c, "aria-description": f, "aria-describedby": g, slotAlignment: T } = _param, x = _object_without_properties(_param, [
        "media",
        "title",
        "titleAs",
        "titleLinesMax",
        "subtitle",
        "subtitleLinesMax",
        "description",
        "descriptionLinesMax",
        "extra",
        "dataAttributes",
        "aria-label",
        "aria-labelledby",
        "aria-description",
        "aria-describedby",
        "slotAlignment"
    ]);
    const h = !!(x.href || x.to || x.onPress), w = a && a.type === _image.default && a.props.circular, { textPresets: k } = (0, _hooks.useTheme)(), { text: u, ref: B } = H(), V = m || (c ? void 0 : [
        d,
        v,
        i,
        u
    ].filter(Boolean).join(" "));
    return /* @__PURE__ */ (0, _jsxruntime.jsx)(L, {
        ref: C,
        dataAttributes: _object_spread({
            "component-name": "SmallNakedCard",
            testid: "SmallNakedCard"
        }, b),
        "aria-label": h ? void 0 : m,
        "aria-labelledby": h ? void 0 : c,
        "aria-description": h ? void 0 : f,
        "aria-describedby": h ? void 0 : g,
        className: h ? _cardcssmistica.touchableContainer : void 0,
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_touchable.BaseTouchable, _object_spread_props(_object_spread({
            maybe: !0
        }, x), {
            className: _cardcssmistica.touchable,
            "aria-label": h ? V : void 0,
            "aria-labelledby": h ? c : void 0,
            "aria-description": h ? f : void 0,
            "aria-describedby": h ? g : void 0,
            children: /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", {
                className: _cardcssmistica.mediaCard,
                "aria-hidden": h,
                children: [
                    a && /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", {
                        style: {
                            position: "relative"
                        },
                        children: [
                            h && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                className: (0, _classnames.default)(_cardcssmistica.touchableNakedMediaOverlay, {
                                    [_cardcssmistica.circularMediaOverlay]: w
                                })
                            }),
                            a
                        ]
                    }),
                    /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", {
                        className: _cardcssmistica.nakedCardContent,
                        style: {
                            paddingTop: a ? 16 : 0,
                            height: T ? "100%" : void 0
                        },
                        children: [
                            /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                children: /* @__PURE__ */ (0, _jsxruntime.jsxs)(_stack.default, {
                                    space: 4,
                                    children: [
                                        d && /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text, _object_spread_props(_object_spread({}, _textprops.text2), {
                                            truncate: n,
                                            weight: k.cardTitle.weight,
                                            as: r,
                                            hyphens: "auto",
                                            dataAttributes: {
                                                testid: "title"
                                            },
                                            children: d
                                        })),
                                        v && /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text2, {
                                            truncate: t,
                                            regular: !0,
                                            as: "p",
                                            hyphens: "auto",
                                            dataAttributes: {
                                                testid: "subtitle"
                                            },
                                            children: v
                                        }),
                                        i && /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text2, {
                                            truncate: l,
                                            regular: !0,
                                            as: "p",
                                            color: _skincontractcssmistica.vars.colors.textSecondary,
                                            hyphens: "auto",
                                            dataAttributes: {
                                                testid: "description"
                                            },
                                            children: i
                                        })
                                    ]
                                })
                            }),
                            o && /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", {
                                ref: B,
                                "data-testid": "slot",
                                style: T ? {
                                    display: "flex",
                                    flexDirection: "column",
                                    height: "100%"
                                } : void 0,
                                children: [
                                    T === "bottom" && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                        style: {
                                            flexGrow: 1
                                        }
                                    }),
                                    o,
                                    T === "content" && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                        style: {
                                            flexGrow: 1
                                        }
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        }))
    });
}), sd = /*#__PURE__*/ _react.forwardRef((_param, X)=>{
    var { asset: a, headline: d, pretitle: r, pretitleAs: n, pretitleLinesMax: v, title: t, titleAs: i = "h3", titleLinesMax: l, subtitle: o, subtitleLinesMax: b, description: m, descriptionLinesMax: c, extra: f, actions: g, button: T, buttonLink: x, dataAttributes: C, "aria-label": h, "aria-labelledby": w, "aria-description": k, "aria-describedby": u, onClose: B, closeButtonLabel: V, aspectRatio: G, slotAlignment: z } = _param, R = _object_without_properties(_param, [
        "asset",
        "headline",
        "pretitle",
        "pretitleAs",
        "pretitleLinesMax",
        "title",
        "titleAs",
        "titleLinesMax",
        "subtitle",
        "subtitleLinesMax",
        "description",
        "descriptionLinesMax",
        "extra",
        "actions",
        "button",
        "buttonLink",
        "dataAttributes",
        "aria-label",
        "aria-labelledby",
        "aria-description",
        "aria-describedby",
        "onClose",
        "closeButtonLabel",
        "aspectRatio",
        "slotAlignment"
    ]);
    const y = !!a || !!d, S = !!(R.href || R.to || R.onPress), { text: E, ref: O } = H(), { text: A, ref: j } = H(), N = Xe(g, B), M = h || (w ? void 0 : ((0, _headings.isBiggerHeading)(i, n) ? [
        t,
        E,
        r,
        o,
        m,
        A
    ] : [
        r,
        E,
        t,
        o,
        m,
        A
    ]).filter(Boolean).join(" "));
    return /* @__PURE__ */ (0, _jsxruntime.jsxs)(L, {
        dataAttributes: _object_spread({
            "component-name": "DataCard",
            testid: "DataCard"
        }, C),
        ref: X,
        "aria-label": S ? void 0 : h,
        "aria-labelledby": S ? void 0 : w,
        "aria-description": S ? void 0 : k,
        "aria-describedby": S ? void 0 : u,
        className: _cardcssmistica.touchableContainer,
        aspectRatio: G,
        children: [
            /* @__PURE__ */ (0, _jsxruntime.jsx)(_touchable.BaseTouchable, _object_spread_props(_object_spread({
                maybe: !0
            }, R), {
                className: _cardcssmistica.touchable,
                "aria-label": S ? M : void 0,
                "aria-labelledby": S ? w : void 0,
                "aria-description": S ? k : void 0,
                "aria-describedby": S ? u : void 0,
                children: /* @__PURE__ */ (0, _jsxruntime.jsxs)(_boxed.Boxed, {
                    className: _cardcssmistica.boxed,
                    width: "100%",
                    height: "100%",
                    children: [
                        S && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                            className: _cardcssmistica.touchableCardOverlay
                        }),
                        /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", {
                            className: _cardcssmistica.dataCard,
                            "aria-hidden": S,
                            style: z ? {
                                height: "100%"
                            } : void 0,
                            children: [
                                /* @__PURE__ */ (0, _jsxruntime.jsxs)(_inline.default, {
                                    space: 0,
                                    children: [
                                        /* @__PURE__ */ (0, _jsxruntime.jsxs)(_stack.default, {
                                            space: 16,
                                            children: [
                                                a && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                                    style: (0, _css.applyCssVars)({
                                                        [_imagecssmistica.vars.mediaBorderRadius]: _skincontractcssmistica.vars.borderRadii.mediaSmall
                                                    }),
                                                    "data-testid": "asset",
                                                    children: a
                                                }),
                                                /* @__PURE__ */ (0, _jsxruntime.jsx)(Re, {
                                                    headline: d,
                                                    headlineRef: O,
                                                    pretitle: r,
                                                    pretitleAs: n,
                                                    pretitleLinesMax: v,
                                                    title: t,
                                                    titleAs: i,
                                                    titleLinesMax: l,
                                                    subtitle: o,
                                                    subtitleLinesMax: b,
                                                    description: m,
                                                    descriptionLinesMax: c
                                                })
                                            ]
                                        }),
                                        !y && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                            style: (0, _css.applyCssVars)({
                                                [_cardcssmistica.vars.topActionsCount]: String(N.length)
                                            }),
                                            className: _cardcssmistica.dataCardTopActionsWithoutIcon
                                        })
                                    ]
                                }),
                                f && /* @__PURE__ */ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
                                    children: /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", {
                                        ref: j,
                                        "data-testid": "slot",
                                        style: z ? {
                                            display: "flex",
                                            flexDirection: "column",
                                            height: "100%"
                                        } : void 0,
                                        children: [
                                            z === "bottom" && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                                style: {
                                                    flexGrow: 1
                                                }
                                            }),
                                            f,
                                            z === "content" && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                                style: {
                                                    flexGrow: 1
                                                }
                                            })
                                        ]
                                    })
                                }),
                                (T || x) && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                    className: _cardcssmistica.actions,
                                    children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_buttongroup.default, {
                                        primaryButton: T,
                                        link: x
                                    })
                                })
                            ]
                        })
                    ]
                })
            })),
            /* @__PURE__ */ (0, _jsxruntime.jsx)(oe, {
                onClose: B,
                closeButtonLabel: V,
                actions: g,
                variant: "default"
            })
        ]
    });
}), ld = /*#__PURE__*/ _react.forwardRef((_param, w)=>{
    var { asset: a, title: d, titleAs: r = "h3", titleLinesMax: n, subtitle: v, subtitleLinesMax: t, description: i, descriptionLinesMax: l, dataAttributes: o, "aria-label": b, "aria-labelledby": m, "aria-description": c, "aria-describedby": f, extra: g, isInverse: T = !1, aspectRatio: x, slotAlignment: C } = _param, h = _object_without_properties(_param, [
        "asset",
        "title",
        "titleAs",
        "titleLinesMax",
        "subtitle",
        "subtitleLinesMax",
        "description",
        "descriptionLinesMax",
        "dataAttributes",
        "aria-label",
        "aria-labelledby",
        "aria-description",
        "aria-describedby",
        "extra",
        "isInverse",
        "aspectRatio",
        "slotAlignment"
    ]);
    const { textPresets: k } = (0, _hooks.useTheme)(), u = !!(h.href || h.to || h.onPress), B = T ? _cardcssmistica.touchableCardOverlayInverse : _cardcssmistica.touchableCardOverlay, { text: V, ref: G } = H(), z = b || (f ? void 0 : [
        d,
        v,
        i,
        V
    ].filter(Boolean).join(" "));
    return /* @__PURE__ */ (0, _jsxruntime.jsx)(L, {
        dataAttributes: _object_spread({
            "component-name": "SnapCard",
            testid: "SnapCard"
        }, o),
        ref: w,
        className: _cardcssmistica.touchableContainer,
        aspectRatio: x,
        "aria-label": u ? void 0 : b,
        "aria-labelledby": u ? void 0 : m,
        "aria-description": u ? void 0 : c,
        "aria-describedby": u ? void 0 : f,
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_touchable.BaseTouchable, _object_spread_props(_object_spread({
            maybe: !0
        }, h), {
            className: _cardcssmistica.touchable,
            "aria-label": u ? z : void 0,
            "aria-labelledby": u ? m : void 0,
            "aria-description": u ? c : void 0,
            "aria-describedby": u ? f : void 0,
            children: /* @__PURE__ */ (0, _jsxruntime.jsxs)(_boxed.Boxed, {
                className: _cardcssmistica.boxed,
                variant: T ? "inverse" : "default",
                width: "100%",
                height: "100%",
                children: [
                    u && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                        className: B
                    }),
                    /* @__PURE__ */ (0, _jsxruntime.jsxs)("section", {
                        className: _cardcssmistica.snapCard,
                        "aria-hidden": u,
                        style: C ? {
                            height: "100%"
                        } : void 0,
                        children: [
                            /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", {
                                children: [
                                    a && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                        style: (0, _css.applyCssVars)({
                                            [_imagecssmistica.vars.mediaBorderRadius]: _skincontractcssmistica.vars.borderRadii.mediaSmall
                                        }),
                                        "data-testid": "asset",
                                        children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_box.default, {
                                            paddingBottom: 16,
                                            children: a
                                        })
                                    }),
                                    /* @__PURE__ */ (0, _jsxruntime.jsxs)(_stack.default, {
                                        space: 4,
                                        children: [
                                            d && /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text, _object_spread_props(_object_spread({}, _textprops.text2), {
                                                truncate: n,
                                                weight: k.cardTitle.weight,
                                                as: r,
                                                hyphens: "auto",
                                                dataAttributes: {
                                                    testid: "title"
                                                },
                                                children: d
                                            })),
                                            v && /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text2, {
                                                truncate: t,
                                                regular: !0,
                                                color: _skincontractcssmistica.vars.colors.textPrimary,
                                                as: "p",
                                                hyphens: "auto",
                                                dataAttributes: {
                                                    testid: "subtitle"
                                                },
                                                children: v
                                            }),
                                            i && /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text2, {
                                                truncate: l,
                                                regular: !0,
                                                color: _skincontractcssmistica.vars.colors.textSecondary,
                                                as: "p",
                                                hyphens: "auto",
                                                dataAttributes: {
                                                    testid: "description"
                                                },
                                                children: i
                                            })
                                        ]
                                    })
                                ]
                            }),
                            g && /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", {
                                ref: G,
                                "data-testid": "slot",
                                style: C ? {
                                    display: "flex",
                                    flexDirection: "column",
                                    height: "100%"
                                } : void 0,
                                children: [
                                    C === "bottom" && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                        style: {
                                            flexGrow: 1
                                        }
                                    }),
                                    g,
                                    C === "content" && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                        style: {
                                            flexGrow: 1
                                        }
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        }))
    });
}), qe = (param)=>{
    let { title: a, titleAs: d = "h3", headline: r, pretitle: n, pretitleAs: v, subtitle: t, description: i, extra: l, headlineRef: o, extraRef: b } = param;
    return /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", {
        className: _cardcssmistica.flexColumn,
        children: [
            (0, _headings.isBiggerHeading)(d, v) ? /* @__PURE__ */ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
                children: [
                    a && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                        style: {
                            paddingBottom: t || i ? 4 : 0
                        },
                        "data-testid": "title",
                        children: a
                    }),
                    r && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                        ref: o,
                        style: {
                            order: -2,
                            paddingBottom: n || a || t || i ? 16 : 0
                        },
                        "data-testid": "headline",
                        children: r
                    }),
                    n && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                        style: {
                            order: -1,
                            paddingBottom: 4
                        },
                        "data-testid": "pretitle",
                        children: n
                    })
                ]
            }) : /* @__PURE__ */ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
                children: [
                    n && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                        style: {
                            paddingBottom: 4
                        },
                        "data-testid": "pretitle",
                        children: n
                    }),
                    r && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                        ref: o,
                        style: {
                            order: -1,
                            paddingBottom: n || a || t || i ? 16 : 0
                        },
                        "data-testid": "headline",
                        children: r
                    }),
                    a && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                        style: {
                            paddingBottom: t || i ? 4 : 0
                        },
                        "data-testid": "title",
                        children: a
                    })
                ]
            }),
            t && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                style: {
                    paddingBottom: i ? 4 : 0
                },
                "data-testid": "subtitle",
                children: t
            }),
            i && // this is tricky, the padding between a headline and a description is 16px
            // but the padding between a title|pretitle|subtitle and a description is 8px (4px + 4px)
            /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                style: {
                    paddingTop: n || a || t ? 4 : 0
                },
                "data-testid": "description",
                children: i
            }),
            l && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                ref: b,
                "data-testid": "slot",
                children: l
            })
        ]
    });
}, Je = /*#__PURE__*/ _react.forwardRef((_param, A)=>{
    var { isInverse: a, backgroundImage: d, backgroundVideo: r, backgroundVideoRef: n, poster: v, asset: t, headline: i, pretitle: l, pretitleAs: o, pretitleLinesMax: b, title: m, titleAs: c = "h3", titleLinesMax: f, description: g, descriptionLinesMax: T, extra: x, button: C, secondaryButton: h, onClose: w, closeButtonLabel: k, actions: u, buttonLink: B, dataAttributes: V, width: G, height: z, aspectRatio: R, "aria-label": X, "aria-labelledby": y, "aria-description": S, "aria-describedby": E } = _param, O = _object_without_properties(_param, [
        "isInverse",
        "backgroundImage",
        "backgroundVideo",
        "backgroundVideoRef",
        "poster",
        "asset",
        "headline",
        "pretitle",
        "pretitleAs",
        "pretitleLinesMax",
        "title",
        "titleAs",
        "titleLinesMax",
        "description",
        "descriptionLinesMax",
        "extra",
        "button",
        "secondaryButton",
        "onClose",
        "closeButtonLabel",
        "actions",
        "buttonLink",
        "dataAttributes",
        "width",
        "height",
        "aspectRatio",
        "aria-label",
        "aria-labelledby",
        "aria-description",
        "aria-describedby"
    ]);
    const j = d !== void 0, N = r !== void 0, M = _e(d), { video: ye, videoAction: se } = $e(r, v, n), { text: de, ref: le } = H(), { text: ce, ref: he } = H();
    N && (u = se ? [
        se
    ] : []);
    const ve = (0, _themevariantcontext.useIsInverseVariant)(), _ = j || N, $ = _ ? "0 0 16px rgba(0,0,0,0.4)" : void 0, P = (u == null ? void 0 : u.length) || w, D = !!(O.href || O.to || O.onPress), fe = j || N ? _cardcssmistica.touchableCardOverlayMedia : a ? _cardcssmistica.touchableCardOverlayInverse : _cardcssmistica.touchableCardOverlay, W = X || (y ? void 0 : ((0, _headings.isBiggerHeading)(c, o) ? [
        m,
        de,
        l,
        g,
        ce
    ] : [
        l,
        de,
        m,
        g,
        ce
    ]).filter(Boolean).join(" "));
    return /* @__PURE__ */ (0, _jsxruntime.jsxs)(L, {
        dataAttributes: V,
        ref: A,
        width: G,
        height: z,
        aspectRatio: R,
        "aria-label": D ? void 0 : X,
        "aria-labelledby": D ? void 0 : y,
        "aria-description": D ? void 0 : S,
        "aria-describedby": D ? void 0 : E,
        className: _cardcssmistica.touchableContainer,
        children: [
            /* @__PURE__ */ (0, _jsxruntime.jsx)(_touchable.BaseTouchable, _object_spread_props(_object_spread({
                maybe: !0
            }, O), {
                className: _cardcssmistica.touchable,
                "aria-label": D ? W : void 0,
                "aria-labelledby": D ? y : void 0,
                "aria-description": D ? S : void 0,
                "aria-describedby": D ? E : void 0,
                children: /* @__PURE__ */ (0, _jsxruntime.jsxs)(_boxed.InternalBoxed, {
                    borderRadius: _skincontractcssmistica.vars.borderRadii.legacyDisplay,
                    className: _cardcssmistica.boxed,
                    width: "100%",
                    height: "100%",
                    background: j || N ? ve ? _skincontractcssmistica.vars.colors.backgroundContainerBrandOverInverse : _skincontractcssmistica.vars.colors.backgroundContainer : void 0,
                    variant: j || N ? "media" : a ? "inverse" : "default",
                    children: [
                        D && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                            className: fe
                        }),
                        /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", {
                            className: _cardcssmistica.displayCardContainer,
                            "aria-hidden": D,
                            children: [
                                (j || N) && /* @__PURE__ */ (0, _jsxruntime.jsx)(_themevariantcontext.ThemeVariant, {
                                    variant: ve ? "inverse" : "default",
                                    children: /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                        className: _cardcssmistica.displayCardBackground,
                                        children: N ? ye : M
                                    })
                                }),
                                /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", {
                                    className: _cardcssmistica.displayCardContent,
                                    style: {
                                        paddingTop: _ && !t && !P && !N ? 0 : 24
                                    },
                                    children: [
                                        t ? /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                            style: (0, _css.applyCssVars)({
                                                [_imagecssmistica.vars.mediaBorderRadius]: _skincontractcssmistica.vars.borderRadii.mediaSmall
                                            }),
                                            "data-testid": "asset",
                                            children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_box.default, {
                                                paddingBottom: _ ? 0 : 40,
                                                paddingX: 24,
                                                children: t
                                            })
                                        }) : /* @__PURE__ */ (0, _jsxruntime.jsx)(_box.default, {
                                            paddingBottom: P || N ? _ ? 24 : 64 : 0
                                        }),
                                        /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                            className: (0, _classnames.default)(_cardcssmistica.displayCardContentWrapper, {
                                                [_cardcssmistica.displayCardGradient]: _
                                            }),
                                            children: /* @__PURE__ */ (0, _jsxruntime.jsxs)(_stack.default, {
                                                space: 24,
                                                children: [
                                                    /* @__PURE__ */ (0, _jsxruntime.jsx)(qe, {
                                                        title: m ? /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text6, {
                                                            forceMobileSizes: !0,
                                                            truncate: f,
                                                            as: c,
                                                            textShadow: $,
                                                            hyphens: "auto",
                                                            children: m
                                                        }) : void 0,
                                                        titleAs: c,
                                                        headline: i,
                                                        pretitle: l ? /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text2, {
                                                            forceMobileSizes: !0,
                                                            truncate: b,
                                                            as: o,
                                                            regular: !0,
                                                            textShadow: $,
                                                            children: l
                                                        }) : void 0,
                                                        pretitleAs: o,
                                                        description: g ? /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text3, {
                                                            forceMobileSizes: !0,
                                                            truncate: T,
                                                            as: "p",
                                                            regular: !0,
                                                            color: _ ? _skincontractcssmistica.vars.colors.textPrimary : _skincontractcssmistica.vars.colors.textSecondary,
                                                            textShadow: $,
                                                            hyphens: "auto",
                                                            children: g
                                                        }) : void 0,
                                                        extra: x,
                                                        headlineRef: le,
                                                        extraRef: he
                                                    }),
                                                    (C || h || B) && /* @__PURE__ */ (0, _jsxruntime.jsx)(_buttongroup.default, {
                                                        primaryButton: C,
                                                        secondaryButton: h,
                                                        link: B
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })),
            /* @__PURE__ */ (0, _jsxruntime.jsx)(oe, {
                onClose: w,
                closeButtonLabel: k,
                actions: u,
                variant: j || N ? "media" : a ? "inverse" : "default"
            })
        ]
    });
}), cd = /*#__PURE__*/ _react.forwardRef((_param, r)=>{
    var { dataAttributes: a } = _param, d = _object_without_properties(_param, [
        "dataAttributes"
    ]);
    return /* @__PURE__ */ (0, _jsxruntime.jsx)(Je, _object_spread_props(_object_spread({}, d), {
        ref: r,
        isInverse: !0,
        dataAttributes: _object_spread({
            "component-name": "DisplayMediaCard",
            testid: "DisplayMediaCard"
        }, a)
    }));
}), hd = /*#__PURE__*/ _react.forwardRef((_param, r)=>{
    var { dataAttributes: a } = _param, d = _object_without_properties(_param, [
        "dataAttributes"
    ]);
    return /* @__PURE__ */ (0, _jsxruntime.jsx)(Je, _object_spread_props(_object_spread({}, d), {
        ref: r,
        dataAttributes: _object_spread({
            "component-name": "DisplayDataCard",
            testid: "DisplayDataCard"
        }, a)
    }));
}), vd = /*#__PURE__*/ _react.forwardRef((_param, j)=>{
    var { dataAttributes: a, backgroundImage: d, backgroundVideo: r, poster: n, backgroundVideoRef: v, width: t, height: i, aspectRatio: l = "7:10", "aria-label": o, "aria-labelledby": b, "aria-description": m, "aria-describedby": c, actions: f, onClose: g, closeButtonLabel: T, asset: x, headline: C, pretitle: h, pretitleAs: w, pretitleLinesMax: k, title: u, titleAs: B = "h3", titleLinesMax: V, subtitle: G, subtitleLinesMax: z, description: R, descriptionLinesMax: X, extra: y, variant: S, isInverse: E, backgroundColor: O } = _param, A = _object_without_properties(_param, [
        "dataAttributes",
        "backgroundImage",
        "backgroundVideo",
        "poster",
        "backgroundVideoRef",
        "width",
        "height",
        "aspectRatio",
        "aria-label",
        "aria-labelledby",
        "aria-description",
        "aria-describedby",
        "actions",
        "onClose",
        "closeButtonLabel",
        "asset",
        "headline",
        "pretitle",
        "pretitleAs",
        "pretitleLinesMax",
        "title",
        "titleAs",
        "titleLinesMax",
        "subtitle",
        "subtitleLinesMax",
        "description",
        "descriptionLinesMax",
        "extra",
        "variant",
        "isInverse",
        "backgroundColor"
    ]);
    const N = d !== void 0, M = r !== void 0, ye = _e(d), { video: se, videoAction: de } = $e(r, n, v), { text: le, ref: ce } = H(), { text: he, ref: ve } = H();
    M && (f = de ? [
        de
    ] : []);
    const _ = (0, _themevariantcontext.useIsInverseVariant)(), $ = N || M, P = $ ? "0 0 16px rgba(0,0,0,0.4)" : void 0, D = (f == null ? void 0 : f.length) || g, { textPresets: fe } = (0, _hooks.useTheme)(), W = !!(A.href || A.to || A.onPress), re = S || (E ? "inverse" : "default"), Ke = ()=>re === "media" || N || M ? _ ? _skincontractcssmistica.vars.colors.backgroundContainerBrandOverInverse : _skincontractcssmistica.vars.colors.backgroundContainer : O || ({
            default: _skincontractcssmistica.vars.colors.backgroundContainer,
            inverse: _ ? _skincontractcssmistica.vars.colors.backgroundContainerBrandOverInverse : _skincontractcssmistica.vars.colors.backgroundBrand,
            alternative: _skincontractcssmistica.vars.colors.backgroundAlternative
        })[re], Qe = N || M ? _cardcssmistica.touchableCardOverlayMedia : re === "inverse" ? _cardcssmistica.touchableCardOverlayInverse : _cardcssmistica.touchableCardOverlay, Ue = o || (b ? void 0 : ((0, _headings.isBiggerHeading)(B, w) ? [
        u,
        le,
        h,
        G,
        R,
        he
    ] : [
        h,
        le,
        u,
        G,
        R,
        he
    ]).filter(Boolean).join(" "));
    return /* @__PURE__ */ (0, _jsxruntime.jsxs)(L, {
        width: t,
        height: i,
        dataAttributes: _object_spread({
            "component-name": "PosterCard",
            testid: "PosterCard"
        }, a),
        ref: j,
        aspectRatio: l,
        className: _cardcssmistica.touchableContainer,
        "aria-label": W ? void 0 : o,
        "aria-labelledby": W ? void 0 : b,
        "aria-description": W ? void 0 : m,
        "aria-describedby": W ? void 0 : c,
        children: [
            /* @__PURE__ */ (0, _jsxruntime.jsx)(_touchable.BaseTouchable, _object_spread_props(_object_spread({
                maybe: !0
            }, A), {
                className: _cardcssmistica.touchable,
                "aria-label": W ? Ue : void 0,
                "aria-labelledby": W ? b : void 0,
                "aria-description": W ? m : void 0,
                "aria-describedby": W ? c : void 0,
                children: /* @__PURE__ */ (0, _jsxruntime.jsxs)(_boxed.InternalBoxed, {
                    borderRadius: _skincontractcssmistica.vars.borderRadii.legacyDisplay,
                    className: _cardcssmistica.boxed,
                    width: "100%",
                    height: "100%",
                    background: Ke(),
                    variant: N || M ? "media" : N || M || re === "inverse" ? "inverse" : "default",
                    children: [
                        W && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                            className: Qe
                        }),
                        /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", {
                            className: _cardcssmistica.displayCardContainer,
                            "aria-hidden": W,
                            children: [
                                (N || M) && /* @__PURE__ */ (0, _jsxruntime.jsx)(_themevariantcontext.ThemeVariant, {
                                    variant: _ ? "inverse" : "default",
                                    children: /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                        className: _cardcssmistica.displayCardBackground,
                                        children: M ? se : ye
                                    })
                                }),
                                /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", {
                                    className: (0, _classnames.default)(_cardcssmistica.displayCardContent, $ && !x && !D && !M ? void 0 : x ? _cardcssmistica.displayCardContentWithAsset : _cardcssmistica.displayCardContentWithTopContent),
                                    children: [
                                        x ? /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                            style: (0, _css.applyCssVars)({
                                                [_imagecssmistica.vars.mediaBorderRadius]: _skincontractcssmistica.vars.borderRadii.mediaSmall
                                            }),
                                            "data-testid": "asset",
                                            children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_box.default, {
                                                paddingBottom: $ ? 0 : 40,
                                                paddingX: {
                                                    mobile: 16,
                                                    desktop: 24
                                                },
                                                children: x
                                            })
                                        }) : /* @__PURE__ */ (0, _jsxruntime.jsx)(_box.default, {
                                            paddingBottom: D || M ? $ ? 24 : 64 : 0
                                        }),
                                        /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                            className: (0, _classnames.default)(_cardcssmistica.posterCardContentWrapper, {
                                                [_cardcssmistica.displayCardGradient]: $
                                            }),
                                            children: /* @__PURE__ */ (0, _jsxruntime.jsx)(qe, {
                                                title: u ? /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text, _object_spread_props(_object_spread({}, _textprops.text4), {
                                                    truncate: V,
                                                    weight: fe.cardTitle.weight,
                                                    as: B,
                                                    children: u
                                                })) : void 0,
                                                titleAs: B,
                                                headline: C,
                                                pretitle: h ? /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text2, {
                                                    forceMobileSizes: !0,
                                                    truncate: k,
                                                    as: w,
                                                    regular: !0,
                                                    textShadow: P,
                                                    children: h
                                                }) : void 0,
                                                pretitleAs: w,
                                                subtitle: G ? /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text2, {
                                                    forceMobileSizes: !0,
                                                    truncate: z,
                                                    as: "div",
                                                    regular: !0,
                                                    textShadow: P,
                                                    children: G
                                                }) : void 0,
                                                description: R ? /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text2, {
                                                    forceMobileSizes: !0,
                                                    truncate: X,
                                                    as: "p",
                                                    regular: !0,
                                                    textShadow: P,
                                                    color: $ ? _skincontractcssmistica.vars.colors.textPrimary : _skincontractcssmistica.vars.colors.textSecondary,
                                                    children: R
                                                }) : void 0,
                                                headlineRef: ce,
                                                extra: y,
                                                extraRef: ve
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })),
            /* @__PURE__ */ (0, _jsxruntime.jsx)(oe, {
                onClose: g,
                closeButtonLabel: T,
                actions: f,
                variant: N || M ? "media" : re === "inverse" ? "inverse" : "default"
            })
        ]
    });
});
