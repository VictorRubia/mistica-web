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
    BoxedRow: function() {
        return wt;
    },
    BoxedRowList: function() {
        return Bt;
    },
    Content: function() {
        return Ye;
    },
    Row: function() {
        return yt;
    },
    RowList: function() {
        return Rt;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _classnames = /*#__PURE__*/ _interop_require_default(require("classnames"));
const _touchable = require("./touchable.js");
const _text = require("./text.js");
const _box = /*#__PURE__*/ _interop_require_default(require("./box.js"));
const _stack = /*#__PURE__*/ _interop_require_default(require("./stack.js"));
const _badge = /*#__PURE__*/ _interop_require_default(require("./badge.js"));
const _themevariantcontext = require("./theme-variant-context.js");
const _iconchevronrightfilled = /*#__PURE__*/ _interop_require_default(require("./generated/mistica-icons/icon-chevron-right-filled.js"));
const _switchcomponent = /*#__PURE__*/ _interop_require_default(require("./switch-component.js"));
const _radiobutton = /*#__PURE__*/ _interop_require_wildcard(require("./radio-button.js"));
const _checkbox = /*#__PURE__*/ _interop_require_default(require("./checkbox.js"));
const _boxed = require("./boxed.js");
const _divider = /*#__PURE__*/ _interop_require_default(require("./divider.js"));
const _dom = require("./utils/dom.js");
const _listcssmistica = require("./list.css-mistica.js");
const _imagecssmistica = require("./image.css-mistica.js");
const _skincontractcssmistica = require("./skins/skin-contract.css-mistica.js");
const _css = require("./utils/css.js");
const _iconbutton = require("./icon-button.js");
const _screenreaderonly = /*#__PURE__*/ _interop_require_default(require("./screen-reader-only.js"));
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
const Ue = (e, a)=>typeof e == "function" ? e == null ? void 0 : e({
        centerY: a
    }) : a ? /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
        style: {
            display: "flex",
            alignItems: "center",
            height: "100%"
        },
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
            children: e
        })
    }) : e, Ye = (param)=>{
    let { withChevron: e, headline: a, headlineRef: i, extraRef: l, title: d, titleAs: b, titleLinesMax: x, subtitle: R, subtitleLinesMax: L, description: f, descriptionLinesMax: M, detail: h, asset: X, danger: k, badge: S, right: w, rightRef: u, extra: I, labelId: W, disabled: g, control: y } = param;
    const V = (0, _themevariantcontext.useIsInverseOrMediaVariant)(), B = [
        a,
        d,
        R,
        f,
        I
    ].filter(Boolean).length === 1;
    return /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", {
        className: _listcssmistica.content,
        id: W,
        children: [
            X && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                className: (0, _classnames.default)(_listcssmistica.assetContainer, {
                    [_listcssmistica.center]: B,
                    [_listcssmistica.disabled]: g
                }),
                "aria-hidden": !0,
                "data-testid": "asset",
                children: /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                    className: _listcssmistica.asset,
                    style: (0, _css.applyCssVars)({
                        color: k ? V ? _skincontractcssmistica.vars.colors.textErrorInverse : _skincontractcssmistica.vars.colors.textError : V ? _skincontractcssmistica.vars.colors.textPrimaryInverse : _skincontractcssmistica.vars.colors.textPrimary,
                        [_imagecssmistica.vars.mediaBorderRadius]: _skincontractcssmistica.vars.borderRadii.mediaSmall
                    }),
                    children: X
                })
            }),
            /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", {
                className: (0, _classnames.default)(_listcssmistica.rowBody, {
                    [_listcssmistica.disabled]: g
                }),
                style: {
                    justifyContent: B ? "center" : "flex-start"
                },
                children: [
                    /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text3, {
                        regular: !0,
                        color: k ? _skincontractcssmistica.vars.colors.textError : _skincontractcssmistica.vars.colors.textPrimary,
                        truncate: x,
                        hyphens: "auto",
                        as: b,
                        dataAttributes: {
                            testid: "title"
                        },
                        children: d
                    }),
                    a && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                        ref: i,
                        style: {
                            order: -1,
                            paddingBottom: 4
                        },
                        children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text1, {
                            regular: !0,
                            color: _skincontractcssmistica.vars.colors.textPrimary,
                            hyphens: "auto",
                            dataAttributes: {
                                testid: "headline"
                            },
                            children: a
                        })
                    }),
                    R && /* @__PURE__ */ (0, _jsxruntime.jsx)(_box.default, {
                        paddingTop: 2,
                        children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text2, {
                            regular: !0,
                            color: _skincontractcssmistica.vars.colors.textPrimary,
                            truncate: L,
                            hyphens: "auto",
                            dataAttributes: {
                                testid: "subtitle"
                            },
                            children: R
                        })
                    }),
                    f && /* @__PURE__ */ (0, _jsxruntime.jsx)(_box.default, {
                        paddingTop: 2,
                        children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text2, {
                            regular: !0,
                            color: _skincontractcssmistica.vars.colors.textSecondary,
                            truncate: M,
                            hyphens: "auto",
                            dataAttributes: {
                                testid: "description"
                            },
                            children: f
                        })
                    }),
                    I && /* @__PURE__ */ (0, _jsxruntime.jsx)(_box.default, {
                        ref: l,
                        paddingTop: 2,
                        dataAttributes: {
                            testid: "slot"
                        },
                        children: I
                    })
                ]
            }),
            S && /* @__PURE__ */ (0, _jsxruntime.jsx)(_box.default, {
                paddingLeft: 16,
                children: /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                    className: (0, _classnames.default)(_listcssmistica.badge, {
                        [_listcssmistica.disabled]: g
                    }),
                    children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_badge.default, {
                        value: S === !0 ? void 0 : S
                    })
                })
            }),
            (h || w || e || y) && /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", {
                className: (0, _classnames.default)(_listcssmistica.rightContent, {
                    [_listcssmistica.rightRestrictedWidth]: !!h
                }),
                children: [
                    h && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                        className: (0, _classnames.default)(_listcssmistica.detail, {
                            [_listcssmistica.disabled]: g
                        }),
                        children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text2, {
                            regular: !0,
                            color: _skincontractcssmistica.vars.colors.textSecondary,
                            hyphens: "auto",
                            dataAttributes: {
                                testid: "detail"
                            },
                            children: h
                        })
                    }),
                    w && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                        className: (0, _classnames.default)({
                            [_listcssmistica.detailRight]: !!h,
                            [_listcssmistica.disabled]: g
                        }),
                        ref: u,
                        "data-testid": "endSlot",
                        children: Ue(w, B)
                    }),
                    e && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                        style: {
                            paddingLeft: h || w ? 4 : 0
                        },
                        className: (0, _classnames.default)(_listcssmistica.center, {
                            [_listcssmistica.disabled]: g
                        }),
                        "data-testid": "chevron",
                        children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_iconchevronrightfilled.default, {
                            size: 16,
                            color: V ? _skincontractcssmistica.vars.colors.inverse : _skincontractcssmistica.vars.colors.neutralMedium
                        })
                    }),
                    y && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                        style: {
                            paddingLeft: h || w ? 8 : 0
                        },
                        className: _listcssmistica.center,
                        children: y
                    })
                ]
            })
        ]
    });
}, Ze = (param)=>{
    let { value: e, defaultValue: a, onChange: i } = param;
    const l = e !== void 0, [d, b] = _react.useState(!!a);
    return [
        l ? !!e : d,
        ()=>{
            l || b(!d), i == null || i(l ? !e : !d);
        }
    ];
}, _e = (e)=>[
        "switch",
        "checkbox",
        "radioValue",
        "iconButton"
    ].some((a)=>e[a] !== void 0), de = /*#__PURE__*/ _react.forwardRef((e, a)=>{
    var ee, te;
    const i = _react.useId(), l = (0, _themevariantcontext.useIsInverseOrMediaVariant)(), { asset: d, headline: b, title: x, titleAs: R, titleLinesMax: L, subtitle: f, subtitleLinesMax: M, description: h, descriptionLinesMax: X, detail: k, danger: S, badge: w, role: u, touchableRole: I, extra: W, withChevron: g, dataAttributes: y, right: V, "aria-label": U, tabIndex: B } = e, [ce, se] = _react.useState(""), [he, ue] = _react.useState(""), [me, be] = _react.useState(""), fe = [
        x,
        ce,
        f,
        h,
        he,
        k,
        me
    ].filter(Boolean).join(" "), O = U !== null && U !== void 0 ? U : e.href || e.to ? fe : void 0, ve = (0, _radiobutton.useRadioContext)(), v = e.disabled || e.radioValue !== void 0 && ve.disabled, j = !v && !l, F = !v && l, Y = _e(e), E = !!e.onPress || !!e.href || !!e.to, xe = Y ? !1 : g !== null && g !== void 0 ? g : E, Z = {
        href: e.href,
        newTab: e.newTab,
        loadOnTop: e.loadOnTop,
        to: e.to,
        fullPageOnWebView: e.fullPageOnWebView,
        replace: e.replace,
        onNavigate: e.onNavigate,
        onPress: e.onPress,
        trackingEvent: e.trackingEvent,
        "aria-label": O,
        "aria-labelledby": e["aria-labelledby"],
        "aria-description": e["aria-description"],
        "aria-describedby": e["aria-describedby"],
        "aria-current": e["aria-current"]
    }, [_, $] = Ze(e.switch || e.checkbox || {}), C = (r)=>/* @__PURE__ */ (0, _jsxruntime.jsx)(Ye, {
            asset: d,
            headline: b,
            headlineRef: (n)=>{
                n && se(n.textContent || "");
            },
            title: x,
            titleAs: R,
            subtitle: f,
            description: h,
            badge: w,
            titleLinesMax: L,
            subtitleLinesMax: M,
            descriptionLinesMax: X,
            detail: k,
            danger: S,
            right: V,
            rightRef: (n)=>{
                n && be(n.innerText || n.textContent || "");
            },
            control: r == null ? void 0 : r.control,
            role: r == null ? void 0 : r.role,
            extra: W,
            extraRef: (n)=>{
                n && ue(n.innerText || n.textContent || "");
            },
            labelId: r == null ? void 0 : r.labelId,
            disabled: v,
            withChevron: xe
        });
    if (E && !Y) return /* @__PURE__ */ (0, _jsxruntime.jsx)(_touchable.BaseTouchable, _object_spread_props(_object_spread({
        ref: a,
        className: (0, _classnames.default)(_listcssmistica.rowContent, {
            [_listcssmistica.touchableBackground]: j,
            [_listcssmistica.touchableBackgroundInverse]: F,
            [_listcssmistica.pointer]: !v
        })
    }, Z), {
        role: I,
        dataAttributes: y,
        disabled: v,
        tabIndex: B,
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_box.default, {
            paddingX: 16,
            "aria-hidden": !!e.to || !!e.href || void 0,
            children: C({
                role: u
            })
        })
    }));
    const H = (r)=>/* @__PURE__ */ (0, _jsxruntime.jsxs)("div", _object_spread_props(_object_spread({
            className: _listcssmistica.dualActionContainer,
            ref: a
        }, (0, _dom.getPrefixedDataAttributes)(y)), {
            children: [
                /* @__PURE__ */ (0, _jsxruntime.jsx)(_touchable.BaseTouchable, _object_spread_props(_object_spread({
                    disabled: v
                }, Z), {
                    role: I,
                    className: (0, _classnames.default)(_listcssmistica.dualActionLeft, {
                        [_listcssmistica.touchableBackground]: j,
                        [_listcssmistica.touchableBackgroundInverse]: F
                    }),
                    tabIndex: B,
                    children: C({
                        labelId: i,
                        role: u
                    })
                })),
                /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                    className: _listcssmistica.dualActionDivider
                }),
                r
            ]
        })), P = (r, n)=>/* @__PURE__ */ (0, _jsxruntime.jsx)("div", _object_spread_props(_object_spread({
            className: (0, _classnames.default)(_listcssmistica.rowContent, {
                [_listcssmistica.touchableBackground]: j && n,
                [_listcssmistica.touchableBackgroundInverse]: F && n,
                [_listcssmistica.pointer]: !v && n
            }),
            ref: a
        }, (0, _dom.getPrefixedDataAttributes)(y)), {
            children: r
        }));
    if (e.switch || e.checkbox) {
        var _ref, _ref1;
        const r = e.switch ? _switchcomponent.default : _checkbox.default, n = (_ref1 = (_ref = (ee = e.switch) == null ? void 0 : ee.name) !== null && _ref !== void 0 ? _ref : (te = e.checkbox) == null ? void 0 : te.name) !== null && _ref1 !== void 0 ? _ref1 : i;
        return E ? H(/* @__PURE__ */ (0, _jsxruntime.jsx)(r, {
            disabled: v,
            name: n,
            checked: _,
            "aria-label": O,
            "aria-labelledby": i,
            onChange: $,
            render: (param)=>{
                let { controlElement: z } = param;
                return /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                    className: _listcssmistica.dualActionRight,
                    children: z
                });
            }
        })) : P(/* @__PURE__ */ (0, _jsxruntime.jsx)(r, {
            disabled: v,
            name: n,
            checked: _,
            "aria-label": O,
            "aria-labelledby": i,
            onChange: $,
            render: (param)=>{
                let { controlElement: z, labelId: ge } = param;
                return /* @__PURE__ */ (0, _jsxruntime.jsx)(_box.default, {
                    paddingX: 16,
                    role: u,
                    children: C({
                        labelId: ge,
                        control: /* @__PURE__ */ (0, _jsxruntime.jsx)(_stack.default, {
                            space: "around",
                            children: z
                        })
                    })
                });
            }
        }), !0);
    }
    if (e.radioValue) return E ? H(/* @__PURE__ */ (0, _jsxruntime.jsx)(_radiobutton.default, {
        value: e.radioValue,
        "aria-label": O,
        "aria-labelledby": i,
        render: (param)=>{
            let { controlElement: r } = param;
            return /* @__PURE__ */ (0, _jsxruntime.jsx)(_stack.default, {
                space: "around",
                children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_box.default, {
                    paddingX: 16,
                    children: r
                })
            });
        }
    })) : P(/* @__PURE__ */ (0, _jsxruntime.jsx)(_radiobutton.default, {
        value: e.radioValue,
        "aria-label": O,
        "aria-labelledby": i,
        render: (param)=>{
            let { controlElement: r } = param;
            return /* @__PURE__ */ (0, _jsxruntime.jsx)(_box.default, {
                paddingX: 16,
                role: u,
                children: C({
                    labelId: i,
                    control: /* @__PURE__ */ (0, _jsxruntime.jsx)(_stack.default, {
                        space: "around",
                        children: r
                    })
                })
            });
        }
    }), !0);
    if (e.iconButton) return E ? H(/* @__PURE__ */ (0, _jsxruntime.jsx)(_box.default, {
        padding: 16,
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_stack.default, {
            space: "around",
            children: e.iconButton.Icon ? /* @__PURE__ */ (0, _jsxruntime.jsx)(_iconbutton.IconButton, _object_spread_props(_object_spread({}, e.iconButton), {
                disabled: e.disabled
            })) : /* @__PURE__ */ (0, _jsxruntime.jsx)(_iconbutton.ToggleIconButton, _object_spread_props(_object_spread({}, e.iconButton), {
                disabled: e.disabled
            }))
        })
    })) : P(/* @__PURE__ */ (0, _jsxruntime.jsx)(_box.default, {
        paddingX: 16,
        children: C({
            labelId: i,
            control: /* @__PURE__ */ (0, _jsxruntime.jsx)(_stack.default, {
                space: "around",
                children: e.iconButton.Icon ? /* @__PURE__ */ (0, _jsxruntime.jsx)(_iconbutton.IconButton, _object_spread_props(_object_spread({}, e.iconButton), {
                    disabled: e.disabled,
                    role: u
                })) : /* @__PURE__ */ (0, _jsxruntime.jsx)(_iconbutton.ToggleIconButton, _object_spread_props(_object_spread({}, e.iconButton), {
                    disabled: e.disabled,
                    role: u
                }))
            })
        })
    }));
    const p = !!e["aria-label"];
    return /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", _object_spread_props(_object_spread({
        className: (0, _classnames.default)(_listcssmistica.rowContent, _listcssmistica.rowContentPadding),
        role: u
    }, (0, _dom.getPrefixedDataAttributes)(y)), {
        ref: a,
        tabIndex: B,
        children: [
            /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                "aria-hidden": p,
                children: C({
                    role: u
                })
            }),
            p && /* @__PURE__ */ (0, _jsxruntime.jsx)(_screenreaderonly.default, {
                className: _listcssmistica.screenReaderOnly,
                children: /* @__PURE__ */ (0, _jsxruntime.jsx)("span", {
                    children: e["aria-label"]
                })
            })
        ]
    }));
}), yt = /*#__PURE__*/ _react.forwardRef((_param, l)=>{
    var { dataAttributes: e, role: a = "listitem" } = _param, i = _object_without_properties(_param, [
        "dataAttributes",
        "role"
    ]);
    return /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
        role: a,
        className: _listcssmistica.row,
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)(de, _object_spread_props(_object_spread({}, i), {
            ref: l,
            dataAttributes: _object_spread({
                "component-name": "Row",
                testid: "Row"
            }, e)
        }))
    });
}), Rt = (param)=>{
    let { children: e, ariaLabelledby: a, role: i = "list", "aria-live": l = "off", "aria-atomic": d = !1, dataAttributes: b } = param;
    const x = _react.Children.toArray(e).filter(Boolean), R = x.length - 1;
    return /* @__PURE__ */ (0, _jsxruntime.jsx)("div", _object_spread_props(_object_spread({
        role: i,
        "aria-labelledby": a,
        "aria-live": l,
        "aria-atomic": d
    }, (0, _dom.getPrefixedDataAttributes)(b, "RowList")), {
        children: x.map((L, f)=>/* @__PURE__ */ (0, _jsxruntime.jsxs)(_react.Fragment, {
                children: [
                    L,
                    f < R && /* @__PURE__ */ (0, _jsxruntime.jsx)(_box.default, {
                        paddingX: 16,
                        children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_divider.default, {})
                    })
                ]
            }, f))
    }));
}, wt = /*#__PURE__*/ _react.forwardRef((_param, i)=>{
    var { dataAttributes: e } = _param, a = _object_without_properties(_param, [
        "dataAttributes"
    ]);
    return /* @__PURE__ */ (0, _jsxruntime.jsx)(_boxed.InternalBoxed, {
        overflow: "visible",
        className: _listcssmistica.boxed,
        variant: a.isInverse ? "inverse" : "default",
        ref: i,
        dataAttributes: _object_spread({
            "component-name": "BoxedRow",
            testid: "BoxedRow"
        }, e),
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)(de, _object_spread({}, a))
    });
}), Bt = (param)=>{
    let { children: e, ariaLabelledby: a, role: i = "list", dataAttributes: l, "aria-live": d = "off", "aria-atomic": b = !1 } = param;
    return /* @__PURE__ */ (0, _jsxruntime.jsx)(_stack.default, {
        space: 16,
        role: i,
        "aria-labelledby": a,
        "aria-live": d,
        "aria-atomic": b,
        dataAttributes: _object_spread({
            "component-name": "BoxedRowList",
            testid: "BoxedRowList"
        }, l),
        children: e
    });
};
