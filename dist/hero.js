"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return fe;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _classnames = /*#__PURE__*/ _interop_require_default(require("classnames"));
const _hooks = require("./hooks.js");
const _text = require("./text.js");
const _gridlayout = /*#__PURE__*/ _interop_require_default(require("./grid-layout.js"));
const _box = /*#__PURE__*/ _interop_require_default(require("./box.js"));
const _stack = /*#__PURE__*/ _interop_require_default(require("./stack.js"));
const _buttongroup = /*#__PURE__*/ _interop_require_default(require("./button-group.js"));
const _skincontractcssmistica = require("./skins/skin-contract.css-mistica.js");
const _herocssmistica = require("./hero.css-mistica.js");
const _imagecssmistica = require("./image.css-mistica.js");
const _carousel = require("./carousel.js");
const _dom = require("./utils/dom.js");
const _themevariantcontext = require("./theme-variant-context.js");
const _css = require("./utils/css.js");
const _responsivelayout = require("./responsive-layout.js");
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
const w = {
    default: _skincontractcssmistica.vars.colors.background,
    alternative: _skincontractcssmistica.vars.colors.backgroundAlternative,
    brand: _skincontractcssmistica.vars.colors.backgroundBrand,
    "brand-secondary": _skincontractcssmistica.vars.colors.backgroundBrandSecondary,
    none: "transparent"
}, I = (param)=>{
    let { children: r, isInverse: t, backgroundColor: a } = param;
    return /* @__PURE__ */ (0, _jsxruntime.jsx)(_responsivelayout.InternalResponsiveLayout, {
        isInverse: t,
        className: _herocssmistica.layout,
        innerDivClassName: _herocssmistica.layout,
        shouldExpandWhenNested: !0,
        backgroundColor: a !== null && a !== void 0 ? a : "transparent",
        children: r
    });
}, x = (param)=>{
    let { headline: r, title: t, titleAs: a = "h1", pretitle: i, pretitleAs: c, description: o, descriptionLinesMax: m, extra: p, button: f, secondaryButton: u, buttonLink: s } = param;
    const v = t ? /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text8, {
        as: a,
        dataAttributes: {
            testid: "title"
        },
        children: t
    }) : void 0, n = i ? /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text3, {
        as: c,
        regular: !0,
        dataAttributes: {
            testid: "pretitle"
        },
        children: i
    }) : void 0, h = r ? /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
        "data-testid": "headline",
        style: {
            paddingBottom: i || t || o ? 16 : 0,
            order: -1
        },
        children: r
    }) : void 0;
    return /* @__PURE__ */ (0, _jsxruntime.jsxs)("section", {
        className: _herocssmistica.contentContainer,
        children: [
            /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", {
                children: [
                    /* @__PURE__ */ (0, _jsxruntime.jsxs)(_stack.default, {
                        space: 16,
                        children: [
                            /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                className: _herocssmistica.flexColumn,
                                children: (0, _headings.isBiggerHeading)(a, c) ? /* @__PURE__ */ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
                                    children: [
                                        v,
                                        h,
                                        n && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                            style: {
                                                paddingBottom: t ? 8 : 0,
                                                order: -1
                                            },
                                            children: n
                                        })
                                    ]
                                }) : /* @__PURE__ */ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
                                    children: [
                                        n && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                            style: {
                                                paddingBottom: t ? 8 : 0
                                            },
                                            children: n
                                        }),
                                        h,
                                        v
                                    ]
                                })
                            }),
                            o && /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text3, {
                                as: "p",
                                regular: !0,
                                color: _skincontractcssmistica.vars.colors.textSecondary,
                                truncate: m,
                                dataAttributes: {
                                    testid: "description"
                                },
                                children: o
                            })
                        ]
                    }),
                    p && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                        "data-testid": "slot",
                        children: p
                    })
                ]
            }),
            (f || s) && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                className: _herocssmistica.actions,
                children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_buttongroup.default, {
                    primaryButton: f,
                    secondaryButton: u,
                    link: s
                })
            })
        ]
    });
}, X = /*#__PURE__*/ _react.forwardRef((_param, p)=>{
    var { height: r, background: t = "default", media: a, desktopMediaPosition: i = "left", dataAttributes: c, noPaddingY: o } = _param, m = _object_without_properties(_param, [
        "height",
        "background",
        "media",
        "desktopMediaPosition",
        "dataAttributes",
        "noPaddingY"
    ]);
    const { isTabletOrSmaller: f } = (0, _hooks.useScreenSize)(), u = (0, _carousel.useSlideshowContext)(), s = !!(u != null && u.withBullets), v = (0, _themevariantcontext.useIsInverseOrMediaVariant)(), n = t === "none" ? v : t === "brand" || t === "brand-secondary";
    if (f) return /* @__PURE__ */ (0, _jsxruntime.jsx)(_responsivelayout.ResetResponsiveLayout, {
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
            style: (0, _css.applyCssVars)({
                [_imagecssmistica.vars.mediaBorderRadius]: "0px"
            }),
            children: /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", _object_spread_props(_object_spread({}, (0, _dom.getPrefixedDataAttributes)(c, "Hero")), {
                ref: p,
                style: _object_spread({}, r === "100vh" ? {
                    maxHeight: "-webkit-fill-available"
                } : {}, (0, _css.applyCssVars)({
                    [_herocssmistica.vars.height]: typeof r == "number" ? `${r}px` : r !== null && r !== void 0 ? r : "100%",
                    [_imagecssmistica.vars.mediaBorderRadius]: "0px"
                })),
                className: (0, _classnames.default)(_herocssmistica.container, _herocssmistica.containerMobile, {
                    [_herocssmistica.containerMinHeight]: !o
                }),
                children: [
                    a,
                    /* @__PURE__ */ (0, _jsxruntime.jsx)(I, {
                        isInverse: n,
                        backgroundColor: w[t],
                        children: /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                            className: _herocssmistica.expandedContent,
                            children: /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                style: {
                                    paddingTop: 24,
                                    paddingBottom: s ? 48 : o ? 0 : 24
                                },
                                className: _herocssmistica.layout,
                                children: /* @__PURE__ */ (0, _jsxruntime.jsx)(x, _object_spread({}, m))
                            })
                        })
                    })
                ]
            }))
        })
    });
    const h = i === "left" ? a : /* @__PURE__ */ (0, _jsxruntime.jsx)(_box.default, {
        paddingRight: 24,
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)(x, _object_spread({}, m))
    }), L = i === "right" ? a : /* @__PURE__ */ (0, _jsxruntime.jsx)(_box.default, {
        paddingLeft: 24,
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)(x, _object_spread({}, m))
    });
    return /* @__PURE__ */ (0, _jsxruntime.jsx)("div", _object_spread_props(_object_spread({}, (0, _dom.getPrefixedDataAttributes)(c, "Hero")), {
        ref: p,
        style: _object_spread_props(_object_spread({}, r === "100vh" ? {
            maxHeight: "-webkit-fill-available"
        } : {}, (0, _css.applyCssVars)({
            [_herocssmistica.vars.height]: typeof r == "number" ? `${r}px` : r !== null && r !== void 0 ? r : "100%",
            [_imagecssmistica.vars.mediaBorderRadius]: _skincontractcssmistica.vars.borderRadii.container
        })), {
            background: w[t]
        }),
        className: _herocssmistica.hero,
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)(I, {
            isInverse: n,
            children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_gridlayout.default, {
                template: "6+6",
                left: /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                    style: {
                        paddingTop: o ? 0 : 56,
                        paddingBottom: o && !s ? 0 : 56
                    },
                    className: (0, _classnames.default)(_herocssmistica.container, _herocssmistica.containerDesktop, {
                        [_herocssmistica.containerMinHeight]: !o
                    }),
                    children: h
                }),
                right: /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                    style: {
                        paddingTop: o ? 0 : 56,
                        paddingBottom: o && !s ? 0 : 56
                    },
                    className: (0, _classnames.default)(_herocssmistica.container, _herocssmistica.containerDesktop),
                    children: L
                })
            })
        })
    }));
}), fe = X;
