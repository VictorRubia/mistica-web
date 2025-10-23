"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return O;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _box = /*#__PURE__*/ _interop_require_default(require("./box.js"));
const _text = require("./text.js");
const _themevariantcontext = require("./theme-variant-context.js");
const _css = require("./utils/css.js");
const _dom = require("./utils/dom.js");
const _tagcssmistica = require("./tag.css-mistica.js");
const _skincontractcssmistica = require("./skins/skin-contract.css-mistica.js");
const _classnames = /*#__PURE__*/ _interop_require_default(require("classnames"));
const _hooks = require("./hooks.js");
const _badge = /*#__PURE__*/ _interop_require_default(require("./badge.js"));
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
const { colors: e } = _skincontractcssmistica.vars, j = (param)=>{
    let { Icon: t, children: a, dataAttributes: u, type: d = "promo", badge: n, backgroundColor: m, textColor: v } = param;
    const { textPresets: l } = (0, _hooks.useTheme)(), g = (0, _themevariantcontext.useThemeVariant)(), s = g === "inverse", o = n === !0 ? void 0 : n || 0;
    if (!a) return null;
    const x = {
        // [textColor, inverseTextColor, backgroundColor, backgroundColorInverse]
        promo: [
            e.tagTextPromo,
            e.tagTextPromoInverse,
            e.tagBackgroundPromo,
            e.tagBackgroundPromoInverse
        ],
        info: [
            e.tagTextInfo,
            e.tagTextInfoInverse,
            e.tagBackgroundInfo,
            e.tagBackgroundInfoInverse
        ],
        active: [
            e.tagTextActive,
            e.tagTextActiveInverse,
            e.tagBackgroundActive,
            e.tagBackgroundActiveInverse
        ],
        inactive: [
            e.tagTextInactive,
            e.tagTextInactiveInverse,
            // TODO: remove logic for alternative variant (https://jira.tid.es/browse/WEB-1803)
            g === "alternative" ? e.neutralLowAlternative : e.tagBackgroundInactive,
            e.tagBackgroundInactiveInverse
        ],
        success: [
            e.tagTextSuccess,
            e.tagTextSuccessInverse,
            e.tagBackgroundSuccess,
            e.tagBackgroundSuccessInverse
        ],
        warning: [
            e.tagTextWarning,
            e.tagTextWarningInverse,
            e.tagBackgroundWarning,
            e.tagBackgroundWarningInverse
        ],
        error: [
            e.tagTextError,
            e.tagTextErrorInverse,
            e.tagBackgroundError,
            e.tagBackgroundErrorInverse
        ]
    }, [T, f, I, p] = x[d], c = v || (s ? f : T), k = m || (s ? p : I);
    return /* @__PURE__ */ (0, _jsxruntime.jsxs)("span", _object_spread_props(_object_spread({}, (0, _dom.getPrefixedDataAttributes)(u, "Tag")), {
        className: (0, _classnames.default)(_tagcssmistica.tag),
        style: {
            paddingLeft: t ? 8 : 12,
            paddingRight: o !== 0 ? 8 : 12,
            background: k
        },
        children: [
            t && /* @__PURE__ */ (0, _jsxruntime.jsx)(_box.default, {
                paddingRight: 4,
                children: /* @__PURE__ */ (0, _jsxruntime.jsx)(t, {
                    color: c,
                    size: (0, _css.pxToRem)(16),
                    className: _tagcssmistica.icon
                })
            }),
            /* @__PURE__ */ (0, _jsxruntime.jsxs)(_themevariantcontext.ThemeVariant, {
                isInverse: !1,
                children: [
                    /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text, {
                        color: c,
                        size: 14,
                        lineHeight: 20,
                        weight: l.indicator.weight,
                        truncate: !0,
                        children: a
                    }),
                    o !== 0 && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                        className: _tagcssmistica.badge,
                        children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_badge.default, {
                            value: o
                        })
                    })
                ]
            })
        ]
    }));
}, O = j;
