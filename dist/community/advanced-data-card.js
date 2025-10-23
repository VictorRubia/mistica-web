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
    AdvancedDataCard: function() {
        return Er;
    },
    default: function() {
        return $r;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _boxed = require("../boxed.js");
const _stack = /*#__PURE__*/ _interop_require_default(require("../stack.js"));
const _advanceddatacardcssmistica = require("./advanced-data-card.css-mistica.js");
const _imagecssmistica = require("../image.css-mistica.js");
const _divider = /*#__PURE__*/ _interop_require_default(require("../divider.js"));
const _text = require("../text.js");
const _textprops = require("../text-props.js");
const _skincontractcssmistica = require("../skins/skin-contract.css-mistica.js");
const _box = /*#__PURE__*/ _interop_require_default(require("../box.js"));
const _touchable = /*#__PURE__*/ _interop_require_default(require("../touchable.js"));
const _classnames = /*#__PURE__*/ _interop_require_default(require("classnames"));
const _card = require("../card.js");
const _hooks = require("../hooks.js");
const _dom = require("../utils/dom.js");
const _inline = /*#__PURE__*/ _interop_require_default(require("../inline.js"));
const _css = require("../utils/css.js");
const _tag = /*#__PURE__*/ _interop_require_default(require("../tag.js"));
const _headings = require("../utils/headings.js");
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
const jr = (param)=>{
    let { headline: d, headlineRef: h, pretitle: n, pretitleAs: s, pretitleLinesMax: l, title: o, titleAs: c, titleLinesMax: f, subtitle: a, subtitleLinesMax: i, description: e, descriptionLinesMax: N } = param;
    const { textPresets: m } = (0, _hooks.useTheme)();
    return /** using flex instead of nested Stacks, this way we can rearrange texts so the DOM structure makes more sense for screen reader users */ /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", {
        className: _advanceddatacardcssmistica.flexColumn,
        children: [
            (0, _headings.isBiggerHeading)(c, s) ? /* @__PURE__ */ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
                children: [
                    o && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                        style: {
                            paddingBottom: a || e ? 4 : 0
                        },
                        children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text, _object_spread_props(_object_spread({}, _textprops.text4), {
                            truncate: f,
                            weight: m.cardTitle.weight,
                            as: c,
                            hyphens: "auto",
                            children: o
                        }))
                    }),
                    d && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                        ref: h,
                        style: {
                            order: -2,
                            paddingBottom: n || o || a || e ? 4 : 0
                        },
                        children: typeof d == "string" ? /* @__PURE__ */ (0, _jsxruntime.jsx)(_tag.default, {
                            type: "promo",
                            children: d
                        }) : d
                    }),
                    n && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                        style: {
                            order: -1,
                            paddingBottom: o || a || e ? 4 : 0
                        },
                        children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text2, {
                            truncate: l,
                            as: s,
                            regular: !0,
                            hyphens: "auto",
                            children: n
                        })
                    })
                ]
            }) : /* @__PURE__ */ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
                children: [
                    n && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                        style: {
                            paddingBottom: o || a || e ? 4 : 0
                        },
                        children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text2, {
                            truncate: l,
                            as: s,
                            regular: !0,
                            hyphens: "auto",
                            children: n
                        })
                    }),
                    d && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                        ref: h,
                        style: {
                            order: -1,
                            paddingBottom: n || o || a || e ? 4 : 0
                        },
                        children: typeof d == "string" ? /* @__PURE__ */ (0, _jsxruntime.jsx)(_tag.default, {
                            type: "promo",
                            children: d
                        }) : d
                    }),
                    o && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                        style: {
                            paddingBottom: a || e ? 4 : 0
                        },
                        children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text, _object_spread_props(_object_spread({}, _textprops.text4), {
                            truncate: f,
                            weight: m.cardTitle.weight,
                            as: c,
                            hyphens: "auto",
                            children: o
                        }))
                    })
                ]
            }),
            a && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                style: {
                    paddingBottom: e ? 4 : 0
                },
                children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text2, {
                    truncate: i,
                    as: "div",
                    regular: !0,
                    hyphens: "auto",
                    children: a
                })
            }),
            e && /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text2, {
                truncate: N,
                as: "div",
                regular: !0,
                color: _skincontractcssmistica.vars.colors.textSecondary,
                hyphens: "auto",
                children: e
            })
        ]
    });
}, Ar = (param)=>{
    let { button: d, footerImage: h, footerText: n, footerTextLinesMax: s, buttonLink: l } = param;
    const o = !!d, c = !!h, f = !!n, a = !!l, i = o && (c || f) && a, e = a && !i ? "178px" : "";
    return /* @__PURE__ */ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
        children: [
            /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                className: _advanceddatacardcssmistica.divider,
                children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_divider.default, {})
            }),
            /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", {
                className: (0, _classnames.default)(_advanceddatacardcssmistica.actions, _advanceddatacardcssmistica.actionsVariants[i ? "mobile" : "default"]),
                children: [
                    o && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                        className: (0, _classnames.default)(_advanceddatacardcssmistica.marginRightButton, _advanceddatacardcssmistica.buttonMobile),
                        children: d
                    }),
                    /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", {
                        className: (0, _classnames.default)(_advanceddatacardcssmistica.footerDirection, i ? _advanceddatacardcssmistica.marginRightAuto : _advanceddatacardcssmistica.withPaddingTop),
                        children: [
                            c && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                className: _advanceddatacardcssmistica.footerImage,
                                children: /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                    style: (0, _css.applyCssVars)({
                                        [_imagecssmistica.vars.mediaBorderRadius]: _skincontractcssmistica.vars.borderRadii.mediaSmall
                                    }),
                                    children: h
                                })
                            }),
                            f && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                style: {
                                    maxWidth: e
                                },
                                className: _advanceddatacardcssmistica.footerText,
                                children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text2, {
                                    truncate: s,
                                    regular: !0,
                                    children: n
                                })
                            })
                        ]
                    }),
                    a && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                        className: (0, _classnames.default)(_advanceddatacardcssmistica.adjustButtonLink, i ? _advanceddatacardcssmistica.button : _advanceddatacardcssmistica.buttonMobile),
                        children: l
                    })
                ]
            })
        ]
    });
}, Er = /*#__PURE__*/ _react.forwardRef((_param, K)=>{
    var { stackingGroup: d, headline: h, pretitle: n, pretitleAs: s, pretitleLinesMax: l, title: o, titleAs: c = "h3", titleLinesMax: f, subtitle: a, subtitleLinesMax: i, description: e, descriptionLinesMax: N, extra: m, extraDividerPadding: b = 24, noExtraDivider: k = !1, button: B, footerImage: T, footerText: C, footerTextLinesMax: q, buttonLink: w, dataAttributes: z, actions: u, "aria-label": J, onClose: I } = _param, p = _object_without_properties(_param, [
        "stackingGroup",
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
        "extraDividerPadding",
        "noExtraDivider",
        "button",
        "footerImage",
        "footerText",
        "footerTextLinesMax",
        "buttonLink",
        "dataAttributes",
        "actions",
        "aria-label",
        "onClose"
    ]);
    const y = !!p.href || !!p.onPress || !!p.to, M = {
        button: B,
        footerImage: T,
        footerText: C,
        footerTextLinesMax: q,
        buttonLink: w
    }, R = !!B || !!T || !!C || !!w, D = !!(m != null && m.length), Q = ((u == null ? void 0 : u.length) || 0) + (I ? 1 : 0), { text: H, ref: U } = (0, _card.useInnerText)(), { text: F, ref: Z } = (0, _card.useInnerText)(), S = J || ((0, _headings.isBiggerHeading)(c, s) ? [
        o,
        H,
        n,
        a,
        e,
        F
    ] : [
        n,
        H,
        o,
        a,
        e,
        F
    ]).filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, _jsxruntime.jsxs)("section", _object_spread_props(_object_spread({
        className: _advanceddatacardcssmistica.container
    }, (0, _dom.getPrefixedDataAttributes)(z, "AdvancedDataCard")), {
        ref: K,
        "aria-label": y ? void 0 : S,
        children: [
            /* @__PURE__ */ (0, _jsxruntime.jsxs)(_boxed.Boxed, {
                className: _advanceddatacardcssmistica.dataCard,
                width: "100%",
                height: "100%",
                minHeight: _advanceddatacardcssmistica.MIN_HEIGHT,
                children: [
                    /* @__PURE__ */ (0, _jsxruntime.jsxs)(_touchable.default, _object_spread_props(_object_spread({
                        maybe: !0
                    }, p), {
                        "aria-label": y ? S : void 0,
                        className: _advanceddatacardcssmistica.touchable,
                        children: [
                            y && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                className: _advanceddatacardcssmistica.touchableCardHoverOverlay
                            }),
                            /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                className: (0, _classnames.default)(_advanceddatacardcssmistica.cardContentStyle, !R && !D ? _advanceddatacardcssmistica.minHeight : ""),
                                "aria-hidden": y,
                                children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_box.default, {
                                    paddingTop: 8,
                                    children: /* @__PURE__ */ (0, _jsxruntime.jsxs)(_inline.default, {
                                        space: 0,
                                        children: [
                                            /* @__PURE__ */ (0, _jsxruntime.jsxs)(_stack.default, {
                                                space: 8,
                                                children: [
                                                    d,
                                                    /* @__PURE__ */ (0, _jsxruntime.jsx)(jr, {
                                                        headline: h,
                                                        headlineRef: U,
                                                        pretitle: n,
                                                        pretitleAs: s,
                                                        pretitleLinesMax: l,
                                                        title: o,
                                                        titleAs: c,
                                                        titleLinesMax: f,
                                                        subtitle: a,
                                                        subtitleLinesMax: i,
                                                        description: e,
                                                        descriptionLinesMax: N
                                                    })
                                                ]
                                            }),
                                            !d && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                                style: (0, _css.applyCssVars)({
                                                    [_advanceddatacardcssmistica.vars.topActionsCount]: String(Q)
                                                }),
                                                className: _advanceddatacardcssmistica.topActionsWithoutIcon
                                            })
                                        ]
                                    })
                                })
                            }),
                            /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                style: {
                                    flexGrow: 1
                                }
                            }),
                            D && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                className: _advanceddatacardcssmistica.extra,
                                ref: Z,
                                children: m.map((L, j)=>/* @__PURE__ */ (0, _jsxruntime.jsxs)("div", {
                                        children: [
                                            /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                                className: _advanceddatacardcssmistica.paddingX,
                                                children: L
                                            }),
                                            j + 1 !== m.length && /* @__PURE__ */ (0, _jsxruntime.jsx)(_box.default, {
                                                paddingY: b,
                                                children: !k && /* @__PURE__ */ (0, _jsxruntime.jsx)(_divider.default, {})
                                            })
                                        ]
                                    }, j))
                            })
                        ]
                    })),
                    R && /* @__PURE__ */ (0, _jsxruntime.jsx)(Ar, _object_spread({}, M))
                ]
            }),
            /* @__PURE__ */ (0, _jsxruntime.jsx)(_card.CardActionsGroup, {
                actions: u,
                onClose: I
            })
        ]
    }));
}), $r = Er;
