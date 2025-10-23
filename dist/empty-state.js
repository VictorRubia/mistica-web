"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Z;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _classnames = /*#__PURE__*/ _interop_require_default(require("classnames"));
const _themevariantcontext = require("./theme-variant-context.js");
const _button = require("./button.js");
const _hooks = require("./hooks.js");
const _stack = /*#__PURE__*/ _interop_require_default(require("./stack.js"));
const _text = require("./text.js");
const _buttongroup = /*#__PURE__*/ _interop_require_default(require("./button-group.js"));
const _emptystatecssmistica = require("./empty-state.css-mistica.js");
const _skincontractcssmistica = require("./skins/skin-contract.css-mistica.js");
const _aspectratiosupport = require("./utils/aspect-ratio-support.js");
const _dom = require("./utils/dom.js");
const _css = require("./utils/css.js");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
const w = (param)=>{
    let { title: l, titleAs: d = "h1", description: p, button: r, buttonLink: f, largeImageUrl: a, imageUrl: o, asset: m, "aria-label": g, dataAttributes: u } = param;
    const { isDarkMode: h } = (0, _hooks.useTheme)(), s = (0, _themevariantcontext.useIsInverseOrMediaVariant)(), v = o ? /* @__PURE__ */ (0, _jsxruntime.jsx)("img", {
        "data-testid": "image",
        className: _emptystatecssmistica.smallImage,
        alt: "",
        src: o
    }) : void 0, y = _object_spread_props(_object_spread({}, (r == null ? void 0 : r.type) === _button.ButtonPrimary ? {
        primaryButton: r
    } : {
        secondaryButton: r
    }), {
        link: f
    });
    return /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", _object_spread_props(_object_spread({
        className: (0, _classnames.default)(_emptystatecssmistica.container, s ? _emptystatecssmistica.inverseBorder : _emptystatecssmistica.border),
        style: (0, _css.applyCssVars)({
            [_emptystatecssmistica.vars.backgroundColor]: s && !h ? _skincontractcssmistica.vars.colors.backgroundBrand : _skincontractcssmistica.vars.colors.backgroundContainer
        }),
        "aria-label": g,
        role: "region"
    }, (0, _dom.getPrefixedDataAttributes)(u, "EmptyState")), {
        children: [
            /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                style: {
                    flex: 1
                },
                children: /* @__PURE__ */ (0, _jsxruntime.jsxs)(_stack.default, {
                    space: 24,
                    className: a ? _emptystatecssmistica.contentVariants.largeImage : _emptystatecssmistica.contentVariants.default,
                    children: [
                        v !== null && v !== void 0 ? v : m && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                            "data-testid": "asset",
                            className: _emptystatecssmistica.assetContainer,
                            children: m
                        }),
                        /* @__PURE__ */ (0, _jsxruntime.jsxs)(_stack.default, {
                            space: 16,
                            children: [
                                /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text6, {
                                    as: d,
                                    dataAttributes: {
                                        testid: "title"
                                    },
                                    children: l
                                }),
                                /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text3, {
                                    regular: !0,
                                    as: "p",
                                    color: s ? _skincontractcssmistica.vars.colors.inverse : _skincontractcssmistica.vars.colors.textSecondary,
                                    dataAttributes: {
                                        testid: "description"
                                    },
                                    children: p
                                })
                            ]
                        }),
                        /* @__PURE__ */ (0, _jsxruntime.jsx)(_buttongroup.default, _object_spread({}, y))
                    ]
                })
            }),
            /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                style: {
                    flex: 1,
                    position: "relative"
                },
                children: a && /* @__PURE__ */ (0, _jsxruntime.jsx)(_aspectratiosupport.AspectRatioContainer, {
                    aspectRatio: 16 / 9,
                    className: _emptystatecssmistica.largeImageContainer,
                    height: "100%",
                    width: "100%",
                    children: /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                        "data-testid": "image",
                        className: _emptystatecssmistica.largeImage,
                        style: {
                            backgroundImage: `url(${a})`
                        }
                    })
                })
            })
        ]
    }));
}, Z = w;
