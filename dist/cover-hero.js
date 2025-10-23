"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Bt;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _responsivelayout = /*#__PURE__*/ _interop_require_default(require("./responsive-layout.js"));
const _box = /*#__PURE__*/ _interop_require_default(require("./box.js"));
const _buttongroup = /*#__PURE__*/ _interop_require_default(require("./button-group.js"));
const _stack = /*#__PURE__*/ _interop_require_default(require("./stack.js"));
const _text = require("./text.js");
const _skincontractcssmistica = require("./skins/skin-contract.css-mistica.js");
const _coverherocssmistica = require("./cover-hero.css-mistica.js");
const _classnames = /*#__PURE__*/ _interop_require_default(require("classnames"));
const _css = require("./utils/css.js");
const _imagecssmistica = require("./image.css-mistica.js");
const _gridlayout = /*#__PURE__*/ _interop_require_default(require("./grid-layout.js"));
const _coverheromedia = require("./cover-hero-media.js");
const _dom = require("./utils/dom.js");
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
const nt = (e)=>!e || e === "auto" ? 0 : typeof e == "number" ? e : ({
        "1:1": 1,
        "16:9": 16 / 9,
        "7:10": 7 / 10,
        "4:3": 9 / 10
    })[e], dt = /*#__PURE__*/ _react.forwardRef((_param, I)=>{
    var { headline: e, pretitle: p, pretitleLinesMax: j, pretitleAs: h, title: d, titleLinesMax: G, titleAs: f = "h1", description: v, descriptionLinesMax: L, extra: b, sideExtra: o, button: M, secondaryButton: R, buttonLink: V, minHeight: z, aspectRatio: c = "auto", variant: g, centered: i, noPaddingY: x, dataAttributes: D, "aria-label": F } = _param, s = _object_without_properties(_param, [
        "headline",
        "pretitle",
        "pretitleLinesMax",
        "pretitleAs",
        "title",
        "titleLinesMax",
        "titleAs",
        "description",
        "descriptionLinesMax",
        "extra",
        "sideExtra",
        "button",
        "secondaryButton",
        "buttonLink",
        "minHeight",
        "aspectRatio",
        "variant",
        "centered",
        "noPaddingY",
        "dataAttributes",
        "aria-label"
    ]);
    const a = s.backgroundVideo || s.backgroundImage, q = a ? "none" : s.background || ({
        default: _skincontractcssmistica.vars.colors.background,
        inverse: _skincontractcssmistica.vars.colors.backgroundBrand,
        alternative: _skincontractcssmistica.vars.colors.backgroundAlternative,
        media: "none"
    })[g !== null && g !== void 0 ? g : "default"], m = a ? "0 0 15px rgba(0, 0, 0, 0.4)" : void 0, l = p ? /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text3, {
        regular: !0,
        as: h,
        truncate: j,
        textShadow: m,
        dataAttributes: {
            testid: "pretitle"
        },
        children: p
    }) : void 0, k = d ? /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text8, {
        as: f,
        truncate: G,
        textShadow: m,
        dataAttributes: {
            testid: "title"
        },
        children: d
    }) : void 0, C = e ? /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
        style: {
            order: -1
        },
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_box.default, {
            dataAttributes: {
                testid: "headline"
            },
            paddingBottom: {
                desktop: 8,
                tablet: 8,
                mobile: 16
            },
            children: e
        })
    }) : void 0, y = /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", {
        className: _coverherocssmistica.mainContent,
        children: [
            /* @__PURE__ */ (0, _jsxruntime.jsxs)(_stack.default, {
                space: 16,
                children: [
                    /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                        className: _coverherocssmistica.flexColumn,
                        children: (0, _headings.isBiggerHeading)(f, h) ? /* @__PURE__ */ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
                            children: [
                                k,
                                C,
                                l && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                    className: _coverherocssmistica.sixColumns,
                                    style: {
                                        paddingBottom: d ? 8 : 0,
                                        order: -1
                                    },
                                    children: l
                                })
                            ]
                        }) : /* @__PURE__ */ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
                            children: [
                                l && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                    className: _coverherocssmistica.sixColumns,
                                    style: {
                                        paddingBottom: d ? 8 : 0
                                    },
                                    children: l
                                }),
                                C,
                                k
                            ]
                        })
                    }),
                    v && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                        className: _coverherocssmistica.sixColumns,
                        children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text3, {
                            as: "p",
                            regular: !0,
                            truncate: L,
                            color: a ? _skincontractcssmistica.vars.colors.textPrimary : _skincontractcssmistica.vars.colors.textSecondary,
                            textShadow: m,
                            dataAttributes: {
                                testid: "description"
                            },
                            children: v
                        })
                    })
                ]
            }),
            b && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                "data-testid": "slot",
                children: b
            })
        ]
    }), B = c && c !== "auto";
    return /* @__PURE__ */ (0, _jsxruntime.jsx)("section", _object_spread_props(_object_spread({}, (0, _dom.getPrefixedDataAttributes)(D, "CoverHero")), {
        "aria-label": F,
        ref: I,
        className: (0, _classnames.default)(_coverherocssmistica.coverHeroContainer, {
            [_coverherocssmistica.minHeight]: !x,
            [_coverherocssmistica.withAspectRatio]: B
        }),
        style: _object_spread({
            minHeight: B ? "auto" : z,
            boxSizing: "border-box",
            background: q
        }, (0, _css.applyCssVars)({
            [_coverherocssmistica.vars.aspectRatio]: String(nt(c)),
            [_imagecssmistica.vars.mediaBorderRadius]: "0px"
        })),
        children: /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", {
            className: (0, _classnames.default)(_coverherocssmistica.coverHero, {
                [_coverherocssmistica.centered]: i,
                [_coverherocssmistica.hasSideExtra]: o
            }),
            children: [
                a ? /* @__PURE__ */ (0, _jsxruntime.jsx)(_coverheromedia.CoverHeroMedia, _object_spread({}, s)) : null,
                /* @__PURE__ */ (0, _jsxruntime.jsx)(_responsivelayout.default, {
                    variant: a ? "media" : g,
                    children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_box.default, {
                        paddingY: x ? 0 : {
                            desktop: 56,
                            tablet: 56,
                            mobile: 24
                        },
                        children: /* @__PURE__ */ (0, _jsxruntime.jsxs)(_stack.default, {
                            space: 24,
                            children: [
                                i && !o ? /* @__PURE__ */ (0, _jsxruntime.jsx)(_gridlayout.default, {
                                    template: "8",
                                    children: y
                                }) : /* @__PURE__ */ (0, _jsxruntime.jsx)(_gridlayout.default, {
                                    template: "8+4",
                                    collapseBreakpoint: "mobile",
                                    left: y,
                                    right: /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                        className: _coverherocssmistica.sideExtra,
                                        "data-testid": "sideSlot",
                                        children: o
                                    })
                                }),
                                /* @__PURE__ */ (0, _jsxruntime.jsx)(_buttongroup.default, {
                                    align: {
                                        mobile: i ? "center" : "left",
                                        tablet: i && !o ? "center" : "left",
                                        desktop: i && !o ? "center" : "left"
                                    },
                                    primaryButton: M,
                                    secondaryButton: R,
                                    link: V
                                })
                            ]
                        })
                    })
                })
            ]
        })
    }));
}), Bt = dt;
