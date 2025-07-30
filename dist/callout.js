"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return lr;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _stack = /*#__PURE__*/ _interop_require_default(require("./stack.js"));
const _inline = /*#__PURE__*/ _interop_require_default(require("./inline.js"));
const _box = /*#__PURE__*/ _interop_require_default(require("./box.js"));
const _hooks = require("./hooks.js");
const _themevariantcontext = require("./theme-variant-context.js");
const _text = require("./text.js");
const _iconcloseregular = /*#__PURE__*/ _interop_require_default(require("./generated/mistica-icons/icon-close-regular.js"));
const _iconbutton = require("./icon-button.js");
const _classnames = /*#__PURE__*/ _interop_require_default(require("classnames"));
const _buttongroup = /*#__PURE__*/ _interop_require_default(require("./button-group.js"));
const _calloutcssmistica = require("./callout.css-mistica.js");
const _imagecssmistica = require("./image.css-mistica.js");
const _skincontractcssmistica = require("./skins/skin-contract.css-mistica.js");
const _dom = require("./utils/dom.js");
const _css = require("./utils/css.js");
const _texttokens = require("./text-tokens.js");
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
const q = (param)=>{
    let { title: r, titleAs: s = "h2", description: u, asset: i, onClose: a, closeButtonLabel: p, button: l, secondaryButton: m, buttonLink: n, "aria-label": f, dataAttributes: b, role: h } = param;
    const x = (0, _themevariantcontext.useThemeVariant)(), { texts: B, t: g } = (0, _hooks.useTheme)(), o = typeof r == "object", v = o && (r == null ? void 0 : r.as) || s, T = o ? r == null ? void 0 : r["aria-label"] : void 0, I = o ? r == null ? void 0 : r.text : r;
    return /* @__PURE__ */ (0, _jsxruntime.jsx)("section", _object_spread_props(_object_spread({
        className: (0, _classnames.default)(_calloutcssmistica.container, _calloutcssmistica.background[x]),
        style: (0, _css.applyCssVars)({
            [_imagecssmistica.vars.mediaBorderRadius]: _skincontractcssmistica.vars.borderRadii.mediaSmall
        }),
        "aria-label": f,
        role: h
    }, (0, _dom.getPrefixedDataAttributes)(b, "Callout")), {
        children: /* @__PURE__ */ (0, _jsxruntime.jsxs)(_themevariantcontext.ThemeVariant, {
            isInverse: !1,
            children: [
                i && /* @__PURE__ */ (0, _jsxruntime.jsx)(_box.default, {
                    paddingRight: 16,
                    dataAttributes: {
                        testid: "asset"
                    },
                    children: i
                }),
                /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", {
                    className: _calloutcssmistica.content,
                    children: [
                        /* @__PURE__ */ (0, _jsxruntime.jsxs)(_stack.default, {
                            space: 16,
                            children: [
                                /* @__PURE__ */ (0, _jsxruntime.jsxs)(_inline.default, {
                                    fullWidth: !0,
                                    alignItems: "flex-start",
                                    space: "between",
                                    children: [
                                        /* @__PURE__ */ (0, _jsxruntime.jsxs)(_stack.default, {
                                            space: 4,
                                            children: [
                                                /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text3, {
                                                    as: v,
                                                    regular: !0,
                                                    dataAttributes: {
                                                        testid: "title"
                                                    },
                                                    "aria-label": T,
                                                    children: I
                                                }),
                                                /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text2, {
                                                    as: "p",
                                                    regular: !0,
                                                    color: _skincontractcssmistica.vars.colors.textSecondary,
                                                    dataAttributes: {
                                                        testid: "description"
                                                    },
                                                    children: u
                                                })
                                            ]
                                        }),
                                        a && // Create empty div in order to fill space that iconButton occupies.
                                        // Without this, the content's vertical alignment can be affected
                                        /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                            className: _calloutcssmistica.closeButtonContainerSize
                                        })
                                    ]
                                }),
                                (l || m || n) && /* @__PURE__ */ (0, _jsxruntime.jsx)(_buttongroup.default, {
                                    primaryButton: l,
                                    secondaryButton: m,
                                    link: n
                                })
                            ]
                        }),
                        a && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                            className: _calloutcssmistica.closeButtonContainer,
                            children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_iconbutton.IconButton, {
                                dataAttributes: {
                                    testid: "closeButton"
                                },
                                small: !0,
                                bleedY: !0,
                                bleedRight: !0,
                                Icon: _iconcloseregular.default,
                                onPress: a,
                                "aria-label": p || B.closeButtonLabel || g(_texttokens.closeButtonLabel)
                            })
                        })
                    ]
                })
            ]
        })
    }));
}, lr = q;
